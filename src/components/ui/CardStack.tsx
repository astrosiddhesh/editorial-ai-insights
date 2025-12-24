import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardStackProps {
  children: ReactNode[];
  className?: string;
  /** milliseconds between scroll steps */
  stepCooldownMs?: number;
}

export const CardStack = ({
  children,
  className,
  stepCooldownMs = 520,
}: CardStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelAccumRef = useRef(0);
  const lastStepAtRef = useRef(0);
  const isActiveRef = useRef(false);

  const totalCards = children.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const canStepPrev = activeIndex > 0;
  const canStepNext = activeIndex < totalCards - 1;

  const step = (dir: -1 | 1) => {
    setActiveIndex((prev) => {
      const next = Math.max(0, Math.min(totalCards - 1, prev + dir));
      return next;
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // “Pinned deck is active” when it's mostly in view.
        isActiveRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.6;
      },
      { threshold: [0, 0.3, 0.6, 0.9] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (!isActiveRef.current) return;

      const dir = e.deltaY > 0 ? 1 : -1;

      // At bounds, let the page scroll naturally out of the pinned section.
      if ((dir === 1 && !canStepNext) || (dir === -1 && !canStepPrev)) {
        return;
      }

      // We are handling scroll as a “stepper” inside this section.
      e.preventDefault();

      // Accumulate trackpad deltas until a threshold.
      wheelAccumRef.current += e.deltaY;
      const now = performance.now();
      const cooldownOk = now - lastStepAtRef.current >= stepCooldownMs;

      const threshold = 70; // feels good across wheel + trackpad
      if (!cooldownOk) return;

      if (wheelAccumRef.current >= threshold) {
        wheelAccumRef.current = 0;
        lastStepAtRef.current = now;
        step(1);
      } else if (wheelAccumRef.current <= -threshold) {
        wheelAccumRef.current = 0;
        lastStepAtRef.current = now;
        step(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [canStepNext, canStepPrev, stepCooldownMs]);

  // Touch support (simple swipe up/down to step)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startY = 0;
    let moved = false;

    const onTouchStart = (e: TouchEvent) => {
      if (!isActiveRef.current) return;
      startY = e.touches[0]?.clientY ?? 0;
      moved = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isActiveRef.current) return;
      if (moved) return;

      const currentY = e.touches[0]?.clientY ?? startY;
      const delta = startY - currentY;
      const dir = delta > 0 ? 1 : -1;

      if (Math.abs(delta) < 60) return;

      if ((dir === 1 && !canStepNext) || (dir === -1 && !canStepPrev)) {
        return;
      }

      // Stop page scrolling while we step cards.
      e.preventDefault();
      moved = true;
      step(dir as 1 | -1);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [canStepNext, canStepPrev]);

  const transforms = useMemo(() => {
    return children.map((_, index) => {
      const isPast = index < activeIndex;
      const isFuture = index > activeIndex;
      const isActive = index === activeIndex;

      if (isActive) {
        return {
          translateX: 0,
          translateY: 0,
          rotate: -8,
          scale: 1,
          opacity: 1,
          zIndex: 50,
          pointerEvents: "auto" as const,
        };
      }

      if (isPast) {
        const offset = activeIndex - index;
        return {
          translateX: -320 - offset * 70,
          translateY: 30 + offset * 18,
          rotate: -18 - offset * 6,
          scale: Math.max(0.72, 0.92 - offset * 0.08),
          opacity: Math.max(0.18, 0.8 - offset * 0.2),
          zIndex: 10 - offset,
          pointerEvents: "none" as const,
        };
      }

      if (isFuture) {
        const offset = index - activeIndex;
        return {
          translateX: 80 + offset * 45,
          translateY: -10 - offset * 10,
          rotate: 8 + offset * 4,
          scale: Math.max(0.72, 0.98 - offset * 0.06),
          opacity: Math.max(0.2, 0.95 - offset * 0.18),
          zIndex: 40 - offset,
          pointerEvents: "none" as const,
        };
      }

      return {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 0,
        pointerEvents: "none" as const,
      };
    });
  }, [children, activeIndex]);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* This is the “static/pinned” viewport for the deck */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-3xl h-[70vh] flex items-center justify-center">
          {children.map((child, index) => {
            const t = transforms[index];

            return (
              <div
                key={index}
                className="absolute transition-transform duration-500 ease-out will-change-transform"
                style={{
                  transform: `translateX(${t.translateX}px) translateY(${t.translateY}px) rotate(${t.rotate}deg) scale(${t.scale})`,
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

        {/* Dots */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
          {children.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
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
      </div>

      {/* Spacer below the sticky viewport so the page can continue */}
      <div style={{ height: `${Math.max(1, totalCards - 1) * 80}vh` }} />
    </div>
  );
};

export default CardStack;

