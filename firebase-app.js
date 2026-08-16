/**
 * Medicano Firebase Auth + Firestore sync (compat SDK)
 * On sign-in: always pull cloud workspace if it exists (force).
 * Local default data must not block a richer cloud copy.
 */
(function () {
  const cfg = window.MEDICANO_FIREBASE || {};
  const ready = !!(cfg.enabled && cfg.apiKey && cfg.apiKey !== 'YOUR_API_KEY');

  let auth = null;
  let db = null;
  let unsubSnap = null;
  let pushTimer = null;
  let applyingRemote = false;
  let initTried = false;
  let lastPullAt = 0;

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
  }

  function workspaceRef(uid) {
    return db.collection('users').doc(uid).collection('workspace').doc('main');
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
    return data;
  }

  function countRecords(d) {
    if (!d) return 0;
    return (d.clients || []).length
      + (d.quotes || []).length
      + (d.invoices || []).length
      + (d.products || []).length
      + (d.calendarEvents || []).length;
  }

  function applyRemotePayload(remote, opts) {
    opts = opts || {};
    const force = !!opts.force;
    if (!remote || remote.payload == null) return Promise.resolve(false);

    const localUpdated = (window.data && window.data.updatedAt) || '';
    const remoteUpdated = remote.updatedAt || (remote.payload && remote.payload.updatedAt) || '';

    // Snapshot updates: skip only if local is clearly newer AND not forced
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

        // Keep local product images when cloud stripped them
        if (window.data && Array.isArray(window.data.products) && Array.isArray(payload.products)) {
          var localById = {};
          window.data.products.forEach(function (p) { localById[p.id] = p; });
          payload.products.forEach(function (p) {
            if ((!p.image || p._imageOmittedForSync) && localById[p.id] && localById[p.id].image) {
              p.image = localById[p.id].image;
            }
            delete p._imageOmittedForSync;
          });
        }

        // Prefer local username if set
        if (window.data && window.data.userProfile && window.data.userProfile.username) {
          if (!payload.userProfile) payload.userProfile = {};
          if (!payload.userProfile.username) {
            payload.userProfile.username = window.data.userProfile.username;
          }
        }

        window.data = payload;
        if (typeof window.saveDataLocalOnly === 'function') window.saveDataLocalOnly();
        else localStorage.setItem('medicano_data_v1', JSON.stringify(payload));

        if (typeof window.refreshAllViews === 'function') window.refreshAllViews();
        else if (typeof window.renderDashboard === 'function') window.renderDashboard();

        lastPullAt = Date.now();
        resolve(true);
      } catch (e) {
        console.error('apply remote', e);
        resolve(false);
      } finally {
        setTimeout(function () { applyingRemote = false; }, 400);
      }
    });
  }

  async function pushNow(force) {
    if (!ready || !auth || !auth.currentUser || !db) return { ok: false, reason: 'not-ready' };
    if (applyingRemote && !force) return { ok: false, reason: 'applying-remote' };
    status('Uploading…', 'syncing');
    try {
      const payload = cloudSafePayload(window.data);
      if (!payload) return { ok: false, reason: 'no-data' };
      payload.updatedAt = new Date().toISOString();
      if (window.data) window.data.updatedAt = payload.updatedAt;
      if (typeof window.saveDataLocalOnly === 'function') window.saveDataLocalOnly();

      await workspaceRef(auth.currentUser.uid).set({
        updatedAt: payload.updatedAt,
        email: auth.currentUser.email || '',
        recordCount: countRecords(payload),
        payload: payload
      }, { merge: false }); // full replace of workspace doc

      status('Synced · ' + (auth.currentUser.email || ''), 'online');
      return { ok: true };
    } catch (e) {
      console.error('sync push failed', e);
      var code = (e && e.code) ? String(e.code) : '';
      var msg = (e && e.message) ? e.message : String(e);
      if (/permission/i.test(code + msg)) status('Sync failed: Firestore rules', 'error');
      else if (/size|too big|exceeds/i.test(msg)) status('Sync failed: data too large', 'error');
      else if (typeof navigator !== 'undefined' && !navigator.onLine) status('Sync failed: offline', 'error');
      else status('Sync failed', 'error');
      return { ok: false, error: msg, code: code };
    }
  }

  function schedulePush() {
    if (!ready || !auth || !auth.currentUser) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushNow(false); }, 800);
  }

  async function pullAndListen(uid) {
    status('Downloading…', 'syncing');
    try {
      const ref = workspaceRef(uid);
      const snap = await ref.get();
      if (snap.exists) {
        var remote = snap.data();
        // Always apply cloud copy on login / first pull for this session
        await applyRemotePayload(remote, { force: true });
        status('Synced · ' + ((auth.currentUser && auth.currentUser.email) || ''), 'online');
      } else {
        // Nothing in cloud yet — upload this device
        await pushNow(true);
      }

      if (unsubSnap) unsubSnap();
      unsubSnap = ref.onSnapshot(function (s) {
        if (!s.exists || applyingRemote) return;
        // Live updates from other devices
        applyRemotePayload(s.data(), { force: false });
      }, function (err) {
        console.error('snapshot error', err);
        status('Sync failed', 'error');
      });
    } catch (e) {
      console.error('pull failed', e);
      var msg = (e && e.message) ? e.message : String(e);
      if (/permission/i.test(msg)) status('Sync failed: Firestore rules', 'error');
      else status('Sync failed', 'error');
    }
  }

  /** Manual: pull then push so both devices converge */
  async function syncNow() {
    if (!auth || !auth.currentUser) {
      status('Sign in to sync', 'error');
      return { ok: false };
    }
    status('Syncing…', 'syncing');
    try {
      const ref = workspaceRef(auth.currentUser.uid);
      const snap = await ref.get();
      if (snap.exists) {
        var remote = snap.data();
        var remoteCount = remote.recordCount || countRecords(remote.payload);
        var localCount = countRecords(window.data);
        var remoteUpdated = remote.updatedAt || '';
        var localUpdated = (window.data && window.data.updatedAt) || '';

        // Prefer the side with more records, else newer timestamp
        if (remoteCount > localCount || (remoteCount === localCount && remoteUpdated >= localUpdated)) {
          await applyRemotePayload(remote, { force: true });
        } else {
          await pushNow(true);
        }
      } else {
        await pushNow(true);
      }
      status('Synced · ' + (auth.currentUser.email || ''), 'online');
      return { ok: true };
    } catch (e) {
      console.error(e);
      status('Sync failed', 'error');
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
          pullAndListen(user.uid);
        } else {
          if (unsubSnap) { unsubSnap(); unsubSnap = null; }
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
      return auth ? auth.signOut() : Promise.resolve();
    },
    pushNow: pushNow,
    schedulePush: schedulePush,
    syncNow: syncNow,
    pullAndListen: pullAndListen
  };

  window.MedicanoCloud = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
