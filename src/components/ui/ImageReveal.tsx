import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "diagonal";
  delay?: number;
}

const ImageReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
}: ImageRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const clipPaths = {
    up: {
      from: "inset(100% 0 0 0)",
      to: "inset(0% 0 0 0)",
    },
    left: {
      from: "inset(0 100% 0 0)",
      to: "inset(0 0% 0 0)",
    },
    right: {
      from: "inset(0 0 0 100%)",
      to: "inset(0 0 0 0%)",
    },
    diagonal: {
      from: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  };

  const clip = clipPaths[direction];
  const clipPath = useTransform(scrollYProgress, [0, 1], [clip.from, clip.to]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{ clipPath }}
    >
      <motion.div style={{ scale }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ImageReveal;
