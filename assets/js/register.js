// Delad renderare för register/npcer.html, register/platser.html, register/fraktioner.html.
// Läser window.REGISTER_CONFIG + window.REGISTER_DATA (inbäddade av bygg/bygg-sidor.js)
// och sköter rader, sök, filter, träffräknare, hash-routad detaljmodal (#typ/slug).
(function () {
  const CONFIG = window.REGISTER_CONFIG;
  const DATA = window.REGISTER_DATA;
  if (!CONFIG || !DATA) return;

  const rowsEl = document.getElementById('rows');
  const countEl = document.getElementById('result-count');
  const filtersEl = document.getElementById('filters');
  const searchEl = document.getElementById('q');
  const modal = document.getElementById('detail-modal');
  const detailBody = document.getElementById('detail-body');
  const closeBtn = document.getElementById('detail-close');

  const activeFilters = {}; // key -> Set<string>
  CONFIG.filters.forEach(f => activeFilters[f.key] = new Set());

  function distinctSorted(key) {
    return [...new Set(DATA.map(item => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'sv'));
  }

  function renderFilters() {
    filtersEl.innerHTML = '';
    CONFIG.filters.forEach(f => {
      const values = distinctSorted(f.key);
      values.forEach(value => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'chip';
        chip.textContent = value;
        chip.setAttribute('aria-pressed', 'false');
        chip.addEventListener('click', () => {
          const active = activeFilters[f.key];
          if (active.has(value)) {
            active.delete(value);
            chip.setAttribute('aria-pressed', 'false');
          } else {
            active.add(value);
            chip.setAttribute('aria-pressed', 'true');
          }
          renderRows();
        });
        filtersEl.appendChild(chip);
      });
    });
    if (CONFIG.filters.length) {
      const clear = document.createElement('button');
      clear.type = 'button';
      clear.className = 'chip chip--clear';
      clear.textContent = 'Rensa';
      clear.addEventListener('click', () => {
        CONFIG.filters.forEach(f => activeFilters[f.key].clear());
        filtersEl.querySelectorAll('.chip[aria-pressed]').forEach(c => c.setAttribute('aria-pressed', 'false'));
        searchEl.value = '';
        renderRows();
      });
      filtersEl.appendChild(clear);
    }
  }

  function matchesSearch(item, query) {
    if (!query) return true;
    const haystacks = CONFIG.columns
      .filter(c => c.role === 'title' || c.role === 'meta')
      .map(c => item[c.key])
      .concat(item.beskrivning) // sök träffar även löptexten, inte bara synliga kolumner
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return haystacks.includes(query);
  }

  function matchesFilters(item) {
    return CONFIG.filters.every(f => {
      const active = activeFilters[f.key];
      if (active.size === 0) return true;
      return active.has(item[f.key]);
    });
  }

  const STATUS_ACCENT = /försvunnen|pågår/i;

  function renderRows() {
    const query = searchEl.value.trim().toLowerCase();
    const filtered = DATA.filter(item => matchesSearch(item, query) && matchesFilters(item));

    rowsEl.innerHTML = '';
    const frag = document.createDocumentFragment();
    filtered.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'row ' + CONFIG.rowClass;
      a.href = '#' + CONFIG.type + '/' + item.slug;
      CONFIG.columns.forEach(col => {
        const span = document.createElement('span');
        const value = item[col.key];
        if (col.role === 'title') {
          span.className = 'row__title';
          span.textContent = value || '';
        } else if (col.role === 'status') {
          span.className = 'row__status' + (value && STATUS_ACCENT.test(value) ? ' row__status--aktiv' : '');
          span.textContent = value || '';
        } else {
          span.className = 'row__meta';
          span.textContent = value || '';
        }
        a.appendChild(span);
      });
      li.appendChild(a);
      frag.appendChild(li);
    });
    rowsEl.appendChild(frag);

    countEl.textContent = filtered.length === 0
      ? 'Inga träffar'
      : `${filtered.length} ${filtered.length === 1 ? 'träff' : 'träffar'}`;
  }

  // Enkel markdown -> HTML för beskrivningsfält (samma regelset som tidigare dashboard).
  function renderMarkdownLite(text) {
    if (!text) return '';
    return text
      .replace(/### (.*?)$/gm, '<h3>$1</h3>')
      .replace(/## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(.*)$/gm, '<p>$1</p>');
  }

  let lastFocused = null;

  function renderDetail(item) {
    const rows = CONFIG.detailFields
      .filter(f => item[f.key])
      .map(f => `<div class="modal-row"><span class="box__label">${f.label}</span><span>${item[f.key]}</span></div>`)
      .join('');

    let imageHtml = '';
    if (CONFIG.type === 'npc' && item.bild) {
      const src = `../kampanjwiki/assets/images/npcs/${item.bild}`;
      imageHtml = `<a href="${src}" target="_blank" rel="noopener" style="float:right; margin-left:16px;">
        <img src="${src}" alt="${item.namn}" style="width:160px; height:160px; object-fit:cover; border:1px solid var(--rule);">
      </a>`;
    }

    const beskrivning = item.beskrivning ? `<div class="prose prose--secondary" style="max-width:none; margin-top:16px;">${renderMarkdownLite(item.beskrivning)}</div>` : '';

    return `
      ${imageHtml}
      <h2 class="page-title" style="font-size: clamp(24px, 3vw, 32px);">${item.namn}</h2>
      <div style="margin-top: 12px; display:flex; flex-direction:column; gap: 4px;">${rows}</div>
      ${beskrivning}
    `;
  }

  function openDetail(item) {
    lastFocused = document.activeElement;
    detailBody.innerHTML = renderDetail(item);
    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
    closeBtn.focus();
  }

  function clearHashAndRestoreFocus() {
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocused) { lastFocused.focus(); lastFocused = null; }
  }

  function closeDetail() {
    if (typeof modal.close === 'function' && modal.open) {
      modal.close();
    } else {
      modal.removeAttribute('open');
    }
    clearHashAndRestoreFocus();
  }

  // Täcker Escape/native cancel, som stänger dialogen utan att gå via closeDetail().
  modal.addEventListener('close', clearHashAndRestoreFocus);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDetail();
  });
  closeBtn.addEventListener('click', closeDetail);

  function syncFromHash() {
    const m = location.hash.match(/^#([^/]+)\/(.+)$/);
    if (!m || m[1] !== CONFIG.type) return;
    const item = DATA.find(d => d.slug === decodeURIComponent(m[2]));
    if (item) openDetail(item);
  }

  window.addEventListener('hashchange', syncFromHash);
  searchEl.addEventListener('input', renderRows);

  // Sökformuläret på startsidan skickar hit ?q=... (GET) — förifyll och rensa URL:en.
  const qParam = new URLSearchParams(location.search).get('q');
  if (qParam) {
    searchEl.value = qParam;
    history.replaceState(null, '', location.pathname + location.hash);
  }

  renderFilters();
  renderRows();
  syncFromHash();
})();
