(function () {
  const root = document.getElementById('entries');

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
    if (!list || list.length === 0) {
      root.innerHTML = '<p class="empty">まだ記録がありません。</p>';
      return;
    }

    const total = list.length;

    root.innerHTML = list
      .map((entry, idx) => {
        // list is newest-first; log number counts up from the oldest entry
        const entryNo = pad(total - idx);
        const title = entry.title
          ? `<h2 class="entry-title">${escapeHTML(entry.title)}</h2>`
          : '';
        const status = entry.status ? escapeHTML(entry.status) : '記録済';
        const delay = Math.min(idx * 0.06, 0.3);

        return `
          <article class="entry" style="animation-delay:${delay}s">
            <div class="log-line">
              <span class="log-no">ENTRY&nbsp;//&nbsp;${entryNo}</span>
              <span class="sep">·</span>
              <span>${escapeHTML(entry.date || '')}</span>
              <span class="sep">·</span>
              <span>状態: ${status}</span>
            </div>
            ${title}
            <div class="entry-body">${paragraphs(entry.body || '')}</div>
          </article>
        `;
      })
      .join('');
  }

  render(typeof ENTRIES !== 'undefined' ? ENTRIES : []);
})();
