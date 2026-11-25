import { useEffect, useState } from 'react';
import { reducedMotion, LOGO } from '../lib/format.js';

/* Opening loader with the Redaa logo; slides away when done. */
export default function Preloader({ onDone }) {
  const [k, setK] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(() => reducedMotion());

  useEffect(() => {
    if (gone) { onDone(); return undefined; }
    let v = 0, t1, t2, t3;
    const tick = () => {
      v = Math.min(100, v + Math.random() * 9 + 4);
      setK(v);
      if (v < 100) t1 = setTimeout(tick, 45);
      else t2 = setTimeout(() => { setLeaving(true); onDone(); t3 = setTimeout(() => setGone(true), 1100); }, 180);
    };
    tick();
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;
  return (
    <div className={`pre${leaving ? ' done' : ''}`} aria-hidden="true">
      <div className="in">
        <img src={LOGO} alt="" />
        <div className="bar"><i style={{ transform: `scaleX(${k / 100})` }} /></div>
        <span className="n">{String(Math.round(k)).padStart(3, '0')}</span>
      </div>
    </div>
  );
}
