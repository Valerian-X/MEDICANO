/**
 * Medicano Firebase — shared org workspace + staff pending approval
 * Paths:
 *   orgs/{orgId}/workspace/main     — live company data
 *   orgs/{orgId}/members/{uid}      — { role, email, name }
 *   orgs/{orgId}/pending/{id}       — staff change proposals
 *   users/{uid}/profile             — { orgId, role }
 */
(function () {
  const cfg = window.MEDICANO_FIREBASE || {};
  const ready = !!(cfg.enabled && cfg.apiKey && cfg.apiKey !== 'YOUR_API_KEY');

  let auth = null;
  let db = null;
  let unsubSnap = null;
  let unsubPending = null;
  let pushTimer = null;
  let applyingRemote = false;
  let initTried = false;

  let orgId = null;
  let memberRole = null; // 'admin' | 'staff'
  let pendingCache = [];

  function status(text, mode) {
    const t = document.getElementById('auth-status-text');
    const d = document.getElementById('sync-dot');
    const btn = document.getElementById('auth-action-btn');
    if (t) t.textContent = text;
    if (d) {
      d.classList.remove('online', 'syncing', 'error');
      if (mode) d.classList.add(mode);
    }
    if (btn) {
      if (auth && auth.currentUser) btn.textContent = 'Sign out';
      else btn.textContent = ready ? 'Sign in to sync' : 'Cloud sync (setup)';
    }
    if (typeof window.updateConnectionBadge === 'function') {
      try { window.updateConnectionBadge(); } catch (e) {}
    }
    const roleEl = document.getElementById('team-role-label');
    if (roleEl) {
      if (auth && auth.currentUser && memberRole) {
        roleEl.textContent = memberRole === 'admin' ? 'Role: Admin' : 'Role: Staff (changes need approval)';
      } else roleEl.textContent = '';
    }
  }

  function profileRef(uid) {
    return db.collection('users').doc(uid).collection('meta').doc('profile');
  }
  function legacyWorkspaceRef(uid) {
    return db.collection('users').doc(uid).collection('workspace').doc('main');
  }
  function orgWorkspaceRef(oid) {
    return db.collection('orgs').doc(oid).collection('workspace').doc('main');
  }
  function memberRef(oid, uid) {
    return db.collection('orgs').doc(oid).collection('members').doc(uid);
  }
  function pendingCol(oid) {
    return db.collection('orgs').doc(oid).collection('pending');
  }

  function cloudSafePayload(src) {
    const data = JSON.parse(JSON.stringify(src || {}));
    if (Array.isArray(data.products)) {
      data.products = data.products.map(function (p) {
        const copy = Object.assign({}, p);
        if (copy.image && String(copy.image).length > 2000) {
          copy.image = '';
          copy._imageOmittedForSync = true;
        }
        return copy;
      });
    }
    // Usernames stay per-device — never publish into shared workspace
    if (data.userProfile) {
      data.userProfile = Object.assign({}, data.userProfile);
      delete data.userProfile.username;
    }
    return data;
  }

  function countRecords(d) {
    if (!d) return 0;
    return (d.clients || []).length
      + (d.quotes || []).length
      + (d.invoices || []).length
      + (d.products || []).length
      + (d.calendarEvents || []).length
      + (d.reportTableRows || []).length;
  }

  function summarizePayload(d) {
    return countRecords(d) + ' records · updated ' + ((d && d.updatedAt) || '').slice(0, 19).replace('T', ' ');
  }

  function applyRemotePayload(remote, opts) {
    opts = opts || {};
    const force = !!opts.force;
    if (!remote || remote.payload == null) return Promise.resolve(false);

    const localSrc = (typeof window.getAppData === 'function' ? window.getAppData() : window.data) || {};
    const localUpdated = localSrc.updatedAt || '';
    const remoteUpdated = remote.updatedAt || (remote.payload && remote.payload.updatedAt) || '';

    if (!force && remoteUpdated && localUpdated && remoteUpdated < localUpdated) {
      return Promise.resolve(false);
    }

    return new Promise(function (resolve) {
      try {
        applyingRemote = true;
        var payload = remote.payload;
        if (typeof payload === 'string') payload = JSON.parse(payload);
        if (!payload || typeof payload !== 'object') {
          resolve(false);
          return;
        }

        var localSrc2 = (typeof window.getAppData === 'function' ? window.getAppData() : window.data);
        // Always keep this device's username — never take username from cloud
        var localName = '';
        try {
          localName = (localSrc2 && localSrc2.userProfile && localSrc2.userProfile.username) || '';
          if (!localName) localName = localStorage.getItem('medicano_username_local') || '';
        } catch (eN) {}
        if (!payload.userProfile) payload.userProfile = {};
        payload.userProfile.username = localName || '';

        if (localSrc2 && Array.isArray(localSrc2.products) && Array.isArray(payload.products)) {
          var localById = {};
          localSrc2.products.forEach(function (p) { localById[p.id] = p; });
          payload.products.forEach(function (p) {
            if ((!p.image || p._imageOmittedForSync) && localById[p.id] && localById[p.id].image) {
              p.image = localById[p.id].image;
            }
            delete p._imageOmittedForSync;
          });
        }

        if (typeof window.applyCloudData === 'function') {
          window.applyCloudData(payload);
        } else {
          window.data = payload;
          localStorage.setItem('medicano_data_v1', JSON.stringify(payload));
        }
        resolve(true);
      } catch (e) {
        console.error('apply remote', e);
        resolve(false);
      } finally {
        setTimeout(function () { applyingRemote = false; }, 400);
      }
    });
  }

  async function ensureOrgForUser(user) {
    const pref = profileRef(user.uid);
    const psnap = await pref.get();
    if (psnap.exists && psnap.data().orgId) {
      orgId = psnap.data().orgId;
      memberRole = psnap.data().role || 'staff';
      // verify member doc
      const m = await memberRef(orgId, user.uid).get();
      if (m.exists && m.data().role) memberRole = m.data().role;
      return { orgId: orgId, role: memberRole };
    }

    // Create new org — this user becomes admin
    const oid = 'org_' + user.uid.slice(0, 10) + '_' + Date.now().toString(36);
    orgId = oid;
    memberRole = 'admin';

    await db.collection('orgs').doc(oid).set({
      name: 'Medicano workspace',
      createdAt: new Date().toISOString(),
      createdBy: user.uid
    });
    await memberRef(oid, user.uid).set({
      role: 'admin',
      email: user.email || '',
      joinedAt: new Date().toISOString()
    });
    await pref.set({
      orgId: oid,
      role: 'admin',
      email: user.email || '',
      updatedAt: new Date().toISOString()
    }, { merge: true });

    // Migrate legacy personal workspace if any
    try {
      const legacy = await legacyWorkspaceRef(user.uid).get();
      if (legacy.exists && legacy.data().payload) {
        await orgWorkspaceRef(oid).set(legacy.data(), { merge: false });
      }
    } catch (e) {
      console.warn('legacy migrate', e);
    }

    return { orgId: oid, role: 'admin' };
  }

  async function pushWorkspace() {
    if (!ready || !auth || !auth.currentUser || !db || !orgId) {
      return { ok: false, reason: 'not-ready' };
    }
    if (applyingRemote) return { ok: false, reason: 'applying-remote' };

    const src = (typeof window.getAppData === 'function' ? window.getAppData() : window.data) || window.data;
    const payload = cloudSafePayload(src);
    if (!payload) return { ok: false, reason: 'no-data' };
    payload.updatedAt = new Date().toISOString();
    if (src) src.updatedAt = payload.updatedAt;
    if (typeof window.saveDataLocalOnly === 'function') window.saveDataLocalOnly();

    const meta = {
      updatedAt: payload.updatedAt,
      email: auth.currentUser.email || '',
      recordCount: countRecords(payload),
      payload: payload
    };

    // Admin → live workspace
    if (memberRole === 'admin') {
      status('Publishing…', 'syncing');
      try {
        await orgWorkspaceRef(orgId).set(meta, { merge: false });
        status('Synced · Admin · ' + (auth.currentUser.email || ''), 'online');
        return { ok: true, mode: 'published' };
      } catch (e) {
        console.error(e);
        status(permissionMsg(e), 'error');
        return { ok: false, error: e };
      }
    }

    // Staff → pending proposal (does not update live workspace)
    status('Submitting for approval…', 'syncing');
    try {
      const id = 'p_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 7);
      await pendingCol(orgId).doc(id).set({
        id: id,
        status: 'pending',
        byUid: auth.currentUser.uid,
        byEmail: auth.currentUser.email || '',
        createdAt: new Date().toISOString(),
        summary: summarizePayload(payload),
        recordCount: countRecords(payload),
        payload: payload
      });
      status('Submitted · waiting for admin · ' + (auth.currentUser.email || ''), 'online');
      if (typeof window.renderApprovalsPanel === 'function') {
        try { window.renderApprovalsPanel(); } catch (e2) {}
      }
      return { ok: true, mode: 'pending', id: id };
    } catch (e) {
      console.error(e);
      status(permissionMsg(e), 'error');
      return { ok: false, error: e };
    }
  }

  function permissionMsg(e) {
    var msg = (e && e.message) ? e.message : String(e);
    if (/permission/i.test(msg)) return 'Sync failed: Firestore rules';
    if (/size|too big|exceeds/i.test(msg)) return 'Sync failed: data too large';
    if (typeof navigator !== 'undefined' && !navigator.onLine) return 'Sync failed: offline';
    return 'Sync failed';
  }

  function schedulePush() {
    if (!ready || !auth || !auth.currentUser || !orgId) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushWorkspace(); }, 900);
  }

  async function pullAndListen(user) {
    status('Loading team workspace…', 'syncing');
    try {
      await ensureOrgForUser(user);
      const ref = orgWorkspaceRef(orgId);
      const snap = await ref.get();
      if (snap.exists) {
        await applyRemotePayload(snap.data(), { force: true });
        status(
          (memberRole === 'admin' ? 'Synced · Admin · ' : 'Synced · Staff · ') + (user.email || ''),
          'online'
        );
      } else if (memberRole === 'admin') {
        await pushWorkspace();
      } else {
        status('Waiting for admin to publish data…', 'syncing');
      }

      if (unsubSnap) unsubSnap();
      unsubSnap = ref.onSnapshot(function (s) {
        if (!s.exists || applyingRemote) return;
        applyRemotePayload(s.data(), { force: false });
      }, function (err) {
        console.error(err);
        status('Sync failed', 'error');
      });

      listenPending();
      if (typeof window.renderTeamPanel === 'function') {
        try { window.renderTeamPanel(); } catch (e) {}
      }
    } catch (e) {
      console.error('pull failed', e);
      status(permissionMsg(e), 'error');
    }
  }

  function listenPending() {
    if (unsubPending) { unsubPending(); unsubPending = null; }
    if (!orgId) return;
    unsubPending = pendingCol(orgId)
      .where('status', '==', 'pending')
      .onSnapshot(function (qs) {
        pendingCache = [];
        qs.forEach(function (doc) {
          var d = doc.data();
          d.id = doc.id;
          pendingCache.push(d);
        });
        pendingCache.sort(function (a, b) {
          return String(b.createdAt || '').localeCompare(String(a.createdAt || ''));
        });
        if (typeof window.renderApprovalsPanel === 'function') {
          try { window.renderApprovalsPanel(); } catch (e) {}
        }
      }, function (err) {
        console.warn('pending listen', err);
      });
  }

  async function listMembers() {
    if (!orgId) return [];
    const qs = await db.collection('orgs').doc(orgId).collection('members').get();
    const out = [];
    qs.forEach(function (doc) {
      var d = doc.data();
      d.uid = doc.id;
      out.push(d);
    });
    return out;
  }

  async function inviteMemberByEmail(email, role) {
    if (memberRole !== 'admin') throw new Error('Only admin can invite.');
    email = String(email || '').trim().toLowerCase();
    if (!email) throw new Error('Enter an email.');
    role = role === 'admin' ? 'admin' : 'staff';
    // Staff must sign up first; admin links by creating a join code stored on org
    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    await db.collection('orgs').doc(orgId).collection('invites').doc(code).set({
      email: email,
      role: role,
      code: code,
      createdAt: new Date().toISOString(),
      createdBy: auth.currentUser.uid,
      used: false
    });
    return code;
  }

  async function joinWithCode(code) {
    code = String(code || '').trim().toUpperCase();
    if (!code || !auth.currentUser) throw new Error('Sign in and enter a code.');
    // Search invites — collection group not always enabled; scan known pattern via org invites requires orgId
    // Simpler: invites stored under each org; user pastes CODE and we use collectionGroup if available
    // Fallback: store join codes at top-level joinCodes/{code}
    const joinRef = db.collection('joinCodes').doc(code);
    const j = await joinRef.get();
    let invite = j.exists ? j.data() : null;
    if (!invite) {
      // try current org invites only
      if (orgId) {
        const inv = await db.collection('orgs').doc(orgId).collection('invites').doc(code).get();
        if (inv.exists) invite = inv.data();
      }
    }
    if (!invite || invite.used) throw new Error('Invalid or used invite code.');
    const oid = invite.orgId;
    const role = invite.role === 'admin' ? 'admin' : 'staff';
    await memberRef(oid, auth.currentUser.uid).set({
      role: role,
      email: auth.currentUser.email || invite.email || '',
      joinedAt: new Date().toISOString()
    });
    await profileRef(auth.currentUser.uid).set({
      orgId: oid,
      role: role,
      email: auth.currentUser.email || '',
      updatedAt: new Date().toISOString()
    }, { merge: true });
    await joinRef.set({ used: true, usedBy: auth.currentUser.uid }, { merge: true });
    if (invite.orgId) {
      try {
        await db.collection('orgs').doc(oid).collection('invites').doc(code).set({ used: true }, { merge: true });
      } catch (e) {}
    }
    orgId = oid;
    memberRole = role;
    await pullAndListen(auth.currentUser);
    return { orgId: oid, role: role };
  }

  /** Admin creates invite: write joinCodes/{code} + org invites */
  async function createInvite(email, role) {
    if (memberRole !== 'admin' || !orgId) throw new Error('Only admin can invite.');
    email = String(email || '').trim().toLowerCase();
    role = role === 'admin' ? 'admin' : 'staff';
    const code = Math.random().toString(36).slice(2, 8).toUpperCase();
    const body = {
      email: email,
      role: role,
      code: code,
      orgId: orgId,
      createdAt: new Date().toISOString(),
      createdBy: auth.currentUser.uid,
      used: false
    };
    await db.collection('joinCodes').doc(code).set(body);
    await db.collection('orgs').doc(orgId).collection('invites').doc(code).set(body);
    return code;
  }

  async function approvePending(id) {
    if (memberRole !== 'admin' || !orgId) throw new Error('Admin only.');
    const ref = pendingCol(orgId).doc(id);
    const snap = await ref.get();
    if (!snap.exists) throw new Error('Request not found.');
    const d = snap.data();
    if (d.status !== 'pending') throw new Error('Already handled.');
    const payload = d.payload;
    if (!payload) throw new Error('Empty proposal.');
    const updatedAt = new Date().toISOString();
    payload.updatedAt = updatedAt;
    await orgWorkspaceRef(orgId).set({
      updatedAt: updatedAt,
      email: auth.currentUser.email || '',
      recordCount: countRecords(payload),
      payload: payload,
      lastApprovedFrom: id,
      lastApprovedBy: auth.currentUser.uid
    }, { merge: false });
    await ref.set({
      status: 'approved',
      resolvedAt: updatedAt,
      resolvedBy: auth.currentUser.uid
    }, { merge: true });
    await applyRemotePayload({ updatedAt: updatedAt, payload: payload }, { force: true });
    status('Approved & published', 'online');
    return true;
  }

  async function rejectPending(id) {
    if (memberRole !== 'admin' || !orgId) throw new Error('Admin only.');
    await pendingCol(orgId).doc(id).set({
      status: 'rejected',
      resolvedAt: new Date().toISOString(),
      resolvedBy: auth.currentUser.uid
    }, { merge: true });
    status('Rejected proposal', 'online');
    return true;
  }

  async function syncNow() {
    if (!auth || !auth.currentUser) {
      status('Sign in to sync', 'error');
      return { ok: false };
    }
    status('Syncing…', 'syncing');
    try {
      if (!orgId) await ensureOrgForUser(auth.currentUser);
      const snap = await orgWorkspaceRef(orgId).get();
      if (snap.exists) {
        await applyRemotePayload(snap.data(), { force: true });
      }
      // Admin can also publish current local if desired
      if (memberRole === 'admin') {
        await pushWorkspace();
      }
      status(
        (memberRole === 'admin' ? 'Synced · Admin · ' : 'Synced · Staff · ') + (auth.currentUser.email || ''),
        'online'
      );
      return { ok: true };
    } catch (e) {
      console.error(e);
      status(permissionMsg(e), 'error');
      return { ok: false };
    }
  }

  function init() {
    if (initTried) return;
    initTried = true;
    if (!ready) {
      status('Local only — configure Firebase', null);
      window.MedicanoCloud = api;
      return;
    }
    if (typeof firebase === 'undefined' || !firebase.initializeApp) {
      status('Firebase SDK missing', 'error');
      window.MedicanoCloud = api;
      return;
    }
    try {
      if (!firebase.apps.length) firebase.initializeApp(cfg);
      auth = firebase.auth();
      db = firebase.firestore();
      auth.onAuthStateChanged(function (user) {
        if (user) {
          status('Signed in…', 'syncing');
          pullAndListen(user);
        } else {
          if (unsubSnap) { unsubSnap(); unsubSnap = null; }
          if (unsubPending) { unsubPending(); unsubPending = null; }
          orgId = null;
          memberRole = null;
          pendingCache = [];
          status('Signed out — local data', null);
        }
        if (typeof window.onMedicanoAuthChanged === 'function') window.onMedicanoAuthChanged(user);
      });
    } catch (e) {
      console.error(e);
      status('Firebase error', 'error');
    }
    window.MedicanoCloud = api;
  }

  const api = {
    isConfigured: function () { return ready && typeof firebase !== 'undefined'; },
    isSignedIn: function () { return !!(auth && auth.currentUser); },
    currentUser: function () { return (auth && auth.currentUser) || null; },
    getOrgId: function () { return orgId; },
    getRole: function () { return memberRole; },
    isAdmin: function () { return memberRole === 'admin'; },
    getPending: function () { return pendingCache.slice(); },
    signIn: function (email, password) {
      if (!ready) return Promise.reject(new Error('Firebase is not configured.'));
      if (!auth) return Promise.reject(new Error('Firebase Auth is not ready.'));
      return auth.signInWithEmailAndPassword(email, password);
    },
    signUp: function (email, password) {
      if (!ready) return Promise.reject(new Error('Firebase is not configured.'));
      if (!auth) return Promise.reject(new Error('Firebase Auth is not ready.'));
      return auth.createUserWithEmailAndPassword(email, password);
    },
    signOut: function () {
      if (unsubSnap) { unsubSnap(); unsubSnap = null; }
      if (unsubPending) { unsubPending(); unsubPending = null; }
      orgId = null;
      memberRole = null;
      return auth ? auth.signOut() : Promise.resolve();
    },
    pushNow: pushWorkspace,
    schedulePush: schedulePush,
    syncNow: syncNow,
    listMembers: listMembers,
    createInvite: createInvite,
    joinWithCode: joinWithCode,
    approvePending: approvePending,
    rejectPending: rejectPending
  };

  window.MedicanoCloud = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
