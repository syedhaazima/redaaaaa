import { useEffect, useRef } from 'react';
import { finePointer, reducedMotion, img } from '../lib/format.js';

/* Desktop-only pointer effects: magnetic buttons and the floating project photo
   on project rows. The normal system mouse pointer is used everywhere (no custom circle). */
export default function Cursor() {
  const floatRef = useRef(null), floatImg = useRef(null);

  useEffect(() => {
    if (!finePointer() || reducedMotion()) return undefined;
    const fl = floatRef.current;
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, fx = cx, fy = cy, raf = 0;
    let mag = null;

    const loop = () => {
      fx += (cx - fx) * 0.1; fy += (cy - fy) * 0.1;
      fl.style.translate = `${fx - 170}px ${fy - 128}px`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const releaseMag = () => {
      if (!mag) return;
      const el = mag;
      el.style.transition = 'transform .6s cubic-bezier(.2,.8,.2,1)';
      el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 600);
      mag = null;
    };

    // Show the photo of the project row under the pointer (also re-checked while scrolling,
    // because rows move under a still mouse and no pointer event fires)
    const showRow = (tg) => {
      const row = tg && tg.closest('.prow');
      if (row) {
        const src = img(row.dataset.img);
        if (!floatImg.current.src.endsWith(src)) floatImg.current.src = src;
        fl.classList.add('on');
      } else {
        fl.classList.remove('on');
      }
    };
    let moved = false;
    const onScroll = () => {
      if (!moved) return;
      const el = document.elementFromPoint(cx, cy);
      showRow(el instanceof Element ? el : null);
    };

    const onMove = (e) => {
      cx = e.clientX; cy = e.clientY; moved = true;
      const tg = e.target instanceof Element ? e.target : null;
      showRow(tg);
      const m = tg && tg.closest('.mag');
      if (m !== mag) releaseMag();
      if (m) {
        mag = m;
        const r = m.getBoundingClientRect();
        m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.3}px,${(e.clientY - r.top - r.height / 2) * 0.4}px)`;
      }
    };
    const onLeave = () => fl.classList.remove('on');
    window.addEventListener('pointermove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div className="float" ref={floatRef} aria-hidden="true"><img ref={floatImg} src={img('towers')} alt="" /></div>
  );
}
