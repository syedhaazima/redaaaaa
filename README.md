# Redaa Developing Company – Website (React + Vite)

Bilingual (English / Arabic, LTR / RTL) corporate website.

## Run it

Requires Node.js 18 or newer (https://nodejs.org).

1. Extract the ZIP and open the `redaa-react` folder in VS Code.
2. Open a terminal in VS Code (**Terminal → New Terminal**) and run:

```bash
npm install
npm run dev
```

The site opens at http://localhost:5173

`node_modules` and `dist` are not included in this package. `npm install` downloads the libraries for your computer, and `npm run build` creates a fresh `dist` folder.

## Publish it

```bash
npm run build
```

Upload the contents of the `dist` folder to any web host (Netlify, Vercel, cPanel, etc.).
Pages use hash links (`#about`, `#projects`, `#sector-oil-gas`), so no server setup is needed.

## Where things are

| What | File |
|---|---|
| All text, English and Arabic | `src/data/content.js` |
| Styles, colours and typography | `src/styles/global.css` |
| Pages | `src/pages/` (Home, About, Services, Sectors, SectorDetail, Projects, Partners, Contact) |
| Header, menu, footer, mobile bar, project panel, 3D hero, map | `src/components/` |
| Scroll animations | `src/lib/motion.js` |
| Language switching (RTL/LTR) | `src/lib/i18n.jsx` |
| Photos | `public/img/` (replace with high-resolution files of the same name) |
| Logo (transparent) | `public/img/logo.png` (header, footer, loader) |
| Saudi Vision 2030 logo | `public/img/vision2030.png` |

## Enquiry form

The form validates and shows a confirmation, but does not send anywhere yet.
Connect it in `src/pages/Contact.jsx` inside `submit()` (for example to Formspree, EmailJS or your own backend) so enquiries reach info@alredaa.net.

## Libraries

React 18, GSAP + ScrollTrigger (animation), Lenis (smooth scrolling), Three.js (3D hero map).
Fonts load from Google Fonts: Archivo, IBM Plex Sans Arabic, Noto Kufi Arabic.

## Saudi Vision 2030 logo

The footer shows the Saudi Vision 2030 logo from `public/img/vision2030.png`, automatically sized for the dark footer.

## Client corrections (November 2026)

1. "and" replaced with "&" in all visible English text (`src/data/content.js`).
2. Scrolling image glitches fixed (`src/lib/motion.js`, `src/components/Cursor.jsx`, `src/components/Common.jsx`, `src/pages/Home.jsx`, `src/styles/global.css`):
   sector photos in the horizontal scroll no longer lag and jump, the photos load before they slide into view, the project photo preview updates while scrolling, and layout is re-measured once instead of on every image load.
3. Added the Saudi Vision 2030 logo to the footer (`src/components/Footer.jsx`, `public/img/vision2030.png`).
4. CEO name corrected to "Majid Mohammed Al Dossary".
5. Contact form: fields no longer spread apart and the button no longer stretches; the Sector dropdown is aligned on all browsers, including Safari/iPhone; autofill keeps the dark field.
6. Menu overlay made smaller (text size, spacing, preview image) on desktop, tablet and mobile.
7. Logo now uses `public/img/logo.png` with a transparent background (made from the original logo; the original `logo.jpg` is kept).
8. Home hero: "Head office · Dammam" and "Project locations" are clickable. They open the Projects map with that location selected and highlighted.
