# Fred Koehler Gallery White — Implementation Plan

## Scope

Build an early, front-end-only single-page portfolio from the approved Gallery White direction and the supplied Google Drive folder. The current intake is one hero file, ten book covers, and twenty portfolio artworks. WIP assets and the approved headshot will remain clearly marked placeholders until supplied.

## Serving approach

- **Static Vite + React + TypeScript** build; no server or database.
- Vite produces `dist/` containing `index.html` and versioned JavaScript/CSS assets.
- Static deployment is appropriate because all page content is currently supplied at build time and interactions run in the browser.
- Published static routes will use `/assets/*` immutable caching and a static SPA fallback for `/*`. The one current application route is `/`.
- The project will expose `/manus-routes.json` directly from `public/`.

## Project structure

```text
src/
  components/       Header, SectionHeading, BooksShelf, PortfolioGrid, Lightbox, WipFeature, Contact
  data/             Immutable asset manifest and display metadata
  styles/           Tokens, layout, responsive rules, reduced-motion rules
  App.tsx           Single-page composition and lightbox state
public/
  assets/           Byte-for-byte Drive downloads, grouped by source category
  manus-routes.json Route declaration
  favicon.svg       Project-specific deterministic vector logo
ideas.md            Approved visual design brief
plan.md             Implementation plan
```

## Asset integrity rules

1. Download source images from Drive directly into `public/assets/` without image conversion, compression, color work, cropping, retouching, or AI processing.
2. Record Drive file ID, source file name, local byte size, SHA-256 checksum, pixel dimensions, and display section in `asset-manifest.json`.
3. Use CSS presentation only. Portfolio grid uses natural image ratio; the lightbox uses the exact local source image. Hero uses the supplied hero source as a responsive background/image element with no source modification.
4. Do not call image-generation or image-editing tooling on any supplied artwork.

## Feature plan

### Header and hero

- Fixed compact header with section anchor links: Work, Books, School Visits, About & Contact.
- One actual supplied header image in a full visual hero, with positioning statement and three in-page actions.
- No post-hero artwork rail.

### Published Books

- A semantic scroll region with `overflow-x: auto`, pointer drag support, scroll snapping, and hidden but still keyboard-accessible scrolling behavior.
- Covers display as provided and retain individual aspect ratios; no perspective transforms, mockup framing, purchase links, or arrows.

### Selected Portfolio and lightbox

- Responsive CSS column/grid presentation for all supplied artwork at natural ratios, avoiding destructive crops.
- Subtle scale hover only in `@media (hover: hover) and (pointer: fine)`.
- A dialog-style lightbox with close, previous, next, Escape, arrow keys, focus management, and non-editing original image display.

### WIP and Contact

- Four alternating image/copy placeholders with a small Rights Available label; they remain deliberate and clearly labeled placeholders until real WIP artwork and copy arrive.
- Contact reasons: School Visits, Editor & Art Director Inquiries, Fan Mail.
- Contact form is presentational only (no submission), with a headshot placeholder.

## Validation

- Use TypeScript/build diagnostics and an HTTP readiness check.
- Confirm `/manus-routes.json` returns valid JSON and HTTP 200.
- Confirm asset manifest checksums match the downloaded immutable files.
- Confirm browser-side lightbox controls and book shelf behaviors with focused code review and existing runtime verification; do not use source imagery in any AI image processing or image-generation path.
