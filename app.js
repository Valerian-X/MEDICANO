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
  document.getElementById('rates-updated').textContent = data.rates.updatedAt
    ? 'Last updated: ' + new Date(data.rates.updatedAt).toLocaleString()
    : '';
}

function saveRates() {
  data.rates.USD = parseFloat(document.getElementById('rate-usd').value) || data.rates.USD;
  data.rates.EUR = parseFloat(document.getElementById('rate-eur').value) || data.rates.EUR;
  data.rates.updatedAt = new Date().toISOString();
  saveData();
  updateRatesDisplay();
  renderRates();
  alert('Exchange rates saved.');
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

function generatePresentation() {
  const checked = [...document.querySelectorAll('#pres-picker .pres-check:checked')];
  if (checked.length === 0) {
    alert('Please select at least one machine to include in the presentation.');
    return;
  }

  const products = checked.map(cb => getProduct(cb.value)).filter(Boolean);
  const title = document.getElementById('pres-title')?.value.trim() || 'Medical Equipment Portfolio';
  const forClient = document.getElementById('pres-client')?.value.trim() || '';
  const layout = document.querySelector('input[name="pres-layout"]:checked')?.value || 'detailed';
  const co = data.company;

  let bodyHtml = '';

  if (layout === 'detailed') {
    // One premium page per product
    products.forEach((p, idx) => {
      const features = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean);
      const featureList = features.length
        ? `<ul style="margin:12px 0 0;padding-left:18px;color:#334155;font-size:13px;line-height:1.6;">${features.map(f => `<li style="margin-bottom:4px;">${f}</li>`).join('')}</ul>`
        : '';
      const imgBlock = p.image
        ? `<div style="width:100%;height:280px;background:#f1f5f9;border-radius:12px;overflow:hidden;margin-bottom:20px;">
             <img src="${p.image}" style="width:100%;height:100%;object-fit:cover;" alt="${p.name}" />
           </div>`
        : `<div style="width:100%;height:180px;background:linear-gradient(135deg,#0f766e22,#14b8a622);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;color:#0f766e;font-size:48px;">🏥</div>`;

      bodyHtml += `
        <div style="page-break-after:always;padding:8px 0 24px;">
          ${idx === 0 ? presentationCover(co, title, forClient, products.length) : ''}
          <div style="border-top:4px solid #0f766e;padding-top:20px;">
            <p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#0f766e;margin:0 0 6px;">${p.category || 'Equipment'}</p>
            <h2 style="margin:0 0 4px;font-size:22px;color:#0f172a;font-weight:700;">${p.name}</h2>
            <p style="margin:0 0 16px;font-size:12px;color:#64748b;">${p.sku}${p.brand ? ' • ' + p.brand : ''}</p>
            ${imgBlock}
            <div style="display:flex;gap:24px;align-items:flex-start;">
              <div style="flex:1;">
                ${p.description ? `<p style="margin:0;font-size:13px;color:#334155;line-height:1.6;">${p.description}</p>` : ''}
                ${featureList}
              </div>
              <div style="width:160px;flex-shrink:0;background:#f0fdfa;border:1px solid #99f6e4;border-radius:12px;padding:16px;text-align:center;">
                <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:#0f766e;">Price</p>
                <p style="margin:8px 0 0;font-size:18px;font-weight:700;color:#0f766e;">${formatMoney(p.price, p.currency)}</p>
                <p style="margin:4px 0 0;font-size:12px;color:#64748b;">${formatNGN(toNGN(p.price, p.currency))}</p>
              </div>
            </div>
          </div>
          <div style="margin-top:32px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;display:flex;justify-content:space-between;">
            <span>${co.name}</span>
            <span>Page ${idx + 1} of ${products.length}</span>
          </div>
        </div>`;
    });
  } else {
    // Brochure: 2 per page
    bodyHtml += presentationCover(co, title, forClient, products.length);
    for (let i = 0; i < products.length; i += 2) {
      const pair = products.slice(i, i + 2);
      bodyHtml += `<div style="page-break-after:always;padding:8px 0;">`;
      pair.forEach(p => {
        const features = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean).slice(0, 4);
        const featureList = features.length
          ? `<ul style="margin:8px 0 0;padding-left:16px;color:#475569;font-size:11px;line-height:1.5;">${features.map(f => `<li>${f}</li>`).join('')}</ul>`
          : '';
        const img = p.image
          ? `<img src="${p.image}" style="width:120px;height:120px;object-fit:cover;border-radius:10px;border:1px solid #e2e8f0;" alt="" />`
          : `<div style="width:120px;height:120px;border-radius:10px;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:32px;">🏥</div>`;

        bodyHtml += `
          <div style="display:flex;gap:16px;padding:16px 0;border-bottom:1px solid #e2e8f0;align-items:flex-start;">
            ${img}
            <div style="flex:1;min-width:0;">
              <p style="margin:0;font-size:10px;text-transform:uppercase;letter-spacing:0.1em;color:#0f766e;">${p.category || ''}</p>
              <h3 style="margin:2px 0 4px;font-size:15px;color:#0f172a;">${p.name}</h3>
              <p style="margin:0;font-size:11px;color:#64748b;">${p.sku}${p.brand ? ' • ' + p.brand : ''}</p>
              ${p.description ? `<p style="margin:6px 0 0;font-size:11px;color:#475569;line-height:1.45;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${p.description}</p>` : ''}
              ${featureList}
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#0f766e;">${formatMoney(p.price, p.currency)}</p>
              <p style="margin:2px 0 0;font-size:11px;color:#64748b;">${formatNGN(toNGN(p.price, p.currency))}</p>
            </div>
          </div>`;
      });
      bodyHtml += `
        <div style="margin-top:20px;font-size:10px;color:#94a3b8;display:flex;justify-content:space-between;">
          <span>${co.name}</span>
          <span>${Math.floor(i / 2) + 1}</span>
        </div>
      </div>`;
    }
  }

  const safeTitle = title.replace(/[\\/:*?"<>|]/g, ' ').slice(0, 60);
  const printWin = window.open('', '_blank', 'width=950,height=700');
  if (!printWin) {
    alert('Please allow pop-ups to generate the presentation.');
    return;
  }

  printWin.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${safeTitle} - ${co.name}</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; color: #0f172a; margin: 0; padding: 28px 32px; background: #fff; }
    @media print {
      body { padding: 12mm; }
      @page { margin: 12mm; size: A4; }
    }
  </style>
</head>
<body>
  ${bodyHtml}
  <script>window.onload = function(){ window.print(); };<\/script>
</body>
</html>`);
  printWin.document.close();
}

function presentationCover(co, title, forClient, count) {
  return `
    <div style="page-break-after:always;min-height:70vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:40px 20px;">
      <div style="width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,#0f766e,#14b8a6);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:24px;">🏥</div>
      <p style="margin:0;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#0f766e;font-weight:600;">${co.name}</p>
      <h1 style="margin:16px 0 8px;font-size:28px;font-weight:700;color:#0f172a;max-width:480px;line-height:1.25;">${title}</h1>
      ${forClient ? `<p style="margin:8px 0 0;font-size:14px;color:#475569;">Prepared for <strong>${forClient}</strong></p>` : ''}
      <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">${count} equipment item${count !== 1 ? 's' : ''} • ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      <div style="margin-top:48px;width:80px;height:3px;background:#0f766e;border-radius:2px;"></div>
      <p style="margin-top:24px;font-size:11px;color:#64748b;max-width:360px;line-height:1.5;">${co.address}<br>Tel: ${co.phone1} | ${co.phone2}<br>${co.email}</p>
    </div>`;
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

// PWA: simple service worker registration (optional, works when served over http)
if ('serviceWorker' in navigator) {
  // Can be enhanced later with a proper sw.js for full offline caching of the app shell
}
