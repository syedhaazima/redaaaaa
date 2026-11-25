import { useEffect, useState } from 'react';
import { useLang } from '../lib/i18n.jsx';
import { useUI } from '../lib/ui.jsx';
import { NAV } from '../data/content.js';
import { LOGO } from '../lib/format.js';
import { Globe } from './Icons.jsx';

export default function Header({ active }) {
  const { t, ar, toggle } = useLang();
  const { menuOpen, toggleMenu } = useUI();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  // Solid background after scrolling, hide on scroll down, show on scroll up, reading progress bar.
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? y / h : 0);
      setSolid(y > 60);
      if (y > lastY + 2 && y > 300) setHidden(true);
      else if (y < lastY - 2) setHidden(false);
      lastY = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="prog" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>
      <header className={`mast${solid ? ' solid' : ''}${hidden && !menuOpen ? ' hide' : ''}`} id="mast">
        <div className="wrap">
          <a className="logo" href="#home" data-hov>
            <img src={LOGO} alt="" />
            <span><b>{t('logoB')}</b><small>{t('logoS')}</small></span>
          </a>
          <nav className="pri" aria-label="Main">
            {NAV.map((k) => (
              <a key={k} href={`#${k}`} className={active === k ? 'on' : undefined}>
                <span>{t(k)}</span><span aria-hidden="true">{t(k)}</span>
              </a>
            ))}
          </nav>
          <div className="hctl">
            <button className="langb" type="button" onClick={toggle} data-hov>
              <Globe /><span className={`lt${ar ? '' : ' ar'}`}>{t('langTxt')}</span>
            </button>
            <button className="menub" type="button" aria-expanded={menuOpen} aria-controls="ovl" onClick={toggleMenu} data-hov>
              <i><span /><span /></i><span>{menuOpen ? t('closeM') : t('menu')}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
