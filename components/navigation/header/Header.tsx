import FancyButton from "@/components/ui/FancyButton";
import Profile from "@/components/ui/Profile";
import MegneticContainer from "@/components/visualEffect/MegneticContainer";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MegneticContainer>
          <FancyButton href="" text="Let's Talk" icon={<FaArrowRight />} />
        </MegneticContainer>
      </div>
    </div>
  );
};

export default Header;
