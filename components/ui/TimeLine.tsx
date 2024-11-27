import Link from "next/link";
import { PropsWithChildren } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const TimeLine = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-y-6">{children}</div>;
};

interface TimeLineItemProps {
  date: string;
  title: string;
  subTitle: string;
  link?: string;
  tag?: string;
  isCourse?: string;
}

export const TimeLineItem = ({
  date,
  isCourse,
  subTitle,
  title,
  link,
  tag,
}: TimeLineItemProps) => {
  return (
    <div className="flex flex-wrap gap-12 min-h justify-start relative">
      <div
        className="h-auto flex flex-none break-words whitespace-pre"
        style={{ width: `${isCourse ? "0" : ""}` }}
      >
        <p className="text-secondary-foreground">{date}</p>
      </div>
      <div
        className="flex gap-x-2"
        style={{ transform: `${isCourse ? "translateX(-45px)" : ""}` }}
      >
        <div className="flex flex-col gap-0.5">
          <div className="text-primary-foreground break-words whitespace-pre">
            <p className="leading-6 font-medium text-sm">{title}</p>
          </div>
          <div className="flex items-center gap-2 w-min">
            {link ? (
              <Link href={link} target="_blank">
                <TimeLineBody subTitle={subTitle} link={link} tag={tag} />
              </Link>
            ) : (
              <TimeLineBody subTitle={subTitle} link={link} tag={tag} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimeLineBodyProps {
  subTitle: string;
  link?: string;
  tag?: string;
}

export const TimeLineBody = ({ link, subTitle, tag }: TimeLineBodyProps) => {
  return (
    <div className="text-secondary-foreground flex items-center">
      <p className="text-sm font-normal leading-6 mt-1">{subTitle}</p>
      {link ? <FiArrowUpRight /> : null}
      {tag ? (
        <div className="ms-2 rounded-[20px] bg-white/5 py-0.5 px-1.5">
          <p className="text-[10px] font-normal text-secondary-foreground">
            {tag}
          </p>
        </div>
      ) : null}
    </div>
  );
};
