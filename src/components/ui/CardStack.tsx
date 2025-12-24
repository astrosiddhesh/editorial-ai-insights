import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardStackProps {
  children: ReactNode[];
  className?: string;
  /** Height per step in viewport heights (vh). Higher = slower steps. */
  stepVh?: number;
  /** Sticky offset from top (px). Use to account for a fixed header. */
  stickyTopPx?: number;
}

export const CardStack = ({
  children,
  className,
  stepVh = 100,
  stickyTopPx = 0,
}: CardStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const total = children.length;

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current;
      if (!container) return;

      const clamped = Math.max(0, Math.min(total - 1, index));
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollRange = Math.max(1, containerHeight - viewportHeight);

      // each card gets an equal scroll slice
      const progress = total <= 1 ? 0 : clamped / (total - 1);
      const targetScrollTop = containerTop + progress * scrollRange;

      window.scrollTo({ top: targetScrollTop, behavior: "smooth" });
    },
    [total]
  );

  // Track when this component is in view (so dots don't show on other sections)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: [0, 0.2, 0.35, 0.6] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Map page scroll progress (within this section) -> active card index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const containerH = container.offsetHeight;

      // progress 0..1 while scrolling through this section
      const start = viewportH - rect.top;
      const range = Math.max(1, containerH - viewportH);
      const progress = Math.max(0, Math.min(1, start / range));

      const idx = total <= 1 ? 0 : Math.round(progress * (total - 1));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  // Mobile swipe (up/down) to step cards while keeping the box static
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startY = 0;
    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      startY = t.clientY;
      startX = t.clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0];
      if (!t) return;

      const deltaY = startY - t.clientY;
      const deltaX = startX - t.clientX;

      // prioritize vertical swipe for stepping; ignore if mostly horizontal
      if (Math.abs(deltaY) < 60 || Math.abs(deltaY) < Math.abs(deltaX)) return;

      if (!isActive) return;

      if (deltaY > 0) scrollToIndex(activeIndex + 1);
      else scrollToIndex(activeIndex - 1);
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [activeIndex, isActive, scrollToIndex]);

  const transforms = useMemo(() => {
    return children.map((_, index) => {
      const offset = index - activeIndex;
      const isPast = offset < 0;
      const isActiveCard = offset === 0;
      const isFuture = offset > 0;

      // The "static box" behavior: only the content changes; the frame stays.
      // Keep a subtle stacked hint for future cards.
      if (isActiveCard) {
        return {
          transform: "translateY(0px) translateX(0px) rotate(0deg) scale(1)",
          opacity: 1,
          zIndex: 30,
          pointerEvents: "auto" as const,
        };
      }

      if (isFuture) {
        const depth = Math.min(3, offset);
        return {
          transform: `translateY(${depth * 12}px) translateX(${depth * 10}px) rotate(${depth * 1.25}deg) scale(${1 - depth * 0.04})`,
          opacity: Math.max(0.22, 0.55 - depth * 0.12),
          zIndex: 20 - depth,
          pointerEvents: "none" as const,
        };
      }

      // Past cards: slide away and disappear
      const depth = Math.min(2, Math.abs(offset));
      return {
        transform: `translateY(-120%) translateX(-18%) rotate(-14deg) scale(${0.96 - depth * 0.04})`,
        opacity: 0,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    });
  }, [children, activeIndex]);

  const sectionHeightVh = Math.max(1, total) * stepVh;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${sectionHeightVh}vh` }}
    >
      {/* Static/sticky viewport (the "box" stays put) */}
      <div
        className="sticky flex h-screen items-center justify-center overflow-hidden"
        style={{ top: stickyTopPx }}
      >
        <div className="relative w-full max-w-6xl px-6">
          {/* The frame/box */}
          <div className="relative mx-auto w-[min(92vw,46rem)] h-[min(72vh,36rem)]">
            {children.map((child, index) => {
              const t = transforms[index];
              return (
                <div
                  key={index}
                  className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform"
                  style={{
                    transform: t.transform,
                    opacity: t.opacity,
                    zIndex: t.zIndex,
                    pointerEvents: t.pointerEvents,
                  }}
                  aria-hidden={index !== activeIndex}
                >
                  {child}
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots (only while Projects is on screen) */}
        {isActive && total > 1 && (
          <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
            {children.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150",
                  index === activeIndex
                    ? "bg-gold scale-125"
                    : index < activeIndex
                      ? "bg-gold/60"
                      : "bg-muted-foreground/35"
                )}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Accessibility: announce current card */}
      <p className="sr-only" aria-live="polite">
        Project {Math.min(total, activeIndex + 1)} of {total}
      </p>
    </div>
  );
};

export default CardStack;
