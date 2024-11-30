import Profile from "@/components/ui/Profile";
import { motion } from "framer-motion";
import Link from "next/link";
import { menuSlide } from "./animation";
import Curve from "./Curve";
import MenuCard from "./MenuCard";
import NavLink from "./NavLink";

const FullScreenMenu = () => {
  const navItems = [
    {
      title: "Home",
      href: "/#home",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen w-full bg-black fixed top-0 right-0 text-primary-foreground z-40 font-oswald"
    >
      <div className="relative w-full pl-[5%]">
        <div className="absolute top-8">
          <Profile />
        </div>
      </div>
      <div className="absolute bottom-32 w-full lg:px-[5%]">
        <div
          className="grid relative"
          style={{ gridTemplateColumns: "1fr 500px" }}
        >
          <div className="pl-4 flex flex-col justify-end">
            {navItems.map((item, index) => (
              <NavLink key={index} data={{ ...item, index }} />
            ))}
          </div>
          <MenuCard />
        </div>
      </div>
      <div className="w-[95%] pl-[5%] absolute bottom-8">
        <div className="flex flex-wrap items-center justify-between uppercase text-white">
          <div className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/zakaria-asad-004395318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              LINKEDIN
            </Link>
            <Link href="https://www.facebook.com/share/1MznYfz31x/?mibextid=qi2Omg">
              FACEBOOK
            </Link>
            <Link href="https://github.com/Zakaria-cmd5">GITHUB</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">©2024</Link>
          </div>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default FullScreenMenu;
