import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { hero } from "@/content/proposal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 to-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 border-border/80">
            {site.classification}
          </Badge>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            {hero.eyebrow}
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className={buttonVariants({ size: "lg" }) + " px-6 h-11"}
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className={buttonVariants({ size: "lg", variant: "outline" }) + " px-6 h-11"}
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <div className="mt-10 text-xs text-muted-foreground">
            Prepared by {site.preparedBy} · {site.proposalDate} · Decision required by{" "}
            <span className="font-medium text-foreground">{site.decisionBy}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
