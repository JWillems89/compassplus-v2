// ═══════════════════════════════════════════════════════
// COMPASS+ · App Logic
// ═══════════════════════════════════════════════════════

/* ── Language ── */
function setLang(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  ['btn-en','btn-nl'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === 'btn-' + lang);
  });
  ['mbtn-en','mbtn-nl'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === 'mbtn-' + lang);
  });
  renderCal();
}

/* ── Page navigation ── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(initReveal, 60);
}

/* ── Mobile drawer ── */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobile-drawer').classList.add('open');
});
document.getElementById('drawer-close').addEventListener('click', closeMobile);
function closeMobile() {
  document.getElementById('mobile-drawer').classList.remove('open');
}

/* ── Research line tabs ── */
function switchRL(n) {
  document.querySelectorAll('.rl-tab').forEach((t, i) => t.classList.toggle('active', i === n - 1));
  document.querySelectorAll('.rl-panel').forEach((p, i) => p.classList.toggle('active', i === n - 1));
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}
initReveal();

/* ── Render helpers ── */
function getLang() {
  return document.documentElement.getAttribute('data-lang') || 'en';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const lang = getLang();
  return d.toLocaleDateString(lang === 'nl' ? 'nl-BE' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  const lang = getLang();
  return d.toLocaleDateString(lang === 'nl' ? 'nl-BE' : 'en-GB', { year: 'numeric', month: 'short' });
}

/* ── Render: Home news teaser ── */
function renderHomeNews() {
  const el = document.getElementById('home-news');
  if (!el) return;
  const lang = getLang();
  const sorted = [...COMPASS.news].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  el.innerHTML = sorted.map(item => `
    <div class="news-card">
      <div class="news-card-cat">${item['category_' + lang]}</div>
      <div class="news-card-title">${item['title_' + lang]}</div>
      <div class="news-card-date">${formatDateShort(item.date)}</div>
      <div class="news-card-excerpt">${item['excerpt_' + lang] || ''}</div>
      ${item.link ? `<a href="${item.link}" target="_blank" class="news-card-link">${lang === 'nl' ? 'Lees meer →' : 'Read more →'}</a>` : ''}
    </div>
  `).join('');
}

/* ── Render: Full news grid ── */
function renderNewsGrid() {
  const el = document.getElementById('news-full-grid');
  if (!el) return;
  const lang = getLang();
  const sorted = [...COMPASS.news].sort((a, b) => new Date(b.date) - new Date(a.date));
  el.innerHTML = sorted.map(item => `
    <div class="news-card" data-cat-en="${item.category_en}" data-cat-nl="${item.category_nl}">
      <div class="news-card-cat">${item['category_' + lang]}</div>
      <div class="news-card-title">${item['title_' + lang]}</div>
      <div class="news-card-date">${formatDate(item.date)}</div>
      <div class="news-card-excerpt">${item['excerpt_' + lang] || ''}</div>
      ${item.link ? `<a href="${item.link}" target="_blank" class="news-card-link">${lang === 'nl' ? 'Lees meer →' : 'Read more →'}</a>` : ''}
    </div>
  `).join('');
}

/* ── News filter ── */
function filterNews(cat) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.currentTarget.classList.add('active');
  document.querySelectorAll('#news-full-grid .news-card').forEach(card => {
    if (cat === 'all') {
      card.classList.remove('news-hidden');
    } else {
      const match = card.dataset.catEn === cat || card.dataset.catNl === cat;
      card.classList.toggle('news-hidden', !match);
    }
  });
}

/* ── Render: Home events teaser ── */
function renderHomeEvents() {
  const el = document.getElementById('home-events');
  if (!el) return;
  const lang = getLang();
  const today = new Date(); today.setHours(0,0,0,0);
  const upcoming = COMPASS.events
    .filter(e => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 4);
  if (!upcoming.length) {
    el.innerHTML = `<p style="color:rgba(255,255,255,.4);font-size:14px">${lang === 'nl' ? 'Geen komende activiteiten.' : 'No upcoming events.'}</p>`;
    return;
  }
  el.innerHTML = upcoming.map(ev => {
    const d = new Date(ev.date);
    const day = d.getDate();
    const month = d.toLocaleDateString(lang === 'nl' ? 'nl-BE' : 'en-GB', { month: 'short' }).toUpperCase();
    return `
      <div class="event-teaser-card">
        <div class="etd-box">
          <div class="etd-day">${day}</div>
          <div class="etd-month">${month}</div>
        </div>
        <div>
          <div class="etd-type">${ev['type_' + lang]}</div>
          <div class="etd-title">${ev['title_' + lang]}</div>
          <div class="etd-meta">${ev['location_' + lang] || ''}${ev.time ? ' · ' + ev.time : ''}</div>
        </div>
      </div>`;
  }).join('');
}

/* ── Render: Full event list ── */
function renderCalEvents() {
  const el = document.getElementById('cal-events-list');
  if (!el) return;
  const lang = getLang();
  const sorted = [...COMPASS.events].sort((a, b) => new Date(a.date) - new Date(b.date));
  el.innerHTML = sorted.map(ev => {
    const d = new Date(ev.date);
    const day = d.getDate();
    const month = d.toLocaleDateString(lang === 'nl' ? 'nl-BE' : 'en-GB', { month: 'short' }).toUpperCase();
    return `
      <div class="event-card">
        <div class="event-date-box">
          <div class="event-date-day">${day}</div>
          <div class="event-date-month">${month}</div>
        </div>
        <div>
          <div class="event-type">${ev['type_' + lang]}</div>
          <div class="event-title">${ev['title_' + lang]}</div>
          <div class="event-meta">${ev['location_' + lang] || ''}${ev.time ? ' · ' + ev.time : ''}</div>
          ${ev['description_' + lang] ? `<div style="font-size:13px;color:var(--text-mid);margin-top:.4rem;line-height:1.5">${ev['description_' + lang]}</div>` : ''}
        </div>
      </div>`;
  }).join('');
}

/* ── Render: Team grid ── */
function renderTeam() {
  const el = document.getElementById('team-grid');
  if (!el) return;
  const lang = getLang();
  const sorted = [...COMPASS.team].sort((a, b) => a.order - b.order);

  el.innerHTML = sorted.map(m => `
    <div class="team-card">
      <div class="team-avatar">${m.initials}</div>

      <div class="team-name">${m.name}</div>

      <div class="team-role">
        ${m['role_' + lang]}
      </div>

      <div class="team-inst">
        ${m.institution}
        ${m.department ? '<br><small>' + m.department + '</small>' : ''}
      </div>

      <div class="team-badges">
        ${m.research_lines.map(rl => `
          <span class="team-badge">${rl}</span>
        `).join('')}
      </div>

      ${m.researchers && m.researchers.length ? `
        <div class="team-researchers">

          <div class="team-researchers-label">
            ${lang === 'nl' ? 'Onderzoekers' : 'Researchers'}
          </div>

          ${m.researchers.map(r => `
            <div class="team-researcher">${r}</div>
          `).join('')}

        </div>
      ` : ''}

    </div>
  `).join('');
}

/* ── Mini Calendar ── */
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_NL = ['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'];

let calYear, calMonth;
(function initCalDate() {
  const today = new Date();
  calYear = today.getFullYear();
  calMonth = today.getMonth();
})();

function getEventDates() {
  const set = new Set();
  COMPASS.events.forEach(ev => {
    const d = new Date(ev.date);
    set.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
  });
  return set;
}

function renderCal() {
  const label = document.getElementById('cal-label');
  const grid = document.getElementById('mini-cal-days');
  if (!label || !grid) return;

  const lang = getLang();
  const months = lang === 'nl' ? MONTHS_NL : MONTHS_EN;
  label.textContent = months[calMonth] + ' ' + calYear;

  const eventDates = getEventDates();
  const today = new Date();
  const firstDay = new Date(calYear, calMonth, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const prevDays = new Date(calYear, calMonth, 0).getDate();

  let html = '';

  // prev month padding
  for (let i = offset - 1; i >= 0; i--) {
    html += `<div class="cal-day other-month">${prevDays - i}</div>`;
  }

  // current month
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday = i === today.getDate() && calMonth === today.getMonth() && calYear === today.getFullYear();
    const hasEvent = eventDates.has(`${calYear}-${calMonth}-${i}`);
    const cls = ['cal-day', isToday ? 'today' : '', hasEvent ? 'has-event' : ''].filter(Boolean).join(' ');
    html += `<div class="${cls}">${i}</div>`;
  }

  // next month padding
  const total = offset + daysInMonth;
  const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
  for (let i = 1; i <= remaining; i++) {
    html += `<div class="cal-day other-month">${i}</div>`;
  }

  grid.innerHTML = html;
}

function changeMonth(dir) {
  calMonth += dir;
  if (calMonth > 11) { calMonth = 0; calYear++; }
  if (calMonth < 0) { calMonth = 11; calYear--; }
  renderCal();
}


/* ── Netlify Identity redirect for admin ── */
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', user => {
    if (!user) {
      window.netlifyIdentity.on('login', () => { document.location.href = '/admin/'; });
    }
  });
}

/* ── Initial render ── */
function renderAll() {
  renderHomeNews();
  renderHomeEvents();
  renderNewsGrid();
  renderCalEvents();
  renderTeam();
  renderCal();
}

renderAll();

// Re-render on lang change so all dynamic content updates
const _origSetLang = window.setLang;
window.setLang = function(lang) {
  _origSetLang(lang);
  renderAll();
};
