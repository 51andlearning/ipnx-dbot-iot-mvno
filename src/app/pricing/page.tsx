import type { Metadata } from "next";
import { Pricing } from "@/components/sections/pricing";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "Pricing — ipNX IoT MVNO Proposal",
  description:
    "Indicative platform retail pricing for the IoT connectivity platform — set-up, recurring core service, and CMP per-IMSI charges across five SIM-volume tiers.",
};

export default function PricingPage() {
  return (
    <>
      <Pricing />
      <NextStepsCta />
    </>
  );
}
