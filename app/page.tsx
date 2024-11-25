"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";

export default function Home() {
  return (
    <WaterWaveContainer dropRadius="3" perturbance="3" resolution="1080">
      {() => (
        <div className="h-screen p-20">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Component">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
              </div>
              <Input placeholder="Any" type="text" />
              <TextArea placeholder="Any"/>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveContainer>
  );
}
