// ==========================================
// 1. HUGE UNIQUE SKINS POOL & 30 CASES DATABASE
// ==========================================
const BASE_SKINS_CATALOG = [
  // Commons & Low Tier
  { name: 'P250 | Sand Dune', price: 0.50, rarity: 'common', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYfi5H7c-JmIW0kvP9J4TckmpD6ppw2u2T9I-k2wziqhBvZzrzco6TJwNsZwrT_gG6kO_rjJXqtcmZy3ZrpK958w0O/360fx360f', weight: 50 },
  { name: 'MP9 | Storm', price: 1.20, rarity: 'common', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7u1FBRv7PDJYQJD_9W7m5O0m_7zO6_umGJd6Zd02u2Z8oim3VXgqhBtYWD2JdSSdgZsZ1jS-1Tql-e918G8uMuYn3VkvnUi5GqPnRa3hU0aOdO7OvuacFlW/360fx360f', weight: 45 },
  { name: 'Glock-18 | Groundwater', price: 2.10, rarity: 'common', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAthoNzLYTJO6dOjh7-PmOfgPLTBuWVu5MB1g_zMu4jwiwGxwks9amD1LdSQJgdsN1vRq1XrlOu918S-uMjAynpjuyEm4i3cnA3in1gSObE-16O_AQA/360fx360f', weight: 40 },
  { name: 'USP-S | Forest Leaves', price: 3.50, rarity: 'common', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoovujZAt21-TFcz5O6d2jn7-PmOfgPLTBuWVu5MB1g_zMu9St0FXn_kBoNmjwIYOTcAE_Yl-B81O7wbi6jJC178nJyXpn7iEj5yrdnB3in1gSb7Zp_6aL/360fx360f', weight: 35 },
  { name: 'AK-47 | Safari Mesh', price: 5.80, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2GlU7MVohOzA8IrtjgG1rhBpNmzydteRIgA2ZwqC_1m7lL3vhJS_vpvJySZmvSM8pGGKYT0S6WpQ/360fx360f', weight: 30 },
  { name: 'M4A4 | Urban DDPAT', price: 8.00, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITUmXlV78g_2buUpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 25 },
  { name: 'AWP | Safari Mesh', price: 12.50, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJD_9O7kY-OguX4PLTUmXlV78g_2u2UpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 22 },
  { name: 'Desert Eagle | Mudder', price: 15.00, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgL-OmuXwNr_Yg1Ru58N4nOqW892j2wK3rhBpNm2mLYGddFdtN1zZ-Ffvke691sfqu5vKzCVi6iJzsHnUnxK300xLcKU80vfYf8M/360fx360f', weight: 20 },
  { name: 'FAMAS | Colony', price: 18.50, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAthoNzLYTJO6dOjh7-PmOfgPLTBuWVu5MB1g_zMu4jwiwGxwks9amD1LdSQJgdsN1vRq1XrlOu918S-uMjAynpjuyEm4i3cnA3in1gSObE-16O_AQA/360fx360f', weight: 18 },
  { name: 'Galil AR | Sage Spray', price: 22.00, rarity: 'rare', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgL-OmuXwNr_Yg1Ru58N4nOqW892j2wK3rhBpNm2mLYGddFdtN1zZ-Ffvke691sfqu5vKzCVi6iJzsHnUnxK300xLcKU80vfYf8M/360fx360f', weight: 16 },

  // Mid Tier & Epics
  { name: 'M4A1-S | Basilisk', price: 35.00, rarity: 'epic', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITUmXlV78g_2buUpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 14 },
  { name: 'AK-47 | Redline', price: 55.00, rarity: 'epic', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqPv9NLPF2GlU7MVohOzA8IrtjgG1rhBpNmzydteRIgA2ZwqC_1m7lL3vhJS_vpvJySZmvSM8pGGKYT0S6WpQ/360fx360f', weight: 12 },
  { name: 'AWP | Atheris', price: 75.00, rarity: 'epic', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJD_9O7kY-OguX4PLTUmXlV78g_2u2UpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 10 },
  { name: 'Desert Eagle | Code Red', price: 110.00, rarity: 'epic', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLZTjlH_9mkgL-OmuXwNr_Yg1Ru58N4nOqW892j2wK3rhBpNm2mLYGddFdtN1zZ-Ffvke691sfqu5vKzCVi6iJzsHnUnxK300xLcKU80vfYf8M/360fx360f', weight: 8 },
  { name: 'USP-S | Neo-Noir', price: 150.00, rarity: 'epic', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoovujZAt21-TFcz5O6d2jn7-PmOfgPLTBuWVu5MB1g_zMu9St0FXn_kBoNmjwIYOTcAE_Yl-B81O7wbi6jJC178nJyXpn7iEj5yrdnB3in1gSb7Zp_6aL/360fx360f', weight: 7 },

  // Legendaries & Knives
  { name: 'M4A4 | Asiimov', price: 220.00, rarity: 'legendary', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITUmXlV78g_2buUpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 5 },
  { name: 'AWP | Asiimov', price: 350.00, rarity: 'legendary', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FABz7PLfYQJD_9O7kY-OguX4PLTUmXlV78g_2u2UpIqtjgbk-BU-MW6hLI-TIgU9aQ3S-lbtxe29gJTtv8zPy3ZrpQ/360fx360f', weight: 4 },
  { name: 'Gut Knife | Freehand', price: 480.00, rarity: 'legendary', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PDJSRRF_-O5nY-Ogv_gNr_Yg1Ru58N4nOqW89qjjwKxrktvMmqlIIOcdlVtZAvT_le5le3vgse86cmZy3ZrpLg_vX8S/360fx360f', weight: 3 },
  { name: 'Karambit | Doppler', price: 750.00, rarity: 'extra', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PDJSRRF_-O5nY-Ogv_gNr_Yg1Ru58N4nOqW89qjjwKxrktvMmqlIIOcdlVtZAvT_le5le3vgse86cmZy3ZrpLg_vX8S/360fx360f', weight: 2 },
  { name: 'Butterfly Knife | Gradient', price: 1200.00, rarity: 'extra', image: 'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FA957PDJSRRF_-O5nY-Ogv_gNr_Yg1Ru58N4nOqW89qjjwKxrktvMmqlIIOcdlVtZAvT_le5le3vgse86cmZy3ZrpLg_vX8S/360fx360f', weight: 1 }
];

const CASE_NAMES_LIST = [
  "Starter Box", "Newbie Vault", "Recruit Cache", "Cyber Protocol", "Neon Syndicate", 
  "Gamma Horizon", "Spectrum Wave", "Danger Zone", "Fractal Arsenal", "Chroma Vault", 
  "Operation Hydra", "Prisma Spark", "Shadow Web", "Broken Fang", "Riptide Drop", 
  "Dreams & Nightmares", "Recoil Pack", "Anubis Relic", "Kilowatt Surge", "Stellar Stash", 
  "Titanium Core", "Quantum Vault", "Apex Predator", "Obsidian Drop", "Vanguard Chest", 
  "Overdrive Crate", "Empowered Pack", "Legendary Cache", "God Tier Vault", "Ultimate Case Battle"
];

function generate30Cases() {
  const categories = ['Free & Starter Cases', 'Serial Cases', 'High Roller Vaults', 'Exclusive Collections'];
  const cases = [];

  for (let i = 1; i <= 30; i++) {
    let cat = categories[0];
    if (i > 8 && i <= 16) cat = categories[1];
    else if (i > 16 && i <= 24) cat = categories[2];
    else if (i > 24) cat = categories[3];

    let price = i === 1 ? 0 : Math.round(i * 3.2);
    if (cat === 'High Roller Vaults') price = i * 22;
    if (cat === 'Exclusive Collections') price = i * 55;

    // Уникальная подборка предметов для каждого кейса на основе общей базы
    const shuffled = [...BASE_SKINS_CATALOG].sort(() => 0.5 - Math.random());
    const caseItems = shuffled.slice(0, 5).map(item => ({
      ...item,
      price: Number((item.price * (1 + i * 0.12)).toFixed(2))
    }));

    // Создаем SVG-иконку кейса прямо в коде, чтобы не было битых картинок
    const svgIcon = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="90" viewBox="0 0 120 90"><rect width="120" height="90" rx="12" fill="%23181d28" stroke="%23242c3d" stroke-width="2"/><path d="M35 35h50v30H35z" fill="%23f59e0b" opacity="0.2"/><path d="M45 45h30v10H45z" fill="%23f59e0b"/><circle cx="60" cy="50" r="4" fill="%23080a0f"/></svg>`;

    cases.push({
      id: `case_${i}`,
      category: cat,
      name: CASE_NAMES_LIST[i - 1] || `Case Series #${i}`,
      price: price,
      isNew: i % 4 === 0,
      icon: svgIcon,
      items: caseItems
    });
  }
  return cases;
}

const CASES_DATA = generate30Cases();

const RARITY_COLORS = {
  common: '#b0c3d9',
  rare: '#4b69ff',
  epic: '#d32ce6',
  legendary: '#eb4b4b',
  extra: '#ffd700'
};

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
// 2. STATE & PROGRESSION
// ==========================================
let currentUser = null;
let userProfile = null;
let userInventory = [];
let authMode = 'login';
let isOpeningRunning = false;

let activeModalCase = null;
let selectedModalQty = 1;
let lastOpenedItems = [];

// Upgrader 2.0 State
let selectedUpgradeItems = [];
let addedBalance = 0.00;
let selectedTargetSkin = null;
let computedUpgradeChance = 0.0;
let isUpgrading = false;

let selectedRocketItem = null;
let isRocketFlying = false;
let rocketMultiplier = 1.00;
let rocketCrashPoint = 1.00;
let rocketAnimFrame = null;
let rocketStartTime = 0;

let userQuests = {
  openCasesCount: 0,
  winRocket: false,
  didUpgrade: false,
  claimedStreak: false,
  lastClaimDate: null
};

// ==========================================
// 3. INIT & AUTH
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  renderCategorizedCases();
  renderBattleCaseSelect();
  loadLocalQuests();
  renderQuestsUI();
  loadLocalLevel();
  renderUpgradeInventory();
  renderTargetCatalog();
  updateWheelSector();
  initBattlesRealtime();

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
  const { data: profile, error } = await sb.from('profiles').select('*').eq('id', user.id).single();
  if (!error && profile) {
    userProfile = profile;
    loadLocalLevel();
  }
  await fetchInventory();
  updateUI();
  renderQuestsUI();
}

async function fetchInventory() {
  if (!currentUser) return;
  const { data, error } = await sb.from('inventory').select('*').eq('user_id', currentUser.id).order('created_at', { ascending: false });
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
    document.getElementById('user-lvl-badge').textContent = `Lvl ${userProfile.level || 1}`;
    updateXPBar();
  } else {
    guestControls.classList.remove('hidden');
    authControls.classList.add('hidden');
    document.getElementById('inv-count').textContent = '0';
  }
}

function loadLocalLevel() {
  const savedLvl = localStorage.getItem('casebattle_level');
  const savedXp = localStorage.getItem('casebattle_xp');
  if (userProfile) {
    if (savedLvl) userProfile.level = parseInt(savedLvl);
    if (savedXp) userProfile.xp = parseInt(savedXp);
    if (!userProfile.level) userProfile.level = 1;
    if (!userProfile.xp) userProfile.xp = 0;
  }
}

function saveLocalLevel() {
  if (!userProfile) return;
  localStorage.setItem('casebattle_level', userProfile.level || 1);
  localStorage.setItem('casebattle_xp', userProfile.xp || 0);
}

function addXP(amount) {
  if (!userProfile) return;
  userProfile.xp = (userProfile.xp || 0) + amount;
  const neededXP = userProfile.level * 500;
  if (userProfile.xp >= neededXP) {
    userProfile.level = (userProfile.level || 1) + 1;
    showToast(`LEVEL UP! You reached Level ${userProfile.level}!`);
  }
  saveLocalLevel();
  updateXPBar();
  if (currentUser) {
    sb.from('profiles').update({ xp: userProfile.xp, level: userProfile.level }).eq('id', currentUser.id);
  }
}

function updateXPBar() {
  const lvl = userProfile?.level || 1;
  const xp = userProfile?.xp || 0;
  const needed = lvl * 500;
  const pct = Math.min(100, (xp / needed) * 100);

  const bar = document.getElementById('xp-bar-fill');
  const lvlText = document.getElementById('player-lvl-text');
  const xpText = document.getElementById('player-xp-text');
  if (bar) bar.style.width = `${pct}%`;
  if (lvlText) lvlText.textContent = `Level ${lvl}`;
  if (xpText) xpText.textContent = `${xp} / ${needed} XP`;
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
// 5. NAVIGATION & RENDER CASES
// ==========================================
function switchTab(tab) {
  ['cases', 'battles', 'upgrader', 'rocket', 'quests', 'inventory'].forEach(t => {
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
    if (tab === 'upgrader') {
      renderUpgradeInventory();
      renderTargetCatalog();
    }
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
              <div class="case-img-wrap">
                <img src="${c.icon}" class="case-img" alt="${c.name}">
              </div>
              <div class="case-price-tag">${c.price === 0 ? 'FREE' : `${c.price} $`}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 6. CASE MODAL & OPENING
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
  const maxAffordable = caseObj.price === 0 ? 10 : Math.min(10, Math.floor(userBal / caseObj.price));
  selectedModalQty = maxAffordable >= 1 ? 1 : 0;

  document.getElementById('modal-case-title').textContent = caseObj.name;
  renderCaseModalBody(maxAffordable);
  document.getElementById('case-modal').classList.remove('hidden');
}

function closeCaseModal() {
  document.getElementById('case-modal').classList.add('hidden');
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
      <button class="qty-choice-btn ${selectedModalQty === i ? 'selected' : ''}" ${!canAfford ? 'disabled' : ''} onclick="selectModalQuantity(${i})">
        ${i}x
      </button>
    `;
  }

  body.innerHTML = `
    <div class="modal-case-preview">
      <img src="${c.icon}" class="modal-case-img" alt="${c.name}">
      <div style="color: var(--text-muted); font-size: 13px;">
        ${c.price === 0 ? 'Unlimited Free Case!' : `Price: $${c.price} | Max affordable: ${maxAffordable}`}
      </div>
    </div>
    <div style="margin-bottom: 8px; font-size: 13px; font-weight: 700; color: var(--text-muted);">Select quantity (1 - 10):</div>
    <div class="modal-qty-grid">${qtyButtonsHTML}</div>
    <button class="btn btn-primary btn-full" ${selectedModalQty === 0 ? 'disabled' : ''} onclick="confirmAndOpenCase()">
      ${selectedModalQty === 0 ? 'Insufficient Balance' : (c.price === 0 ? `Open ${selectedModalQty}x FREE` : `Open ${selectedModalQty}x for $${totalCost.toFixed(2)}`)}
    </button>
    <div class="modal-contents-list">
      ${c.items.map(item => `
        <div class="mini-item-chip" style="border-left-color: ${RARITY_COLORS[item.rarity]}">
          <img src="${item.image}" class="mini-item-img" alt="${item.name}">
          <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:130px;">
            <div style="font-weight:700; font-size:11px;">${item.name}</div>
            <div style="color:var(--win); font-weight:700; font-size:11px;">$${item.price}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

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

  if (totalCost > 0) {
    const newBal = Number(userProfile.balance) - totalCost;
    await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
    userProfile.balance = newBal;
    updateUI();
  }

  const arena = document.getElementById('opening-arena');
  const verdictBox = document.getElementById('opening-verdict');
  const roulettesContainer = document.getElementById('roulettes-container');

  arena.classList.remove('hidden');
  document.getElementById('close-arena-btn').disabled = true;
  document.getElementById('repeat-open-btn').disabled = true;
  document.getElementById('sell-all-opened-btn').disabled = true;
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

  const spinPromises = wonItems.map((targetItem, index) => spinSlowRoulette(`track-${index}`, selectedCase.items, targetItem));
  await Promise.all(spinPromises);

  lastOpenedItems = wonItems;

  const insertPayload = wonItems.map(item => ({
    user_id: currentUser.id,
    item_name: item.name,
    item_rarity: item.rarity,
    item_price: item.price,
    item_image: item.image
  }));

  await sb.from('inventory').insert(insertPayload);
  await fetchInventory();

  wonItems.forEach(item => addLiveTickerItem(userProfile.username || currentUser.email, selectedCase.name, item.name, item.price));

  userQuests.openCasesCount += qty;
  addXP(qty * 25);
  saveLocalQuests();
  renderQuestsUI();

  const totalWonPrice = wonItems.reduce((s, i) => s + i.price, 0);
  verdictBox.textContent = `Won ${qty} item(s)! Total value: $${totalWonPrice.toFixed(2)}`;
  verdictBox.classList.remove('hidden');

  document.getElementById('close-arena-btn').disabled = false;
  document.getElementById('repeat-open-btn').disabled = false;
  document.getElementById('sell-all-opened-btn').disabled = false;
  isOpeningRunning = false;
}

function spinSlowRoulette(trackId, pool, targetItem) {
  return new Promise(resolve => {
    const track = document.getElementById(trackId);
    const totalCards = 45;
    const winIndex = 36;

    const cards = [];
    for (let i = 0; i < totalCards; i++) {
      const item = (i === winIndex) ? targetItem : pool[Math.floor(Math.random() * pool.length)];
      cards.push(`
        <div class="roulette-item" style="border-bottom-color: ${RARITY_COLORS[item.rarity]}">
          <img src="${item.image}" class="roulette-skin-img" alt="${item.name}">
          <div style="font-size: 10px; margin-top: 2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:102px;">${item.name}</div>
        </div>
      `);
    }

    track.style.transition = 'none';
    track.style.transform = 'translateZ(0) translateX(0px)';
    track.innerHTML = cards.join('');
    track.offsetHeight;

    const cardWidth = 123;
    const windowWidth = track.parentElement.offsetWidth;
    const randomOffset = Math.floor(Math.random() * 30) - 15;
    const targetX = (winIndex * cardWidth) - (windowWidth / 2) + (cardWidth / 2) + randomOffset;

    track.style.transition = 'transform 5.8s cubic-bezier(0.08, 0.82, 0.15, 1)';
    track.style.transform = `translateZ(0) translateX(-${targetX}px)`;

    setTimeout(resolve, 6000);
  });
}

function closeOpeningArena() {
  if (!isOpeningRunning) document.getElementById('opening-arena').classList.add('hidden');
}

async function repeatLastOpening() {
  if (!activeModalCase || isOpeningRunning) return;
  const userBal = Number(userProfile.balance);
  const totalCost = activeModalCase.price * selectedModalQty;
  if (userBal < totalCost) {
    showToast('Insufficient balance to repeat opening!');
    return;
  }
  confirmAndOpenCase();
}

async function sellAllOpenedItems() {
  if (lastOpenedItems.length === 0) return;
  const totalPrice = lastOpenedItems.reduce((sum, i) => sum + i.price, 0);

  for (const item of lastOpenedItems) {
    const found = userInventory.find(inv => inv.item_name === item.name);
    if (found) {
      await sb.from('inventory').delete().eq('id', found.id);
    }
  }

  const newBal = Number(userProfile.balance) + totalPrice;
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();
  await fetchInventory();

  lastOpenedItems = [];
  document.getElementById('sell-all-opened-btn').disabled = true;
  showToast(`Sold opened items for +$${totalPrice.toFixed(2)}`);
}

// ==========================================
// 7. UPGRADER 2.0 (English Button & Price Filter)
// ==========================================
function renderUpgradeInventory() {
  const container = document.getElementById('upgrade-inv-select');
  const countEl = document.getElementById('inv-items-count');
  if (countEl) countEl.textContent = userInventory.length;

  if (!container) return;
  if (userInventory.length === 0) {
    container.innerHTML = '<p class="muted-text" style="grid-column: 1/-1; text-align:center; padding:30px;">NO ITEMS AVAILABLE<br><a href="#" onclick="switchTab(\'cases\')" style="color:var(--accent);">OPEN ANY CASE</a></p>';
    return;
  }

  container.innerHTML = userInventory.map(item => {
    const isSelected = selectedUpgradeItems.some(i => i.id === item.id);
    return `
      <div class="upgrade-grid-item ${isSelected ? 'selected' : ''}" style="border-bottom-color: ${RARITY_COLORS[item.item_rarity] || '#b0c3d9'}" onclick="toggleUpgradeItem('${item.id}')">
        <img src="${item.item_image}" class="upgrade-grid-thumb" alt="${item.item_name}">
        <div style="font-weight:700; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.item_name}</div>
        <div style="color:var(--win); font-size:11px; font-weight:700;">$${Number(item.item_price).toFixed(2)}</div>
      </div>
    `;
  }).join('');
}

function toggleUpgradeItem(itemId) {
  const item = userInventory.find(i => i.id === itemId);
  if (!item) return;

  const index = selectedUpgradeItems.findIndex(i => i.id === itemId);
  if (index > -1) {
    selectedUpgradeItems.splice(index, 1);
  } else {
    if (selectedUpgradeItems.length >= 6) {
      showToast('Maximum 6 items allowed!');
      return;
    }
    selectedUpgradeItems.push(item);
  }

  renderUpgradeInventory();
  renderSelectedSlots();
  recalculateUpgrader();
  renderTargetCatalog(); // Пересчитываем каталог, чтобы скрыть скины дешевле ставки
}

function renderSelectedSlots() {
  const grid = document.getElementById('selected-slots-grid');
  const countEl = document.getElementById('selected-slots-count');
  if (countEl) countEl.textContent = selectedUpgradeItems.length;
  if (!grid) return;

  let html = '';
  for (let i = 0; i < 6; i++) {
    const item = selectedUpgradeItems[i];
    if (item) {
      html += `
        <div class="slot-item" onclick="toggleUpgradeItem('${item.id}')" title="Remove item">
          <img src="${item.item_image}" alt="${item.item_name}">
        </div>
      `;
    } else {
      html += `<div class="slot-item empty">+</div>`;
    }
  }
  grid.innerHTML = html;
}

function onBalanceRangeInput(val) {
  addedBalance = Number(val);
  const maxBal = userProfile ? Number(userProfile.balance) : 0;
  if (addedBalance > maxBal) {
    addedBalance = maxBal;
    document.getElementById('add-balance-range').value = maxBal;
  }
  document.getElementById('added-balance-label').textContent = `${addedBalance.toFixed(2)} P`;
  recalculateUpgrader();
  renderTargetCatalog();
}

function getTotalInputPrice() {
  const itemsSum = selectedUpgradeItems.reduce((sum, i) => sum + Number(i.item_price), 0);
  return itemsSum + addedBalance;
}

function renderTargetCatalog() {
  const list = document.getElementById('target-skins-list');
  const searchInput = document.getElementById('target-search-input');
  const sortSelect = document.getElementById('target-sort-select');
  if (!list) return;

  let query = searchInput ? searchInput.value.toLowerCase() : '';
  let sortType = sortSelect ? sortSelect.value : 'price';
  const totalInput = getTotalInputPrice();

  // Берем только те скины, которые дороже текущей ставки (totalInput)
  let targets = ALL_SKINS_POOL.filter(s => s.price > totalInput);

  if (query) {
    targets = targets.filter(s => s.name.toLowerCase().includes(query));
  }

  if (sortType === 'price') {
    targets.sort((a, b) => a.price - b.price);
  } else {
    targets.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (targets.length === 0) {
    list.innerHTML = '<p class="muted-text" style="grid-column: 1/-1; text-align:center; padding:30px;">Выберите предметы дороже или добавьте баланс</p>';
    return;
  }

  list.innerHTML = targets.map((skin) => {
    const isSelected = selectedTargetSkin?.name === skin.name;
    return `
      <div class="upgrade-grid-item ${isSelected ? 'selected' : ''}" style="border-bottom-color: ${RARITY_COLORS[skin.rarity] || '#b0c3d9'}" onclick='selectTargetSkinObject(${JSON.stringify(skin)})'>
        <img src="${skin.image}" class="upgrade-grid-thumb" alt="${skin.name}">
        <div style="font-weight:700; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${skin.name}</div>
        <div style="color:var(--win); font-size:11px; font-weight:700;">$${Number(skin.price).toFixed(2)}</div>
      </div>
    `;
  }).join('');
}

function selectTargetSkinObject(skin) {
  selectedTargetSkin = skin;
  renderTargetCatalog();
  renderTargetSelectedDisplay();
  recalculateUpgrader();
}

function renderTargetSelectedDisplay() {
  const display = document.getElementById('target-selected-display');
  if (!display) return;
  if (!selectedTargetSkin) {
    display.innerHTML = '<span class="muted-text">Target not selected</span>';
    return;
  }
  display.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px; width:100%; padding:0 8px;">
      <img src="${selectedTargetSkin.image}" style="width:50px; height:35px; object-fit:contain;" alt="${selectedTargetSkin.name}">
      <div style="text-align:left; overflow:hidden;">
        <div style="font-weight:700; font-size:12px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${selectedTargetSkin.name}</div>
        <div style="color:var(--win); font-weight:700; font-size:11px;">$${Number(selectedTargetSkin.price).toFixed(2)}</div>
      </div>
    </div>
  `;
}

function recalculateUpgrader() {
  const totalInput = getTotalInputPrice();
  if (!selectedTargetSkin || totalInput <= 0 || selectedTargetSkin.price <= totalInput) {
    computedUpgradeChance = 0.0;
  } else {
    computedUpgradeChance = Math.min(95, Math.max(1, (totalInput / selectedTargetSkin.price) * 100));
  }

  document.getElementById('wheel-chance-label').textContent = `${computedUpgradeChance.toFixed(1)}%`;
  updateWheelSector();

  const spinBtn = document.getElementById('spin-wheel-btn');
  spinBtn.disabled = selectedUpgradeItems.length === 0 || !selectedTargetSkin || computedUpgradeChance <= 0 || isUpgrading;
}

function updateWheelSector() {
  const winSector = document.getElementById('win-sector');
  if (!winSector) return;
  const degrees = (computedUpgradeChance / 100) * 360;
  const startDeg = 180 - (degrees / 2);
  winSector.style.background = `conic-gradient(from ${startDeg}deg at 50% 50%, var(--win) 0deg, var(--win) ${degrees}deg, transparent ${degrees}deg)`;
}

function applyMultiplier(multiplier) {
  if (selectedUpgradeItems.length === 0) return;
  const totalInput = getTotalInputPrice();
  const targetPrice = totalInput * multiplier;
  const bestSkin = ALL_SKINS_POOL.find(s => s.price >= targetPrice) || ALL_SKINS_POOL[ALL_SKINS_POOL.length - 1];
  if (bestSkin) {
    selectTargetSkinObject(bestSkin);
  }
}

function applyChance(targetChance) {
  if (selectedUpgradeItems.length === 0) return;
  const totalInput = getTotalInputPrice();
  const desiredTargetPrice = totalInput / (targetChance / 100);
  const bestSkin = ALL_SKINS_POOL.find(s => s.price >= desiredTargetPrice) || ALL_SKINS_POOL[ALL_SKINS_POOL.length - 1];
  if (bestSkin) {
    selectTargetSkinObject(bestSkin);
  }
}

async function startUpgrade() {
  if (selectedUpgradeItems.length === 0 || !selectedTargetSkin || isUpgrading || !currentUser) return;
  isUpgrading = true;
  recalculateUpgrader();

  for (const item of selectedUpgradeItems) {
    await sb.from('inventory').delete().eq('id', item.id);
  }

  if (addedBalance > 0 && userProfile) {
    const newBal = Number(userProfile.balance) - addedBalance;
    await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
    userProfile.balance = newBal;
    updateUI();
  }

  const rotor = document.getElementById('arrow-rotor');
  const finalAngle = Math.floor(Math.random() * 360);
  const totalRotation = 2160 + finalAngle;

  rotor.style.transition = 'transform 4.2s cubic-bezier(0.12, 0.85, 0.22, 1)';
  rotor.style.transform = `translateZ(0) rotate(${totalRotation}deg)`;

  setTimeout(async () => {
    const halfDeg = (computedUpgradeChance / 100) * 360 / 2;
    const isWin = finalAngle >= (180 - halfDeg) && finalAngle <= (180 + halfDeg);

    if (isWin) {
      await sb.from('inventory').insert([{
        user_id: currentUser.id,
        item_name: selectedTargetSkin.name,
        item_rarity: selectedTargetSkin.rarity,
        item_price: selectedTargetSkin.price,
        item_image: selectedTargetSkin.image
      }]);
      showToast(`UPGRADE SUCCESS! Won ${selectedTargetSkin.name}!`);
    } else {
      showToast('Upgrade failed!');
    }

    userQuests.didUpgrade = true;
    addXP(50);
    saveLocalQuests();
    renderQuestsUI();

    selectedUpgradeItems = [];
    selectedTargetSkin = null;
    addedBalance = 0.00;
    const range = document.getElementById('add-balance-range');
    if (range) range.value = 0;
    document.getElementById('added-balance-label').textContent = '0.00 P';

    isUpgrading = false;
    await fetchInventory();
    renderUpgradeInventory();
    renderSelectedSlots();
    renderTargetSelectedDisplay();
    recalculateUpgrader();

    rotor.style.transition = 'none';
    rotor.style.transform = 'translateZ(0) rotate(0deg)';
  }, 4400);
}

// ==========================================
// 8. ROCKET CRASH GAME
// ==========================================
function renderRocketInventory() {
  const container = document.getElementById('rocket-inv-select');
  if (!container) return;
  if (userInventory.length === 0) {
    container.innerHTML = '<p class="muted-text">No items in inventory.</p>';
    return;
  }

  container.innerHTML = userInventory.map(item => `
    <div class="upgrade-inv-item ${selectedRocketItem?.id === item.id ? 'selected' : ''}" onclick="selectRocketItem('${item.id}')">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${item.item_image}" class="inv-skin-thumb" alt="${item.item_name}">
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

  await sb.from('inventory').delete().eq('id', betSkin.id);
  await fetchInventory();

  const r = Math.random();
  rocketCrashPoint = Math.max(1.02, Math.floor((0.96 / (1 - r)) * 100) / 100);
  if (rocketCrashPoint > 40) rocketCrashPoint = 40.00;

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
    rocketMultiplier = Math.pow(1.18, elapsedSec * 2.2);

    if (rocketMultiplier >= rocketCrashPoint) {
      isRocketFlying = false;
      multEl.textContent = `${rocketCrashPoint.toFixed(2)}x`;
      multEl.classList.add('crashed');
      preview.textContent = `CRASHED! Lost ${betSkin.item_name}`;
      stopBtn.classList.add('hidden');
      startBtn.classList.remove('hidden');
      startBtn.disabled = true;
      selectedRocketItem = null;
      showToast(`Rocket crashed at ${rocketCrashPoint.toFixed(2)}x!`);
      return;
    }

    const currentWinVal = betSkin.item_price * rocketMultiplier;
    multEl.textContent = `${rocketMultiplier.toFixed(2)}x`;
    preview.textContent = `Current Value: $${currentWinVal.toFixed(2)}`;
    stopBtn.textContent = `STOP & CLAIM ($${currentWinVal.toFixed(2)})`;

    const progress = Math.min(1, elapsedSec / 8);
    ship.style.transform = `translateZ(0) translate(${progress * 380}px, -${progress * 220}px)`;

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
  ship.style.transform = 'translateZ(0) translate(0px, 0px)';

  if (upgradedSkin && upgradedSkin.price > selectedRocketItem.item_price) {
    await sb.from('inventory').insert([{
      user_id: currentUser.id,
      item_name: upgradedSkin.name,
      item_rarity: upgradedSkin.rarity,
      item_price: upgradedSkin.price,
      item_image: upgradedSkin.image
    }]);
    preview.textContent = `CLAIMED: ${upgradedSkin.name}!`;
    showToast(`Won ${upgradedSkin.name}!`);
  } else {
    const newBal = Number(userProfile.balance) + wonValue;
    await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
    userProfile.balance = newBal;
    updateUI();
    preview.textContent = `CLAIMED: +$${wonValue.toFixed(2)}!`;
    showToast(`+$${wonValue.toFixed(2)} added to balance!`);
  }

  userQuests.winRocket = true;
  addXP(75);
  saveLocalQuests();
  renderQuestsUI();

  selectedRocketItem = null;
  await fetchInventory();
}

// ==========================================
// 9. REAL-TIME CASE BATTLES
// ==========================================
function renderBattleCaseSelect() {
  const sel = document.getElementById('battle-case-select');
  if (sel) {
    sel.innerHTML = CASES_DATA.map(c => `<option value="${c.id}">${c.name} ($${c.price})</option>`).join('');
  }
}

function initBattlesRealtime() {
  fetchActiveBattles();
  sb.channel('public:battles')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'battles' }, () => {
      fetchActiveBattles();
    })
    .subscribe();
}

async function fetchActiveBattles() {
  const container = document.getElementById('battles-list-container');
  if (!container) return;

  const { data, error } = await sb.from('battles').select('*').eq('status', 'waiting').order('created_at', { ascending: false });
  if (error || !data || data.length === 0) {
    container.innerHTML = '<p class="muted-text">No active lobbies. Create one above!</p>';
    return;
  }

  container.innerHTML = data.map(b => `
    <div class="upgrade-inv-item">
      <div>
        <div style="font-weight:700;">${b.case_name} (${b.mode})</div>
        <div style="font-size:12px; color:var(--text-muted);">Creator: ${b.creator_name} | Cost: $${b.cost}</div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="joinRealBattle('${b.id}', ${b.cost}, '${b.case_id}')">Join Battle</button>
    </div>
  `).join('');
}

async function createBattleLobby() {
  if (!currentUser || !userProfile) { openAuthModal(); return; }
  const caseId = document.getElementById('battle-case-select').value;
  const mode = document.getElementById('battle-mode-select').value;
  const cObj = CASES_DATA.find(c => c.id === caseId);

  if (Number(userProfile.balance) < cObj.price) {
    showToast('Insufficient balance for battle!');
    return;
  }

  const newBal = Number(userProfile.balance) - cObj.price;
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();

  await sb.from('battles').insert([{
    case_id: cObj.id,
    case_name: cObj.name,
    mode: mode,
    cost: cObj.price,
    creator_id: currentUser.id,
    creator_name: userProfile.username || currentUser.email,
    status: 'waiting'
  }]);

  showToast('Public lobby created successfully!');
  fetchActiveBattles();
}

async function joinRealBattle(battleId, cost, caseId) {
  if (!currentUser || !userProfile) { openAuthModal(); return; }
  if (Number(userProfile.balance) < cost) {
    showToast('Insufficient balance to join!');
    return;
  }

  const newBal = Number(userProfile.balance) - cost;
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();

  const cObj = CASES_DATA.find(c => c.id === caseId) || CASES_DATA[0];
  const drop = pickRandomItem(cObj.items);

  await sb.from('inventory').insert([{
    user_id: currentUser.id,
    item_name: drop.name,
    item_rarity: drop.rarity,
    item_price: drop.price,
    item_image: drop.image
  }]);

  await sb.from('battles').update({ status: 'finished' }).eq('id', battleId);
  fetchActiveBattles();
  await fetchInventory();
  addXP(100);
  showToast(`Battle finished! You won ${drop.name} ($${drop.price})!`);
}

// ==========================================
// 10. QUESTS & STREAK SYSTEM
// ==========================================
function loadLocalQuests() {
  const saved = localStorage.getItem('casebattle_quests');
  if (saved) {
    try { userQuests = JSON.parse(saved); } catch(e){}
  }
}

function saveLocalQuests() {
  localStorage.setItem('casebattle_quests', JSON.stringify(userQuests));
}

function renderQuestsUI() {
  const container = document.getElementById('quests-list-container');
  const streakBox = document.getElementById('streak-info-box');
  if (!container || !streakBox) return;

  streakBox.innerHTML = `<p class="muted-text">Daily streak active! Reward: $5.00 + 100 XP</p>`;

  container.innerHTML = `
    <div class="quest-row">
      <div>
        <div style="font-weight:700;">Open 3 Cases</div>
        <div style="font-size:12px; color:var(--text-muted);">Progress: ${Math.min(3, userQuests.openCasesCount)} / 3</div>
      </div>
      <button class="btn btn-sm ${userQuests.openCasesCount >= 3 ? 'btn-win' : 'btn-outline'}" disabled>${userQuests.openCasesCount >= 3 ? 'Completed' : 'In Progress'}</button>
    </div>
    <div class="quest-row">
      <div>
        <div style="font-weight:700;">Win in Rocket Mode</div>
        <div style="font-size:12px; color:var(--text-muted);">Status: ${userQuests.winRocket ? 'Completed' : 'Not completed'}</div>
      </div>
      <button class="btn btn-sm ${userQuests.winRocket ? 'btn-win' : 'btn-outline'}" disabled>${userQuests.winRocket ? 'Completed' : 'Pending'}</button>
    </div>
    <div class="quest-row">
      <div>
        <div style="font-weight:700;">Complete an Upgrade</div>
        <div style="font-size:12px; color:var(--text-muted);">Status: ${userQuests.didUpgrade ? 'Completed' : 'Not completed'}</div>
      </div>
      <button class="btn btn-sm ${userQuests.didUpgrade ? 'btn-win' : 'btn-outline'}" disabled>${userQuests.didUpgrade ? 'Completed' : 'Pending'}</button>
    </div>
  `;
}

async function claimDailyStreak() {
  if (!currentUser || !userProfile) { openAuthModal(); return; }
  const today = new Date().toDateString();
  if (userQuests.lastClaimDate === today) {
    showToast('Already claimed today!');
    return;
  }

  userQuests.lastClaimDate = today;
  saveLocalQuests();

  const newBal = Number(userProfile.balance) + 5.00;
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();
  addXP(100);
  showToast('Claimed daily reward: +$5.00 & +100 XP!');
}

// ==========================================
// 11. INVENTORY & BULK SELLING
// ==========================================
function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;
  if (userInventory.length === 0) {
    grid.innerHTML = '<p class="muted-text">Inventory is empty.</p>';
    return;
  }

  grid.innerHTML = userInventory.map(item => `
    <div class="inv-card" style="border-top-color: ${RARITY_COLORS[item.item_rarity] || '#b0c3d9'}">
      <div class="inv-img-wrap">
        <img src="${item.item_image}" class="inv-img" alt="${item.item_name}">
      </div>
      <div class="inv-name">${item.item_name}</div>
      <div class="inv-price">$${Number(item.item_price).toFixed(2)}</div>
      <button class="btn btn-outline btn-sm btn-full" onclick="sellItem('${item.id}', ${item.item_price})">Sell Item</button>
    </div>
  `).join('');
}

async function sellItem(itemId, price) {
  if (!currentUser || !userProfile) return;
  await sb.from('inventory').delete().eq('id', itemId);

  const updatedBalance = Number(userProfile.balance) + Number(price);
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  updateUI();
  await fetchInventory();
  showToast(`Sold for +$${price.toFixed(2)}`);
}

async function quickSellByPrice(maxPrice) {
  if (!currentUser || !userProfile) return;
  const itemsToSell = userInventory.filter(i => Number(i.item_price) <= maxPrice);
  if (itemsToSell.length === 0) {
    showToast(`No items under $${maxPrice} found.`);
    return;
  }

  let totalSum = 0;
  for (const item of itemsToSell) {
    totalSum += Number(item.item_price);
    await sb.from('inventory').delete().eq('id', item.id);
  }

  const updatedBalance = Number(userProfile.balance) + totalSum;
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  updateUI();
  await fetchInventory();
  showToast(`Sold ${itemsToSell.length} items for +$${totalSum.toFixed(2)}`);
}

async function quickSellAllInventory() {
  if (!currentUser || !userProfile || userInventory.length === 0) return;
  let totalSum = 0;
  for (const item of userInventory) {
    totalSum += Number(item.item_price);
    await sb.from('inventory').delete().eq('id', item.id);
  }

  const updatedBalance = Number(userProfile.balance) + totalSum;
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  updateUI();
  await fetchInventory();
  showToast(`Sold entire inventory for +$${totalSum.toFixed(2)}`);
}

// ==========================================
// 12. LIVE TICKER & TOASTS
// ==========================================
function addLiveTickerItem(user, caseName, itemName, price) {
  const feed = document.getElementById('live-ticker-feed');
  if (!feed) return;
  const span = document.createElement('span');
  span.className = 'ticker-item';
  span.textContent = `🎁 [${caseName}] ${user.slice(0, 5)}*** won ${itemName} ($${price.toFixed(2)})`;
  feed.prepend(span);
  if (feed.children.length > 15) feed.lastChild.remove();
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 3500);
}
