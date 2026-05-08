import type { Metadata } from "next";
import { Platform } from "@/components/sections/platform";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "Platform — ipNX IoT MVNO Proposal",
  description:
    "Cloud-native IoT platform: pillars, MVNO-in-a-Box, Connectivity Management Platform, end-to-end data flow, and a multi-tier B2B2X tenant hierarchy.",
};

export default function PlatformPage() {
  return (
    <>
      <Platform />
      <NextStepsCta />
    </>
  );
}
