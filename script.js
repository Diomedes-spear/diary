(function () {
  const root = document.getElementById('entries');

  // ---------- language state (unchanged) ----------

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : '';
  }

  function currentLang() {
    const raw = getCookie('googtrans');
    if (!raw) return 'ja';
    const parts = raw.split('/').filter(Boolean);
    return parts[1] || 'ja';
  }

  function doGTranslate(lang) {
    if (lang === 'ja') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname;
    } else {
      document.cookie = 'googtrans=/ja/' + lang + '; path=/';
    }
    location.reload();
  }

  // ---------- helpers ----------

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function paragraphs(body) {
    return body
      .trim()
      .split(/\n\s*\n/)
      .map((p) => `<p>${escapeHTML(p.trim())}</p>`)
      .join('');
  }

  function pad(n) {
    return String(n).padStart(3, '0');
  }

  function displayed(entry, lang) {
    const manual = entry.translations && entry.translations[lang];
    return {
      title: manual ? manual.title : entry.title,
      body: manual ? manual.body : entry.body,
      isManual: Boolean(manual)
    };
  }

  function excerpt(body, maxChars) {
    const firstPara = body.trim().split(/\n\s*\n/)[0] || '';
    const flat = firstPara.replace(/\s+/g, '');
    return flat.length > maxChars ? flat.slice(0, maxChars) + '…' : flat;
  }

  // entryNo counts up from the oldest entry (position from the end of
  // the array), so numbers stay stable as new entries are prepended.
  function entryNoFor(idx, total) {
    return total - idx;
  }

  // ---------- list (top) view ----------

  function renderList(list, lang) {
    if (!list || list.length === 0) {
      root.innerHTML = '<p class="empty">まだ記録がありません。</p>';
      return;
    }

    const total = list.length;

    root.innerHTML = list
      .map((entry, idx) => {
        const no = entryNoFor(idx, total);
        const { title, body, isManual } = displayed(entry, lang);
        const status = entry.status ? escapeHTML(entry.status) : '記録済';
        const delay = Math.min(idx * 0.06, 0.3);

        return `
          <article class="entry entry--list${isManual ? ' notranslate' : ''}" style="animation-delay:${delay}s">
            <div class="log-line">
              <span class="log-no">ENTRY&nbsp;//&nbsp;${pad(no)}</span>
              <span class="sep">·</span>
              <span>${escapeHTML(entry.date || '')}</span>
              <span class="sep">·</span>
              <span>状態: ${status}</span>
            </div>
            <a class="entry-title-link" href="#/entry/${no}">${escapeHTML(title || '(無題)')}</a>
            <p class="entry-excerpt">${escapeHTML(excerpt(body || '', 70))}</p>
          </article>
        `;
      })
      .join('');
  }

  // ---------- single-entry (detail) view ----------

  function renderEntry(list, no, lang) {
    const total = list.length;
    const idx = list.findIndex((_, i) => entryNoFor(i, total) === no);

    if (idx === -1) {
      root.innerHTML = `
        <p class="empty">その記録は見つからなかった。</p>
        <a class="back-link" href="#/">← 一覧に戻る</a>
      `;
      return;
    }

    const entry = list[idx];
    const { title, body, isManual } = displayed(entry, lang);
    const status = entry.status ? escapeHTML(entry.status) : '記録済';

    root.innerHTML = `
      <a class="back-link" href="#/">← 一覧に戻る</a>
      <article class="entry${isManual ? ' notranslate' : ''}">
        <div class="log-line">
          <span class="log-no">ENTRY&nbsp;//&nbsp;${pad(no)}</span>
          <span class="sep">·</span>
          <span>${escapeHTML(entry.date || '')}</span>
          <span class="sep">·</span>
          <span>状態: ${status}</span>
        </div>
        <h2 class="entry-title">${escapeHTML(title || '(無題)')}</h2>
        <div class="entry-body">${paragraphs(body || '')}</div>
      </article>
    `;
  }

  // ---------- router ----------

  function parseHash() {
    const h = location.hash.replace(/^#\/?/, '');
    const m = h.match(/^entry\/(\d+)$/);
    if (m) return { view: 'entry', no: parseInt(m[1], 10) };
    return { view: 'list' };
  }

  function route() {
    const lang = currentLang();
    const list = typeof ENTRIES !== 'undefined' ? ENTRIES : [];
    const state = parseHash();

    if (state.view === 'entry') {
      renderEntry(list, state.no, lang);
    } else {
      renderList(list, lang);
    }

    window.scrollTo(0, 0);
    syncLangButtons(lang);
  }

  // ---------- language switch buttons ----------

  function syncLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  }

  function wireLangButtons() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => doGTranslate(btn.dataset.lang));
    });
  }

  window.addEventListener('hashchange', route);
  wireLangButtons();
  route();
})();
