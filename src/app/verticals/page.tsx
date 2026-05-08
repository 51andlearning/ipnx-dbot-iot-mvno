import type { Metadata } from "next";
import { IotTrack } from "@/components/sections/iot-track";
import { NextStepsCta } from "@/components/sections/next-steps-cta";

export const metadata: Metadata = {
  title: "Verticals — ipNX IoT MVNO Proposal",
  description:
    "Seven Nigerian IoT verticals to launch into — utilities, fintech, fleet, agri-tech, smart city, healthcare and SD-WAN failover — plus six commercial propositions from Starter to Wholesale.",
};

export default function VerticalsPage() {
  return (
    <>
      <IotTrack />
      <NextStepsCta />
    </>
  );
}
