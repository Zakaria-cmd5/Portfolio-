import SvgCurve from "../visualEffect/SvgCurve";
import HeadingAnimatedSvg from "./HeadingAnimatedSvg";

interface Props {
  number: string;
  title1: string;
  title2: string;
}

const Heading = ({ number, title1, title2 }: Props) => {
  return (
    <div className="relative my-10 px-8 z-20">
      <div className="outline-none flex flex-col justify-center shrink-0 opacity-5 transform -top-32 2xl:-top-24 w-[71px] flex-none h-auto left-4 lg:left-12 absolute whitespace-pre">
        <h2 className="font-pixel text-[180px] text-center text-primary-foreground relative">
          <span className="bottom_fade bg-clip-text text-transparent p-4">
            {number}
          </span>
        </h2>
      </div>
      <div className="flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">
          {title1}
        </p>
        <HeadingAnimatedSvg text="LEARN MORE ABOUT MY FEATURED PROJECTS"/>
        <p className="text-[17vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic">
          {title2}
        </p>
      </div>
      <SvgCurve />
    </div>
  );
};

export default Heading;
