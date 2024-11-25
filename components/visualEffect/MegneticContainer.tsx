"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface Props {
  classNames?: string;
  children: ReactNode;
}

const MegneticContainer = ({ children, classNames }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [postion, setPostion] = useState({ x: 0, y: 0 });

  const mouseMoveHandle = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (boundingRect) {
      const { width, height, top, left } = boundingRect;
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPostion({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPostion({ x: 0, y: 0 });
  };

  const { x, y } = postion;

  return (
    <motion.div
      className={cn("relative", classNames)}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={mouseMoveHandle}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default MegneticContainer;
