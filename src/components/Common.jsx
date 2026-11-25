import { Fragment } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { useUI } from '../lib/ui.jsx';
import { PIMG, SLUG, SIMG } from '../data/content.js';
import { esc, num, img, projName, projCat, projLoc, sector } from '../lib/format.js';
import { Arrow } from './Icons.jsx';

/* Gold eyebrow label above section headings */
export const Eyebrow = ({ children }) => <span className="ey"><i />{children}</span>;

/* Heading whose words animate in. `html` may contain <em>, <br>, <span class="it"> from the content file. */
export const Heading = ({ as: Tag = 'h2', html, text, className = '', ...rest }) => (
  <Tag className={`split ${className}`.trim()} dangerouslySetInnerHTML={{ __html: html ?? esc(text) }} {...rest} />
);

export const TextLink = ({ href, children }) => (
  <a className="tl" href={href} data-hov>{children}<Arrow /></a>
);

export function CtaBlock() {
  const { t } = useLang();
  return (
    <section className="sec">
      <div className="wrap cta">
        <Eyebrow>{t('ctaE')}</Eyebrow>
        <Heading html={t('ctaH2')} />
        <p className="lead" style={{ textAlign: 'center' }}>{t('ctaSub')}</p>
        <a className="btn gold big mag" href="#contact" data-hov><span>{t('ctaB')}</span><Arrow /></a>
      </div>
    </section>
  );
}

/* Inner-page banner: breadcrumb, big title, lead and optional wide image */
export function Banner({ title, titleHtml, lead, crumbs, image }) {
  const { t } = useLang();
  return (
    <>
      <section className="ban">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="#home">{t('home')}</a>
            {crumbs.map(([label, href]) => (
              <Fragment key={label}>
                <i>/</i>{href ? <a href={`#${href}`}>{label}</a> : <span>{label}</span>}
              </Fragment>
            ))}
          </nav>
          <Heading as="h1" html={titleHtml} text={title} />
          <div className="bt">
            <p className="lead" data-fade>{lead}</p>
            <span className="scue"><i />{t('scroll')}</span>
          </div>
        </div>
      </section>
      {image && (
        <div className="wide" data-wide><img src={img(image)} alt="" data-par /></div>
      )}
    </>
  );
}

export function ProjectRow({ i }) {
  const { ar } = useLang();
  const { openProject } = useUI();
  return (
    <li>
      <button className="prow" data-img={PIMG[i]} onClick={() => openProject(i)}>
        <span className="n">{num(i + 1)}</span>
        <b>{projName(i, ar)}</b>
        <span className="c">{projCat(i, ar)}</span>
        <span className="l">{projLoc(i, ar)}</span>
      </button>
    </li>
  );
}

export function SectorCard({ i, eager = false }) {
  const { lang } = useLang();
  const s = sector(i, lang);
  return (
    <a className="sc" href={`#sector-${SLUG[i]}`} data-view>
      <img src={img(SIMG[i][0])} alt="" loading={eager ? 'eager' : 'lazy'} />
      <span className="ar"><Arrow /></span>
      <div className="in">
        <span className="no">{num(i + 1)} / 08</span>
        <h3>{s.t}</h3>
        <p>{s.i}</p>
      </div>
    </a>
  );
}

export function Kpis({ items }) {
  return (
    <div className="kpis">
      {items.map(([value, label, count, sup]) => (
        <div key={label}>
          <b data-count={count} data-sup={sup}>{value}{sup && <sup>{sup}</sup>}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

/* Big scrolling word band (motion is driven in lib/motion.js) */
export function Marquee() {
  const { t } = useLang();
  const words = t('mq');
  const one = words.map((w, i) => <span key={i} className={i % 2 ? 'o' : ''}>{w}</span>);
  return (
    <div className="mq" aria-hidden="true">
      <div className="t" id="mqT">{[0, 1, 2, 3].map((k) => <Fragment key={k}>{one}</Fragment>)}</div>
    </div>
  );
}
