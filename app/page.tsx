"use client";

import AboutMeSection from "@/sections/AboutMeSection";
import ContactMeSection from "@/sections/ContactMeSection";
import LandingSection from "@/sections/LandingSection";
import dynamic from "next/dynamic";

const WaterWaveContainer = dynamic(
  () => import("@/components/visualEffect/WaterWaveContainer"),
  { ssr: false }
);

export default function Home() {
  return (
    <WaterWaveContainer dropRadius="3" perturbance="3" resolution="720">
      {() => (
        <div>
          <LandingSection />
          <AboutMeSection />
          <ContactMeSection />
        </div>
      )}
    </WaterWaveContainer>
  );
}
