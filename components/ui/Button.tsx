import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link?: string;
  isIcon?: boolean;
  classNames?: string | undefined;
}

const Button = ({ children, classNames, isIcon, link }: Props) => {
  return (
    <>
      {link ? (
        <Link href={link} className="w-10 h-10 cursor-pointer">
          <ButtonBody classNames={classNames} isIcon={isIcon}>
            {children}
          </ButtonBody>
        </Link>
      ) : (
        <ButtonBody classNames={classNames} isIcon={isIcon}>
          {children}
        </ButtonBody>
      )}
    </>
  );
};

interface ButtonBodyProps {
  children: ReactNode;
  isIcon?: boolean;
  classNames: string | undefined;
}

const ButtonBody = ({ children, classNames, isIcon }: ButtonBodyProps) => {
  return (
    <div className="cursor-pointer flex-none w-auto h-full">
      <div
        className={cn(
          "flex items-center justify-center gap-2 bg-primary-background rounded-full select-none whitespace-nowrap text-primary-foreground text-sm font-medium",
          "hover:bg-white/[0.1] transition-colors duration-100",
          classNames,
          isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
