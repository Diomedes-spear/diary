(function () {
  const root = document.getElementById('entries');

  // ---------- language state ----------

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : '';
  }

  function currentLang() {
    // Google's cookie looks like "/ja/en" once a translation is active
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

  // ---------- rendering ----------

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

  function render(list) {
    const lang = currentLang();

    if (!list || list.length === 0) {
      root.innerHTML = '<p class="empty">まだ記録がありません。</p>';
      return;
    }

    const total = list.length;

    root.innerHTML = list
      .map((entry, idx) => {
        const entryNo = pad(total - idx);
        const delay = Math.min(idx * 0.06, 0.3);

        // If this entry has a hand-checked translation for the active
        // language, use it and mark the card "notranslate" so Google's
        // engine leaves it alone. Otherwise leave the original Japanese
        // in place and let Google auto-translate it.
        const manual = entry.translations && entry.translations[lang];
        const displayTitle = manual ? manual.title : entry.title;
        const displayBody = manual ? manual.body : entry.body;
        const notranslateClass = manual ? ' notranslate' : '';

        const title = displayTitle
          ? `<h2 class="entry-title">${escapeHTML(displayTitle)}</h2>`
          : '';
        const status = entry.status ? escapeHTML(entry.status) : '記録済';

        return `
          <article class="entry${notranslateClass}" style="animation-delay:${delay}s">
            <div class="log-line">
              <span class="log-no">ENTRY&nbsp;//&nbsp;${entryNo}</span>
              <span class="sep">·</span>
              <span>${escapeHTML(entry.date || '')}</span>
              <span class="sep">·</span>
              <span>状態: ${status}</span>
            </div>
            ${title}
            <div class="entry-body">${paragraphs(displayBody || '')}</div>
          </article>
        `;
      })
      .join('');
  }

  // ---------- language switch buttons ----------

  function wireLangButtons() {
    const lang = currentLang();
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      if (btn.dataset.lang === lang) btn.classList.add('is-active');
      else btn.classList.remove('is-active');

      btn.addEventListener('click', () => doGTranslate(btn.dataset.lang));
    });
  }

  render(typeof ENTRIES !== 'undefined' ? ENTRIES : []);
  wireLangButtons();
})();
