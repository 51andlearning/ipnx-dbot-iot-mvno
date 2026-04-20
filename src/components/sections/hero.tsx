import { Badge } from "@/components/ui/badge";
import { hero } from "@/content/proposal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/70"
      style={{
        backgroundImage:
          "radial-gradient(1000px 600px at 50% -100px, #e8eef9 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#032572 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-[color:var(--accent)]/25 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--accent)]"
          >
            {site.classification}
          </Badge>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {hero.eyebrow}
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[color:var(--text)] sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[color:var(--accent-dark)]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--accent)]/25 bg-white px-6 text-sm font-semibold text-[color:var(--accent)] transition hover:bg-[color:var(--accent-light)]"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="mt-10 text-xs text-muted-foreground">
            Prepared by {site.preparedBy} · {site.proposalDate} · Decision required by{" "}
            <span className="font-semibold text-[color:var(--accent)]">{site.decisionBy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
