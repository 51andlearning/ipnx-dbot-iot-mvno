import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { NextSteps } from "@/components/sections/next-steps";

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveSummary />
      <NextSteps />
    </>
  );
}
