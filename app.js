// ===================== STATE =====================
const STATE_KEY = 'pureforge_state';

const defaultState = {
  streakDays: 3,
  recordDays: 0,
  startDate: null,
  triggers: [
    { emotion: 'tédio', location: 'Quarto', time: 'noite', day: 'Terça', type: 'TENTAÇÃO' },
    { emotion: 'tédio', location: 'Escola', time: 'manhã', day: 'Terça', type: 'TENTAÇÃO' },
    { emotion: 'tédio', location: '', time: 'noite', day: 'Domingo', type: 'TENTAÇÃO' },
  ],
  falls: [],
  activePlan: null,
  completedDays: [],
};

function loadState() {
  try {
    const saved = localStorage.getItem(STATE_KEY);
    return saved ? { ...defaultState, ...JSON.parse(saved) } : { ...defaultState };
  } catch { return { ...defaultState }; }
}

function saveState() {
  localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

// ===================== DATA =====================
const PLANS = [
  {
    id: 'forja',
    icon: '🔥',
    title: 'PUREFORGE: 10 DIAS DE FORJA ESPIRITUAL',
    tags: ['LIBERTAÇÃO', 'DISCIPLINA', 'SANTIDADE'],
    desc: 'Um treinamento espiritual intenso para romper ciclos de pornografia e viver em pureza real.',
    days: 10,
    daysList: [
      { title: 'Você Está em Guerra', text: 'Você não está lutando contra uma simples distração. Você está em guerra espiritual. O inimigo usa a pornografia como arma para te prender, te envergonhar e te afastar de Deus. Mas a guerra já foi vencida na cruz. Hoje você escolhe lutar do lado certo.', verse: '"Porque não temos que lutar contra a carne e o sangue, mas contra os principados..." - Efésios 6:12' },
      { title: 'Corta. Não Negocia.', text: 'Negociar com a tentação é perder antes de começar. A Palavra diz: foge. Não argumenta, não considera, não espera um pouco mais. Você corta. Hoje, identifique os acessos que precisam ser bloqueados e bloqueie. Sem exceções.', verse: '"Foge da imoralidade sexual." - 1 Coríntios 6:18' },
      { title: 'Você Não É Escravo', text: 'O vício te diz que você é fraco, que você sempre vai cair, que isso faz parte de quem você é. É mentira. Em Cristo, você é nova criação. A escravidão foi quebrada. Hoje, declare em voz alta: eu não sou escravo. Eu sou filho de Deus.', verse: '"Se o Filho os libertar, vocês de fato serão livres." - João 8:36' },
      { title: 'O Arrependimento Que Muda', text: 'Arrependimento de verdade não é apenas sentir culpa. É mudar de direção. É voltar a Deus não com vergonha paralisante, mas com fé ativa. Deus não te rejeita quando você cai — Ele te chama de volta. Venha.', verse: '"Cria em mim um coração puro, ó Deus." - Salmos 51:10' },
      { title: 'Foge. Isso Não É Fraqueza.', text: 'Fugir da tentação não é covardia — é sabedoria. José fugiu de Potifar. Paulo ordenou: foge. Os heróis da fé não ficaram parados esperando a tentação passar. Eles saíram. Hoje, pratique sair do ambiente de risco antes que a tentação se instale.', verse: '"Foge das paixões da juventude." - 2 Timóteo 2:22' },
      { title: 'A Mente É o Campo de Batalha', text: 'A pornografia começa na mente, não na tela. O inimigo planta pensamentos. Você decide o que faz com eles. Renovar a mente é disciplina diária: o que você lê, assiste, pensa. Hoje, alimente sua mente com o que é verdadeiro, puro, louvável.', verse: '"Não se moldem ao padrão deste mundo, mas sejam transformados pela renovação da mente." - Romanos 12:2' },
      { title: 'Solidão É Armadilha', text: 'A maioria das quedas acontece na solidão. O inimigo sabe disso. Comunidade não é opcional — é parte da armadura. Você precisa de alguém de confiança que sabe da sua luta. Hoje, dê um passo em direção a isso.', verse: '"Melhor são dois do que um." - Eclesiastes 4:9' },
      { title: 'Disciplina Ou Derrota', text: 'Pureza não é resultado de sentimentos. É resultado de escolhas repetidas. Disciplina é fazer o certo quando não quer. É fechar o celular. É orar quando está com preguiça. É cada pequena escolha diária construindo uma vida livre.', verse: '"Exercita-te para a piedade." - 1 Timóteo 4:7' },
      { title: 'Identidade Que Sustenta', text: 'Quando sua identidade está em Cristo, você para de buscar nos vícios o que só Deus pode dar. Aceitação, prazer, alívio — tudo isso tem fonte legítima. Hoje, declare quem você é: amado, aceito, livre, filho do Rei.', verse: '"Porque para mim o viver é Cristo." - Filipenses 1:21' },
      { title: 'A Forja Não Termina Aqui', text: 'Dez dias foram apenas o começo. A luta não termina, mas você mudou. Você não é mais quem era no dia um. Continue. A cada dia limpo, a forja trabalha. A cada escolha certa, o caráter se forma. Siga em frente.', verse: '"Aquele que começou boa obra em vós a completará." - Filipenses 1:6' },
    ]
  },
  {
    id: 'caminho',
    icon: '📖',
    title: 'PUREFORGE: GUARDANDO O CAMINHO',
    tags: ['SALMO 119:9', 'PALAVRA', 'PUREZA', 'TRANSFORMAÇÃO'],
    desc: 'Um devocional teológico e formativo: a Palavra de Deus não só informa — ela transforma. 10 dias de atualização real pela Escritura.',
    days: 10,
    daysList: [
      { title: 'A Palavra Como Fundamento', text: 'Como um jovem pode manter puro o seu caminho? Guardando-o segundo a Tua palavra. A pureza não é um projeto de força de vontade. É um projeto de Palavra. Hoje, plante a Escritura no centro da sua luta.', verse: '"Como purificará o jovem o seu caminho? Observando-o segundo a tua palavra." - Salmos 119:9' },
      { title: 'Atesoura em Teu Coração', text: 'Guardar a Palavra não é memorizar versículos como truques mágicos. É deixar que a Escritura molde sua mente, seus desejos, sua visão de mundo. Hoje, escolha um versículo e o leve com você o dia todo.', verse: '"Escondi a tua palavra no meu coração, para não pecar contra ti." - Salmos 119:11' },
      { title: 'A Luz no Caminho Escuro', text: 'Quando tudo está escuro — quando a tentação parece inevitável — a Palavra é lanterna. Ela ilumina o próximo passo. Não o caminho todo, apenas o próximo passo. Confie.', verse: '"Lâmpada para os meus pés é a tua palavra e luz para o meu caminho." - Salmos 119:105' },
      { title: 'Renovação Diária', text: 'A transformação não acontece de uma vez. Acontece dia a dia, escolha a escolha, versículo a versículo. A Palavra renova a mente gradualmente, como água que molda a pedra. Seja paciente com o processo.', verse: '"Sede transformados pela renovação da vossa mente." - Romanos 12:2' },
      { title: 'Correr para a Palavra, Não de Deus', text: 'Depois da queda, o inimigo te diz: se esconda de Deus. Mas a Palavra convida: venha. Adão se escondeu. O filho pródigo voltou. Sempre que você cair, corra para a Palavra, não de Deus.', verse: '"Venham a mim, todos os que estão cansados e sobrecarregados." - Mateus 11:28' },
      { title: 'Meditação Como Arma', text: 'Meditar na Palavra não é ficar parado pensando em nada. É encher a mente com o que é verdadeiro, para que não haja espaço para o que é falso. Hoje, dedique 10 minutos para ler e meditar num texto bíblico.', verse: '"Seja este livro da lei na tua boca; medita nele dia e noite." - Josué 1:8' },
      { title: 'A Palavra Discerne', text: 'A Palavra de Deus é viva e eficaz. Ela não é um texto morto — ela age, corta, discerne os pensamentos e intenções do coração. Deixe que ela trabalhe em você hoje.', verse: '"A palavra de Deus é viva e eficaz, mais cortante do que qualquer espada de dois gumes." - Hebreus 4:12' },
      { title: 'Confessar e Ser Lavado', text: 'A Palavra promete: se confessarmos, Ele é fiel e justo para perdoar. Não carregue a culpa. Confesse, seja lavado e ande limpo. A graça não é permissão para pecar — é poder para não pecar.', verse: '"Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar." - 1 João 1:9' },
      { title: 'Promessas Para Se Agarrar', text: 'Nas horas difíceis, você precisa de promessas sólidas para se agarrar. Deus prometeu saída em toda tentação. Deus prometeu força para o fraco. Deus prometeu completar a obra que começou. Agarre-se a isso.', verse: '"Deus é fiel e não permitirá que vocês sejam tentados além do que podem suportar." - 1 Coríntios 10:13' },
      { title: 'Vivendo a Palavra', text: 'Ouvir sem fazer é construir na areia. O destino da Palavra é a vida. Não apenas o conhecimento, mas a transformação que resulta em ação. Você não termina este devocional onde começou. Viva o que aprendeu.', verse: '"Sede praticantes da palavra, e não somente ouvintes." - Tiago 1:22' },
    ]
  }
];

const VERSES = [
  { text: 'Foge da imoralidade.', ref: '1 CORÍNTIOS 6:18' },
  { text: 'Vigiai e orai, para que não entreis em tentação.', ref: 'MATEUS 26:41' },
  { text: 'Resista ao diabo, e ele fugirá de vós.', ref: 'TIAGO 4:7' },
  { text: 'Tudo posso naquele que me fortalece.', ref: 'FILIPENSES 4:13' },
  { text: 'Não se moldam ao padrão deste mundo.', ref: 'ROMANOS 12:2' },
  { text: 'Se o Filho os libertar, vocês de fato serão livres.', ref: 'JOÃO 8:36' },
  { text: 'O Senhor é a minha força e o meu escudo.', ref: 'SALMOS 28:7' },
  { text: 'Sede fortes e corajosos. Não tenham medo.', ref: 'DEUTERONÔMIO 31:6' },
  { text: 'Porque Deus não nos deu espírito de covardia, mas de poder.', ref: '2 TIMÓTEO 1:7' },
  { text: 'Cria em mim um coração puro, ó Deus.', ref: 'SALMOS 51:10' },
  { text: 'Bem-aventurados os puros de coração.', ref: 'MATEUS 5:8' },
  { text: 'Andai no Espírito, e não satisfareis os desejos da carne.', ref: 'GÁLATAS 5:16' },
];

const PRAYERS = [
  { name: 'Oração de Resistência', text: 'Senhor, neste momento de fraqueza, clamo a Ti. Tu és o meu escudo e a minha força. Ajuda-me a fugir da tentação e a buscar a pureza que só Tu podes dar. Em nome de Jesus, amém.' },
  { name: 'Oração de Libertação', text: 'Pai, em nome de Jesus, declaro que sou livre. O sangue de Cristo me liberta de toda escravidão. Renuncio a todo vício e a toda corrente. Sou filho de Deus — livre, amado e aceito. Amém.' },
  { name: 'Oração de Recomeço', text: 'Senhor, caí. Mas me levanto. Não por minha força, mas pela Tua graça. Perdoa-me, limpa-me e restaura-me. Hoje é um novo dia. A Tua misericórdia é nova a cada manhã. Amém.' },
  { name: 'Oração de Fortalecimento', text: 'Deus, Tu conheces a minha luta. Tu sabes dos meus pontos fracos. Hoje peço que Tu sejas a minha força. Que onde sou fraco, Tu sejas poderoso. Reveste-me com a Tua armadura. Amém.' },
  { name: 'Oração de Gratidão', text: 'Obrigado, Senhor, por cada dia limpo. Cada dia sem ceder é vitória Tua em mim. Obrigado por não me abandonares, por continuar me chamando, por nunca desistires de mim. Amém.' },
];

const EMERGENCY_MESSAGES = [
  { title: 'FOGE DA IMORALIDADE. AGORA.', sub: 'Saia do lugar onde você está. AGORA.' },
  { title: 'FECHA. DESLIGA. SAI.', sub: 'Não negocie. Corte o acesso imediatamente.' },
  { title: 'VOCÊ NÃO É ESCRAVO.', sub: 'Em Cristo você é livre. Declare isso agora.' },
  { title: 'LIGUE PARA ALGUÉM.', sub: 'Quebre o isolamento. Chame um irmão agora.' },
  { title: 'ORE AGORA.', sub: '"Vigiai e orai, para que não entreis em tentação." - Mateus 26:41' },
  { title: 'VAI DAR UMA VOLTA.', sub: 'Mude o ambiente físico agora. Saia de onde está.' },
  { title: 'RESISTA AO DIABO.', sub: '"Resista ao diabo, e ele fugirá de vós." - Tiago 4:7' },
];

let currentEmergencyIdx = 0;
let currentDetailPlan = null;
let currentDetailDayIdx = null;

// ===================== NAV =====================
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));

  const el = document.getElementById('screen-' + screen);
  if (el) el.classList.add('active');

  const navEl = document.getElementById('nav-' + screen);
  if (navEl) navEl.classList.add('active');

  if (screen === 'home') renderHome();
  if (screen === 'radar') renderRadar();
  if (screen === 'devocional') renderDevocional();
  if (screen === 'espiritual') renderEspiritual();
  if (screen === 'emergency') renderEmergency();
}

// ===================== RENDER HOME =====================
function renderHome() {
  document.getElementById('streak-count').textContent = state.streakDays;
  document.getElementById('record-count').textContent = state.recordDays;

  const pct = Math.min((state.streakDays / 90) * 100, 100);
  document.getElementById('streak-bar').style.width = pct + '%';

  const randomVerse = VERSES[Math.floor(Math.random() * VERSES.length)];
  document.getElementById('home-verse').textContent = `"${randomVerse.text}" - ${randomVerse.ref}`;
}

// ===================== RENDER EMERGENCY =====================
function renderEmergency() {
  const msg = EMERGENCY_MESSAGES[currentEmergencyIdx];
  document.getElementById('emergency-msg').textContent = msg.title;
  document.getElementById('emergency-sub').textContent = msg.sub;
}

function nextEmergencyMsg() {
  currentEmergencyIdx = (currentEmergencyIdx + 1) % EMERGENCY_MESSAGES.length;
  renderEmergency();
}

// ===================== RENDER RADAR =====================
function renderRadar() {
  const allRecords = [...state.triggers, ...state.falls.map(f => ({ ...f, type: 'QUEDA' }))];
  const tentativas = state.triggers.length;
  const quedas = state.falls.length;

  document.getElementById('stat-registros').textContent = allRecords.length;
  document.getElementById('stat-tentativas').textContent = tentativas;
  document.getElementById('stat-quedas').textContent = quedas;

  // Build patterns from triggers
  const emotionCount = {};
  const timeCount = {};
  const locationCount = {};
  const dayCount = {};
  const DAYS_PT = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  state.triggers.forEach(t => {
    emotionCount[t.emotion] = (emotionCount[t.emotion] || 0) + 1;
    timeCount[t.time] = (timeCount[t.time] || 0) + 1;
    if (t.location) locationCount[t.location] = (locationCount[t.location] || 0) + 1;
    if (t.day) dayCount[t.day] = (dayCount[t.day] || 0) + 1;
  });

  const topEmotion = Object.entries(emotionCount).sort((a,b) => b[1]-a[1])[0];
  const topTime = Object.entries(timeCount).sort((a,b) => b[1]-a[1])[0];
  const topLocation = Object.entries(locationCount).sort((a,b) => b[1]-a[1])[0];
  const topDay = Object.entries(dayCount).sort((a,b) => b[1]-a[1])[0];

  // Percepções
  const percList = document.getElementById('percepcoes-list');
  percList.innerHTML = '';
  const percs = [];
  if (topEmotion) percs.push(`⚡ Seu gatilho principal é ${topEmotion[0]}`);
  if (topTime) percs.push(`⚡ Você fica mais vulnerável à ${topTime[0]}`);
  if (topLocation) percs.push(`⚡ Cuidado quando estiver no(a) ${topLocation[0]}`);
  if (topDay) percs.push(`⚡ ${topDay[0]} é seu dia mais crítico`);
  if (percs.length === 0) percs.push('⚡ Registre gatilhos para ver percepções');

  percs.forEach(p => {
    const d = document.createElement('div');
    d.className = 'percepcao-item';
    d.textContent = p;
    percList.appendChild(d);
  });

  // Padrões
  const padrList = document.getElementById('padroes-list');
  padrList.innerHTML = '';
  const padroes = [];
  if (topEmotion) padroes.push({ icon: '😩', type: 'EMOÇÃO MAIS FREQUENTE', value: topEmotion[0], sub: `${topEmotion[1]} registro(s) com essa emoção` });
  if (topTime) padroes.push({ icon: '🕐', type: 'HORÁRIO DE RISCO', value: topTime[0], sub: `${topTime[1]} registro(s) nesse período` });
  if (topLocation) padroes.push({ icon: '📍', type: 'LOCAL MAIS PERIGOSO', value: topLocation[0], sub: `${topLocation[1]} registro(s) nesse local` });
  if (topDay) padroes.push({ icon: '📅', type: 'DIA MAIS CRÍTICO', value: topDay[0], sub: `${topDay[1]} registro(s) nesse dia` });

  padroes.forEach(p => {
    const d = document.createElement('div');
    d.className = 'padrao-card';
    d.innerHTML = `
      <div class="padrao-icon">${p.icon}</div>
      <div class="padrao-info">
        <div class="padrao-type">${p.type}</div>
        <div class="padrao-value">${p.value}</div>
        <div class="padrao-sub">${p.sub}</div>
      </div>
    `;
    padrList.appendChild(d);
  });

  // Recentes
  const recList = document.getElementById('recentes-list');
  recList.innerHTML = '';
  const recent = [...state.triggers.slice(-5).reverse(), ...state.falls.slice(-5).reverse()]
    .slice(0, 8);

  if (recent.length === 0) {
    recList.innerHTML = '<p style="color:var(--text-dim);font-size:13px;padding:8px 0">Nenhum registro ainda.</p>';
    return;
  }

  state.triggers.slice(-5).reverse().forEach(t => {
    const isQueda = t.type === 'QUEDA';
    const d = document.createElement('div');
    d.className = 'recente-item';
    d.innerHTML = `
      <div class="recente-dot ${isQueda ? 'red' : ''}"></div>
      <div class="recente-body">
        <div class="recente-top">
          <span class="recente-emotion">${t.emotion}</span>
          <span class="recente-badge ${isQueda ? 'red' : ''}">${t.type || 'TENTAÇÃO'}</span>
        </div>
        <div class="recente-meta">${t.location || '—'} · ${t.time} · ${t.day || '—'}</div>
      </div>
    `;
    recList.appendChild(d);
  });
}

// ===================== RENDER DEVOCIONAL =====================
function renderDevocional() {
  if (state.activePlan) {
    document.getElementById('active-plan-view').style.display = 'block';
    document.getElementById('plan-selection-view').style.display = 'none';
    renderActivePlan();
  } else {
    document.getElementById('active-plan-view').style.display = 'none';
    document.getElementById('plan-selection-view').style.display = 'block';
    renderPlanSelection();
  }
}

function renderPlanSelection() {
  const list = document.getElementById('plans-list');
  list.innerHTML = '';
  PLANS.forEach(plan => {
    const d = document.createElement('div');
    d.className = 'plan-card';
    d.innerHTML = `
      <div class="plan-card-icon">${plan.icon}</div>
      <div class="plan-card-body">
        <div class="plan-card-title">${plan.title}</div>
        <div class="plan-card-tags">${plan.tags.join(' · ')}</div>
        <div class="plan-card-desc">${plan.desc}</div>
        <div class="plan-card-footer">
          <span class="plan-days-label">${plan.days} DIAS</span>
          <button class="btn-emergency" style="width:auto;padding:10px 18px;font-size:12px" onclick="startPlan('${plan.id}')">INICIAR PLANO</button>
        </div>
      </div>
    `;
    list.appendChild(d);
  });
}

function startPlan(planId) {
  state.activePlan = planId;
  state.completedDays = [];
  saveState();
  renderDevocional();
}

function abandonPlan() {
  if (confirm('Tem certeza que quer abandonar o plano?')) {
    state.activePlan = null;
    state.completedDays = [];
    saveState();
    renderDevocional();
  }
}

function renderActivePlan() {
  const plan = PLANS.find(p => p.id === state.activePlan);
  if (!plan) return;

  const completed = state.completedDays.length;
  const pct = Math.round((completed / plan.days) * 100);

  document.getElementById('active-plan-name').textContent = plan.title;
  document.getElementById('active-plan-tags').textContent = plan.tags.join(' · ');
  document.getElementById('active-plan-progress-text').textContent = `${completed} DE ${plan.days} DIAS`;
  document.getElementById('active-plan-pct').textContent = pct + '%';
  document.getElementById('active-plan-bar').style.width = pct + '%';

  const daysList = document.getElementById('days-list');
  daysList.innerHTML = '';

  plan.daysList.forEach((day, i) => {
    const dayNum = i + 1;
    const isCompleted = state.completedDays.includes(dayNum);
    const isActive = dayNum === completed + 1;
    const isLocked = !isCompleted && !isActive;

    const d = document.createElement('div');
    d.className = `day-item ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`;

    if (!isLocked) {
      d.onclick = () => openDayDetail(plan.id, i);
    }

    d.innerHTML = `
      <div class="day-num-badge ${isCompleted ? 'completed' : isActive ? 'active' : ''}">
        ${isCompleted ? '✓' : isLocked ? '🔒' : dayNum}
      </div>
      <div class="day-info">
        <div class="day-label">DIA ${dayNum}</div>
        <div class="day-title-text">${day.title}</div>
      </div>
      ${!isLocked ? '<div class="day-arrow">›</div>' : ''}
    `;
    daysList.appendChild(d);
  });
}

function openDayDetail(planId, dayIdx) {
  currentDetailPlan = planId;
  currentDetailDayIdx = dayIdx;

  const plan = PLANS.find(p => p.id === planId);
  const day = plan.daysList[dayIdx];
  const dayNum = dayIdx + 1;
  const isCompleted = state.completedDays.includes(dayNum);

  document.getElementById('day-detail-num').textContent = `DIA ${dayNum}`;
  document.getElementById('day-detail-title').textContent = day.title;
  document.getElementById('day-detail-text').textContent = day.text;
  document.getElementById('day-detail-verse').textContent = day.verse;

  const btn = document.getElementById('btn-complete-day');
  if (isCompleted) {
    btn.textContent = '✅ CONCLUÍDO';
    btn.disabled = true;
    btn.style.opacity = '0.5';
  } else {
    btn.textContent = '✅ CONCLUIR DIA';
    btn.disabled = false;
    btn.style.opacity = '1';
  }

  navigate('day-detail');
}

function completeDay() {
  const dayNum = currentDetailDayIdx + 1;
  if (!state.completedDays.includes(dayNum)) {
    state.completedDays.push(dayNum);
    state.streakDays = Math.max(state.streakDays, state.completedDays.length);
    if (state.streakDays > state.recordDays) state.recordDays = state.streakDays;
    saveState();
  }
  navigate('devocional');
}

// ===================== RENDER ESPIRITUAL =====================
function renderEspiritual() {
  const versesList = document.getElementById('verses-list');
  versesList.innerHTML = '';
  VERSES.forEach(v => {
    const d = document.createElement('div');
    d.className = 'verse-card';
    d.innerHTML = `<div class="verse-text">" ${v.text} "</div><div class="verse-ref">${v.ref}</div>`;
    versesList.appendChild(d);
  });

  const prayersList = document.getElementById('prayers-list');
  prayersList.innerHTML = '';
  PRAYERS.forEach(p => {
    const d = document.createElement('div');
    d.className = 'prayer-item';
    d.innerHTML = `<span class="prayer-name">${p.name}</span><span class="prayer-arrow">›</span>`;
    d.onclick = () => showPrayModalWithText(p.name, p.text);
    prayersList.appendChild(d);
  });
}

// ===================== MODALS =====================
function showTriggerModal() {
  document.getElementById('modal-trigger').style.display = 'flex';
}
function closeTriggerModal() {
  document.getElementById('modal-trigger').style.display = 'none';
}

function saveTrigger() {
  const emotion = document.getElementById('trigger-emotion').value;
  const location = document.getElementById('trigger-location').value.trim();
  const time = document.getElementById('trigger-time').value;
  const type = document.getElementById('trigger-type').value;

  const DAYS_PT = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const day = DAYS_PT[new Date().getDay()];

  state.triggers.push({ emotion, location, time, day, type });
  saveState();
  closeTriggerModal();
  renderRadar();
}

function showFallModal() {
  document.getElementById('modal-fall').style.display = 'flex';
}
function closeFallModal() {
  document.getElementById('modal-fall').style.display = 'none';
}

function saveFall() {
  const note = document.getElementById('fall-note').value;
  const DAYS_PT = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const day = DAYS_PT[new Date().getDay()];

  state.falls.push({ note, day, date: new Date().toISOString() });
  state.streakDays = 0;
  saveState();
  closeFallModal();
  renderHome();
}

function showPrayModal() {
  const p = PRAYERS[0];
  document.getElementById('modal-pray').querySelector('.modal-title').textContent = p.name;
  document.getElementById('pray-text').textContent = p.text;
  document.getElementById('modal-pray').style.display = 'flex';
}

function showPrayModalWithText(name, text) {
  document.getElementById('modal-pray').querySelector('.modal-title').textContent = name;
  document.getElementById('pray-text').textContent = text;
  document.getElementById('modal-pray').style.display = 'flex';
}

function closePrayModal() {
  document.getElementById('modal-pray').style.display = 'none';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
});

// ===================== INIT =====================
navigate('home');

// ===================== PWA — Service Worker =====================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

