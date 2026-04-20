import { buttonVariants } from "@/components/ui/button";
import { nextSteps } from "@/content/proposal";

export function NextSteps() {
  return (
    <section
      id="next-steps"
      className="scroll-mt-20 border-y border-border/60 bg-foreground text-background"
    >
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-background/60">
              Next Steps
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {nextSteps.deadline}
            </h2>
            <ol className="mt-8 grid gap-3 text-sm text-background/80 sm:grid-cols-2">
              {nextSteps.steps.map((s, i) => (
                <li
                  key={s}
                  className="rounded-lg border border-background/20 bg-background/5 p-4"
                >
                  <div className="mb-2 text-xs font-semibold text-background/60">
                    STEP {i + 1}
                  </div>
                  <div>{s}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:justify-self-end">
            <a
              href="mailto:proposals@dsg.africa?subject=ipNX DBOT — Approve Design Phase"
              className={buttonVariants({ size: "lg", variant: "secondary" }) + " px-6 h-11"}
            >
              {nextSteps.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
