# Medicano — Design & Engineering Rules (current)

**Follow these for every new page, card, form, table, filter, and PDF.**  
Do not reintroduce patterns that were already fixed. When in doubt, copy an existing screen (Quotes list, Invoice editor, Reports filters) rather than inventing a new layout.

Last updated: 2026-08-20 · App cache: `medicano-v53+`

---

## 0. Design tokens (CSS)

Canonical variables live in `styles.css` under `:root` and `html.dark`.

| Token | Use for |
|-------|---------|
| `--gap-card` | Space between list/entity cards |
| `--gap-section` | Space between page sections |
| `--gap-filter` | Filter control grids |
| `--cream` / `--cream-2` | Page / soft surfaces |
| `--ink` | Primary text & dark pills |
| `--muted` | Secondary labels |
| `--card` | Card surface |
| `--pink` `--yellow` `--green` `--blue` | Pastel accents |
| `--radius` `--radius-pill` `--radius-card` | Corners |
| `--cal-core-size` | Calendar day highlight circle |
| `--table-bg` `--table-head` `--table-border` | Tables (light + dark) |
| `--caution-*` | Low-stock alert |

**New UI must prefer tokens**, e.g.:

```css
.my-list { display: flex; flex-direction: column; gap: var(--gap-card); }
.my-btn  { border-radius: var(--radius-pill); background: var(--cream-2); color: var(--ink); }
```

Helpers already defined: `.stack-cards`, `.gap-card`, `.pill-btn`, `.pill-btn-soft`, `.surface-card`.

Dark mode: override tokens on `html.dark` only when needed; components should read `var(--…)` so they flip automatically.


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

**Use the shared button system only:**
- `btn-primary` — main actions (Save, Add, New…)
- `btn-soft` — cancel / secondary
- `btn-pink` — accent (Add event, etc.)
- `btn-blue` — alternate soft accent
- `btn-dark` — rare emphasis
- Modifiers: `btn-block`, `btn-compact`

Do **not** invent new `bg-brand-600 text-white` one-offs. Dark mode is handled by the system (light surface + dark text).

## 11b. Buttons (legacy note)

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

## 18. Anti-patterns — concrete examples

### Dates

```js
// ❌ BAD — UTC, wrong day in WAT evenings/mornings
const today = new Date().toISOString().slice(0, 10);

// ✅ GOOD — local calendar day
const today = localYMD(new Date());
```

### Card stacks

```html
<!-- ❌ BAD — no gap, cards can visually merge/overlap -->
<div>
  <div class="entity-card">…</div>
  <div class="entity-card">…</div>
</div>

<!-- ✅ GOOD -->
<div class="entity-cards stack-cards">
  <div class="entity-card">…</div>
  <div class="entity-card">…</div>
</div>
```

```css
/* ❌ BAD */
.entity-card + .entity-card { margin-top: 0; }

/* ✅ GOOD */
.entity-cards { display: flex; flex-direction: column; gap: var(--gap-card); }
```

### Calendar highlight

```css
/* ❌ BAD — paints the whole grid cell as a square */
.cal-day.selected { background: #c4a4b0; border-radius: 0; }

/* ✅ GOOD — circle only around the number */
.cal-day.selected { background: transparent; }
.cal-day.selected .cal-day-core {
  background: var(--cal-selected);
  border-radius: 50%;
  width: var(--cal-core-size);
  height: var(--cal-core-size);
}
```

### Reports defaults

```js
// ❌ BAD — leave type on "payments" so custom rows vanish
typeEl.value = saved.type || 'payments';

// ✅ GOOD — always All + local today when opening Reports
typeEl.value = 'all';
toEl.value = localYMD(new Date());
```

### Dark mode tables

```css
/* ❌ BAD — white body rows in dark mode */
html.dark .report-table tbody tr { background: #fff; color: #111; }

/* ✅ GOOD */
html.dark .report-table,
html.dark .report-table tbody tr {
  background: var(--table-bg);
  color: var(--table-text);
}
html.dark .report-table th { background: var(--table-head); }
```

### Cloud sync data binding

```js
// ❌ BAD — UI still reads script-scoped `data`
window.data = remotePayload;

// ✅ GOOD
applyCloudData(remotePayload); // sets `data` + localStorage + refresh
```

### Invoice PDF title

```js
// ❌ BAD
const label = 'INVOICE';

// ✅ GOOD
const label = status === 'paid' ? 'RECEIPT'
  : docType === 'proforma' ? 'PROFORMA INVOICE'
  : 'INVOICE';
```

### Sidebar / product wording

```html
<!-- ❌ BAD -->
<a data-page="products">Items</a>

<!-- ✅ GOOD -->
<a data-page="products">Inventory</a>
```

```html
<!-- ❌ BAD in new UI -->
<label>Equipment name</label>

<!-- ✅ GOOD -->
<label>Item name</label>
```

### Filters

```html
<!-- ❌ BAD -->
<button onclick="applyFilters()">Apply filters</button>

<!-- ✅ GOOD — live -->
<select onchange="renderTransactionReport()">…</select>
```

### Hard-coded spacing/colour in new CSS

```css
/* ❌ BAD */
.my-card-list { gap: 6px; background: #fafafa; }

/* ✅ GOOD */
.my-card-list { gap: var(--gap-card); background: var(--surface); }
```


---

When adding something new: **read this file first**, then mirror the closest existing feature in `index.html` / `styles.css` / `app.js`.
