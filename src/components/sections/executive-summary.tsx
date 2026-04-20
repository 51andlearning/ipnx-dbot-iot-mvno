import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { execSummary } from "@/content/proposal";

export function ExecutiveSummary() {
  return (
    <section id="summary" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading title={execSummary.title} lede={execSummary.lede} />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {execSummary.outcomes.map((o) => (
          <Card key={o.title} className="border-border/60">
            <CardHeader>
              <CardTitle className="text-xl">{o.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 text-muted-foreground">
              {o.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
