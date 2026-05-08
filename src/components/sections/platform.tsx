import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { PlatformArchitecture } from "@/components/diagrams/platform-architecture";
import { MvnoInABox } from "@/components/diagrams/mvno-in-a-box";
import { DataFlow } from "@/components/diagrams/data-flow";
import { TenantHierarchy } from "@/components/diagrams/tenant-hierarchy";
import { platform } from "@/content/proposal";

export function Platform() {
  return (
    <section id="platform" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading kicker={platform.kicker} title={platform.title} />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <div className="text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
            {platform.headline}
          </div>
          <p className="mt-3 text-muted-foreground">{platform.subhead}</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platform.pillars.map((p) => (
            <Card
              key={p.title}
              className="card-lift rounded-2xl border-border/60 bg-white shadow-sm"
            >
              <CardHeader>
                <CardTitle className="text-base text-[color:var(--text)]">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {p.body}
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-20 opacity-60" />

        <SectionHeading
          kicker="How the Platform Works"
          title="The platform, visualised"
          lede="Four diagrams that map how the IoT platform is structured, what's in the MVNO-in-a-Box, how IoT data flows from the device to the enterprise, and how ipNX can run a multi-tier B2B2X wholesale business on top."
        />
        <div className="mt-12 grid gap-6">
          <PlatformArchitecture />
          <div className="grid gap-6 lg:grid-cols-2">
            <MvnoInABox />
            <DataFlow />
          </div>
          <TenantHierarchy />
        </div>

        <Separator className="my-20 opacity-60" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-[color:var(--accent)]/25 bg-[color:var(--accent-light)] text-[color:var(--accent)]"
            >
              Zero CapEx, Fast Time to Market
            </Badge>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
              {platform.mvnoInABox.headline}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {platform.mvnoInABox.subhead}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {platform.mvnoInABox.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl border border-border/60 bg-white p-3 text-sm shadow-sm"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-[color:var(--text)]">
              {platform.cmp.title}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {platform.cmp.features.map((f) => (
                <div
                  key={f.title}
                  className="card-lift rounded-xl border border-border/60 bg-white p-4 shadow-sm"
                >
                  <div className="text-sm font-semibold text-[color:var(--accent)]">
                    {f.title}
                  </div>
                  <div className="mt-1 text-xs leading-5 text-muted-foreground">
                    {f.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
