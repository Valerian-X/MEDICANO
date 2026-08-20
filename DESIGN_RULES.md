# Medicano — Design & Engineering Rules (current)

**Follow these for every new page, card, form, table, filter, and PDF.**  
Do not reintroduce patterns that were already fixed. When in doubt, copy an existing screen (Quotes list, Invoice editor, Reports filters) rather than inventing a new layout.

Last updated: 2026-08-20 · App cache: `medicano-v51+`

---

## 1. Product language

| Context | Use |
|--------|-----|
| Sidebar nav | **Inventory** (not “Items” / “Equipment”) |
| UI labels for catalog entries | **Item** / **items** (covers machines, biomaterials, consumables) |
| Avoid | “Equipment-only” wording in new UI |
| Money | **Naira (₦)** only in lists, cards, reports, and PDFs unless a multi-currency input is required |
| Paid invoice PDF title | **RECEIPT** when status is `paid`; otherwise **INVOICE** / **PROFORMA INVOICE** |
| PDF total label | **TOTAL** (not “Total due in NGN”) |

---

## 2. Layout & spacing (no overlaps)

- **Every card stack** uses flex column + **gap ≥ 0.85–1.15rem**.
- Prefer `gap` on the parent; also allow **margin-bottom** on cards if gap is overridden.
- **Never** stack cards with only shared borders and zero gap.
- After each card: visible space in **collapsed and expanded** states.
- New lists: class pattern `entity-cards` + `entity-card` (or `select-row` stack).
- Reports mobile results: `report-mobile-cards` + `report-result-card` with enforced gap/margin.
- Multi-colour / gradient card backgrounds must **fill the full card** (top to bottom, not only left/right strips).

---

## 3. Cards (lists: clients, quotes, invoices, inventory, reports)

- **Collapsible** entity cards: header shows name + primary amount; body has details.
- Single click / chevron: expand–collapse; double-click may open editor where that pattern exists.
- Status pills: consistent placement and size (match invoice/quote cards).
- Prices: **bold**, same visual weight as the name, **bottom-right** of the header where that pattern is used.
- Actions (Edit, PDF, etc.): PDF/control buttons must **not** accidentally open the whole card editor.

---

## 4. Page chrome

- **Page title**: large, **horizontally centered** in the header row with hamburger / theme / online badge.
- Global search: compact, rounded; suggestions layout neat and consistent.
- **Offline / Online badge**: stays in the header (dot + label).
- Greeting (Dashboard): time-based + **username from Settings → User** (not device name). Empty username → greeting only.

---

## 5. Forms & editors (quotes, invoices, inventory, reports)

- Input groups in **modern cards**; line items collapsible with selected item name on the header.
- Line item fields when expanded: inventory select, Qty, **Price** (not “Base NGN”), markup %, total, remove.
- Compact numeric fields (qty, markup %): width for ~3 digits where appropriate.
- **Custom notes** on quote and invoice editors (saved with document, shown on PDF).
- Checkbox: **“Add new line items to inventory if they are not already listed”** (default on). Honour this in `ensureProductForLine(..., addToInventory)`.
- Inventory **edit** is its **own page**, same patterns as other entity pages—not a one-off modal layout unless already established.
- Checkboxes: normal size, aligned next to labels (not oversized / detached).

---

## 6. Filters

- Prefer **realtime** filters (`onchange` / `oninput`) — no “Apply filters” button.
- Date + status/type controls: even sizes, labels **directly above** controls, fit within page margins.
- Reports defaults **every time the Reports page opens**:
  - **Type** = `all`
  - **End date** = **today in local timezone** via `localYMD()` (never `toISOString().slice(0,10)` for calendar dates)
  - Start date may keep last saved value or 1st of month

---

## 7. Dates & time

- All **date inputs and filters**: `localYMD(date)` for local `YYYY-MM-DD`.
- Do not use UTC `toISOString()` for “today” in UI filters.
- Timestamps for storage (`updatedAt`) may still be ISO UTC.

---

## 8. Tables

- Desktop: proper `<table class="data-table|report-table">`.
- Mobile: **entity-style cards**, not a squashed table.
- Dark mode: table shell, thead, tbody, tfoot all **dark** — no white body rows.
- Align numeric columns and totals with unit prices (right-aligned, tabular nums).

---

## 9. Calendars (Dashboard + Events)

- Selected / today highlight is a **small circle on the day number only** (`.cal-day-core`), not a square on the whole cell.
- Event **colour dots** under the number when events exist (both calendars).
- “Today” / “Add event” control text: **centered** in the pill.

---

## 10. Colour & dark mode

- Follow the established cream / ink / pink / soft surfaces palette.
- Dark mode: no light cards with dark text on Dashboard, Events, lists, stats, company card, hamburger.
- Calendar day numbers and event card content readable (light text on dark).
- New components must ship with `html.dark …` rules in the same change.

---

## 11. Buttons

- Prefer pill / `action-chip` / `select-row` / `pres-tool-btn` patterns already in the app.
- “Select all” text: **black** (including presentation & reports).
- Reports **+ Add table row**: light cream pill, **below** the table/list, **right-aligned** (dark mode stays light on dark).
- Avoid stacking unlabeled icon-only controls without a clear pattern match.

---

## 12. Reports

- Manual rows can include **multiple line items** (name, qty, unit price) → map to invoice lines.
- Custom rows visible under All / Both / and not hidden by Payments-only unless user chooses that intentionally; defaults avoid that trap.
- **Add selected to invoice** only for unbilled custom rows; same client required.

---

## 13. PDF (invoices)

- Logo: project logo assets (`logo-pdf` / configured data URL).
- Paid → title **RECEIPT**; hide bank block when paid.
- Item names left; Qty / Unit price / amounts right; neat column alignment.
- Subtotal / TOTAL right-aligned with amount column; divider aligns with totals block.
- No leftover “No bank details set…” fallback spam when intentional empty/paid.

---

## 14. Low stock

- Placement: **under** workspace greeting / overview text, **before** main dashboard stats.
- Collapsible, minimal caution styling.
- Toast at most about every **2 hours**; dismiss hides for 2 hours.

---

## 15. Data & sync

- UI state lives in script `data`; cloud sync must use `applyCloudData` / `getAppData` — never only `window.data`.
- `saveData()` updates `updatedAt`, localStorage, and schedules cloud push when signed in.
- Strip large base64 images before Firestore payload.
- Firestore path: `users/{uid}/workspace/main` with rules isolating by `request.auth.uid`.

---

## 16. PWA / cache

- Bump `sw.js` cache name (`medicano-vNN`) on every user-facing HTML/CSS/JS change.
- Remind hard-refresh when behaviour “doesn’t update”.

---

## 17. Consistency checklist (before shipping a feature)

1. Matches existing card / filter / button patterns?  
2. Gaps between cards collapsed + expanded?  
3. Dark mode rules included?  
4. Naira formatting for money?  
5. Local dates for date fields?  
6. Mobile layout not overlapping?  
7. Service worker version bumped?  
8. No new “Equipment-only” labels in Inventory UI?  

---

## 18. Anti-patterns (do not reintroduce)

- White table body in dark mode  
- Square full-cell calendar selection  
- UTC “today” in date filters  
- Zero-gap overlapping entity cards  
- “Apply filters” buttons for simple lists  
- Modal-only inventory editor when a full page pattern exists  
- Sync writing `window.data` without updating `let data`  
- PDF title “INVOICE” when status is paid  
- Sidebar renaming Inventory → Items  

---

When adding something new: **read this file first**, then mirror the closest existing feature in `index.html` / `styles.css` / `app.js`.
