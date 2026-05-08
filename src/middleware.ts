import { NextResponse, type NextRequest } from "next/server";
import {
  ACCESS_COOKIE,
  ACCESS_MAX_AGE_MS,
  parseCookie,
  verify,
} from "@/lib/auth";

const SECRET =
  process.env.ACCESS_SECRET ?? "ipnx-dev-secret-change-me-in-production";

export const config = {
  matcher: [
    /*
     * Run on every path EXCEPT:
     * - /_next/* (Next internals + static)
     * - /login + the login submission route
     * - /favicon.ico
     * - any direct image / font / asset
     */
    "/((?!_next/|login|favicon\\.ico|images/|.*\\.(?:png|jpg|jpeg|svg|webp|gif|ico|woff|woff2|ttf|eot|otf|css|js|map|txt|xml|json)$).*)",
  ],
};

export async function middleware(req: NextRequest) {
  const cookie = req.cookies.get(ACCESS_COOKIE)?.value;
  if (cookie) {
    const parsed = parseCookie(cookie);
    if (parsed) {
      const isValid = await verify(parsed.payload, parsed.sig, SECRET);
      if (isValid) {
        // payload format: `<username>.<issuedAtMs>`
        const lastDot = parsed.payload.lastIndexOf(".");
        const issuedAt = lastDot > 0 ? Number(parsed.payload.slice(lastDot + 1)) : 0;
        if (issuedAt && Date.now() - issuedAt < ACCESS_MAX_AGE_MS) {
          return NextResponse.next();
        }
      }
    }
  }

  // Not signed in (or stale cookie) — redirect to /login, preserving destination.
  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = `?next=${encodeURIComponent(req.nextUrl.pathname + req.nextUrl.search)}`;
  return NextResponse.redirect(loginUrl);
}
