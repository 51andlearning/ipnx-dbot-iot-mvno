import Link from "next/link";
import { SectionHeading } from "./section-heading";

const explore = [
  {
    href: "/strategy",
    label: "Strategy",
    body: "Why ipNX should launch an IoT MVNO now — four structural reasons and the positioning.",
  },
  {
    href: "/verticals",
    label: "Verticals",
    body: "Seven Nigerian IoT verticals we launch into — utilities, fintech, fleet, agri-tech, smart city, healthcare, SD-WAN failover.",
  },
  {
    href: "/platform",
    label: "Platform",
    body: "Cloud-native IoT platform — architecture, MVNO-in-a-Box, CMP, end-to-end data flow, B2B2X tenant hierarchy.",
  },
  {
    href: "/dbot",
    label: "DBOT",
    body: "9-month engagement model — Design (8 weeks) → Build & Operate (6 months) → Transfer (1 month).",
  },
  {
    href: "/engagement",
    label: "Engagement",
    body: "DSG fixed-fee scope and commercial terms for the DBOT programme.",
  },
  {
    href: "/pricing",
    label: "Pricing",
    body: "Indicative platform retail pricing — set-up, monthly core, per-IMSI CMP across five SIM-volume tiers.",
  },
];

export function ExploreGrid() {
  return (
    <section
      className="border-y border-border/70"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker="Explore the Proposal"
          title="One page per nav item — pick a thread"
          lede="The proposal is structured so each topic has a dedicated page. Read end-to-end, or jump straight to the section your team cares about."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className="card-lift group block rounded-2xl border border-border/60 bg-white p-7 shadow-sm transition"
            >
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {String(i + 1).padStart(2, "0")} · {card.label}
                </div>
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full text-sm transition group-hover:translate-x-1"
                  style={{
                    backgroundColor: "var(--accent-light)",
                    color: "var(--accent)",
                  }}
                >
                  →
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-[color:var(--text)]">
                {card.label}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {card.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
