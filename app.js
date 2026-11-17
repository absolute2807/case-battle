// ==========================================
// 1. CASES CONFIGURATION (15 CASES + FREE)
// ==========================================
const CASES_DATA = [
  {
    id: 'free',
    name: 'Free Daily Case',
    price: 0,
    icon: '🎁',
    items: [
      { name: 'P250 | Sand Dune', price: 1.00, rarity: 'common', emoji: '🔫', weight: 60 },
      { name: 'MAG-7 | Silver', price: 5.50, rarity: 'common', emoji: '💥', weight: 25 },
      { name: 'AK-47 | Safari Mesh', price: 18.00, rarity: 'rare', emoji: '🌵', weight: 11 },
      { name: 'AWP | Atheris', price: 45.00, rarity: 'epic', emoji: '🐍', weight: 3.5 },
      { name: 'Knife | Free Drop Special', price: 100.00, rarity: 'legendary', emoji: '🗡️', weight: 0.5 }
    ]
  },
  {
    id: 'starter',
    name: 'Starter Arsenal',
    price: 2,
    icon: '📦',
    items: [
      { name: 'Glock-18 | Groundwater', price: 0.8, rarity: 'common', emoji: '🔫', weight: 50 },
      { name: 'USP-S | Forest Leaves', price: 1.5, rarity: 'common', emoji: '🔫', weight: 30 },
      { name: 'AK-47 | Redline', price: 8.5, rarity: 'rare', emoji: '💥', weight: 15 },
      { name: 'AWP | Asiimov', price: 35.0, rarity: 'legendary', emoji: '🎯', weight: 5 }
    ]
  },
  {
    id: 'cyber',
    name: 'Cyber Strike',
    price: 5,
    icon: '🧰',
    items: [
      { name: 'P250 | Neon Rider', price: 2.5, rarity: 'common', emoji: '🔫', weight: 45 },
      { name: 'M4A1-S | Streamline', price: 12.0, rarity: 'rare', emoji: '⚡', weight: 30 },
      { name: 'Desert Eagle | Flame', price: 30.0, rarity: 'epic', emoji: '🔥', weight: 18 },
      { name: 'Butterfly | Gradient', price: 120.0, rarity: 'legendary', emoji: '🗡️', weight: 7 }
    ]
  },
  {
    id: 'elite',
    name: 'Elite Ops',
    price: 15,
    icon: '💼',
    items: [
      { name: 'AK-47 | Vulcan', price: 14.0, rarity: 'rare', emoji: '❄️', weight: 45 },
      { name: 'M4A4 | Howl', price: 45.0, rarity: 'epic', emoji: '🐺', weight: 32 },
      { name: 'Gloves | Blood Kimono', price: 95.0, rarity: 'epic', emoji: '🧤', weight: 16 },
      { name: 'Karambit | Waves', price: 250.0, rarity: 'legendary', emoji: '⚔️', weight: 7 }
    ]
  },
  {
    id: 'nightmare',
    name: 'Nightmare Collection',
    price: 25,
    icon: '🌙',
    items: [
      { name: 'Galil AR | Tuxedo', price: 10.0, rarity: 'common', emoji: '🔫', weight: 50 },
      { name: 'AWP | Neo-Noir', price: 35.0, rarity: 'rare', emoji: '🎯', weight: 30 },
      { name: 'M4A1-S | Hyper Beast', price: 70.0, rarity: 'epic', emoji: '👾', weight: 15 },
      { name: 'Skeleton Knife | Slaughter', price: 350.0, rarity: 'legendary', emoji: '🔪', weight: 5 }
    ]
  },
  {
    id: 'golden',
    name: 'Golden Era',
    price: 40,
    icon: '👑',
    items: [
      { name: 'Desert Eagle | Golden Koi', price: 20.0, rarity: 'rare', emoji: '🟡', weight: 50 },
      { name: 'AK-47 | Fire Serpent', price: 90.0, rarity: 'epic', emoji: '🐉', weight: 30 },
      { name: 'Sport Gloves | Vice', price: 180.0, rarity: 'epic', emoji: '🥊', weight: 15 },
      { name: 'Bayonet | Lore', price: 500.0, rarity: 'legendary', emoji: '⚔️', weight: 5 }
    ]
  },
  {
    id: 'neon_city',
    name: 'Neon City',
    price: 60,
    icon: '🌆',
    items: [
      { name: 'MP9 | Hot Rod', price: 30.0, rarity: 'rare', emoji: '🚗', weight: 50 },
      { name: 'USP-S | Kill Confirmed', price: 120.0, rarity: 'epic', emoji: '💀', weight: 35 },
      { name: 'M4A4 | Cyber Security', price: 220.0, rarity: 'epic', emoji: '🛡️', weight: 10 },
      { name: 'Nomad Knife | Fade', price: 750.0, rarity: 'legendary', emoji: '🗡️', weight: 5 }
    ]
  },
  {
    id: 'inferno',
    name: 'Inferno Heat',
    price: 80,
    icon: '🔥',
    items: [
      { name: 'FAMAS | Valence', price: 40.0, rarity: 'rare', emoji: '🔥', weight: 50 },
      { name: 'AWP | Wildfire', price: 160.0, rarity: 'epic', emoji: '🦊', weight: 35 },
      { name: 'Specialist Gloves | Fade', price: 300.0, rarity: 'epic', emoji: '🧤', weight: 10 },
      { name: 'Talon Knife | Marble Fade', price: 950.0, rarity: 'legendary', emoji: '🗡️', weight: 5 }
    ]
  },
  {
    id: 'space',
    name: 'Deep Space',
    price: 100,
    icon: '🚀',
    items: [
      { name: 'SG 553 | Pulse', price: 50.0, rarity: 'rare', emoji: '🌌', weight: 50 },
      { name: 'M4A1-S | Player Two', price: 200.0, rarity: 'epic', emoji: '🎮', weight: 35 },
      { name: 'Driver Gloves | King Snake', price: 450.0, rarity: 'epic', emoji: '🐍', weight: 10 },
      { name: 'Butterfly Knife | Lore', price: 1300.0, rarity: 'legendary', emoji: '✨', weight: 5 }
    ]
  },
  {
    id: 'royal',
    name: 'Royal Vault',
    price: 150,
    icon: '💎',
    items: [
      { name: 'P2000 | Ocean Foam', price: 75.0, rarity: 'rare', emoji: '🌊', weight: 50 },
      { name: 'AK-47 | Case Hardened', price: 300.0, rarity: 'epic', emoji: '🔷', weight: 35 },
      { name: 'Moto Gloves | Spearmint', price: 600.0, rarity: 'epic', emoji: '🛡️', weight: 10 },
      { name: 'Karambit | Gamma Doppler', price: 1800.0, rarity: 'legendary', emoji: '💎', weight: 5 }
    ]
  },
  {
    id: 'titan',
    name: 'Titanium Box',
    price: 200,
    icon: '⚙️',
    items: [
      { name: 'MAC-10 | Neon Rider', price: 100.0, rarity: 'rare', emoji: '⚙️', weight: 55 },
      { name: 'AWP | Lightning Strike', price: 400.0, rarity: 'epic', emoji: '⚡', weight: 30 },
      { name: 'Sport Gloves | Pandora\'s Box', price: 900.0, rarity: 'epic', emoji: '📦', weight: 10 },
      { name: 'M9 Bayonet | Doppler', price: 2400.0, rarity: 'legendary', emoji: '🔪', weight: 5 }
    ]
  },
  {
    id: 'phantom',
    name: 'Phantom Stalker',
    price: 300,
    icon: '👻',
    items: [
      { name: 'AUG | Chameleon', price: 150.0, rarity: 'rare', emoji: '🦎', weight: 55 },
      { name: 'M4A4 | Eye of Horus', price: 600.0, rarity: 'epic', emoji: '👁️', weight: 30 },
      { name: 'Specialist Gloves | Tiger Strike', price: 1400.0, rarity: 'epic', emoji: '🐅', weight: 10 },
      { name: 'Karambit | Crimson Web', price: 3500.0, rarity: 'legendary', emoji: '🕷️', weight: 5 }
    ]
  },
  {
    id: 'underworld',
    name: 'Underworld Lord',
    price: 500,
    icon: '💀',
    items: [
      { name: 'SSG 08 | Blood in the Water', price: 250.0, rarity: 'rare', emoji: '🦈', weight: 55 },
      { name: 'AWP | Gungnir', price: 1100.0, rarity: 'epic', emoji: '🔱', weight: 30 },
      { name: 'Driver Gloves | Snow Leopard', price: 2200.0, rarity: 'epic', emoji: '🐆', weight: 10 },
      { name: 'AWP | Dragon Lore', price: 6000.0, rarity: 'legendary', emoji: '🐲', weight: 5 }
    ]
  },
  {
    id: 'godlike',
    name: 'Godlike Tier',
    price: 750,
    icon: '⚡',
    items: [
      { name: 'CZ75-Auto | Victoria', price: 350.0, rarity: 'rare', emoji: '⚡', weight: 55 },
      { name: 'AK-47 | Wild Lotus', price: 1600.0, rarity: 'epic', emoji: '🌸', weight: 30 },
      { name: 'Sport Gloves | Vice (FN)', price: 3500.0, rarity: 'epic', emoji: '💎', weight: 10 },
      { name: 'Butterfly Knife | Sapphire', price: 9000.0, rarity: 'legendary', emoji: '💙', weight: 5 }
    ]
  },
  {
    id: 'millionaire',
    name: 'Millionaire Club',
    price: 1000,
    icon: '💰',
    items: [
      { name: 'Desert Eagle | Printstream', price: 500.0, rarity: 'rare', emoji: '🤍', weight: 55 },
      { name: 'M4A4 | Howl (Factory New)', price: 2500.0, rarity: 'epic', emoji: '🔥', weight: 30 },
      { name: 'AWP | Gungnir (Factory New)', price: 5000.0, rarity: 'epic', emoji: '🌟', weight: 10 },
      { name: 'Karambit | Emerald', price: 15000.0, rarity: 'legendary', emoji: '💚', weight: 5 }
    ]
  }
];

const RARITY_COLORS = {
  common: '#64748b',
  rare: '#3b82f6',
  epic: '#a855f7',
  legendary: '#f59e0b'
};

// ==========================================
// 2. STATE
// ==========================================
let currentUser = null;
let userProfile = null;
let userInventory = [];
let authMode = 'login';
let isOpeningRunning = false;

// Upgrader State
let selectedUpgradeItem = null;
let upgradeChance = 10;
let isUpgrading = false;
let caseQuantities = {}; // caseId -> count (1, 2, 3, 5)

// ==========================================
// 3. INIT & AUTH
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  renderCases();

  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    await loadUserData(session.user);
  }

  sb.auth.onAuthStateChange(async (_event, session) => {
    if (session) {
      await loadUserData(session.user);
    } else {
      currentUser = null;
      userProfile = null;
      userInventory = [];
      updateUI();
    }
  });
});

async function loadUserData(user) {
  currentUser = user;

  const { data: profile, error } = await sb
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!error && profile) {
    userProfile = profile;
  }

  await fetchInventory();
  updateUI();
}

async function fetchInventory() {
  if (!currentUser) return;
  const { data, error } = await sb
    .from('inventory')
    .select('*')
    .eq('user_id', currentUser.id)
    .order('created_at', { ascending: false });

  if (!error && data) {
    userInventory = data;
    document.getElementById('inv-count').textContent = userInventory.length;
    renderInventory();
    renderUpgradeInventory();
  }
}

function updateUI() {
  const guestControls = document.getElementById('guest-controls');
  const authControls = document.getElementById('auth-controls');

  if (currentUser && userProfile) {
    guestControls.classList.add('hidden');
    authControls.classList.remove('hidden');
    document.getElementById('user-balance').textContent = Number(userProfile.balance).toFixed(2);
    document.getElementById('user-name').textContent = userProfile.username || currentUser.email;
  } else {
    guestControls.classList.remove('hidden');
    authControls.classList.add('hidden');
    document.getElementById('inv-count').textContent = '0';
  }
}

// ==========================================
// 4. AUTH MODAL
// ==========================================
function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
  document.getElementById('auth-error').classList.add('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function setAuthMode(mode) {
  authMode = mode;
  document.getElementById('mode-login').classList.toggle('active', mode === 'login');
  document.getElementById('mode-register').classList.toggle('active', mode === 'register');
  document.getElementById('auth-modal-title').textContent = mode === 'login' ? 'Sign In' : 'Register ($10 Bonus)';
  document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'Sign In' : 'Create Account';
  document.getElementById('auth-error').classList.add('hidden');
}

async function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errBox = document.getElementById('auth-error');
  const submitBtn = document.getElementById('auth-submit-btn');

  errBox.classList.add('hidden');
  submitBtn.disabled = true;

  try {
    if (authMode === 'register') {
      const { error } = await sb.auth.signUp({ email, password });
      if (error) throw error;
      showToast('Account created! $10 bonus added.');
      closeAuthModal();
    } else {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      showToast('Welcome back!');
      closeAuthModal();
    }
  } catch (err) {
    errBox.textContent = err.message;
    errBox.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
  }
}

async function logout() {
  await sb.auth.signOut();
  switchTab('cases');
  showToast('Logged out successfully');
}

// ==========================================
// 5. NAVIGATION & RENDERING CASES
// ==========================================
function switchTab(tab) {
  document.getElementById('view-cases').classList.toggle('hidden', tab !== 'cases');
  document.getElementById('view-upgrader').classList.toggle('hidden', tab !== 'upgrader');
  document.getElementById('view-inventory').classList.toggle('hidden', tab !== 'inventory');
  
  document.getElementById('tab-cases').classList.toggle('active', tab === 'cases');
  document.getElementById('tab-upgrader').classList.toggle('active', tab === 'upgrader');
  document.getElementById('tab-inventory').classList.toggle('active', tab === 'inventory');

  if (tab === 'inventory' || tab === 'upgrader') {
    if (!currentUser) {
      openAuthModal();
      switchTab('cases');
      return;
    }
    fetchInventory();
    if (tab === 'upgrader') {
      updateWheelSector();
    }
  }
}

function setCaseQuantity(caseId, qty) {
  caseQuantities[caseId] = qty;
  const card = document.getElementById(`case-card-${caseId}`);
  if (!card) return;
  card.querySelectorAll('.q-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.qty) === qty);
  });
  const openBtn = card.querySelector('.open-case-btn');
  const caseData = CASES_DATA.find(c => c.id === caseId);
  const totalCost = caseData.price * qty;
  openBtn.textContent = caseData.price === 0 ? `Open ${qty} Free` : `Open (${totalCost} $)`;
}

function renderCases() {
  const grid = document.getElementById('cases-grid');
  grid.innerHTML = CASES_DATA.map(c => {
    const qty = caseQuantities[c.id] || 1;
    const totalCost = c.price * qty;
    return `
      <div class="case-card" id="case-card-${c.id}">
        <div>
          <div class="case-icon">${c.icon}</div>
          <div class="case-title">${c.name}</div>
          <div class="case-price">${c.price === 0 ? 'FREE' : `${c.price} $`}</div>
          <div class="case-items-preview">
            ${c.items.map(i => `<span class="preview-dot" style="background:${RARITY_COLORS[i.rarity]}" title="${i.name} (${i.price} $)"></span>`).join('')}
          </div>
        </div>
        <div class="case-actions">
          <div class="quantity-selector">
            <button class="q-btn ${qty === 1 ? 'active' : ''}" data-qty="1" onclick="setCaseQuantity('${c.id}', 1)">1</button>
            <button class="q-btn ${qty === 2 ? 'active' : ''}" data-qty="2" onclick="setCaseQuantity('${c.id}', 2)">2</button>
            <button class="q-btn ${qty === 3 ? 'active' : ''}" data-qty="3" onclick="setCaseQuantity('${c.id}', 3)">3</button>
            <button class="q-btn ${qty === 5 ? 'active' : ''}" data-qty="5" onclick="setCaseQuantity('${c.id}', 5)">5</button>
          </div>
          <button class="btn btn-primary btn-full open-case-btn" onclick="openCase('${c.id}')">
            ${c.price === 0 ? `Open ${qty} Free` : `Open (${totalCost} $)`}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 6. CASE OPENING LOGIC (SLOW & MULTI)
// ==========================================
function pickRandomItem(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let rand = Math.random() * totalWeight;
  for (const item of items) {
    if (rand < item.weight) return item;
    rand -= item.weight;
  }
  return items[0];
}

async function openCase(caseId) {
  if (!currentUser || !userProfile) {
    openAuthModal();
    return;
  }
  if (isOpeningRunning) return;

  const selectedCase = CASES_DATA.find(c => c.id === caseId);
  if (!selectedCase) return;

  const qty = caseQuantities[caseId] || 1;
  const totalCost = selectedCase.price * qty;

  if (Number(userProfile.balance) < totalCost) {
    showToast('Insufficient balance!');
    return;
  }

  isOpeningRunning = true;

  // Deduct balance
  const newBalance = Number(userProfile.balance) - totalCost;
  const { error: balErr } = await sb
    .from('profiles')
    .update({ balance: newBalance })
    .eq('id', currentUser.id);

  if (balErr) {
    showToast('Balance transaction error');
    isOpeningRunning = false;
    return;
  }

  userProfile.balance = newBalance;
  updateUI();

  // Prepare Arena
  const arena = document.getElementById('opening-arena');
  const closeBtn = document.getElementById('close-arena-btn');
  const verdictBox = document.getElementById('opening-verdict');
  const roulettesContainer = document.getElementById('roulettes-container');

  arena.classList.remove('hidden');
  closeBtn.disabled = true;
  verdictBox.classList.add('hidden');
  document.getElementById('opening-title').textContent = `Opening: ${selectedCase.name} (${qty}x)`;

  // Generate roulette lanes for each opened case
  let lanesHTML = '';
  for (let i = 0; i < qty; i++) {
    lanesHTML += `
      <div class="roulette-lane">
        <div class="roulette-window">
          <div class="roulette-pointer"></div>
          <div class="roulette-track" id="track-${i}"></div>
        </div>
      </div>
    `;
  }
  roulettesContainer.innerHTML = lanesHTML;
  arena.scrollIntoView({ behavior: 'smooth' });

  // Pick winning items
  const wonItems = [];
  for (let i = 0; i < qty; i++) {
    wonItems.push(pickRandomItem(selectedCase.items));
  }

  // Spin all roulettes slowly & smoothly
  const spinPromises = wonItems.map((targetItem, index) => {
    return spinSlowRoulette(`track-${index}`, selectedCase.items, targetItem);
  });

  await Promise.all(spinPromises);

  // Save to inventory
  const insertPayload = wonItems.map(item => ({
    user_id: currentUser.id,
    item_name: item.name,
    item_rarity: item.rarity,
    item_price: item.price,
    item_image: item.emoji
  }));

  await sb.from('inventory').insert(insertPayload);
  await fetchInventory();

  const totalWonPrice = wonItems.reduce((s, i) => s + i.price, 0);
  verdictBox.textContent = `Success! Added ${qty} item(s) to your inventory. Total value: $${totalWonPrice.toFixed(2)}`;
  verdictBox.classList.remove('hidden');
  closeBtn.disabled = false;
  isOpeningRunning = false;
}

function spinSlowRoulette(trackId, pool, targetItem) {
  return new Promise(resolve => {
    const track = document.getElementById(trackId);
    const totalCards = 50;
    const winIndex = 40; // Winning card index

    const cards = [];
    for (let i = 0; i < totalCards; i++) {
      const item = (i === winIndex) ? targetItem : pool[Math.floor(Math.random() * pool.length)];
      cards.push(`
        <div class="roulette-item" style="border-bottom-color: ${RARITY_COLORS[item.rarity]}">
          <div class="item-emoji">${item.emoji}</div>
          <div class="item-name">${item.name}</div>
        </div>
      `);
    }

    track.style.transition = 'none';
    track.style.transform = 'translateX(0px)';
    track.innerHTML = cards.join('');
    track.offsetHeight; // Force reflow

    const cardWidth = 113; // 105px width + 8px margins
    const windowWidth = track.parentElement.offsetWidth;
    const randomOffset = Math.floor(Math.random() * 40) - 20;
    const targetX = (winIndex * cardWidth) - (windowWidth / 2) + (cardWidth / 2) + randomOffset;

    // Slow and smooth cubic-bezier animation (6.5 seconds)
    track.style.transition = 'transform 6.5s cubic-bezier(0.08, 0.82, 0.15, 1)';
    track.style.transform = `translateX(-${targetX}px)`;

    setTimeout(resolve, 6700);
  });
}

function closeOpeningArena() {
  if (!isOpeningRunning) {
    document.getElementById('opening-arena').classList.add('hidden');
  }
}

// ==========================================
// 7. UPGRADER & SYMMETRIC WHEEL LOGIC
// ==========================================
function renderUpgradeInventory() {
  const container = document.getElementById('upgrade-inv-select');
  if (userInventory.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); font-size: 13px;">No items in inventory.</p>';
    return;
  }

  container.innerHTML = userInventory.map(item => `
    <div class="upgrade-inv-item ${selectedUpgradeItem?.id === item.id ? 'selected' : ''}" onclick="selectUpgradeItem('${item.id}')">
      <div style="display:flex; align-items:center; gap:8px;">
        <span style="font-size:24px;">${item.item_image || '🎁'}</span>
        <div>
          <div style="font-weight:700; font-size:13px;">${item.item_name}</div>
          <div style="color:var(--win); font-size:12px;">$${Number(item.item_price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function selectUpgradeItem(itemId) {
  selectedUpgradeItem = userInventory.find(i => i.id === itemId);
  renderUpgradeInventory();
  updateTargetPreview();
  validateUpgrader();
}

function setUpgradeChance(chance) {
  upgradeChance = chance;
  document.querySelectorAll('.chance-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === chance);
  });
  updateWheelSector();
  updateTargetPreview();
  validateUpgrader();
}

/**
 * Симметричное сокращение зеленой зоны вниз:
 * При 50% зеленая зона занимает ровно половину колеса (180 градусов).
 * При меньших процентах зона уменьшается симметрично относительно верхней стрелки.
 */
function updateWheelSector() {
  const winSector = document.getElementById('win-sector');
  const degrees = (upgradeChance / 100) * 360;
  const halfDeg = degrees / 2;
  // Центрируем зеленую зону сверху (на 12 часах / вокруг 0 градусов)
  const startDeg = 360 - halfDeg;
  const endDeg = halfDeg;

  if (upgradeChance >= 100) {
    winSector.style.background = 'var(--win)';
  } else {
    winSector.style.background = `conic-gradient(from ${startDeg}deg at 50% 50%, transparent 0deg, var(--win) 0deg, var(--win) ${degrees}deg, transparent ${degrees}deg)`;
  }
}

function updateTargetPreview() {
  const card = document.getElementById('target-preview-card');
  if (!selectedUpgradeItem) {
    card.innerHTML = '<div class="target-placeholder">Select item & chance</div>';
    return;
  }

  const multiplier = 100 / upgradeChance;
  const targetPrice = selectedUpgradeItem.item_price * multiplier;

  card.innerHTML = `
    <div style="font-size:38px; margin-bottom:6px;">🎯</div>
    <div style="font-weight:700; font-size:14px; margin-bottom:4px;">Target Upgrade</div>
    <div style="color:var(--win); font-weight:800; font-size:18px; margin-bottom:6px;">$${targetPrice.toFixed(2)}</div>
    <div style="color:var(--text-muted); font-size:12px;">Multiplier: ${multiplier.toFixed(2)}x</div>
  `;
}

function validateUpgrader() {
  const btn = document.getElementById('spin-wheel-btn');
  btn.disabled = !selectedUpgradeItem || isUpgrading;
}

async function startUpgrade() {
  if (!selectedUpgradeItem || isUpgrading || !currentUser) return;
  isUpgrading = true;
  validateUpgrader();

  // Удаляем исходный скин из инвентаря
  await sb.from('inventory').delete().eq('id', selectedUpgradeItem.id);

  const wheel = document.getElementById('fortune-wheel');
  // Случайный угол вращения (минимум 5 полных оборотов + рандом)
  const randomRotation = 1800 + Math.floor(Math.random() * 360);
  
  wheel.style.transition = 'transform 4s cubic-bezier(0.15, 0.85, 0.25, 1)';
  wheel.style.transform = `rotate(${randomRotation}deg)`;

  setTimeout(async () => {
    // Вычисляем финальный угол стрелки (от 0 до 360)
    const finalAngle = randomRotation % 360;
    // Стрелка находится сверху (0 / 360 градусов). Проверяем, попал ли угол в зеленую зону (-halfDeg ... +halfDeg)
    const halfDeg = (upgradeChance / 100) * 360 / 2;
    
    // Приведение угла к диапазону [-180, 180] от верхней точки
    let normalizedAngle = finalAngle;
    if (normalizedAngle > 180) normalizedAngle -= 360;

    const isWin = Math.abs(normalizedAngle) <= halfDeg;

    if (isWin) {
      const multiplier = 100 / upgradeChance;
      const targetPrice = selectedUpgradeItem.item_price * multiplier;
      const winItemName = `Upgrade Win (${upgradeChance}%): ${selectedUpgradeItem.item_name}`;

      await sb.from('inventory').insert([{
        user_id: currentUser.id,
        item_name: winItemName,
        item_rarity: upgradeChance <= 20 ? 'legendary' : 'epic',
        item_price: targetPrice,
        item_image: '🚀'
      }]);

      showToast(`UPGRADE WON! +$${targetPrice.toFixed(2)}`);
    } else {
      showToast('Upgrade failed. Better luck next time!');
    }

    selectedUpgradeItem = null;
    isUpgrading = false;
    await fetchInventory();
    renderUpgradeInventory();
    updateTargetPreview();
    validateUpgrader();

    // Сбрасываем поворот колеса без анимации
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';
  }, 4200);
}

// ==========================================
// 8. INVENTORY & SELLING
// ==========================================
function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (userInventory.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted)">Inventory is empty. Open cases to win skins!</p>';
    return;
  }

  grid.innerHTML = userInventory.map(item => `
    <div class="inv-card" style="border-top-color: ${RARITY_COLORS[item.item_rarity] || '#64748b'}">
      <div class="inv-emoji">${item.item_image || '🎁'}</div>
      <div class="inv-name">${item.item_name}</div>
      <div class="inv-price">$${Number(item.item_price).toFixed(2)}</div>
      <button class="btn btn-outline btn-sm btn-full" onclick="sellItem('${item.id}', ${item.item_price})">
        Sell Item
      </button>
    </div>
  `).join('');
}

async function sellItem(itemId, price) {
  if (!currentUser || !userProfile) return;

  const { error: delErr } = await sb.from('inventory').delete().eq('id', itemId);
  if (delErr) {
    showToast('Error selling item');
    return;
  }

  const updatedBalance = Number(userProfile.balance) + Number(price);
  const { error: balErr } = await sb
    .from('profiles')
    .update({ balance: updatedBalance })
    .eq('id', currentUser.id);

  if (!balErr) {
    userProfile.balance = updatedBalance;
    updateUI();
    await fetchInventory();
    showToast(`Sold for +$${price.toFixed(2)}`);
  }
}

// ==========================================
// 9. TOAST NOTIFICATIONS
// ==========================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3500);
}
