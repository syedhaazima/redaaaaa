import { useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { useUI } from '../lib/ui.jsx';
import { PROJ, CATS, CITIES } from '../data/content.js';
import { projName } from '../lib/format.js';
import { Eyebrow, Banner, CtaBlock, ProjectRow } from '../components/Common.jsx';
import { Search } from '../components/Icons.jsx';
import SaudiMap from '../components/SaudiMap.jsx';
import { ScrollTrigger } from '../lib/motion.js';
import { scroller } from '../lib/scroll.js';

export default function Projects() {
  const { t, ar, pick } = useLang();
  const { openProject, pendingCity, setPendingCity } = useUI();
  const fromLegend = pendingCity !== null && CITIES[pendingCity] !== undefined;
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [view, setView] = useState(fromLegend ? 'map' : 'list');
  const [city, setCity] = useState(fromLegend ? pendingCity : 1);
  const mapRef = useRef(null);

  // Arrived from "Head office" / "Project locations" on the home hero: map view, location selected, map scrolled into view
  useEffect(() => {
    if (!fromLegend) return undefined;
    setPendingCity(null);
    const tm = setTimeout(() => {
      ScrollTrigger.refresh();
      const el = mapRef.current;
      if (!el) return;
      if (scroller.lenis) scroller.lenis.scrollTo(el, { offset: -110 });
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 1100);
    return () => clearTimeout(tm);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const counts = { all: PROJ.length };
  PROJ.forEach((p) => { counts[p[0]] = (counts[p[0]] || 0) + 1; });
  const q = query.trim().toLowerCase();
  const list = PROJ.map((p, i) => i).filter((i) =>
    (filter === 'all' || PROJ[i][0] === filter) && (!q || PROJ[i].slice(1).join(' ').toLowerCase().includes(q)));
  const chips = [['all', [t('all'), t('all')]], ...Object.entries(CATS)];
  const c = CITIES[city];
  const switchView = (v) => { setView(v); requestAnimationFrame(() => ScrollTrigger.refresh()); };

  return (
    <>
      <Banner titleHtml={t('prH')} lead={t('prP')} crumbs={[[t('projects')]]} />
      <section className="sec" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="tool">
            <div className="chips">
              {chips.map(([k, v]) => (
                <button key={k} className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)} data-hov>
                  {ar ? v[1] : v[0]}<i>{counts[k]}</i>
                </button>
              ))}
            </div>
            <label className="srch">
              <Search />
              <input id="q" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('srch')} aria-label={t('srch')} />
            </label>
            <div className="views">
              <button aria-pressed={view === 'list'} onClick={() => switchView('list')}>{t('list')}</button>
              <button aria-pressed={view === 'map'} onClick={() => switchView('map')}>{t('map')}</button>
            </div>
          </div>

          <div hidden={view !== 'list'}>
            <ul className="prj">
              {list.length ? list.map((i) => <ProjectRow key={i} i={i} />) : <li className="empty">{t('none')}</li>}
            </ul>
          </div>

          <div className="mapw" hidden={view !== 'map'} ref={mapRef}>
            <div className="mapc"><SaudiMap city={city} onCity={setCity} label="Map of project locations" /></div>
            <div className="mside">
              <Eyebrow>{t('pLoc')}</Eyebrow>
              <h3 className="pl">{pick(c[0], c[1])}</h3>
              <ul>
                {c[5]
                  ? <li><button>{t('hq')}: {t('addr')}</button></li>
                  : c[4].map((i) => <li key={i}><button onClick={() => openProject(i)}>{projName(i, ar)}</button></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CtaBlock />
    </>
  );
}
