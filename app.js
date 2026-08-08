// ============================================================
// MEDICANO RESOURCES LIMITED - Offline-First Quoting App
// ============================================================

const STORAGE_KEY = 'medicano_data_v1';

const DEFAULT_DATA = {
  company: {
    name: 'Medicano Resources Limited',
    email: 'enquiries@medicanoresources.com',
    phone1: '08023203522',
    phone2: '07045763887',
    address: '6, Ojulari Street, Off Kunsela Road, Chisco Bus Stop, Ikate Elegushi, Lekki Expressway'
  },
  rates: {
    USD: 1650.00,   // 1 USD = NGN
    EUR: 1780.00,   // 1 EUR = NGN
    mode: 'manual', // 'manual' | 'auto'
    updatedAt: new Date().toISOString()
  },
  categories: [
    'Imaging',
    'Surgical / Anesthesia',
    'Patient Monitoring & Life Support',
    'Sterilization & CSSD',
    'Laboratory',
    'Dental',
    'Physiotherapy',
    'Hospital Furniture'
  ],
  terms: [
    { title: 'Quote Validity', body: "Quotation is only stated as at Today's Exchange Rate, which is subject to change at any time based on the exchange rate fluctuations. This is valid for 30 days from the date stated on this invoice after which reconfirmation of rates would be necessary." },
    { title: 'Origin', body: 'As indicated.' },
    { title: 'Estimated Delivery', body: 'Within 3–4 weeks from the date of the receipt of the confirmed order and pre-order payment.' },
    { title: 'Payment Terms', body: 'Our standard payment term is 70% Mobilization payment to commence, 10% on arrival at the Nigerian Cargo session, 20% balance payment on delivery and installation (or as proposed and agreed with the hospital).' },
    { title: 'Repayment Penalty', body: 'This is allowed within the tenor of this offer without penalty. Payment outside the tenor period attracts additional charge of 3.5% flat per month and will result in repossession of the machine if payment isn’t made; this would be withheld until full payment is made.' },
    { title: 'Comfort', body: 'Duly signed Letter of Award / PO stating the agreed payment terms.' },
    { title: 'Warranty', body: '12 months manufacturers warranty.' },
    { title: 'Carriage', body: 'Inland Carriage, Freight and other associated port charges are included within our quotation. It is based on routings via our freight forwarders.' },
    { title: 'Manuals & Spare Parts', body: "Spare parts will be detailed within the operator’s manuals for all equipment supplied complete with drawings, fault finding etc. (where applicable)." },
    { title: 'Preventive Maintenance', body: 'After the warranty elapses, we strongly recommend quarterly “After sales services” agreement at a fixed mutually agreeable fee. To this end, Medicano Resources Limited will be committed to keeping its appointment to have its trained bio-engineer visit the hospital every quarter for a routine machine check to avoid breakdown. This we term preventive maintenance services.' }
  ],
  products: [
    {
      id: 'p1',
      sku: 'MRI-3T-001',
      name: '3.0T MRI Scanner System',
      description: 'Full-body 3.0 Tesla superconducting MRI with advanced imaging coils, patient table, and workstation. Includes installation & training.',
      category: 'Imaging',
      brand: 'Siemens / GE equivalent',
      price: 850000,
      currency: 'USD',
      stock: 2,
      lowStock: 1,
      active: true
    },
    {
      id: 'p2',
      sku: 'CT-64-002',
      name: '64-Slice CT Scanner',
      description: 'Multi-slice CT system with low-dose technology, cardiac package, and 3D reconstruction software.',
      category: 'Imaging',
      brand: 'Philips / Toshiba equivalent',
      price: 420000,
      currency: 'USD',
      stock: 3,
      lowStock: 1,
      active: true
    },
    {
      id: 'p3',
      sku: 'XRAY-DR-003',
      name: 'Digital Radiography System (DR)',
      description: 'Ceiling-mounted digital X-ray with flat panel detector, automatic exposure control, and PACS ready.',
      category: 'Imaging',
      brand: 'Carestream',
      price: 78000,
      currency: 'USD',
      stock: 5,
      lowStock: 2,
      active: true
    },
    {
      id: 'p4',
      sku: 'USG-4D-004',
      name: '4D Ultrasound Machine',
      description: 'High-end color Doppler ultrasound with 4D imaging, multiple transducers, and obstetric package.',
      category: 'Imaging',
      brand: 'GE Voluson equivalent',
      price: 45000,
      currency: 'USD',
      stock: 8,
      lowStock: 2,
      active: true
    },
    {
      id: 'p5',
      sku: 'ANES-WS-005',
      name: 'Anesthesia Workstation',
      description: 'Advanced anesthesia machine with ventilator, gas monitoring, and electronic flow meters.',
      category: 'Surgical / Anesthesia',
      brand: 'Dräger / Mindray',
      price: 32000,
      currency: 'EUR',
      stock: 6,
      lowStock: 2,
      active: true
    },
    {
      id: 'p6',
      sku: 'VENT-ICU-006',
      name: 'ICU Ventilator (Critical Care)',
      description: 'Microprocessor-controlled ventilator with advanced modes, nebulizer, and touchscreen interface.',
      category: 'Patient Monitoring & Life Support',
      brand: 'Hamilton / Puritan Bennett',
      price: 18500,
      currency: 'USD',
      stock: 12,
      lowStock: 3,
      active: true
    },
    {
      id: 'p7',
      sku: 'MON-MP-007',
      name: 'Multi-Parameter Patient Monitor',
      description: '12-inch touchscreen monitor with ECG, SpO2, NIBP, Temp, Resp, and optional EtCO2.',
      category: 'Patient Monitoring & Life Support',
      brand: 'Philips / Mindray',
      price: 4200,
      currency: 'USD',
      stock: 25,
      lowStock: 5,
      active: true
    },
    {
      id: 'p8',
      sku: 'DEF-AED-008',
      name: 'Biphasic Defibrillator / Monitor',
      description: 'Manual/AED defibrillator with pacing, SpO2, and printer. Suitable for ER and ambulance.',
      category: 'Patient Monitoring & Life Support',
      brand: 'Zoll / Physio-Control',
      price: 9800,
      currency: 'USD',
      stock: 10,
      lowStock: 3,
      active: true
    },
    {
      id: 'p9',
      sku: 'OT-TABLE-009',
      name: 'Electro-Hydraulic Operating Table',
      description: 'Five-section table with remote control, kidney bridge, and radiolucent top.',
      category: 'Surgical / Anesthesia',
      brand: 'Maquet / Steris',
      price: 14500,
      currency: 'EUR',
      stock: 4,
      lowStock: 1,
      active: true
    },
    {
      id: 'p10',
      sku: 'STER-AUTO-010',
      name: 'Autoclave Sterilizer 200L',
      description: 'Horizontal autoclave with pre-vacuum, drying cycle, and digital controls. Chamber volume 200 litres.',
      category: 'Sterilization & CSSD',
      brand: 'Getinge / Tuttnauer',
      price: 22000,
      currency: 'USD',
      stock: 3,
      lowStock: 1,
      active: true
    },
    {
      id: 'p11',
      sku: 'LAB-CHEM-011',
      name: 'Fully Automated Chemistry Analyzer',
      description: 'Random-access chemistry analyzer, throughput 400 tests/hour, with ISE module.',
      category: 'Laboratory',
      brand: 'Roche / Beckman',
      price: 68000,
      currency: 'USD',
      stock: 2,
      lowStock: 1,
      active: true
    },
    {
      id: 'p12',
      sku: 'LAB-HEMA-012',
      name: '5-Part Hematology Analyzer',
      description: 'CBC + 5-part differential, 60 samples/hour, with autoloader option.',
      category: 'Laboratory',
      brand: 'Sysmex / Mindray',
      price: 18500,
      currency: 'USD',
      stock: 5,
      lowStock: 2,
      active: true
    }
  ],
  clients: [
    {
      id: 'c1',
      name: 'Lagos University Teaching Hospital (LUTH)',
      contact: 'Procurement Officer',
      phone: '0803XXXXXXX',
      email: 'procurement@luth.gov.ng',
      address: 'Idi-Araba, Surulere, Lagos'
    },
    {
      id: 'c2',
      name: 'National Hospital Abuja',
      contact: 'Director of Clinical Services',
      phone: '09XXXXXXX',
      email: 'info@nationalhospital.gov.ng',
      address: 'Central Business District, Abuja'
    },
    {
      id: 'c3',
      name: 'Reddington Hospital Lekki',
      contact: 'Biomedical Engineer',
      phone: '0704XXXXXXX',
      email: 'biomed@reddingtonhospital.com',
      address: 'Lekki Phase 1, Lagos'
    }
  ],
  quotes: [],
  nextQuoteNum: 1001
};

let data = null;
let currentQuoteId = null;
let quoteItemCounter = 0;

// -------------------- Persistence --------------------
function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      data = JSON.parse(raw);
      // Ensure structure
      if (!data.rates) data.rates = DEFAULT_DATA.rates;
      if (!data.rates.mode) data.rates.mode = 'manual';
      if (!data.company) data.company = DEFAULT_DATA.company;
      if (!data.products) data.products = [];
      if (!data.clients) data.clients = [];
      if (!data.quotes) data.quotes = [];
      if (!data.nextQuoteNum) data.nextQuoteNum = 1001;
      if (!data.categories || !Array.isArray(data.categories)) {
        // Seed from existing products + defaults
        const fromProducts = [...new Set(data.products.map(p => p.category).filter(Boolean))];
        data.categories = [...new Set([...(DEFAULT_DATA.categories || []), ...fromProducts])].sort();
      }
      if (!data.terms || !Array.isArray(data.terms) || data.terms.length === 0) {
        data.terms = JSON.parse(JSON.stringify(DEFAULT_DATA.terms));
      }
    } else {
      data = JSON.parse(JSON.stringify(DEFAULT_DATA));
      saveData();
    }
  } catch (e) {
    console.error('Load error', e);
    data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// -------------------- Helpers --------------------
function formatNGN(amount) {
  return '₦' + Number(amount || 0).toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatMoney(amount, currency) {
  if (currency === 'NGN') return formatNGN(amount);
  return (currency === 'EUR' ? '€' : '$') + Number(amount || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toNGN(price, currency) {
  if (currency === 'NGN') return Number(price);
  const rate = data.rates[currency] || 1;
  return Number(price) * rate;
}

function uid() {
  return 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function getProduct(id) {
  return data.products.find(p => p.id === id);
}

function getClient(id) {
  return data.clients.find(c => c.id === id);
}

// -------------------- Navigation --------------------
function navigate(page) {
  document.querySelectorAll('.page').forEach(el => el.classList.add('hidden'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.remove('hidden');

  document.querySelectorAll('.sidebar-link').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  const titles = {
    dashboard: 'Dashboard',
    products: 'Equipment Catalog',
    clients: 'Hospitals / Clients',
    quotes: 'Quotes / Projects',
    'quote-editor': 'Quote Editor',
    presentation: 'Client Presentation',
    rates: 'Exchange Rates',
    settings: 'Settings'
  };
  document.getElementById('page-title').textContent = titles[page] || page;

  // Close mobile sidebar
  if (typeof closeSidebar === 'function') closeSidebar();
  else {
    const sb = document.getElementById('sidebar');
    if (sb) {
      sb.classList.add('-translate-x-full');
      sb.classList.remove('translate-x-0');
    }
  }

  if (page === 'dashboard') renderDashboard();
  if (page === 'products') renderProducts();
  if (page === 'clients') renderClients();
  if (page === 'quotes') renderQuotes();
  if (page === 'presentation') renderPresPicker();
  if (page === 'rates') renderRates();
  if (page === 'settings') renderSettings();
}

// -------------------- Dashboard --------------------
function renderDashboard() {
  document.getElementById('stat-products').textContent = data.products.filter(p => p.active).length;
  document.getElementById('stat-quotes').textContent = data.quotes.filter(q => q.status === 'draft' || q.status === 'sent').length;
  document.getElementById('stat-clients').textContent = data.clients.length;
  document.getElementById('stat-lowstock').textContent = data.products.filter(p => p.stock <= p.lowStock).length;

  const recent = [...data.quotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  const container = document.getElementById('recent-quotes');
  if (recent.length === 0) {
    container.innerHTML = '<p class="text-slate-400">No quotes yet. Create your first one!</p>';
  } else {
    container.innerHTML = recent.map(q => {
      const client = getClient(q.clientId);
      return `<div class="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
        <div>
          <p class="font-medium">${q.quoteNumber}</p>
          <p class="text-xs text-slate-500">${client ? client.name : '—'} • ${q.title}</p>
        </div>
        <div class="text-right">
          <p class="font-medium">${formatNGN(q.totalNGN)}</p>
          <span class="text-xs px-2 py-0.5 rounded-full ${statusClass(q.status)}">${q.status}</span>
        </div>
      </div>`;
    }).join('');
  }

  updateRatesDisplay();
}

function statusClass(s) {
  const map = {
    draft: 'bg-slate-100 text-slate-700',
    sent: 'bg-blue-100 text-blue-800',
    accepted: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800'
  };
  return map[s] || 'bg-slate-100';
}

function updateRatesDisplay() {
  const el = document.getElementById('current-rates');
  if (el) {
    el.textContent = `USD ₦${data.rates.USD.toLocaleString()} | EUR ₦${data.rates.EUR.toLocaleString()}`;
  }
}

// -------------------- Products --------------------
function renderProducts() {
  const search = (document.getElementById('product-search')?.value || '').toLowerCase();
  const cat = document.getElementById('product-category-filter')?.value || '';

  const cats = (data.categories && data.categories.length)
    ? data.categories.slice().sort()
    : [...new Set(data.products.map(p => p.category).filter(Boolean))].sort();
  const filterEl = document.getElementById('product-category-filter');
  const currentVal = filterEl ? filterEl.value : '';
  if (filterEl) {
    filterEl.innerHTML = '<option value="">All Categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join('');
    filterEl.value = currentVal;
  }

  const list = data.products.filter(p => {
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.sku.toLowerCase().includes(search) || (p.description || '').toLowerCase().includes(search);
    const matchCat = !cat || p.category === cat;
    return matchSearch && matchCat;
  });

  const tbody = document.getElementById('products-tbody');
  tbody.innerHTML = list.map(p => {
    const ngn = toNGN(p.price, p.currency);
    const low = p.stock <= p.lowStock;
    const thumb = p.image
      ? `<img src="${p.image}" class="w-10 h-10 rounded object-cover border border-slate-200" alt="" />`
      : `<div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-400 text-xs">—</div>`;
    return `<tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3">${thumb}</td>
      <td class="px-4 py-3 font-mono text-xs">${p.sku}</td>
      <td class="px-4 py-3">
        <p class="font-medium">${p.name}</p>
        <p class="text-xs text-slate-500 truncate max-w-xs">${p.brand || ''}</p>
      </td>
      <td class="px-4 py-3">${p.category}</td>
      <td class="px-4 py-3">
        <p>${formatMoney(p.price, p.currency)}</p>
        <p class="text-xs text-slate-500">${formatNGN(ngn)}</p>
      </td>
      <td class="px-4 py-3 ${low ? 'text-amber-600 font-medium' : ''}">${p.stock}${low ? ' ⚠' : ''}</td>
      <td class="px-4 py-3">
        <span class="text-xs px-2 py-0.5 rounded-full ${p.active ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-500'}">${p.active ? 'Active' : 'Inactive'}</span>
      </td>
      <td class="px-4 py-3">
        <button onclick="editProduct('${p.id}')" class="text-brand-600 hover:underline text-xs mr-2">Edit</button>
        <button onclick="if(confirm('Delete this item?')) deleteProduct('${p.id}')" class="text-red-500 hover:underline text-xs">Del</button>
      </td>
    </tr>`;
  }).join('') || '<tr><td colspan="8" class="px-4 py-8 text-center text-slate-400">No equipment found</td></tr>';
}

function showProductForm(id = null) {
  document.getElementById('product-id').value = id || '';
  document.getElementById('product-modal-title').textContent = id ? 'Edit Equipment' : 'Add Equipment';
  if (id) {
    const p = getProduct(id);
    document.getElementById('p-sku').value = p.sku;
    document.getElementById('p-name').value = p.name;
    document.getElementById('p-desc').value = p.description || '';
    document.getElementById('p-features').value = p.features || '';
    populateCategorySelect(p.category);
    document.getElementById('p-price').value = p.price;
    document.getElementById('p-currency').value = p.currency;
    document.getElementById('p-stock').value = p.stock;
    document.getElementById('p-low').value = p.lowStock;
    document.getElementById('p-brand').value = p.brand || '';
    document.getElementById('p-active').checked = p.active;
    document.getElementById('p-image-data').value = p.image || '';
    updateImagePreview(p.image || '');
  } else {
    document.getElementById('product-form').reset();
    document.getElementById('p-active').checked = true;
    document.getElementById('p-low').value = 2;
    document.getElementById('p-image-data').value = '';
    updateImagePreview('');
    populateCategorySelect('');
  }
  document.getElementById('modal-product').classList.remove('hidden');
}

function editProduct(id) {
  showProductForm(id);
}

function updateImagePreview(dataUrl) {
  const box = document.getElementById('p-image-preview');
  if (!box) return;
  if (dataUrl) {
    box.innerHTML = `<img src="${dataUrl}" class="w-full h-full object-cover" alt="Preview" />`;
  } else {
    box.innerHTML = '<span class="text-2xl text-slate-300">📷</span>';
  }
}

function previewProductImage(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 600 * 1024) {
    alert('Image is large. For best performance please use an image under 400–500 KB.');
  }
  const reader = new FileReader();
  reader.onload = function(ev) {
    // Optional light compression via canvas for very large images
    const img = new Image();
    img.onload = function() {
      const maxW = 800;
      let w = img.width, h = img.height;
      if (w > maxW) {
        h = Math.round(h * (maxW / w));
        w = maxW;
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const compressed = canvas.toDataURL('image/jpeg', 0.82);
      document.getElementById('p-image-data').value = compressed;
      updateImagePreview(compressed);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function clearProductImage() {
  document.getElementById('p-image-data').value = '';
  document.getElementById('p-image').value = '';
  updateImagePreview('');
}

function saveProduct(e) {
  e.preventDefault();
  const id = document.getElementById('product-id').value;
  const item = {
    id: id || uid(),
    sku: document.getElementById('p-sku').value.trim(),
    name: document.getElementById('p-name').value.trim(),
    description: document.getElementById('p-desc').value.trim(),
    features: document.getElementById('p-features').value.trim(),
    category: document.getElementById('p-category').value.trim(),
    brand: document.getElementById('p-brand').value.trim(),
    price: parseFloat(document.getElementById('p-price').value) || 0,
    currency: document.getElementById('p-currency').value,
    stock: parseInt(document.getElementById('p-stock').value) || 0,
    lowStock: parseInt(document.getElementById('p-low').value) || 0,
    active: document.getElementById('p-active').checked,
    image: document.getElementById('p-image-data').value || ''
  };

  if (id) {
    const idx = data.products.findIndex(p => p.id === id);
    if (idx >= 0) data.products[idx] = item;
  } else {
    data.products.push(item);
  }
  saveData();
  closeModal('modal-product');
  renderProducts();
  renderDashboard();
}

function deleteProduct(id) {
  data.products = data.products.filter(p => p.id !== id);
  saveData();
  renderProducts();
  renderDashboard();
}

// -------------------- Clients --------------------
function renderClients() {
  const search = (document.getElementById('client-search')?.value || '').toLowerCase();
  const list = data.clients.filter(c =>
    !search || c.name.toLowerCase().includes(search) || (c.contact || '').toLowerCase().includes(search)
  );

  document.getElementById('clients-tbody').innerHTML = list.map(c => `
    <tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-medium">${c.name}</td>
      <td class="px-4 py-3">${c.contact || '—'}</td>
      <td class="px-4 py-3">${c.phone || '—'}</td>
      <td class="px-4 py-3">${c.email || '—'}</td>
      <td class="px-4 py-3">
        <button onclick="editClient('${c.id}')" class="text-brand-600 hover:underline text-xs mr-2">Edit</button>
        <button onclick="if(confirm('Delete client?')) deleteClient('${c.id}')" class="text-red-500 hover:underline text-xs">Del</button>
      </td>
    </tr>
  `).join('') || '<tr><td colspan="5" class="px-4 py-8 text-center text-slate-400">No clients yet</td></tr>';
}

function showClientForm(id = null) {
  document.getElementById('client-id').value = id || '';
  document.getElementById('client-modal-title').textContent = id ? 'Edit Client' : 'Add Client';
  if (id) {
    const c = getClient(id);
    document.getElementById('c-name').value = c.name;
    document.getElementById('c-contact').value = c.contact || '';
    document.getElementById('c-phone').value = c.phone || '';
    document.getElementById('c-email').value = c.email || '';
    document.getElementById('c-address').value = c.address || '';
  } else {
    document.getElementById('client-form').reset();
  }
  document.getElementById('modal-client').classList.remove('hidden');
}

function editClient(id) {
  showClientForm(id);
}

function saveClient(e) {
  e.preventDefault();
  const id = document.getElementById('client-id').value;
  const item = {
    id: id || uid(),
    name: document.getElementById('c-name').value.trim(),
    contact: document.getElementById('c-contact').value.trim(),
    phone: document.getElementById('c-phone').value.trim(),
    email: document.getElementById('c-email').value.trim(),
    address: document.getElementById('c-address').value.trim()
  };
  if (id) {
    const idx = data.clients.findIndex(c => c.id === id);
    if (idx >= 0) data.clients[idx] = item;
  } else {
    data.clients.push(item);
  }
  saveData();
  closeModal('modal-client');
  renderClients();
  renderDashboard();
}

function deleteClient(id) {
  data.clients = data.clients.filter(c => c.id !== id);
  saveData();
  renderClients();
  renderDashboard();
}

// -------------------- Quotes --------------------
function renderQuotes() {
  const status = document.getElementById('quote-status-filter')?.value || '';
  let list = [...data.quotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (status) list = list.filter(q => q.status === status);

  document.getElementById('quotes-tbody').innerHTML = list.map(q => {
    const client = getClient(q.clientId);
    return `<tr class="border-t border-slate-100 hover:bg-slate-50">
      <td class="px-4 py-3 font-mono text-xs font-medium">${q.quoteNumber}</td>
      <td class="px-4 py-3">${client ? client.name : '—'}</td>
      <td class="px-4 py-3">${q.title}</td>
      <td class="px-4 py-3 font-medium">${formatNGN(q.totalNGN)}</td>
      <td class="px-4 py-3"><span class="text-xs px-2 py-0.5 rounded-full ${statusClass(q.status)}">${q.status}</span></td>
      <td class="px-4 py-3 text-xs text-slate-500">${new Date(q.createdAt).toLocaleDateString()}</td>
      <td class="px-4 py-3">
        <button onclick="openQuote('${q.id}')" class="text-brand-600 hover:underline text-xs mr-2">Open</button>
        <button onclick="if(confirm('Delete quote?')) { data.quotes = data.quotes.filter(x => x.id !== '${q.id}'); saveData(); renderQuotes(); renderDashboard(); }" class="text-red-500 hover:underline text-xs">Del</button>
      </td>
    </tr>`;
  }).join('') || '<tr><td colspan="7" class="px-4 py-8 text-center text-slate-400">No quotes yet</td></tr>';
}

function showNewQuote() {
  currentQuoteId = null;
  document.getElementById('quote-editor-title').textContent = 'New Quote / Project';
  document.getElementById('btn-delete-quote').classList.add('hidden');
  document.getElementById('quote-client').innerHTML = '<option value="">Select hospital...</option>' +
    data.clients.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  document.getElementById('quote-title').value = '';
  document.getElementById('quote-valid').value = '';
  document.getElementById('quote-status').value = 'draft';
  document.getElementById('quote-notes').value = '';
  document.getElementById('quote-discount').value = 0;
  document.getElementById('quote-items-tbody').innerHTML = '';
  quoteItemCounter = 0;
  if (document.getElementById('quote-product-search')) {
    document.getElementById('quote-product-search').value = '';
  }
  renderQuoteProductPicker();
  recalcQuote();
  navigate('quote-editor');
}

function openQuote(id) {
  const q = data.quotes.find(x => x.id === id);
  if (!q) return;
  currentQuoteId = id;
  document.getElementById('quote-editor-title').textContent = `Quote ${q.quoteNumber}`;
  document.getElementById('btn-delete-quote').classList.remove('hidden');

  document.getElementById('quote-client').innerHTML = '<option value="">Select hospital...</option>' +
    data.clients.map(c => `<option value="${c.id}" ${c.id === q.clientId ? 'selected' : ''}>${c.name}</option>`).join('');
  document.getElementById('quote-title').value = q.title;
  document.getElementById('quote-valid').value = q.validUntil || '';
  document.getElementById('quote-status').value = q.status;
  document.getElementById('quote-notes').value = q.notes || '';
  document.getElementById('quote-discount').value = q.discount || 0;

  document.getElementById('quote-items-tbody').innerHTML = '';
  quoteItemCounter = 0;
  (q.items || []).forEach(item => addQuoteItemRow(item));
  if (document.getElementById('quote-product-search')) {
    document.getElementById('quote-product-search').value = '';
  }
  renderQuoteProductPicker();
  recalcQuote();
  navigate('quote-editor');
}

function addQuoteItemRow(existing = null) {
  quoteItemCounter++;
  const rowId = 'qi_' + quoteItemCounter;
  const tbody = document.getElementById('quote-items-tbody');
  const tr = document.createElement('tr');
  tr.id = rowId;
  tr.className = 'border-t border-slate-100';

  const productId = existing ? existing.productId : '';
  const p = productId ? getProduct(productId) : null;
  const options = data.products.filter(pr => pr.active).map(pr =>
    `<option value="${pr.id}" ${productId === pr.id ? 'selected' : ''}>${pr.sku} — ${pr.name}</option>`
  ).join('');

  tr.innerHTML = `
    <td class="py-2 pr-2">
      <select class="qi-product w-full px-2 py-1.5 border rounded text-sm" onchange="onItemProductChange('${rowId}')">
        <option value="">Select equipment...</option>
        ${options}
      </select>
    </td>
    <td class="py-2 pr-2">
      <input type="number" min="1" value="${existing ? (existing.qty || 1) : 1}" class="qi-qty w-full px-2 py-1.5 border rounded text-sm text-center" oninput="recalcQuote()" />
    </td>
    <td class="py-2 pr-2 text-xs text-slate-500 qi-orig">—</td>
    <td class="py-2 pr-2 qi-unit-ngn text-sm">—</td>
    <td class="py-2 pr-2 qi-line font-medium text-sm">—</td>
    <td class="py-2">
      <button onclick="document.getElementById('${rowId}').remove(); recalcQuote()" class="text-red-400 hover:text-red-600 text-lg">×</button>
    </td>
  `;
  tbody.appendChild(tr);
  if (productId) {
    onItemProductChange(rowId);
  }
}

function onItemProductChange(rowId) {
  const row = document.getElementById(rowId);
  const prodId = row.querySelector('.qi-product').value;
  const p = getProduct(prodId);
  if (p) {
    row.querySelector('.qi-orig').textContent = formatMoney(p.price, p.currency);
    const unitNgn = toNGN(p.price, p.currency);
    row.querySelector('.qi-unit-ngn').textContent = formatNGN(unitNgn);
    row.dataset.unitNgn = unitNgn;
    row.dataset.currency = p.currency;
    row.dataset.price = p.price;
  } else {
    row.querySelector('.qi-orig').textContent = '—';
    row.querySelector('.qi-unit-ngn').textContent = '—';
    row.dataset.unitNgn = 0;
  }
  recalcQuote();
}

function recalcQuote() {
  let subtotal = 0;
  let count = 0;
  document.querySelectorAll('#quote-items-tbody tr').forEach(row => {
    const prod = row.querySelector('.qi-product');
    if (prod && prod.value) count++;
    const qty = parseFloat(row.querySelector('.qi-qty').value) || 0;
    const unit = parseFloat(row.dataset.unitNgn) || 0;
    const line = qty * unit;
    const lineEl = row.querySelector('.qi-line');
    if (lineEl) lineEl.textContent = formatNGN(line);
    subtotal += line;
  });
  const discountPct = parseFloat(document.getElementById('quote-discount')?.value) || 0;
  const total = subtotal * (1 - discountPct / 100);
  const subEl = document.getElementById('quote-subtotal');
  const totEl = document.getElementById('quote-total');
  if (subEl) subEl.textContent = formatNGN(subtotal);
  if (totEl) totEl.textContent = formatNGN(total);
  const countEl = document.getElementById('quote-item-count');
  if (countEl) countEl.textContent = count + (count === 1 ? ' item' : ' items');
}

function saveQuote() {
  const clientId = document.getElementById('quote-client').value;
  const title = document.getElementById('quote-title').value.trim();
  if (!clientId || !title) {
    alert('Please select a client and enter a quote title.');
    return;
  }

  const items = [];
  document.querySelectorAll('#quote-items-tbody tr').forEach(row => {
    const productId = row.querySelector('.qi-product').value;
    if (!productId) return;
    const qty = parseFloat(row.querySelector('.qi-qty').value) || 1;
    const p = getProduct(productId);
    items.push({
      productId,
      sku: p.sku,
      name: p.name,
      qty,
      unitPrice: parseFloat(row.dataset.price) || p.price,
      currency: row.dataset.currency || p.currency,
      unitNGN: parseFloat(row.dataset.unitNgn) || 0,
      lineNGN: qty * (parseFloat(row.dataset.unitNgn) || 0)
    });
  });

  if (items.length === 0) {
    alert('Add at least one equipment item.');
    return;
  }

  const discount = parseFloat(document.getElementById('quote-discount').value) || 0;
  const subtotal = items.reduce((s, i) => s + i.lineNGN, 0);
  const totalNGN = subtotal * (1 - discount / 100);

  const quote = {
    id: currentQuoteId || uid(),
    quoteNumber: currentQuoteId
      ? data.quotes.find(q => q.id === currentQuoteId).quoteNumber
      : 'MQ-' + (data.nextQuoteNum++),
    clientId,
    title,
    validUntil: document.getElementById('quote-valid').value || null,
    status: document.getElementById('quote-status').value,
    notes: document.getElementById('quote-notes').value.trim(),
    discount,
    items,
    subtotalNGN: subtotal,
    totalNGN,
    createdAt: currentQuoteId
      ? data.quotes.find(q => q.id === currentQuoteId).createdAt
      : new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (currentQuoteId) {
    const idx = data.quotes.findIndex(q => q.id === currentQuoteId);
    data.quotes[idx] = quote;
  } else {
    data.quotes.push(quote);
    currentQuoteId = quote.id;
  }
  saveData();
  alert('Quote saved successfully: ' + quote.quoteNumber);
  document.getElementById('quote-editor-title').textContent = `Quote ${quote.quoteNumber}`;
  document.getElementById('btn-delete-quote').classList.remove('hidden');
  renderDashboard();
}

function deleteCurrentQuote() {
  if (!currentQuoteId) return;
  data.quotes = data.quotes.filter(q => q.id !== currentQuoteId);
  saveData();
  navigate('quotes');
  renderDashboard();
}

// -------------------- Print / PDF --------------------
function printQuote() {
  if (!currentQuoteId && !document.getElementById('quote-title').value) {
    alert('Save the quote first or fill in the details.');
    return;
  }
  // Use current form state
  const clientId = document.getElementById('quote-client').value;
  const client = getClient(clientId);
  const title = document.getElementById('quote-title').value || 'Untitled';
  const valid = document.getElementById('quote-valid').value;
  const notes = document.getElementById('quote-notes').value;
  const discount = parseFloat(document.getElementById('quote-discount').value) || 0;
  const status = document.getElementById('quote-status').value;

  let itemsHtml = '';
  let subtotal = 0;
  document.querySelectorAll('#quote-items-tbody tr').forEach(row => {
    const productId = row.querySelector('.qi-product').value;
    if (!productId) return;
    const p = getProduct(productId);
    const qty = parseFloat(row.querySelector('.qi-qty').value) || 1;
    const unit = parseFloat(row.dataset.unitNgn) || 0;
    const line = qty * unit;
    subtotal += line;
    itemsHtml += `<tr>
      <td style="padding:8px;border-bottom:1px solid #e2e8f0;">${p.sku}<br><small>${p.name}</small></td>
      <td style="padding:8px;border-bottom:1px solid #e2e8f0;text-align:center;">${qty}</td>
      <td style="padding:8px;border-bottom:1px solid #e2e8f0;text-align:right;">${formatMoney(p.price, p.currency)}</td>
      <td style="padding:8px;border-bottom:1px solid #e2e8f0;text-align:right;">${formatNGN(unit)}</td>
      <td style="padding:8px;border-bottom:1px solid #e2e8f0;text-align:right;">${formatNGN(line)}</td>
    </tr>`;
  });

  const total = subtotal * (1 - discount / 100);
  const quoteNum = currentQuoteId
    ? (data.quotes.find(q => q.id === currentQuoteId) || {}).quoteNumber || 'DRAFT'
    : 'DRAFT';

  const co = data.company;
  const html = `
    <div style="font-family: system-ui, sans-serif; color: #1e293b;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #0f766e;padding-bottom:16px;margin-bottom:24px;">
        <div>
          <h1 style="margin:0;font-size:22px;color:#0f766e;">${co.name}</h1>
          <p style="margin:4px 0 0;font-size:12px;color:#64748b;">${co.address}</p>
          <p style="margin:2px 0;font-size:12px;color:#64748b;">Tel: ${co.phone1} | ${co.phone2}</p>
          <p style="margin:2px 0;font-size:12px;color:#64748b;">${co.email}</p>
        </div>
        <div style="text-align:right;">
          <h2 style="margin:0;font-size:20px;color:#0f766e;">QUOTATION</h2>
          <p style="margin:8px 0 0;font-size:13px;"><strong>${quoteNum}</strong></p>
          <p style="margin:2px 0;font-size:12px;color:#64748b;">Date: ${new Date().toLocaleDateString()}</p>
          ${valid ? `<p style="margin:2px 0;font-size:12px;color:#64748b;">Valid until: ${valid}</p>` : ''}
          <p style="margin:2px 0;font-size:12px;">Status: ${status.toUpperCase()}</p>
        </div>
      </div>

      <div style="margin-bottom:24px;">
        <p style="margin:0;font-size:11px;color:#64748b;text-transform:uppercase;">Bill To</p>
        <p style="margin:4px 0 0;font-weight:600;font-size:15px;">${client ? client.name : '—'}</p>
        ${client && client.contact ? `<p style="margin:2px 0;font-size:13px;">Attn: ${client.contact}</p>` : ''}
        ${client && client.address ? `<p style="margin:2px 0;font-size:12px;color:#64748b;">${client.address}</p>` : ''}
        ${client && client.phone ? `<p style="margin:2px 0;font-size:12px;color:#64748b;">${client.phone}</p>` : ''}
      </div>

      <p style="font-weight:600;margin-bottom:8px;">Project / Title: ${title}</p>

      <table style="width:100%;border-collapse:collapse;font-size:13px;margin-bottom:24px;">
        <thead>
          <tr style="background:#f0fdfa;text-align:left;">
            <th style="padding:10px 8px;border-bottom:2px solid #0f766e;">Item</th>
            <th style="padding:10px 8px;border-bottom:2px solid #0f766e;text-align:center;">Qty</th>
            <th style="padding:10px 8px;border-bottom:2px solid #0f766e;text-align:right;">Unit Price</th>
            <th style="padding:10px 8px;border-bottom:2px solid #0f766e;text-align:right;">Unit (NGN)</th>
            <th style="padding:10px 8px;border-bottom:2px solid #0f766e;text-align:right;">Line Total (NGN)</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
      </table>

      <div style="display:flex;justify-content:flex-end;">
        <div style="width:260px;font-size:13px;">
          <div style="display:flex;justify-content:space-between;padding:4px 0;">
            <span>Subtotal</span><span>${formatNGN(subtotal)}</span>
          </div>
          ${discount > 0 ? `<div style="display:flex;justify-content:space-between;padding:4px 0;"><span>Discount (${discount}%)</span><span>-${formatNGN(subtotal * discount / 100)}</span></div>` : ''}
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-top:2px solid #0f766e;font-weight:700;font-size:16px;color:#0f766e;">
            <span>TOTAL (NGN)</span><span>${formatNGN(total)}</span>
          </div>
        </div>
      </div>

      ${notes ? `<div style="margin-top:32px;padding:12px;background:#f8fafc;border-radius:6px;font-size:12px;"><strong>Notes / Terms</strong><br>${notes.replace(/\n/g, '<br>')}</div>` : ''}

      <div style="margin-top:48px;font-size:11px;color:#64748b;border-top:1px solid #e2e8f0;padding-top:12px;">
        <p>This quotation is generated by Medicano Resources Limited. Prices are converted to Naira using the prevailing rates at the time of quotation.</p>
        <p style="margin-top:4px;">Current rates: 1 USD = ₦${data.rates.USD.toLocaleString()} | 1 EUR = ₦${data.rates.EUR.toLocaleString()}</p>
        <p style="margin-top:16px;">Thank you for your business.</p>
      </div>
    </div>
  `;

  // Open a clean new window with ONLY the quote (no app UI / screenshot)
  const printWin = window.open('', '_blank', 'width=900,height=700');
  if (!printWin) {
    alert('Please allow pop-ups to print the quotation.');
    return;
  }
  const clientName = client ? client.name : 'Client';
  // Clean name for filename suggestion (remove characters that are bad in filenames)
  const safeClientName = clientName.replace(/[\\/:*?"<>|]/g, ' ').replace(/\s+/g, ' ').trim();
  const docTitle = `Quotation ${quoteNum} - ${safeClientName}`;

  printWin.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${docTitle}</title>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; color: #1e293b; margin: 0; padding: 24px; }
    @media print {
      body { padding: 0; }
      @page { margin: 15mm; }
    }
  </style>
</head>
<body>
  ${html}
  <script>
    window.onload = function() {
      window.print();
    };
  <\/script>
</body>
</html>`);
  printWin.document.close();
}

// -------------------- Rates --------------------
function renderRates() {
  document.getElementById('rate-usd').value = data.rates.USD;
  document.getElementById('rate-eur').value = data.rates.EUR;
  const mode = data.rates.mode || 'manual';
  document.querySelectorAll('input[name="rate-mode"]').forEach(r => {
    r.checked = r.value === mode;
  });
  onRateModeChange();
  document.getElementById('rates-updated').textContent = data.rates.updatedAt
    ? 'Last updated: ' + new Date(data.rates.updatedAt).toLocaleString()
    : '';
}

function onRateModeChange() {
  const mode = document.querySelector('input[name="rate-mode"]:checked')?.value || 'manual';
  const fetchBtn = document.getElementById('btn-fetch-rates');
  const usd = document.getElementById('rate-usd');
  const eur = document.getElementById('rate-eur');
  if (fetchBtn) fetchBtn.classList.toggle('hidden', mode !== 'auto');
  if (usd) usd.readOnly = mode === 'auto';
  if (eur) eur.readOnly = mode === 'auto';
  if (mode === 'auto') {
    usd.style.opacity = '0.85';
    eur.style.opacity = '0.85';
  } else {
    usd.style.opacity = '1';
    eur.style.opacity = '1';
  }
}

function saveRates() {
  const mode = document.querySelector('input[name="rate-mode"]:checked')?.value || 'manual';
  data.rates.mode = mode;
  if (mode === 'manual') {
    data.rates.USD = parseFloat(document.getElementById('rate-usd').value) || data.rates.USD;
    data.rates.EUR = parseFloat(document.getElementById('rate-eur').value) || data.rates.EUR;
    data.rates.updatedAt = new Date().toISOString();
  }
  saveData();
  updateRatesDisplay();
  renderRates();
  alert(mode === 'auto' ? 'Auto mode saved. Use “Fetch latest rates” to update.' : 'Exchange rates saved.');
}

async function fetchAutoRates() {
  const status = document.getElementById('rates-status');
  if (status) status.textContent = 'Fetching rates…';
  try {
    // Free API — no key required (open.er-api.com)
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) throw new Error('Network error');
    const json = await res.json();
    if (json.result !== 'success' || !json.rates || !json.rates.NGN) {
      throw new Error('Unexpected API response');
    }
    const usdNgn = json.rates.NGN;
    // EUR from USD: NGN per EUR ≈ NGN/USD * USD/EUR = NGN/USD / (EUR rate in USD terms)
    // json.rates.EUR is how many EUR per 1 USD, so 1 EUR in NGN = usdNgn / json.rates.EUR
    const eurNgn = json.rates.EUR ? (usdNgn / json.rates.EUR) : data.rates.EUR;

    data.rates.USD = Math.round(usdNgn * 100) / 100;
    data.rates.EUR = Math.round(eurNgn * 100) / 100;
    data.rates.mode = 'auto';
    data.rates.updatedAt = new Date().toISOString();
    saveData();
    updateRatesDisplay();
    renderRates();
    if (status) status.textContent = 'Rates updated from open.er-api.com';
    alert('Latest rates fetched successfully.');
  } catch (err) {
    console.error(err);
    if (status) status.textContent = 'Could not fetch rates. Check internet or use Manual mode.';
    alert('Could not fetch rates. Stay on Manual mode or try again when online.');
  }
}

// -------------------- Settings --------------------
function renderSettings() {
  const c = data.company;
  document.getElementById('set-company').value = c.name;
  document.getElementById('set-email').value = c.email;
  document.getElementById('set-address').value = c.address;
  document.getElementById('set-phone1').value = c.phone1;
  document.getElementById('set-phone2').value = c.phone2;
  renderCategoriesList();
  renderTermsEditor();
}

function toggleSettingsPanel(id) {
  const panel = document.querySelector('.settings-panel[data-panel="' + id + '"]');
  if (!panel) return;
  panel.classList.toggle('collapsed');
}

function renderTermsEditor() {
  const box = document.getElementById('terms-editor');
  if (!box) return;
  if (!data.terms || !data.terms.length) {
    data.terms = JSON.parse(JSON.stringify(DEFAULT_DATA.terms));
  }
  box.innerHTML = data.terms.map((t, i) => `
    <div class="border border-slate-200 rounded-lg p-3 space-y-2" data-term-idx="${i}">
      <div class="flex justify-between items-center gap-2">
        <label class="text-xs font-medium text-slate-500">Heading</label>
        <button type="button" onclick="removeTermRow(${i})" class="text-xs text-red-500 hover:underline">Remove</button>
      </div>
      <input type="text" class="term-title w-full px-3 py-2 border border-slate-300 rounded-lg text-sm font-medium" value="${escHtml(t.title || '')}" />
      <label class="text-xs font-medium text-slate-500">Body text</label>
      <textarea class="term-body w-full px-3 py-2 border border-slate-300 rounded-lg text-sm" rows="3">${escHtml(t.body || '')}</textarea>
    </div>
  `).join('');
}

function addTermRow() {
  if (!data.terms) data.terms = [];
  data.terms.push({ title: 'New clause', body: '' });
  renderTermsEditor();
}

function removeTermRow(idx) {
  if (!data.terms) return;
  data.terms.splice(idx, 1);
  renderTermsEditor();
}

function saveTerms() {
  const box = document.getElementById('terms-editor');
  if (!box) return;
  const rows = [...box.querySelectorAll('[data-term-idx]')];
  data.terms = rows.map(row => ({
    title: row.querySelector('.term-title')?.value.trim() || '',
    body: row.querySelector('.term-body')?.value.trim() || ''
  })).filter(t => t.title || t.body);
  if (!data.terms.length) {
    data.terms = JSON.parse(JSON.stringify(DEFAULT_DATA.terms));
  }
  saveData();
  alert('Terms & Conditions saved. They will appear on the next presentation PDF.');
}

function resetTerms() {
  data.terms = JSON.parse(JSON.stringify(DEFAULT_DATA.terms));
  saveData();
  renderTermsEditor();
  alert('Terms reset to defaults.');
}

function saveSettings() {
  data.company.name = document.getElementById('set-company').value.trim();
  data.company.email = document.getElementById('set-email').value.trim();
  data.company.address = document.getElementById('set-address').value.trim();
  data.company.phone1 = document.getElementById('set-phone1').value.trim();
  data.company.phone2 = document.getElementById('set-phone2').value.trim();
  saveData();
  alert('Company settings saved.');
}

function renderCategoriesList() {
  const list = document.getElementById('categories-list');
  if (!list) return;
  const cats = (data.categories || []).slice().sort();
  if (cats.length === 0) {
    list.innerHTML = '<li class="px-4 py-3 text-slate-400 text-center">No categories yet. Add one above.</li>';
    return;
  }
  list.innerHTML = cats.map(cat => `
    <li class="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50">
      <span>${cat}</span>
      <button onclick="deleteCategory('${cat.replace(/'/g, "\\'")}')" class="text-red-500 hover:underline text-xs">Delete</button>
    </li>
  `).join('');
}

function addCategory() {
  const input = document.getElementById('new-category');
  const name = (input?.value || '').trim();
  if (!name) {
    alert('Please enter a category name.');
    return;
  }
  if (!data.categories) data.categories = [];
  const exists = data.categories.some(c => c.toLowerCase() === name.toLowerCase());
  if (exists) {
    alert('This category already exists.');
    return;
  }
  data.categories.push(name);
  data.categories.sort();
  saveData();
  input.value = '';
  renderCategoriesList();
  populateCategorySelect();
}

function deleteCategory(name) {
  const inUse = data.products.some(p => p.category === name);
  if (inUse && !confirm(`"${name}" is used by some equipment. Delete anyway?`)) return;
  data.categories = (data.categories || []).filter(c => c !== name);
  saveData();
  renderCategoriesList();
  populateCategorySelect();
}

function populateCategorySelect(selectedValue) {
  const sel = document.getElementById('p-category');
  if (!sel) return;
  const cats = (data.categories || []).slice().sort();
  const current = selectedValue !== undefined ? selectedValue : sel.value;
  sel.innerHTML = '<option value="">Select category...</option>' +
    cats.map(c => `<option value="${c}" ${c === current ? 'selected' : ''}>${c}</option>`).join('');
  // If editing a product with a category not in the list, still show it
  if (current && !cats.includes(current)) {
    sel.innerHTML += `<option value="${current}" selected>${current} (not in list)</option>`;
  }
}

// -------------------- Data import/export --------------------
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `medicano-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadCsv(filename, rows) {
  const escape = (v) => {
    const s = String(v ?? '');
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  };
  const csv = rows.map(r => r.map(escape).join(',')).join('\r\n');
  // BOM so Excel opens UTF-8 correctly
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function exportProductsExcel() {
  const rows = [
    ['SKU', 'Name', 'Category', 'Brand', 'Description', 'Features', 'Price', 'Currency', 'Price NGN', 'Stock', 'Low Stock', 'Active']
  ];
  data.products.forEach(p => {
    rows.push([
      p.sku, p.name, p.category, p.brand || '', p.description || '', p.features || '',
      p.price, p.currency, Math.round(toNGN(p.price, p.currency) * 100) / 100,
      p.stock, p.lowStock, p.active ? 'Yes' : 'No'
    ]);
  });
  downloadCsv(`medicano-equipment-${new Date().toISOString().slice(0, 10)}.csv`, rows);
  alert('Equipment catalog exported. Open the CSV file in Excel.');
}

function downloadEquipmentTemplate() {
  const rows = [
    ['SKU', 'Name', 'Category', 'Brand', 'Description', 'Features', 'Price', 'Currency', 'Stock', 'Low Stock', 'Active'],
    ['MRI-3T-001', '3.0T MRI Scanner System', 'Imaging', 'Siemens', 'Full-body 3.0 Tesla MRI', '3.0 Tesla magnet', '850000', 'USD', '2', '1', 'Yes'],
    ['VENT-ICU-006', 'ICU Ventilator', 'Patient Monitoring & Life Support', 'Hamilton', 'Critical care ventilator', 'Advanced modes', '18500', 'USD', '12', '3', 'Yes']
  ];
  downloadCsv('medicano-equipment-template.csv', rows);
  alert('Template downloaded. Fill it in Excel, save as CSV, then use Import Spreadsheet.');
}

function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', i = 0, inQuotes = false;
  const s = text.replace(/^\uFEFF/, '');
  while (i < s.length) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') { cell += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      cell += c; i++; continue;
    }
    if (c === '"') { inQuotes = true; i++; continue; }
    if (c === ',') { row.push(cell); cell = ''; i++; continue; }
    if (c === '\n' || c === '\r') {
      if (c === '\r' && s[i + 1] === '\n') i++;
      row.push(cell); cell = '';
      if (row.some(x => String(x).trim() !== '')) rows.push(row);
      row = []; i++; continue;
    }
    cell += c; i++;
  }
  row.push(cell);
  if (row.some(x => String(x).trim() !== '')) rows.push(row);
  return rows;
}

function normalizeHeader(h) {
  return String(h || '').trim().toLowerCase().replace(/[_\s]+/g, ' ');
}

function importProductsFromCsv(file) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const rows = parseCsv(ev.target.result);
      if (rows.length < 2) {
        alert('Spreadsheet is empty or has no data rows.');
        return;
      }
      const headers = rows[0].map(normalizeHeader);
      const col = (...names) => {
        for (const n of names) {
          const idx = headers.indexOf(n);
          if (idx >= 0) return idx;
        }
        return -1;
      };
      const iSku = col('sku');
      const iName = col('name', 'equipment', 'product', 'item');
      const iCat = col('category');
      const iBrand = col('brand');
      const iDesc = col('description', 'description / specs', 'specs');
      const iFeat = col('features', 'key features');
      const iPrice = col('price');
      const iCur = col('currency');
      const iStock = col('stock', 'stock qty', 'qty');
      const iLow = col('low stock', 'low stock alert');
      const iActive = col('active');

      if (iSku < 0 || iName < 0 || iPrice < 0) {
        alert('Spreadsheet must have at least: SKU, Name, Price\n\nDownload the template for the correct format.');
        return;
      }

      let added = 0, updated = 0, skipped = 0;
      if (!data.categories) data.categories = [];

      for (let r = 1; r < rows.length; r++) {
        const row = rows[r];
        const sku = String(row[iSku] || '').trim();
        const name = String(row[iName] || '').trim();
        if (!sku || !name) { skipped++; continue; }

        const price = parseFloat(String(row[iPrice] || '0').replace(/,/g, '')) || 0;
        let currency = iCur >= 0 ? String(row[iCur] || 'USD').trim().toUpperCase() : 'USD';
        if (!['USD', 'EUR', 'NGN'].includes(currency)) currency = 'USD';
        const category = iCat >= 0 ? String(row[iCat] || 'General').trim() : 'General';
        const brand = iBrand >= 0 ? String(row[iBrand] || '').trim() : '';
        const description = iDesc >= 0 ? String(row[iDesc] || '').trim() : '';
        const features = iFeat >= 0 ? String(row[iFeat] || '').trim() : '';
        const stock = iStock >= 0 ? parseInt(row[iStock], 10) || 0 : 0;
        const lowStock = iLow >= 0 ? parseInt(row[iLow], 10) || 0 : 2;
        let active = true;
        if (iActive >= 0) {
          const a = String(row[iActive] || 'yes').trim().toLowerCase();
          active = !(a === 'no' || a === 'false' || a === '0' || a === 'inactive');
        }

        if (category && !data.categories.some(c => c.toLowerCase() === category.toLowerCase())) {
          data.categories.push(category);
        }

        const existing = data.products.find(p => p.sku.toLowerCase() === sku.toLowerCase());
        if (existing) {
          existing.name = name;
          existing.category = category;
          existing.brand = brand;
          existing.description = description;
          existing.features = features;
          existing.price = price;
          existing.currency = currency;
          existing.stock = stock;
          existing.lowStock = lowStock;
          existing.active = active;
          updated++;
        } else {
          data.products.push({
            id: uid(),
            sku, name, category, brand, description, features,
            price, currency, stock, lowStock, active, image: ''
          });
          added++;
        }
      }

      data.categories.sort();
      saveData();
      renderProducts();
      renderDashboard();
      if (typeof populateCategorySelect === 'function') populateCategorySelect();
      alert('Import complete.\n\nAdded: ' + added + '\nUpdated: ' + updated + '\nSkipped: ' + skipped);
    } catch (err) {
      console.error(err);
      alert('Could not read the spreadsheet. Save as CSV (UTF-8) from Excel and try again.');
    }
  };
  reader.readAsText(file);
}

function onImportProductsFile(e) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const name = file.name.toLowerCase();
  if (name.endsWith('.xlsx') || name.endsWith('.xls')) {
    alert('Please save your Excel file as CSV first:\n\nFile → Save As → CSV (Comma delimited)\n\nThen import the .csv file.');
    e.target.value = '';
    return;
  }
  importProductsFromCsv(file);
  e.target.value = '';
}

function exportQuotesExcel() {
  const rows = [
    ['Quote #', 'Client', 'Title', 'Status', 'Discount %', 'Subtotal NGN', 'Total NGN', 'Valid Until', 'Created', 'Items']
  ];
  data.quotes.forEach(q => {
    const client = getClient(q.clientId);
    const itemsSummary = (q.items || []).map(i => `${i.qty}x ${i.name || i.sku}`).join('; ');
    rows.push([
      q.quoteNumber,
      client ? client.name : '',
      q.title,
      q.status,
      q.discount || 0,
      q.subtotalNGN,
      q.totalNGN,
      q.validUntil || '',
      q.createdAt ? new Date(q.createdAt).toLocaleDateString() : '',
      itemsSummary
    ]);
  });
  downloadCsv(`medicano-quotes-${new Date().toISOString().slice(0, 10)}.csv`, rows);
  alert('Quotes exported. Open the CSV file in Excel.');
}

function emailQuote() {
  // Build summary and open mail client; user can attach the PDF after Print/Save
  const clientId = document.getElementById('quote-client')?.value;
  const client = getClient(clientId);
  const title = document.getElementById('quote-title')?.value || 'Quotation';
  const total = document.getElementById('quote-total')?.textContent || '';
  const quoteNum = currentQuoteId
    ? (data.quotes.find(q => q.id === currentQuoteId) || {}).quoteNumber || 'DRAFT'
    : 'DRAFT';
  const co = data.company;

  let itemsText = '';
  document.querySelectorAll('#quote-items-tbody tr').forEach(row => {
    const productId = row.querySelector('.qi-product')?.value;
    if (!productId) return;
    const p = getProduct(productId);
    const qty = row.querySelector('.qi-qty')?.value || 1;
    itemsText += `- ${qty} x ${p.name} (${p.sku})\n`;
  });

  const subject = encodeURIComponent(`Quotation ${quoteNum} — ${co.name}`);
  const body = encodeURIComponent(
    `Dear ${client ? (client.contact || client.name) : 'Sir/Madam'},\n\n` +
    `Please find our quotation details below.\n\n` +
    `Quote #: ${quoteNum}\n` +
    `Project: ${title}\n` +
    `Client: ${client ? client.name : '—'}\n` +
    `Total: ${total}\n\n` +
    `Items:\n${itemsText || '(see attached PDF)'}\n\n` +
    `Please reply to confirm, or find the full PDF attached.\n\n` +
    `Kind regards,\n${co.name}\n${co.phone1} | ${co.phone2}\n${co.email}\n${co.address}`
  );

  const to = client && client.email ? client.email : '';
  const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

  // Try Web Share on mobile first
  if (navigator.share) {
    navigator.share({
      title: `Quotation ${quoteNum}`,
      text: decodeURIComponent(body),
    }).catch(() => {
      window.location.href = mailto;
    });
  } else {
    window.location.href = mailto;
  }

  setTimeout(() => {
    alert('Mail app opened.\n\nTip: Use “Print / PDF” first, save the PDF, then attach it to the email.');
  }, 400);
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const imported = JSON.parse(ev.target.result);
      if (!imported.products || !imported.clients) throw new Error('Invalid file');
      if (confirm('This will replace ALL current data. Continue?')) {
        data = imported;
        saveData();
        alert('Data imported successfully.');
        navigate('dashboard');
      }
    } catch (err) {
      alert('Invalid backup file.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function resetData() {
  data = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveData();
  navigate('dashboard');
  alert('All data has been reset to defaults.');
}

// -------------------- Client Presentation --------------------
function renderPresPicker() {
  const search = (document.getElementById('pres-search')?.value || '').toLowerCase();
  const container = document.getElementById('pres-picker');
  if (!container) return;

  const list = data.products.filter(p => p.active).filter(p =>
    !search ||
    p.name.toLowerCase().includes(search) ||
    p.sku.toLowerCase().includes(search) ||
    (p.category || '').toLowerCase().includes(search)
  );

  if (list.length === 0) {
    container.innerHTML = '<p class="p-4 text-slate-400 text-center">No equipment found</p>';
    return;
  }

  container.innerHTML = list.map(p => {
    const thumb = p.image
      ? `<img src="${p.image}" class="w-12 h-12 rounded object-cover border" alt="" />`
      : `<div class="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-slate-400">📷</div>`;
    return `<label class="flex items-center gap-3 p-3 hover:bg-slate-50 cursor-pointer">
      <input type="checkbox" class="pres-check rounded" value="${p.id}" />
      ${thumb}
      <div class="flex-1 min-w-0">
        <p class="font-medium truncate">${p.name}</p>
        <p class="text-xs text-slate-500">${p.sku} • ${p.category} • ${formatMoney(p.price, p.currency)}</p>
      </div>
    </label>`;
  }).join('');
}

function selectAllPres(checked) {
  document.querySelectorAll('#pres-picker .pres-check').forEach(cb => { cb.checked = checked; });
}

function formatNairaPlain(n) {
  const v = Math.round(Number(n) || 0);
  return 'N' + v.toLocaleString('en-US');
}

function loadJsPdf() {
  return new Promise((resolve, reject) => {
    if (window.jspdf && window.jspdf.jsPDF) return resolve(window.jspdf.jsPDF);
    if (window.jsPDF) return resolve(window.jsPDF);
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    s.onload = () => resolve((window.jspdf && window.jspdf.jsPDF) || window.jsPDF);
    s.onerror = () => reject(new Error('Could not load PDF engine. Please connect to the internet once to generate presentations.'));
    document.head.appendChild(s);
  });
}

function generatePresentation() {
  const checked = [...document.querySelectorAll('#pres-picker .pres-check:checked')];
  if (checked.length === 0) {
    alert('Please select at least one machine to include in the presentation.');
    return;
  }
  const products = checked.map(cb => getProduct(cb.value)).filter(Boolean);
  const forClient = document.getElementById('pres-client')?.value.trim() || 'Our Valued Hospital Partner';
  const co = data.company;
  const dateStr = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  const title = document.getElementById('pres-title')?.value.trim() || 'Medical Equipment Proposal';

  const btn = document.querySelector('#page-presentation button[onclick="generatePresentation()"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Generating PDF…'; }

  loadJsPdf().then(JsPDF => {
    buildPresentationPdf(JsPDF, products, co, forClient, dateStr, title);
  }).catch(err => {
    alert(err.message || 'PDF generation failed.');
  }).finally(() => {
    if (btn) { btn.disabled = false; btn.textContent = 'Generate High-Quality PDF Presentation'; }
  });
}

function buildPresentationPdf(JsPDF, products, co, forClient, dateStr, title) {
  const doc = new JsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const W = doc.internal.pageSize.getWidth();  // 595.28
  const H = doc.internal.pageSize.getHeight(); // 841.89
  const M = 42;
  const NAVY = [11, 22, 38];
  const NAVY2 = [24, 44, 68];
  const GOLD = [196, 162, 96];
  const GOLDSOFT = [214, 190, 140];
  const CREAM = [247, 244, 237];
  const CREAM2 = [238, 233, 222];
  const INK = [30, 30, 32];
  const GRAY = [110, 112, 118];
  const LINE = [222, 216, 202];
  const WHITE = [255, 255, 255];

  const setCol = (rgb) => doc.setTextColor(rgb[0], rgb[1], rgb[2]);
  const setFill = (rgb) => doc.setFillColor(rgb[0], rgb[1], rgb[2]);
  const setDraw = (rgb) => doc.setDrawColor(rgb[0], rgb[1], rgb[2]);

  // Standard body size matches T&C body (12.5pt)
  const BODY = 12.5;
  const BODY_LEAD = 16;

  function wrap(text, fontSize, maxW, font='normal') {
    doc.setFont('helvetica', font);
    doc.setFontSize(fontSize);
    return doc.splitTextToSize(String(text || ''), maxW);
  }

  // Consistent large page-number design on every page
  function footer(pageNo, total) {
    setCol(GRAY);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text((co.name || 'MEDICANO RESOURCES LIMITED').toUpperCase(), M, 28);
    setCol([115, 128, 140]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(18);
    doc.text(String(pageNo).padStart(2, '0') + ' / ' + String(total).padStart(2, '0'), W - M, 32, { align: 'right' });
  }

  function estimateCardH(p) {
    const feats = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean).length;
    const descLines = Math.max(1, wrap(p.description || '', BODY, W - 2 * M - 140).length);
    let h = 100 + descLines * BODY_LEAD + Math.max(feats, 0) * (BODY_LEAD - 1) + 28;
    return Math.max(140, Math.min(h, 260));
  }

  function packMachines(list) {
    const usable = 560;
    const gap = 12;
    const heights = list.map(estimateCardH);
    const packs = [];
    let i = 0;
    while (i < list.length) {
      const items = [];
      let used = 0;
      while (i < list.length) {
        const h = heights[i];
        const need = items.length ? h + gap : h;
        if (items.length && used + need > usable) break;
        items.push({ p: list[i], h, idx: i });
        used += need;
        i++;
        if (items.length >= 3) break;
      }
      packs.push({ items, usedH: used });
    }
    return packs;
  }

  function drawCard(p, x, y, w, h) {
    setFill(WHITE); setDraw(LINE); doc.setLineWidth(0.75);
    doc.roundedRect(x, y, w, h, 8, 8, 'FD');
    const pad = 14;
    // Square image frame (same width and height)
    const imgSize = Math.min(118, h - 2 * pad);
    const imgY = y + pad + Math.max(0, (h - 2 * pad - imgSize) / 2);
    setFill(NAVY2); setDraw(GOLD); doc.setLineWidth(1);
    doc.roundedRect(x + pad, imgY, imgSize, imgSize, 4, 4, 'FD');
    // image or placeholder
    if (p.image) {
      try {
        doc.addImage(p.image, 'JPEG', x + pad + 1, imgY + 1, imgSize - 2, imgSize - 2);
      } catch (e) {
        setCol(GOLDSOFT); doc.setFont('helvetica', 'normal'); doc.setFontSize(16);
        doc.text('EQ', x + pad + imgSize / 2, imgY + imgSize / 2 + 5, { align: 'center' });
      }
    } else {
      setCol(GOLDSOFT); doc.setFont('helvetica', 'normal'); doc.setFontSize(16);
      doc.text('EQ', x + pad + imgSize / 2, imgY + imgSize / 2 + 5, { align: 'center' });
    }
    const tx = x + pad + imgSize + 16;
    const tw = w - (pad + imgSize + 16) - pad;
    let ty = y + pad + 12;
    setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(7.4);
    doc.text(String(p.category || 'EQUIPMENT').toUpperCase(), tx, ty);
    ty += 16;
    setCol(NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
    const nameLines = wrap(p.name, 13, tw, 'bold');
    nameLines.slice(0, 2).forEach(ln => { doc.text(ln, tx, ty); ty += 14; });
    setDraw(LINE); doc.setLineWidth(1); doc.line(tx, ty, tx + 28, ty);
    ty += 14;
    setCol([87, 88, 92]); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
    wrap(p.description || '', BODY, tw).slice(0, 4).forEach(ln => { doc.text(ln, tx, ty); ty += BODY_LEAD - 2; });
    ty += 6;
    const feats = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean).slice(0, 5);
    feats.forEach(f => {
      setFill(GOLD); doc.circle(tx + 3, ty - 2, 1.6, 'F');
      setCol([56, 57, 61]); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
      doc.text(f.substring(0, 72), tx + 10, ty);
      ty += BODY_LEAD - 1;
    });
    const priceNgn = toNGN(p.price, p.currency);
    setCol(GRAY); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
    doc.text('PRICE', x + w - pad, y + h - pad - 18, { align: 'right' });
    setCol(NAVY); doc.setFontSize(BODY);
    doc.setFont('helvetica', 'bold');
    doc.text(formatNairaPlain(priceNgn), x + w - pad, y + h - pad - 2, { align: 'right' });
  }

  function drawSummaryPage(list, pageNo, total) {
    // Always its own page — 16pt type, professional spacing, vertically centered
    setFill(CREAM); doc.rect(0, 0, W, H, 'F');
    setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
    doc.text('INVESTMENT', M, 48);
    setCol(NAVY); doc.setFontSize(22);
    doc.text('Pricing Summary', M, 76);
    setDraw(GOLD); doc.setLineWidth(1.5); doc.line(M, 92, M + 54, 92);

    const rowH = 36;
    const padY = 28;
    const headerBand = 36;
    const totalBand = 48;
    const noteH = 24;
    const panelH = padY + headerBand + list.length * rowH + 16 + totalBand + noteH + padY;
    const cardW = W - 2 * M;
    const panelY = Math.max(120, (H - panelH) / 2);

    setFill(NAVY);
    doc.roundedRect(M, panelY, cardW, panelH, 10, 10, 'F');

    setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(12);
    doc.text('PRICING SUMMARY', M + 28, panelY + padY + 12);

    let ry = panelY + padY + headerBand + 8;
    list.forEach(p => {
      setCol(CREAM2); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
      const name = String(p.name || '').substring(0, 42);
      doc.text(name, M + 28, ry);
      doc.setFont('helvetica', 'bold');
      doc.text(formatNairaPlain(toNGN(p.price, p.currency)), W - M - 28, ry, { align: 'right' });
      ry += rowH;
    });

    setDraw([80, 100, 120]); doc.setLineWidth(0.9);
    doc.line(M + 28, ry - rowH / 2 + 4, W - M - 28, ry - rowH / 2 + 4);
    ry += 12;

    const totalNgn = list.reduce((s, p) => s + toNGN(p.price, p.currency), 0);
    setCol(CREAM); doc.setFont('helvetica', 'bold'); doc.setFontSize(14);
    doc.text('TOTAL PROPOSAL VALUE', M + 28, ry + 8);
    setCol(GOLD); doc.setFontSize(18);
    doc.text(formatNairaPlain(totalNgn), W - M - 28, ry + 8, { align: 'right' });

    setCol([160, 170, 185]); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
    doc.text('Prices are indicative and exclude installation, freight, and applicable duties.',
      M + 28, panelY + panelH - 18);

    footer(pageNo, total);
  }

  const packs = packMachines(products);
  // Pricing summary is always its own page
  const catPages = packs.length + 1;
  const totalPages = 2 + catPages + 2;

  // ---- COVER ----
  setFill(NAVY); doc.rect(0, 0, W, H, 'F');
  setDraw([56, 77, 102]); doc.setLineWidth(0.75);
  doc.rect(26, 26, W - 52, H - 52);
  const nameParts = (co.name || 'MEDICANO RESOURCES LIMITED').split(/\s+/);
  const main = (nameParts[0] || 'MEDICANO').toUpperCase();
  const sub = (nameParts.slice(1).join(' ') || 'RESOURCES LIMITED').toUpperCase();
  // Centered brand block
  setCol(CREAM); doc.setFont('helvetica', 'bold'); doc.setFontSize(36);
  doc.text(main, W / 2, H * 0.42, { align: 'center' });
  setCol(GOLDSOFT); doc.setFont('helvetica', 'normal'); doc.setFontSize(13);
  doc.text(sub, W / 2, H * 0.42 + 24, { align: 'center' });
  setDraw(GOLD); doc.setLineWidth(1.5);
  doc.line(W / 2 - 30, H * 0.42 + 42, W / 2 + 30, H * 0.42 + 42);
  setCol(CREAM); doc.setFontSize(15); doc.text('Medical Equipment Proposal', W / 2, H * 0.42 + 68, { align: 'center' });
  setCol([184, 191, 204]); doc.setFontSize(11.5);
  doc.text('Prepared for ' + forClient, W / 2, H * 0.42 + 92, { align: 'center' });
  doc.text(dateStr, W / 2, H * 0.42 + 110, { align: 'center' });
  // Bottom company details — smaller footer type on cover
  setDraw([56, 77, 102]); doc.setLineWidth(0.75);
  doc.line(M, H - 100, W - M, H - 100);
  const footSize = 9;
  const footLead = 12;
  setCol([210, 216, 224]); doc.setFont('helvetica', 'normal'); doc.setFontSize(footSize);
  const addrLines = wrap(co.address || '', footSize, W - 2 * M - 90);
  let by = H - 88;
  addrLines.forEach(ln => { doc.text(ln, M, by); by += footLead; });
  by += 2;
  if (co.phone1 || co.phone2) {
    doc.text('Tel: ' + [co.phone1, co.phone2].filter(Boolean).join('  |  '), M, by);
    by += footLead;
  }
  if (co.email) doc.text('Email: ' + co.email, M, by);
  setCol([115, 128, 140]); doc.setFont('helvetica', 'normal'); doc.setFontSize(18);
  doc.text('01 / ' + String(totalPages).padStart(2, '0'), W - M, H - 40, { align: 'right' });

  // ---- ABOUT ----
  doc.addPage();
  setFill(CREAM); doc.rect(0, 0, W, H, 'F');
  const panelW = 170;
  setFill(NAVY); doc.rect(W - panelW, 0, panelW, H, 'F');
  setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(10);
  doc.text('PRECISION', W - panelW + 18, 90);
  setCol(CREAM2); doc.setFontSize(10);
  doc.text('EQUIPMENT, BUILT', W - panelW + 18, 110);
  doc.text('FOR AFRICAN', W - panelW + 18, 128);
  doc.text('HEALTHCARE.', W - panelW + 18, 146);
  // No phone/email at bottom-right — contact is only in the cards below

  setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(9.5);
  doc.text('COMPANY PROFILE', M, 58);
  setCol(NAVY); doc.setFontSize(24);
  doc.text('About ' + (nameParts[0] || 'Medicano'), M, 92);
  doc.text('Resources Limited', M, 120);
  setDraw(GOLD); doc.setLineWidth(1.5); doc.line(M, 138, M + 54, 138);
  const about = (co.name || 'Medicano Resources Limited') + ' supplies and supports advanced medical equipment for hospitals, diagnostic centres, and specialist clinics across Nigeria. We partner with leading manufacturers to bring reliable systems backed by local installation, training, and after-sales support.';
  setCol([55, 56, 60]); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
  // Clear space between gold rule and company description
  let ay = 168;
  wrap(about, BODY, W - panelW - M - 28).forEach(ln => { doc.text(ln, M, ay); ay += BODY_LEAD; });
  ay += 22;
  setCol(NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(13);
  doc.text('What We Offer', M, ay); ay += 22;
  ['Certified new and pre-owned clinical systems', 'Site planning, installation, and commissioning', 'Preventive maintenance and engineer support', 'Staff training and clinical workflow onboarding', 'Flexible procurement and supply options'].forEach(item => {
    setFill(GOLD); doc.circle(M + 4, ay - 3, 2, 'F');
    setCol([55, 56, 60]); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
    doc.text(item, M + 14, ay); ay += BODY_LEAD + 2;
  });
  // Detail cards: address / phone / email — taller so full address fits
  ay += 28;
  const cardGap = 12;
  const leftW = W - panelW - M - 28;
  const cardW3 = (leftW - cardGap * 2) / 3;
  const cardH = 150;
  const cards = [
    ['REGISTERED OFFICE', co.address || '', 'text'],
    ['DIRECT LINE', [co.phone1, co.phone2].filter(Boolean).join('\n'), 'text'],
    ['CORRESPONDENCE', co.email || '', 'email']
  ];
  cards.forEach((card, i) => {
    const cx = M + i * (cardW3 + cardGap);
    setFill(WHITE); setDraw(LINE); doc.setLineWidth(0.75);
    doc.roundedRect(cx, ay, cardW3, cardH, 6, 6, 'FD');
    // Gold accent with clear space before the label and address
    setDraw(GOLD); doc.setLineWidth(1.6); doc.line(cx + 12, ay + 18, cx + 34, ay + 18);
    setCol(GRAY); doc.setFont('helvetica', 'bold'); doc.setFontSize(8);
    doc.text(card[0], cx + 12, ay + 40);
    setCol(NAVY); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
    let vy = ay + 60;
    const maxTextW = cardW3 - 24;
    if (card[2] === 'email' && card[1]) {
      const email = String(card[1]).trim();
      const lines = wrap(email, BODY, maxTextW);
      lines.forEach((ln, li) => {
        // Clickable mailto link (jsPDF)
        try {
          if (typeof doc.textWithLink === 'function') {
            setCol([11, 90, 160]);
            doc.textWithLink(ln, cx + 12, vy, { url: 'mailto:' + email });
          } else {
            setCol([11, 90, 160]);
            doc.text(ln, cx + 12, vy);
            const tw = doc.getTextWidth(ln);
            doc.link(cx + 12, vy - BODY + 2, tw, BODY + 2, { url: 'mailto:' + email });
          }
        } catch (e) {
          setCol([11, 90, 160]);
          doc.text(ln, cx + 12, vy);
        }
        // Underline to show it is a link
        setDraw([11, 90, 160]); doc.setLineWidth(0.6);
        const tw2 = doc.getTextWidth(ln);
        doc.line(cx + 12, vy + 2, cx + 12 + tw2, vy + 2);
        vy += BODY_LEAD - 2;
      });
    } else {
      wrap(card[1], BODY, maxTextW).slice(0, 6).forEach(ln => {
        doc.text(ln, cx + 12, vy); vy += BODY_LEAD - 2;
      });
    }
  });
  footer(2, totalPages);

  // ---- CATALOGUE ----
  let pageNo = 3;
  packs.forEach((pack, pi) => {
    doc.addPage();
    setFill(CREAM); doc.rect(0, 0, W, H, 'F');
    setCol(NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(20);
    doc.text('Equipment Catalogue', M, 48);
    if (pi > 0) {
      setCol(GRAY); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
      doc.text('continued', W - M, 48, { align: 'right' });
    } else {
      setCol(GRAY); doc.setFont('helvetica', 'normal'); doc.setFontSize(BODY);
      doc.text('Selected for your facility, with indicative pricing in Naira.', M, 66);
    }
    setDraw(GOLD); doc.setLineWidth(1.4); doc.line(M, 78, M + 54, 78);

    const gap = 12;
    const totalH = pack.items.reduce((s, it) => s + it.h, 0) + gap * (pack.items.length - 1);
    const topLimit = 95;
    const bottomLimit = 50;
    const area = H - topLimit - bottomLimit;
    // vertical center the card group
    let yTop = topLimit + Math.max(0, (area - totalH) / 2);
    const cardW = W - 2 * M;
    pack.items.forEach(it => {
      drawCard(it.p, M, yTop, cardW, it.h);
      yTop += it.h + gap;
    });
    footer(pageNo, totalPages);
    pageNo++;
  });

  // Pricing summary — always its own page
  doc.addPage();
  drawSummaryPage(products, pageNo, totalPages);
  pageNo++;

  // ---- TERMS (always ONE page — auto-fit spacing so nothing spills) ----
  let termHeadSize = 14;
  let termBodySize = 12.5;
  let termBodyLead = 17;
  let termGap = 16;
  let termHeadLead = 18;
  const termsList = (data.terms && data.terms.length) ? data.terms : DEFAULT_DATA.terms;

  function measureTermsBlock(list, bodySize, bodyLead, headLead, gap) {
    let h = 0;
    list.forEach((t) => {
      const val = t.body || t[1] || '';
      h += headLead;
      h += wrap(val, bodySize, W - 2 * M).length * bodyLead;
      h += gap;
    });
    return h;
  }

  doc.addPage();
  setFill(CREAM); doc.rect(0, 0, W, H, 'F');
  setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.text('COMMERCIAL TERMS', M, 46);
  setCol(NAVY); doc.setFontSize(22);
  doc.text('Terms and Conditions', M, 74);
  setDraw(GOLD); doc.setLineWidth(1.5); doc.line(M, 90, M + 54, 90);

  const usableTop = 110;
  const usableBottom = H - 48;
  const usableH = usableBottom - usableTop;

  let blockH = measureTermsBlock(termsList, termBodySize, termBodyLead, termHeadLead, termGap);
  let guard = 0;
  while (blockH > usableH && guard < 14) {
    termBodyLead = Math.max(13, termBodyLead - 0.5);
    termGap = Math.max(7, termGap - 0.8);
    termHeadLead = Math.max(14, termHeadLead - 0.4);
    if (guard > 5) {
      termBodySize = Math.max(10.5, termBodySize - 0.25);
      termHeadSize = Math.max(12, termHeadSize - 0.25);
    }
    blockH = measureTermsBlock(termsList, termBodySize, termBodyLead, termHeadLead, termGap);
    guard++;
  }

  // Vertically center the full T&C group on this single page
  let ty = usableTop + Math.max(0, (usableH - blockH) / 2);

  termsList.forEach((t) => {
    const lab = t.title || t[0] || '';
    const val = t.body || t[1] || '';
    const lines = wrap(val, termBodySize, W - 2 * M);
    setCol(NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(termHeadSize);
    doc.text(String(lab).toUpperCase(), M, ty); ty += termHeadLead;
    setCol([50, 51, 55]); doc.setFont('helvetica', 'normal'); doc.setFontSize(termBodySize);
    lines.forEach(ln => { doc.text(ln, M, ty); ty += termBodyLead; });
    ty += termGap;
  });
  footer(pageNo, totalPages);
  pageNo++;

  // ---- CLOSING (same font units as T&C) ----
  doc.addPage();
  setFill(CREAM); doc.rect(0, 0, W, H, 'F');
  setCol(GOLD); doc.setFont('helvetica', 'bold'); doc.setFontSize(11);
  doc.text('NEXT STEPS', M, 48);
  setDraw(GOLD); doc.setLineWidth(1.5); doc.line(M, 64, M + 54, 64);

  // Measure closing block then center vertically
  const closeLines1 = wrap('Thank you for doing business with us while we look forward to receiving the confirmation of your order.', termBodySize, W - 2 * M - 40);
  const closeLines2 = wrap('For further information or any clarification, please contact us the undersigned on Tel. 09099995426 or call Francis on 08023203522. E-mail: enquiries@medicanoresources.com', termBodySize, W - 2 * M - 40);
  const closeBlockH = closeLines1.length * termBodyLead + 14 + closeLines2.length * termBodyLead + 28 + termBodyLead + 36 + termHeadLead + 40 + termBodyLead;
  let cy = 80 + Math.max(0, (H - 80 - 50 - closeBlockH) / 2);

  setCol(INK); doc.setFont('helvetica', 'normal'); doc.setFontSize(termBodySize);
  closeLines1.forEach(ln => { doc.text(ln, M, cy); cy += termBodyLead; });
  cy += 14;
  closeLines2.forEach(ln => { doc.text(ln, M, cy); cy += termBodyLead; });
  cy += 28;
  doc.setFontSize(termBodySize); doc.text('Yours faithfully,', M, cy);
  cy += 36;
  setCol(NAVY); doc.setFont('helvetica', 'bold'); doc.setFontSize(termHeadSize);
  doc.text('FOR: ' + (co.name || 'Medicano Resources Limited'), M, cy);
  cy += 40;
  doc.setFontSize(termHeadSize); doc.text('Francis Opara', M, cy);
  setCol(GRAY); doc.setFont('helvetica', 'normal'); doc.setFontSize(termBodySize);
  doc.text('CEO', M, cy + 18);
  footer(pageNo, totalPages);

  // Filename leads with client/hospital name
  const sanitize = (s, max) => String(s || '')
    .replace(/[\\/:*?"<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max || 50);
  const clientName = sanitize(forClient, 50) || 'Client';
  const docTitle = sanitize(title, 40) || 'Presentation';
  doc.save(clientName + ' - ' + docTitle + '.pdf');
}

function escHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// -------------------- Dark Mode --------------------
function toggleDarkMode() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('medicano_dark', isDark ? '1' : '0');
  const btn = document.getElementById('dark-toggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

function initDarkMode() {
  const saved = localStorage.getItem('medicano_dark');
  if (saved === '1' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    const btn = document.getElementById('dark-toggle');
    if (btn) btn.textContent = '☀️';
  }
}

// -------------------- Quote Product Picker --------------------
function renderQuoteProductPicker() {
  const search = (document.getElementById('quote-product-search')?.value || '').toLowerCase();
  const container = document.getElementById('quote-product-picker');
  if (!container) return;

  const active = data.products.filter(p => p.active);
  const list = active.filter(p =>
    !search ||
    p.name.toLowerCase().includes(search) ||
    p.sku.toLowerCase().includes(search) ||
    (p.category || '').toLowerCase().includes(search) ||
    (p.brand || '').toLowerCase().includes(search)
  );

  if (list.length === 0) {
    container.innerHTML = '<p class="p-3 text-slate-400 text-center">No equipment found</p>';
    return;
  }

  container.innerHTML = list.map(p => {
    const ngn = toNGN(p.price, p.currency);
    return `<label class="flex items-start gap-3 p-3 hover:bg-slate-50 cursor-pointer">
      <input type="checkbox" class="qp-check mt-1 rounded" value="${p.id}" data-sku="${p.sku}" />
      <div class="flex-1 min-w-0">
        <p class="font-medium truncate">${p.name}</p>
        <p class="text-xs text-slate-500">${p.sku} • ${p.category} • ${formatMoney(p.price, p.currency)} ≈ ${formatNGN(ngn)}</p>
      </div>
    </label>`;
  }).join('');
}

function selectAllQuoteProducts(checked) {
  document.querySelectorAll('#quote-product-picker .qp-check').forEach(cb => {
    cb.checked = checked;
  });
}

function addSelectedProductsToQuote() {
  const checked = [...document.querySelectorAll('#quote-product-picker .qp-check:checked')];
  if (checked.length === 0) {
    alert('Please select at least one equipment item.');
    return;
  }

  // Avoid duplicates already in quote
  const existingIds = new Set();
  document.querySelectorAll('#quote-items-tbody tr').forEach(row => {
    const sel = row.querySelector('.qi-product');
    if (sel && sel.value) existingIds.add(sel.value);
  });

  let added = 0;
  checked.forEach(cb => {
    const id = cb.value;
    if (existingIds.has(id)) return;
    addQuoteItemRow({ productId: id, qty: 1 });
    existingIds.add(id);
    added++;
  });

  // Clear selections
  selectAllQuoteProducts(false);
  if (document.getElementById('quote-product-search')) {
    document.getElementById('quote-product-search').value = '';
    renderQuoteProductPicker();
  }

  if (added === 0) {
    alert('Selected items are already in the quote.');
  } else {
    recalcQuote();
  }
}

// -------------------- UI helpers --------------------
function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// -------------------- Init --------------------
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  updateRatesDisplay();
  initDarkMode();

  // Sidebar links
  document.querySelectorAll('.sidebar-link').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(a.dataset.page);
    });
  });

  // Mobile menu
  document.getElementById('menu-btn').addEventListener('click', () => {
    const sb = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const isOpen = !sb.classList.contains('-translate-x-full');
    if (isOpen) {
      closeSidebar();
    } else {
      sb.classList.remove('-translate-x-full');
      sb.classList.add('translate-x-0');
      if (overlay) overlay.classList.remove('hidden');
    }
  });

  // Search listeners
  document.getElementById('product-search')?.addEventListener('input', renderProducts);
  document.getElementById('product-category-filter')?.addEventListener('change', renderProducts);
  document.getElementById('client-search')?.addEventListener('input', renderClients);
  document.getElementById('quote-status-filter')?.addEventListener('change', renderQuotes);

  // Close modals on backdrop click
  ['modal-product', 'modal-client'].forEach(id => {
    document.getElementById(id).addEventListener('click', (e) => {
      if (e.target.id === id) closeModal(id);
    });
  });

  navigate('dashboard');
});

function closeSidebar() {
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sb) {
    sb.classList.add('-translate-x-full');
    sb.classList.remove('translate-x-0');
  }
  if (overlay) overlay.classList.add('hidden');
}

// PWA service worker (works when served over https or localhost)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.log('SW registration skipped:', err.message);
    });
  });
}

// Auto-fetch rates on startup if mode is auto and online
window.addEventListener('load', () => {
  setTimeout(() => {
    if (data && data.rates && data.rates.mode === 'auto' && navigator.onLine) {
      fetchAutoRates().catch(() => {});
    }
  }, 1500);
});
