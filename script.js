const P = window.PROJECTS || [];
const $ = s => document.querySelector(s);
const el = (tag, text, cls) => { const e = document.createElement(tag); if (text) e.textContent = text; if (cls) e.className = cls; return e; };

// Révélation au scroll (traits de la liste, images des projets)
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });

// Image avec repli : si le fichier n'existe pas encore, on affiche un cadre hachuré avec son chemin
function pic(src, alt) {
  const i = new Image();
  i.alt = alt || ''; i.loading = 'lazy';
  i.onerror = () => { const d = el('div', src, 'missing'); i.replaceWith(d); };
  i.src = src;
  return i;
}

// Liste des projets
const list = $('.list'), pv = $('.preview');
P.forEach(p => {
  const li = el('li'), b = el('button');
  b.type = 'button';
  b.append(el('span', p.title, 't'), el('span', [p.type, p.year].filter(Boolean).join(', '), 'm'));
  b.onclick = () => { location.hash = 'p-' + p.id; };
  li.onpointerenter = () => { pv.replaceChildren(pic(p.cover, '')); pv.classList.add('on'); };
  li.onpointerleave = () => pv.classList.remove('on');
  li.append(b); list.append(li); io.observe(li);
});

// Aperçu qui suit le curseur
let x = 0, y = 0, tx = 0, ty = 0;
addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; });
(function loop() {
  x += (tx - x) * .12; y += (ty - y) * .12;
  const left = x > innerWidth - 340 ? x - 304 : x + 24;
  pv.style.transform = `translate(${left}px, ${y - 175}px)`;
  requestAnimationFrame(loop);
})();

// Page projet
const ov = $('.proj'), pi = $('.pi');
function open(id) {
  const p = P.find(q => q.id === id);
  if (!p) return close();
  pi.replaceChildren(el('h3', p.title));
  const dl = el('dl');
  [p.type, p.place, p.year].filter(Boolean).forEach(v => dl.append(el('span', v)));
  pi.append(dl, el('p', p.text));
  const gal = el('div', '', 'gal');
  p.images.forEach(src => { const f = el('figure'); f.append(pic(src, p.title)); gal.append(f); io.observe(f); });
  pi.append(gal);
  pv.classList.remove('on');
  ov.classList.add('open'); ov.scrollTop = 0;
  document.body.classList.add('lock');
}
function close() { ov.classList.remove('open'); document.body.classList.remove('lock'); }
function route() { const m = location.hash.match(/^#p-(.+)$/); m ? open(decodeURIComponent(m[1])) : close(); }
addEventListener('hashchange', route);
addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('open')) location.hash = 'projets'; });
$('.close').onclick = () => { location.hash = 'projets'; };
route();

$('#yr').textContent = new Date().getFullYear();
