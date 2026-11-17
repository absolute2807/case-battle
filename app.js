// ==========================================
// 1. КОНФИГУРАЦИЯ КЕЙСОВ И ПРЕДМЕТОВ
// ==========================================
const CASES_DATA = [
  {
    id: 'starter',
    name: 'Армейский Кейс',
    price: 100,
    icon: '📦',
    items: [
      { name: 'Glock-18 | Песок', price: 45, rarity: 'common', emoji: '🔫', weight: 50 },
      { name: 'USP-S | Лес', price: 85, rarity: 'common', emoji: '🔫', weight: 30 },
      { name: 'AK-47 | Красная линия', price: 240, rarity: 'rare', emoji: '💥', weight: 15 },
      { name: 'AWP | Азимов', price: 650, rarity: 'legendary', emoji: '🎯', weight: 5 }
    ]
  },
  {
    id: 'cyber',
    name: 'Кибер-Операция',
    price: 300,
    icon: '🧰',
    items: [
      { name: 'P250 | Неон', price: 120, rarity: 'common', emoji: '🔫', weight: 45 },
      { name: 'M4A1-S | Поток', price: 290, rarity: 'rare', emoji: '⚡', weight: 30 },
      { name: 'Desert Eagle | Пламя', price: 750, rarity: 'epic', emoji: '🔥', weight: 18 },
      { name: 'Нож-бабочка | Градиент', price: 2200, rarity: 'legendary', emoji: '🗡️', weight: 7 }
    ]
  },
  {
    id: 'elite',
    name: 'Элитный Арсенал',
    price: 750,
    icon: '💼',
    items: [
      { name: 'AK-47 | Вулкан', price: 380, rarity: 'rare', emoji: '❄️', weight: 45 },
      { name: 'M4A4 | Вой', price: 820, rarity: 'epic', emoji: '🐺', weight: 32 },
      { name: 'Перчатки | Кровавое кимоно', price: 1800, rarity: 'epic', emoji: '🧤', weight: 16 },
      { name: 'Керамбит | Волны', price: 4500, rarity: 'legendary', emoji: '⚔️', weight: 7 }
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
// 2. СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// ==========================================
let currentUser = null;
let userProfile = null;
let userInventory = [];
let authMode = 'login';
let isBattleRunning = false;

// ==========================================
// 3. ИНИЦИАЛИЗАЦИЯ И АВТОРИЗАЦИЯ SUPABASE
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  renderCases();

  // Проверяем текущую сессию
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    await loadUserData(session.user);
  }

  // Слушаем изменения статуса входа/выхода
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

  // Загружаем профиль с балансом
  const { data: profile, error: profErr } = await sb
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profErr && profile) {
    userProfile = profile;
  }

  // Загружаем инвентарь
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
    document.getElementById('p1-name').textContent = userProfile.username || 'Вы';
  } else {
    guestControls.classList.remove('hidden');
    authControls.classList.add('hidden');
    document.getElementById('inv-count').textContent = '0';
  }
}

// ==========================================
// 4. МОДАЛКА ВХОДА И РЕГИСТРАЦИИ
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
  document.getElementById('auth-modal-title').textContent = mode === 'login' ? 'Вход в аккаунт' : 'Регистрация (Бонус 1000 ₽)';
  document.getElementById('auth-submit-btn').textContent = mode === 'login' ? 'Войти' : 'Создать аккаунт';
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
      showToast('Аккаунт создан! Вам начислено 1000 ₽');
      closeAuthModal();
    } else {
      const { error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw error;
      showToast('С возвращением!');
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
  showToast('Вы вышли из аккаунта');
}

// ==========================================
// 5. ОТРИСОВКА КЕЙСОВ И НАВИГАЦИЯ
// ==========================================
function switchTab(tab) {
  document.getElementById('view-cases').classList.toggle('hidden', tab !== 'cases');
  document.getElementById('view-inventory').classList.toggle('hidden', tab !== 'inventory');
  document.getElementById('tab-cases').classList.toggle('active', tab === 'cases');
  document.getElementById('tab-inventory').classList.toggle('active', tab === 'inventory');

  if (tab === 'inventory') {
    if (!currentUser) {
      openAuthModal();
      switchTab('cases');
      return;
    }
    fetchInventory();
  }
}

function renderCases() {
  const grid = document.getElementById('cases-grid');
  grid.innerHTML = CASES_DATA.map(c => `
    <div class="case-card">
      <div>
        <div class="case-icon">${c.icon}</div>
        <div class="case-title">${c.name}</div>
        <div class="case-items-preview">
          ${c.items.map(i => `<span class="preview-dot" style="background:${RARITY_COLORS[i.rarity]}" title="${i.name} (${i.price} ₽)"></span>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary btn-full" onclick="startBattle('${c.id}')">
        Батл за ${c.price} ₽
      </button>
    </div>
  `).join('');
}

// ==========================================
// 6. ЛОГИКА КЕЙС-БАТЛА И РУЛЕТКИ
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

async function startBattle(caseId) {
  if (!currentUser || !userProfile) {
    openAuthModal();
    return;
  }
  if (isBattleRunning) return;

  const selectedCase = CASES_DATA.find(c => c.id === caseId);
  if (!selectedCase) return;

  if (Number(userProfile.balance) < selectedCase.price) {
    showToast('Недостаточно средств на балансе!');
    return;
  }

  isBattleRunning = true;

  // 1. Списываем стоимость кейса в базе Supabase
  const newBalance = Number(userProfile.balance) - selectedCase.price;
  const { error: balErr } = await sb
    .from('profiles')
    .update({ balance: newBalance })
    .eq('id', currentUser.id);

  if (balErr) {
    showToast('Ошибка списания баланса');
    isBattleRunning = false;
    return;
  }

  userProfile.balance = newBalance;
  updateUI();

  // 2. Подготовка арены
  const arena = document.getElementById('battle-arena');
  const closeBtn = document.getElementById('close-battle-btn');
  const verdictBox = document.getElementById('battle-verdict');

  arena.classList.remove('hidden');
  closeBtn.disabled = true;
  verdictBox.classList.add('hidden');
  document.getElementById('battle-title').textContent = `Батл: ${selectedCase.name}`;
  document.getElementById('p1-score').textContent = '0 ₽';
  document.getElementById('p2-score').textContent = '0 ₽';
  document.getElementById('p1-drop').textContent = 'Крутится...';
  document.getElementById('p2-drop').textContent = 'Крутится...';

  arena.scrollIntoView({ behavior: 'smooth' });

  // 3. Определяем победившие предметы заранее
  const p1WinItem = pickRandomItem(selectedCase.items);
  const p2WinItem = pickRandomItem(selectedCase.items);

  // 4. Запускаем анимацию обеих рулеток
  await Promise.all([
    spinRoulette('track-p1', selectedCase.items, p1WinItem),
    spinRoulette('track-p2', selectedCase.items, p2WinItem)
  ]);

  // 5. Показываем результаты прокрутки
  document.getElementById('p1-score').textContent = `${p1WinItem.price} ₽`;
  document.getElementById('p2-score').textContent = `${p2WinItem.price} ₽`;
  document.getElementById('p1-drop').innerHTML = `Выпало: <strong style="color:${RARITY_COLORS[p1WinItem.rarity]}">${p1WinItem.name}</strong>`;
  document.getElementById('p2-drop').innerHTML = `Выпало: <strong style="color:${RARITY_COLORS[p2WinItem.rarity]}">${p2WinItem.name}</strong>`;

  // 6. Определяем победителя батла (при ничьей побеждает игрок)
  const isPlayerWinner = p1WinItem.price >= p2WinItem.price;

  if (isPlayerWinner) {
    const totalWin = p1WinItem.price + p2WinItem.price;
    verdictBox.className = 'battle-verdict verdict-win';
    verdictBox.textContent = `ПОБЕДА! Вы забрали оба предмета общей стоимостью ${totalWin} ₽ в инвентарь!`;

    // Сохраняем ОБА предмета в таблицу inventory в Supabase
    await sb.from('inventory').insert([
      {
        user_id: currentUser.id,
        item_name: p1WinItem.name,
        item_rarity: p1WinItem.rarity,
        item_price: p1WinItem.price,
        item_image: p1WinItem.emoji
      },
      {
        user_id: currentUser.id,
        item_name: p2WinItem.name,
        item_rarity: p2WinItem.rarity,
        item_price: p2WinItem.price,
        item_image: p2WinItem.emoji
      }
    ]);
    await fetchInventory();
  } else {
    verdictBox.className = 'battle-verdict verdict-lose';
    verdictBox.textContent = `ПОРАЖЕНИЕ! Бот выбил более дорогой скин и забрал банк.`;
  }

  verdictBox.classList.remove('hidden');
  closeBtn.disabled = false;
  isBattleRunning = false;
}

function spinRoulette(trackId, pool, targetItem) {
  return new Promise(resolve => {
    const track = document.getElementById(trackId);
    const totalCards = 45;
    const winIndex = 38; // На какой карточке остановится указатель

    // Генерируем ленту
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

    // Форсируем перерисовку DOM
    track.offsetHeight;

    // Ширина карточки 110px + 8px margin = 118px
    const cardWidth = 118;
    const windowWidth = track.parentElement.offsetWidth;
    const randomOffset = Math.floor(Math.random() * 50) - 25; // Небольшое смещение внутри победной карточки
    const targetX = (winIndex * cardWidth) - (windowWidth / 2) + (cardWidth / 2) + randomOffset;

    track.style.transition = 'transform 4.2s cubic-bezier(0.12, 0.85, 0.22, 1)';
    track.style.transform = `translateX(-${targetX}px)`;

    setTimeout(resolve, 4300);
  });
}

function closeBattle() {
  if (!isBattleRunning) {
    document.getElementById('battle-arena').classList.add('hidden');
  }
}

// ==========================================
// 7. ИНВЕНТАРЬ И ПРОДАЖА СКИНОВ
// ==========================================
function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (userInventory.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted)">Инвентарь пуст. Выиграйте скины в Кейс Батле!</p>';
    return;
  }

  grid.innerHTML = userInventory.map(item => `
    <div class="inv-card" style="border-top-color: ${RARITY_COLORS[item.item_rarity] || '#64748b'}">
      <div class="inv-emoji">${item.item_image || '🎁'}</div>
      <div class="inv-name">${item.item_name}</div>
      <div class="inv-price">${Number(item.item_price).toFixed(2)} ₽</div>
      <button class="btn btn-outline btn-sm btn-full" onclick="sellItem('${item.id}', ${item.item_price})">
        Продать
      </button>
    </div>
  `).join('');
}

async function sellItem(itemId, price) {
  if (!currentUser || !userProfile) return;

  // Удаляем предмет из инвентаря
  const { error: delErr } = await sb
    .from('inventory')
    .delete()
    .eq('id', itemId);

  if (delErr) {
    showToast('Ошибка при продаже предмета');
    return;
  }

  // Начисляем деньги на баланс
  const updatedBalance = Number(userProfile.balance) + Number(price);
  const { error: balErr } = await sb
    .from('profiles')
    .update({ balance: updatedBalance })
    .eq('id', currentUser.id);

  if (!balErr) {
    userProfile.balance = updatedBalance;
    updateUI();
    await fetchInventory();
    showToast(`Продано за +${price} ₽`);
  }
}

// ==========================================
// 8. УВЕДОМЛЕНИЯ
// ==========================================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}