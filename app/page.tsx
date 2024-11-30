"use client";

import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";
import AboutMeSection from "@/sections/AboutMeSection";
import ContactMeSection from "@/sections/ContactMeSection";
import LandingSection from "@/sections/LandingSection";

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
