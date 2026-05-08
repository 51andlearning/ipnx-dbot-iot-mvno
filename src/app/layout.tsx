import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { AccessGate } from "@/components/access-gate";
import { SiteHeader } from "@/components/sections/site-header";
import { SiteFooter } from "@/components/sections/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ipNX IoT MVNO — DBOT Proposal 2026+ | DSG MVNE",
  description:
    "DSG's Design-Build-Operate-Transfer proposal to launch the ipNX IoT MVNO — Nigeria's premier enterprise-grade IoT connectivity operator. A 9-month, USD 250k DSG engagement plus indicative platform retail pricing.",
  metadataBase: new URL("https://ipnx-dbot-iot-mvno.vercel.app"),
  openGraph: {
    title: "ipNX IoT MVNO — DBOT Proposal 2026+",
    description:
      "Build Nigeria's premier enterprise IoT MVNO. A DBOT partnership by DSG (MVNE).",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AccessGate>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AccessGate>
      </body>
    </html>
  );
}
