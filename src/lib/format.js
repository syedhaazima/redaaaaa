import { CAPS, CAPX, PROJ, CATS, SECTORS } from '../data/content.js';

export const num = (n) => String(n).padStart(2, '0');
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

export const sector = (i, lang) => SECTORS[i][lang];
export const capName = (i, ar) => (ar ? CAPS[i][3] : CAPS[i][1]);
export const capDesc = (i, ar) => (ar ? CAPS[i][4] : CAPS[i][2]);
export const capList = (i, ar) => {
  const a = CAPX[i];
  const h = a.length / 2;
  return ar ? a.slice(h) : a.slice(0, h);
};
export const projName = (i, ar) => (ar ? PROJ[i][2] : PROJ[i][1]);
export const projLoc = (i, ar) => (ar ? PROJ[i][4] : PROJ[i][3]);
export const projCat = (i, ar) => CATS[PROJ[i][0]][ar ? 1 : 0];
export const img = (name) => `img/${name}.jpg`;
/* Transparent-background logo (PNG) used in the header, footer and preloader */
export const LOGO = 'img/logo.png';
