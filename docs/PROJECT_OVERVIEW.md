# Project Overview

## What this is
A standalone proposal website presenting the **DSG ipNX DBOT IoT MVNO Proposal**, delivered by DSG's MVNE division. The site packages the formal proposal (strategic rationale, MVNO positioning, IoT track with floLIVE, DBOT phases, resourcing, commercials) into a shareable, interactive web experience for ipNX executive and board review.

## Target audience
- **Primary:** ipNX Executive Committee and Board of Directors.
- **Secondary:** ipNX commercial, technical, and transformation leadership evaluating the DBOT engagement.
- **Tertiary:** DSG internal commercial team (for reuse as a reference implementation).

## Deployment environment
- **Framework:** Next.js 16 (App Router) + TypeScript + Tailwind v4 + shadcn UI.
- **Hosting:** Vercel (production + preview deployments per branch).
- **Domain:** TBD — interim `*.vercel.app` URL; custom domain to be issued by DSG marketing.
- **Access:** Public by default. Sensitive commercials (pricing, financial uplift) may be guarded behind a passcode or unlisted route — decision pending ipNX approval.

## Owner
- **Business owner:** DSG (MVNE division) — Yaron Assabi (CEO).
- **Technical owner:** DSG engineering / this repository maintainer.
- **Content owner:** DSG MVNE strategy team; ipNX countersign on data and commercial statements.

## Source of truth
The canonical proposal content lives in `../DSG_ipNX_DBOT_IoT_MVNO_Proposal.md` (sibling folder). This site renders that content as structured sections; any change should be reflected in both unless/until the `.md` is imported directly.
