import type { Metadata } from "next";
import { Strategy } from "@/components/sections/strategy";
import { MvnoSection } from "@/components/sections/mvno";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "Strategy — ipNX IoT MVNO Proposal",
  description:
    "Strategic rationale: why ipNX should launch an IoT MVNO now. Positioning, revenue model and the competitive case against horizontal MNO IoT.",
};

export default function StrategyPage() {
  return (
    <>
      <Strategy />
      <MvnoSection />
      <NextStepsCta />
    </>
  );
}
