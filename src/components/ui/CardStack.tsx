import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

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
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      // Calculate scroll progress through the section
      const scrollableDistance = containerHeight - windowHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      
      // Map progress to card index
      const cardIndex = Math.min(totalCards - 1, Math.floor(progress * totalCards));
      setActiveIndex(cardIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${totalCards * 80}vh` }}
    >
      <div className="sticky top-[20vh] h-[60vh] flex items-center justify-center">
        <div className="relative w-full max-w-lg mx-auto" style={{ height: '400px' }}>
          {children.map((child, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const isFuture = index > activeIndex;
            
            let rotation = 0;
            let translateX = 0;
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = totalCards - index;

            if (isPast) {
              const pastOffset = activeIndex - index;
              rotation = -12 - (pastOffset * 4);
              translateX = -280 - (pastOffset * 40);
              translateY = pastOffset * 15;
              scale = 0.9 - (pastOffset * 0.05);
              opacity = Math.max(0.2, 0.8 - pastOffset * 0.25);
              zIndex = index;
            } else if (isActive) {
              rotation = 0;
              translateX = 0;
              translateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = totalCards + 1;
            } else if (isFuture) {
              const futureOffset = index - activeIndex;
              rotation = 4 + (futureOffset * 2);
              translateX = 40 + (futureOffset * 25);
              translateY = futureOffset * -6;
              scale = 1 - (futureOffset * 0.04);
              opacity = Math.max(0.3, 1 - futureOffset * 0.2);
              zIndex = totalCards - futureOffset;
            }

            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transformOrigin: 'center center',
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const container = containerRef.current;
              if (!container) return;
              const rect = container.getBoundingClientRect();
              const containerTop = window.scrollY + rect.top;
              const scrollableDistance = rect.height - window.innerHeight;
              const targetScroll = containerTop + (index / totalCards) * scrollableDistance;
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            }}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-150",
              index === activeIndex 
                ? "bg-gold scale-125 shadow-lg shadow-gold/50" 
                : index < activeIndex 
                  ? "bg-gold/60" 
                  : "bg-muted-foreground/40"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
