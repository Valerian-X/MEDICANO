/**
 * Medicano Firebase Auth + Firestore sync (compat SDK)
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

  /** Firestore docs max ~1MB — strip large base64 images from cloud payload */
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

  async function applyRemotePayload(remote) {
    if (!remote || !remote.payload) return;
    const localUpdated = (window.data && window.data.updatedAt) || '';
    const remoteUpdated = remote.updatedAt || '';
    if (remoteUpdated && localUpdated && remoteUpdated <= localUpdated) return;
    try {
      applyingRemote = true;
      const payload = typeof remote.payload === 'string' ? JSON.parse(remote.payload) : remote.payload;
      if (payload && typeof payload === 'object') {
        // Preserve local product images if cloud omitted them
        if (window.data && Array.isArray(window.data.products) && Array.isArray(payload.products)) {
          const localById = {};
          window.data.products.forEach(function (p) { localById[p.id] = p; });
          payload.products.forEach(function (p) {
            if ((!p.image || p._imageOmittedForSync) && localById[p.id] && localById[p.id].image) {
              p.image = localById[p.id].image;
            }
            delete p._imageOmittedForSync;
          });
        }
        window.data = payload;
        if (typeof window.saveDataLocalOnly === 'function') window.saveDataLocalOnly();
        else localStorage.setItem('medicano_data_v1', JSON.stringify(payload));
        if (typeof window.refreshAllViews === 'function') window.refreshAllViews();
      }
    } catch (e) {
      console.error('apply remote', e);
    } finally {
      setTimeout(function () { applyingRemote = false; }, 500);
    }
  }

  async function pushNow(force) {
    if (!ready || !auth || !auth.currentUser || !db) return { ok: false, reason: 'not-ready' };
    if (applyingRemote && !force) return { ok: false, reason: 'applying-remote' };
    status('Syncing…', 'syncing');
    try {
      const payload = cloudSafePayload(window.data);
      if (!payload) return { ok: false, reason: 'no-data' };
      payload.updatedAt = new Date().toISOString();
      if (window.data) window.data.updatedAt = payload.updatedAt;
      await workspaceRef(auth.currentUser.uid).set({
        updatedAt: payload.updatedAt,
        email: auth.currentUser.email || '',
        payload: payload
      }, { merge: true });
      status(auth.currentUser.email || 'Synced', 'online');
      return { ok: true };
    } catch (e) {
      console.error('sync push failed', e);
      var code = (e && e.code) ? e.code : '';
      var msg = (e && e.message) ? e.message : String(e);
      if (code.indexOf('permission') >= 0 || /permission|insufficient/i.test(msg)) {
        status('Sync failed: Firestore rules', 'error');
      } else if (/size|too big|exceeds/i.test(msg)) {
        status('Sync failed: data too large', 'error');
      } else if (!navigator.onLine) {
        status('Sync failed: offline', 'error');
      } else {
        status('Sync failed', 'error');
      }
      return { ok: false, error: msg, code: code };
    }
  }

  function schedulePush() {
    if (!ready || !auth || !auth.currentUser) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(function () { pushNow(false); }, 1200);
  }

  async function pullAndListen(uid) {
    status('Syncing…', 'syncing');
    try {
      const ref = workspaceRef(uid);
      const snap = await ref.get();
      if (snap.exists) await applyRemotePayload(snap.data());
      else await pushNow(true);
      if (unsubSnap) unsubSnap();
      unsubSnap = ref.onSnapshot(function (s) {
        if (!s.exists || applyingRemote) return;
        applyRemotePayload(s.data());
      }, function (err) {
        console.error('snapshot error', err);
        status('Sync failed', 'error');
      });
      status((auth.currentUser && auth.currentUser.email) || 'Synced', 'online');
    } catch (e) {
      console.error('pull failed', e);
      var msg = (e && e.message) ? e.message : String(e);
      if (/permission/i.test(msg)) status('Sync failed: Firestore rules', 'error');
      else status('Sync failed', 'error');
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
          status(user.email || 'Signed in', 'online');
          pullAndListen(user.uid);
        } else {
          if (unsubSnap) { unsubSnap(); unsubSnap = null; }
          status('Signed out — local data', null);
        }
        if (typeof window.onMedicanoAuthChanged === 'function') window.onMedicanoAuthChanged(user);
      });
      status('Firebase ready', null);
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
    schedulePush: schedulePush
  };

  window.MedicanoCloud = api;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
