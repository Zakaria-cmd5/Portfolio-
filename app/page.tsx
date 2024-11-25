"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import FancyButton from "@/components/ui/FancyButton";
import Input from "@/components/ui/Input";
import LiveClock from "@/components/ui/LiveClock";
import Profile from "@/components/ui/Profile";
import ScrollDown from "@/components/ui/ScrollDown";
import TextArea from "@/components/ui/TextArea";
import MegneticContainer from "@/components/visualEffect/MegneticContainer";
import WaterWaveContainer from "@/components/visualEffect/WaterWaveContainer";
import { FaArrowRight } from "react-icons/fa";

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
              <TextArea placeholder="Any" />
              <Profile />
              <MegneticContainer classNames="w-[350px]">
                <FancyButton text="Contact Me" icon={<FaArrowRight />} />
              </MegneticContainer>
              <LiveClock timeZone="Asia/Damascus"/>
              <MegneticContainer classNames="w-[350px]">
                <ScrollDown />
              </MegneticContainer>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveContainer>
  );
}
