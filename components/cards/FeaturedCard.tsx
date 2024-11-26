/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import Header from "./featured/Header";
import Video from "./featured/Video";

interface Props {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: any;
  active: boolean;
}

const FeaturedCard = ({ active, tag, title, video, logo }: Props) => {
  return (
    <div className="link w-full h-full bg-secondary-background border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      <Header title={title} tag={tag} />
      <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
        <Video video={video} active={active}/>
      </div>
    </div>
  );
};

export default FeaturedCard;
