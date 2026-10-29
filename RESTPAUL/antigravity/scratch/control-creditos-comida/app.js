/**
 * ==========================================================================
 * SISTEMA PROFESIONAL DE GESTIÓN DE CRÉDITOS Y COBRANZA - NEGOCIOS DE COMIDA
 * GourmetLedger POS & Credit System
 * ==========================================================================
 */

// --- DICCIONARIO DE ICONOS SVG EN LÍNEA (100% OFFLINE & ALTA DEFINICIÓN) ---
const ICONS = {
  users: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  user: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  plus: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  utensils: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 2v10"/><path d="M15 22v-8"/><path d="M6 2v20"/><path d="M3 2v6a3 3 0 0 0 6 0V2"/></svg>`,
  banknote: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  receipt: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-8"/><path d="M16 12h-8"/><path d="M12 16h-4"/></svg>`,
  chart: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  settings: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  phone: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  printer: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>`,
  copy: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`,
  download: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  search: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  building: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  alertTriangle: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  checkCircle: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  trash: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  edit: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>`,
  grid: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,
  list: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
  calendar: `<svg class="w-3.5 h-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  creditCard: `<svg class="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>`
};

// --- CONFIGURACIÓN Y ESTADO INICIAL ---
const STORAGE_KEYS = {
  CONFIG: 'fiados_comida_config_v1',
  CLIENTS: 'fiados_comida_clients_v1',
  TRANSACTIONS: 'fiados_comida_transactions_v1'
};

const DEFAULT_CONFIG = {
  businessName: 'Restaurante & Comedor "El Buen Sabor"',
  ownerName: 'Administración',
  phone: '50212345678',
  currency: 'Q.',
  paymentInfo: 'Banco Industrial (BI) Cta: 014-4812-990 | Banrural Cta: 3102-4589-12 | Transferencia Móvil: 502-1234-5678',
  whatsappMessage: '👋 Estimado(a) *{CLIENTE}*, le saludamos de *{NEGOCIO}*.\nEsperamos que esté disfrutando de nuestras comidas.\n\n📋 *ESTADO DE CUENTA ACTUALIZADO:*\n{DETALLES}\n\n💰 *Total pendiente de liquidación: {MONEDA} {TOTAL}*\n\n💳 *Cuentas disponibles para pago / transferencia:*\n{DATOS_PAGO}\n\n¡Agradecemos mucho su preferencia! Que tenga un excelente día.'
};

const INITIAL_CLIENTS = [
  {
    id: 'cli-1',
    name: 'Ing. Carlos Mendoza',
    alias: 'Oficina 304 - Edificio Central',
    phone: '50211223344',
    creditLimit: 300.00,
    notes: 'Paga cada quincena puntualmente',
    createdAt: '2026-10-15T12:00:00.000Z'
  },
  {
    id: 'cli-2',
    name: 'Dra. Marcela Gómez',
    alias: 'Consultorio Médico San José',
    phone: '50299887766',
    creditLimit: 250.00,
    notes: 'Pide para ella y su asistente',
    createdAt: '2026-10-18T10:30:00.000Z'
  },
  {
    id: 'cli-3',
    name: 'Don Roberto Ruiz',
    alias: 'Taller Mecánico El Águila',
    phone: '50244332211',
    creditLimit: 200.00,
    notes: 'Pasa a almorzar de lunes a viernes',
    createdAt: '2026-10-20T14:15:00.000Z'
  }
];

const INITIAL_TRANSACTIONS = [
  // Carlos Mendoza
  {
    id: 'tx-1',
    clientId: 'cli-1',
    type: 'credit',
    amount: 60.00,
    date: '2026-10-25',
    time: '13:30',
    description: '2x Menú Ejecutivo (Pechuga a la plancha) + 2 Bebidas',
    category: 'Almuerzo'
  },
  {
    id: 'tx-2',
    clientId: 'cli-1',
    type: 'credit',
    amount: 30.00,
    date: '2026-10-27',
    time: '14:00',
    description: '1x Menú Ejecutivo (Guisado de res) + Refresco',
    category: 'Almuerzo'
  },
  {
    id: 'tx-3',
    clientId: 'cli-1',
    type: 'payment',
    amount: 40.00,
    date: '2026-10-28',
    time: '11:00',
    description: 'Abono en efectivo a cuenta',
    category: 'Abono',
    paymentMethod: 'Efectivo'
  },
  // Dra. Marcela Gómez
  {
    id: 'tx-4',
    clientId: 'cli-2',
    type: 'credit',
    amount: 55.00,
    date: '2026-10-26',
    time: '13:45',
    description: '2x Ensaladas con pollo + Aguas frescas',
    category: 'Almuerzo'
  },
  {
    id: 'tx-5',
    clientId: 'cli-2',
    type: 'credit',
    amount: 25.00,
    date: '2026-10-28',
    time: '09:30',
    description: 'Desayuno especial de huevos al gusto + Café',
    category: 'Desayuno'
  },
  // Roberto Ruiz (Cuenta saldada)
  {
    id: 'tx-6',
    clientId: 'cli-3',
    type: 'credit',
    amount: 70.00,
    date: '2026-10-24',
    time: '14:30',
    description: 'Comida corrida x2 + Postres',
    category: 'Almuerzo'
  },
  {
    id: 'tx-7',
    clientId: 'cli-3',
    type: 'payment',
    amount: 70.00,
    date: '2026-10-25',
    time: '18:00',
    description: 'Liquidación total en efectivo',
    category: 'Liquidación',
    paymentMethod: 'Efectivo'
  }
];

// Estado global de la aplicación
let appState = {
  config: { ...DEFAULT_CONFIG },
  clients: [],
  transactions: [],
  currentTab: 'clientes',
  activeClientIdForReport: null,
  activeTicketMode: 'ticket', // 'ticket' (80mm) o 'completo' (A4/Carta)
  clientViewMode: 'grid' // 'grid' o 'table'
};

// Paleta de colores para avatares corporativos
const AVATAR_PALETTES = [
  { bg: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { bg: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { bg: 'bg-sky-50 border-sky-200 text-sky-700' },
  { bg: 'bg-amber-50 border-amber-200 text-amber-700' },
  { bg: 'bg-purple-50 border-purple-200 text-purple-700' },
  { bg: 'bg-rose-50 border-rose-200 text-rose-700' }
];

function getClientInitials(name) {
  if (!name) return 'CL';
  const clean = name.replace(/^(Ing\.|Lic\.|Dr\.|Dra\.|Sr\.|Sra\.|Don|Doña)\s+/i, '');
  const parts = clean.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase();
}

function getAvatarPalette(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  const index = Math.abs(hash) % AVATAR_PALETTES.length;
  return AVATAR_PALETTES[index];
}

// --- FUNCIONES DE PERSISTENCIA ---
function loadData() {
  try {
    const savedConfig = localStorage.getItem(STORAGE_KEYS.CONFIG);
    const savedClients = localStorage.getItem(STORAGE_KEYS.CLIENTS);
    const savedTx = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);

    appState.config = savedConfig ? JSON.parse(savedConfig) : { ...DEFAULT_CONFIG };
    appState.clients = savedClients ? JSON.parse(savedClients) : [...INITIAL_CLIENTS];
    appState.transactions = savedTx ? JSON.parse(savedTx) : [...INITIAL_TRANSACTIONS];

    // Migración automática a Quetzales si existía $ o sin moneda
    if (appState.config.currency === '$' || !appState.config.currency) {
      appState.config.currency = 'Q.';
      saveData();
    }

    if (!savedConfig) saveData();
  } catch (error) {
    console.error('Error cargando datos locales:', error);
    appState.config = { ...DEFAULT_CONFIG };
    appState.clients = [...INITIAL_CLIENTS];
    appState.transactions = [...INITIAL_TRANSACTIONS];
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(appState.config));
    localStorage.setItem(STORAGE_KEYS.CLIENTS, JSON.stringify(appState.clients));
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(appState.transactions));
  } catch (error) {
    console.error('Error guardando en almacenamiento local:', error);
    showToast('Error al guardar datos en el navegador', 'error');
  }
}

// --- CÁLCULOS FINANCIEROS POR CLIENTE ---
function getClientBalance(clientId) {
  const clientTx = appState.transactions.filter(t => t.clientId === clientId);
  const totalCredit = clientTx
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);
  const totalPaid = clientTx
    .filter(t => t.type === 'payment')
    .reduce((sum, t) => sum + Number(t.amount || 0), 0);
  
  const balance = totalCredit - totalPaid;
  const lastCredit = clientTx
    .filter(t => t.type === 'credit')
    .sort((a, b) => new Date(b.date + ' ' + (b.time || '00:00')) - new Date(a.date + ' ' + (a.time || '00:00')))[0];

  return {
    totalCredit,
    totalPaid,
    balance: Math.round(balance * 100) / 100,
    lastCreditDate: lastCredit ? lastCredit.date : null,
    pendingTransactionsCount: clientTx.filter(t => t.type === 'credit').length
  };
}

function formatCurrency(amount) {
  const curr = appState.config.currency || 'Q.';
  return `${curr} ${Number(amount || 0).toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// --- NOTIFICACIONES / TOASTS PROFESIONALES ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const borderClass = type === 'error' ? 'border-red-500' : type === 'warning' ? 'border-amber-500' : 'border-emerald-500';
  const icon = type === 'error' ? ICONS.alertTriangle : type === 'warning' ? ICONS.alertTriangle : ICONS.checkCircle;
  const iconColor = type === 'error' ? 'text-red-500' : type === 'warning' ? 'text-amber-500' : 'text-emerald-500';

  toast.className = `bg-white text-slate-800 border-l-4 ${borderClass} px-4 py-3 rounded-xl shadow-xl flex items-center space-x-3 text-xs font-semibold transition-all duration-300 transform translate-y-3 opacity-0 pointer-events-auto border border-slate-200/60`;
  toast.innerHTML = `<span class="${iconColor}">${icon}</span> <span class="leading-snug">${escapeHtml(message)}</span>`;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-3');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- NAVEGACIÓN DE PESTAÑAS ---
function switchTab(tabName) {
  appState.currentTab = tabName;
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('bg-slate-900', 'text-white', 'shadow-sm', 'font-bold');
    btn.classList.add('text-slate-600', 'hover:bg-slate-100', 'hover:text-slate-900', 'font-medium');
  });

  const activeContent = document.getElementById(`tab-content-${tabName}`);
  if (activeContent) activeContent.classList.remove('hidden');

  const activeBtn = document.getElementById(`nav-btn-${tabName}`);
  if (activeBtn) {
    activeBtn.classList.add('bg-slate-900', 'text-white', 'shadow-sm', 'font-bold');
    activeBtn.classList.remove('text-slate-600', 'hover:bg-slate-100', 'hover:text-slate-900', 'font-medium');
  }

  if (tabName === 'clientes') renderClientsList();
  if (tabName === 'reportes') renderCollectionReport();
  if (tabName === 'configuracion') loadConfigIntoForm();
  if (tabName === 'consumos') populateClientSelects();
  if (tabName === 'abonos') populateClientSelects();
}

function setClientViewMode(mode) {
  appState.clientViewMode = mode;
  const btnGrid = document.getElementById('view-toggle-grid');
  const btnTable = document.getElementById('view-toggle-table');
  
  if (btnGrid && btnTable) {
    if (mode === 'grid') {
      btnGrid.className = 'p-1.5 rounded-lg bg-white shadow-sm text-slate-800 border border-slate-200';
      btnTable.className = 'p-1.5 rounded-lg text-slate-400 hover:text-slate-700';
    } else {
      btnTable.className = 'p-1.5 rounded-lg bg-white shadow-sm text-slate-800 border border-slate-200';
      btnGrid.className = 'p-1.5 rounded-lg text-slate-400 hover:text-slate-700';
    }
  }
  renderClientsList();
}

// --- ACTUALIZACIÓN DE MÉTRICAS EJECUTIVAS (KPIs) ---
function updateGlobalStats() {
  let totalPendingDebt = 0;
  let totalDebtorsCount = 0;
  let totalPaidOverall = 0;

  appState.clients.forEach(client => {
    const { balance, totalPaid } = getClientBalance(client.id);
    totalPaidOverall += totalPaid;
    if (balance > 0) {
      totalPendingDebt += balance;
      totalDebtorsCount++;
    }
  });

  const statDebtEl = document.getElementById('stat-total-debt');
  const statCountEl = document.getElementById('stat-debtors-count');
  const statPaidEl = document.getElementById('stat-total-paid');
  const statAvgDebtEl = document.getElementById('stat-avg-debt');
  const headerBusinessName = document.getElementById('header-business-name');
  const badgeNavDebtors = document.getElementById('nav-badge-debtors');

  const avgDebt = totalDebtorsCount > 0 ? (totalPendingDebt / totalDebtorsCount) : 0;

  if (statDebtEl) statDebtEl.textContent = formatCurrency(totalPendingDebt);
  if (statCountEl) statCountEl.textContent = `${totalDebtorsCount} deudores activos`;
  if (statPaidEl) statPaidEl.textContent = formatCurrency(totalPaidOverall);
  if (statAvgDebtEl) statAvgDebtEl.textContent = formatCurrency(avgDebt);
  if (headerBusinessName) headerBusinessName.textContent = appState.config.businessName;

  if (badgeNavDebtors) {
    if (totalDebtorsCount > 0) {
      badgeNavDebtors.textContent = totalDebtorsCount;
      badgeNavDebtors.classList.remove('hidden');
    } else {
      badgeNavDebtors.classList.add('hidden');
    }
  }
}

// --- RENDERIZADO DE CLIENTES (GRID & TABLE) ---
function renderClientsList() {
  updateGlobalStats();
  const container = document.getElementById('clients-view-container');
  const searchInput = document.getElementById('search-clients-input');
  const filterSelect = document.getElementById('filter-clients-status');
  
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const filter = filterSelect ? filterSelect.value : 'debtors';

  if (!container) return;

  const filteredClients = appState.clients.filter(client => {
    const { balance } = getClientBalance(client.id);
    const matchesSearch = 
      client.name.toLowerCase().includes(query) ||
      (client.alias && client.alias.toLowerCase().includes(query)) ||
      (client.phone && client.phone.toLowerCase().includes(query));

    if (!matchesSearch) return false;

    if (filter === 'debtors') return balance > 0;
    if (filter === 'cleared') return balance <= 0;
    return true;
  });

  // Ordenar: primero los deudores con mayor saldo
  filteredClients.sort((a, b) => {
    const balA = getClientBalance(a.id).balance;
    const balB = getClientBalance(b.id).balance;
    return balB - balA;
  });

  if (filteredClients.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
        <div class="w-12 h-12 bg-slate-50 text-slate-400 border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-3">
          ${ICONS.search}
        </div>
        <h4 class="text-sm font-bold text-slate-800">No se encontraron comensales</h4>
        <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Verifica el filtro aplicado o añade un nuevo comensal para registrar sus consumos fiados.</p>
        <button onclick="openModal('modal-add-client')" class="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5 shadow-sm">
          ${ICONS.plus} <span>Registrar Nuevo Cliente</span>
        </button>
      </div>
    `;
    return;
  }

  // Si está en Vista Tabla
  if (appState.clientViewMode === 'table') {
    container.innerHTML = `
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <th class="py-3.5 px-4">Comensal / Ubicación</th>
                <th class="py-3.5 px-4">Teléfono / WhatsApp</th>
                <th class="py-3.5 px-4">Último Consumo</th>
                <th class="py-3.5 px-4 text-right">Total Consumido</th>
                <th class="py-3.5 px-4 text-right">Total Abonado</th>
                <th class="py-3.5 px-4 text-right">Saldo Deudor</th>
                <th class="py-3.5 px-4 text-center">Estado</th>
                <th class="py-3.5 px-4 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${filteredClients.map(client => {
                const { totalCredit, totalPaid, balance, lastCreditDate } = getClientBalance(client.id);
                const initials = getClientInitials(client.name);
                const palette = getAvatarPalette(client.name);
                const cleanPhone = client.phone ? client.phone.replace(/\D/g, '') : '';

                return `
                  <tr class="hover:bg-slate-50/80 transition-colors">
                    <td class="py-3.5 px-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-xl border flex items-center justify-center font-bold text-xs ${palette.bg}">
                          ${initials}
                        </div>
                        <div>
                          <div class="font-bold text-slate-900 text-xs">${escapeHtml(client.name)}</div>
                          ${client.alias ? `<div class="text-[11px] text-slate-500 flex items-center gap-1">${ICONS.building} ${escapeHtml(client.alias)}</div>` : ''}
                        </div>
                      </div>
                    </td>
                    <td class="py-3.5 px-4 font-mono-numbers text-slate-600">
                      ${client.phone ? `
                        <a href="https://wa.me/${cleanPhone}" target="_blank" class="hover:text-emerald-600 inline-flex items-center gap-1 font-medium">
                          <span class="text-emerald-500">${ICONS.whatsapp}</span> ${escapeHtml(client.phone)}
                        </a>
                      ` : '<span class="text-slate-400 italic">Sin teléfono</span>'}
                    </td>
                    <td class="py-3.5 px-4 text-slate-500 font-mono-numbers">
                      ${lastCreditDate ? formatDate(lastCreditDate) : 'N/A'}
                    </td>
                    <td class="py-3.5 px-4 text-right font-mono-numbers text-slate-600">
                      ${formatCurrency(totalCredit)}
                    </td>
                    <td class="py-3.5 px-4 text-right font-mono-numbers text-emerald-600 font-medium">
                      -${formatCurrency(totalPaid)}
                    </td>
                    <td class="py-3.5 px-4 text-right font-mono-numbers font-bold text-sm ${balance > 0 ? 'text-rose-600' : 'text-emerald-600'}">
                      ${formatCurrency(balance)}
                    </td>
                    <td class="py-3.5 px-4 text-center">
                      ${balance > 0 
                        ? `<span class="status-pill bg-rose-50 border border-rose-200 text-rose-700"><span class="status-dot bg-rose-500"></span> Pendiente</span>`
                        : `<span class="status-pill bg-emerald-50 border border-emerald-200 text-emerald-700"><span class="status-dot bg-emerald-500"></span> Al Día</span>`
                      }
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <div class="inline-flex items-center gap-1.5">
                        <button 
                          onclick="openClientBillingReport('${client.id}')"
                          class="px-2.5 py-1.5 ${balance > 0 ? 'bg-slate-900 hover:bg-slate-800 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'} rounded-lg font-bold text-xs inline-flex items-center gap-1 shadow-xs transition-colors"
                          title="Generar Estado de Cuenta">
                          ${ICONS.receipt} <span>${balance > 0 ? 'Cobrar' : 'Detalle'}</span>
                        </button>
                        <button 
                          onclick="quickAddCreditModal('${client.id}')"
                          class="p-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg border border-amber-200"
                          title="Anotar Fiado">
                          ${ICONS.utensils}
                        </button>
                        <button 
                          onclick="quickAddPaymentModal('${client.id}')"
                          class="p-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200"
                          title="Abonar Dinero">
                          ${ICONS.banknote}
                        </button>
                        <button 
                          onclick="editClient('${client.id}')"
                          class="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg"
                          title="Editar Cliente">
                          ${ICONS.edit}
                        </button>
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
    return;
  }

  // Vista Cuadrícula (Cards modernas de alto nivel)
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${filteredClients.map(client => {
        const { totalCredit, totalPaid, balance, lastCreditDate } = getClientBalance(client.id);
        const initials = getClientInitials(client.name);
        const palette = getAvatarPalette(client.name);
        const cleanPhone = client.phone ? client.phone.replace(/\D/g, '') : '';
        const isDebtor = balance > 0;

        // Cálculo de barra de límite de crédito
        let limitBarHtml = '';
        if (client.creditLimit > 0) {
          const percent = Math.min(Math.round((balance / client.creditLimit) * 100), 100);
          const barColor = percent > 90 ? 'bg-rose-500' : percent > 60 ? 'bg-amber-500' : 'bg-emerald-500';
          limitBarHtml = `
            <div class="mt-3 pt-2.5 border-t border-slate-100 text-[11px]">
              <div class="flex justify-between text-slate-500 mb-1">
                <span>Crédito disponible:</span>
                <span class="font-mono-numbers font-medium">${formatCurrency(client.creditLimit - balance)} de ${formatCurrency(client.creditLimit)}</span>
              </div>
              <div class="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div class="${barColor} h-1.5 rounded-full" style="width: ${percent}%"></div>
              </div>
            </div>
          `;
        }

        return `
          <div class="bg-white rounded-2xl border ${isDebtor ? 'border-slate-200 hover:border-slate-300' : 'border-slate-200'} p-5 shadow-xs card-hover-pro flex flex-col justify-between">
            <div>
              <!-- Cabecera de Comensal -->
              <div class="flex items-start justify-between gap-3 mb-3.5">
                <div class="flex items-center gap-3">
                  <div class="w-11 h-11 rounded-2xl border flex items-center justify-center font-bold text-sm tracking-tight shadow-xs ${palette.bg}">
                    ${initials}
                  </div>
                  <div>
                    <h3 class="font-bold text-slate-900 text-sm leading-tight tracking-tight">${escapeHtml(client.name)}</h3>
                    ${client.alias ? `<p class="text-[11px] text-slate-500 font-medium flex items-center gap-1 mt-0.5">${ICONS.building} <span>${escapeHtml(client.alias)}</span></p>` : ''}
                  </div>
                </div>

                <div>
                  ${isDebtor 
                    ? `<span class="status-pill bg-rose-50 border border-rose-200 text-rose-700"><span class="status-dot bg-rose-500"></span> Pendiente</span>`
                    : `<span class="status-pill bg-emerald-50 border border-emerald-200 text-emerald-700"><span class="status-dot bg-emerald-500"></span> Al Día</span>`
                  }
                </div>
              </div>

              <!-- Contacto & Meta -->
              <div class="space-y-1.5 text-xs text-slate-600 mb-4 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400 flex items-center gap-1.5 text-[11px] font-medium">WhatsApp:</span>
                  ${client.phone ? `
                    <a href="https://wa.me/${cleanPhone}" target="_blank" class="font-mono-numbers text-slate-800 hover:text-emerald-600 font-semibold flex items-center gap-1">
                      <span class="text-emerald-500">${ICONS.whatsapp}</span> ${escapeHtml(client.phone)}
                    </a>
                  ` : '<span class="text-slate-400 italic text-[11px]">No registrado</span>'}
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-slate-400 flex items-center gap-1.5 text-[11px] font-medium">Último consumo:</span>
                  <span class="font-mono-numbers text-slate-700">${lastCreditDate ? formatDate(lastCreditDate) : 'Sin consumos'}</span>
                </div>

                ${client.notes ? `
                  <div class="pt-1 mt-1 border-t border-slate-200/50 text-[11px] text-slate-500 italic truncate" title="${escapeHtml(client.notes)}">
                    📝 ${escapeHtml(client.notes)}
                  </div>
                ` : ''}
              </div>

              <!-- Bloque Financiero -->
              <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-3.5 mb-2 shadow-sm">
                <div class="flex justify-between items-baseline mb-1">
                  <span class="text-[10px] uppercase font-bold tracking-wider text-slate-400">Total a Cobrar</span>
                  <span class="text-[11px] text-slate-300 font-mono-numbers">Pagado: ${formatCurrency(totalPaid)}</span>
                </div>
                <div class="text-xl font-extrabold font-mono-numbers tracking-tight ${isDebtor ? 'text-rose-400' : 'text-emerald-400'}">
                  ${formatCurrency(balance)}
                </div>
              </div>

              ${limitBarHtml}
            </div>

            <!-- Botones de Acción -->
            <div class="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <button 
                onclick="openClientBillingReport('${client.id}')"
                class="w-full py-2.5 px-3 ${isDebtor ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-xs' : 'bg-slate-100 hover:bg-slate-200 text-slate-800'} rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all">
                ${ICONS.receipt}
                <span>${isDebtor ? 'Generar Reporte para Cobrar' : 'Ver Estado de Cuenta'}</span>
              </button>

              <div class="grid grid-cols-3 gap-1.5">
                <button 
                  onclick="quickAddCreditModal('${client.id}')"
                  class="py-1.5 px-2 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-amber-200/60"
                  title="Anotar consumo fiado">
                  ${ICONS.utensils} <span>Fiado</span>
                </button>
                <button 
                  onclick="quickAddPaymentModal('${client.id}')"
                  class="py-1.5 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-emerald-200/60"
                  title="Registrar abono de dinero">
                  ${ICONS.banknote} <span>Abono</span>
                </button>
                <button 
                  onclick="editClient('${client.id}')"
                  class="py-1.5 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-colors border border-slate-200/60"
                  title="Modificar datos">
                  ${ICONS.edit} <span>Editar</span>
                </button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// --- POBLAR SELECTS DE CLIENTES ---
function populateClientSelects() {
  const creditSelect = document.getElementById('credit-client-id');
  const paymentSelect = document.getElementById('payment-client-id');
  
  const optionsHtml = '<option value="">-- Selecciona un comensal / cliente --</option>' + 
    appState.clients
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(c => {
        const { balance } = getClientBalance(c.id);
        const debtTxt = balance > 0 ? ` (Debe: ${formatCurrency(balance)})` : ' (Al día)';
        return `<option value="${c.id}">${escapeHtml(c.name)}${c.alias ? ` [${escapeHtml(c.alias)}]` : ''}${debtTxt}</option>`;
      }).join('');

  if (creditSelect) creditSelect.innerHTML = optionsHtml;
  if (paymentSelect) paymentSelect.innerHTML = optionsHtml;
}

// --- CRUD DE CLIENTES ---
function handleSaveClient(event) {
  event.preventDefault();
  const idInput = document.getElementById('client-form-id');
  const name = document.getElementById('client-name').value.trim();
  const alias = document.getElementById('client-alias').value.trim();
  const phone = document.getElementById('client-phone').value.trim();
  const notes = document.getElementById('client-notes').value.trim();
  const creditLimit = parseFloat(document.getElementById('client-limit').value) || 0;

  if (!name) {
    showToast('El nombre del cliente es obligatorio', 'warning');
    return;
  }

  const isEdit = idInput && idInput.value;

  if (isEdit) {
    const client = appState.clients.find(c => c.id === idInput.value);
    if (client) {
      client.name = name;
      client.alias = alias;
      client.phone = phone;
      client.notes = notes;
      client.creditLimit = creditLimit;
      showToast('Cliente actualizado con éxito');
    }
  } else {
    const newClient = {
      id: 'cli-' + Date.now(),
      name,
      alias,
      phone,
      creditLimit,
      notes,
      createdAt: new Date().toISOString()
    };
    appState.clients.push(newClient);
    showToast('Nuevo comensal registrado');
  }

  saveData();
  closeModal('modal-add-client');
  renderClientsList();
  populateClientSelects();
  document.getElementById('client-form').reset();
  if (idInput) idInput.value = '';
}

function editClient(clientId) {
  const client = appState.clients.find(c => c.id === clientId);
  if (!client) return;

  document.getElementById('client-form-id').value = client.id;
  document.getElementById('client-name').value = client.name || '';
  document.getElementById('client-alias').value = client.alias || '';
  document.getElementById('client-phone').value = client.phone || '';
  document.getElementById('client-limit').value = client.creditLimit || '';
  document.getElementById('client-notes').value = client.notes || '';

  document.getElementById('modal-client-title').textContent = 'Editar Datos del Comensal';
  document.getElementById('btn-delete-client').classList.remove('hidden');

  openModal('modal-add-client');
}

function deleteCurrentClient() {
  const id = document.getElementById('client-form-id').value;
  if (!id) return;

  const client = appState.clients.find(c => c.id === id);
  if (!client) return;

  const { balance } = getClientBalance(id);
  let confirmMsg = `¿Deseas eliminar a "${client.name}"?`;
  if (balance > 0) {
    confirmMsg += `\n⚠️ ATENCIÓN: Tiene un saldo pendiente de ${formatCurrency(balance)}. También se borrarán sus registros de consumos.`;
  }

  if (confirm(confirmMsg)) {
    appState.clients = appState.clients.filter(c => c.id !== id);
    appState.transactions = appState.transactions.filter(t => t.clientId !== id);
    saveData();
    closeModal('modal-add-client');
    renderClientsList();
    populateClientSelects();
    showToast('Cliente eliminado correctamente');
  }
}

// --- CONSUMOS / FIADOS ---
function quickAddCreditModal(clientId) {
  switchTab('consumos');
  const select = document.getElementById('credit-client-id');
  if (select) select.value = clientId;
  updateCreditClientPreview();
}

function updateCreditClientPreview() {
  const select = document.getElementById('credit-client-id');
  const preview = document.getElementById('credit-client-preview');
  if (!select || !preview) return;

  const clientId = select.value;
  if (!clientId) {
    preview.classList.add('hidden');
    return;
  }

  const client = appState.clients.find(c => c.id === clientId);
  if (!client) return;

  const { balance } = getClientBalance(clientId);
  preview.classList.remove('hidden');
  preview.innerHTML = `
    <div class="flex items-center justify-between text-xs p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-950">
      <div>
        <p class="font-bold flex items-center gap-1.5">${escapeHtml(client.name)} ${client.alias ? `<span class="text-amber-800 font-normal">(${escapeHtml(client.alias)})</span>` : ''}</p>
        <p class="text-amber-800 text-[11px] mt-0.5">Saldo pendiente actual: <span class="font-bold font-mono-numbers text-rose-600">${formatCurrency(balance)}</span></p>
      </div>
      ${client.creditLimit > 0 ? `
        <div class="text-right">
          <span class="text-[11px] text-amber-900 font-medium">Límite: ${formatCurrency(client.creditLimit)}</span>
        </div>
      ` : ''}
    </div>
  `;
}

function handleAddCredit(event) {
  event.preventDefault();
  const clientId = document.getElementById('credit-client-id').value;
  const amount = parseFloat(document.getElementById('credit-amount').value);
  const description = document.getElementById('credit-description').value.trim();
  const category = document.getElementById('credit-category').value;
  const date = document.getElementById('credit-date').value || new Date().toISOString().split('T')[0];
  const time = document.getElementById('credit-time').value || new Date().toTimeString().slice(0, 5);

  if (!clientId) {
    showToast('Por favor selecciona un comensal', 'warning');
    return;
  }
  if (!amount || amount <= 0) {
    showToast('El monto debe ser mayor a 0', 'warning');
    return;
  }
  if (!description) {
    showToast('Indica qué consumió el cliente', 'warning');
    return;
  }

  const newTx = {
    id: 'tx-' + Date.now(),
    clientId,
    type: 'credit',
    amount,
    date,
    time,
    description,
    category: category || 'Almuerzo'
  };

  appState.transactions.push(newTx);
  saveData();

  const client = appState.clients.find(c => c.id === clientId);
  showToast(`Consumo de ${formatCurrency(amount)} registrado a ${client ? client.name : 'cliente'}`);

  document.getElementById('credit-amount').value = '';
  document.getElementById('credit-description').value = '';
  updateCreditClientPreview();
  renderClientsList();
  renderCollectionReport();
}

function setQuickDish(text, price) {
  const descEl = document.getElementById('credit-description');
  const amountEl = document.getElementById('credit-amount');
  if (descEl) descEl.value = text;
  if (amountEl && price) amountEl.value = price;
}

// --- ABONOS / PAGOS ---
function quickAddPaymentModal(clientId) {
  switchTab('abonos');
  const select = document.getElementById('payment-client-id');
  if (select) select.value = clientId;
  updatePaymentClientPreview();
}

function updatePaymentClientPreview() {
  const select = document.getElementById('payment-client-id');
  const preview = document.getElementById('payment-client-preview');
  if (!select || !preview) return;

  const clientId = select.value;
  if (!clientId) {
    preview.classList.add('hidden');
    return;
  }

  const client = appState.clients.find(c => c.id === clientId);
  if (!client) return;

  const { balance } = getClientBalance(clientId);
  preview.classList.remove('hidden');
  preview.innerHTML = `
    <div class="flex items-center justify-between text-xs p-3.5 bg-emerald-50/80 rounded-xl border border-emerald-200 text-emerald-950">
      <div>
        <p class="font-bold">${escapeHtml(client.name)} ${client.alias ? `<span class="text-emerald-800 font-normal">(${escapeHtml(client.alias)})</span>` : ''}</p>
        <p class="text-emerald-800 text-[11px] mt-0.5">Saldo adeudado: <span class="font-bold font-mono-numbers text-rose-600">${formatCurrency(balance)}</span></p>
      </div>
      ${balance > 0 ? `
        <button 
          type="button" 
          onclick="fillFullPayment(${balance})"
          class="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors">
          Pagar Todo (${formatCurrency(balance)})
        </button>
      ` : '<span class="text-xs text-emerald-700 font-bold">¡Cuenta al día!</span>'}
    </div>
  `;
}

function fillFullPayment(amount) {
  const input = document.getElementById('payment-amount');
  if (input) input.value = amount;
}

function handleAddPayment(event) {
  event.preventDefault();
  const clientId = document.getElementById('payment-client-id').value;
  const amount = parseFloat(document.getElementById('payment-amount').value);
  const paymentMethod = document.getElementById('payment-method').value || 'Efectivo';
  const notes = document.getElementById('payment-notes').value.trim();
  const date = document.getElementById('payment-date').value || new Date().toISOString().split('T')[0];
  const time = document.getElementById('payment-time').value || new Date().toTimeString().slice(0, 5);

  if (!clientId) {
    showToast('Selecciona el comensal que realiza el pago', 'warning');
    return;
  }
  if (!amount || amount <= 0) {
    showToast('El monto del abono debe ser mayor a 0', 'warning');
    return;
  }

  const client = appState.clients.find(c => c.id === clientId);
  const { balance } = getClientBalance(clientId);

  const newTx = {
    id: 'tx-' + Date.now(),
    clientId,
    type: 'payment',
    amount,
    date,
    time,
    description: notes || `Abono a cuenta (${paymentMethod})`,
    paymentMethod,
    category: amount >= balance ? 'Liquidación Total' : 'Abono Parcial'
  };

  appState.transactions.push(newTx);
  saveData();

  showToast(`Abono de ${formatCurrency(amount)} asentado a ${client ? client.name : 'cliente'}`);

  document.getElementById('payment-amount').value = '';
  document.getElementById('payment-notes').value = '';
  updatePaymentClientPreview();
  renderClientsList();
  renderCollectionReport();
}

function deleteTransaction(txId) {
  if (!confirm('¿Deseas anular este movimiento? Se actualizará el saldo deudor del cliente.')) return;

  appState.transactions = appState.transactions.filter(t => t.id !== txId);
  saveData();
  showToast('Movimiento anulado');

  if (appState.activeClientIdForReport) {
    openClientBillingReport(appState.activeClientIdForReport);
  }
  renderClientsList();
  renderCollectionReport();
}

// --- GENERADOR PROFESIONAL DE ESTADO DE CUENTA / TICKET DE COBRO ---
function openClientBillingReport(clientId) {
  appState.activeClientIdForReport = clientId;
  const client = appState.clients.find(c => c.id === clientId);
  if (!client) return;

  const { totalCredit, totalPaid, balance } = getClientBalance(clientId);
  const clientTx = appState.transactions
    .filter(t => t.clientId === clientId)
    .sort((a, b) => new Date(b.date + ' ' + (b.time || '00:00')) - new Date(a.date + ' ' + (a.time || '00:00')));

  renderBillingReportView(client, totalCredit, totalPaid, balance, clientTx);
  openModal('modal-billing-report');
}

function setTicketMode(mode) {
  appState.activeTicketMode = mode;
  const btnTicket = document.getElementById('btn-mode-ticket');
  const btnFull = document.getElementById('btn-mode-full');

  if (btnTicket && btnFull) {
    if (mode === 'ticket') {
      btnTicket.className = 'px-3 py-1 bg-white text-slate-900 rounded-lg text-xs font-bold shadow-xs';
      btnFull.className = 'px-3 py-1 text-slate-500 hover:text-slate-900 rounded-lg text-xs font-medium';
    } else {
      btnFull.className = 'px-3 py-1 bg-white text-slate-900 rounded-lg text-xs font-bold shadow-xs';
      btnTicket.className = 'px-3 py-1 text-slate-500 hover:text-slate-900 rounded-lg text-xs font-medium';
    }
  }

  const paper = document.getElementById('report-paper-container');
  if (paper) {
    if (mode === 'ticket') {
      paper.className = 'max-w-[80mm] mx-auto bg-white p-6 rounded-2xl pos-ticket-paper font-mono-numbers text-xs shadow-lg';
    } else {
      paper.className = 'max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 text-xs shadow-sm';
    }
  }
}

function renderBillingReportView(client, totalCredit, totalPaid, balance, clientTx) {
  const container = document.getElementById('billing-report-content');
  if (!container) return;

  const config = appState.config;
  const currentDate = new Date().toLocaleDateString('es-GT', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  const ticketFolio = 'REC-' + client.id.replace('cli-', '').padStart(5, '0');

  const consumptions = clientTx.filter(t => t.type === 'credit');
  const payments = clientTx.filter(t => t.type === 'payment');

  const html = `
    <div id="report-paper-container" class="max-w-[80mm] mx-auto bg-white p-6 rounded-2xl pos-ticket-paper font-mono-numbers text-xs shadow-lg">
      
      <!-- Encabezado del Ticket / Restaurante -->
      <div class="text-center pb-4 border-b border-dashed border-slate-300">
        <div class="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mx-auto mb-2 shadow-xs">
          ${ICONS.utensils}
        </div>
        <h2 class="text-sm font-extrabold uppercase text-slate-900 tracking-tight">${escapeHtml(config.businessName)}</h2>
        <p class="text-[11px] text-slate-500">Servicio de Alimentos & Comida Diaria</p>
        ${config.phone ? `<p class="text-[11px] text-slate-500">Tel/WhatsApp: ${escapeHtml(config.phone)}</p>` : ''}
        
        <div class="mt-3 py-1 px-2.5 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-700 inline-block uppercase tracking-wider">
          ESTADO DE CUENTA DE CRÉDITO
        </div>
        <div class="text-[10px] text-slate-400 mt-1">Folio: ${ticketFolio}</div>
      </div>

      <!-- Datos del Comensal -->
      <div class="py-3.5 border-b border-dashed border-slate-300 space-y-1.5 text-xs">
        <div class="flex justify-between">
          <span class="text-slate-400">Emisión:</span>
          <span class="font-semibold text-slate-800">${currentDate}</span>
        </div>
        <div class="flex justify-between items-start">
          <span class="text-slate-400">Comensal:</span>
          <span class="font-bold text-slate-900 text-right">${escapeHtml(client.name)}</span>
        </div>
        ${client.alias ? `
          <div class="flex justify-between items-start">
            <span class="text-slate-400">Ref/Oficina:</span>
            <span class="text-slate-700 text-right">${escapeHtml(client.alias)}</span>
          </div>
        ` : ''}
        ${client.phone ? `
          <div class="flex justify-between">
            <span class="text-slate-400">Contacto:</span>
            <span class="text-slate-700">${escapeHtml(client.phone)}</span>
          </div>
        ` : ''}
      </div>

      <!-- Detalle de Consumos Fiados -->
      <div class="py-3.5 border-b border-dashed border-slate-300">
        <div class="flex justify-between text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          <span>Detalle de Consumos</span>
          <span>Monto</span>
        </div>
        <div class="space-y-2">
          ${consumptions.length === 0 ? '<p class="text-slate-400 italic text-center py-2">Sin consumos registrados</p>' : ''}
          ${consumptions.map(c => `
            <div class="flex justify-between items-start text-xs leading-snug">
              <div class="pr-2 text-slate-700">
                <span class="text-slate-400 text-[10px] font-semibold block">${formatDate(c.date)} &bull; ${c.time || ''}</span>
                <span>${escapeHtml(c.description)}</span>
              </div>
              <div class="text-right whitespace-nowrap font-bold text-slate-900 flex items-center gap-1">
                <span>${formatCurrency(c.amount)}</span>
                <button onclick="deleteTransaction('${c.id}')" class="no-print text-slate-300 hover:text-red-500 text-[10px] ml-1" title="Anular este plato">✕</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Detalle de Abonos -->
      ${payments.length > 0 ? `
        <div class="py-3.5 border-b border-dashed border-slate-300">
          <div class="flex justify-between text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">
            <span>Abonos Recibidos</span>
            <span>Abono</span>
          </div>
          <div class="space-y-1.5">
            ${payments.map(p => `
              <div class="flex justify-between items-start text-xs leading-snug text-emerald-900">
                <div class="pr-2">
                  <span class="text-emerald-600 text-[10px] block">${formatDate(p.date)} (${escapeHtml(p.paymentMethod || 'Efectivo')})</span>
                  <span class="text-slate-600">${escapeHtml(p.description)}</span>
                </div>
                <div class="text-right whitespace-nowrap font-bold text-emerald-600 flex items-center gap-1">
                  <span>-${formatCurrency(p.amount)}</span>
                  <button onclick="deleteTransaction('${p.id}')" class="no-print text-slate-300 hover:text-red-500 text-[10px] ml-1" title="Anular abono">✕</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Resumen y Gran Total -->
      <div class="pt-3.5 pb-2 space-y-1 text-xs">
        <div class="flex justify-between text-slate-500">
          <span>Subtotal Consumos:</span>
          <span class="font-semibold text-slate-800">${formatCurrency(totalCredit)}</span>
        </div>
        <div class="flex justify-between text-emerald-700">
          <span>(-) Total Abonado:</span>
          <span class="font-semibold">-${formatCurrency(totalPaid)}</span>
        </div>
        <div class="my-2.5 border-t-2 border-slate-900 border-dashed"></div>
        <div class="flex justify-between items-baseline">
          <span class="text-xs font-extrabold uppercase tracking-wider text-slate-900">Saldo a Cobrar:</span>
          <span class="text-base font-black ${balance > 0 ? 'text-rose-600' : 'text-emerald-600'}">
            ${formatCurrency(balance)}
          </span>
        </div>
      </div>

      <!-- Cuentas Bancarias para Transferir -->
      ${config.paymentInfo ? `
        <div class="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 text-center leading-relaxed">
          <p class="font-bold uppercase tracking-wider text-slate-800 text-[10px] mb-1">Cuentas para Transferencia:</p>
          <p class="font-medium">${escapeHtml(config.paymentInfo)}</p>
        </div>
      ` : ''}

      <!-- Footer cordial de ticket -->
      <div class="mt-4 pt-3 border-t border-dashed border-slate-300 text-center text-[10px] text-slate-400">
        <p class="font-medium text-slate-600">¡Muchas gracias por su preferencia!</p>
        <p class="mt-0.5">Favor de remitir su comprobante de pago.</p>
        <div class="mt-3 text-slate-300 tracking-widest font-mono text-[9px]">
          |||||||||||||||||||||||||||||||||||||||||
        </div>
      </div>

    </div>
  `;

  container.innerHTML = html;

  const btnWa = document.getElementById('btn-send-whatsapp');
  if (btnWa) {
    btnWa.onclick = () => sendBillingWhatsApp(client, balance, consumptions, payments);
  }

  const btnCopy = document.getElementById('btn-copy-report');
  if (btnCopy) {
    btnCopy.onclick = () => copyBillingMessage(client, balance, consumptions);
  }
}

// --- CONSTRUCTOR DE MENSAJE DE COBRANZA PARA WHATSAPP ---
function buildBillingWhatsAppText(client, balance, consumptions, payments) {
  const config = appState.config;
  const currency = config.currency || 'Q.';

  let itemsText = '';
  if (consumptions && consumptions.length > 0) {
    itemsText = consumptions.map(c => `• ${formatDate(c.date)}: ${c.description} - ${currency} ${Number(c.amount).toFixed(2)}`).join('\n');
  } else {
    itemsText = '• Consumos varios del menú';
  }

  let abonosText = '';
  if (payments && payments.length > 0) {
    const totalAbonado = payments.reduce((sum, p) => sum + Number(p.amount), 0);
    abonosText = `\n(Abonos anteriores aplicados: -${currency} ${totalAbonado.toFixed(2)})`;
  }

  const detallesCompletos = itemsText + abonosText;

  let msg = config.whatsappMessage || DEFAULT_CONFIG.whatsappMessage;
  msg = msg.replace(/{CLIENTE}/g, client.name || 'Cliente');
  msg = msg.replace(/{NEGOCIO}/g, config.businessName || 'Nuestro Negocio');
  msg = msg.replace(/{DETALLES}/g, detallesCompletos);
  msg = msg.replace(/{MONEDA}/g, currency);
  msg = msg.replace(/{TOTAL}/g, Number(balance).toFixed(2));
  msg = msg.replace(/{DATOS_PAGO}/g, config.paymentInfo || 'Consultar con el administrador');

  return msg;
}

function sendBillingWhatsApp(client, balance, consumptions, payments) {
  const cleanPhone = client.phone ? client.phone.replace(/\D/g, '') : '';
  const messageText = buildBillingWhatsAppText(client, balance, consumptions, payments);
  const encodedText = encodeURIComponent(messageText);

  if (!cleanPhone) {
    navigator.clipboard.writeText(messageText);
    showToast('El cliente no tiene teléfono. Mensaje copiado al portapapeles', 'warning');
    return;
  }

  const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
  window.open(url, '_blank');
  showToast('Abriendo WhatsApp...');
}

function copyBillingMessage(client, balance, consumptions) {
  const payments = appState.transactions.filter(t => t.clientId === client.id && t.type === 'payment');
  const messageText = buildBillingWhatsAppText(client, balance, consumptions, payments);
  
  navigator.clipboard.writeText(messageText).then(() => {
    showToast('Mensaje de cobro copiado al portapapeles');
  }).catch(() => {
    showToast('No se pudo copiar automáticamente', 'error');
  });
}

function printBillingReport() {
  const paper = document.getElementById('report-paper-container');
  const printArea = document.getElementById('print-area');
  if (!paper || !printArea) return;

  printArea.innerHTML = paper.outerHTML;
  document.body.classList.add('printing-ticket');
  document.body.classList.remove('printing-report');

  window.print();

  setTimeout(() => {
    document.body.classList.remove('printing-ticket');
    printArea.innerHTML = '';
  }, 1000);
}

function printGeneralReport() {
  document.body.classList.add('printing-report');
  document.body.classList.remove('printing-ticket');
  window.print();
  setTimeout(() => {
    document.body.classList.remove('printing-report');
  }, 1000);
}

// --- REPORTE CONSOLIDADO DE COBRANZA ---
function renderCollectionReport() {
  const tableBody = document.getElementById('report-debtors-tbody');
  const totalDebtSumEl = document.getElementById('report-total-sum');
  const debtorsCountEl = document.getElementById('report-debtors-count');

  if (!tableBody) return;

  const debtors = appState.clients
    .map(c => ({
      client: c,
      stats: getClientBalance(c.id)
    }))
    .filter(item => item.stats.balance > 0)
    .sort((a, b) => b.stats.balance - a.stats.balance);

  const totalSum = debtors.reduce((sum, item) => sum + item.stats.balance, 0);

  if (totalDebtSumEl) totalDebtSumEl.textContent = formatCurrency(totalSum);
  if (debtorsCountEl) debtorsCountEl.textContent = `${debtors.length} persona${debtors.length === 1 ? '' : 's'}`;

  if (debtors.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" class="px-6 py-14 text-center text-slate-500">
          <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-2.5">
            ${ICONS.checkCircle}
          </div>
          <p class="font-bold text-slate-800 text-sm">¡Excelente! No hay cuentas pendientes por cobrar.</p>
          <p class="text-xs text-slate-400 mt-1">Todos tus comensales están al día con sus pagos.</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = debtors.map((item, index) => {
    const { client, stats } = item;
    const cleanPhone = client.phone ? client.phone.replace(/\D/g, '') : '';
    const palette = getAvatarPalette(client.name);
    const initials = getClientInitials(client.name);
    
    return `
      <tr class="hover:bg-slate-50/80 border-b border-slate-100 text-xs transition-colors">
        <td class="px-4 py-3.5 font-bold text-slate-400 text-center font-mono-numbers">${index + 1}</td>
        <td class="px-4 py-3.5">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-[10px] ${palette.bg}">
              ${initials}
            </div>
            <div>
              <div class="font-bold text-slate-900 text-xs leading-snug">${escapeHtml(client.name)}</div>
              ${client.alias ? `<div class="text-[11px] text-slate-500 flex items-center gap-1">${ICONS.building} ${escapeHtml(client.alias)}</div>` : ''}
            </div>
          </div>
        </td>
        <td class="px-4 py-3.5 font-mono-numbers">
          ${client.phone ? `
            <a href="https://wa.me/${cleanPhone}" target="_blank" class="hover:text-emerald-600 inline-flex items-center gap-1 font-semibold text-slate-700">
              <span class="text-emerald-500">${ICONS.whatsapp}</span> ${escapeHtml(client.phone)}
            </a>
          ` : '<span class="text-slate-400 italic">Sin tel.</span>'}
        </td>
        <td class="px-4 py-3.5 text-slate-500 font-mono-numbers">
          ${stats.lastCreditDate ? formatDate(stats.lastCreditDate) : 'N/A'}
        </td>
        <td class="px-4 py-3.5 font-extrabold text-rose-600 font-mono-numbers text-sm">
          ${formatCurrency(stats.balance)}
        </td>
        <td class="px-4 py-3.5 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button 
              onclick="openClientBillingReport('${client.id}')"
              class="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-xs inline-flex items-center gap-1 shadow-xs transition-colors">
              ${ICONS.receipt} <span>Reporte</span>
            </button>
            ${cleanPhone ? `
              <button 
                onclick="directWhatsAppReminder('${client.id}')"
                class="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs inline-flex items-center gap-1 shadow-xs transition-colors"
                title="Cobrar directo por WhatsApp">
                <span class="text-white">${ICONS.whatsapp}</span> <span>Cobrar</span>
              </button>
            ` : ''}
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function directWhatsAppReminder(clientId) {
  const client = appState.clients.find(c => c.id === clientId);
  if (!client) return;

  const { balance } = getClientBalance(clientId);
  const consumptions = appState.transactions.filter(t => t.clientId === clientId && t.type === 'credit');
  const payments = appState.transactions.filter(t => t.clientId === clientId && t.type === 'payment');

  sendBillingWhatsApp(client, balance, consumptions, payments);
}

// --- EXPORTAR A EXCEL (.XLS CON FORMATO NATIVO DE COLUMNAS) ---
function exportDebtorsToXLS() {
  const debtors = appState.clients
    .map(c => ({
      client: c,
      stats: getClientBalance(c.id)
    }))
    .filter(item => item.stats.balance > 0)
    .sort((a, b) => b.stats.balance - a.stats.balance);

  if (debtors.length === 0) {
    showToast('No hay cuentas pendientes para exportar a Excel', 'warning');
    return;
  }

  const businessName = appState.config.businessName || 'Restaurante';
  const curr = appState.config.currency || 'Q.';
  const currentDate = new Date().toLocaleDateString('es-GT', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  const totalCreditSum = debtors.reduce((sum, item) => sum + item.stats.totalCredit, 0);
  const totalPaidSum = debtors.reduce((sum, item) => sum + item.stats.totalPaid, 0);
  const totalDebtSum = debtors.reduce((sum, item) => sum + item.stats.balance, 0);

  let tableRows = '';
  debtors.forEach((item, index) => {
    const { client, stats } = item;
    const cleanPhone = client.phone || 'N/A';
    const lastDate = stats.lastCreditDate ? formatDate(stats.lastCreditDate) : 'N/A';
    const rowBg = index % 2 === 0 ? '#ffffff' : '#f8fafc';

    tableRows += `
      <tr style="background-color: ${rowBg}; height: 26px;">
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: #64748b;">${index + 1}</td>
        <td style="font-weight: bold; border: 1px solid #cbd5e1; padding: 6px; color: #0f172a;">${escapeHtml(client.name)}</td>
        <td style="border: 1px solid #cbd5e1; padding: 6px; color: #475569;">${escapeHtml(client.alias || '-')}</td>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px; mso-number-format: '\\@';">${escapeHtml(cleanPhone)}</td>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px; mso-number-format: 'dd/mm/yyyy';">${lastDate}</td>
        <td style="text-align: right; border: 1px solid #cbd5e1; padding: 6px; mso-number-format: '\\Q\\ #,##0.00';">${stats.totalCredit.toFixed(2)}</td>
        <td style="text-align: right; border: 1px solid #cbd5e1; padding: 6px; color: #166534; font-weight: 500; mso-number-format: '\\Q\\ #,##0.00';">${stats.totalPaid.toFixed(2)}</td>
        <td style="text-align: right; border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; color: #dc2626; background-color: #fef2f2; mso-number-format: '\\Q\\ #,##0.00';">${stats.balance.toFixed(2)}</td>
        <td style="text-align: center; border: 1px solid #cbd5e1; padding: 6px; color: #b91c1c; font-weight: bold; background-color: #fff1f2;">Pendiente</td>
      </tr>
    `;
  });

  const xlsTemplate = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
      <!--[if gte mso 9]>
      <xml>
        <x:ExcelWorkbook>
          <x:ExcelWorksheets>
            <x:ExcelWorksheet>
              <x:Name>Cobranza de Comidas</x:Name>
              <x:WorksheetOptions>
                <x:DisplayGridlines/>
              </x:WorksheetOptions>
            </x:ExcelWorksheet>
          </x:ExcelWorksheets>
        </x:ExcelWorkbook>
      </xml>
      <![endif]-->
      <style>
        body { font-family: Calibri, 'Segoe UI', Arial, sans-serif; }
        table { border-collapse: collapse; }
      </style>
    </head>
    <body>
      <table>
        <!-- Encabezado del Negocio -->
        <tr>
          <td colspan="9" style="font-size: 16pt; font-weight: bold; color: #0f172a; padding: 10px 0;">
            ${escapeHtml(businessName)}
          </td>
        </tr>
        <tr>
          <td colspan="9" style="font-size: 11pt; font-weight: bold; color: #334155; padding-bottom: 4px;">
            REPORTE OFICIAL DE CARTERA Y COBRANZA - CUENTAS POR COBRAR
          </td>
        </tr>
        <tr>
          <td colspan="9" style="font-size: 9pt; color: #64748b; padding-bottom: 14px;">
            Fecha de Emisión: ${currentDate} &bull; Moneda: Quetzales (${curr})
          </td>
        </tr>

        <!-- Resumen de Métricas Financieras -->
        <tr>
          <td colspan="3" style="background-color: #fee2e2; border: 1px solid #fca5a5; padding: 8px; font-weight: bold; color: #991b1b; font-size: 10pt;">
            TOTAL POR COBRAR: ${curr} ${totalDebtSum.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </td>
          <td colspan="3" style="background-color: #dcfce7; border: 1px solid #86efac; padding: 8px; font-weight: bold; color: #166534; font-size: 10pt;">
            TOTAL RECAUDADO: ${curr} ${totalPaidSum.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </td>
          <td colspan="3" style="background-color: #f1f5f9; border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #334155; font-size: 10pt;">
            DEUDORES ACTIVOS: ${debtors.length} PERSONAS
          </td>
        </tr>
        <tr><td colspan="9" style="height: 12px;"></td></tr>

        <!-- Cabecera de Columnas Formateadas -->
        <thead>
          <tr style="background-color: #0f172a; color: #ffffff; font-weight: bold; text-align: center; height: 32px;">
            <th style="border: 1px solid #334155; padding: 8px; width: 45px; color: #ffffff;">No.</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 230px; text-align: left; color: #ffffff;">Nombre del Comensal</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 200px; text-align: left; color: #ffffff;">Empresa / Ubicación</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 130px; color: #ffffff;">WhatsApp / Tel.</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 120px; color: #ffffff;">Último Consumo</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 145px; text-align: right; color: #ffffff;">Total Consumido (${curr})</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 135px; text-align: right; color: #ffffff;">Total Abonado (${curr})</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 165px; text-align: right; color: #ffffff;">Saldo a Cobrar (${curr})</th>
            <th style="border: 1px solid #334155; padding: 8px; width: 110px; color: #ffffff;">Estado</th>
          </tr>
        </thead>

        <!-- Filas de Datos -->
        <tbody>
          ${tableRows}
        </tbody>

        <!-- Fila de Gran Total -->
        <tfoot>
          <tr style="background-color: #f1f5f9; font-weight: bold; height: 32px;">
            <td colspan="5" style="border: 2px solid #64748b; padding: 8px; text-align: right; text-transform: uppercase; font-size: 10pt; color: #0f172a;">
              TOTAL CONSOLIDADO:
            </td>
            <td style="border: 2px solid #64748b; padding: 8px; text-align: right; mso-number-format: '\\Q\\ #,##0.00'; font-size: 11pt; color: #0f172a;">
              ${totalCreditSum.toFixed(2)}
            </td>
            <td style="border: 2px solid #64748b; padding: 8px; text-align: right; color: #166534; mso-number-format: '\\Q\\ #,##0.00'; font-size: 11pt;">
              ${totalPaidSum.toFixed(2)}
            </td>
            <td style="border: 2px solid #64748b; padding: 8px; text-align: right; color: #dc2626; background-color: #fee2e2; mso-number-format: '\\Q\\ #,##0.00'; font-size: 11pt;">
              ${totalDebtSum.toFixed(2)}
            </td>
            <td style="border: 2px solid #64748b; padding: 8px; text-align: center; color: #b91c1c; font-size: 10pt;">
              ${debtors.length} pendientes
            </td>
          </tr>
        </tfoot>
      </table>

      ${appState.config.paymentInfo ? `
        <br/>
        <table>
          <tr>
            <td colspan="9" style="font-size: 9pt; color: #475569; font-style: italic; padding: 6px 0;">
              Cuentas para transferencias: ${escapeHtml(appState.config.paymentInfo)}
            </td>
          </tr>
          <tr>
            <td colspan="9" style="font-size: 8pt; color: #94a3b8;">
              Generado por GourmetLedger - Sistema Profesional de Créditos y Cobranza
            </td>
          </tr>
        </table>
      ` : ''}
    </body>
    </html>
  `;

  const blob = new Blob([xlsTemplate], { type: 'application/vnd.ms-excel;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  const dateStr = new Date().toISOString().slice(0, 10);
  link.setAttribute('download', `reporte_cobranza_${dateStr}.xls`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast('Reporte en Excel (.XLS) descargado con columnas alineadas');
}

// Alias para retrocompatibilidad
function exportDebtorsToCSV() {
  exportDebtorsToXLS();
}

// --- CONFIGURACIÓN DEL NEGOCIO ---
function loadConfigIntoForm() {
  document.getElementById('cfg-business-name').value = appState.config.businessName || '';
  document.getElementById('cfg-owner-name').value = appState.config.ownerName || '';
  document.getElementById('cfg-phone').value = appState.config.phone || '';
  document.getElementById('cfg-currency').value = appState.config.currency || 'Q.';
  document.getElementById('cfg-payment-info').value = appState.config.paymentInfo || '';
  document.getElementById('cfg-whatsapp-msg').value = appState.config.whatsappMessage || DEFAULT_CONFIG.whatsappMessage;
}

function handleSaveConfig(event) {
  event.preventDefault();
  appState.config.businessName = document.getElementById('cfg-business-name').value.trim() || 'Mi Negocio de Comida';
  appState.config.ownerName = document.getElementById('cfg-owner-name').value.trim();
  appState.config.phone = document.getElementById('cfg-phone').value.trim();
  appState.config.currency = document.getElementById('cfg-currency').value.trim() || 'Q.';
  appState.config.paymentInfo = document.getElementById('cfg-payment-info').value.trim();
  appState.config.whatsappMessage = document.getElementById('cfg-whatsapp-msg').value.trim();

  saveData();
  updateGlobalStats();
  showToast('Configuración actualizada correctamente');
}

// --- BACKUP & RESTORE ---
function exportFullBackupJSON() {
  const data = {
    version: '2.0',
    exportDate: new Date().toISOString(),
    config: appState.config,
    clients: appState.clients,
    transactions: appState.transactions
  };

  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `respaldo_creditos_comida_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Copia de seguridad descargada');
}

function handleImportJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.clients || !Array.isArray(data.clients)) {
        throw new Error('Formato inválido');
      }

      if (confirm('¿Deseas restaurar esta copia? Reemplazará tus registros actuales.')) {
        appState.config = data.config || { ...DEFAULT_CONFIG };
        appState.clients = data.clients || [];
        appState.transactions = data.transactions || [];
        saveData();
        loadConfigIntoForm();
        renderClientsList();
        renderCollectionReport();
        populateClientSelects();
        showToast('Respaldo restaurado con éxito');
      }
    } catch (err) {
      console.error(err);
      showToast('Error: archivo no válido', 'error');
    }
  };
  reader.readAsText(file);
}

function resetToDemoData() {
  if (confirm('¿Cargar datos de ejemplo? Esto restablecerá clientes y platillos de demostración.')) {
    appState.config = { ...DEFAULT_CONFIG };
    appState.clients = [...INITIAL_CLIENTS];
    appState.transactions = [...INITIAL_TRANSACTIONS];
    saveData();
    loadConfigIntoForm();
    renderClientsList();
    renderCollectionReport();
    populateClientSelects();
    showToast('Datos de demostración cargados');
  }
}

// --- MODALES ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
  if (modalId === 'modal-add-client') {
    document.getElementById('client-form').reset();
    document.getElementById('client-form-id').value = '';
    document.getElementById('modal-client-title').textContent = 'Registrar Nuevo Comensal';
    document.getElementById('btn-delete-client').classList.add('hidden');
  }
}

function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
  loadData();

  const todayStr = new Date().toISOString().split('T')[0];
  const nowTimeStr = new Date().toTimeString().slice(0, 5);

  const creditDateInput = document.getElementById('credit-date');
  const creditTimeInput = document.getElementById('credit-time');
  const paymentDateInput = document.getElementById('payment-date');
  const paymentTimeInput = document.getElementById('payment-time');

  if (creditDateInput) creditDateInput.value = todayStr;
  if (creditTimeInput) creditTimeInput.value = nowTimeStr;
  if (paymentDateInput) paymentDateInput.value = todayStr;
  if (paymentTimeInput) paymentTimeInput.value = nowTimeStr;

  // Listeners
  const clientForm = document.getElementById('client-form');
  if (clientForm) clientForm.addEventListener('submit', handleSaveClient);

  const creditForm = document.getElementById('credit-form');
  if (creditForm) creditForm.addEventListener('submit', handleAddCredit);

  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) paymentForm.addEventListener('submit', handleAddPayment);

  const configForm = document.getElementById('config-form');
  if (configForm) configForm.addEventListener('submit', handleSaveConfig);

  const searchInput = document.getElementById('search-clients-input');
  if (searchInput) searchInput.addEventListener('input', renderClientsList);

  const filterSelect = document.getElementById('filter-clients-status');
  if (filterSelect) filterSelect.addEventListener('change', renderClientsList);

  const creditSelect = document.getElementById('credit-client-id');
  if (creditSelect) creditSelect.addEventListener('change', updateCreditClientPreview);

  const paymentSelect = document.getElementById('payment-client-id');
  if (paymentSelect) paymentSelect.addEventListener('change', updatePaymentClientPreview);

  renderClientsList();
  populateClientSelects();
  updateGlobalStats();
});
