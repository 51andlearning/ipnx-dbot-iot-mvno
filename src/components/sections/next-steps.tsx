import { nextSteps } from "@/content/proposal";

export function NextSteps() {
  return (
    <section
      id="next-steps"
      className="relative scroll-mt-20 overflow-hidden border-y border-border/70 text-white bg-accent-gradient"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Next Steps
            </div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {nextSteps.deadline}
            </h2>
            <ol className="mt-8 grid gap-3 text-sm text-white/90 sm:grid-cols-2">
              {nextSteps.steps.map((s, i) => (
                <li
                  key={s}
                  className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-[2px]"
                >
                  <div className="mb-2 text-xs font-semibold tracking-[0.16em] text-white/70">
                    STEP {i + 1}
                  </div>
                  <div className="leading-snug">{s}</div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:justify-self-end">
            <a
              href="mailto:proposals@dsg.africa?subject=ipNX DBOT — Approve Design Phase"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[color:var(--accent)] shadow-sm transition hover:bg-[color:var(--accent-light)]"
            >
              {nextSteps.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
