import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { mvnoPositioning, revenueModel } from "@/content/proposal";

export function MvnoSection() {
  return (
    <section id="mvno" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading title={mvnoPositioning.title} />
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-border/60 bg-gradient-to-br from-foreground to-foreground/90 p-10 text-background sm:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-background/70">
            Brand Concept
          </div>
          <div className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {mvnoPositioning.concept}
          </div>
          <div className="mt-2 text-lg text-background/80">
            {mvnoPositioning.tagline}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {mvnoPositioning.pillars.map((p) => (
              <Badge
                key={p}
                variant="outline"
                className="border-background/30 bg-background/10 text-background"
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading title={revenueModel.title} />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <Card className="border-border/60">
              <CardContent className="p-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Key Revenue Drivers
                </div>
                <ul className="mt-4 space-y-3 text-sm">
                  {revenueModel.drivers.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      {d}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="grid gap-4">
              {revenueModel.uplift.map((u) => (
                <Card key={u.label} className="border-border/60">
                  <CardContent className="flex items-baseline gap-4 p-6">
                    <div className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {u.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">{u.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
