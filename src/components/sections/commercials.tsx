import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "./section-heading";
import { commercials } from "@/content/proposal";

export function Commercials() {
  return (
    <section id="commercials" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading kicker="Investment" title={commercials.title} />
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Card
            className="relative overflow-hidden rounded-3xl border-0 text-white shadow-sm bg-accent-gradient"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <CardContent className="relative p-8 sm:p-10">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                Fixed Fee
              </div>
              <div className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">
                {commercials.headline}
              </div>
              <p className="mt-3 text-sm text-white/85">
                {commercials.subhead}
              </p>
              <p className="mt-6 text-sm leading-6 text-white/80">
                {commercials.note}
              </p>
            </CardContent>
          </Card>

          <div>
            <div className="overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm">
              <ul className="divide-y divide-border/60">
                {commercials.lines.map((l) => (
                  <li
                    key={l.item}
                    className="grid gap-2 px-6 py-5 transition hover:bg-[color:var(--surface)] sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
                  >
                    <div>
                      <div className="font-semibold text-[color:var(--text)]">
                        {l.item}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {l.desc}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-[color:var(--accent)] sm:text-right">
                      {l.cost}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 text-xs leading-5 text-muted-foreground">
              {commercials.excluded}
            </p>
            <ul className="mt-6 space-y-2 text-xs text-muted-foreground">
              {commercials.payment.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
