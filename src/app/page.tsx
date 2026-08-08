import type {Metadata} from "next";
import type {ReactNode} from "react";

import CreatorsSection from "@/components/marketing/CreatorsSection";
import DownloadSection from "@/components/marketing/DownloadSection";
import FeaturesSection from "@/components/marketing/FeaturesSection";
import HeroSection from "@/components/marketing/HeroSection";
import PremiumSection from "@/components/marketing/PremiumSection";
import TrustSafetySection from "@/components/marketing/TrustSafetySection";

export const metadata: Metadata = {
  title: "Lumivo — Create, Connect, Inspire",
  description:
    "Discover Lumivo, a premium short-video platform for creators, communities, messaging, analytics and safer participation.",
  alternates: {
    canonical: "/",
  },
};

/**
 * Renders the Lumivo public marketing homepage.
 *
 * @return {ReactNode} Complete homepage experience.
 */
export default function HomePage(): ReactNode {
  return (
    <main className="overflow-hidden bg-[#060813]">
      <HeroSection />

      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent"
        />

        <FeaturesSection />
        <PremiumSection />
        <CreatorsSection />
        <TrustSafetySection />
        <DownloadSection />
      </div>
    </main>
  );
}