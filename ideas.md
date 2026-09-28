# Gallery White — Design Brief

## Chosen direction

**Gallery White** is the approved direction: a high-end, art-first editorial portfolio that lets Fred Koehler’s original illustration do the emotional work while the interface stays quiet, legible, and B2B-ready.

## Core principles

- Treat every supplied artwork file as an **immutable source asset**. The site may resize it responsively for display but must not modify, retouch, recolor, generate from, enhance, re-export, or replace it with AI-generated imagery.
- Use a calm, structured interface to frame work that is intentionally messy, wild, heartfelt, and humorous.
- Make publisher, art-director, librarian, and fan routes obvious without turning the page into a dashboard.
- Keep the single page breathable: gallery pacing, few controls, and no decorative UI noise.

## Color philosophy

| Role | Color |
| --- | --- |
| Paper | `#F6F2E8` warm ivory |
| Ink | `#1C1A18` charcoal-black |
| Seafoam rule / focus | `#5E9C95` |
| Marigold detail | `#D6A83A` |
| Coral detail | `#C8654E` |
| Soft line | `#D7D0C2` |

The supplied original art remains the primary color system; interface colors only support it.

## Layout paradigm

A single vertically paced editorial page:

1. Compact fixed header and full-bleed supplied hero image.
2. Published Books as an unframed, native horizontal cover shelf where each cover retains its natural aspect ratio.
3. Selected Portfolio as an art-first responsive masonry-like grid that preserves full image framing.
4. Works in Progress / Rights Available as four full-width alternating split rows.
5. Contact with three clear reasons to get in touch, a friendly author-headshot placeholder, and a presentational form.
6. Lean footer.

Every section begins with the same left-aligned all-caps label plus a thin seafoam rule.

## Signature elements

- Warm ivory page ground.
- Tight ink wordmark: **FRED KOEHLER**.
- A small custom seafoam lighthouse-and-pencil monogram used as favicon and subtle brand mark; it is an original geometric SVG, not derived from supplied artwork.
- Fine seafoam section rules and compact metadata labels.
- Hairline borders, not cards or shadows.

## Typography

- Headings / navigation: **Plus Jakarta Sans**, tightly tracked and weighty.
- Body / form labels: **Inter**, high legibility at small sizes.
- No display serif, bubble type, script, or faux-handwritten interface fonts—the illustration handles the human texture.

## Interaction philosophy

- Movement is restrained and utilitarian.
- Published covers use the browser’s familiar horizontal scroll/drag behavior with scroll snap; there are no arrows or buy controls.
- Portfolio pieces have only a subtle pointer-device hover enlargement. Selecting a piece opens a full-screen lightbox that displays the same original source file larger, never a processed derivative.
- Lightbox controls are keyboard and touch accessible; Escape and a clearly labeled close button exit it.
- Respect `prefers-reduced-motion`.

## Brand voice

**Curious, capable, wholehearted, and visually literate.** The page should read as a professional illustrator’s working archive—not a children’s retail site and not a generic agency portfolio.

## Asset rule

The Google Drive asset folder is the project’s source of truth. Any future new WIP or headshot will replace only its designated placeholder; it will not be AI-generated or altered by the site build.
