// ==========================================
// 1. BALANCED SKINS & CASES DATABASE (125 SKINS, 50/50 ECONOMY)
// ==========================================
const BASE_SKINS_CATALOG = [
  // --- ШИРПОТРЕБ / ОБЫЧНЫЕ ($0.50 - $15.00) ---
  { name: 'P250 | Sand Dune', price: 0.50, rarity: 'common', type: 'pistol', image: 'images/skins/1fa37432694a1886bcf16b3c206b858d.webp', weight: 100 },
  { name: 'MP9 | Storm', price: 0.80, rarity: 'common', type: 'smg', image: 'images/skins/e599af025c812cf51c545eee08441b3c.webp', weight: 95 },
  { name: 'Glock-18 | Groundwater', price: 1.15, rarity: 'common', type: 'pistol', image: 'images/skins/c89048a2027dd748bb5b2a0e93812588.webp', weight: 90 },
  { name: 'USP-S | Forest Leaves', price: 1.50, rarity: 'common', type: 'pistol', image: 'images/skins/202e0346b89ed2c8f9bdae46b8122673.webp', weight: 85 },
  { name: 'MAG-7 | Sand Dune', price: 1.90, rarity: 'common', type: 'shotgun', image: 'images/skins/e6284efaf41ada014de6ceabb39a2a00.webp', weight: 80 },
  { name: 'P90 | Sand Spray', price: 2.30, rarity: 'common', type: 'smg', image: 'images/skins/8ec44be0fd0046b638e38ac14910334e.webp', weight: 75 },
  { name: 'Nova | Walnut', price: 2.80, rarity: 'common', type: 'shotgun', image: 'images/skins/9615519b1a9ac3c91bbe2f666e11f2e2.webp', weight: 70 },
  { name: 'SG 553 | Army Sheen', price: 3.30, rarity: 'common', type: 'rifle', image: 'images/skins/208c4f112f78c6ebf4bbe8b41ebf8385.webp', weight: 65 },
  { name: 'FAMAS | Colony', price: 3.90, rarity: 'common', type: 'rifle', image: 'images/skins/9c5a264cc8fb1f596193f41befba05e4.webp', weight: 60 },
  { name: 'MP7 | Groundwater', price: 4.50, rarity: 'common', type: 'smg', image: 'images/skins/4bc12c054e360df689e89c7fbc7436db.webp', weight: 55 },
  { name: 'XM1014 | Blue Spruce', price: 5.20, rarity: 'common', type: 'shotgun', image: 'images/skins/5ad68310d80fdd54b08901286f19cc71.webp', weight: 50 },
  { name: 'Sawed-Off | Sage Spray', price: 5.90, rarity: 'common', type: 'shotgun', image: 'images/skins/6bf651f12c8360caeea8ddf68ba91436.webp', weight: 48 },
  { name: 'Negev | Army Sheen', price: 6.60, rarity: 'common', type: 'mg', image: 'images/skins/6cbc7353f18041fb750a883d412164ab.webp', weight: 45 },
  { name: 'Tec-9 | Groundwater', price: 7.40, rarity: 'common', type: 'pistol', image: 'images/skins/7bcb6ae7793940cacb5d2686f4a798c4.webp', weight: 42 },
  { name: 'MAC-10 | Palm', price: 8.20, rarity: 'common', type: 'smg', image: 'images/skins/8b29a03a73201c68388abc1fb7ef0eb2.webp', weight: 40 },
  { name: 'CZ75-Auto | Army Mesh', price: 9.00, rarity: 'common', type: 'pistol', image: 'images/skins/8c2ef24b7e0a0a291123c72735c8d9f0.webp', weight: 38 },
  { name: 'Dual Berettas | Colony', price: 9.80, rarity: 'common', type: 'pistol', image: 'images/skins/8fe6fadc8ce975d5001a8398a8e97d8f.webp', weight: 35 },
  { name: 'Five-SeveN | Forest Leaves', price: 10.60, rarity: 'common', type: 'pistol', image: 'images/skins/9aa61e69c14a88cf1719691366bcad3b.webp', weight: 32 },
  { name: 'PP-Bizon | Carbon Fiber', price: 11.40, rarity: 'common', type: 'smg', image: 'images/skins/9ae9e26170510105fb74d294a9518e8e.webp', weight: 30 },
  { name: 'AUG | Condor', price: 12.20, rarity: 'common', type: 'rifle', image: 'images/skins/9cbd3fb91f48d5725b91f1824eb40aab.webp', weight: 28 },
  { name: 'SCAR-20 | Contractor', price: 13.00, rarity: 'common', type: 'sniper', image: 'images/skins/9d587c37d37509ef4d55dc7f4b13c125.webp', weight: 25 },
  { name: 'G3SG1 | Desert Storm', price: 14.00, rarity: 'common', type: 'sniper', image: 'images/skins/12c83ab03525ee3c9835b559c19042e3.webp', weight: 22 },
  { name: 'M249 | Contrast Spray', price: 15.00, rarity: 'common', type: 'mg', image: 'images/skins/014ce4905180091d35d9654b0dbd8d1e.webp', weight: 20 },

  // --- АРМЕЙСКОЕ КАЧЕСТВО ($16.50 - $100.00) ---
  { name: 'AK-47 | Safari Mesh', price: 16.50, rarity: 'rare', type: 'rifle', image: 'images/skins/a7e996d8a661f974508328cef87676c0.webp', weight: 35 },
  { name: 'M4A4 | Urban DDPAT', price: 19.00, rarity: 'rare', type: 'rifle', image: 'images/skins/0366c1705768d627db0c980a6cb09126.webp', weight: 32 },
  { name: 'AWP | Safari Mesh', price: 22.00, rarity: 'rare', type: 'sniper', image: 'images/skins/5ffe531a7a637ac693dfc89e5051b544.webp', weight: 30 },
  { name: 'Desert Eagle | Mudder', price: 25.00, rarity: 'rare', type: 'pistol', image: 'images/skins/7bcb6ae7793940cacb5d2686f4a798c4.webp', weight: 28 },
  { name: 'Galil AR | Sage Spray', price: 28.50, rarity: 'rare', type: 'rifle', image: 'images/skins/b21ca7caaa460d17fe9e14f571ca8f85.webp', weight: 26 },
  { name: 'SSG 08 | Lichen Dashed', price: 32.00, rarity: 'rare', type: 'sniper', image: 'images/skins/6375ed41e79aab5cf819a831cb1dfcc9.webp', weight: 24 },
  { name: 'MAC-10 | Tornado', price: 36.00, rarity: 'rare', type: 'smg', image: 'images/skins/c7ca9f89d27ebba453a79ea2c494914f.webp', weight: 22 },
  { name: 'PP-Bizon | Irradiated Alert', price: 40.00, rarity: 'rare', type: 'smg', image: 'images/skins/41b3d62bff6815ffeb8a92a60e306b77.webp', weight: 20 },
  { name: 'P250 | Metallic DDPAT', price: 45.00, rarity: 'rare', type: 'pistol', image: 'images/skins/20b095fda4a7c0db7884ac44bedfe940.webp', weight: 18 },
  { name: 'Glock-18 | Candy Apple', price: 50.00, rarity: 'rare', type: 'pistol', image: 'images/skins/29c612c41e345327eafc73e094c6c7e9.webp', weight: 16 },
  { name: 'USP-S | Business Class', price: 56.00, rarity: 'rare', type: 'pistol', image: 'images/skins/0030e610ccbfb49ae64d11783a683287.webp', weight: 15 },
  { name: 'MP9 | Hypnotic', price: 62.00, rarity: 'rare', type: 'smg', image: 'images/skins/31ff61418bafa94271c718d8e9fc1f61.webp', weight: 14 },
  { name: 'FAMAS | Cyanospatter', price: 68.00, rarity: 'rare', type: 'rifle', image: 'images/skins/40fcb78b0d23e6a96e3407a86d92ac47.webp', weight: 13 },
  { name: 'Nova | Candy Apple', price: 75.00, rarity: 'rare', type: 'shotgun', image: 'images/skins/46ba7d61a488fb0f1eb80f89e4073c3f.webp', weight: 12 },
  { name: 'XM1014 | Incendiary', price: 82.00, rarity: 'rare', type: 'shotgun', image: 'images/skins/67a11324e5f372273b30981abc2ae2d6.webp', weight: 11 },
  { name: 'MAG-7 | Silver', price: 88.00, rarity: 'rare', type: 'shotgun', image: 'images/skins/73ed19914d7c919c2f6a5fcd2784618f.webp', weight: 10 },
  { name: 'P90 | Teardown', price: 94.00, rarity: 'rare', type: 'smg', image: 'images/skins/82f68baff1b8c66f3ada9bfd07b31c31.webp', weight: 9 },
  { name: 'SG 553 | Waves', price: 100.00, rarity: 'rare', type: 'rifle', image: 'images/skins/98df14c056b65776a1a31a1582e58a64.webp', weight: 8 },

  // --- ЗАПРЕЩЕННОЕ ($110.00 - $580.00) ---
  { name: 'M4A1-S | Basilisk', price: 110.00, rarity: 'epic', type: 'rifle', image: 'images/skins/8292c2e77c67b97b830c81f424c9f930.webp', weight: 16 },
  { name: 'AK-47 | Redline', price: 130.00, rarity: 'epic', type: 'rifle', image: 'images/skins/82f68baff1b8c66f3ada9bfd07b31c31.webp', weight: 15 },
  { name: 'AWP | Atheris', price: 155.00, rarity: 'epic', type: 'sniper', image: 'images/skins/9622430aef6d6792c8cf199cba33eab4.webp', weight: 14 },
  { name: 'Desert Eagle | Code Red', price: 180.00, rarity: 'epic', type: 'pistol', image: 'images/skins/0e08b55f96e2b96578628142fbf5863a.webp', weight: 13 },
  { name: 'USP-S | Neo-Noir', price: 210.00, rarity: 'epic', type: 'pistol', image: 'images/skins/2b664ffd6d36e8035889e18f4cf42879.webp', weight: 12 },
  { name: 'Glock-18 | Wasteland Rebel', price: 240.00, rarity: 'epic', type: 'pistol', image: 'images/skins/6bf651f12c8360caeea8ddf68ba91436.webp', weight: 11 },
  { name: 'P250 | Asiimov', price: 275.00, rarity: 'epic', type: 'pistol', image: 'images/skins/208c4f112f78c6ebf4bbe8b41ebf8385.webp', weight: 10 },
  { name: 'MP9 | Food Chain', price: 310.00, rarity: 'epic', type: 'smg', image: 'images/skins/361cd0a8dac5d69a247594024f10c3ef.webp', weight: 9 },
  { name: 'FAMAS | Mecha Industries', price: 350.00, rarity: 'epic', type: 'rifle', image: 'images/skins/0413c36d0d56ed8e06b7751c308fedab.webp', weight: 8 },
  { name: 'Galil AR | Eco', price: 390.00, rarity: 'epic', type: 'rifle', image: 'images/skins/469fdc24cfcd454f73125ab326552954.webp', weight: 7 },
  { name: 'SSG 08 | Blood in the Water', price: 435.00, rarity: 'epic', type: 'sniper', image: 'images/skins/477d70f0e2cba9190954ae5eae0aeba3.webp', weight: 6 },
  { name: 'MAC-10 | Neon Rider', price: 480.00, rarity: 'epic', type: 'smg', image: 'images/skins/609b03f27211ab0e94fd0a698dc71cef.webp', weight: 5 },
  { name: 'AUG | Chameleon', price: 530.00, rarity: 'epic', type: 'rifle', image: 'images/skins/780f089c7b87812486d0e4155818c41a.webp', weight: 4 },
  { name: 'P90 | Asiimov', price: 580.00, rarity: 'epic', type: 'smg', image: 'images/skins/885e52be2680009c07183a0f26b7670e.webp', weight: 3 },

  // --- ЗАСЕКРЕЧЕННОЕ ($650.00 - $2,200.00) ---
  { name: 'M4A4 | Asiimov', price: 650.00, rarity: 'legendary', type: 'rifle', image: 'images/skins/6d80a917b73059ee711d4b62a60dc98a.webp', weight: 9 },
  { name: 'AWP | Asiimov', price: 780.00, rarity: 'legendary', type: 'sniper', image: 'images/skins/9d587c37d37509ef4d55dc7f4b13c125.webp', weight: 8 },
  { name: 'AK-47 | Neon Rider', price: 920.00, rarity: 'legendary', type: 'rifle', image: 'images/skins/014ce4905180091d35d9654b0dbd8d1e.webp', weight: 7 },
  { name: 'USP-S | Kill Confirmed', price: 1080.00, rarity: 'legendary', type: 'pistol', image: 'images/skins/8c2ef24b7e0a0a291123c72735c8d9f0.webp', weight: 6 },
  { name: 'M4A1-S | Printstream', price: 1250.00, rarity: 'legendary', type: 'rifle', image: 'images/skins/b9dc7247f2a864190eb8a5e2b19b4274.webp', weight: 5 },
  { name: 'Desert Eagle | Printstream', price: 1450.00, rarity: 'legendary', type: 'pistol', image: 'images/skins/0886d293ebbf88cb139260c2aa78a809.webp', weight: 4 },
  { name: 'Glock-18 | Bullet Queen', price: 1680.00, rarity: 'legendary', type: 'pistol', image: 'images/skins/924a635abb20d91247ae9ec34b4f3fc0.webp', weight: 3 },
  { name: 'P250 | See Ya Later', price: 1920.00, rarity: 'legendary', type: 'pistol', image: 'images/skins/988bf7c729a627e1f4dbabc774308c89.webp', weight: 2 },
  { name: 'MP7 | Bloodsport', price: 2200.00, rarity: 'legendary', type: 'smg', image: 'images/skins/1408bbceb914e0f9541d170c216c8dda.webp', weight: 1 },

  // --- НОЖИ И ПЕРЧАТКИ / ТАЙНОЕ ($2,500.00 - $8,500.00) ---
  { name: 'Gut Knife | Freehand', price: 2500.00, rarity: 'extra', type: 'knife', image: 'images/skins/bd1cb9c53729b6f26cd16bb7e383722b.webp', weight: 5 },
  { name: 'Bayonet | Lore', price: 3400.00, rarity: 'extra', type: 'knife', image: 'images/skins/0c11314e8c96f37addaa4996e703759c.webp', weight: 4 },
  { name: 'Karambit | Doppler', price: 4600.00, rarity: 'extra', type: 'knife', image: 'images/skins/12c83ab03525ee3c9835b559c19042e3.webp', weight: 3 },
  { name: 'Butterfly Knife | Gradient', price: 6200.00, rarity: 'extra', type: 'knife', image: 'images/skins/4bc12c054e360df689e89c7fbc7436db.webp', weight: 2 },
  { name: 'Sport Gloves | Vice', price: 8500.00, rarity: 'extra', type: 'gloves', image: 'images/skins/a65374e38d25e58bda4670e96a546df7.webp', weight: 1 }
];

const CASE_NAMES_LIST = [
  "Starter Box", "Newbie Vault", "Recruit Cache", "Cyber Protocol", "Neon Syndicate", 
  "Gamma Horizon", "Spectrum Wave", "Danger Zone", "Fractal Arsenal", "Chroma Vault", 
  "Operation Hydra", "Prisma Spark", "Shadow Web", "Broken Fang", "Riptide Drop", 
  "Dreams & Nightmares", "Recoil Pack", "Anubis Relic", "Kilowatt Surge", "Stellar Stash", 
  "Titanium Core", "Quantum Vault", "Apex Predator", "Obsidian Drop", "Vanguard Chest", 
  "Overdrive Crate", "Empowered Pack", "Legendary Cache", "God Tier Vault", "Ultimate Case Battle"
];

const CASE_ICONS_LIST = [
  "images/cases/01d82f6c31da42b592a563af1fca5d9a.webp",
  "images/cases/0366c1705768d627db0c980a6cb09126.webp",
  "images/cases/06e1538f68c96a758ea8ddc28c93b6cf.webp",
  "images/cases/09807b2a615b175212222036b9e8115e.webp",
  "images/cases/128e9750ce49313265af7263ac1ff609.webp",
  "images/cases/20c4adbb34995ecef775918bdee1cfca.webp",
  "images/cases/21beb54cd2ee10122a102cbc870ee3e5.webp",
  "images/cases/23570ab3bc45538ea44abe64c2d0e43e.webp",
  "images/cases/3cde1b4df86a42d34cdf3782a53d1a48.webp",
  "images/cases/49d78b472f562966b34eebd52bfc46d8.webp",
  "images/cases/6dcfc23ac3becf57bb4e5cb5d7b93ed2.webp",
  "images/cases/7130235e21e92d11f1ea81fa677cf379.webp"
];

function generate30Cases() {
  const categories = ['Free & Starter Cases', 'Serial Cases', 'High Roller Vaults', 'Exclusive Collections'];
  const cases = [];

  for (let i = 1; i <= 30; i++) {
    let cat = categories[0];
    if (i > 8 && i <= 16) cat = categories[1];
    else if (i > 16 && i <= 24) cat = categories[2];
    else if (i > 24) cat = categories[3];

    let price = i === 1 ? 0 : Math.round(i * 4.5);
    if (cat === 'High Roller Vaults') price = i * 35;
    if (cat === 'Exclusive Collections') price = i * 95;
    if (i === 30) price = 3000;

    let caseItems = [];

    if (price === 0) {
      const starterPool = [...BASE_SKINS_CATALOG].filter(s => s.price <= 25).sort(() => 0.5 - Math.random());
      caseItems = starterPool.slice(0, 18).map((item, idx) => ({
        ...item,
        weight: Math.max(5, 60 - idx * 3)
      }));
    } else {
      let cheaperPool = BASE_SKINS_CATALOG.filter(s => s.price >= price * 0.2 && s.price <= price * 0.9);
      if (cheaperPool.length < 9) {
        cheaperPool = BASE_SKINS_CATALOG.filter(s => s.price < price).slice(-12);
      }
      if (cheaperPool.length === 0) cheaperPool = BASE_SKINS_CATALOG.slice(0, 9);

      let richerPool = BASE_SKINS_CATALOG.filter(s => s.price >= price * 1.25 && s.price <= price * 5.5);
      if (richerPool.length < 9) {
        richerPool = BASE_SKINS_CATALOG.filter(s => s.price > price).slice(0, 14);
      }
      if (richerPool.length === 0) richerPool = BASE_SKINS_CATALOG.slice(-9);

      const selectedCheaper = [...cheaperPool].sort(() => 0.5 - Math.random()).slice(0, 9).map((item, idx) => ({
        ...item,
        price: Number(item.price.toFixed(2)),
        weight: 28 - idx
      }));

      const selectedRicher = [...richerPool].sort(() => 0.5 - Math.random()).slice(0, 9).map((item, idx) => ({
        ...item,
        price: Number(item.price.toFixed(2)),
        weight: Math.max(4, 34 - idx * 3)
      }));

      if (i === 30) {
        const topExotics = BASE_SKINS_CATALOG.filter(s => s.rarity === 'extra' || s.price >= 2200);
        selectedRicher.splice(0, topExotics.length, ...topExotics.map((item, idx) => ({
          ...item,
          weight: Math.max(5, 25 - idx * 3)
        })));
      }

      caseItems = [...selectedCheaper, ...selectedRicher].sort((a, b) => a.price - b.price);
    }

    const iconPath = CASE_ICONS_LIST[(i - 1) % CASE_ICONS_LIST.length];

    cases.push({
      id: `case_${i}`,
      category: cat,
      name: CASE_NAMES_LIST[i - 1] || `Case Series #${i}`,
      price: price,
      isNew: i % 4 === 0,
      icon: iconPath,
      items: caseItems
    });
  }
  return cases;
}

const CASES_DATA = generate30Cases();

const LEVEL_CASE_HIGH_POOL = BASE_SKINS_CATALOG.filter(s => s.price >= 110);
const LEVEL_GUARANTEED_100PLUS_POOL = BASE_SKINS_CATALOG.filter(s => s.price >= 100);

const RARITY_COLORS = {
  common: '#b0c3d9',
  rare: '#4b69ff',
  epic: '#d32ce6',
  legendary: '#eb4b4b',
  extra: '#ffd700'
};

const ALL_SKINS_POOL = [];
const seenSkinNames = new Set();
BASE_SKINS_CATALOG.forEach(item => {
  if (!seenSkinNames.has(item.name)) {
    seenSkinNames.add(item.name);
    ALL_SKINS_POOL.push(item);
  }
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

// Level Road State
const LEVEL_CLAIMED_KEY = 'casebattle_claimed_levels_v1';
let claimedLevelRewards = [];
let isClaimingLevelReward = false;

// Contracts State
let selectedContractItems = [];
let isCraftingContract = false;

// Mines State
let minesActive = false;
let minesBetAmount = 0;
let minesCount = 5;
let minesPositions = new Set();
let minesRevealedSafe = new Set();
let minesCurrentMultiplier = 1.00;

// Inventory Selection State
let selectedInventoryIds = new Set();

// Upgrader State
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
  loadClaimedLevels();
  renderCategorizedCases();
  renderBattleCaseSelect();
  initBestDropsFeed();
  initMinesUI();
  renderContractsUI();
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
    renderContractsUI();
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
    if (savedLvl) userProfile.level = Math.min(100, parseInt(savedLvl) || 1);
    if (savedXp) userProfile.xp = parseInt(savedXp) || 0;
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
  if ((userProfile.level || 1) >= 100) {
    userProfile.level = 100;
    saveLocalLevel();
    updateXPBar();
    return;
  }

  userProfile.xp = (userProfile.xp || 0) + amount;
  while ((userProfile.level || 1) < 100) {
    const neededXP = userProfile.level * 500;
    if (userProfile.xp >= neededXP) {
      userProfile.xp -= neededXP;
      userProfile.level = (userProfile.level || 1) + 1;
      showToast(`LEVEL UP! You reached Level ${userProfile.level}!`);
    } else {
      break;
    }
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
  const pct = lvl >= 100 ? 100 : Math.min(100, (xp / needed) * 100);

  const bar = document.getElementById('xp-bar-fill');
  const lvlText = document.getElementById('player-lvl-text');
  const xpText = document.getElementById('player-xp-text');
  const badge = document.getElementById('user-lvl-badge');
  if (bar) bar.style.width = `${pct}%`;
  if (lvlText) lvlText.textContent = `Level ${lvl}`;
  if (xpText) xpText.textContent = lvl >= 100 ? 'MAX LEVEL' : `${xp} / ${needed} XP`;
  if (badge) badge.textContent = `Lvl ${lvl}`;
}

// ==========================================
// 3B. LEVEL ROAD (1 - 100) & REWARDS
// ==========================================
function loadClaimedLevels() {
  try {
    const raw = localStorage.getItem(LEVEL_CLAIMED_KEY);
    if (raw) {
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) claimedLevelRewards = arr.map(Number);
    }
  } catch (e) {}
}

function saveClaimedLevels() {
  localStorage.setItem(LEVEL_CLAIMED_KEY, JSON.stringify(claimedLevelRewards));
}

function getLevelRewardSpec(lvl) {
  if (lvl % 5 === 0) {
    return {
      isMilestone: true,
      cash: 250,
      hasLevelCase: true,
      guaranteed100Plus: true,
      label: `Level Case + $250 + Skin ≥ $100`
    };
  }
  const smallCash = Number((lvl * 5).toFixed(2));
  return {
    isMilestone: false,
    cash: smallCash,
    hasLevelCase: false,
    guaranteed100Plus: false,
    label: `+$${smallCash.toFixed(2)} bonus`
  };
}

function openLevelRoadModal() {
  if (!currentUser || !userProfile) {
    openAuthModal();
    return;
  }
  renderLevelRoadModal();
  document.getElementById('level-road-modal').classList.remove('hidden');
}

function closeLevelRoadModal() {
  document.getElementById('level-road-modal').classList.add('hidden');
}

function renderLevelRoadModal() {
  const currentLvl = Number(userProfile?.level || 1);
  const summaryEl = document.getElementById('level-road-summary');
  const listEl = document.getElementById('level-road-list');
  if (!summaryEl || !listEl) return;

  const unclaimedCount = Array.from({ length: currentLvl }, (_, idx) => idx + 1)
    .filter(l => !claimedLevelRewards.includes(l)).length;

  summaryEl.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
      <div>Current Level: <b>${currentLvl} / 100</b></div>
      <div>Unclaimed Rewards: <b style="color:var(--win);">${unclaimedCount}</b></div>
    </div>
    <div style="font-size:12px; color:var(--text-muted); margin-top:4px;">
      Every 5th level grants a high-tier <b>Level Case</b>, <b>$250</b>, and a guaranteed skin worth <b>$100+</b>.
    </div>
  `;

  const rows = [];
  for (let lvl = 1; lvl <= 100; lvl++) {
    const spec = getLevelRewardSpec(lvl);
    const unlocked = currentLvl >= lvl;
    const claimed = claimedLevelRewards.includes(lvl);

    let btnHtml = '';
    if (claimed) {
      btnHtml = `<button class="btn btn-sm btn-outline" disabled>Claimed</button>`;
    } else if (unlocked) {
      btnHtml = `<button class="btn btn-sm btn-win" ${isClaimingLevelReward ? 'disabled' : ''} onclick="claimLevelReward(${lvl})">Claim</button>`;
    } else {
      btnHtml = `<button class="btn btn-sm btn-outline" disabled>Locked</button>`;
    }

    rows.push(`
      <div class="level-tier-row ${spec.isMilestone ? 'milestone' : ''}">
        <div>
          <div style="font-weight:700;">
            ${spec.isMilestone ? '👑 ' : ''}Level ${lvl}
          </div>
          <div style="font-size:12px; color:${spec.isMilestone ? '#ffd700' : 'var(--text-muted)'};">${spec.label}</div>
        </div>
        <div>${btnHtml}</div>
      </div>
    `);
  }

  listEl.innerHTML = rows.join('');
}

async function claimLevelReward(lvl) {
  if (!currentUser || !userProfile || isClaimingLevelReward) {
    if (!currentUser) openAuthModal();
    return;
  }
  const currentLvl = Number(userProfile.level || 1);
  if (lvl > currentLvl || claimedLevelRewards.includes(lvl)) return;

  isClaimingLevelReward = true;
  const spec = getLevelRewardSpec(lvl);
  claimedLevelRewards.push(lvl);
  saveClaimedLevels();
  renderLevelRoadModal();

  const newBal = Number(userProfile.balance) + Number(spec.cash);
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();

  const itemsToInsert = [];
  const spinnerBox = document.getElementById('level-case-spinner-box');
  const spinnerTitle = document.getElementById('level-case-spinner-title');

  if (spec.hasLevelCase) {
    const caseSkin = pickRandomItem(LEVEL_CASE_HIGH_POOL);
    if (spinnerBox && spinnerTitle) {
      spinnerBox.classList.remove('hidden');
      spinnerTitle.textContent = `Opening Level ${lvl} Case...`;
      await spinSlowRoulette('level-case-track', LEVEL_CASE_HIGH_POOL, caseSkin);
    }
    itemsToInsert.push({
      user_id: currentUser.id,
      item_name: `[Level ${lvl} Case] ${caseSkin.name}`,
      item_rarity: caseSkin.rarity,
      item_price: caseSkin.price,
      item_image: caseSkin.image
    });
    addLiveTickerItem(userProfile.username || currentUser.email, `Level ${lvl} Case`, caseSkin.name, caseSkin.price);
  }

  if (spec.guaranteed100Plus) {
    const guaranteedSkin = pickRandomItem(LEVEL_GUARANTEED_100PLUS_POOL);
    itemsToInsert.push({
      user_id: currentUser.id,
      item_name: guaranteedSkin.name,
      item_rarity: guaranteedSkin.rarity,
      item_price: guaranteedSkin.price,
      item_image: guaranteedSkin.image
    });
    addLiveTickerItem(userProfile.username || currentUser.email, `Lvl ${lvl} Bonus`, guaranteedSkin.name, guaranteedSkin.price);
  }

  if (itemsToInsert.length > 0) {
    await sb.from('inventory').insert(itemsToInsert);
  }

  if (spinnerBox) {
    setTimeout(() => spinnerBox.classList.add('hidden'), 1200);
  }

  isClaimingLevelReward = false;
  await fetchInventory();
  renderLevelRoadModal();

  if (spec.isMilestone) {
    showToast(`Level ${lvl} claimed: +$${spec.cash}, Level Case & $100+ skin!`);
  } else {
    showToast(`Level ${lvl} reward claimed: +$${spec.cash.toFixed(2)}!`);
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
// 5. NAVIGATION & RENDER CASES
// ==========================================
const ALL_TABS = ['cases', 'battles', 'upgrader', 'contracts', 'mines', 'rocket', 'quests', 'inventory'];

function switchTab(tab) {
  ALL_TABS.forEach(t => {
    const viewEl = document.getElementById(`view-${t}`);
    const tabEl = document.getElementById(`tab-${t}`);
    if (viewEl) viewEl.classList.toggle('hidden', t !== tab);
    if (tabEl) tabEl.classList.toggle('active', t === tab);
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
    } else if (tab === 'contracts') {
      renderContractsUI();
    } else if (tab === 'mines') {
      renderMinesBoard();
      updateMinesStatusUI();
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
// 6. CASE MODAL & OPENING (WITH FAST OPEN)
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
    <div style="display:flex; gap:10px; margin-top:12px;">
      <button class="btn btn-primary btn-full" ${selectedModalQty === 0 ? 'disabled' : ''} onclick="confirmAndOpenCase(false)">
        ${selectedModalQty === 0 ? 'Insufficient Balance' : (c.price === 0 ? `Open ${selectedModalQty}x FREE` : `Open ${selectedModalQty}x ($${totalCost.toFixed(2)})`)}
      </button>
      <button class="btn btn-outline" style="white-space:nowrap;" ${selectedModalQty === 0 ? 'disabled' : ''} onclick="confirmAndOpenCase(true)">
        ⚡ Fast Open
      </button>
    </div>
    <div class="modal-contents-list">
      ${c.items.map(item => `
        <div class="mini-item-chip" style="border-left-color: ${RARITY_COLORS[item.rarity]}">
          <img src="${item.image}" class="mini-item-img" alt="${item.name}">
          <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:130px;">
            <div style="font-weight:700; font-size:11px;">${item.name}</div>
            <div style="color:${item.price >= c.price ? 'var(--win)' : 'var(--text-muted)'}; font-weight:700; font-size:11px;">$${item.price}</div>
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

async function confirmAndOpenCase(isFast = false) {
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

  const wonItems = [];
  for (let i = 0; i < qty; i++) {
    wonItems.push(pickRandomItem(selectedCase.items));
  }

  lastOpenedItems = wonItems;

  const arena = document.getElementById('opening-arena');
  const verdictBox = document.getElementById('opening-verdict');
  const roulettesContainer = document.getElementById('roulettes-container');

  arena.classList.remove('hidden');
  document.getElementById('close-arena-btn').disabled = true;
  document.getElementById('repeat-open-btn').disabled = true;
  document.getElementById('sell-all-opened-btn').disabled = true;
  verdictBox.classList.add('hidden');
  document.getElementById('opening-title').textContent = `Opening: ${selectedCase.name} (${qty}x)`;

  if (isFast) {
    roulettesContainer.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:12px; padding:25px;">
        ${wonItems.map(item => `
          <div class="roulette-item" style="border-bottom: 3px solid ${RARITY_COLORS[item.rarity]}; width:130px; padding:10px; background:var(--bg-card); border-radius:8px; text-align:center;">
            <img src="${item.image}" style="width:90px; height:60px; object-fit:contain;" alt="${item.name}">
            <div style="font-size: 11px; font-weight:700; margin-top:4px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.name}</div>
            <div style="font-size: 11px; color:var(--win); font-weight:700;">$${item.price.toFixed(2)}</div>
          </div>
        `).join('')}
      </div>
    `;
    arena.scrollIntoView({ behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 400));
  } else {
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

    const spinPromises = wonItems.map((targetItem, index) => spinSlowRoulette(`track-${index}`, selectedCase.items, targetItem));
    await Promise.all(spinPromises);
  }

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
    if (!track) {
      resolve();
      return;
    }
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
    const windowWidth = track.parentElement.offsetWidth || 600;
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
  confirmAndOpenCase(false);
}

async function sellAllOpenedItems() {
  if (lastOpenedItems.length === 0) return;
  const totalPrice = lastOpenedItems.reduce((sum, i) => sum + i.price, 0);

  const idsToDelete = [];
  const tempInv = [...userInventory];
  for (const item of lastOpenedItems) {
    const idx = tempInv.findIndex(inv => inv.item_name === item.name);
    if (idx > -1) {
      idsToDelete.push(tempInv[idx].id);
      tempInv.splice(idx, 1);
    }
  }

  if (idsToDelete.length > 0) {
    await sb.from('inventory').delete().in('id', idsToDelete);
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
// 7. UPGRADER
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
  renderTargetCatalog();
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

  const idsToDelete = selectedUpgradeItems.map(i => i.id);
  await sb.from('inventory').delete().in('id', idsToDelete);

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
      addLiveTickerItem(userProfile.username || currentUser.email, 'Upgrader', selectedTargetSkin.name, selectedTargetSkin.price);
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
// 7B. TRADE-UP CONTRACTS (3 - 10 ITEMS)
// ==========================================
function renderContractsUI() {
  const invContainer = document.getElementById('contracts-inv-select');
  const slotsContainer = document.getElementById('contracts-slots-grid');
  const invCountEl = document.getElementById('contracts-inv-count');
  const selCountEl = document.getElementById('contracts-selected-count');
  const summaryEl = document.getElementById('contracts-summary');
  const craftBtn = document.getElementById('contracts-craft-btn');

  selectedContractItems = selectedContractItems.filter(sel => userInventory.some(inv => inv.id === sel.id));

  if (invCountEl) invCountEl.textContent = userInventory.length;
  if (selCountEl) selCountEl.textContent = selectedContractItems.length;

  if (invContainer) {
    if (userInventory.length === 0) {
      invContainer.innerHTML = '<p class="muted-text" style="grid-column: 1/-1; text-align:center; padding:24px;">No items in inventory.</p>';
    } else {
      invContainer.innerHTML = userInventory.map(item => {
        const isPicked = selectedContractItems.some(i => i.id === item.id);
        return `
          <div class="upgrade-grid-item ${isPicked ? 'selected' : ''}" style="border-bottom-color: ${RARITY_COLORS[item.item_rarity] || '#b0c3d9'}" onclick="toggleContractItem('${item.id}')">
            <img src="${item.item_image}" class="upgrade-grid-thumb" alt="${item.item_name}">
            <div style="font-weight:700; font-size:11px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${item.item_name}</div>
            <div style="color:var(--win); font-size:11px; font-weight:700;">$${Number(item.item_price).toFixed(2)}</div>
          </div>
        `;
      }).join('');
    }
  }

  if (slotsContainer) {
    let html = '';
    for (let i = 0; i < 10; i++) {
      const item = selectedContractItems[i];
      if (item) {
        html += `<div class="slot-item" onclick="toggleContractItem('${item.id}')" title="${item.item_name}"><img src="${item.item_image}" alt="${item.item_name}"></div>`;
      } else {
        html += `<div class="slot-item empty">+</div>`;
      }
    }
    slotsContainer.innerHTML = html;
  }

  const inputSum = selectedContractItems.reduce((acc, i) => acc + Number(i.item_price), 0);
  const minOut = inputSum * 0.6;
  const maxOut = inputSum * 2.2;

  if (summaryEl) {
    summaryEl.innerHTML = `Input Sum: <b>$${inputSum.toFixed(2)}</b> | Range (~0.6x–2.2x): <b>$${minOut.toFixed(2)} – $${maxOut.toFixed(2)}</b>`;
  }

  if (craftBtn) {
    const validCount = selectedContractItems.length >= 3 && selectedContractItems.length <= 10;
    craftBtn.disabled = !validCount || isCraftingContract;
    craftBtn.textContent = validCount
      ? `Sign Contract (${selectedContractItems.length} items)`
      : `Select 3–10 items (${selectedContractItems.length}/10)`;
  }
}

function toggleContractItem(itemId) {
  if (isCraftingContract) return;
  const item = userInventory.find(i => i.id === itemId);
  if (!item) return;

  const idx = selectedContractItems.findIndex(i => i.id === itemId);
  if (idx > -1) {
    selectedContractItems.splice(idx, 1);
  } else {
    if (selectedContractItems.length >= 10) {
      showToast('Maximum 10 items per contract!');
      return;
    }
    selectedContractItems.push(item);
  }
  renderContractsUI();
}

async function executeTradeUpContract() {
  if (!currentUser || isCraftingContract) return;
  if (selectedContractItems.length < 3 || selectedContractItems.length > 10) {
    showToast('Choose between 3 and 10 items!');
    return;
  }

  isCraftingContract = true;
  renderContractsUI();

  const itemsToBurn = [...selectedContractItems];
  const idsToDelete = itemsToBurn.map(i => i.id);
  const inputSum = itemsToBurn.reduce((acc, i) => acc + Number(i.item_price), 0);

  const u = Math.random();
  const multiplier = Number((0.6 + Math.pow(u, 1.15) * 1.6).toFixed(2));
  const targetValue = inputSum * multiplier;

  let candidates = ALL_SKINS_POOL.filter(s => s.price >= inputSum * 0.55 && s.price <= inputSum * 2.35);
  if (candidates.length === 0) {
    candidates = ALL_SKINS_POOL;
  }

  candidates.sort((a, b) => Math.abs(a.price - targetValue) - Math.abs(b.price - targetValue));
  const topPool = candidates.slice(0, Math.min(5, candidates.length));
  const rewardSkin = topPool[Math.floor(Math.random() * topPool.length)];

  await sb.from('inventory').delete().in('id', idsToDelete);
  await sb.from('inventory').insert([{
    user_id: currentUser.id,
    item_name: rewardSkin.name,
    item_rarity: rewardSkin.rarity,
    item_price: rewardSkin.price,
    item_image: rewardSkin.image
  }]);

  selectedContractItems = [];
  isCraftingContract = false;
  await fetchInventory();
  addXP(40);
  addLiveTickerItem(userProfile?.username || currentUser.email, 'Contract', rewardSkin.name, rewardSkin.price);

  const resBox = document.getElementById('contracts-result-box');
  if (resBox) {
    resBox.classList.remove('hidden');
    resBox.innerHTML = `
      <div style="font-size:12px; color:var(--text-muted);">Multiplier: <b>${multiplier.toFixed(2)}x</b> (Input: $${inputSum.toFixed(2)})</div>
      <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin-top:8px;">
        <img src="${rewardSkin.image}" style="width:52px; height:36px; object-fit:contain;" alt="${rewardSkin.name}">
        <div style="text-align:left;">
          <div style="font-weight:700;">${rewardSkin.name}</div>
          <div style="color:var(--win); font-weight:700;">$${Number(rewardSkin.price).toFixed(2)}</div>
        </div>
      </div>
    `;
  }

  showToast(`Contract complete! Received ${rewardSkin.name} ($${Number(rewardSkin.price).toFixed(2)})`);
  renderContractsUI();
}

// ==========================================
// 7C. MINES (5x5, 1 - 24 MINES)
// ==========================================
function initMinesUI() {
  const selectEl = document.getElementById('mines-count-select');
  if (selectEl && selectEl.options.length === 0) {
    for (let m = 1; m <= 24; m++) {
      const opt = document.createElement('option');
      opt.value = String(m);
      opt.textContent = `${m} ${m === 1 ? 'Mine' : 'Mines'}`;
      if (m === 5) opt.selected = true;
      selectEl.appendChild(opt);
    }
    selectEl.addEventListener('change', () => {
      if (!minesActive) {
        minesCount = parseInt(selectEl.value, 10) || 5;
        updateMinesStatusUI();
      }
    });
  }

  const betInput = document.getElementById('mines-bet-input');
  if (betInput) {
    betInput.addEventListener('input', () => {
      if (!minesActive) updateMinesStatusUI();
    });
  }

  renderMinesBoard();
  updateMinesStatusUI();
}

function calcMinesMultiplier(safePicks, totalMines) {
  if (safePicks <= 0) return 1.00;
  let probSafe = 1;
  for (let i = 0; i < safePicks; i++) {
    const remainingTiles = 25 - i;
    const remainingSafe = (25 - totalMines) - i;
    if (remainingSafe <= 0) break;
    probSafe *= remainingSafe / remainingTiles;
  }
  const rawMult = 0.96 / probSafe;
  return Math.max(1.01, Number(rawMult.toFixed(2)));
}

function updateMinesStatusUI() {
  const betInput = document.getElementById('mines-bet-input');
  const selectEl = document.getElementById('mines-count-select');
  const multEl = document.getElementById('mines-mult-label');
  const winEl = document.getElementById('mines-win-label');
  const picksEl = document.getElementById('mines-picks-label');

  const activeMines = minesActive ? minesCount : (parseInt(selectEl?.value, 10) || 5);
  const currentBet = minesActive ? minesBetAmount : (Number(betInput?.value) || 0);
  const picksCount = minesRevealedSafe.size;
  const mult = minesActive ? calcMinesMultiplier(picksCount, activeMines) : calcMinesMultiplier(1, activeMines);
  minesCurrentMultiplier = mult;

  if (multEl) multEl.textContent = `${mult.toFixed(2)}x`;
  if (winEl) winEl.textContent = `$${(currentBet * (minesActive ? mult : 1)).toFixed(2)}`;
  if (picksEl) picksEl.textContent = String(picksCount);
}

function renderMinesBoard(revealAll = false) {
  const board = document.getElementById('mines-board');
  if (!board) return;

  const tilesHtml = [];
  for (let idx = 0; idx < 25; idx++) {
    const isSafeRevealed = minesRevealedSafe.has(idx);
    const isMine = minesPositions.has(idx);

    let cls = 'mine-tile';
    let label = '•';
    let disabled = !minesActive;

    if (isSafeRevealed) {
      cls += ' safe';
      label = '💎';
      disabled = true;
    } else if (!minesActive && revealAll && isMine) {
      cls += minesPositions.size > 0 ? ' bomb' : ' mine-hint';
      label = '💣';
      disabled = true;
    } else if (!minesActive && revealAll && !isMine) {
      label = '💎';
      disabled = true;
    }

    tilesHtml.push(`<button class="${cls}" ${disabled ? 'disabled' : ''} onclick="pickMineTile(${idx})">${label}</button>`);
  }
  board.innerHTML = tilesHtml.join('');
}

async function startMinesGame() {
  if (!currentUser || !userProfile) {
    openAuthModal();
    return;
  }
  if (minesActive) return;

  const betInput = document.getElementById('mines-bet-input');
  const selectEl = document.getElementById('mines-count-select');
  const bet = Number(betInput?.value);
  const mCount = parseInt(selectEl?.value, 10) || 5;

  if (!bet || bet <= 0) {
    showToast('Enter a valid bet amount!');
    return;
  }
  if (Number(userProfile.balance) < bet) {
    showToast('Insufficient balance for this bet!');
    return;
  }

  const newBal = Number((Number(userProfile.balance) - bet).toFixed(2));
  await sb.from('profiles').update({ balance: newBal }).eq('id', currentUser.id);
  userProfile.balance = newBal;
  updateUI();

  minesBetAmount = bet;
  minesCount = Math.min(24, Math.max(1, mCount));
  minesPositions = new Set();
  while (minesPositions.size < minesCount) {
    minesPositions.add(Math.floor(Math.random() * 25));
  }
  minesRevealedSafe = new Set();
  minesActive = true;

  document.getElementById('mines-start-btn').classList.add('hidden');
  document.getElementById('mines-cashout-btn').classList.remove('hidden');
  if (betInput) betInput.disabled = true;
  if (selectEl) selectEl.disabled = true;

  renderMinesBoard(false);
  updateMinesStatusUI();
  showToast(`Mines started (${minesCount} mines, bet $${bet.toFixed(2)})`);
}

async function pickMineTile(idx) {
  if (!minesActive || minesRevealedSafe.has(idx)) return;

  if (minesPositions.has(idx)) {
    minesActive = false;
    document.getElementById('mines-cashout-btn').classList.add('hidden');
    document.getElementById('mines-start-btn').classList.remove('hidden');
    const betInput = document.getElementById('mines-bet-input');
    const selectEl = document.getElementById('mines-count-select');
    if (betInput) betInput.disabled = false;
    if (selectEl) selectEl.disabled = false;

    renderMinesBoard(true);
    updateMinesStatusUI();
    showToast(`Boom! Hit a mine and lost $${minesBetAmount.toFixed(2)}`);
    return;
  }

  minesRevealedSafe.add(idx);
  const safeTotal = 25 - minesCount;
  minesCurrentMultiplier = calcMinesMultiplier(minesRevealedSafe.size, minesCount);
  updateMinesStatusUI();
  renderMinesBoard(false);

  if (minesRevealedSafe.size >= safeTotal) {
    await cashoutMinesGame();
  }
}

async function cashoutMinesGame() {
  if (!minesActive || !currentUser || !userProfile) return;

  const picks = minesRevealedSafe.size;
  const mult = picks > 0 ? calcMinesMultiplier(picks, minesCount) : 1.00;
  const payout = Number((minesBetAmount * mult).toFixed(2));

  minesActive = false;
  document.getElementById('mines-cashout-btn').classList.add('hidden');
  document.getElementById('mines-start-btn').classList.remove('hidden');
  const betInput = document.getElementById('mines-bet-input');
  const selectEl = document.getElementById('mines-count-select');
  if (betInput) betInput.disabled = false;
  if (selectEl) selectEl.disabled = false;

  const updatedBal = Number((Number(userProfile.balance) + payout).toFixed(2));
  await sb.from('profiles').update({ balance: updatedBal }).eq('id', currentUser.id);
  userProfile.balance = updatedBal;
  updateUI();

  renderMinesBoard(true);
  updateMinesStatusUI();
  addXP(30);
  if (payout >= 1000) {
    addLiveTickerItem(userProfile.username || currentUser.email, 'Mines', `Cashout ${mult.toFixed(2)}x`, payout);
  }
  showToast(`Cashed out +$${payout.toFixed(2)} (${mult.toFixed(2)}x)!`);
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
    <div class="upgrade-inv-item ${selectedRocketItem?.id === item.id ? 'selected' : ''}" onclick="selectRocketItem('${item.id}')" style="cursor:pointer; padding:8px; border:1px solid var(--border); border-radius:6px; margin-bottom:6px; background:var(--bg-main);">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${item.item_image}" class="inv-skin-thumb" alt="${item.item_name}" style="width:40px; height:30px; object-fit:contain;">
        <div>
          <div style="font-weight:700; font-size:12px;">${item.item_name}</div>
          <div style="color:var(--win); font-size:11px;">$${Number(item.item_price).toFixed(2)}</div>
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

  const rocketStartTime = performance.now();

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
    addLiveTickerItem(userProfile.username || currentUser.email, 'Rocket', upgradedSkin.name, upgradedSkin.price);
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
    <div class="upgrade-inv-item" style="background:var(--bg-card); border:1px solid var(--border); padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
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
  addLiveTickerItem(userProfile.username || currentUser.email, `Battle: ${cObj.name}`, drop.name, drop.price);
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
// 11. INVENTORY, FILTERS & OPTIMIZED BULK SELLING
// ==========================================
function getFilteredSortedInventory() {
  const sortVal = document.getElementById('inv-sort-select')?.value || 'newest';
  const rarityVal = document.getElementById('inv-rarity-select')?.value || 'all';

  let list = [...userInventory];
  if (rarityVal !== 'all') {
    list = list.filter(item => item.item_rarity === rarityVal);
  }

  if (sortVal === 'price_desc') {
    list.sort((a, b) => Number(b.item_price) - Number(a.item_price));
  } else if (sortVal === 'price_asc') {
    list.sort((a, b) => Number(a.item_price) - Number(b.item_price));
  }

  return list;
}

function toggleInventorySelection(itemId) {
  if (selectedInventoryIds.has(itemId)) {
    selectedInventoryIds.delete(itemId);
  } else {
    selectedInventoryIds.add(itemId);
  }
  updateSelectedInventoryButton();
  renderInventory();
}

function updateSelectedInventoryButton() {
  const countEl = document.getElementById('selected-inv-count');
  const btn = document.getElementById('sell-selected-inv-btn');
  const validIds = [...selectedInventoryIds].filter(id => userInventory.some(i => i.id === id));
  selectedInventoryIds = new Set(validIds);

  if (countEl) countEl.textContent = String(selectedInventoryIds.size);
  if (btn) btn.disabled = selectedInventoryIds.size === 0;
}

function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;

  updateSelectedInventoryButton();
  const items = getFilteredSortedInventory();

  if (items.length === 0) {
    grid.innerHTML = '<p class="muted-text">Inventory is empty.</p>';
    return;
  }

  grid.innerHTML = items.map(item => {
    const isChecked = selectedInventoryIds.has(item.id);
    return `
      <div class="inv-card ${isChecked ? 'selected-for-sell' : ''}" style="border-top-color: ${RARITY_COLORS[item.item_rarity] || '#b0c3d9'}">
        <div style="display:flex; justify-content:flex-end; margin-bottom:4px;">
          <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleInventorySelection('${item.id}')" title="Select for bulk sell">
        </div>
        <div class="inv-img-wrap">
          <img src="${item.item_image}" class="inv-img" alt="${item.item_name}">
        </div>
        <div class="inv-name">${item.item_name}</div>
        <div class="inv-price">$${Number(item.item_price).toFixed(2)}</div>
        <button class="btn btn-outline btn-sm btn-full" onclick="sellItem('${item.id}', ${item.item_price})">Sell Item</button>
      </div>
    `;
  }).join('');
}

async function sellSelectedInventoryItems() {
  if (!currentUser || !userProfile || selectedInventoryIds.size === 0) return;
  const itemsToSell = userInventory.filter(i => selectedInventoryIds.has(i.id));
  if (itemsToSell.length === 0) return;

  const ids = itemsToSell.map(i => i.id);
  const totalSum = itemsToSell.reduce((sum, i) => sum + Number(i.item_price), 0);

  const { error } = await sb.from('inventory').delete().in('id', ids);
  if (error) {
    showToast('Error selling selected items');
    return;
  }

  const updatedBalance = Number((Number(userProfile.balance) + totalSum).toFixed(2));
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  selectedInventoryIds.clear();
  updateUI();
  await fetchInventory();
  showToast(`Sold ${itemsToSell.length} selected items for +$${totalSum.toFixed(2)}`);
}

async function sellItem(itemId, price) {
  if (!currentUser || !userProfile) return;
  await sb.from('inventory').delete().eq('id', itemId);

  const updatedBalance = Number(userProfile.balance) + Number(price);
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  selectedInventoryIds.delete(itemId);
  updateUI();
  await fetchInventory();
  showToast(`Sold for +$${Number(price).toFixed(2)}`);
}

async function quickSellByPrice(maxPrice) {
  if (!currentUser || !userProfile || userInventory.length === 0) return;
  const itemsToSell = userInventory.filter(i => Number(i.item_price) <= maxPrice);
  if (itemsToSell.length === 0) {
    showToast(`No items under $${maxPrice} found.`);
    return;
  }

  const itemIds = itemsToSell.map(i => i.id);
  let totalSum = itemsToSell.reduce((sum, i) => sum + Number(i.item_price), 0);

  const { error } = await sb.from('inventory').delete().in('id', itemIds);
  if (error) {
    showToast('Error selling items');
    return;
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
  
  const itemIds = userInventory.map(i => i.id);
  let totalSum = userInventory.reduce((sum, i) => sum + Number(i.item_price), 0);

  const { error } = await sb.from('inventory').delete().in('id', itemIds);
  if (error) {
    showToast('Error selling inventory');
    return;
  }

  const updatedBalance = Number(userProfile.balance) + totalSum;
  await sb.from('profiles').update({ balance: updatedBalance }).eq('id', currentUser.id);
  userProfile.balance = updatedBalance;
  selectedInventoryIds.clear();
  updateUI();
  await fetchInventory();
  showToast(`Sold entire inventory for +$${totalSum.toFixed(2)}`);
}

// ==========================================
// 12. BEST DROPS ($1000+) & TOASTS
// ==========================================
const BEST_DROPS_MIN_PRICE = 1000;
const BEST_DROPS_STORAGE_KEY = 'casebattle_best_drops_v1';

const INITIAL_BEST_DROPS = [
  { user: 'ezadz', caseName: 'God Tier Vault', itemName: 'Karambit | Doppler', price: 4600.00 },
  { user: 'pro99', caseName: 'Ultimate Case Battle', itemName: 'Sport Gloves | Vice', price: 8500.00 },
  { user: 'killa', caseName: 'Legendary Cache', itemName: 'Bayonet | Lore', price: 3400.00 },
  { user: 'ace24', caseName: 'Quantum Vault', itemName: 'Gut Knife | Freehand', price: 2500.00 }
];

function loadBestDrops() {
  try {
    const saved = localStorage.getItem(BEST_DROPS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...INITIAL_BEST_DROPS];
}

function saveBestDrops(list) {
  try {
    localStorage.setItem(BEST_DROPS_STORAGE_KEY, JSON.stringify(list.slice(0, 15)));
  } catch (e) {}
}

function renderBestDropElement(entry) {
  const span = document.createElement('span');
  span.className = 'ticker-item best-drop-item';
  const safeUser = String(entry.user || 'player').slice(0, 6);
  span.textContent = `🔥 [${entry.caseName}] ${safeUser}*** won ${entry.itemName} ($${Number(entry.price).toFixed(2)})`;
  return span;
}

function initBestDropsFeed() {
  const feed = document.getElementById('live-ticker-feed');
  if (!feed) return;
  feed.innerHTML = '';
  const drops = loadBestDrops();
  drops.forEach(entry => {
    feed.appendChild(renderBestDropElement(entry));
  });
}

function addLiveTickerItem(user, caseName, itemName, price) {
  const numericPrice = Number(price);
  if (Number.isNaN(numericPrice) || numericPrice < BEST_DROPS_MIN_PRICE) {
    return;
  }

  const feed = document.getElementById('live-ticker-feed');
  const currentDrops = loadBestDrops();
  const newEntry = {
    user: user || 'user',
    caseName: caseName || 'Case',
    itemName,
    price: numericPrice
  };

  const updated = [newEntry, ...currentDrops].slice(0, 15);
  saveBestDrops(updated);

  if (feed) {
    feed.prepend(renderBestDropElement(newEntry));
    while (feed.children.length > 15) {
      feed.lastChild.remove();
    }
  }
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
