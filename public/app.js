const API_URL = '/api/topics';
const STORAGE_KEY = 'scrum-theme';

let allTopics = [];
let activeFilter = 'all';
let searchQuery = '';

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const container = $('#topicsContainer');
const searchInput = $('#searchInput');
const filterGroup = $('#filterGroup');
const resultsInfo = $('#resultsInfo');
const modalOverlay = $('#modalOverlay');
const modalTitle = $('#modalTitle');
const modalBody = $('#modalBody');
const modalClose = $('#modalClose');
const themeToggle = $('#themeToggle');
const html = document.documentElement;

/* Theme */
const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem(STORAGE_KEY, next);
});

/* Data */
async function fetchTopics() {
  try {
    container.innerHTML = `
      <div class="loading">
        <div class="spinner"></div>
        <p>Cargando tópicos...</p>
      </div>`;

    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`Error ${res.status}`);

    allTopics = await res.json();
    renderFilters();
    renderTopics();
  } catch (err) {
    container.innerHTML = `
      <div class="error-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        <p>Error al cargar los datos: ${err.message}</p>
      </div>`;
  }
}

/* Filters */
function renderFilters() {
  const categories = [...new Set(allTopics.map((t) => t.category))];
  const labels = {
    evento: 'Eventos', rol: 'Roles', artefacto: 'Artefactos',
    concepto: 'Conceptos', métrica: 'Métricas', práctica: 'Prácticas',
    framework: 'Framework'
  };

  categories.forEach((cat) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = cat;
    btn.textContent = labels[cat] || cat;
    filterGroup.appendChild(btn);

    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = cat;
      renderTopics();
    });
  });
}

/* Filter & Search */
function getFilteredTopics() {
  const q = searchQuery.toLowerCase().trim();
  return allTopics.filter((t) => {
    if (activeFilter !== 'all' && t.category !== activeFilter) return false;
    if (!q) return true;
    return (
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });
}

/* Render */
function renderTopics() {
  const filtered = getFilteredTopics();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p>No se encontraron tópicos con esos criterios.</p>
      </div>`;
    resultsInfo.textContent = '0 resultados';
    return;
  }

  resultsInfo.textContent = `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''}`;

  container.innerHTML = filtered
    .map(
      (t, i) => `
    <div class="topic-card" data-id="${t.id}" style="animation-delay:${i * 0.04}s">
      <div class="topic-card-header">
        <h3>${esc(t.title)}</h3>
        <span class="category-badge ${t.category}">${t.category}</span>
      </div>
      <p class="summary">${esc(t.summary)}</p>
      <div class="keywords-row">
        ${t.keywords.map((k) => `<span class="keyword-tag">${esc(k)}</span>`).join('')}
      </div>
    </div>`
    )
    .join('');

  container.querySelectorAll('.topic-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = parseInt(card.dataset.id);
      const topic = allTopics.find((t) => t.id === id);
      if (topic) openModal(topic);
    });
  });
}

/* Modal */
function openModal(topic) {
  modalTitle.textContent = topic.title;
  modalBody.innerHTML = `
    <span class="category-badge ${topic.category}">${topic.category}</span>
    <p class="description">${esc(topic.description)}</p>
    <div class="meta-label">Palabras clave</div>
    <div class="keywords-row">
      ${topic.keywords.map((k) => `<span class="keyword-tag">${esc(k)}</span>`).join('')}
    </div>`;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* Events */
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderTopics();
});

modalClose.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.addEventListener('DOMContentLoaded', fetchTopics);
