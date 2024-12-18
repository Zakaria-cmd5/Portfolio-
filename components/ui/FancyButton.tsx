import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const FancyButton = ({ icon, text}: Props) => {
  return (
    <Link className="fancy-btn" href="/contact">
      <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-5 px-10 flex items-center gap-2 font-bold text-3xl cursor-pointer transition-all duration-75">
        <span>{text}</span>
        <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">
          {icon}
        </span>
      </div>
    </Link>
  );
};

export default FancyButton;
