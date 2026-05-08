export const site = {
  name: "ipNX IoT MVNO",
  shortName: "ipNX IoT",
  tagline: "IoT MVNO — DBOT Proposal 2026+",
  url: "https://ipnx-dbot-iot-mvno.vercel.app",
  classification: "Confidential — For ipNX Executive and Board Review",
  preparedBy: "DSG | MVNE Division",
  preparedFor: "ipNX",
  proposalDate: "08 May 2026",
  decisionBy: "8 June 2026",
} as const;

export const nav = [
  { href: "/strategy", label: "Strategy" },
  { href: "/verticals", label: "Verticals" },
  { href: "/platform", label: "Platform" },
  { href: "/dbot", label: "DBOT" },
  { href: "/engagement", label: "Engagement" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const footer = {
  company: "DSG (Pty) Ltd",
  role: "MVNE — Mobile Virtual Network Enabler",
  ceo: "Yaron Assabi, CEO",
  validityDays: 30,
  legalLines: [
    "All proposals from DSG are valid for thirty (30) days unless otherwise stated.",
    "Agreement is subject to the signature of a comprehensive contract.",
    "Pricing is indicative and subject to USD FX fluctuations.",
  ],
} as const;
