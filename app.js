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

function generatePresentation() {
  const checked = [...document.querySelectorAll('#pres-picker .pres-check:checked')];
  if (checked.length === 0) {
    alert('Please select at least one machine to include in the presentation.');
    return;
  }

  const products = checked.map(cb => getProduct(cb.value)).filter(Boolean);
  const title = document.getElementById('pres-title')?.value.trim() || 'Medical Equipment Proposal';
  const forClient = document.getElementById('pres-client')?.value.trim() || 'Our Valued Hospital Partner';
  const layout = document.querySelector('input[name="pres-layout"]:checked')?.value || 'detailed';
  const co = data.company;
  const dateStr = new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });

  // Flexible packing: estimate card height and fill each page
  const GAP = 14;
  const SUMMARY_H = 28 + products.length * 22 + 70;
  const firstUsable = layout === 'detailed' ? 520 : 540;
  const nextUsable = layout === 'detailed' ? 560 : 580;

  function estimateCardHeight(p) {
    const feats = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean).length;
    const descLen = (p.description || '').length;
    const descLines = Math.max(1, Math.ceil(descLen / 70));
    // base image+pad ~170, tag+title ~40, desc, bullets, price ~30
    let h = 170 + 40 + descLines * 13 + Math.max(feats, 1) * 16 + 36;
    if (layout === 'detailed') h = Math.max(h, 210);
    else h = Math.max(h, 160);
    return Math.min(h, 320);
  }

  const heights = products.map(estimateCardHeight);
  const packs = []; // { items: [{p, idx, h}], startIdx, usedH }
  let i = 0;
  while (i < products.length) {
    const usable = packs.length === 0 ? firstUsable : nextUsable;
    const items = [];
    let used = 0;
    while (i < products.length) {
      const h = heights[i];
      const need = items.length === 0 ? h : h + GAP;
      // reserve summary space only on potential last pack
      const remainingAfter = products.length - i - 1;
      const reserve = remainingAfter === 0 ? Math.min(SUMMARY_H + 12, 160) : 0;
      if (used + need + (remainingAfter === 0 ? 0 : 0) > usable && items.length > 0) break;
      // if single card is huge, still place it
      if (items.length > 0 && used + need > usable) break;
      items.push({ p: products[i], idx: i, h });
      used += need;
      i++;
      // detailed prefers fewer per page if very tall
      if (layout === 'detailed' && items.length >= 2 && used > usable * 0.85) break;
      if (layout === 'brochure' && items.length >= 4) break;
    }
    packs.push({ items, startIdx: items[0].idx, usedH: used, usable });
  }

  // Try attach summary to last pack if space allows
  let summaryOwnPage = false;
  if (packs.length) {
    const last = packs[packs.length - 1];
    if (last.usedH + GAP + SUMMARY_H > last.usable) {
      summaryOwnPage = true;
    }
  }

  const catPageCount = packs.length + (summaryOwnPage ? 1 : 0);
  const totalPages = 2 + catPageCount + 2; // cover + about + catalogue(+summary) + terms + closing

  let pages = [];
  pages.push(presCoverPage(co, forClient, dateStr, totalPages));
  pages.push(presAboutPage(co, totalPages));

  packs.forEach((pack, pi) => {
    const pageNo = 3 + pi;
    const isFirstCat = pi === 0;
    const isLastCat = pi === packs.length - 1 && !summaryOwnPage;
    const center = pack.usedH < pack.usable * 0.72; // balance sparse pages
    pages.push(presCataloguePage(
      co, pack, products, pageNo, totalPages, isFirstCat, isLastCat, center, isLastCat
    ));
  });

  if (summaryOwnPage) {
    pages.push(presSummaryOnlyPage(co, products, 2 + packs.length + 1, totalPages));
  }

  pages.push(presTermsPage(co, 2 + catPageCount + 1, totalPages));
  pages.push(presClosingPage(co, forClient, 2 + catPageCount + 2, totalPages));

  const safeTitle = title.replace(/[\\/:*?"<>|]/g, ' ').slice(0, 60);
  const printWin = window.open('', '_blank', 'width=900,height=700');
  if (!printWin) {
    alert('Please allow pop-ups to generate the presentation.');
    return;
  }

  printWin.document.write(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${safeTitle} — ${co.name}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --navy: #0B1626;
      --navy2: #182C44;
      --gold: #C4A260;
      --goldsoft: #D6BE8C;
      --cream: #F7F4ED;
      --cream2: #EEE9DE;
      --ink: #1E1E20;
      --gray: #6E7076;
      --line: #DED8CA;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
      background: #333;
      color: var(--ink);
    }
    .page {
      width: 210mm;
      min-height: 297mm;
      margin: 0 auto 12px;
      background: var(--cream);
      position: relative;
      page-break-after: always;
      overflow: hidden;
    }
    .page:last-child { page-break-after: auto; }
    @media print {
      body { background: white; }
      .page { margin: 0; width: 100%; min-height: 100vh; box-shadow: none; }
      @page { size: A4; margin: 0; }
    }

    /* Cover */
    .cover { background: var(--navy); color: var(--cream); }
    .cover-frame {
      position: absolute; inset: 26pt;
      border: 0.75pt solid rgba(80,100,120,0.6);
      pointer-events: none;
    }
    .cover-inner {
      padding: 60px 48px 48px;
      min-height: 297mm;
      display: flex;
      flex-direction: column;
    }
    .cover-kicker {
      font-size: 8.5pt; font-weight: 500; letter-spacing: 0.28em;
      text-transform: uppercase; color: rgba(180,190,200,0.9);
    }
    .cover-center { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
    .cover-name { font-size: 36pt; font-weight: 700; letter-spacing: 0.04em; color: var(--cream); }
    .cover-sub { font-size: 12.5pt; font-weight: 300; letter-spacing: 0.35em; color: var(--goldsoft); margin-top: 6px; }
    .cover-rule { width: 54pt; height: 1.4pt; background: var(--gold); margin: 28px auto; }
    .cover-title { font-size: 14.5pt; font-weight: 400; color: var(--cream); }
    .cover-for { font-size: 10.5pt; font-weight: 300; color: rgba(180,190,200,0.95); margin-top: 14px; }
    .cover-date { font-size: 10.5pt; font-weight: 300; color: rgba(180,190,200,0.85); margin-top: 6px; }
    .cover-bottom { border-top: 0.75pt solid rgba(60,80,100,0.8); padding-top: 14px; font-size: 8.3pt; color: rgba(190,200,210,0.95); display: flex; justify-content: space-between; align-items: flex-end; }
    .cover-bottom .pg { color: var(--goldsoft); letter-spacing: 0.1em; }

    /* About */
    .about { display: flex; min-height: 297mm; }
    .about-left { flex: 1; padding: 48px 36px 40px 42px; }
    .about-right {
      width: 190pt; background: var(--navy); color: var(--cream);
      padding: 48px 24px 36px; display: flex; flex-direction: column;
    }
    .kicker { font-size: 9pt; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); }
    .about-h { font-size: 25pt; font-weight: 700; color: var(--navy); line-height: 1.15; margin-top: 12px; }
    .gold-rule { width: 54pt; height: 1.4pt; background: var(--gold); margin: 16px 0 20px; }
    .about-body { font-size: 10.3pt; color: #47484f; line-height: 1.55; }
    .about-h3 { font-size: 11.5pt; font-weight: 500; color: var(--navy); margin: 28px 0 12px; }
    .offer-list { list-style: none; }
    .offer-list li {
      font-size: 9.8pt; color: #47484f; padding-left: 16px; position: relative;
      margin-bottom: 10px; line-height: 1.4;
    }
    .offer-list li::before {
      content: ''; position: absolute; left: 0; top: 6px;
      width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
    }
    .detail-cards { display: flex; gap: 12px; margin-top: 32px; }
    .detail-card {
      flex: 1; background: #fff; border: 0.75pt solid var(--line);
      border-radius: 6pt; padding: 14px 12px; min-height: 90px;
    }
    .detail-card .bar { width: 22pt; height: 1.6pt; background: var(--gold); margin-bottom: 10px; }
    .detail-card .lab { font-size: 7.3pt; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gray); }
    .detail-card .val { font-size: 8.3pt; color: var(--navy); margin-top: 8px; line-height: 1.35; }
    .about-right .brand { font-size: 9pt; font-weight: 500; letter-spacing: 0.15em; color: var(--gold); margin-top: 24px; }
    .about-right .brand-lines { font-size: 9pt; font-weight: 500; letter-spacing: 0.12em; color: var(--cream2); line-height: 1.55; margin-top: 4px; }
    .about-right .contact { margin-top: auto; border-top: 0.75pt solid rgba(60,80,100,0.8); padding-top: 12px; font-size: 7.6pt; color: rgba(200,205,215,0.95); line-height: 1.6; }

    /* Catalogue */
    .cat-header {
      background: var(--navy); color: var(--cream);
      padding: 28px 42px 22px; min-height: 100px;
    }
    .cat-header.light {
      background: transparent; color: var(--navy); padding: 36px 42px 12px;
    }
    .cat-header h1 { font-size: 22pt; font-weight: 700; margin-top: 6px; }
    .cat-header .sub { font-size: 10pt; font-weight: 300; color: rgba(200,205,215,0.9); margin-top: 4px; }
    .cat-header.light .sub { color: var(--gray); }
    .cat-header .count { float: right; text-align: right; margin-top: -40px; }
    .cat-header .count .big { font-size: 28pt; font-weight: 300; color: rgba(80,100,120,0.7); }
    .cat-header .count .small { font-size: 8pt; color: rgba(150,160,175,0.9); }
    .cat-body { padding: 24px 42px 48px; min-height: 520px; display: flex; flex-direction: column; }
    .cat-body.center-cards { justify-content: center; }
    .cat-cards { display: flex; flex-direction: column; gap: 14pt; }
    .machine-card {
      background: #fff; border: 0.75pt solid var(--line); border-radius: 8pt;
      padding: 18pt; display: flex; gap: 20pt;
      page-break-inside: avoid;
    }
    .machine-card .img {
      width: 150pt; min-height: 150pt; flex-shrink: 0;
      border: 1pt solid var(--gold); border-radius: 4pt; overflow: hidden;
      background: linear-gradient(145deg, #182C44, #0B1626);
      display: flex; align-items: center; justify-content: center;
    }
    .machine-card .img img { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 150pt; }
    .machine-card .img .ph { font-size: 36pt; opacity: 0.5; }
    .machine-card .txt { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .machine-card .tag {
      font-size: 7.6pt; font-weight: 500; letter-spacing: 0.14em;
      text-transform: uppercase; color: var(--gold);
    }
    .machine-card .name { font-size: 15.5pt; font-weight: 700; color: var(--navy); margin-top: 6px; }
    .machine-card .uline { width: 30pt; height: 1pt; background: var(--line); margin: 8px 0 10px; }
    .machine-card .desc { font-size: 8.9pt; color: #57585c; line-height: 1.45; }
    .machine-card .specs { list-style: none; margin-top: 12px; }
    .machine-card .specs li {
      font-size: 8.6pt; color: #38393d; padding-left: 14px; position: relative;
      margin-bottom: 6px; line-height: 1.35;
    }
    .machine-card .specs li::before {
      content: ''; position: absolute; left: 0; top: 5px;
      width: 4.5px; height: 4.5px; border-radius: 50%; background: var(--gold);
    }
    .machine-card .price-block { margin-top: auto; text-align: right; padding-top: 10px; }
    .machine-card .price-block .lab {
      font-size: 7pt; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gray);
    }
    .machine-card .price-block .amt { font-size: 13.5pt; font-weight: 700; color: var(--navy); }

    /* Pricing summary */
    .summary {
      background: var(--navy); border-radius: 8pt; padding: 22px 24px 18px;
      color: var(--cream); margin-top: 8px; page-break-inside: avoid;
    }
    .summary .sk { font-size: 9.5pt; font-weight: 500; letter-spacing: 0.2em; color: var(--gold); }
    .summary-row {
      display: flex; justify-content: space-between; font-size: 10pt;
      color: var(--cream2); padding: 7px 0; border-bottom: none;
    }
    .summary-divider { height: 0.75pt; background: rgba(80,100,120,0.7); margin: 10px 0 12px; }
    .summary-total {
      display: flex; justify-content: space-between; align-items: baseline;
      font-size: 11pt; font-weight: 500; color: var(--cream); letter-spacing: 0.04em;
    }
    .summary-total .amt { font-size: 17pt; font-weight: 700; color: var(--gold); }
    .summary-note { font-size: 7.6pt; color: rgba(160,170,185,0.95); margin-top: 12px; }

    /* Terms & closing */
    .terms-wrap { padding: 48px 42px 56px; }
    .terms-wrap h1 { font-size: 18pt; font-weight: 700; color: var(--navy); margin-top: 8px; }
    .terms-item { margin-bottom: 14px; }
    .terms-item .lab {
      font-size: 8.5pt; font-weight: 600; letter-spacing: 0.06em;
      text-transform: uppercase; color: var(--navy); margin-bottom: 3px;
    }
    .terms-item .val { font-size: 9pt; color: #47484f; line-height: 1.45; }
    .closing-wrap { padding: 56px 48px 56px; max-width: 520px; }
    .closing-wrap p { font-size: 10.5pt; color: #38393d; line-height: 1.55; margin-bottom: 14px; }
    .closing-sign { margin-top: 36px; }
    .closing-sign .yours { font-size: 10.5pt; color: #38393d; margin-bottom: 28px; }
    .closing-sign .for { font-size: 10pt; font-weight: 500; color: var(--navy); }
    .closing-sign .name { font-size: 12pt; font-weight: 700; color: var(--navy); margin-top: 28px; }
    .closing-sign .role { font-size: 9.5pt; color: var(--gray); margin-top: 2px; }

    /* Footer */
    .page-footer {
      position: absolute; bottom: 22pt; left: 42pt; right: 42pt;
      display: flex; justify-content: space-between;
      font-size: 7.2pt; letter-spacing: 0.1em; color: var(--gray);
    }
    .page-footer.dark { color: var(--goldsoft); }
  </style>
</head>
<body>
  ${pages.join('\n')}
  <script>window.onload = function(){ setTimeout(function(){ window.print(); }, 400); };<\/script>
</body>
</html>`);
  printWin.document.close();
}

function presCoverPage(co, forClient, dateStr, totalPages) {
  const nameParts = (co.name || 'MEDICANO RESOURCES LIMITED').split(/\s+/);
  const mainName = nameParts[0] || 'MEDICANO';
  const subName = nameParts.slice(1).join(' ') || 'RESOURCES LIMITED';
  return `
  <div class="page cover">
    <div class="cover-frame"></div>
    <div class="cover-inner">
      <div class="cover-kicker">Client Presentation</div>
      <div class="cover-center">
        <div class="cover-name">${escHtml(mainName.toUpperCase())}</div>
        <div class="cover-sub">${escHtml(subName.toUpperCase())}</div>
        <div class="cover-rule"></div>
        <div class="cover-title">Medical Equipment Proposal</div>
        <div class="cover-for">Prepared for ${escHtml(forClient)}</div>
        <div class="cover-date">${escHtml(dateStr)}</div>
      </div>
      <div class="cover-bottom">
        <div>
          <div>${escHtml(co.address || '')}</div>
          <div style="margin-top:4px">${escHtml(co.phone1 || '')}${co.phone2 ? '  |  ' + escHtml(co.phone2) : ''}  |  ${escHtml(co.email || '')}</div>
        </div>
        <div class="pg">01 / ${String(totalPages).padStart(2, '0')}</div>
      </div>
    </div>
  </div>`;
}

function presAboutPage(co, totalPages) {
  return `
  <div class="page">
    <div class="about">
      <div class="about-left">
        <div class="kicker">Company Profile</div>
        <div class="about-h">About ${(co.name || 'Medicano').split(' ')[0]}</div>
        <div class="about-h" style="margin-top:0">Resources Limited</div>
        <div class="gold-rule"></div>
        <p class="about-body">
          ${(co.name || 'Medicano Resources Limited')} supplies and supports advanced medical
          equipment for hospitals, diagnostic centres, and specialist clinics across Nigeria.
          We partner with leading manufacturers to bring reliable, serviceable systems to
          healthcare providers, backed by local installation, training, and after-sales support.
        </p>
        <div class="about-h3">What We Offer</div>
        <ul class="offer-list">
          <li>Certified new and pre-owned diagnostic & clinical systems</li>
          <li>Site planning, installation, and commissioning</li>
          <li>Preventive maintenance and engineer support contracts</li>
          <li>Staff training and clinical workflow onboarding</li>
          <li>Flexible procurement and equipment supply options</li>
        </ul>
        <div class="gold-rule" style="margin-top:28px"></div>
        <div class="about-h3">Why Hospitals Choose Us</div>
        <p class="about-body">
          From procurement through commissioning, our team stays involved long after delivery —
          so your equipment keeps running at the standard your patients and clinicians expect.
        </p>
        <div class="detail-cards">
          <div class="detail-card">
            <div class="bar"></div>
            <div class="lab">Registered Office</div>
            <div class="val">${escHtml(co.address || '')}</div>
          </div>
          <div class="detail-card">
            <div class="bar"></div>
            <div class="lab">Direct Line</div>
            <div class="val">${escHtml(co.phone1 || '')}${co.phone2 ? '<br>' + escHtml(co.phone2) : ''}</div>
          </div>
          <div class="detail-card">
            <div class="bar"></div>
            <div class="lab">Correspondence</div>
            <div class="val">${escHtml(co.email || '')}</div>
          </div>
        </div>
      </div>
      <div class="about-right">
        <div class="brand">PRECISION</div>
        <div class="brand-lines">EQUIPMENT, BUILT<br>FOR AFRICAN<br>HEALTHCARE.</div>
        <div class="contact">
          ${escHtml(co.phone1 || '')}<br>
          ${escHtml(co.email || '')}
        </div>
      </div>
    </div>
    <div class="page-footer">
      <span>${escHtml((co.name || '').toUpperCase())}</span>
      <span>02 / ${String(totalPages).padStart(2, '0')}</span>
    </div>
  </div>`;
}

function presMachineCard(p) {
  const features = (p.features || '').split('\n').map(f => f.trim()).filter(Boolean).slice(0, 6);
  const priceNgn = toNGN(p.price, p.currency);
  const img = p.image ? `<img src="${p.image}" alt="" />` : `<span class="ph">🏥</span>`;
  const specs = features.length
    ? `<ul class="specs">${features.map(f => `<li>${escHtml(f)}</li>`).join('')}</ul>`
    : '';
  return `
    <div class="machine-card">
      <div class="img">${img}</div>
      <div class="txt">
        <div class="tag">${escHtml((p.category || 'Medical Equipment').toUpperCase())}</div>
        <div class="name">${escHtml(p.name)}</div>
        <div class="uline"></div>
        ${p.description ? `<p class="desc">${escHtml(p.description)}</p>` : ''}
        ${specs}
        <div class="price-block">
          <div class="lab">Price</div>
          <div class="amt">${formatNairaPlain(priceNgn)}</div>
        </div>
      </div>
    </div>`;
}

function presPricingSummaryHtml(allProducts) {
  const rows = allProducts.map(p => {
    const ngn = toNGN(p.price, p.currency);
    return `<div class="summary-row"><span>${escHtml(p.name)}</span><span>${formatNairaPlain(ngn)}</span></div>`;
  }).join('');
  const total = allProducts.reduce((s, p) => s + toNGN(p.price, p.currency), 0);
  return `
    <div class="summary">
      <div class="sk">Pricing Summary</div>
      <div style="margin-top:14px">${rows}</div>
      <div class="summary-divider"></div>
      <div class="summary-total">
        <span>TOTAL PROPOSAL VALUE</span>
        <span class="amt">${formatNairaPlain(total)}</span>
      </div>
      <div class="summary-note">Prices are indicative and exclude installation, freight, and applicable duties.</div>
    </div>`;
}

function presCataloguePage(co, pack, allProducts, pageNo, totalPages, isFirst, isLast, center, includeSummary) {
  const cards = pack.items.map(it => presMachineCard(it.p)).join('');
  const startIdx = pack.startIdx;
  const totalMachines = allProducts.length;
  const summary = includeSummary ? presPricingSummaryHtml(allProducts) : '';

  const header = isFirst
    ? `<div class="cat-header">
         <div class="kicker" style="color:var(--gold)">Equipment Catalogue</div>
         <h1>Selected Systems</h1>
         <div class="sub">Selected for your facility, with indicative pricing in Naira.</div>
         <div class="count"><div class="big">${String(startIdx + 1).padStart(2, '0')}</div><div class="small">of ${String(totalMachines).padStart(2, '0')} systems</div></div>
       </div>`
    : `<div class="cat-header light">
         <div class="kicker">Equipment Catalogue</div>
         <h1 style="font-size:20pt">Selected Systems</h1>
         <div class="sub" style="float:right;margin-top:-28px">continued</div>
         <div class="gold-rule"></div>
       </div>`;

  return `
  <div class="page">
    ${header}
    <div class="cat-body${center && !includeSummary ? ' center-cards' : ''}">
      <div class="cat-cards">${cards}</div>
      ${summary}
    </div>
    <div class="page-footer${isFirst ? ' dark' : ''}" style="${isFirst ? 'color:var(--goldsoft)' : ''}">
      <span>${escHtml((co.name || '').toUpperCase())}</span>
      <span>${String(pageNo).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}</span>
    </div>
  </div>`;
}

function presSummaryOnlyPage(co, allProducts, pageNo, totalPages) {
  return `
  <div class="page">
    <div class="cat-header light">
      <div class="kicker">Investment</div>
      <h1 style="font-size:20pt">Pricing Summary</h1>
      <div class="gold-rule"></div>
    </div>
    <div class="cat-body">
      ${presPricingSummaryHtml(allProducts)}
    </div>
    <div class="page-footer">
      <span>${escHtml((co.name || '').toUpperCase())}</span>
      <span>${String(pageNo).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}</span>
    </div>
  </div>`;
}

function presTermsPage(co, pageNo, totalPages) {
  const terms = [
    ['Quote Validity', 'Quotation is only stated as at Today’s Exchange Rate, which is subject to change at any time based on the exchange rate fluctuations. This is valid for 30 days from the date stated on this invoice after which reconfirmation of rates would be necessary.'],
    ['Origin', 'As indicated.'],
    ['Estimated Delivery', 'Within 3–4 weeks from the date of the receipt of the confirmed order and pre-order payment.'],
    ['Payment Terms', 'Our standard payment term is 70% Mobilization payment to commence, 10% on arrival at the Nigerian Cargo session, 20% balance payment on delivery and installation (or as proposed and agreed with the hospital).'],
    ['Repayment Penalty', 'This is allowed within the tenor of this offer without penalty. Payment outside the tenor period attracts additional charge of 3.5% flat per month and will result in repossession of the machine if payment isn’t made; this would be withheld until full payment is made.'],
    ['Comfort', 'Duly signed Letter of Award / PO stating the agreed payment terms.'],
    ['Warranty', '12 months manufacturers warranty.'],
    ['Carriage', 'Inland Carriage, Freight and other associated port charges are included within our quotation. It is based on routings via our freight forwarders.'],
    ['Manuals & Spare Parts', 'Spare parts will be detailed within the operator’s manuals for all equipment supplied complete with drawings, fault finding etc. (where applicable).'],
    ['Preventive Maintenance', 'After the warranty elapses, we strongly recommend quarterly “After sales services” agreement at a fixed mutually agreeable fee. To this end, Medicano Resources Limited will be committed to keeping its appointment to have its trained bio-engineer visit the hospital every quarter for a routine machine check to avoid breakdown. This we term preventive maintenance services.']
  ];
  const items = terms.map(([lab, val]) => `
    <div class="terms-item">
      <div class="lab">${escHtml(lab)}</div>
      <div class="val">${escHtml(val)}</div>
    </div>`).join('');

  return `
  <div class="page">
    <div class="terms-wrap">
      <div class="kicker">Commercial Terms</div>
      <h1>Terms and Conditions</h1>
      <div class="gold-rule"></div>
      ${items}
    </div>
    <div class="page-footer">
      <span>${escHtml((co.name || '').toUpperCase())}</span>
      <span>${String(pageNo).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}</span>
    </div>
  </div>`;
}

function presClosingPage(co, forClient, pageNo, totalPages) {
  return `
  <div class="page">
    <div class="closing-wrap">
      <div class="kicker">Next Steps</div>
      <div class="gold-rule"></div>
      <p>Thank you for doing business with us while we look forward to receiving the confirmation of your order.</p>
      <p>For further information or any clarification, please contact us the undersigned on Tel. <strong>09099995426</strong> or call Francis on <strong>08023203522</strong>. E-mail: <strong>enquiries@medicanoresources.com</strong></p>
      <div class="closing-sign">
        <div class="yours">Yours faithfully,</div>
        <div class="for">FOR: ${escHtml(co.name || 'Medicano Resources Limited')}</div>
        <div class="name">Francis Opara</div>
        <div class="role">CEO</div>
      </div>
    </div>
    <div class="page-footer">
      <span>${escHtml((co.name || '').toUpperCase())}</span>
      <span>${String(pageNo).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}</span>
    </div>
  </div>`;
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
