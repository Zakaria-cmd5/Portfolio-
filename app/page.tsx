'use client'

import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";

export default function Home() {
  return (
    <WaterWaveContainer
      dropRadius="3"
      perturbance="3"
      resolution="1080"
    >
      {() => <div className="h-screen"></div>}
    </WaterWaveContainer>
  );
}
