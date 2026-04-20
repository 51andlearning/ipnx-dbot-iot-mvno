import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { iotTrack } from "@/content/proposal";

export function IotTrack() {
  return (
    <section
      id="iot"
      className="scroll-mt-20 border-y border-border/70"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker={iotTrack.kicker}
          title={iotTrack.title}
          lede={iotTrack.intro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {iotTrack.verticals.map((v) => (
            <Card
              key={v.title}
              className="card-lift rounded-2xl border-border/60 bg-white shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-base leading-snug text-[color:var(--text)]">
                  {v.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {v.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-20 opacity-60" />

        <SectionHeading title="IoT Commercial Propositions" />
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
          <ul className="divide-y divide-border/60">
            {iotTrack.propositions.map((p) => (
              <li
                key={p.title}
                className="grid gap-1 px-6 py-5 transition hover:bg-[color:var(--surface)] sm:grid-cols-[220px_1fr] sm:gap-6"
              >
                <div className="font-semibold text-[color:var(--accent)]">
                  {p.title}
                </div>
                <div className="text-sm leading-6 text-muted-foreground">
                  {p.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
