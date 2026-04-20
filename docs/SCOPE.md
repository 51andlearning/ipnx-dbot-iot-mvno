# Scope

## Pages included
- `/` — Landing / executive summary with CTA to download the PDF and schedule a workshop.
- `/strategy` — Background, strategic rationale, FMC, SME upsell, residential cross-sell, asset-light expansion.
- `/mvno` — Proposed ipNX MVNO positioning, brand pillars, revenue model, competitive differentiation.
- `/iot` — Dedicated IoT MVNO track: verticals, propositions, product capabilities.
- `/platform` — floLIVE IoT platform (pillars, MVNO in a Box, CMP, add-ons, testimonials, NCC/NDPR fit).
- `/dbot` — DBOT engagement model, Design / Build & Operate / Transfer phases, deliverables.
- `/commercials` — Investment, resource plan, timeframe, next steps.
- `/about-dsg` — DSG capability stack (MVNE, CXG, Digitalise, BroadBrand, digitalmall, Digital Resilience, eInsurer).
- `/contact` — Next Steps CTA, decision-required date (2 April 2026), contact details.
- `/legal` — Terms & Conditions, proposal acceptance, validity, pricing adjustments.

## Sections included (reusable section components)
- `Hero` — headline, subhead, CTA pair.
- `ExecutiveSummary` — three-pillar outcome block.
- `StatGrid` — quantified benefit tiles (ARPU uplift, churn reduction, timeline).
- `Timeline` — DBOT 9-month phased timeline.
- `FeatureGrid` — IoT verticals, floLIVE add-ons, DSG divisions.
- `ComparisonTable` — Traditional MNO vs. ipNX MVNO Advantage.
- `TestimonialCarousel` — floLIVE customer quotes (Qualcomm, Netafim, Sparkle, Helix Wireless, Aroma Trace).
- `PricingBlock` — USD 250,000 fixed fee + line-items.
- `CTABand` — "Approve Design Phase by 2 April 2026."
- `Footer` — legal, contact, logo lock-up (DSG, MVNE, ipNX).

## What is excluded
- **Online payment** — no Stripe, no invoicing, no e-signature. Commercial closure happens offline.
- **Live CMS** — content is file-based (MD/MDX or TypeScript constants). No Sanity / Contentful in v1.
- **User accounts / auth** — no sign-in flows. Optional access-gate (basic passcode) may be added for `/commercials` if ipNX requests.
- **Arabic / French i18n** — English-only v1. i18n scaffolding left open via Next.js routing if requested.
- **Heavy animations** — subtle motion only (fade, slide). No 3D, no WebGL.
- **Interactive ROI calculator** — v2 candidate. Out of scope for launch.

## Launch milestones
1. **Day 0 — Kick-off:** repo created, Next.js + shadcn scaffolded, `/docs` written, push to GitHub, Vercel project linked. *(this commit)*
2. **Day +2 — Content skeleton:** all 10 pages routed, placeholder copy from `DSG_ipNX_DBOT_IoT_MVNO_Proposal.md` dropped in.
3. **Day +5 — Visual pass:** DSG / MVNE / ipNX logo lock-up, brand colours, typography finalised.
4. **Day +7 — Sections built:** reusable section components implemented, populated from `/src/content`.
5. **Day +9 — Analytics + forms:** Vercel Analytics wired, Plausible/GA4 tag slot, contact form to DSG inbox.
6. **Day +10 — Review build:** internal DSG review; accessibility pass (WCAG AA), Lighthouse budget met.
7. **Day +12 — ipNX preview share:** Vercel preview URL, commercials gated if required.
8. **Day +14 — Production launch:** custom domain cutover, monitoring live.

## Definition of Done (v1)
- All 10 pages publish and score **≥ 90** on Lighthouse Performance / Accessibility / SEO.
- All copy matches `DSG_ipNX_DBOT_IoT_MVNO_Proposal.md` (or consciously deviates, tracked in `CHANGELOG.md`).
- `pnpm build` runs cleanly with zero TS / ESLint errors.
- Vercel production deploy green.
- Shareable preview URL sent to Yaron Assabi for approval.
