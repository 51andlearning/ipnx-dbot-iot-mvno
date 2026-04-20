import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-white/85 backdrop-blur-sm supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <span
            className="inline-flex h-8 items-center rounded-full px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            style={{ backgroundColor: "var(--accent)" }}
          >
            DSG × ipNX
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            {site.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-[color:var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#next-steps"
            className="hidden items-center justify-center rounded-full px-4 h-9 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Approve Design Phase
          </a>
        </div>
      </div>
    </header>
  );
}
