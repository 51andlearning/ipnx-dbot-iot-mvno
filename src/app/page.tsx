import { SiteHeader } from "@/components/sections/site-header";
import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { Strategy } from "@/components/sections/strategy";
import { MvnoSection } from "@/components/sections/mvno";
import { IotTrack } from "@/components/sections/iot-track";
import { FloLive } from "@/components/sections/flolive";
import { DbotEngagement } from "@/components/sections/dbot";
import { Commercials } from "@/components/sections/commercials";
import { NextSteps } from "@/components/sections/next-steps";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ExecutiveSummary />
        <Strategy />
        <MvnoSection />
        <IotTrack />
        <FloLive />
        <DbotEngagement />
        <Commercials />
        <NextSteps />
      </main>
      <SiteFooter />
    </>
  );
}
