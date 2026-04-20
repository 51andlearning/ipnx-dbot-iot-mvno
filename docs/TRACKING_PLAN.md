# Tracking Plan

## Analytics stack (placeholders — not yet wired)

### Primary: Vercel Analytics
- **Product:** `@vercel/analytics` (`<Analytics />` in root layout) and optionally `@vercel/speed-insights`.
- **Coverage:** page views, referrers, devices, Web Vitals (CLS, LCP, INP, FID).
- **Enablement:** one-click on the Vercel project. No extra ENV required for basic analytics; advanced features may need `NEXT_PUBLIC_VERCEL_ANALYTICS_ID`.
- **PII:** none collected by default.

### Secondary: Google Analytics 4 (optional)
- **Placeholder ENV var:** `NEXT_PUBLIC_GA4_MEASUREMENT_ID` (e.g. `G-XXXXXXXXXX`).
- **Loader:** `next/script` in `src/app/layout.tsx` (strategy `"afterInteractive"`), gated on `process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID` being set.
- **Consent:** Google Consent Mode v2 initialised in `denied` state; flipped to `granted` only after a cookie-banner opt-in (to be added if GA4 is enabled).

### Tertiary: Plausible / Fathom (privacy-friendly alternative)
- **Placeholder ENV var:** `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
- Used if the client prefers a cookieless, GDPR-/NDPR-safe tracker over GA4.

## Event tracking — planned events

| Event name                    | Trigger                                                                 | Properties                                 | Goal type        |
|-------------------------------|-------------------------------------------------------------------------|---------------------------------------------|------------------|
| `page_view`                   | Route change (auto via provider)                                        | `path`, `referrer`                          | Engagement       |
| `cta_click_primary`           | Any primary CTA (`"Approve Design Phase"`, `"Download Proposal"`)       | `cta_label`, `source_page`                  | Conversion-lead  |
| `cta_click_secondary`         | Nav CTAs, footer CTAs                                                    | `cta_label`, `source_page`                  | Engagement       |
| `proposal_pdf_download`       | User downloads the proposal PDF                                          | `file_version`, `source_page`               | Conversion       |
| `contact_form_submit`         | Contact form submitted successfully                                      | `source_page`, `interest` (iot/mvno/dbot)   | Conversion       |
| `contact_form_error`          | Submission fails client- or server-side                                  | `error_code`                                | Quality          |
| `workshop_booking_click`      | Clicks calendar-booking link (Calendly / cal.com)                        | `source_page`                               | Conversion       |
| `pricing_reveal`              | User unlocks gated `/commercials` (if passcode-gated)                    | `source_page`                               | Engagement-deep  |
| `section_in_view`             | A tracked section scrolls into ≥ 50% viewport                            | `section_id`, `page`                        | Engagement       |
| `outbound_link_click`         | Click to `flolive.net` or other external                                 | `href`, `source_page`                       | Engagement       |
| `nav_open_mobile`             | Mobile nav drawer opened                                                 | `source_page`                               | UX               |
| `theme_toggle`                | Light/dark toggle (if shipped)                                           | `theme`                                     | UX               |

Implementation pattern (helper lives in `src/lib/analytics.ts`):
```ts
export function track(event: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("app:track", { detail: { event, props } }));
  // Fan out to Vercel Analytics + GA4 + Plausible providers here.
}
```

## Form submission tracking
- Forms post to a Next.js Server Action (`src/app/contact/actions.ts`) which:
  1. Validates with Zod.
  2. Relays the lead to DSG via Resend / SMTP (`RESEND_API_KEY`).
  3. Emits `contact_form_submit` on success, `contact_form_error` on failure.
- Anti-abuse: Cloudflare Turnstile or hCaptcha (ENV: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET`).
- Honeypot field for bots.
- Rate-limit via Upstash Redis if traffic warrants (ENV: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`).

## Conversion goals (Vercel / GA4)
- **Macro conversions:**
  1. `contact_form_submit` — highest-value intent signal.
  2. `workshop_booking_click` → downstream calendar confirmation.
  3. `proposal_pdf_download` — qualified interest.
- **Micro conversions:**
  1. `cta_click_primary` on `/` and `/commercials`.
  2. `section_in_view` on `/iot` → `/platform` → `/commercials` (reader funnel).
  3. `pricing_reveal` if gated.
- **Funnel:** Landing → Strategy / IoT / Platform → Commercials → Contact → Form submit.

## Data retention & privacy
- Vercel Analytics: aggregated only, no PII, configurable retention (Pro).
- GA4 (if enabled): 2-month retention recommended until NDPR review is complete.
- Contact-form payloads: retained in DSG CRM / inbox only. Never written to public repo or client-exposed endpoints.
- Consent banner required only if GA4 is enabled (cookies) — Vercel Analytics alone does not use cookies.

## Dashboards
- **Vercel dashboard** — default Web Vitals + page-view report.
- **Optional GA4 exploration** — weekly funnel report emailed to DSG marketing.
- **Weekly internal review** — DSG reviews conversions; adjusts messaging on under-performing sections.

## Roll-out sequence
1. Ship with no tracking (v1 launch).
2. Enable Vercel Analytics (same day).
3. Decide GA4 vs. Plausible with ipNX / DSG marketing within week 1.
4. Add contact-form tracking once the form ships (Day +9 per `SCOPE.md`).
5. Dashboards agreed before production hand-off.
