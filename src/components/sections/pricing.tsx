import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { pricing } from "@/content/proposal";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-y border-border/70"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker={pricing.kicker}
          title={pricing.title}
          lede={pricing.intro}
        />

        {/* One-time + recurring cost cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {pricing.oneTime.map((c) => (
            <Card
              key={c.label}
              className="card-lift rounded-2xl border-border/60 bg-white shadow-sm"
            >
              <CardContent className="p-7 sm:p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                  {c.label}
                </div>
                <div className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--accent-dark)] sm:text-5xl">
                  {c.value}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {c.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CMP per-IMSI table */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="mb-4 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Recurring · Per IMSI · Monthly
              </div>
              <h3 className="mt-1 text-xl font-semibold tracking-tight text-[color:var(--text)] sm:text-2xl">
                {pricing.cmp.title}
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              {pricing.cmp.intro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border/60 bg-white shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr
                  className="text-xs uppercase tracking-[0.12em]"
                  style={{
                    backgroundColor: "var(--accent-light)",
                    color: "var(--accent-dark)",
                  }}
                >
                  <th className="px-5 py-4 font-semibold">SIM Volume Tier</th>
                  <th className="px-5 py-4 font-semibold">Unit</th>
                  <th className="px-5 py-4 font-semibold">≤ 5MB / month</th>
                  <th className="px-5 py-4 font-semibold">&gt; 5MB / month</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {pricing.cmp.rows.map((r) => (
                  <tr
                    key={r.tier}
                    className="transition hover:bg-[color:var(--surface)]"
                  >
                    <td className="px-5 py-5 align-top">
                      <div className="font-semibold text-[color:var(--text)]">
                        {r.tier}
                      </div>
                      <div className="text-xs text-muted-foreground">SIMs</div>
                    </td>
                    <td className="px-5 py-5 align-top text-xs text-muted-foreground">
                      {r.unit}
                    </td>
                    <td className="px-5 py-5 align-top">
                      <div className="font-semibold text-[color:var(--accent-dark)]">
                        {r.low}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {r.lowEff}
                      </div>
                    </td>
                    <td className="px-5 py-5 align-top">
                      <div className="font-semibold text-[color:var(--accent-dark)]">
                        {r.high}
                      </div>
                      <div className="mt-0.5 text-xs text-muted-foreground">
                        {r.highEff}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-8 space-y-2 text-xs">
            {pricing.notes.map((n) => (
              <li
                key={n.text}
                className={
                  "flex gap-2 " +
                  (n.emphasis
                    ? "font-semibold text-[color:var(--accent)]"
                    : "text-muted-foreground")
                }
              >
                <span
                  className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
