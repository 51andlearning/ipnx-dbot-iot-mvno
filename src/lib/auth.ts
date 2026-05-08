// Edge-compatible HMAC-SHA256 sign / verify helpers.
// Used by middleware (Edge runtime) and the /login server action (Node runtime).
// Both runtimes expose Web Crypto via globalThis.crypto, so the same code path works.

const enc = new TextEncoder();

async function getKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

function toBase64Url(bytes: ArrayBuffer): string {
  const view = new Uint8Array(bytes);
  let bin = "";
  for (let i = 0; i < view.byteLength; i++) {
    bin += String.fromCharCode(view[i]);
  }
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function sign(payload: string, secret: string): Promise<string> {
  const key = await getKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(payload));
  return toBase64Url(sig);
}

export async function verify(
  payload: string,
  signature: string,
  secret: string,
): Promise<boolean> {
  const expected = await sign(payload, secret);
  if (expected.length !== signature.length) return false;
  // constant-time compare
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

/** Cookie value layout: `<sig>.<username>.<issuedAtMs>`. */
export function packCookie(sig: string, payload: string): string {
  return `${sig}.${payload}`;
}

export function parseCookie(
  value: string,
): { sig: string; payload: string } | null {
  const idx = value.indexOf(".");
  if (idx <= 0) return null;
  const sig = value.slice(0, idx);
  const payload = value.slice(idx + 1);
  if (!payload) return null;
  return { sig, payload };
}

export const ACCESS_COOKIE = "ipnx_access";
/** Cookie lifetime in ms (12 hours). */
export const ACCESS_MAX_AGE_MS = 12 * 60 * 60 * 1000;
