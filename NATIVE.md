# Medicano as a native app (Windows, Android, iOS)

Medicano is a **web app**. It can feel native on every platform **today** (install to home screen / Start menu). Putting it on the **App Store, Play Store, or Microsoft Store** needs extra accounts and a Mac/Windows PC — that cannot be finished from this chat.

---

## What you can use now (no stores)

Host Medicano on **HTTPS** (GitHub Pages, Netlify, etc.). Then:

### iPhone / iPad
1. Open the site in **Safari** (not Chrome).
2. Tap **Share** → **Add to Home Screen**.
3. Open **Medicano** from the home screen — full-screen app, no browser chrome.

### Android
1. Open the site in **Chrome**.
2. Menu (⋮) → **Install app** / **Add to Home screen**.
3. Or tap **Install Medicano** in the app if it appears.

### Windows
1. Open the site in **Edge** or **Chrome**.
2. Address bar → **install / app icon**, or Menu → **Apps → Install this site as an app**.
3. Medicano appears in the Start menu like other programs.

This is a **PWA** (Progressive Web App): same data, offline, Firebase sync.

---

## Store / desktop binaries (for a developer)

This folder includes wrappers. A developer builds them on the right machine.

| Platform | Wrapper | Needs |
|----------|---------|--------|
| **Windows .exe** | Electron (`native/electron`) | Windows PC, Node.js |
| **Android .apk / Play** | Capacitor (`native/capacitor.config.json`) | Android Studio, Google Play account (~$25) |
| **iOS .ipa / App Store** | Capacitor | **Mac + Xcode**, Apple Developer (~$99/year) |

### Windows (Electron)

On a Windows PC, in this `medicano` folder:

```
cd native
npm install
npm run win
```

Output: an installer / portable exe under `native/dist/`.

### Android & iOS (Capacitor)

On a machine with Node:

```
cd native
npm install
npx cap add android
npx cap add ios
npx cap sync
npx cap open android
npx cap open ios
```

- **Android:** Android Studio → Build → Generate Signed Bundle / APK → upload to Play Console.  
- **iOS:** must be on a **Mac**. Xcode → Archive → App Store Connect.

`webDir` is `..` (the Medicano web files). After you change the web app, run `npx cap sync` again.

---

## Honest limits

- This environment **cannot** produce signed App Store / Play / Microsoft Store packages.
- iOS store apps **cannot** be built without a Mac.
- Store review, privacy policy URL, and screenshots are still required by Apple/Google.

**Recommended path:** use the **installable PWA** for the team now; add store apps later when you have a developer + accounts.
