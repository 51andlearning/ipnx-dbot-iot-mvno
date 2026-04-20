import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { competitiveTable, strategyPillars } from "@/content/proposal";

export function Strategy() {
  return (
    <section
      id="strategy"
      className="scroll-mt-20 border-y border-border/70"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker={strategyPillars.kicker}
          title={strategyPillars.title}
          lede={strategyPillars.intro}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategyPillars.pillars.map((p, i) => (
            <Card
              key={p.title}
              className="card-lift rounded-2xl border-border/60 bg-white shadow-sm"
            >
              <CardHeader>
                <div
                  className="mb-3 text-xs font-semibold tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  0{i + 1}
                </div>
                <CardTitle className="text-lg leading-snug">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {p.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-20 opacity-60" />

        <SectionHeading title={competitiveTable.title} lede={competitiveTable.caption} />
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead
              className="text-xs uppercase tracking-[0.12em]"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent-dark)" }}
            >
              <tr>
                <th className="px-6 py-4 font-semibold">Traditional MNO</th>
                <th className="px-6 py-4 font-semibold">ipNX MVNO Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {competitiveTable.rows.map((r) => (
                <tr key={r.ipnx} className="transition hover:bg-[color:var(--surface)]">
                  <td className="px-6 py-4 text-muted-foreground">{r.mno}</td>
                  <td className="px-6 py-4 font-semibold text-[color:var(--text)]">
                    {r.ipnx}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
