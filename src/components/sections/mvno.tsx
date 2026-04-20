import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { mvnoPositioning, revenueModel } from "@/content/proposal";

export function MvnoSection() {
  return (
    <section id="mvno" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading title={mvnoPositioning.title} />
        <div
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl p-10 text-white shadow-sm sm:p-14 bg-accent-gradient"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Brand Concept
          </div>
          <div className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {mvnoPositioning.concept}
          </div>
          <div className="mt-2 text-lg text-white/85">
            {mvnoPositioning.tagline}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {mvnoPositioning.pillars.map((p) => (
              <Badge
                key={p}
                variant="outline"
                className="rounded-full border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white hover:bg-white/15"
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeading title={revenueModel.title} />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Card className="card-lift rounded-2xl border-border/60 bg-white shadow-sm">
              <CardContent className="p-8">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent)]">
                  Key Revenue Drivers
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {revenueModel.drivers.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span
                        className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="grid gap-4">
              {revenueModel.uplift.map((u) => (
                <Card
                  key={u.label}
                  className="card-lift rounded-2xl border-border/60 bg-white shadow-sm"
                >
                  <CardContent className="flex items-baseline gap-4 p-6">
                    <div
                      className="text-3xl font-semibold tracking-tight sm:text-4xl"
                      style={{ color: "var(--accent)" }}
                    >
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
