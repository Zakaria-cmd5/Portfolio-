"use client";

import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";
import ContactMeSection from "@/sections/ContactMe";
// import AboutMeSection from "@/sections/AboutMe";
// import FeaturedSection from "@/sections/Featured";
// import LandingSection from "@/sections/Landing";

export default function Home() {
  return (
    <WaterWaveContainer dropRadius="3" perturbance="3" resolution="1080">
      {() => (
        <div>
          {/* <LandingSection /> */}
          {/* <FeaturedSection /> */}
          {/* <AboutMeSection /> */}
          <ContactMeSection />
        </div>
      )}
    </WaterWaveContainer>
  );
}
