import { Fragment, useEffect, useRef, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { CAPS, CAPIMG, SECTORS, V2030, CLIENTS, CITIES } from '../data/content.js';
import { capName, capDesc, num, img } from '../lib/format.js';
import { Eyebrow, Heading, TextLink, CtaBlock, ProjectRow, SectorCard, Kpis, Marquee } from '../components/Common.jsx';
import { Arrow } from '../components/Icons.jsx';
import HeroGL from '../components/HeroGL.jsx';
import { useUI } from '../lib/ui.jsx';

/* Hero legend: "Head office · Dammam" opens the map on the head office;
   "Project locations" lists the project cities, each opening the map on that location.
   Uses the existing CITIES data and the Projects page map. */
function MapLegend() {
  const { t, pick } = useLang();
  const { setPendingCity } = useUI();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const show = (i) => { setOpen(false); setPendingCity(i); window.location.hash = '#projects'; };

  useEffect(() => {
    if (!open) return undefined;
    const away = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', away);
    document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', away); document.removeEventListener('keydown', esc); };
  }, [open]);

  return (
    <div className="legend" ref={ref}>
      <button type="button" className="lg" onClick={() => show(0)} data-hov>{t('lgHQ')}<i className="w" /></button>
      <button type="button" className="lg" aria-expanded={open} aria-controls="lgList" onClick={() => setOpen((o) => !o)} data-hov>{t('lgP')}<i /></button>
      {open && (
        <ul className="lgl" id="lgList" data-lenis-prevent>
          {CITIES.map((c, i) => (c[5] ? null : (
            <li key={i}><button type="button" onClick={() => show(i)} data-hov>{pick(c[0], c[1])}</button></li>
          )))}
        </ul>
      )}
    </div>
  );
}

function ServiceText({ text }) {
  return text.split('&').map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <span className="svcAmp">&amp;</span>}
      {part}
    </Fragment>
  ));
}

export default function Home() {
  const { t, ar, pick } = useLang();
  const words = t('mani').split(' ');

  return (
    <>
      <section className="hero" id="hero">
        <div className="fall" />
        <HeroGL ar={ar} />
        <div className="vig" />
        <MapLegend />
        <div className="wrap">
          <Eyebrow>EPC · Class 2 · KSA</Eyebrow>
          <Heading as="h1" id="h1" html={t('heroL').join('<br>')} />
          <div className="row2">
            <div>
              <p className="sub" data-fade>{t('heroP')}</p>
              <div className="ctas" data-fade>
                <a className="btn gold mag" href="#projects" data-hov><span>{t('heroB')}</span><Arrow /></a>
                <a className="btn out mag" href="#contact" data-hov><span>{t('rfp')}</span></a>
              </div>
            </div>
            <span className="scue"><i />{t('scroll')}</span>
          </div>
          <div className="facts" data-fade>
            <span>{t('hEst')}<b>2012</b></span>
            <span>{t('hCR')}<b dir="ltr">2050080690</b></span>
            <span>{t('k2')}<b>900+</b></span>
            <span>{t('hIso')}<b>ISO 9001 · 14001 · 45001</b></span>
          </div>
        </div>
      </section>

      <section className="sec mani">
        <div className="wrap">
          <Eyebrow>{t('introE')}</Eyebrow>
          <p id="mani" style={{ marginTop: 34 }}>
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className={w.includes('*') ? 'w g' : 'w'}>{w.replace(/\*/g, '')}</span>{i < words.length - 1 ? ' ' : ''}
              </Fragment>
            ))}
          </p>
          <Kpis items={[
            ['2012', t('k1'), 2012],
            ['900', t('k2'), 900, '+'],
            ['13', pick('Major projects', 'مشروعاً رئيسياً'), 13],
            ['13', pick('Key clients', 'عميلاً رئيسياً'), 13],
          ]} />
          <div style={{ marginTop: 50 }} data-fade><TextLink href="#about">{t('more')}</TextLink></div>
        </div>
      </section>

      <section className="hz" id="hz">
        <div className="wrap head">
          <div className="sh row" style={{ margin: 0 }}>
            <Eyebrow>{t('hzE')}</Eyebrow><span />
            <Heading html={t('hzH')} />
            <TextLink href="#sectors">{t('allSec')}</TextLink>
          </div>
        </div>
        <div className="track" id="track">{SECTORS.map((s, i) => <SectorCard key={i} i={i} eager />)}</div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sh"><Eyebrow>{t('svE')}</Eyebrow><Heading html={t('svH2')} /></div>
          <div className="svc">
            <ol id="svcList">
              {CAPS.map((c, i) => (
                <li key={i} data-i={i} className={i === 0 ? 'on' : undefined}>
                  <span className="n">{num(i + 1)}</span>
                  <h3><ServiceText text={capName(i, ar)} /></h3>
                  <p><ServiceText text={capDesc(i, ar)} /></p>
                </li>
              ))}
            </ol>
            <div className="stick">
              <div className="frame" id="svcFrame">
                {CAPS.map((c, i) => <img key={i} src={img(CAPIMG[i])} alt="" loading="lazy" className={i === 0 ? 'on' : undefined} />)}
                <span className="cap" id="svcCap">{num(1)} / {num(CAPS.length)}</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 50 }}><TextLink href="#services">{t('allSvc')}</TextLink></div>
        </div>
      </section>

      <Marquee />

      <section className="sec">
        <div className="wrap">
          <div className="sh row"><Eyebrow>{t('prE')}</Eyebrow><span /><Heading html={t('prH2')} /><TextLink href="#projects">{t('allPrj')}</TextLink></div>
          <ul className="prj">{[0, 1, 5, 9, 10, 12].map((i) => <ProjectRow key={i} i={i} />)}</ul>
        </div>
      </section>

      <section className="sec v30" style={{ background: 'var(--bg2)' }}>
        <div className="big" aria-hidden="true" data-par2>2030</div>
        <div className="wrap">
          <div className="two c">
            <div className="stack"><Eyebrow>{t('v30E')}</Eyebrow><Heading html={t('v30H')} /></div>
            <p className="lead" data-fade>{t('v30P')}</p>
          </div>
          <div className="g3">
            {V2030.map((v) => (
              <div key={v[0]} data-fade><b>{pick(v[0], v[2])}</b><span className="mut">{pick(v[1], v[3])}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sh"><Eyebrow>{t('cliE')}</Eyebrow><Heading html={t('clH')} /></div>
          <div className="cw">
            {CLIENTS.map((c) => <div key={c[0]} data-fade><b>{pick(c[0], c[1])}</b><span>{pick(c[1], c[0])}</span></div>)}
            <div style={{ background: 'var(--panel)' }}><b style={{ color: 'var(--gold)' }}>{t('ptE')}</b><TextLink href="#partners">{t('partners')}</TextLink></div>
            <div style={{ background: 'var(--panel)' }}><b style={{ color: 'var(--gold)' }}>{t('ceE')}</b><span>ISO 9001 · 14001 · 45001</span></div>
            <div style={{ background: 'var(--panel)' }}><b style={{ color: 'var(--gold)' }}>C.R.</b><span dir="ltr">2050080690</span></div>
          </div>
        </div>
      </section>

      <CtaBlock />
    </>
  );
}
