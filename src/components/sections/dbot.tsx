import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "./section-heading";
import { dbotEngagement } from "@/content/proposal";

export function DbotEngagement() {
  return (
    <section
      id="dbot"
      className="scroll-mt-20 border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker="Engagement Model"
          title={dbotEngagement.title}
          lede={dbotEngagement.intro}
        />

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue={dbotEngagement.phases[0].id}>
            <TabsList className="flex h-auto w-full flex-wrap justify-center gap-2 bg-transparent p-0">
              {dbotEngagement.phases.map((p) => (
                <TabsTrigger
                  key={p.id}
                  value={p.id}
                  className="rounded-full border border-border/60 bg-background px-5 py-2 text-sm data-[state=active]:bg-foreground data-[state=active]:text-background"
                >
                  {p.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {dbotEngagement.phases.map((p) => (
              <TabsContent key={p.id} value={p.id} className="mt-10">
                <div className="grid gap-8 rounded-2xl border border-border/60 bg-background p-8 lg:grid-cols-[220px_1fr]">
                  <div>
                    <Badge variant="secondary" className="mb-3">
                      {p.duration}
                    </Badge>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Phase
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">
                      {p.title}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {p.purpose}
                    </p>
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Activities
                        </div>
                        <ul className="space-y-2 text-sm">
                          {p.activities.map((a) => (
                            <li key={a} className="flex gap-2">
                              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Deliverables
                        </div>
                        <ul className="space-y-2 text-sm">
                          {p.deliverables.map((d) => (
                            <li key={d} className="flex gap-2">
                              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
