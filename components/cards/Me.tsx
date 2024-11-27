import { cn } from "@/lib/utils";
import myImg from "@/public/gallery/img1.jpg";
import Image from "next/image";
import Card from "../ui/Card";

const MeCard = () => {
  return (
    <Card classNames="2xl:h-full">
      <div className="w-full h-[400px] sm:h-[500px] overflow-hidden">
        <Image
          src={myImg}
          alt="My image"
          className="absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover"
        />
        <div className="absolute top-[65%] space-y-2">
          <Tag
            text="Hello, universe 👋🏻"
            classNames="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="I'm Zakaria Asad"
            classNames="rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
          <Tag
            text="Full Stack Developer"
            classNames="rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          />
        </div>
      </div>
    </Card>
  );
};

const Tag = ({ text, classNames }: { classNames?: string; text: string }) => {
  return (
    <div className={cn("bg-black/[0.7] w-fit py-1.5 px-3", classNames)}>
      <p className="text-primary-foreground leading-[110%] font-bold">{text}</p>
    </div>
  );
};

export default MeCard;
