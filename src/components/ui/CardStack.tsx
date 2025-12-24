import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface CardStackProps {
  children: ReactNode[];
  className?: string;
}

export const CardStack = ({ children, className }: CardStackProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className={cn("relative", className)}>
      {/* Scroll container with snap */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-6 px-6 md:-mx-12 md:px-12"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className={cn(
              "flex-shrink-0 snap-center",
              "transition-transform duration-300 ease-out",
              // Card width: almost full on mobile, with peek on sides
              "w-[85vw] md:w-[75vw] lg:w-[60vw] max-w-2xl",
              // Spacing between cards
              index === 0 ? "ml-0" : "ml-4 md:ml-6"
            )}
          >
            {child}
          </div>
        ))}
        {/* Extra padding at end for last card peek */}
        <div className="flex-shrink-0 w-[15vw] md:w-[12.5vw] lg:w-[20vw]" />
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {children.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              const container = scrollRef.current;
              if (!container) return;
              const cards = container.querySelectorAll(":scope > div");
              const card = cards[index] as HTMLElement;
              if (card) {
                card.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              "bg-gold/30 hover:bg-gold/60"
            )}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint on mobile */}
      <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
        ← Swipe to see more →
      </p>
    </div>
  );
};

export default CardStack;
