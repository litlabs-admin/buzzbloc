# BuzzBloc design system

Source of truth for how the BuzzBloc site looks and moves. Every value here was read out of the saved Hatch site in `hatch-src/`; nothing is estimated. Copy never comes from this file (see `CLAUDE.md`).

**Source keys used below**

| Key | File |
|---|---|
| `[CSS]` | `hatch-src/cdn.prod.website-files.com/6979136a27d403634304b470/css/hatchai.webflow.shared.d5af01308.min.css` |
| `[HTML:n]` | n-th inline `<style>` block (0-based) in `hatch-src/www.usehatchapp.com/index.html` |
| `[JS:sN]` | N-th inline `<script>` (0-based) in the same `index.html` |
| `[CC]` | Hero widget markup rendered inside `<code-island>` in `index.html` |
| `[SHOT]` | `screencapture-usehatchapp-2026-10-12-21_16_51.pdf` |
| `[COPY]` | `BuzzBloc_Complete_Website_Copy-updated.docx` |
| `[CHAPEAU]` | `D:\litlabs\Chapeau-website` (legal-page layout reference only) |

---

## 1. Colour

### 1.1 Primitives `[CSS :root]`

| Token | Hex | | Token | Hex |
|---|---|---|---|---|
| `brand-950` | `#0f281b` | | `slate-50` | `#f9f8f6` |
| `brand-900` | `#143222` | | `slate-100` | `#f4f2ee` |
| `brand-800` | `#2b4539` | | `slate-200` | `#cfceca` |
| `brand-700` | `#2c5e44` | | `slate-300` | `#b6b0a4` |
| `brand-600` | `#3a7958` | | `slate-400` | `#9a958b` |
| `brand-500` | `#48926b` | | `slate-500` | `#7d7971` |
| `brand-400` | `#56ab7f` | | `slate-600` | `#646059` |
| `brand-300` | `#64c693` | | `slate-700` | `#4b4943` |
| `brand-200` | `#72e1a8` | | `slate-800` | `#34322e` |
| `brand-100` | `#9ef8c6` | | `slate-900` | `#1d1b19` |
| `brand-50` | `#cffbe1` | | `slate-950` | `#12110f` |
| `ash-50` | `#e2f5f1` | | `grey-50` | `#f5f7f6` |
| `ash-100` | `#caece6` | | `grey-100` | `#ebefec` |
| `ash-200` | `#afd0ca` | | `grey-200` | `#d8e0db` |
| `ash-300` | `#9ab7b2` | | `grey-300` | `#b9c0bb` |
| `ash-400` | `#829b97` | | `grey-400` | `#9ca29e` |
| `ash-500` | `#6b807d` | | `grey-500` | `#808582` |
| `ash-600` | `#536461` | | `grey-600` | `#656966` |
| `ash-700` | `#3e4c49` | | `grey-700` | `#4b4e4c` |
| `ash-800` | `#2b3433` | | `grey-800` | `#333534` |
| `ash-900` | `#161d1c` | | `grey-900` | `#1c1e1d` |
| `ash-950` | `#0d1211` | | `grey-950` | `#121413` |
| `lime-electric` | `#cff900` | | `lime-50` | `#d7ff9e` |
| `red-500` | `#ff2323` | | `red-200` | `#ffc0c0` |
| `white` | `#ffffff` | | `black` | `#000000` |

Other literals: FAQ icon idle `#cfd4d1`, FAQ joined-list divider `#DBDFDD` `[HTML:57]`, footer accordion rule `#2c5e44` `[CSS .footer-accordion_component]`.

Alpha mixes `[CSS :root]`: `brand-950` at 15 / 40 / 80 %, `white` at 15 / 40 / 50 / 80 %, `black` at 10 / 15 / 25 / 30 / 50 / 60 % (all `color-mix(in srgb, X n%, transparent)`).

### 1.2 Themes `[CSS .u-theme-light, .u-theme-dark]`

Sections switch theme by class. Semantic roles the build uses:

| Role | Light | Dark |
|---|---|---|
| page background | `slate-50` | n/a |
| text | `brand-950` | `white` |
| text muted (`text-grey-default`) | `grey-700` | `grey-400` |
| text faded (accordion inactive) | `brand-950` 40 % | `white` 40 % |
| heading accent (`<strong>` in H1–H3) | `ash-200` | `ash-200` |
| surface default | `white` | `brand-950` |
| surface slate (cards) | `slate-100` | `slate-800` |
| surface grey (panels) | `grey-200` | `grey-600` |
| hairline border | `brand-950` 15 % | `white` 15 % |
| button primary bg / text | `brand-950` / `white` | `white` / `brand-950` |
| button primary hover bg | `brand-800` | `slate-100` |
| button primary active bg | `brand-700` | `slate-200` |
| button secondary bg / text | `slate-50` / `brand-950` | `brand-800` / `white` |
| button secondary hover bg | `slate-100` | `brand-700` |
| link text / hover | `brand-950` / `brand-800` | `white` / `slate-100` |
| link icon chip bg / glyph | link text colour / `white` | link text colour / `brand-950` |
| tab label idle / hover / active | `ash-600` / `ash-800` / `brand-950` | `slate-300` / `slate-200` / `white` |
| selection bg / text | `brand-300` / `white` | same |

Gradient overlay `[HTML:2]`: `linear-gradient(33deg, transparent 0%, #000 100%)` at `opacity .3`.
Image overlay `[CSS .u-overlay]`: `color-mix(in srgb, black N%, transparent)`; hero and tab panels use N = 50, small cards N = 10.
Shadow `[HTML:3]`: `0 .25rem .625rem 0 rgba(0,0,0,.1)`. Dropdown shadow `[CSS .nav_dropdown_mega_content]`: `0 4px 5px 0` black 10 %.

---

## 2. Typography

### 2.1 Families and files `[CSS @font-face]`

| Family | Role | Weights | Files (all in `hatch-src/…/6979136a27d403634304b470/`) |
|---|---|---|---|
| Instrument Sans | body, UI | 400, 500, 600, 700 | `…InstrumentSans-Regular.woff2`, `…instrument-sans-full-500-normal.woff2`, `…InstrumentSans-SemiBold.woff2`, `…instrument-sans-custom-700-normal.woff2` |
| Instrument Sans Condensed | H1–H3 | 700 (400 declared, unused) | `…InstrumentSansCondensed-Bold.woff2` (Regular fetched to `hatch-src/_fullres/`) |
| Instrument Sans SemiCondensed | H4–H6, tab labels, nav dropdown titles, footer titles | 400, 700 | `…InstrumentSansSemiCondensed-Regular.woff2`, `…-Bold.woff2` |

Fallback stacks `[CSS :root]`: primary `"Instrument Sans", Arial, sans-serif`; condensed and semi-condensed `…, Georgia, sans-serif`. All faces `font-display: swap`. Load with `next/font/local`.
Body smoothing `[HTML:0]`: `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale`.

### 2.2 Fluid scale `[CSS :root]`

Sizes interpolate linearly between a 23.5rem (376px) and 90rem (1440px) viewport:
`clamp(MIN, calc(MIN + (MAXn − MINn) * ((100vw − 23.5rem) / 66.5)), MAX)`.

| Style | Min → Max | Family | Weight | Line-height | Tracking | Wrap |
|---|---|---|---|---|---|---|
| H1 | 3.125 → 6.875rem | Condensed | 700 | 1 | −0.02em | pretty |
| H2 | 2.5 → 5.5rem | Condensed | 700 | 1 | −0.02em | pretty |
| H3 | 2.125 → 4.375rem | Condensed | 700 | 1 | −0.02em | balance |
| H4 | 1.625 → 2.6875rem | SemiCondensed | 700 | 1.1 | −0.02em | balance |
| H5 | 1.5 → 2rem | SemiCondensed | 700 | 1.1 | −0.02em | balance |
| H6 | 1.25 → 1.75rem | SemiCondensed | 700 | 1.1 | −0.02em | balance |
| text-large | 1.125 → 1.25rem | SemiCondensed | 400 | 1.4 | 0 | pretty |
| text-medium | 1 → 1.125rem (range 20–90rem) | Instrument Sans | 400 | 1.4 | 0 | pretty |
| text-main | 1rem | Instrument Sans | 400 | 1.4 | 0 | pretty |
| text-small | 0.875rem | Instrument Sans | 400 | 1.4 | 0 | pretty |
| disclaimer | 0.75rem | Instrument Sans | 400 | 1.4 | 0 | pretty |
| tab label | 1.44rem (1.25rem ≤ 991px) | SemiCondensed | 600 | n/a | n/a | nowrap |
| button label | 1rem | Instrument Sans | 600 | 1 | 0 | nowrap (wraps ≤ 479px) |
| eyebrow pill | 0.875rem | Instrument Sans | 500 | 1.4 | 0 | n/a |
| FAQ question | 1.25rem | Instrument Sans | 700 | 1.2 | 0 | n/a |

Text blocks are width-limited in `ch` `[CSS .u-text max-width: calc(var(--number)*1ch)]`: H1 20ch, split-header H2 20ch, centred H3 27ch, header paragraph 50ch, body in tabs 60ch.
Heading margins `[CSS .u-text variants]`: H1–H3 top `space-7` / bottom `space-5`; H4–H6 top `space-7` / bottom `space-4`; paragraphs `space-4`. First/last child margins are trimmed to 0 `[HTML:1]`.

---

## 3. Layout

### 3.1 Spacing scale `[CSS :root]` (fluid 376 → 1440px unless a range is given)

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `space-1` | 0.125rem | | `space-9` | 1.5 → 2.5rem (20–90rem) |
| `space-2` | 0.25rem | | `space-10` | 1.5 → 3rem (20–90rem) |
| `space-3` | 0.5rem | | `space-11` | 2 → 4rem (20–90rem) |
| `space-4` | 0.75rem | | `space-12` | 3 → 5rem (20–90rem) |
| `space-5` | 1rem | | `space-13` | 3.5 → 6rem (20–90rem) |
| `space-6` | 1 → 1.25rem | | `space-14` | 4 → 8rem (20–90rem) |
| `space-7` | 1.25 → 1.5rem | | `space-15` | 4.5 → 12rem (20–90rem) |
| `space-8` | 1.25 → 2rem | | | |

Section spacers `[CSS .u-section-spacer]`: `none` 0 · `outside-container` 0.25 → 0.5rem · `small` 2 → 2.5rem · `main` 3.5 → 5rem · `large` 4 → 10rem · `page-top` 6 → 10rem.

### 3.2 Container and grid `[CSS .u-container, :root]`

- Max width `90rem`; width `calc(100% − 2 × margin)`; page margin 1 → 3rem; `container-type: inline-size`.
- Small container `55rem`; medium `70rem` (contact section).
- 12 columns, gutter 1 → 2rem. Split headers use 8 + 4 columns, collapsing to 1 column ≤ 991px.
- Auto-fit grid `[CSS .u-grid-autofit]`: `repeat(auto-fit, minmax(min(max(8rem, (100% − (n−1)·gap)/n), 100%), 1fr))`.

### 3.3 Rounded "outer container" `[CSS .u-outer-container_shape, .outer-container_*]`

Full-bleed sections sit in a shape inset `outside-container` (0.25 → 0.5rem) from each viewport edge, `border-radius: .75rem`, `overflow: clip`. Variants:
- **light-no-texture**: transparent.
- **light-textured**: `Noise.svg` covering the shape behind the content.
- **dark-textured**: blurred photo (`A (1).avif`) + `grains.avif` tiled at 80px `[CSS .noise_overlay]` + the 33° gradient at 30 %.

### 3.4 Radii `[CSS :root]`

`4` 0.25rem (nav) · `8` 0.5rem (cards, icons, chips) · `10` 0.625rem (FAQ items) · `12` 0.75rem (buttons, containers, panels) · `14` 0.875rem (email-style input group) · `16` 1rem (bordered panel) · `20` 1.25rem (hero widget) · `full` 100vw (pills).

### 3.5 Breakpoints

| Width | Source | What changes |
|---|---|---|
| ≥ 70em (1120px) container | `[HTML:6]` | desktop nav shown; below it the mobile nav |
| ≤ 991px | `[CSS]` | split layouts stack, tab pause control hidden, side visuals hidden or swapped for tablet art |
| ≤ 767px | `[CSS]` | footer columns become an accordion, 4-column panel becomes 2 × 2, smaller accordion icons |
| ≤ 479px | `[CSS]` | buttons full width and centred, FAQ padding 1rem, 4-column panel stacks |
| container < 50em / 35em / 20em | `[HTML:8–15]` | card internals |

Tailwind screens: `sm 480px`, `md 768px`, `lg 992px`, `nav 1120px`, `2xl 1440px` (mobile-first equivalents of the above).

`[JS:s13]` uses 1199px for its mobile back-button logic while `[HTML:6]` switches the nav at 70em. The CSS value governs what is visible, so the build uses 1120px.

---

## 4. Components

### 4.1 Buttons `[CSS .button_main_*]`

- **Primary**: padding `.625rem 1.5rem`, radius 0.75rem, 1px border in the background colour, label + icon chip with `gap: 1rem`. Hover swaps to the hover colours over `all .2s ease`; `:active` uses the active colour.
- **Icon chip**: 1.5 × 1.25rem, radius 0.5rem, padding `.125rem .25rem`, arrow glyph. Hover: `translateX(8px)` over `.15s ease`.
- **Secondary**: same shape with the secondary colours; border removed ≤ 767px.
- **Link**: no padding or background, `gap: .625rem`, chip filled with the link colour. Hatch defines a 1px underline that scales in (`transform .3s cubic-bezier(.25,.46,.45,.94)`), but its colour token is transparent in both themes, so nothing is drawn and the build omits it.
- ≤ 479px: full width, centred, label may wrap.
- Button rows `[CSS .u-button-wrapper]`: `margin-top: space-6`, `gap: space-7`, wrap.
- Focus `[HTML:1]`: 0.125rem solid outline in the text colour, offset 0.1875rem.

### 4.2 Eyebrow pill `[CSS .u-eyebrow-*]`

`lime-electric` background, `brand-950` text, pill radius, padding `space-3 space-4`, 0.875rem / 500, no CSS uppercase (the copy supplies capitals). `margin-bottom: space-5`.

### 4.3 Navigation `[CSS .nav_*] [HTML:6] [HTML:7] [JS:s14]`

- Fixed, `z-index: 1000`, padding `space-5` top and bottom, 1px bottom hairline; inner row max 90rem.
- Starts transparent with the dark theme over the hero. After `scrollY > 20` or when a menu is open: light theme, `slate-50` background, padding `space-3`; `padding, background-color .25s ease`.
- Logo slot 6.25rem wide. Links: padding `space-3 space-5`, radius 0.5rem, hover and open background black 10 %, `all .2s`. Chevron 0.75rem rotates 180° over `.2s ease`.
- Dropdown panel: `slate-50`, padding `2.5rem space-8`, shadow as above. Opens with `grid-template-rows 0fr → 1fr` 400ms `cubic-bezier(.2,.8,.2,1)`, opacity 180ms ease, `translateY(−4px → 0)` 220ms. Items: 3rem icon tile (radius 0.5rem, `slate-100`), title text-large SemiCondensed 700, description text-small; hover row background `slate-100` over `.25s`, icon tile inverts to `brand-950`.
- Mobile (< 1120px): 2.75rem square menu button (radius 0.5rem, primary colours), two 0.09375rem bars that cross on open over `.2s`. Menu panel white, revealed by a `clip-path` wipe, 400ms ease `[HTML:6 menuOpen/menuClose]`; link text uses the H1 style; body scroll locked while open.
- Skip link `[CSS .nav_skip_wrap]`: off-screen until focused.

### 4.4 Hero (pattern A) `[CSS .section_text-media-bg-media-text, .text-media-bg-media-text_*]`

Dark outer-container shape, background image `cover` with a 50 % black overlay. Spacers: `page-top` above, `main` below. Two-column flex, `gap: 42px` (24px and stacked ≤ 991px), left column max 47rem with `gap: space-9`. Right slot holds the visual; the Hatch widget card is max 480px, `#f9f8f6`, radius 20px, padding `28px 24px`, shadow `0 2px 4px #1237`, entering with `playerEntrance .8s cubic-bezier(.16,1,.3,1)` (opacity 0 → 1, `translateY(20px) scale(.98)` → none) `[CC] [HTML:17]`.

### 4.5 Image card (pattern C) `[CSS .card_background-image-text, .card_testimonial_*]`

Radius 0.5rem, padding `space-7`, `ash-300` fallback fill, dark theme text, image `cover` behind, title top (H5), footer row pinned to the bottom. Whole card clickable.

### 4.6 Bordered column panel (pattern D) `[CSS .nfclw_*]`

1px hairline border, radius 1rem, padding `space-9` top and bottom; columns separated by 1px hairlines, each padded `space-5`, title H6 centred, `gap: space-10`. ≤ 767px: 2 × 2 with no dividers; ≤ 479px: stacked.

### 4.7 Split header (pattern E header) `[CSS .testimonial-header_*]`

12-column grid, heading block spans 8, optional card spans 4 (hidden ≤ 991px). Paragraph sits `space-10` under the heading (`space-8` ≤ 767px).

### 4.8 Tabs (patterns E and G) `[CSS .tab_*, .tab2_*, .tab3_*] [HTML:30] [JS:s19]`

- Tab row: horizontal, `gap: space-9`, scrolls sideways without a scrollbar; each tab has a 1.25rem icon and label, `padding-bottom: space-6`; 2px progress line at the bottom in the current colour; 1px hairline under the row.
- Behaviour: crossfade `0.6s` ease-out-cubic; autoplay every `5s` with the line filling as progress; Pause/Play toggle (5.63 × 1.88rem, radius 0.5rem, hidden ≤ 991px); autoplay pauses off-screen and on manual selection; honours `prefers-reduced-motion`.
- **E panel**: text column 54 % wide (48px icon, H4, body, link button), image column 4:3 with radius 0.75rem and an overlay UI card. Stacks ≤ 991px.
- **G panel**: dark theme, radius 0.75rem, background photo + 50 % overlay, text max 27.3rem left (eyebrow, H4 in SemiCondensed, body, primary button), UI card max 38.5rem right. Stacks ≤ 991px.

### 4.9 Statement with image (pattern F) `[CSS .testimonial-text-img-testimonial_*]`

Small container (55rem), auto-fit two columns, `gap: space-11`, image 4:5 with radius 0.5rem, text block in H5 style.

### 4.10 Split with dark card (pattern H) `[CSS .section_contact, .contact_*, .form-gv2_component] [HTML:38]`

Container max 70rem; left: eyebrow, H2, hairline divider, paragraph; right: `brand-950` card, radius 0.75rem, inner padding `space-8`, field gap `space-7`. Submit button full width, radius 0.75rem, `ash-300` (hover `ash-200`), 600 weight, `.3s ease`. Error text `#FF2323` on white, 14px / 600, radius 8px. Stacks ≤ 991px.

### 4.11 Big accordion (pattern I) `[CSS .big-accordion_*, .tab2_*] [JS:s22]`

Dark-textured container. Items: 1px top hairline, `padding-top: space-5`, `gap: 2.5rem` between items. Button: plus/minus icon 1.125rem (bars 0.25rem thick; 0.75rem / 0.1625rem ≤ 767px) and an H4 heading, `gap: 4rem` (0.75rem ≤ 767px). Inactive heading at 40 % opacity, active full, `color .4s ease`. Answer indented 5.4rem (1.7rem ≤ 767px), `height .4s`. One item open at a time, first open on load; vertical bar rotates 90° over `.3s ease`; arrow-key, Home and End navigation. Right: 16:10 visual that crossfades (`opacity .25s ease`) to the active item's image; hidden ≤ 991px, where each item's image shows inline instead.

### 4.12 Metrics panel (pattern K) `[CSS .metrics_*] [HTML:53]`

Heading in H4 above. Panel: `grey-200`, radius 0.75rem, padding `space-8 space-9`; three auto-fit columns with `gap: space-5`, 1px left hairline and `padding-left: space-5` on all but the first, centred. Big figure in H1 style, label in H5, small print in disclaimer size. ≤ 991px: one column with bottom hairlines.

### 4.13 FAQ (pattern L) `[CSS .faqs-*, .faq-*] [HTML:5] [HTML:57] [JS:s24]`

Light-textured container. Flex row, `gap: 1.25rem`: photo card left (34.25rem wide, max 44vw; 51.875rem tall, max 66vw; radius 0.75rem; glass CTA box: blur 0.75rem, black 35 %, white 30 % border, radius 0.625rem, padding 1.5rem) and list right (max 48rem, `gap: .5rem`). Item: white, radius 0.625rem, padding `2rem 1.5rem 2rem 2rem` (1.5rem ≤ 991px, 1rem ≤ 479px). Chevron chip 2rem, radius 0.5rem, `#cfd4d1`; open: `brand-950` chip, white glyph rotated 180°, `.25s`. Answer `height .4s cubic-bezier(.25,.46,.45,.94)`. Built on `<details>/<summary>`.
**Joined variant** (no photo): list full width, no gaps, items share 1px `#DBDFDD` dividers.

### 4.14 Closing CTA (pattern M) `[CSS .cta_*]`

Dark outer-container shape, background image + 33° gradient. Grid `.87fr 1fr`, `gap: space-12`, vertically centred; product image bottom-aligned with `margin-top: 3.5rem`. One column ≤ 991px. Spacer `small` above, none below.

### 4.15 Footer `[CSS .footer_*] [JS:s26]`

`brand-950`, radius 0.75rem, inset like the outer container. Top padding `small`; content bottom margin 7.5rem (2rem ≤ 991px, 1.5rem ≤ 767px). Left: logo (8rem) and tagline in text-small. Right: 3-column grid, min 36rem, `gap: space-6`; column title text-large SemiCondensed 700; links text-small, `grey-400` → white with a 1px underline on hover, `.2s ease-in-out`, vertical padding `space-2`. Bottom bar: copyright left, legal links right, padding `space-4` / `space-5`. ≤ 767px: columns become accordions (toggle 0.75rem padding, 1.4rem icon, GSAP `0.3s power1.inOut` in Hatch; the build uses the CSS height transition from 4.13).

---

## 5. Motion summary

Hatch binds no Webflow interactions on this page and has no scroll-entrance animations. GSAP 3.15 is loaded but drives only the footer accordion and a HubSpot banner. The build therefore uses **no animation library**: CSS transitions plus small client components.

| Interaction | Trigger | Properties | Duration / easing | Source |
|---|---|---|---|---|
| Nav state | scroll > 20px | padding, background, theme | .25s ease | `[CSS .nav_component] [JS:s14]` |
| Dropdown | click | grid rows, opacity, translateY −4px | 400ms `cubic-bezier(.2,.8,.2,1)` / 180ms / 220ms | `[HTML:6]` |
| Mobile menu | click | clip-path wipe | 400ms ease | `[HTML:6]` |
| Button | hover, focus | colours; chip `translateX(8px)` | .2s ease; .15s ease | `[CSS .button_main_*]` |
| Link underline | hover | scaleX | .3s `cubic-bezier(.25,.46,.45,.94)` | `[CSS .button_main_line]` |
| Tabs | click, 5s autoplay | opacity crossfade, progress width | .6s ease-out-cubic | `[JS:s19]` |
| Big accordion | click | height, heading colour, icon rotate, image opacity | .4s; .4s ease; .3s ease; .25s ease | `[CSS] [JS:s22]` |
| FAQ | click | height, chip colours, chevron rotate | .4s `cubic-bezier(.25,.46,.45,.94)`; .25s | `[CSS] [HTML:5] [JS:s24]` |
| Card hover | hover | background / overlay | .3s ease-in-out | `[CSS .small-testimonial_wrap]` |
| Hero visual | load | opacity, translateY 20px, scale .98 | .8s `cubic-bezier(.16,1,.3,1)` | `[HTML:17]` |

All motion is disabled under `prefers-reduced-motion: reduce` (Hatch does this in `[JS:s19]` and `[JS:s22]`; the build applies it globally). No animation may change layout after first paint.

---

## 6. BuzzBloc adaptations (owner decisions)

1. **Compact sections.** Sections should fit a normal laptop viewport unless the content needs more. So: section spacing uses `main` (never `large`); the homepage hero headline uses the H2 scale and other page heroes the H3 scale (the H1 scale is unused); hero top padding is the 4rem nav height plus the `main` spacer instead of `page-top`; section headings use H3 and H4; the hero visual is hidden below 992px; the FAQ photo card stretches to the list height, capped at 32rem, instead of 51.875rem; no `min-height: 100vh` anywhere.
2. **Theme and logo.** Hatch palette and fonts unchanged. Logo is the text "BuzzBloc" set in Instrument Sans Condensed 700 until a logo file arrives.
3. **Images.** Hatch's own images are placeholders (section 8). No Hatch customer logos, people, testimonials, ratings or figures appear anywhere `[COPY: Proof]`.
4. **Forms.** UI only; the contact form shows the copy's success message without sending anything until a destination is chosen.
5. **Footer on mobile.** Hatch turns the footer columns into accordions below 768px. The build shows the link groups in a two-column grid instead, so every link is in the page once and visible.
6. **Images with figures or third-party logos are not used.** The Hatch dashboard images, the monitor illustration and the three accordion diagrams show revenue figures or partner logos, which the copy forbids, so they were left out. AVIF files were converted to WebP because the Next.js bundler cannot process AVIF imports.
7. **Dropped Hatch elements:** logo marquee, testimonial sliders, G2 badge, audio player, video modal, email-capture inputs, HubSpot widgets.
9. **Hero fits one screen and uses a CSS illustration.** From 992px the hero height is `100svh` minus the outer inset (min 35rem, max 56rem) and the headline size is also capped by viewport height (11svh on the homepage, 9.5svh elsewhere). The Hatch UI image is replaced by `HeroStory`, an illustration built from HTML and CSS only: a website form is filled and sent, the enquiry arrives, and a calendar slot is booked, on a 12s loop with a three-step progress row. The loop never pauses; hover only lifts the card under the pointer; reduced motion shows the finished state. Its words come from the copy (contact form labels, the three outcome points, "Booked into your calendar"). Colours, radii and shadows are the tokens above; the keyframes are in `app/globals.css` under `.story`.
8. **Legal pages** (`/privacy`, `/terms`, `/cookies`) follow the `[CHAPEAU]` policy layout: centred intro, then a 220px sticky "On this page" list beside the sections (`sticky top-28`, hidden below `md`), with the scroll-spy from `components/insights/ArticleToc.tsx` (active when a heading's top ≤ 130px; active item gets a 2px left border and medium weight, `transition-colors .2s`). Colours and type come from this file, not from Chapeau. Bodies are clearly marked placeholders; no legal text is invented `[COPY: Legal links]`.

---

## 7. Section mapping

Component names are the React components to build. "Composed" means no single Hatch section matches, so the block is assembled from Hatch primitives defined above.

### 7.1 Shared

| Copy block | Component | Hatch pattern |
|---|---|---|
| Header: Websites, Social Media, Get Leads, Services ▾, About, Resources, Let's Talk | `SiteNav` | 4.3, one dropdown listing the 9 supporting services (title + description rows) |
| Footer: Services (12), Company (3), Resources (2), Legal (3) | `SiteFooter` | 4.15; Services split across two columns |

### 7.2 Homepage `/`

| Copy block | Component | Hatch pattern | Note |
|---|---|---|---|
| Hero | `Hero variant="home"` | A | eyebrow pill, H1, two buttons, supporting line as text-small |
| Three service cards | `ServiceCards` | centred H3 + C × 3, static grid | 3 → 1 column ≤ 767px |
| Outcome | `SplitIntro` + `PointsPanel` | E header + K | three points in the K columns, titles in H5 |
| Linked feature cards (9) | `FeatureGrid` | composed: 4.5 radius/padding, 4.2 eyebrow, H6 title, link button | 3 / 2 / 1 columns `[COPY: Placement]`; never a carousel |
| Managed-service | `Statement` | F | button → `/marketing` |
| How it works (3) | `StepsAccordion` | I | numbers from the copy |
| Offer (3) | `OfferCards` | composed from K | price in H3 style, name H6, text, button |
| FAQs (4) | `Faq variant="photo"` | L | |
| Closing CTA | `ClosingCta` | M | |

### 7.3 Main offer pages

| Page | Copy block | Component | Hatch pattern |
|---|---|---|---|
| `/websites` | Hero | `Hero variant="page"` | A |
| | Problem | `SplitIntro` | E header |
| | Benefit cards (3) | `PointsPanel` | K |
| | Feature (6) | `FeatureTabs variant="split"` | E |
| | Offer | `OfferSplit` | H, button in the dark card |
| | Process (3) | `StepsAccordion` | I |
| | FAQs (4), Closing | `Faq`, `ClosingCta` | L, M |
| `/marketing` | Hero, Outcome | `Hero`, `SplitIntro` | A, E header |
| | Feature (6) | `FeatureTabs variant="photo"` | G |
| | Customer-control | `Statement` | F |
| | Package | `OfferSplit` with checklist | H |
| | Optional additions (3) | `OfferCards` | composed from K |
| | FAQs (4), Closing | `Faq`, `ClosingCta` | L, M |
| `/get-leads` | Hero, Customer | `Hero`, `SplitIntro` | A, E header |
| | What they get (4) | `ColumnPanel` | D |
| | How it works (4) | `StepsAccordion` | I |
| | Pilot offer | `OfferSplit` | H |
| | Exclusivity | `Statement` | F |
| | After the pilot | `DarkBand` | I container, header + button only |
| | FAQs (5), Closing + footnote | `Faq`, `ClosingCta` | L, M; footnote in disclaimer style |

### 7.4 Service template (9 pages)

`/social-media-management`, `/google-ads`, `/meta-ads`, `/seo`, `/crm-follow-up`, `/review-management`, `/database-reactivation`, `/remarketing`, `/landing-pages` share one template driven by a content object.

| Copy block | Component | Hatch pattern |
|---|---|---|
| Hero (label, headline, subheading, one button) | `Hero variant="page"` | A |
| Customer outcome | `SplitIntro` | E header |
| What we handle (4–5) | `FeatureRows` | composed: 4.11 item rows, all open (H4 title left, text right) |
| How it works (3) | `ColumnPanel numbered` | D |
| Offer copy | `OfferNote` | composed: 4.6 bordered panel, one paragraph |
| Common questions (3–4) | `Faq variant="joined"` | L joined |
| Closing + Related services | `ClosingCta` + `RelatedLinks` | M + link buttons |

The copy's "three outcome cards" direction has no card copy, so no cards are rendered.

### 7.5 Company pages

| Page | Blocks → components |
|---|---|
| `/about` | `Hero page` · What we believe → `SplitIntro` · How we work (4) → `ColumnPanel` (D) · `ClosingCta` |
| `/pricing` | `Hero page` · Pricing cards (6) → `OfferCards` 3 × 2 · Common questions (3) → `Faq joined` · `ClosingCta` |
| `/contact` | Hero + form → `ContactSplit` (H): headline and subheading left, form in the dark card right |
| `/faqs` | `Hero page` · Questions (8) → `Faq joined` · `ClosingCta` |
| `/resources` | `Hero page` · Categories (4) → `ColumnPanel` (D) · `ClosingCta`. No article cards until real articles exist `[COPY]` |
| `/privacy`, `/terms`, `/cookies` | `LegalPage` (section 6.8), placeholder body |

### 7.6 CTA destinations (derived; the copy names none)

| CTA | Destination |
|---|---|
| Every enquiry button (Let's Talk, Find My Next Customers, Discuss My Website, Check My Area, Get My … Plan, Talk Through My Plan, etc.) | `/contact?interest=<service>` |
| Explore Our Services (home) | `#services` on the homepage |
| See What's Included (websites, marketing) | `#included` on the same page |
| See How the Pilot Works | `#how-it-works` on `/get-leads` |
| Meet Your Marketing Team, Explore the Package, Explore the Growth Package, Meet My Team | `/marketing` |
| Card and "Learn More" links, Related services | the URL given in the copy |

---

## 8. Assets

Full-size files are in `hatch-src/_fullres/` (downloaded from the URLs in `index.html`). Copy into `public/images/placeholder/` with clean names. All are temporary.

| File | Used for |
|---|---|
| `…Background Video (1).webp` | hero background |
| `…CTA Bg.avif`, `…Monitor Illustration.avif` | closing CTA background and product image |
| `…A (1).avif`, `…grains.avif`, `…Noise.svg` | dark container photo, grain, light texture |
| `…image 19.webp` | FAQ photo card |
| `…Background IMG.webp` (6a8c4141), `…Background IMG*.avif` (698ec221, 698f942f ×4), `…Tab Bg 2/3/4.avif` | tab panel and image-card backgrounds |
| `…IMG.webp` (6a8c42eb), `…IMG*.avif` (698f7fee, 698f95ab ×2, 69935b17–19, 69935d15, 699358c7–c9, 69c2afe5, 69c2b0a4, 69c2bab6 ×2) | UI overlay cards (hero visual, tabs, feature cards) |
| `…illustration.avif`, `…Customer Central Illustration.avif`, `…Infra Layer Illustration.avif`, `…Illustration 3.avif` | accordion visuals |

**Must be replaced before launch:** every UI overlay card and illustration (they show Hatch's product, names and wording), the hero and FAQ photos, and the text logo. The copy asks for BuzzBloc-specific illustrative screens (website, enquiry, calendar, CRM, feed) without invented figures.

Icons: inline SVGs from `index.html` (arrow, chevron, plus/minus, play/pause, and the tab icons). Favicon is a placeholder.
