import Header from "@/components/navigation/header/Header";
import FancyButton from "@/components/ui/FancyButton";
import LiveClock from "@/components/ui/LiveClock";
import MegneticContainer from "@/components/visualEffect/MegneticContainer";
import { FaArrowRight } from "react-icons/fa";

const LandingSection = () => {
  return (
    <div className="relative h-screen overflow-hidden p-8">
      <Header />
      <div className="absolute bottom-36 left-10 z-20 md:hidden">
      <MegneticContainer>
          <FancyButton href="" text="Let's Talk" icon={<FaArrowRight />} />
        </MegneticContainer>
      </div>
      <div className="absolute right-10 bottom-10">
        <LiveClock timeZone="Asia/Damascus"/>
      </div>
    </div>
  );
};

export default LandingSection;
