export const site = {
  name: "ipNX IoT MVNO",
  shortName: "ipNX IoT",
  tagline: "IoT MVNO — DBOT Proposal 2026+",
  url: "https://ipnx-dbot-iot-mvno.vercel.app",
  classification: "Confidential — For ipNX Executive and Board Review",
  preparedBy: "DSG | MVNE Division",
  preparedFor: "ipNX",
  proposalDate: "19 January 2026",
  decisionBy: "2 April 2026",
} as const;

export const nav = [
  { href: "#strategy", label: "Strategy" },
  { href: "#mvno", label: "Positioning" },
  { href: "#iot", label: "Verticals" },
  { href: "#platform", label: "Platform" },
  { href: "#dbot", label: "DBOT" },
  { href: "#commercials", label: "Commercials" },
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
