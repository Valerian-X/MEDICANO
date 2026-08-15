/**
 * Medicano Firebase Auth + Firestore sync bridge
 * Exposes window.MedicanoCloud for app.js (classic script).
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot
} from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const cfg = window.MEDICANO_FIREBASE || {};
const ready = !!(cfg.enabled && cfg.apiKey && cfg.apiKey !== 'YOUR_API_KEY');

let app = null;
let auth = null;
let db = null;
let unsubSnap = null;
let pushTimer = null;
let applyingRemote = false;

function status(text, mode) {
  const t = document.getElementById('auth-status-text');
  const d = document.getElementById('sync-dot');
  const btn = document.getElementById('auth-action-btn');
  if (t) t.textContent = text;
  if (d) {
    d.classList.remove('online', 'syncing', 'error');
    if (mode) d.classList.add(mode);
  }
  if (btn && auth && auth.currentUser) {
    btn.textContent = 'Sign out';
  } else if (btn) {
    btn.textContent = ready ? 'Sign in to sync' : 'Cloud sync (setup)';
  }
}

async function init() {
  if (!ready) {
    status('Local only — configure Firebase', null);
    const hint = document.getElementById('auth-config-hint');
    if (hint) hint.classList.remove('hidden');
    window.MedicanoCloud = api;
    return;
  }
  try {
    app = initializeApp(cfg);
    auth = getAuth(app);
    db = getFirestore(app);
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        status(user.email || 'Signed in', 'online');
        await pullAndListen(user.uid);
      } else {
        if (unsubSnap) { unsubSnap(); unsubSnap = null; }
        status('Signed out — local data', null);
      }
      if (typeof window.onMedicanoAuthChanged === 'function') {
        window.onMedicanoAuthChanged(user);
      }
    });
    status('Firebase ready', null);
  } catch (e) {
    console.error(e);
    status('Firebase error', 'error');
  }
  window.MedicanoCloud = api;
}

function workspaceRef(uid) {
  return doc(db, 'users', uid, 'workspace', 'main');
}

async function pullAndListen(uid) {
  status('Syncing…', 'syncing');
  try {
    const ref = workspaceRef(uid);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const remote = snap.data();
      await applyRemotePayload(remote);
    } else {
      // First login: upload local
      await pushNow(true);
    }
    if (unsubSnap) unsubSnap();
    unsubSnap = onSnapshot(ref, async (s) => {
      if (!s.exists()) return;
      const remote = s.data();
      // Ignore echoes of our own writes shortly after push
      if (applyingRemote) return;
      await applyRemotePayload(remote);
    });
    status((auth.currentUser && auth.currentUser.email) || 'Synced', 'online');
  } catch (e) {
    console.error(e);
    status('Sync failed', 'error');
  }
}

async function applyRemotePayload(remote) {
  if (!remote || !remote.payload) return;
  const localUpdated = (window.data && window.data.updatedAt) || '';
  const remoteUpdated = remote.updatedAt || '';
  if (remoteUpdated && localUpdated && remoteUpdated <= localUpdated) {
    // local is same or newer — keep local unless forced empty cloud merge
    return;
  }
  try {
    applyingRemote = true;
    const payload = typeof remote.payload === 'string' ? JSON.parse(remote.payload) : remote.payload;
    if (payload && typeof payload === 'object') {
      window.data = payload;
      if (typeof window.saveDataLocalOnly === 'function') {
        window.saveDataLocalOnly();
      } else {
        localStorage.setItem('medicano_data_v1', JSON.stringify(payload));
      }
      if (typeof window.refreshAllViews === 'function') window.refreshAllViews();
      else if (typeof window.renderDashboard === 'function') window.renderDashboard();
    }
  } catch (e) {
    console.error('apply remote', e);
  } finally {
    setTimeout(() => { applyingRemote = false; }, 500);
  }
}

async function pushNow(force) {
  if (!ready || !auth || !auth.currentUser || !db) return { ok: false, reason: 'not-ready' };
  if (applyingRemote && !force) return { ok: false, reason: 'applying-remote' };
  status('Syncing…', 'syncing');
  try {
    const payload = window.data;
    if (!payload) return { ok: false, reason: 'no-data' };
    payload.updatedAt = new Date().toISOString();
    const ref = workspaceRef(auth.currentUser.uid);
    await setDoc(ref, {
      updatedAt: payload.updatedAt,
      email: auth.currentUser.email || '',
      payload: JSON.parse(JSON.stringify(payload))
    }, { merge: true });
    status(auth.currentUser.email || 'Synced', 'online');
    return { ok: true };
  } catch (e) {
    console.error(e);
    status('Sync failed', 'error');
    return { ok: false, error: String(e.message || e) };
  }
}

function schedulePush() {
  if (!ready || !auth || !auth.currentUser) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => { pushNow(false); }, 1200);
}

const api = {
  isConfigured: () => ready,
  isSignedIn: () => !!(auth && auth.currentUser),
  currentUser: () => (auth && auth.currentUser) || null,
  signIn: async (email, password) => {
    if (!ready) throw new Error('Firebase is not configured. Edit firebase-config.js');
    await signInWithEmailAndPassword(auth, email, password);
  },
  signUp: async (email, password) => {
    if (!ready) throw new Error('Firebase is not configured. Edit firebase-config.js');
    await createUserWithEmailAndPassword(auth, email, password);
  },
  signOut: async () => {
    if (unsubSnap) { unsubSnap(); unsubSnap = null; }
    if (auth) await signOut(auth);
  },
  pushNow,
  schedulePush
};

init();
