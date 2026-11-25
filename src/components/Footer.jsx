import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { NAV, SECTORS, SLUG } from '../data/content.js';
import { LOGO } from '../lib/format.js';

/* Official Saudi Vision 2030 logo. Place the official file at public/img/vision2030.png
   (white / light version for the dark footer). Until it exists, the text badge is shown instead. */
const V2030_LOGO = 'img/vision2030.png';

export default function Footer() {
  const { t, lang, ar } = useLang();
  const [v30Logo, setV30Logo] = useState(false);
  useEffect(() => {
    const probe = new Image();
    probe.onload = () => setV30Logo(true);
    probe.src = V2030_LOGO;
    return () => { probe.onload = null; };
  }, []);
  return (
    <footer>
      <div className="wrap">
        <div className="g">
          <div>
            <a className="logo" href="#home"><img src={LOGO} alt="" /><span><b>{t('logoB')}</b><small>{t('logoS')}</small></span></a>
            <p className="mut" style={{ marginTop: 20, maxWidth: '36ch', fontSize: '.93rem' }}>{t('fAbout')}</p>
            <div className="iso"><span>ISO 9001:2015</span><span>ISO 14001:2015</span><span>ISO 45001:2018</span></div>
          </div>
          <div><h4>{t('fCo')}</h4><ul>{NAV.map((k) => <li key={k}><a href={`#${k}`}>{t(k)}</a></li>)}</ul></div>
          <div><h4>{t('fSe')}</h4><ul>{SECTORS.map((s, i) => <li key={i}><a href={`#sector-${SLUG[i]}`}>{s[lang].t}</a></li>)}</ul></div>
          <div>
            <h4>{t('fCt')}</h4>
            <ul>
              <li>{t('addr')}</li>
              <li dir="ltr" style={{ textAlign: 'start' }}>+966 13 826 6626</li>
              <li dir="ltr" style={{ textAlign: 'start' }}>info@alredaa.net</li>
              <li dir="ltr" style={{ textAlign: 'start' }}>www.alredaa.net</li>
            </ul>
          </div>
        </div>
        <div className="word" aria-hidden="true">{ar ? 'رداء' : 'REDAA'}</div>
        <div className="coname">
          <span className="en" lang="en" dir="ltr">Redaa Development Company Ltd.</span>
          <span className="ar" lang="ar" dir="rtl">شركة رداء المطورة المحدودة</span>
        </div>
        <div className="bot">
          <span>© 2026 {t('coName')} {t('rights')}</span>
          {v30Logo ? (
            <span className="v2030 logo30">
              <img src={V2030_LOGO} alt={ar ? 'رؤية السعودية 2030' : 'Saudi Vision 2030'} />
            </span>
          ) : (
            <span className="v2030" aria-label={ar ? 'رؤية السعودية 2030' : 'Saudi Vision 2030'}>
              <b dir="ltr">2030</b>
              <span>Saudi Vision<i lang="ar">رؤية السعودية</i></span>
            </span>
          )}
          <span>{t('crL')} <span dir="ltr">2050080690</span> · {t('city')}</span>
        </div>
      </div>
    </footer>
  );
}
