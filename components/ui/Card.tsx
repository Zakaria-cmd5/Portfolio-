import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  classNames?: string;
}

const Card = ({ children, classNames, title }: Props) => {
  return (
    <div
      className={cn(
        "relative bg-primary-background w-full h-fit rounded-2xl border-border p-6 text-primary-foreground overflow-hidden",
        classNames
      )}
    >
      <div className="flex flex-col gap-y-6">
        {title ? (
          <div className="font-pixel">
            <p className="uppercase text-lg">{title}</p>
          </div>
        ) : null}
        {children}
      </div>
    </div>
  );
};

export default Card;
