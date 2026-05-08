import { nextSteps } from "@/content/proposal";

export function NextStepsCta() {
  return (
    <section
      aria-label="Approve Design Phase"
      className="relative overflow-hidden border-y border-border/70 text-white bg-accent-gradient"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-6 sm:py-14 lg:px-8">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
            Next Steps
          </div>
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            {nextSteps.deadline}
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
            Approve the engagement, nominate a Steering Committee, schedule the
            Strategic Thinking Workshop within 14 days.
          </p>
        </div>
        <a
          href="mailto:proposals@dsg.africa?subject=ipNX DBOT — Approve Design Phase"
          className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[color:var(--accent)] shadow-sm transition hover:bg-[color:var(--accent-light)]"
        >
          {nextSteps.cta}
        </a>
      </div>
    </section>
  );
}
