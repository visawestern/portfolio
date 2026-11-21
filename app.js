// app.js — лайтбокс: клик по скриншоту -> зум, Esc/клик по фону -> закрыть.
(() => {
  const box = document.getElementById('lightbox');
  const img = box.querySelector('img');
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
