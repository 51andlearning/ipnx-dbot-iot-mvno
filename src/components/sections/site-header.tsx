import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-7 items-center rounded-md bg-foreground px-2 text-[11px] font-bold tracking-wider text-background">
            DSG × ipNX
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            {site.tagline}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#next-steps"
            className={buttonVariants({ size: "sm" }) + " hidden sm:inline-flex px-4"}
          >
            Approve Design Phase
          </a>
        </div>
      </div>
    </header>
  );
}
