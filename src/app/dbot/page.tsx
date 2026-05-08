import type { Metadata } from "next";
import { DbotEngagement } from "@/components/sections/dbot";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "DBOT — ipNX IoT MVNO Proposal",
  description:
    "Design → Build & Operate → Transfer. The 9-month engagement model: 8-week Design, 6-month Build & Operate, 1-month Transfer to ipNX.",
};

export default function DbotPage() {
  return (
    <>
      <DbotEngagement />
      <NextStepsCta />
    </>
  );
}
