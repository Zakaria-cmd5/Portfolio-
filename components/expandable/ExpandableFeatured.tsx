import { cn } from "@/lib/utils";
import { useState } from "react";
import FeaturedCard from "../cards/FeaturedCard";

const ExpandableFeatured = () => {
  const featuredArray = [{ title: "", vidoe: "", tag: "" }];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const mouseEnterHandler = (index: number) => {
    setHoverIndex(index);
  };

  const mouseLeaveHandler = () => {
    setHoverIndex(null);
  };

  return (
    <div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
      {featuredArray.slice(1).map((featured, i) => (
        <div
          key={i}
          className={cn(
            "relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out",
            i === hoverIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
          )}
          onMouseEnter={() => mouseEnterHandler(i)}
          onMouseLeave={() => mouseLeaveHandler()}
        >
          <FeaturedCard
            active={i === hoverIndex}
            title={featured.title}
            video={featured.vidoe}
            tag={featured.tag}
          />
        </div>
      ))}
    </div>
  );
};

export default ExpandableFeatured;
