(function () {
  const root = document.getElementById('entries');

  // ---------- UI strings (site chrome, not diary content) ----------

  const UI = {
    ja: {
      title: "Naomichi's Diary",
      subtitle: '複雑に考えてしまう男の日記',
      closing: '— ご覧いただきありがとうございました —',
      empty: 'まだ記録がありません。',
      notFound: 'その記録は見つからなかった。',
      backLink: '← 一覧に戻る',
      status: '状態:',
      statusDefault: '記録済',
      untitled: '(無題)',
      fallbackNote: null // never shown in Japanese, it's the source language
    },
    en: {
      title: "Naomichi's Diary",
      subtitle: 'The diary of a man who overthinks everything',
      closing: '— Thank you for visiting —',
      empty: 'No entries yet.',
      notFound: 'That entry could not be found.',
      backLink: '← Back to list',
      status: 'Status:',
      statusDefault: 'Logged',
      untitled: '(untitled)',
      fallbackNote: 'Not yet translated — showing the Japanese original.'
    },
    uk: {
      title: "Naomichi's Diary",
      subtitle: 'Щоденник чоловіка, який усе надто ускладнює',
      closing: '— Дякуємо, що завітали —',
      empty: 'Записів поки немає.',
      notFound: 'Цей запис не знайдено.',
      backLink: '← Назад до списку',
      status: 'Статус:',
      statusDefault: 'Записано',
      untitled: '(без назви)',
      fallbackNote: 'Ще не перекладено — показано оригінал японською.'
    }
  };

  // ---------- language state (no cookies, no external service) ----------

  function currentLang() {
    return localStorage.getItem('diaryLang') || 'ja';
  }

  function setLang(lang) {
    localStorage.setItem('diaryLang', lang);
    route();
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

  // Resolve what to actually show for an entry in the current language:
  // a hand-made translation if one exists, otherwise the Japanese
  // original plus a note explaining why.
  function displayed(entry, lang) {
    const manual = lang !== 'ja' && entry.translations && entry.translations[lang];
    return {
      title: manual ? manual.title : entry.title,
      body: manual ? manual.body : entry.body,
      isFallback: lang !== 'ja' && !manual
    };
  }

  function excerpt(body, maxChars) {
    const firstPara = body.trim().split(/\n\s*\n/)[0] || '';
    const flat = firstPara.replace(/\s+/g, '');
    return flat.length > maxChars ? flat.slice(0, maxChars) + '…' : flat;
  }

  function entryNoFor(idx, total) {
    return total - idx;
  }

  function fallbackNoteHTML(strings, isFallback) {
    return isFallback && strings.fallbackNote
      ? `<p class="translation-note">${escapeHTML(strings.fallbackNote)}</p>`
      : '';
  }

  // ---------- list (top) view ----------

  function renderList(list, lang, strings) {
    if (!list || list.length === 0) {
      root.innerHTML = `<p class="empty">${escapeHTML(strings.empty)}</p>`;
      return;
    }

    const total = list.length;

    root.innerHTML = list
      .map((entry, idx) => {
        const no = entryNoFor(idx, total);
        const { title, body, isFallback } = displayed(entry, lang);
        const status = entry.status ? escapeHTML(entry.status) : escapeHTML(strings.statusDefault);
        const delay = Math.min(idx * 0.06, 0.3);

        return `
          <article class="entry entry--list" style="animation-delay:${delay}s">
            <div class="log-line">
              <span class="log-no">ENTRY&nbsp;//&nbsp;${pad(no)}</span>
              <span class="sep">·</span>
              <span>${escapeHTML(entry.date || '')}</span>
              <span class="sep">·</span>
              <span>${escapeHTML(strings.status)} ${status}</span>
            </div>
            <a class="entry-title-link" href="#/entry/${no}">${escapeHTML(title || strings.untitled)}</a>
            ${fallbackNoteHTML(strings, isFallback)}
            <p class="entry-excerpt">${escapeHTML(excerpt(body || '', 70))}</p>
          </article>
        `;
      })
      .join('');
  }

  // ---------- single-entry (detail) view ----------

  function renderEntry(list, no, lang, strings) {
    const total = list.length;
    const idx = list.findIndex((_, i) => entryNoFor(i, total) === no);

    if (idx === -1) {
      root.innerHTML = `
        <p class="empty">${escapeHTML(strings.notFound)}</p>
        <a class="back-link" href="#/">${escapeHTML(strings.backLink)}</a>
      `;
      return;
    }

    const entry = list[idx];
    const { title, body, isFallback } = displayed(entry, lang);
    const status = entry.status ? escapeHTML(entry.status) : escapeHTML(strings.statusDefault);

    root.innerHTML = `
      <a class="back-link" href="#/">${escapeHTML(strings.backLink)}</a>
      <article class="entry">
        <div class="log-line">
          <span class="log-no">ENTRY&nbsp;//&nbsp;${pad(no)}</span>
          <span class="sep">·</span>
          <span>${escapeHTML(entry.date || '')}</span>
          <span class="sep">·</span>
          <span>${escapeHTML(strings.status)} ${status}</span>
        </div>
        <h2 class="entry-title">${escapeHTML(title || strings.untitled)}</h2>
        ${fallbackNoteHTML(strings, isFallback)}
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

  function applyChrome(lang, strings) {
    document.documentElement.lang = lang;
    const titleEl = document.getElementById('siteTitle');
    const subtitleEl = document.getElementById('subtitle');
    const closingEl = document.getElementById('closing');
    if (titleEl) titleEl.textContent = strings.title;
    if (subtitleEl) subtitleEl.textContent = strings.subtitle;
    if (closingEl) closingEl.textContent = strings.closing;
    document.title = strings.title;
  }

  function syncLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });
  }

  function route() {
    const lang = currentLang();
    const strings = UI[lang] || UI.ja;
    const list = typeof ENTRIES !== 'undefined' ? ENTRIES : [];
    const state = parseHash();

    applyChrome(lang, strings);

    if (state.view === 'entry') {
      renderEntry(list, state.no, lang, strings);
    } else {
      renderList(list, lang, strings);
    }

    window.scrollTo(0, 0);
    syncLangButtons(lang);
  }

  function wireLangButtons() {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  window.addEventListener('hashchange', route);
  wireLangButtons();
  route();
})();
