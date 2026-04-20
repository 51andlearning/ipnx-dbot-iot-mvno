import { footer, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="inline-flex h-7 items-center rounded-md bg-foreground px-2 text-[11px] font-bold tracking-wider text-background">
              DSG × ipNX
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {site.tagline}
            </div>
            <div className="mt-6 text-xs text-muted-foreground">
              {footer.company} · {footer.role}
              <br />
              {footer.ceo}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Proposal
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Prepared: {site.proposalDate}</li>
              <li>
                Decision by:{" "}
                <span className="font-medium text-foreground">{site.decisionBy}</span>
              </li>
              <li>Validity: {footer.validityDays} days</li>
              <li>Classification: {site.classification}</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </div>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {footer.legalLines.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {footer.company}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
