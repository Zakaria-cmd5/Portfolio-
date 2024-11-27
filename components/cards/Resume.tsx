import signatureImg from "@/public/me/signature.png";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Socials from "../ui/Socials";

const ResumeCard = () => {
  return (
    <Card classNames="md:h-full 2xl:h-fit">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        Full Stack Engineer (NextJs, ReactJs) with 2+ years of experience.
        Proficient in frontend technologies, driven by proactive mindset, strong
        collaboration skills, and a commitment to improving user experience
        while embracing new trends.
      </p>
      <div>
        <Image src={signatureImg} alt="My Resume" className="mb-10 mx-auto" />
      </div>
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)] pr-14">
        <Socials />
        <Button link="https://drive.google.com/file/d/1_u99e6FOpUrylhuVxatwsYdpIBBT2Q88/view?usp=drive_link">
          <FaDownload />
          Resume
        </Button>
      </div>
    </Card>
  );
};

export default ResumeCard;
