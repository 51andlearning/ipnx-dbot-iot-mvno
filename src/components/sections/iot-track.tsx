import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { iotTrack } from "@/content/proposal";

export function IotTrack() {
  return (
    <section
      id="iot"
      className="scroll-mt-20 border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker={iotTrack.kicker}
          title={iotTrack.title}
          lede={iotTrack.intro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {iotTrack.verticals.map((v) => (
            <Card key={v.title} className="border-border/60">
              <CardHeader>
                <CardTitle className="text-base">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {v.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-20" />

        <SectionHeading title="IoT Commercial Propositions" />
        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl border border-border/60 bg-background">
          <ul className="divide-y divide-border/60">
            {iotTrack.propositions.map((p) => (
              <li
                key={p.title}
                className="grid gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6"
              >
                <div className="font-medium">{p.title}</div>
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
