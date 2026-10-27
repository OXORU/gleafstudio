/* Mode clair / sombre : suit le réglage de l'appareil la première fois, puis retient le choix du visiteur */
(function () {
  var root = document.documentElement, saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  root.dataset.theme = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function () {
    var b = document.querySelector('.theme');
    if (!b) return;
    function sync() {
      var dark = root.dataset.theme === 'dark';
      b.setAttribute('aria-checked', dark);
      b.setAttribute('aria-label', dark ? 'Passer en mode clair' : 'Passer en mode sombre');
    }
    sync();
    b.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      sync();
    });
  });
})();
