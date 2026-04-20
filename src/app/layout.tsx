import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "ipNX DBOT IoT MVNO — Transformation Strategy 2026+ | DSG MVNE",
  description:
    "DSG's Design-Build-Operate-Transfer proposal to launch the ipNX MVNO and ipNX IoT MVNO — a 9-month, USD 250k programme delivering a converged, cloud-native, revenue-generating digital telecom for ipNX.",
  metadataBase: new URL("https://ipnx-dbot-iot-mvno.vercel.app"),
  openGraph: {
    title: "ipNX DBOT IoT MVNO — Transformation Strategy 2026+",
    description:
      "From fibre ISP to Nigeria's first fully converged digital telecom. A DBOT partnership by DSG (MVNE).",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
