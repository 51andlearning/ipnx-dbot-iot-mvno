import type { Metadata } from "next";
import Image from "next/image";
import { loginAction } from "./actions";

export const metadata: Metadata = {
  title: "Sign in — ipNX IoT MVNO Proposal",
  description: "Restricted access. Sign in to view the proposal.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ next?: string; error?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const sp = await searchParams;
  const error = sp?.error === "1";
  const next = typeof sp?.next === "string" ? sp.next : "/";

  return (
    <div
      className="relative flex min-h-screen w-full items-center justify-center p-4"
      style={{
        backgroundImage:
          "radial-gradient(1000px 600px at 50% -100px, #fce5e7 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#e30613 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <main
        role="main"
        aria-labelledby="login-title"
        className="relative w-full max-w-md rounded-2xl border border-border/70 bg-white p-8 shadow-xl"
      >
        <div className="flex justify-center">
          <Image
            src="/images/ipnx-logo.png"
            alt="ipNX"
            width={682}
            height={276}
            priority
            className="h-12 w-auto"
          />
        </div>
        <div className="mt-6 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Restricted access
          </div>
          <h1
            id="login-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--text)]"
          >
            Sign in to view the proposal
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Confidential — for ipNX executive and board review.
          </p>
        </div>
        <form action={loginAction} className="mt-7 space-y-4" noValidate>
          <input type="hidden" name="next" value={next} />
          <div>
            <label
              htmlFor="username"
              className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              required
              autoFocus
              className="mt-1.5 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1.5 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          {error ? (
            <div
              role="alert"
              className="rounded-md border border-[color:var(--accent)]/30 bg-[color:var(--accent-light)] px-3 py-2 text-sm font-medium text-[color:var(--accent-dark)]"
            >
              Invalid username or password. Please try again.
            </div>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-full px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Access proposal
          </button>
        </form>
        <div className="mt-6 text-center text-[11px] text-muted-foreground">
          Need credentials? Contact{" "}
          <a
            href="mailto:edwardw@mvne.co.za?subject=ipNX DBOT — Proposal access"
            className="font-medium text-[color:var(--accent)] underline-offset-4 hover:underline"
          >
            edwardw@mvne.co.za
          </a>
          .
        </div>
      </main>
    </div>
  );
}
