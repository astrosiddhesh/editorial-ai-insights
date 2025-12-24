import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardStackProps {
  children: ReactNode[];
  className?: string;
}

export const CardStack = ({ children, className }: CardStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = children.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // How far into the section we've scrolled (0 to 1)
      const scrollStart = viewportHeight - rect.top;
      const scrollRange = containerHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrollStart / scrollRange));
      
      // Map progress to card index
      const newIndex = Math.min(
        totalCards - 1,
        Math.floor(progress * totalCards)
      );
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalCards]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        // Height = enough scroll room for all cards
        height: `${totalCards * 100}vh`,
      }}
    >
      {/* Sticky container that stays in view */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl aspect-[3/4] mx-auto">
          {children.map((child, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const isFuture = index > activeIndex;
            const offset = index - activeIndex;

            return (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out origin-bottom",
                  isPast && "pointer-events-none",
                  isFuture && "pointer-events-none"
                )}
                style={{
                  // Stack: active card on top, future cards below with offset
                  zIndex: totalCards - index,
                  // Transform: past cards fly up-left, future cards stack below
                  transform: isPast
                    ? `translateY(-120%) translateX(-30%) rotate(-15deg) scale(0.9)`
                    : isActive
                      ? `translateY(0) translateX(0) rotate(0deg) scale(1)`
                      : `translateY(${offset * 20}px) translateX(${offset * 10}px) rotate(${offset * 2}deg) scale(${1 - offset * 0.05})`,
                  opacity: isPast ? 0 : isActive ? 1 : Math.max(0.4, 1 - offset * 0.2),
                }}
                aria-hidden={!isActive}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress dots - fixed on the side */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              // Scroll to position for this card
              const container = containerRef.current;
              if (!container) return;
              const containerTop = container.offsetTop;
              const containerHeight = container.offsetHeight;
              const viewportHeight = window.innerHeight;
              const scrollRange = containerHeight - viewportHeight;
              const targetProgress = index / totalCards;
              const targetScroll = containerTop + targetProgress * scrollRange;
              window.scrollTo({ top: targetScroll, behavior: "smooth" });
            }}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              index === activeIndex
                ? "bg-gold scale-125"
                : index < activeIndex
                  ? "bg-gold/60"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none">
        <p className="text-xs text-muted-foreground/60 animate-pulse">
          Scroll to reveal cards
        </p>
      </div>
    </div>
  );
};

export default CardStack;
