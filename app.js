// app.js — фильтр каталога + лайтбокс (zoom) для скриншотов.
(() => {
  // Фильтр каталога по категории.
  const buttons = document.querySelectorAll('.filters button');
  const items = document.querySelectorAll('.compact');
  buttons.forEach((b) => b.addEventListener('click', () => {
    buttons.forEach((x) => x.classList.remove('active'));
    b.classList.add('active');
    const f = b.dataset.filter;
    items.forEach((li) => {
      li.style.display = (f === 'all' || li.dataset.cat === f) ? '' : 'none';
    });
  }));

  // Лайтбокс: клик по любому .zoomable -> увеличение, Esc/клик по фону -> закрыть.
  const box = document.getElementById('lightbox');
  const img = box.querySelector('img');
  if (!box || !img) return;
  document.querySelectorAll('.zoomable').forEach((fig) => fig.addEventListener('click', () => {
    const src = fig.querySelector('img');
    if (!src) return;
    img.src = src.src;
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
  }));
  const close = () => { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); };
  box.addEventListener('click', close);
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });
})();
