import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { competitiveTable, strategyPillars } from "@/content/proposal";

export function Strategy() {
  return (
    <section id="strategy" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker={strategyPillars.kicker}
          title={strategyPillars.title}
          lede={strategyPillars.intro}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategyPillars.pillars.map((p, i) => (
            <Card key={p.title} className="border-border/60">
              <CardHeader>
                <div className="mb-2 text-xs font-semibold text-muted-foreground">
                  0{i + 1}
                </div>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {p.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-20" />

        <SectionHeading title={competitiveTable.title} lede={competitiveTable.caption} />
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-border/60 bg-background shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-4 font-medium">Traditional MNO</th>
                <th className="px-6 py-4 font-medium">ipNX MVNO Advantage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {competitiveTable.rows.map((r) => (
                <tr key={r.ipnx}>
                  <td className="px-6 py-4 text-muted-foreground">{r.mno}</td>
                  <td className="px-6 py-4 font-medium">{r.ipnx}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
