# Deployment

## GitHub repository

### Create
- **Owner:** DSG org / `51andlearning` user (confirm with DSG leadership).
- **Name:** `ipnx-dbot-iot-mvno`.
- **Visibility:** Private (sensitive commercial content).
- **Default branch:** `main`.
- **Commands (first-time):**
  ```bash
  gh repo create 51andlearning/ipnx-dbot-iot-mvno --private --source=. --remote=origin --push
  # or, if repo is created via the GitHub UI:
  git remote add origin https://github.com/51andlearning/ipnx-dbot-iot-mvno.git
  git branch -M main
  git push -u origin main
  ```

### Branch strategy
- `main` → Vercel **Production**.
- Any other branch → Vercel **Preview**.
- PRs require at least one review + a green Vercel preview build before merge.

## Vercel project setup

### Import
1. Vercel → **Add New… → Project → Import Git Repository**.
2. Select `51andlearning/ipnx-dbot-iot-mvno`.

### Build settings
| Setting                | Value                                  |
|------------------------|----------------------------------------|
| **Framework preset**   | Next.js (auto-detected)                |
| **Root directory**     | Project root (leave empty)             |
| **Build command**      | `pnpm build`                           |
| **Output directory**   | *(leave blank — Next.js default)*      |
| **Install command**    | `pnpm install`                         |
| **Node version**       | 20.x (or 22.x — match `package.json`)  |

> **Do not create `vercel.json` unless a specific override is required.** The Next.js preset handles routing, caching, and headers automatically.

### Environment variables
Set on Vercel → Project → Settings → Environment Variables. Never commit any `.env*` to git.

| Variable                                  | Env scope(s)             | Required | Notes                                                              |
|-------------------------------------------|--------------------------|----------|--------------------------------------------------------------------|
| `NEXT_PUBLIC_SITE_URL`                    | Production, Preview, Dev | Yes      | Canonical URL (e.g. `https://ipnx-dbot.dsg.africa`).                |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID`          | Production               | No       | Only if GA4 is enabled (per `TRACKING_PLAN.md`).                    |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`            | Production               | No       | Privacy-friendly alt to GA4.                                        |
| `RESEND_API_KEY`                          | Production, Preview      | Later    | For contact-form email delivery.                                    |
| `RESEND_FROM`                             | Production, Preview      | Later    | Verified sender, e.g. `proposals@dsg.africa`.                       |
| `RESEND_TO`                               | Production, Preview      | Later    | Destination inbox.                                                  |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`          | Production, Preview      | Later    | Cloudflare Turnstile site key.                                      |
| `TURNSTILE_SECRET`                        | Production, Preview      | Later    | Server-side Turnstile secret.                                       |
| `UPSTASH_REDIS_REST_URL` / `_TOKEN`       | Production               | Later    | For rate-limiting the contact form.                                 |
| `SITE_PASSCODE`                           | Production, Preview      | Optional | If `/commercials` is passcode-gated.                                |

Typical workflow:
- Add the variable in Vercel for all three environments (or just the ones needed).
- Trigger a fresh deploy so the variable is baked in (Production) or injected at request time (Runtime).

### Custom domain
1. Vercel → Project → Settings → Domains → Add.
2. DNS (registrar side): add the CNAME / A records Vercel prescribes.
3. Verify; Vercel auto-provisions Let's Encrypt TLS.
4. Until the custom domain is live, share the `*.vercel.app` URL.

## How to redeploy

### Trigger via git
```bash
git commit --allow-empty -m "chore: redeploy"
git push
```
Vercel rebuilds automatically on push.

### Trigger via Vercel dashboard
- Vercel → Project → Deployments → **Redeploy** on the most recent production deployment.
- Option: **Redeploy with existing Build Cache** (faster) or **without** (clean rebuild).

### Trigger via CLI
```bash
pnpm dlx vercel --prod
```

### Trigger via Deploy Hook (CI / manual)
1. Vercel → Project → Settings → Git → Deploy Hooks → **Create Hook** (choose `main` branch).
2. Copy the URL; store as `VERCEL_DEPLOY_HOOK_MAIN` in a secure secrets store.
3. `curl -X POST "<hook-url>"` triggers a production deploy on demand.

## Rollback
- Vercel → Deployments → find the last known-good build → **Promote to Production**.
- Or revert the offending commit on `main` and push — Vercel redeploys the prior state.

## Local dev
```bash
pnpm install
pnpm dev              # http://localhost:3000
pnpm build && pnpm start   # production-mode smoke test
```

## Pre-deploy checklist
- [ ] `pnpm build` green locally.
- [ ] `pnpm lint` green (no new errors).
- [ ] No `.env*` files committed.
- [ ] No hard-coded DSG / ipNX confidential numbers outside `src/content`.
- [ ] Images optimised (`next/image`, WebP where possible).
- [ ] Lighthouse (mobile) ≥ 90 across Performance / Accessibility / Best Practices / SEO.
- [ ] All routes return 200 (spot-check `/strategy`, `/platform`, `/commercials`).
- [ ] Vercel preview URL shared with DSG reviewer.

## Support & ownership
- **Deploys:** GitHub → Vercel (auto).
- **DNS & domain:** DSG IT.
- **Secrets:** DSG engineering, stored in Vercel only (never in the repo, never in chat).
- **On-call:** Not required — this is a static-ish marketing site. Incidents handled best-effort during DSG business hours.
