# BuzzBloc website

Marketing site for BuzzBloc (https://www.buzzbloc.agency), a UK agency offering websites, social media management, managed marketing and lead generation. Next.js on Vercel.

## The two rules

1. **Copy comes only from `BuzzBloc_Complete_Website_Copy-updated.docx`.** Use it verbatim. Section labels in that document ("Hero", "Outcome section", "Designer direction") are guidance, not public text. Never write new marketing copy, figures, testimonials, client names or legal text. Where the site needs words the copy lacks (meta titles and descriptions, alt text, a heading such as "FAQs" or "Related services", `llms.txt`), derive them from existing copy lines and keep them in `content/derived.ts` so they are easy to review.
2. **Design comes only from `DESIGN.md`.** Every colour, size, spacing, radius, easing and duration is defined there with its source in `hatch-src/`. If a value is missing, read it from `hatch-src/` and add it to `DESIGN.md` first. Do not eyeball values.

If the copy and `DESIGN.md` do not cover something, ask the owner.

## Copy boundaries (from the copy document)

- No AI positioning or AI service claims in public text.
- No invented performance figures, customer logos, testimonials, press logos, addresses or team bios. Omit proof blocks until real assets exist.
- Leads are opportunities, never "guaranteed customers". Keep the `*` guarantee footnote wherever the pilot guarantee is stated.
- Do not show empty article cards on `/resources`.
- Entity name is always "BuzzBloc".
- Never use em dashes anywhere: copy, UI text, docs or code comments.

## Stack

- Next.js (latest stable), App Router, TypeScript strict, React Server Components by default.
- Tailwind CSS v4. Tokens from `DESIGN.md` live in `app/globals.css` under `@theme`; do not hard-code hex values or pixel sizes in components.
- No animation library. CSS transitions plus small client components. Add a library only with the owner's agreement.
- Fonts: Instrument Sans, Instrument Sans Condensed, Instrument Sans SemiCondensed through `next/font/local` (files in `app/fonts/`), `display: "swap"`.
- Hosting: Vercel. Static generation for every page.

## Folder structure

```
app/
  layout.tsx, globals.css, fonts/
  page.tsx                      homepage
  websites/ marketing/ get-leads/ about/ pricing/ contact/ faqs/ resources/
  [service]/page.tsx            the 9 template service pages (generateStaticParams)
  privacy/ terms/ cookies/      placeholder legal pages
  sitemap.ts, robots.ts, llms.txt/route.ts, opengraph-image.tsx
components/
  layout/                       SiteNav, SiteFooter
  sections/                     Hero, SplitIntro, FeatureGrid, Faq, ClosingCta, ...
  ui/                           Button, Eyebrow, Container, Section, Icon
content/
  site.ts                       nav, footer, routes, company placeholders
  home.ts, websites.ts, ...     one file per page, typed, copy verbatim
  services.ts                   the 9 template service pages
  derived.ts                    metadata, alt text, derived headings
lib/                            seo.ts (metadata + JSON-LD builders), cn.ts
public/images/placeholder/      Hatch images, temporary
hatch-src/                      saved Hatch site, reference only (git-ignored, not deployed)
```

Reference files at the repo root (PDFs, docx, zip) are not part of the app.

## Conventions

- Components: PascalCase files, one component per file, named exports. Props typed inline or with a local `type`.
- Section components take content as props and contain no copy. Pages import from `content/` and compose sections in the order given in `DESIGN.md` section 7.
- Client components only for: nav state and menus, tabs, accordions, the contact form, the legal-page scroll-spy. Mark with `"use client"` and keep them leaf-level.
- Styling: Tailwind utilities using theme tokens (`bg-brand-950`, `text-h3`, `gap-space-8`). Shared patterns (buttons, containers) are components, not `@apply` chains.
- Theme: wrap a section in `data-theme="dark"` or `"light"`; semantic colour variables change with it.
- Mobile-first. Check every section at 376, 480, 768, 992, 1120 and 1440px.
- Sections stay compact (see `DESIGN.md` 6.1). Do not add `min-h-screen` or the `large` spacer.
- Placeholder images are imported from `public/images/placeholder/` only, so they can be found and replaced in one place.

## SEO

- Metadata API on every page: unique title and description, canonical URL, Open Graph and Twitter card. `metadataBase` is `https://www.buzzbloc.agency`.
- Exactly one `<h1>` per page; headings descend in order. Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- `next/image` with explicit `sizes`, width and height, and descriptive `alt`. Only the hero image is `priority`.
- `app/sitemap.ts` and `app/robots.ts` list every public route. Legal placeholders are `noindex` until real policies are supplied.
- Targets: Lighthouse 95+ for performance, SEO, accessibility and best practices; no layout shift from fonts, images or animation.

## GEO

- JSON-LD: `Organization` and `WebSite` in the root layout; `Service` on service pages; `FAQPage` wherever FAQs render; `BreadcrumbList` on every non-home page. Company details are placeholders in `content/site.ts` until the owner supplies them; do not emit fields that are still placeholders.
- All copy is server-rendered. Tab panels, accordion answers and FAQ answers are in the HTML, not injected on interaction.
- FAQ questions stay as questions in heading or `summary` elements.
- `/llms.txt` summarises BuzzBloc and links the key pages, using copy lines only.
- The "what BuzzBloc is" statement (homepage outcome body) stays near the top of the homepage.

## Accessibility and performance

- WCAG 2.2 AA contrast, visible focus outlines, skip link, full keyboard support for menus, tabs (`role="tablist"`) and accordions.
- Honour `prefers-reduced-motion: reduce` globally: no autoplaying tabs, no transitions.
- Minimum 44px touch targets on mobile.
- Ship no third-party scripts until analytics and consent are decided.

## Open items the owner will supply later

Logo file · real images and interface screens · company details (legal name, address, phone, email, socials) · contact-form destination · legal policy text · confirmation of prices, ad-spend treatment, guarantee and exclusivity wording · analytics and cookie consent.

## Commands

```
npm run dev      local development
npm run build    production build (must pass before any hand-off)
npm run lint
```
