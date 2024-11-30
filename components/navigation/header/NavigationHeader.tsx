import FancyButton from "@/components/ui/FancyButton";
import Profile from "@/components/ui/Profile";
import MegneticContainer from "@/components/visualEffect/MegneticContainer";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "./fullScreenMenu/FullScreenMenu";
import ToggleButton from "./fullScreenMenu/ToggleButton";

const NavigationHeader = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MegneticContainer>
          <FancyButton text="Let's Talk" icon={<FaArrowRight />} />
        </MegneticContainer>
      </div>
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
};

export default NavigationHeader;
