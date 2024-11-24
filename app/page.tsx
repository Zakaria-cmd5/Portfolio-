"use client";

import Card from "@/components/ui/Card";
import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";

export default function Home() {
  return (
    <WaterWaveContainer dropRadius="3" perturbance="3" resolution="1080">
      {() => (
        <div className="h-screen p-20">
          <div className="max-w-2xl mx-auto">
            <Card>This is a card</Card>
          </div>
        </div>
      )}
    </WaterWaveContainer>
  );
}
