# Medicano Resources Limited — Medical Equipment Quoting App

Offline-first web application for managing medical equipment catalog, hospitals/clients, and professional multi-currency quotes (USD / EUR → NGN).

## Company
- **Medicano Resources Limited**
- 6, Ojulari Street, Off Kunsela Road, Chisco Bus Stop, Ikate Elegushi, Lekki Expressway
- Tel: 08023203522 | 07045763887
- enquiries@medicanoresources.com

## Features
- Equipment catalog (scalable) with SKU, description, category, brand, stock, multi-currency prices
- Manual exchange rates (USD→NGN, EUR→NGN) — ready for API later
- Hospital / client management
- Quote / Project builder with live NGN totals, discounts, status workflow
- Printable professional quotations (browser Print → Save as PDF)
- Dashboard with key stats
- Full offline support via localStorage
- Export / Import JSON backups (move data between devices)
- Responsive design (desktop + mobile)

## How to Use

### Option 1 — Open directly (simplest for offline)
1. Open the folder `medicano`
2. Double-click `index.html` (or right-click → Open with browser)
3. Works completely offline after first load (Tailwind is loaded from CDN on first visit; for full offline shell you can later host it or use a local server)

### Option 2 — Local server (recommended)
```bash
cd medicano
# Python
python3 -m http.server 8080
# or Node
npx serve .
```
Then open http://localhost:8080

### Option 3 — Host online
Upload the entire `medicano` folder to any static host (Netlify, Vercel, GitHub Pages, shared hosting, etc.).

## Data
All data is stored in the browser’s localStorage under the key `medicano_data_v1`.

- Use **Settings → Export All Data** to create a JSON backup.
- Use **Import Data** on another computer/browser to restore.
- Reset returns to the built-in sample medical equipment catalog.

## Sample Data
12 realistic medical equipment items (MRI, CT, Ultrasound, Ventilators, Monitors, Lab analyzers, etc.) are pre-loaded so you can start quoting immediately. Add, edit or delete freely.

## Next Steps (future upgrades)
- Full PWA service worker for true offline app shell
- Multi-user backend (PostgreSQL + auth) with sync
- Automatic FX rate API
- User roles & login
- Email sending of PDF quotes
- Barcode / QR support

---
Built for Medicano Resources Limited • Offline-first • English 
