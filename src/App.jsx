import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import Lenis from 'lenis';
import { useLang } from './lib/i18n.jsx';
import { UIContext } from './lib/ui.jsx';
import { SLUG, PROJ, T } from './data/content.js';
import { sector, reducedMotion } from './lib/format.js';
import { gsap, ScrollTrigger, mountPage, playIntro, teardown } from './lib/motion.js';
import { scroller, scrollTop, stopScroll, startScroll } from './lib/scroll.js';

import Header from './components/Header.jsx';
import MenuOverlay from './components/MenuOverlay.jsx';
import Footer from './components/Footer.jsx';
import MobileBar from './components/MobileBar.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import ProjectDrawer from './components/ProjectDrawer.jsx';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Sectors from './pages/Sectors.jsx';
import SectorDetail from './pages/SectorDetail.jsx';
import Projects from './pages/Projects.jsx';
import Partners from './pages/Partners.jsx';
import Contact from './pages/Contact.jsx';

const PAGES = { home: Home, about: About, services: Services, sectors: Sectors, projects: Projects, partners: Partners, contact: Contact };

/* Hash routing: #about, #projects, #sector-oil-gas ... (works on any static host) */
function parseHash() {
  const h = (window.location.hash || '#home').slice(1);
  if (h.startsWith('sector-') && SLUG.includes(h.slice(7))) return { key: 'sectors', sector: SLUG.indexOf(h.slice(7)), id: h };
  if (PAGES[h]) return { key: h, id: h };
  return { key: 'home', id: 'home' };
}

function routeTitle(route, lang) {
  if (route.sector !== undefined) return sector(route.sector, lang).t;
  return T[lang][route.key];
}

/* Renders the current page and runs its scroll animations after it mounts. */
const PageView = memo(function PageView({ route, lang, ar, introNow }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    if (scroller.lenis) scroller.lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    mountPage(ref.current, { ar });
    if (introNow()) playIntro(ref.current);
    return () => teardown();
  }, [route.id, lang]); // eslint-disable-line react-hooks/exhaustive-deps

  const Page = route.sector !== undefined ? SectorDetail : PAGES[route.key];
  return (
    <main id="view" tabIndex={-1} ref={ref}>
      <Page index={route.sector} />
    </main>
  );
});

export default function App() {
  const { lang, ar } = useLang();
  const [route, setRoute] = useState(parseHash);
  const [menuOpen, setMenuOpen] = useState(false);
  const [project, setProject] = useState(null);
  const [pendingSector, setPendingSector] = useState(null);
  const [pendingCity, setPendingCity] = useState(null); // city to open on the Projects map (from the home hero legend)
  const curtainRef = useRef(null);
  const curtainTitle = useRef(null);
  const phase = useRef('boot'); // boot (preloader) | curtain | ready
  const busy = useRef(false);

  // Smooth scrolling (Lenis) synced with GSAP ScrollTrigger
  useEffect(() => {
    if (reducedMotion()) return undefined;
    let lenis;
    try { lenis = new Lenis({ lerp: 0.09, smoothWheel: true }); } catch (e) { return undefined; }
    scroller.lenis = lenis;
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => { gsap.ticker.remove(tick); lenis.destroy(); scroller.lenis = null; };
  }, []);

  // Body classes used by CSS (menu open, drawer open) + pause scrolling under overlays
  useEffect(() => {
    document.body.classList.toggle('menu', menuOpen);
    document.body.classList.toggle('drawer', project !== null);
    if (menuOpen || project !== null) stopScroll(); else startScroll();
  }, [menuOpen, project]);

  // Document title
  useEffect(() => {
    const brand = ar ? 'شركة رداء المطورة' : 'Redaa Developing Company';
    document.title = route.key === 'home' && route.sector === undefined ? brand : `${routeTitle(route, lang)} · ${brand}`;
  }, [route, lang, ar]);

  // Page change with the navy curtain transition
  useEffect(() => {
    if (curtainRef.current) gsap.set(curtainRef.current, { y: 0, yPercent: 100, visibility: 'visible' });
    const onHash = () => {
      const next = parseHash();
      setMenuOpen(false);
      setProject(null);
      if (reducedMotion() || phase.current === 'boot') { setRoute(next); return; }
      if (busy.current) return;
      busy.current = true;
      phase.current = 'curtain';
      const c = curtainRef.current;
      curtainTitle.current.textContent = routeTitle(next, document.documentElement.lang === 'ar' ? 'ar' : 'en');
      const safety = setTimeout(() => { busy.current = false; phase.current = 'ready'; }, 4000);
      gsap.timeline({ onComplete: () => { busy.current = false; clearTimeout(safety); } })
        .set(c, { yPercent: 100 })
        .to(c, { yPercent: 0, duration: 0.7, ease: 'expo.inOut' })
        .to(curtainTitle.current, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }, '-=.15')
        .add(() => { flushSync(() => setRoute(next)); })
        .to(curtainTitle.current, { opacity: 0, duration: 0.25 }, '+=.1')
        .to(c, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' }, '-=.05')
        .add(() => { phase.current = 'ready'; playIntro(document.getElementById('view')); }, '-=.6');
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Clicking a link to the page you're already on scrolls back to the top; Escape closes overlays
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target instanceof Element && e.target.closest('a[href^="#"]');
      if (a && a.getAttribute('href') === (window.location.hash || '#home')) {
        e.preventDefault();
        setMenuOpen(false);
        scrollTop();
      }
    };
    const onKey = (e) => { if (e.key === 'Escape') { setProject(null); setMenuOpen(false); } };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);

  const onPreloaded = useCallback(() => {
    if (phase.current !== 'boot') return;
    phase.current = 'ready';
    playIntro(document.getElementById('view'));
  }, []);

  const ui = useMemo(() => ({
    menuOpen,
    toggleMenu: () => setMenuOpen((m) => !m),
    openProject: (i) => setProject(i),
    pendingSector,
    setPendingSector,
    pendingCity,
    setPendingCity,
  }), [menuOpen, pendingSector, pendingCity]);

  const introNow = useCallback(() => phase.current === 'ready', []);

  return (
    <UIContext.Provider value={ui}>
      <Preloader onDone={onPreloaded} />
      <div className="curtain" ref={curtainRef} aria-hidden="true"><b ref={curtainTitle} /></div>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Header active={route.key} />
      <MenuOverlay active={route.key} />
      <PageView key={`${route.id}-${lang}`} route={route} lang={lang} ar={ar} introNow={introNow} />
      <Footer />
      <MobileBar />
      <ProjectDrawer
        index={project}
        onClose={() => setProject(null)}
        onGo={(d) => setProject((p) => (p + d + PROJ.length) % PROJ.length)}
      />
    </UIContext.Provider>
  );
}
