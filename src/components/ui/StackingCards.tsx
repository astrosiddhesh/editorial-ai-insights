"use client";

import { ReactNode, useRef, createContext, useContext } from "react";
import { motion, useScroll, useTransform, MotionValue, UseScrollOptions } from "framer-motion";
import { cn } from "@/lib/utils";

// Context for passing scroll progress and card count
interface StackingCardsContextValue {
  scrollYProgress: MotionValue<number>;
  totalCards: number;
  scaleMultiplier: number;
}

const StackingCardsContext = createContext<StackingCardsContextValue | null>(null);

interface StackingCardsProps {
  children: ReactNode;
  /** Total number of cards (required for calculating scale intensity) */
  totalCards: number;
  /** The intensity of the card scale effect (default: 0.03) */
  scaleMultiplier?: number;
  /** Scroll options for useScroll hook */
  scrollOptions?: UseScrollOptions;
  className?: string;
}

export const StackingCards = ({
  children,
  totalCards,
  scaleMultiplier = 0.03,
  scrollOptions,
  className,
}: StackingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    ...scrollOptions,
  });

  return (
    <StackingCardsContext.Provider value={{ scrollYProgress, totalCards, scaleMultiplier }}>
      <div ref={containerRef} className={cn("relative", className)}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
};

interface StackingCardItemProps {
  children: ReactNode;
  /** 0-based index of this card */
  index: number;
  /** Top position as CSS value (default: "5vh + index * 3vh") */
  topPosition?: string;
  className?: string;
}

export const StackingCardItem = ({
  children,
  index,
  topPosition,
  className,
}: StackingCardItemProps) => {
  const context = useContext(StackingCardsContext);
  if (!context) {
    throw new Error("StackingCardItem must be used within StackingCards");
  }

  const { scrollYProgress, totalCards, scaleMultiplier } = context;

  // Calculate the scale: first card scales down most, last card scales least
  // Based on scroll progress, cards scale from 1 to their target scale
  const targetScale = 1 - (totalCards - 1 - index) * scaleMultiplier;

  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  // Default top position with slight offset per card
  const computedTop = topPosition ?? `calc(5vh + ${index * 3}vh)`;

  return (
    <div
      className="sticky w-full"
      style={{
        top: computedTop,
        height: `calc(100vh - ${computedTop})`,
      }}
    >
      <motion.div
        style={{ scale }}
        className={cn(
          "origin-top w-full h-full flex items-start justify-center",
          className
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StackingCards;
