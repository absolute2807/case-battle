// ==========================================
// 1. CATEGORIZED CASES DATABASE (20 CASES)
// ==========================================
const CASES_DATA = [
  // CATEGORY: FREE & STARTER
  {
    id: 'free_unlimited',
    category: 'Free & Starter Cases',
    name: 'Free Unlimited Box',
    price: 0,
    isNew: true,
    icon: '🎁',
    items: [
      { name: 'P250 | Sand Dune', price: 1.00, rarity: 'common', emoji: '🔫', weight: 62 },
      { name: 'MP9 | Storm', price: 4.50, rarity: 'common', emoji: '💨', weight: 24 },
      { name: 'AK-47 | Safari Mesh', price: 16.00, rarity: 'rare', emoji: '🌵', weight: 10 },
      { name: 'AWP | Atheris', price: 48.00, rarity: 'epic', emoji: '🐍', weight: 3.5 },
      { name: 'Gut Knife | Free Special', price: 100.00, rarity: 'legendary', emoji: '🗡️', weight: 0.5 }
    ]
  },
  {
    id: 'starter',
    category: 'Free & Starter Cases',
    name: 'Starter Arsenal',
    price: 2,
    isNew: false,
    icon: '📦',
    items: [
      { name: 'Glock-18 | Groundwater', price: 0.9, rarity: 'common', emoji: '🔫', weight: 55 },
      { name: 'USP-S | Forest Leaves', price: 1.8, rarity: 'common', emoji: '🔫', weight: 28 },
      { name: 'AK-47 | Redline', price: 9.5, rarity: 'rare', emoji: '💥', weight: 12 },
      { name: 'AWP | Asiimov', price: 38.0, rarity: 'legendary', emoji: '🎯', weight: 5 }
    ]
  },
  {
    id: 'cyber',
    category: 'Free & Starter Cases',
    name: 'Cyber Strike',
    price: 5,
    isNew: false,
    icon: '🧰',
    items: [
      { name: 'P250 | Neon Rider', price: 2.5, rarity: 'common', emoji: '🔫', weight: 50 },
      { name: 'M4A1-S | Streamline', price: 12.0, rarity: 'rare', emoji: '⚡', weight: 30 },
      { name: 'Desert Eagle | Flame', price: 32.0, rarity: 'epic', emoji: '🔥', weight: 14 },
      { name: 'Butterfly | Gradient', price: 125.0, rarity: 'legendary', emoji: '🗡️', weight: 6 }
    ]
  },
  {
    id: 'elite',
    category: 'Free & Starter Cases',
    name: 'Elite Ops',
    price: 15,
    isNew: false,
    icon: '💼',
    items: [
      { name: 'AK-47 | Vulcan', price: 14.0, rarity: 'rare', emoji: '❄️', weight: 48 },
      { name: 'M4A4 | Howl', price: 48.0, rarity: 'epic', emoji: '🐺', weight: 32 },
      { name: 'Gloves | Blood Kimono', price: 95.0, rarity: 'epic', emoji: '🧤', weight: 14 },
      { name: 'Karambit | Waves', price: 260.0, rarity: 'legendary', emoji: '⚔️', weight: 6 }
    ]
  },

  // CATEGORY: SERIAL CASES (MOVIES & HORROR)
  {
    id: 'alien',
    category: 'Serial Cases',
    name: 'Alien Xenomorph',
    price: 10,
    isNew: true,
    icon: '👽',
    items: [
      { name: 'Five-SeveN | Scumbria', price: 5.0, rarity: 'common', emoji: '🔫', weight: 50 },
      { name: 'M4A1-S | Dark Water', price: 18.0, rarity: 'rare', emoji: '💧', weight: 30 },
      { name: 'AWP | Containment Breach', price: 55.0, rarity: 'epic', emoji: '☣️', weight: 15 },
      { name: 'Flip Knife | Gamma Emerald', price: 210.0, rarity: 'legendary', emoji: '🗡️', weight: 5 }
    ]
  },
  {
    id: 'gremlin',
    category: 'Serial Cases',
    name: 'Gremlin',
    price: 25,
    isNew: true,
    icon: '👺',
    items: [
      { name: 'MAC-10 | Monster Call', price: 12.0, rarity: 'common', emoji: '👾', weight: 50 },
      { name: 'FAMAS | Eye of Athena', price: 40.0, rarity: 'rare', emoji: '🦉', weight: 30 },
      { name: 'AK-47 | Neon Revolution', price: 95.0, rarity: 'epic', emoji: '🎨', weight: 15 },
      { name: 'Stiletto Knife | Slaughter', price: 380.0, rarity: 'legendary', emoji: '🔪', weight: 5 }
    ]
  },
  {
    id: 'scream',
    category: 'Serial Cases',
    name: 'Scream Ghostface',
    price: 50,
    isNew: true,
    icon: '😱',
    items: [
      { name: 'USP-S | Cortex', price: 24.0, rarity: 'rare', emoji: '🧠', weight: 52 },
      { name: 'AWP | Neo-Noir', price: 85.0, rarity: 'epic', emoji: '🎭', weight: 30 },
      { name: 'Sport Gloves | Nocts', price: 210.0, rarity: 'epic', emoji: '🧤', weight: 13 },
      { name: 'Skeleton Knife | Vanilla', price: 680.0, rarity: 'legendary', emoji: '🗡️', weight: 5 }
    ]
  },
  {
    id: 'saw',
    category: 'Serial Cases',
    name: 'Saw Jigsaw',
    price: 100,
    isNew: true,
    icon: '🪚',
    items: [
      { name: 'Desert Eagle | Code Red', price: 50.0, rarity: 'rare', emoji: '🩸', weight: 52 },
      { name: 'AK-47 | Bloodsport', price: 165.0, rarity: 'epic', emoji: '🏎️', weight: 30 },
      { name: 'Specialist Gloves | Crimson', price: 420.0, rarity: 'epic', emoji: '🧤', weight: 13 },
      { name: 'M9 Bayonet | Autotronic', price: 1250.0, rarity: 'legendary', emoji: '⚔️', weight: 5 }
    ]
  },
  {
    id: 'chucky',
    category: 'Serial Cases',
    name: 'Chucky Doll',
    price: 200,
    isNew: true,
    icon: '🧸',
    items: [
      { name: 'M4A4 | The Emperor', price: 95.0, rarity: 'rare', emoji: '👑', weight: 52 },
      { name: 'AWP | Wildfire', price: 320.0, rarity: 'epic', emoji: '🔥', weight: 30 },
      { name: 'Moto Gloves | Blood Pressure', price: 780.0, rarity: 'epic', emoji: '🧤', weight: 13 },
      { name: 'Karambit | Fade', price: 2400.0, rarity: 'legendary', emoji: '🌈', weight: 5 }
    ]
  },
  {
    id: 'dawnwalker',
    category: 'Serial Cases',
    name: 'The Blood of Dawnwalker',
    price: 450,
    isNew: false,
    icon: '🧛',
    items: [
      { name: 'AK-47 | X-Ray', price: 220.0, rarity: 'rare', emoji: '🦴', weight: 55 },
      { name: 'M4A1-S | Welcome to the Jungle', price: 850.0, rarity: 'epic', emoji: '🐍', weight: 30 },
      { name: 'Sport Gloves | Vice', price: 1950.0, rarity: 'epic', emoji: '💎', weight: 10 },
      { name: 'Butterfly Knife | Ruby', price: 5500.0, rarity: 'legendary', emoji: '❤️', weight: 5 }
    ]
  },

  // CATEGORY: IMAGE CASES (CHARMS, STICKERS, AGENTS, PATCHES)
  {
    id: 'charms_box',
    category: 'Image & Collectible Cases',
    name: 'Weapon Charms',
    price: 8,
    isNew: true,
    icon: '🧿',
    items: [
      { name: 'Charm | Lil\' Monster', price: 4.0, rarity: 'common', emoji: '👾', weight: 50 },
      { name: 'Charm | Hot Sauce', price: 12.0, rarity: 'rare', emoji: '🌶️', weight: 30 },
      { name: 'Charm | Diamond Dog', price: 35.0, rarity: 'epic', emoji: '🐶', weight: 15 },
      { name: 'Charm | Semi-Precious Knife', price: 110.0, rarity: 'legendary', emoji: '🗡️', weight: 5 }
    ]
  },
  {
    id: 'stickers_s',
    category: 'Image & Collectible Cases',
    name: 'Stickers S-Box',
    price: 12,
    isNew: false,
    icon: '🏷️',
    items: [
      { name: 'Sticker | Global Elite', price: 6.0, rarity: 'common', emoji: '🌍', weight: 50 },
      { name: 'Sticker | Crown (Foil)', price: 22.0, rarity: 'rare', emoji: '👑', weight: 30 },
      { name: 'Sticker | Howling Dawn', price: 65.0, rarity: 'epic', emoji: '🐺', weight: 15 },
      { name: 'Sticker | Titan (Holo) 2014', price: 250.0, rarity: 'legendary', emoji: '💠', weight: 5 }
    ]
  },
  {
    id: 'stickers_xl',
    category: 'Image & Collectible Cases',
    name: 'Stickers XL-Box',
    price: 45,
    isNew: false,
    icon: '🌟',
    items: [
      { name: 'Sticker | Natus Vincere (Holo)', price: 25.0, rarity: 'rare', emoji: '⚡', weight: 50 },
      { name: 'Sticker | Virtus.Pro (Foil)', price: 75.0, rarity: 'epic', emoji: '🐻', weight: 30 },
      { name: 'Sticker | Reason Gaming (Holo)', price: 210.0, rarity: 'epic', emoji: '🔥', weight: 15 },
      { name: 'Sticker | iBUYPOWER (Holo)', price: 850.0, rarity: 'legendary', emoji: '🦁', weight: 5 }
    ]
  },
  {
    id: 'patches_box',
    category: 'Image & Collectible Cases',
    name: 'Elite Patches',
    price: 30,
    isNew: false,
    icon: '🛡️',
    items: [
      { name: 'Patch | Boss', price: 15.0, rarity: 'common', emoji: '😎', weight: 50 },
      { name: 'Patch | Dragon Lore', price: 50.0, rarity: 'rare', emoji: '🐉', weight: 30 },
      { name: 'Patch | Howl', price: 120.0, rarity: 'epic', emoji: '🐺', weight: 15 },
      { name: 'Patch | Gold Web', price: 340.0, rarity: 'legendary', emoji: '🕸️', weight: 5 }
    ]
  },
  {
    id: 'agents_box',
    category: 'Image & Collectible Cases',
    name: 'Special Agents',
    price: 75,
    isNew: false,
    icon: '🕵️',
    items: [
      { name: 'Agent | Ground Rebel', price: 38.0, rarity: 'rare', emoji: '🪖', weight: 50 },
      { name: 'Agent | Sir Bloody Miami Darryl', price: 130.0, rarity: 'epic', emoji: '🎭', weight: 30 },
      { name: 'Agent | Number K', price: 280.0, rarity: 'epic', emoji: '🤍', weight: 15 },
      { name: 'Agent | Lt. Commander Ricksaw', price: 750.0, rarity: 'legendary', emoji: '🎖️', weight: 5 }
    ]
  },
  {
    id: 'capsules_box',
    category: 'Image & Collectible Cases',
    name: 'Legends Capsule',
    price: 120,
    isNew: false,
    icon: '💊',
    items: [
      { name: 'Capsule | Stockholm Contenders', price: 60.0, rarity: 'rare', emoji: '🏆', weight: 50 },
      { name: 'Capsule | Antwerp Legends', price: 200.0, rarity: 'epic', emoji: '💎', weight: 30 },
      { name: 'Capsule | Katowice 2015', price: 480.0, rarity: 'epic', emoji: '🔥', weight: 15 },
      { name: 'Capsule | EMS Katowice 2014', price: 1600.0, rarity: 'legendary', emoji: '👑', weight: 5 }
    ]
  },

  // CATEGORY: HIGH ROLLER VAULTS
  {
    id: 'royal_vault',
    category: 'High Roller Vaults',
    name: 'Royal Vault',
    price: 250,
    isNew: false,
    icon: '💎',
    items: [
      { name: 'AK-47 | Case Hardened', price: 130.0, rarity: 'rare', emoji: '🔷', weight: 52 },
      { name: 'AWP | Lightning Strike', price: 450.0, rarity: 'epic', emoji: '⚡', weight: 30 },
      { name: 'Sport Gloves | Pandora\'s Box', price: 1100.0, rarity: 'epic', emoji: '📦', weight: 13 },
      { name: 'Karambit | Gamma Doppler', price: 2800.0, rarity: 'legendary', emoji: '💎', weight: 5 }
    ]
  },
  {
    id: 'underworld',
    category: 'High Roller Vaults',
    name: 'Underworld Lord',
    price: 500,
    isNew: false,
    icon: '💀',
    items: [
      { name: 'AWP | Gungnir', price: 280.0, rarity: 'rare', emoji: '🔱', weight: 52 },
      { name: 'Driver Gloves | Snow Leopard', price: 950.0, rarity: 'epic', emoji: '🐆', weight: 30 },
      { name: 'M4A4 | Eye of Horus', price: 2100.0, rarity: 'epic', emoji: '👁️', weight: 13 },
      { name: 'AWP | Dragon Lore', price: 6500.0, rarity: 'legendary', emoji: '🐲', weight: 5 }
    ]
  },
  {
    id: 'godlike',
    category: 'High Roller Vaults',
    name: 'Godlike Tier',
    price: 750,
    isNew: false,
    icon: '⚡',
    items: [
      { name: 'AK-47 | Wild Lotus', price: 400.0, rarity: 'rare', emoji: '🌸', weight: 52 },
      { name: 'Sport Gloves | Vice (FN)', price: 1500.0, rarity: 'epic', emoji: '💎', weight: 30 },
      { name: 'Karambit | Crimson Web', price: 3200.0, rarity: 'epic', emoji: '🕷️', weight: 13 },
      { name: 'Butterfly Knife | Sapphire', price: 9200.0, rarity: 'legendary', emoji: '💙', weight: 5 }
    ]
  },
  {
    id: 'millionaire',
    category: 'High Roller Vaults',
    name: 'Millionaire Club',
    price: 1000,
    isNew: false,
    icon: '💰',
    items: [
      { name: 'Desert Eagle | Printstream', price: 550.0, rarity: 'rare', emoji: '🤍', weight: 52 },
      { name: 'M4A4 | Howl (Factory New)', price: 2200.0, rarity: 'epic', emoji: '🔥', weight: 30 },
      { name: 'AWP | Gungnir (Factory New)', price: 4800.0, rarity: 'epic', emoji: '🌟', weight: 13 },
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

// Собираем пул всех уникальных скинов для выбора в Апгрейдере
const ALL_SKINS_POOL = [];
const seenSkinNames = new Set();
CASES_DATA.forEach(c => {
  c.items.forEach(item => {
    if (!seenSkinNames.has(item.name)) {
      seenSkinNames.add(item.name);
      ALL_SKINS_POOL.push(item);
    }
  });
});
ALL_SKINS_POOL.sort((a, b) => a.price - b.price);

// ==========================================
// 2. STATE
// ==========================================
let currentUser = null;
let userProfile = null;
let userInventory = [];
let authMode = 'login';
let isOpeningRunning = false;

// Case Modal State
let activeModalCase = null;
let selectedModalQty = 1;

// Upgrader State
let selectedUpgradeItem = null;
let selectedTargetSkin = null;
let upgradeChance = 10;
let isUpgrading = false;

// Rocket (Crash) State
let selectedRocketItem = null;
let isRocketFlying = false;
let rocketMultiplier = 1.00;
let rocketCrashPoint = 1.00;
let rocketAnimFrame = null;
let rocketStartTime = 0;

// ==========================================
// 3. INIT & AUTH
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  renderCategorizedCases();
  updateWheelSector();

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
    renderRocketInventory();
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
// 5. NAVIGATION & RENDERING CATEGORIZED CASES
// ==========================================
function switchTab(tab) {
  ['cases', 'upgrader', 'rocket', 'inventory'].forEach(t => {
    document.getElementById(`view-${t}`).classList.toggle('hidden', t !== tab);
    document.getElementById(`tab-${t}`).classList.toggle('active', t === tab);
  });

  if (tab !== 'cases') {
    if (!currentUser) {
      openAuthModal();
      switchTab('cases');
      return;
    }
    fetchInventory();
    if (tab === 'upgrader') updateWheelSector();
  }
}

function renderCategorizedCases() {
  const container = document.getElementById('cases-sections-container');
  const categories = [...new Set(CASES_DATA.map(c => c.category))];

  container.innerHTML = categories.map(cat => {
    const catCases = CASES_DATA.filter(c => c.category === cat);
    return `
      <div class="category-block">
        <div class="category-title-bar"><span>${cat}</span></div>
        <div class="cases-grid">
          ${catCases.map(c => `
            <div class="case-card" onclick="openCaseModal('${c.id}')">
              <div class="case-header-info">
                <div class="case-title">${c.name}</div>
                <div class="case-sub">
                  <span>${c.items.length} items</span>
                  ${c.isNew ? '<span class="badge-new">NEW</span>' : ''}
                </div>
              </div>
              <div class="case-icon">${c.icon}</div>
              <div class="case-price-tag">${c.price === 0 ? 'FREE' : `${c.price} $`}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 6. CASE POPUP MODAL (UP TO 10 + BALANCE CHECK)
// ==========================================
function openCaseModal(caseId) {
  if (!currentUser || !userProfile) {
    openAuthModal();
    return;
  }
  if (isOpeningRunning) return;

  const caseObj = CASES_DATA.find(c => c.id === caseId);
  if (!caseObj) return;

  activeModalCase = caseObj;
  const userBal = Number(userProfile.balance);

  // Вычисляем, сколько максимум можно открыть (до 10)
  const maxAffordable = caseObj.price === 0 ? 10 : Math.min(10, Math.floor(userBal / caseObj.price));
  selectedModalQty = maxAffordable >= 1 ? 1 : 0;

  document.getElementById('modal-case-title').textContent = caseObj.name;
  renderCaseModalBody(maxAffordable);
  document.getElementById('case-modal').classList.remove('hidden');
}

function closeCaseModal() {
  document.getElementById('case-modal').classList.add('hidden');
  activeModalCase = null;
}

function selectModalQuantity(qty) {
  selectedModalQty = qty;
  const userBal = Number(userProfile.balance);
  const maxAffordable = activeModalCase.price === 0 ? 10 : Math.min(10, Math.floor(userBal / activeModalCase.price));
  renderCaseModalBody(maxAffordable);
}

function renderCaseModalBody(maxAffordable) {
  const body = document.getElementById('modal-case-body');
  const c = activeModalCase;
  const totalCost = c.price * selectedModalQty;

  let qtyButtonsHTML = '';
  for (let i = 1; i <= 10; i++) {
    const canAfford = i <= maxAffordable;
    qtyButtonsHTML += `
      <button 
        class="qty-choice-btn ${selectedModalQty === i ? 'selected' : ''}" 
        ${!canAfford ? 'disabled' : ''} 
        onclick="selectModalQuantity(${i})"
      >
        ${i}x
      </button>
    `;
  }

  body.innerHTML = `
    <div class="modal-case-preview">
      <div style="font-size: 64px; margin-bottom: 6px;">${c.icon}</div>
      <div style="color: var(--text-muted); font-size: 13px;">
        ${c.price === 0 ? 'Unlimited Free Case! Open up to 10 at once.' : `Price per case: $${c.price} | Max affordable: ${maxAffordable}`}
      </div>
    </div>

    <div style="margin-bottom: 8px; font-size: 13px; font-weight: 700; color: var(--text-muted);">
      Select quantity to open (1 - 10):
    </div>
    <div class="modal-qty-grid">
      ${qtyButtonsHTML}
    </div>

    <button 
      class="btn btn-primary btn-full" 
      ${selectedModalQty === 0 ? 'disabled' : ''} 
      onclick="confirmAndOpenCase()"
    >
      ${selectedModalQty === 0 
        ? 'Insufficient Balance' 
        : (c.price === 0 ? `Open ${selectedModalQty}x for FREE` : `Open ${selectedModalQty}x for $${totalCost.toFixed(2)}`)}
    </button>

    <div class="modal-contents-list">
      ${c.items.map(item => `
        <div class="mini-item-chip" style="border-left-color: ${RARITY_COLORS[item.rarity]}">
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:145px;">
            ${item.emoji} ${item.name}
          </span>
          <span style="color:var(--win); font-weight:700;">$${item.price}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
// 7. CASE OPENING ROULETTE EXECUTION
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

async function confirmAndOpenCase() {
  if (!activeModalCase || selectedModalQty < 1 || isOpeningRunning) return;

  const selectedCase = activeModalCase;
  const qty = selectedModalQty;
  const totalCost = selectedCase.price * qty;

  closeCaseModal();
  isOpeningRunning = true;

  // Deduct balance if paid case
  if (totalCost > 0) {
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
  }

  // Prepare Arena
  const arena = document.getElementById('opening-arena');
  const closeBtn = document.getElementById('close-arena-btn');
  const verdictBox = document.getElementById('opening-verdict');
  const roulettesContainer = document.getElementById('roulettes-container');

  arena.classList.remove('hidden');
  closeBtn.disabled = true;
  verdictBox.classList.add('hidden');
  document.getElementById('opening-title').textContent = `Opening: ${selectedCase.name} (${qty}x)`;

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

  const wonItems = [];
  for (let i = 0; i < qty; i++) {
    wonItems.push(pickRandomItem(selectedCase.items));
  }

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
  verdictBox.textContent = `Won ${qty} item(s)! Total value: $${totalWonPrice.toFixed(2)}`;
  verdictBox.classList.remove('hidden');
  closeBtn.disabled = false;
  isOpeningRunning = false;
}

function spinSlowRoulette(trackId, pool, targetItem) {
  return new Promise(resolve => {
    const track = document.getElementById(trackId);
    const totalCards = 50;
    const winIndex = 40;

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
    track.offsetHeight;

    const cardWidth = 113;
    const windowWidth = track.parentElement.offsetWidth;
    const randomOffset = Math.floor(Math.random() * 40) - 20;
    const targetX = (winIndex * cardWidth) - (windowWidth / 2) + (cardWidth / 2) + randomOffset;

    track.style.transition = 'transform 6.2s cubic-bezier(0.08, 0.82, 0.15, 1)';
    track.style.transform = `translateX(-${targetX}px)`;

    setTimeout(resolve, 6400);
  });
}

function closeOpeningArena() {
  if (!isOpeningRunning) {
    document.getElementById('opening-arena').classList.add('hidden');
  }
}

// ==========================================
// 8. UPGRADER (BOTTOM GREEN ZONE, ROTATING ARROW, TARGET SKIN PICKER)
// ==========================================
function renderUpgradeInventory() {
  const container = document.getElementById('upgrade-inv-select');
  if (userInventory.length === 0) {
    container.innerHTML = '<p class="muted-text">No items in inventory.</p>';
    return;
  }

  container.innerHTML = userInventory.map(item => `
    <div class="upgrade-inv-item ${selectedUpgradeItem?.id === item.id ? 'selected' : ''}" onclick="selectUpgradeItem('${item.id}')">
      <div style="display:flex; align-items:center; gap:10px;">
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
  selectedTargetSkin = null;
  renderUpgradeInventory();
  renderTargetSkinsList();
  validateUpgrader();
}

function setUpgradeChance(chance) {
  upgradeChance = chance;
  selectedTargetSkin = null;
  document.querySelectorAll('.chance-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.textContent) === chance);
  });
  document.getElementById('wheel-chance-label').textContent = `${chance}%`;
  updateWheelSector();
  renderTargetSkinsList();
  validateUpgrader();
}

/**
 * Зеленое поле расположено СИММЕТРИЧНО СНИЗУ (вокруг 180 градусов / 6 часов).
 * При 50% зеленая зона занимает ровно нижнюю половину колеса (от 90° до 270°).
 * При уменьшении процента зона симметрично сужается к нижней точке.
 */
function updateWheelSector() {
  const winSector = document.getElementById('win-sector');
  const degrees = (upgradeChance / 100) * 360;
  const startDeg = 180 - (degrees / 2);

  winSector.style.background = `conic-gradient(from ${startDeg}deg at 50% 50%, var(--win) 0deg, var(--win) ${degrees}deg, transparent ${degrees}deg)`;
}

function renderTargetSkinsList() {
  const list = document.getElementById('target-skins-list');
  if (!selectedUpgradeItem) {
    list.innerHTML = '<p class="muted-text">Select your item first to see available target skins.</p>';
    return;
  }

  const multiplier = 100 / upgradeChance;
  const maxTargetPrice = selectedUpgradeItem.item_price * multiplier;
  const minTargetPrice = selectedUpgradeItem.item_price * 1.05;

  // Фильтруем скины из общего пула, подходящие по стоимости для этого апгрейда
  let availableTargets = ALL_SKINS_POOL.filter(s => s.price >= minTargetPrice && s.price <= maxTargetPrice * 1.15);

  // Если подходящих скинов мало, создаем динамический вариант на основе дорогих скинов
  if (availableTargets.length === 0) {
    availableTargets = ALL_SKINS_POOL.filter(s => s.price > selectedUpgradeItem.item_price).slice(0, 6);
  }

  list.innerHTML = availableTargets.map((skin, idx) => `
    <div class="upgrade-inv-item ${selectedTargetSkin?.name === skin.name ? 'selected' : ''}" onclick="selectTargetSkin(${idx})">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">${skin.emoji}</span>
        <div>
          <div style="font-weight:700; font-size:13px;">${skin.name}</div>
          <div style="color:var(--win); font-size:12px;">$${Number(skin.price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Сохраняем текущий отфильтрованный список для выбора по индексу
  window.currentAvailableTargets = availableTargets;
}

function selectTargetSkin(idx) {
  selectedTargetSkin = window.currentAvailableTargets[idx];
  renderTargetSkinsList();
  validateUpgrader();
}

function validateUpgrader() {
  const btn = document.getElementById('spin-wheel-btn');
  btn.disabled = !selectedUpgradeItem || !selectedTargetSkin || isUpgrading;
}

async function startUpgrade() {
  if (!selectedUpgradeItem || !selectedTargetSkin || isUpgrading || !currentUser) return;
  isUpgrading = true;
  validateUpgrader();

  // Удаляем исходный скин из инвентаря
  await sb.from('inventory').delete().eq('id', selectedUpgradeItem.id);

  const rotor = document.getElementById('arrow-rotor');
  // Стрелка делает 6 полных оборотов + случайный финальный угол (0..359)
  const finalAngle = Math.floor(Math.random() * 360);
  const totalRotation = 2160 + finalAngle;

  rotor.style.transition = 'transform 4.2s cubic-bezier(0.12, 0.85, 0.22, 1)';
  rotor.style.transform = `rotate(${totalRotation}deg)`;

  setTimeout(async () => {
    // Зеленый сектор находится внизу (центр на 180 градусах).
    // Границы зеленого сектора: [180 - halfDeg, 180 + halfDeg]
    const halfDeg = (upgradeChance / 100) * 360 / 2;
    const minWinAngle = 180 - halfDeg;
    const maxWinAngle = 180 + halfDeg;

    const isWin = finalAngle >= minWinAngle && finalAngle <= maxWinAngle;

    if (isWin) {
      // Выигранный скин записывается с обычным именем без префиксов!
      await sb.from('inventory').insert([{
        user_id: currentUser.id,
        item_name: selectedTargetSkin.name,
        item_rarity: selectedTargetSkin.rarity,
        item_price: selectedTargetSkin.price,
        item_image: selectedTargetSkin.emoji
      }]);

      showToast(`UPGRADE SUCCESS! Won ${selectedTargetSkin.name} ($${selectedTargetSkin.price.toFixed(2)})`);
    } else {
      showToast('Upgrade failed. Better luck next time!');
    }

    selectedUpgradeItem = null;
    selectedTargetSkin = null;
    isUpgrading = false;
    await fetchInventory();
    renderUpgradeInventory();
    renderTargetSkinsList();
    validateUpgrader();

    // Мгновенный сброс стрелки в исходное положение
    rotor.style.transition = 'none';
    rotor.style.transform = 'rotate(0deg)';
  }, 4400);
}

// ==========================================
// 9. ROCKET (CRASH GAME WITH SKINS)
// ==========================================
function renderRocketInventory() {
  const container = document.getElementById('rocket-inv-select');
  if (userInventory.length === 0) {
    container.innerHTML = '<p class="muted-text">No items in inventory.</p>';
    return;
  }

  container.innerHTML = userInventory.map(item => `
    <div class="upgrade-inv-item ${selectedRocketItem?.id === item.id ? 'selected' : ''}" onclick="selectRocketItem('${item.id}')">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:24px;">${item.item_image || '🎁'}</span>
        <div>
          <div style="font-weight:700; font-size:13px;">${item.item_name}</div>
          <div style="color:var(--win); font-size:12px;">$${Number(item.item_price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function selectRocketItem(itemId) {
  if (isRocketFlying) return;
  selectedRocketItem = userInventory.find(i => i.id === itemId);
  renderRocketInventory();

  const startBtn = document.getElementById('rocket-start-btn');
  const preview = document.getElementById('rocket-value-preview');
  const multEl = document.getElementById('rocket-multiplier');

  multEl.className = 'rocket-multiplier';
  multEl.textContent = '1.00x';

  if (selectedRocketItem) {
    startBtn.disabled = false;
    preview.textContent = `Betting: ${selectedRocketItem.item_name} ($${Number(selectedRocketItem.item_price).toFixed(2)})`;
  } else {
    startBtn.disabled = true;
    preview.textContent = 'Select a skin to start';
  }
}

async function startRocket() {
  if (!selectedRocketItem || isRocketFlying || !currentUser) return;

  isRocketFlying = true;
  const betSkin = { ...selectedRocketItem };

  // Списываем скин из инвентаря при старте полета
  await sb.from('inventory').delete().eq('id', betSkin.id);
  await fetchInventory();

  // Генерируем точку краша (честная экспоненциальная формула)
  const r = Math.random();
  rocketCrashPoint = Math.max(1.02, Math.floor((0.96 / (1 - r)) * 100) / 100);
  if (rocketCrashPoint > 50) rocketCrashPoint = 50.00;

  const startBtn = document.getElementById('rocket-start-btn');
  const stopBtn = document.getElementById('rocket-stop-btn');
  const multEl = document.getElementById('rocket-multiplier');
  const preview = document.getElementById('rocket-value-preview');
  const ship = document.getElementById('rocket-ship');

  startBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  multEl.className = 'rocket-multiplier';

  rocketStartTime = performance.now();

  function animateFlight(now) {
    if (!isRocketFlying) return;

    const elapsedSec = (now - rocketStartTime) / 1000;
    // Плавный ускоряющийся рост множителя
    rocketMultiplier = Math.pow(1.18, elapsedSec * 2.2);

    if (rocketMultiplier >= rocketCrashPoint) {
      // CRASHED!
      isRocketFlying = false;
      multEl.textContent = `${rocketCrashPoint.toFixed(2)}x`;
      multEl.classList.add('crashed');
      preview.textContent = `CRASHED! Lost ${betSkin.item_name}`;
      stopBtn.classList.add('hidden');
      startBtn.classList.remove('hidden');
      startBtn.disabled = true;
      selectedRocketItem = null;
      addRocketHistory(rocketCrashPoint);
      showToast(`Rocket crashed at ${rocketCrashPoint.toFixed(2)}x!`);
      return;
    }

    const currentWinVal = betSkin.item_price * rocketMultiplier;
    multEl.textContent = `${rocketMultiplier.toFixed(2)}x`;
    preview.textContent = `Current Value: $${currentWinVal.toFixed(2)}`;
    stopBtn.textContent = `STOP & CLAIM ($${currentWinVal.toFixed(2)})`;

    // Двигаем ракету по диагонали вверх
    const progress = Math.min(1, elapsedSec / 8);
    const moveX = progress * 380;
    const moveY = progress * 220;
    ship.style.transform = `translate(${moveX}px, -${moveY}px)`;

    rocketAnimFrame = requestAnimationFrame(animateFlight);
  }

  rocketAnimFrame = requestAnimationFrame(animateFlight);
}

async function stopRocket() {
  if (!isRocketFlying) return;
  isRocketFlying = false;
  cancelAnimationFrame(rocketAnimFrame);

  const finalMult = rocketMultiplier;
  const wonValue = Number((selectedRocketItem.item_price * finalMult).toFixed(2));

  // Подбираем скин из пула, ближайший по новой выигранной цене (или зачисляем на баланс, если дороже всех скинов)
  const upgradedSkin = [...ALL_SKINS_POOL].reverse().find(s => s.price <= wonValue);

  const multEl = document.getElementById('rocket-multiplier');
  const preview = document.getElementById('rocket-value-preview');
  const startBtn = document.getElementById('rocket-start-btn');
  const stopBtn = document.getElementById('rocket-stop-btn');
  const ship = document.getElementById('rocket-ship');

  multEl.classList.add('claimed');
  stopBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
  startBtn.disabled = true;
  ship.style.transform = 'translate(0px, 0px)';

  if (upgradedSkin && upgradedSkin.price > selectedRocketItem.item_price) {
    // Выдаем новый крутой скин в инвентарь + сдачу на баланс
    const remainder = wonValue - upgradedSkin.price;
    await sb.from('inventory').insert([{
      user_id: currentUser.id,
      item_name: upgradedSkin.name,
      item_rarity: upgradedSkin.rarity,
      item_price: upgradedSkin.price,
      item_image: upgradedSkin.emoji
    }]);

    if (remainder > 0) {
      const newBal = Number(userProfile.balance) + remainder;
      await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
      userProfile.balance = newBal;
      updateUI();
    }

    preview.textContent = `CLAIMED: ${upgradedSkin.name} ($${upgradedSkin.price}) + $${remainder.toFixed(2)} balance!`;
    showToast(`Stopped at ${finalMult.toFixed(2)}x! Won ${upgradedSkin.name}!`);
  } else {
    // Зачисляем всю выигранную сумму на баланс
    const newBal = Number(userProfile.balance) + wonValue;
    await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
    userProfile.balance = newBal;
    updateUI();

    preview.textContent = `CLAIMED: +$${wonValue.toFixed(2)} to balance!`;
    showToast(`Stopped at ${finalMult.toFixed(2)}x! +$${wonValue.toFixed(2)}`);
  }

  addRocketHistory(finalMult);
  selectedRocketItem = null;
  await fetchInventory();
}

function addRocketHistory(mult) {
  const hist = document.getElementById('rocket-history');
  const cls = mult < 1.5 ? 'low' : (mult < 3.0 ? 'mid' : 'high');
  const badge = document.createElement('span');
  badge.className = `hist-badge ${cls}`;
  badge.textContent = `x${mult.toFixed(2)}`;
  hist.prepend(badge);
  if (hist.children.length > 10) hist.lastChild.remove();
}

// ==========================================
// 10. INVENTORY & SELLING
// ==========================================
function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (userInventory.length === 0) {
    grid.innerHTML = '<p class="muted-text">Inventory is empty. Open cases to win skins!</p>';
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
// 11. TOAST NOTIFICATIONS
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
