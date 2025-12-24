import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CardStackProps {
  children: ReactNode[];
  className?: string;
}

export const CardStack = ({ children, className }: CardStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const totalCards = children.length;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start when section enters, end when it leaves
      const sectionHeight = rect.height;
      const scrollStart = windowHeight * 0.3;
      const scrollEnd = -(sectionHeight - windowHeight * 0.7);
      
      const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / (scrollStart - scrollEnd)));
      setScrollProgress(progress);
      
      // Calculate which card should be active
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
      style={{ 
        height: `${totalCards * 100 + 50}vh`,
      }}
    >
      <div className="sticky top-[15vh] flex justify-center items-start py-8">
        <div className="relative w-full flex justify-center" style={{ height: '70vh' }}>
          {children.map((child, index) => {
            const isActive = index === activeIndex;
            const isPast = index < activeIndex;
            const isFuture = index > activeIndex;
            
            // Cards that have passed fan out to the left
            // Active card is centered
            // Future cards stack on the right
            
            let rotation = 0;
            let translateX = 0;
            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = totalCards - index;

            if (isPast) {
              // Fan out to the left
              const pastOffset = activeIndex - index;
              rotation = -15 - (pastOffset * 5);
              translateX = -350 - (pastOffset * 60);
              translateY = pastOffset * 20;
              scale = 0.85 - (pastOffset * 0.05);
              opacity = Math.max(0.3, 1 - pastOffset * 0.2);
              zIndex = index;
            } else if (isActive) {
              // Active card - front and center
              rotation = -5;
              translateX = 0;
              translateY = 0;
              scale = 1;
              opacity = 1;
              zIndex = totalCards + 1;
            } else if (isFuture) {
              // Stack on the right
              const futureOffset = index - activeIndex;
              rotation = 5 + (futureOffset * 3);
              translateX = 50 + (futureOffset * 30);
              translateY = futureOffset * -8;
              scale = 1 - (futureOffset * 0.03);
              opacity = Math.max(0.4, 1 - futureOffset * 0.15);
              zIndex = totalCards - futureOffset;
            }

            return (
              <div
                key={index}
                className="absolute left-1/2 transition-all duration-500 ease-out cursor-pointer"
                style={{
                  transform: `
                    translateX(calc(-50% + ${translateX}px)) 
                    translateY(${translateY}px) 
                    rotate(${rotation}deg) 
                    scale(${scale})
                  `,
                  zIndex,
                  opacity,
                  transformOrigin: 'center bottom',
                }}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {children.map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex 
                ? "bg-gold scale-125" 
                : index < activeIndex 
                  ? "bg-gold/50" 
                  : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
