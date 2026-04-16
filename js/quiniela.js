// CONFIGURACIÓN DE SUPABASE
const URL_S = 'https://zweonjpttebhpyvutkfg.supabase.co';
const KEY_S = 'sb_publishable_EyQFvw-0BAogBjw1XdJ0gg_7KTXyJHU';
const sb = supabase.createClient(URL_S, KEY_S);

// VARIABLES DE ESTADO
let isLogin = true;
let activeGroup = 'A';
let predictions = {};
let currentUser = null;

// BASE DE DATOS DE LOS 72 PARTIDOS (12 GRUPOS x 6 PARTIDOS C/U)
const GRUPOS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const PARTIDOS = [
  // GRUPO A
  { id: 'a1', gr: 'A', t1: 'México 🇲🇽', t2: 'Sudáfrica 🇿🇦' },
  { id: 'a2', gr: 'A', t1: 'Corea del Sur 🇰🇷', t2: 'Rep. Checa 🇨🇿' },
  { id: 'a3', gr: 'A', t1: 'México 🇲🇽', t2: 'Corea del Sur 🇰🇷' },
  { id: 'a4', gr: 'A', t1: 'Rep. Checa 🇨🇿', t2: 'Sudáfrica 🇿🇦' },
  { id: 'a5', gr: 'A', t1: 'Sudáfrica 🇿🇦', t2: 'Corea del Sur 🇰🇷' },
  { id: 'a6', gr: 'A', t1: 'Rep. Checa 🇨🇿', t2: 'México 🇲🇽' },

  // GRUPO B
  { id: 'b1', gr: 'B', t1: 'Canadá 🇨🇦', t2: 'Bosnia 🇧🇦' },
  { id: 'b2', gr: 'B', t1: 'Túnez 🇹🇳', t2: 'Paraguay 🇵🇾' },
  { id: 'b3', gr: 'B', t1: 'Canadá 🇨🇦', t2: 'Túnez 🇹🇳' },
  { id: 'b4', gr: 'B', t1: 'Paraguay 🇵🇾', t2: 'Bosnia 🇧🇦' },
  { id: 'b5', gr: 'B', t1: 'Bosnia 🇧🇦', t2: 'Túnez 🇹🇳' },
  { id: 'b6', gr: 'B', t1: 'Paraguay 🇵🇾', t2: 'Canadá 🇨🇦' },

  // GRUPO C
  { id: 'c1', gr: 'C', t1: 'Estados Unidos 🇺🇸', t2: 'Panamá 🇵🇦' },
  { id: 'c2', gr: 'C', t1: 'Nigeria 🇳🇬', t2: 'Noruega 🇳🇴' },
  { id: 'c3', gr: 'C', t1: 'Estados Unidos 🇺🇸', t2: 'Nigeria 🇳🇬' },
  { id: 'c4', gr: 'C', t1: 'Noruega 🇳🇴', t2: 'Panamá 🇵🇦' },
  { id: 'c5', gr: 'C', t1: 'Panamá 🇵🇦', t2: 'Nigeria 🇳🇬' },
  { id: 'c6', gr: 'C', t1: 'Noruega 🇳🇴', t2: 'Estados Unidos 🇺🇸' },

  // GRUPO D
  { id: 'd1', gr: 'D', t1: 'Brasil 🇧🇷', t2: 'Marruecos 🇲🇦' },
  { id: 'd2', gr: 'D', t1: 'Japón 🇯🇵', t2: 'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
  { id: 'd3', gr: 'D', t1: 'Brasil 🇧🇷', t2: 'Japón 🇯🇵' },
  { id: 'd4', gr: 'D', t1: 'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿', t2: 'Marruecos 🇲🇦' },
  { id: 'd5', gr: 'D', t1: 'Marruecos 🇲🇦', t2: 'Japón 🇯🇵' },
  { id: 'd6', gr: 'D', t1: 'Escocia 🏴󠁧󠁢󠁳󠁣󠁴󠁿', t2: 'Brasil 🇧🇷' },

  // GRUPO E
  { id: 'e1', gr: 'E', t1: 'Argentina 🇦🇷', t2: 'Grecia 🇬🇷' },
  { id: 'e2', gr: 'E', t1: 'Camerún 🇨🇲', t2: 'Irán 🇮🇷' },
  { id: 'e3', gr: 'E', t1: 'Argentina 🇦🇷', t2: 'Camerún 🇨🇲' },
  { id: 'e4', gr: 'E', t1: 'Irán 🇮🇷', t2: 'Grecia 🇬🇷' },
  { id: 'e5', gr: 'E', t1: 'Grecia 🇬🇷', t2: 'Camerún 🇨🇲' },
  { id: 'e6', gr: 'E', t1: 'Irán 🇮🇷', t2: 'Argentina 🇦🇷' },

  // GRUPO F
  { id: 'f1', gr: 'F', t1: 'Francia 🇫🇷', t2: 'Perú 🇵🇪' },
  { id: 'f2', gr: 'F', t1: 'Australia 🇦🇺', t2: 'Hungría 🇭🇺' },
  { id: 'f3', gr: 'F', t1: 'Francia 🇫🇷', t2: 'Australia 🇦🇺' },
  { id: 'f4', gr: 'F', t1: 'Hungría 🇭🇺', t2: 'Perú 🇵🇪' },
  { id: 'f5', gr: 'F', t1: 'Perú 🇵🇪', t2: 'Australia 🇦🇺' },
  { id: 'f6', gr: 'F', t1: 'Hungría 🇭🇺', t2: 'Francia 🇫🇷' },

  // GRUPO G
  { id: 'g1', gr: 'G', t1: 'España 🇪🇸', t2: 'Chile 🇨🇱' },
  { id: 'g2', gr: 'G', t1: 'Ghana 🇬🇭', t2: 'Uzbekistán 🇺🇿' },
  { id: 'g3', gr: 'G', t1: 'España 🇪🇸', t2: 'Ghana 🇬🇭' },
  { id: 'g4', gr: 'G', t1: 'Uzbekistán 🇺🇿', t2: 'Chile 🇨🇱' },
  { id: 'g5', gr: 'G', t1: 'Chile 🇨🇱', t2: 'Ghana 🇬🇭' },
  { id: 'g6', gr: 'G', t1: 'Uzbekistán 🇺🇿', t2: 'España 🇪🇸' },

  // GRUPO H
  { id: 'h1', gr: 'H', t1: 'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿', t2: 'Ecuador 🇪🇨' },
  { id: 'h2', gr: 'H', t1: 'Arabia Saudí 🇸🇦', t2: 'Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
  { id: 'h3', gr: 'H', t1: 'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿', t2: 'Arabia Saudí 🇸🇦' },
  { id: 'h4', gr: 'H', t1: 'Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿', t2: 'Ecuador 🇪🇨' },
  { id: 'h5', gr: 'H', t1: 'Ecuador 🇪🇨', t2: 'Arabia Saudí 🇸🇦' },
  { id: 'h6', gr: 'H', t1: 'Gales 🏴󠁧󠁢󠁷󠁬󠁳󠁿', t2: 'Inglaterra 🏴󠁧󠁢󠁥󠁮󠁧󠁿' },

  // GRUPO I
  { id: 'i1', gr: 'I', t1: 'Portugal 🇵🇹', t2: 'Colombia 🇨🇴' },
  { id: 'i2', gr: 'I', t1: 'Jamaica 🇯🇲', t2: 'Argelia 🇩🇿' },
  { id: 'i3', gr: 'I', t1: 'Portugal 🇵🇹', t2: 'Jamaica 🇯🇲' },
  { id: 'i4', gr: 'I', t1: 'Argelia 🇩🇿', t2: 'Colombia 🇨🇴' },
  { id: 'i5', gr: 'I', t1: 'Colombia 🇨🇴', t2: 'Jamaica 🇯🇲' },
  { id: 'i6', gr: 'I', t1: 'Argelia 🇩🇿', t2: 'Portugal 🇵🇹' },

  // GRUPO J
  { id: 'j1', gr: 'J', t1: 'Países Bajos 🇳🇱', t2: 'Uruguay 🇺🇾' },
  { id: 'j2', gr: 'J', t1: 'Costa de Marfil 🇨🇮', t2: 'Honduras 🇭🇳' },
  { id: 'j3', gr: 'J', t1: 'Países Bajos 🇳🇱', t2: 'Costa de Marfil 🇨🇮' },
  { id: 'j4', gr: 'J', t1: 'Honduras 🇭🇳', t2: 'Uruguay 🇺🇾' },
  { id: 'j5', gr: 'J', t1: 'Uruguay 🇺🇾', t2: 'Costa de Marfil 🇨🇮' },
  { id: 'j6', gr: 'J', t1: 'Honduras 🇭🇳', t2: 'Países Bajos 🇳🇱' },

  // GRUPO K
  { id: 'k1', gr: 'K', t1: 'Bélgica 🇧🇪', t2: 'Suiza 🇨🇭' },
  { id: 'k2', gr: 'K', t1: 'Costa Rica 🇨🇷', t2: 'Irak 🇮🇶' },
  { id: 'k3', gr: 'K', t1: 'Bélgica 🇧🇪', t2: 'Costa Rica 🇨🇷' },
  { id: 'k4', gr: 'K', t1: 'Irak 🇮🇶', t2: 'Suiza 🇨🇭' },
  { id: 'k5', gr: 'K', t1: 'Suiza 🇨🇭', t2: 'Costa Rica 🇨🇷' },
  { id: 'k6', gr: 'K', t1: 'Irak 🇮🇶', t2: 'Bélgica 🇧🇪' },

  // GRUPO L
  { id: 'l1', gr: 'L', t1: 'Alemania 🇩🇪', t2: 'Italia 🇮🇹' },
  { id: 'l2', gr: 'L', t1: 'Egipto 🇪🇬', t2: 'Nueva Zelanda 🇳🇿' },
  { id: 'l3', gr: 'L', t1: 'Alemania 🇩🇪', t2: 'Egipto 🇪🇬' },
  { id: 'l4', gr: 'L', t1: 'Nueva Zelanda 🇳🇿', t2: 'Italia 🇮🇹' },
  { id: 'l5', gr: 'L', t1: 'Italia 🇮🇹', t2: 'Egipto 🇪🇬' },
  { id: 'l6', gr: 'L', t1: 'Nueva Zelanda 🇳🇿', t2: 'Alemania 🇩🇪' }
];

/* ═══════════════════════════════════════════
   LÓGICA DE AUTENTICACIÓN
═══════════════════════════════════════════ */
function toggleAuth() {
  isLogin = !isLogin;
  document.getElementById('auth-user').style.display = isLogin ? 'none' : 'block';
  document.getElementById('btn-main-auth').innerText = isLogin ? 'ENTRAR A JUGAR' : 'CREAR CUENTA';
  document.getElementById('auth-toggle').innerText = isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Entra';
}

async function handleAuth() {
  const email = document.getElementById('auth-email').value;
  const pass = document.getElementById('auth-pass').value;
  const user = document.getElementById('auth-user').value;
  const status = document.getElementById('auth-status');

  try {
    if (isLogin) {
      const { error } = await sb.auth.signInWithPassword({ email, password: pass });
      if (error) throw error;
      location.reload();
    } else {
      const { error } = await sb.auth.signUp({
        email,
        password: pass,
        options: { data: { username: user } }
      });
      if (error) throw error;
      status.innerText = "¡Hecho! Revisa tu email para confirmar cuenta.";
      status.style.color = "lightgreen";
    }
  } catch (e) {
    status.innerText = "Error: " + e.message;
    status.style.color = "red";
  }
}

/* ═══════════════════════════════════════════
   INICIALIZACIÓN DE LA APP
═══════════════════════════════════════════ */
async function initApp() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return;

  currentUser = user;
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';

  // Cargar Predicciones existentes del usuario
  const { data } = await sb.from('predictions').select('*').eq('user_id', user.id);
  data?.forEach(p => {
    predictions[p.match_id] = { h: p.score_home, a: p.score_away };
  });

  renderTabs();
  renderMatches();
}

function renderTabs() {
  const div = document.getElementById('group-tabs');
  div.innerHTML = GRUPOS.map(g => `
        <button class="tab-g ${g === activeGroup ? 'active' : ''}" onclick="changeGroup('${g}')">G ${g}</button>
    `).join('');
}

function renderMatches() {
  const list = document.getElementById('matches-list');
  const filtered = PARTIDOS.filter(m => m.gr === activeGroup);

  list.innerHTML = filtered.map(m => {
    const p = predictions[m.id] || { h: '', a: '' };
    return `
            <div class="match-row">
                <div class="t-name">${m.t1}</div>
                <input class="score-in" type="number" value="${p.h}" onchange="save('${m.id}','h',this.value)">
                <span style="color:var(--gold)">VS</span>
                <input class="score-in" type="number" value="${p.a}" onchange="save('${m.id}','a',this.value)">
                <div class="t-name" style="text-align:left">${m.t2}</div>
            </div>`;
  }).join('');
}

/* ═══════════════════════════════════════════
   GUARDADO Y UTILIDADES
═══════════════════════════════════════════ */
async function save(id, side, val) {
  if (!predictions[id]) predictions[id] = { h: 0, a: 0 };
  predictions[id][side] = parseInt(val) || 0;

  const { error } = await sb.from('predictions').upsert({
    user_id: currentUser.id,
    match_id: id,
    score_home: predictions[id].h,
    score_away: predictions[id].a
  }, { onConflict: 'user_id,match_id' });

  if (!error) showToast();
}

function changeGroup(g) {
  activeGroup = g;
  renderTabs();
  renderMatches();
}

function showSection(id) {
  document.querySelectorAll('.app-sec').forEach(s => s.style.display = 'none');
  document.getElementById('sec-' + id).style.display = 'block';
}

function showToast() {
  const t = document.getElementById('toast');
  t.style.display = 'block';
  setTimeout(() => t.style.display = 'none', 1000);
}

function doLogout() {
  sb.auth.signOut().then(() => location.reload());
}

// Arrancar al cargar
window.onload = initApp;