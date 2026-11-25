/*
  Scroll-driven animation for each page (GSAP + ScrollTrigger).
  mountPage() runs after a page renders; teardown() cleans up before the next one.
*/
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reducedMotion, num } from './format.js';

gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };

const $$ = (q, r = document) => [...r.querySelectorAll(q)];
let ctx = null;
let mm = null;
let mqRAF = 0;
let refreshT = 0;

/* Wrap each word of a heading so it can rise in from a mask. */
export function splitWords(el) {
  if (el.dataset.done) return;
  el.dataset.done = '1';
  const walk = (n) => {
    [...n.childNodes].forEach((c) => {
      if (c.nodeType === 3) {
        const f = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { f.appendChild(document.createTextNode(w)); return; }
          const o = document.createElement('span');
          o.className = 'line';
          const i = document.createElement('span');
          i.className = 'wd';
          i.textContent = w;
          o.appendChild(i);
          f.appendChild(o);
        });
        c.replaceWith(f);
      } else if (c.nodeType === 1 && c.tagName !== 'BR') walk(c);
    });
  };
  walk(el);
}

export function teardown() {
  if (ctx) { ctx.revert(); ctx = null; }
  if (mm) { mm.revert(); mm = null; }
  ScrollTrigger.getAll().forEach((s) => s.kill());
  cancelAnimationFrame(mqRAF);
  clearTimeout(refreshT);
}

/* Entrance animation for the first screen of a page (hero / banner). */
export function playIntro(root) {
  if (!root) return;
  const run = () => {
    $$('.ban h1, #h1', root).forEach((h) =>
      gsap.fromTo($$('.wd', h), { yPercent: 115 }, { yPercent: 0, duration: 1.2, ease: 'expo.out', stagger: 0.06, delay: 0.05 })
    );
    const top = $$('.hero [data-fade], .ban [data-fade], .ban .crumb, .hero .ey, .legend', root);
    gsap.fromTo(top, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08, delay: 0.35 });
  };
  if (reducedMotion()) return;
  ctx ? ctx.add(run) : run();
}

function marquee(ar) {
  const m = document.getElementById('mqT');
  if (!m || reducedMotion()) return;
  let x = 0, dir = ar ? 1 : -1, last = window.scrollY;
  const loop = () => {
    const y = window.scrollY, vel = y - last;
    last = y;
    if (vel !== 0) dir = (vel > 0 ? -1 : 1) * (ar ? -1 : 1);
    const sp = 1 + Math.min(14, Math.abs(vel) * 0.35);
    x += dir * sp;
    const half = m.scrollWidth / 2;
    if (x <= -half) x += half;
    if (x > 0) x -= half;
    m.style.transform = `translate3d(${x}px,0,0)`;
    mqRAF = requestAnimationFrame(loop);
  };
  loop();
}

function setService(root, i, total) {
  $$('#svcList li', root).forEach((l) => l.classList.toggle('on', +l.dataset.i === i));
  $$('#svcFrame img', root).forEach((im, j) => im.classList.toggle('on', j <= i));
  const c = root.querySelector('#svcCap');
  if (c) c.textContent = `${num(i + 1)} / ${num(total)}`;
}

export function mountPage(root, { ar }) {
  teardown();
  if (!root) return;
  $$('.split', root).forEach(splitWords);
  marquee(ar);

  if (reducedMotion()) {
    $$('#mani .w', root).forEach((w) => w.classList.add('on'));
    return;
  }

  ctx = gsap.context(() => {
    // Section headings rise in word by word
    $$('.split', root).forEach((h) => {
      if (h.closest('.ban') || h.id === 'h1') return;
      gsap.fromTo($$('.wd', h), { yPercent: 115 }, {
        yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.05,
        scrollTrigger: { trigger: h, start: 'top 88%', once: true },
      });
    });
    $$('[data-fade]', root).forEach((el) => {
      if (el.closest('.hero') || el.closest('.ban')) return;
      gsap.fromTo(el, { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      });
    });
    // Image wipe reveals
    $$('[data-rev]', root).forEach((el) => {
      const im = el.querySelector('img');
      gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
        clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
      gsap.fromTo(im, { scale: 1.35 }, { scale: 1, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } });
    });
    // Parallax
    $$('[data-par]', root).forEach((im) =>
      gsap.fromTo(im, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: im.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
    );
    $$('[data-wide]', root).forEach((w) =>
      gsap.fromTo(w, { clipPath: 'inset(12% 8% 0% 8%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: w, start: 'top 95%', end: 'top 35%', scrub: true } })
    );
    const big = root.querySelector('[data-par2]');
    if (big) gsap.fromTo(big, { xPercent: ar ? -10 : 10 }, { xPercent: ar ? 10 : -10, ease: 'none', scrollTrigger: { trigger: big.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });

    // Statement text lights up word by word
    const mani = root.querySelector('#mani');
    if (mani) {
      const ws = $$('.w', mani);
      ScrollTrigger.create({
        trigger: mani, start: 'top 80%', end: 'bottom 45%', scrub: true,
        onUpdate: (s) => { const k = Math.round(s.progress * ws.length); ws.forEach((w, i) => w.classList.toggle('on', i < k)); },
      });
    }

    // Horizontal sector scroll (desktop) / swipe (mobile)
    const tr = root.querySelector('#track'), hz = root.querySelector('#hz');
    if (tr && hz) {
      mm = gsap.matchMedia();
      mm.add('(min-width: 901px)', () => {
        hz.classList.remove('native');
        const dist = () => Math.max(0, tr.scrollWidth - window.innerWidth);
        const tw = gsap.to(tr, {
          x: () => (ar ? 1 : -1) * dist(), ease: 'none',
          scrollTrigger: { trigger: hz, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: true, invalidateOnRefresh: true, anticipatePin: 1 },
        });
        // Parallax uses the --px variable (CSS `translate`), so it never fights the card's own hover transform transition
        if (!ar) $$('.sc img', tr).forEach((im) =>
          gsap.fromTo(im, { '--px': '8%' }, { '--px': '-8%', ease: 'none', scrollTrigger: { trigger: im.parentElement, containerAnimation: tw, start: 'left right', end: 'right left', scrub: true } })
        );
        return () => { gsap.set(tr, { x: 0 }); $$('.sc img', tr).forEach((im) => im.style.removeProperty('--px')); };
      });
      mm.add('(max-width: 900px)', () => { hz.classList.add('native'); });
    }

    // Capabilities list with pinned photo
    const sl = root.querySelector('#svcList');
    if (sl) {
      const items = $$('li', sl);
      items.forEach((li) => ScrollTrigger.create({
        trigger: li, start: 'top 55%', end: 'bottom 55%',
        onToggle: (s) => { if (s.isActive) setService(root, +li.dataset.i, items.length); },
      }));
    }

    const ch = root.querySelector('#chart');
    if (ch) gsap.from($$('.f', ch), { scaleY: 0, duration: 1.4, ease: 'expo.out', stagger: 0.15, scrollTrigger: { trigger: ch, start: 'top 80%', once: true } });

    const life = root.querySelector('#life');
    if (life) gsap.fromTo(life.querySelector('.rail'), { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: life, start: 'top 80%', end: 'bottom 50%', scrub: true } });

    // Counting numbers
    $$('[data-count]', root).forEach((el) => {
      const to = +el.dataset.count, sup = el.dataset.sup, from = to > 1000 ? to - 20 : 0, o = { v: from };
      gsap.fromTo(o, { v: from }, {
        v: to, duration: 1.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => { el.innerHTML = Math.round(o.v) + (sup ? `<sup>${sup}</sup>` : ''); },
      });
    });
  }, root);

  requestAnimationFrame(() => ScrollTrigger.refresh());
  // Re-measure once after images settle, instead of on every single image load while the user is scrolling
  const later = () => { clearTimeout(refreshT); refreshT = setTimeout(() => ScrollTrigger.refresh(), 250); };
  $$('img', root).forEach((im) => { if (!im.complete) im.addEventListener('load', later, { once: true }); });
}
