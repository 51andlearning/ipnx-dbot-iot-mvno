import type { Metadata } from "next";
import { Commercials } from "@/components/sections/commercials";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "Engagement — ipNX IoT MVNO Proposal",
  description:
    "DSG fixed-fee engagement commercials: USD 250,000 across the 9-month DBOT programme, line-items, exclusions, and payment terms.",
};

export default function EngagementPage() {
  return (
    <>
      <Commercials />
      <NextStepsCta />
    </>
  );
}
