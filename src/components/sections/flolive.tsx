import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "./section-heading";
import { flolivePlatform } from "@/content/proposal";

export function FloLive() {
  return (
    <section id="platform" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading
          kicker="IoT Platform Partner"
          title={flolivePlatform.title}
        />
        <div className="mx-auto mt-8 max-w-3xl text-center">
          <div className="text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
            {flolivePlatform.headline}
          </div>
          <p className="mt-3 text-muted-foreground">{flolivePlatform.subhead}</p>
          <a
            href={flolivePlatform.source}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-xs font-medium text-[color:var(--accent)] underline-offset-4 hover:underline"
          >
            flolive.net ↗
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flolivePlatform.pillars.map((p) => (
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

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-[color:var(--accent)]/25 bg-[color:var(--accent-light)] text-[color:var(--accent)]"
            >
              Zero CapEx, Fast Time to Market
            </Badge>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-[color:var(--text)] sm:text-3xl">
              {flolivePlatform.mvnoInABox.headline}
            </h3>
            <p className="mt-3 text-muted-foreground">
              {flolivePlatform.mvnoInABox.subhead}
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {flolivePlatform.mvnoInABox.features.map((f) => (
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
              {flolivePlatform.cmp.title}
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {flolivePlatform.cmp.features.map((f) => (
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

        <Separator className="my-20 opacity-60" />

        <SectionHeading title="Trusted by global IoT leaders" />
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2">
          {flolivePlatform.referenceCustomers.map((c) => (
            <Badge
              key={c}
              variant="secondary"
              className="rounded-full bg-[color:var(--accent-light)] px-3 py-1 text-xs font-semibold text-[color:var(--accent-dark)]"
            >
              {c}
            </Badge>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {flolivePlatform.testimonials.map((t) => (
            <figure
              key={t.author}
              className="card-lift rounded-2xl border border-border/60 bg-white p-6 shadow-sm"
            >
              <div
                className="mb-3 text-3xl leading-none"
                style={{ color: "var(--accent)" }}
              >
                “
              </div>
              <blockquote className="text-sm leading-7 text-[color:var(--text)]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
