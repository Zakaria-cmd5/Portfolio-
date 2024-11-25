"use client";

import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";
import LandingSection from "@/sections/Landing";

export default function Home() {
  return (
    <WaterWaveContainer dropRadius="3" perturbance="3" resolution="1080">
      {() => (
        <div>
          <LandingSection />
        </div>
      )}
    </WaterWaveContainer>
  );
}
