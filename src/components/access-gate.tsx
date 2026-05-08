"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";

const STORAGE_KEY = "ipnx-access-granted-v1";

// Credentials. Configurable via NEXT_PUBLIC_ACCESS_USERNAME /
// NEXT_PUBLIC_ACCESS_PASSWORD; sensible defaults below.
//
// Note: NEXT_PUBLIC_* env vars are baked into the client bundle, so this
// gate is "soft" — it stops casual link-sharing but anyone reading the
// JS source could recover the credentials. Acceptable for an exec
// proposal review; upgrade to middleware-based auth if real secrecy is
// required.
const ALLOWED_USERNAME =
  process.env.NEXT_PUBLIC_ACCESS_USERNAME ?? "ipnx";
const ALLOWED_PASSWORD =
  process.env.NEXT_PUBLIC_ACCESS_PASSWORD ?? "dsg-ipnx-2026";

export function AccessGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        setUnlocked(true);
      }
    } catch {
      // sessionStorage unavailable — gate stays closed
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready && !unlocked) {
      usernameRef.current?.focus();
    }
  }, [ready, unlocked]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (
      username.trim().toLowerCase() === ALLOWED_USERNAME.toLowerCase() &&
      password === ALLOWED_PASSWORD
    ) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setError(null);
      setUnlocked(true);
    } else {
      setError("Invalid username or password. Please try again.");
    }
  }

  // Pre-hydration placeholder — solid background prevents flashing
  // protected content before the storage check completes.
  if (!ready) {
    return (
      <div
        aria-hidden
        className="min-h-screen w-full"
        style={{ background: "var(--surface)" }}
      />
    );
  }

  if (unlocked) return <>{children}</>;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
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
      <div className="relative w-full max-w-md rounded-2xl border border-border/70 bg-white p-8 shadow-xl">
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
            id="access-gate-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--text)]"
          >
            Sign in to view the proposal
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Confidential — for ipNX executive and board review.
          </p>
        </div>
        <form className="mt-7 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="access-username"
              className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            >
              Username
            </label>
            <input
              id="access-username"
              ref={usernameRef}
              name="username"
              type="text"
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1.5 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          <div>
            <label
              htmlFor="access-password"
              className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"
            >
              Password
            </label>
            <input
              id="access-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 block w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm transition focus:border-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]"
            />
          </div>
          {error ? (
            <div
              role="alert"
              className="rounded-md border border-[color:var(--accent)]/30 bg-[color:var(--accent-light)] px-3 py-2 text-sm font-medium text-[color:var(--accent-dark)]"
            >
              {error}
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
      </div>
    </div>
  );
}
