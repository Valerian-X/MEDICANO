// ============================================================
// FIREBASE SETUP
// Paste the config object from Firebase Console → Project
// Settings → Your apps → (</>) web app, then replace the
// object below. Nothing else in this file needs to change.
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyDHAMji7iys9vg1r7vDHtgVDQNa67k0s8k",
  authDomain: "medicano-app.firebaseapp.com",
  projectId: "medicano-app",
  storageBucket: "medicano-app.firebasestorage.app",
  messagingSenderId: "814226489959",
  appId: "1:814226489959:web:6fe2e31911aced3ed98ac2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Keep working offline: Firestore caches the last-synced data
// on the device and queues writes until back online.
db.enablePersistence({ synchronizeTabs: true }).catch((err) => {
  console.warn('Firestore offline persistence not enabled:', err.code);
});
