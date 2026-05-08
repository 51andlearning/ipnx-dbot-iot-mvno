"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-white/85 backdrop-blur-sm supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="ipNX — DSG MVNE proposal · home"
        >
          <Image
            src="/images/ipnx-logo.png"
            alt="ipNX"
            width={682}
            height={276}
            priority
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden h-7 w-px bg-border sm:inline-block" />
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            DSG MVNE Proposal
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={
                  "relative text-sm font-medium transition " +
                  (active
                    ? "text-[color:var(--accent)]"
                    : "text-muted-foreground hover:text-[color:var(--accent)]")
                }
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-[22px] left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="mailto:edwardw@mvne.co.za?subject=ipNX DBOT — Approve Design Phase"
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
