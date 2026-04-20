# Structure

## Folder layout

```
ipnx-dbot-iot-mvno/
├── docs/                           # This directory — project docs, not shipped to users
│   ├── PROJECT_OVERVIEW.md
│   ├── ASSUMPTIONS.md
│   ├── SCOPE.md
│   ├── STRUCTURE.md
│   ├── TRACKING_PLAN.md
│   └── DEPLOYMENT.md
├── public/
│   ├── images/                     # Brand logos, page hero imagery
│   └── *.svg                       # Default Next.js assets (to be pruned)
├── src/
│   ├── app/                        # App Router — one folder per route
│   │   ├── layout.tsx              # Root layout (shared nav + footer)
│   │   ├── page.tsx                # / (landing)
│   │   ├── globals.css             # Tailwind v4 + shadcn tokens
│   │   ├── strategy/page.tsx
│   │   ├── mvno/page.tsx
│   │   ├── iot/page.tsx
│   │   ├── platform/page.tsx
│   │   ├── dbot/page.tsx
│   │   ├── commercials/page.tsx
│   │   ├── about-dsg/page.tsx
│   │   ├── contact/page.tsx
│   │   └── legal/page.tsx
│   ├── components/
│   │   ├── ui/                     # shadcn primitives (button, card, badge, accordion, tabs, separator, dialog, dropdown-menu)
│   │   └── sections/               # Composed page sections (Hero, StatGrid, Timeline, …)
│   ├── content/                    # File-based content (TS modules, MDX, JSON)
│   │   ├── proposal.ts             # Canonical proposal copy (sections referenced across pages)
│   │   ├── iot-verticals.ts
│   │   ├── flolive-features.ts
│   │   ├── dsg-divisions.ts
│   │   └── testimonials.ts
│   └── lib/
│       └── utils.ts                # shadcn `cn()` helper
├── components.json                 # shadcn config
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── package.json
└── pnpm-lock.yaml
```

## Section composition rules
1. **Pages orchestrate, sections render.** A page in `src/app/*/page.tsx` imports one or more section components and passes content objects in from `src/content/*`.
2. **Sections are pure presentational.** Each accepts typed props and renders using shadcn primitives + Tailwind utility classes. No data fetching, no server state.
3. **One section = one viewport band.** A section fills the horizontal viewport and occupies roughly one scroll-screen. Avoid god-components.
4. **Copy never inlined in JSX.** All headlines, body copy, bullet arrays, and stat values live in `src/content/*` as typed constants. Pages and sections reference them by name.
5. **Default export named.** Each section exports a named function matching its filename (`HeroSection`, `StatGrid`, `Timeline`, …) — easier to tree-shake and grep.
6. **shadcn primitives only for UI atoms.** Sections may compose `Card`, `Badge`, `Tabs`, `Accordion`, etc. Never hand-roll a button when `<Button>` exists.
7. **Brand tokens via CSS vars.** Colours, radii, and typography scale derive from shadcn's CSS-variable system in `globals.css`. Brand overrides (DSG / ipNX palette) live in the same file as `:root` additions.

## Content management approach
- **v1 — File-based TypeScript modules** under `src/content/`. Content is strongly typed; TypeScript catches missing fields at build time.
- Each content module exports a named object (e.g. `export const heroContent = { … } satisfies HeroContent;`).
- Images referenced via `public/images/...` with `next/image` for automatic optimisation.
- **v2 candidate — MDX** for long-form narrative pages (`/strategy`, `/dbot`). Rendered via `next-mdx-remote` or `@next/mdx` when narrative density increases.
- **v3 candidate — headless CMS (Sanity).** Only if DSG marketing needs to iterate copy without a deploy.

## Naming conventions
- Files: `kebab-case.tsx` for routes and sections.
- Exports: `PascalCase` for components, `camelCase` for content objects and helpers.
- Routes: `kebab-case` URLs (`/about-dsg`, not `/aboutDsg`).
- CSS custom properties: `--kebab-case`.

## Source-of-truth hierarchy
1. `../DSG_ipNX_DBOT_IoT_MVNO_Proposal.md` (the signed-off proposal copy) — authoritative.
2. `src/content/*.ts` — derived, typed, site-ready copy.
3. Pages and sections — pure presentation over (2).

If (1) and (2) drift, (1) wins. Any conscious deviation must be logged in a `CHANGELOG.md`.
