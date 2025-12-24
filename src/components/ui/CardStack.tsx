import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CardStackProps {
  children: ReactNode[];
  className?: string;
}

export const CardStack = ({ children, className }: CardStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through this section
      const start = windowHeight * 0.8;
      const end = -rect.height * 0.5;
      const current = rect.top;
      
      const progress = Math.max(0, Math.min(1, (start - current) / (start - end)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCards = children.length;

  return (
    <div 
      ref={containerRef}
      className={cn("relative", className)}
      style={{ 
        height: `${Math.max(600, totalCards * 120 + 400)}px`,
      }}
    >
      <div className="sticky top-1/4 flex justify-center items-center">
        <div className="relative w-full max-w-md h-[400px]">
          {children.map((child, index) => {
            // Calculate individual card progress
            const cardStart = index / totalCards;
            const cardEnd = (index + 1.5) / totalCards;
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStart) / (cardEnd - cardStart)));
            
            // Fan out effect - cards spread as you scroll
            const baseRotation = -15 + (index * 8);
            const targetRotation = -30 + (index * 15);
            const rotation = baseRotation + (targetRotation - baseRotation) * cardProgress;
            
            // Horizontal spread
            const baseX = index * 5;
            const targetX = -150 + (index * 80);
            const translateX = baseX + (targetX - baseX) * cardProgress;
            
            // Vertical offset for stacking
            const baseY = index * -3;
            const targetY = index * -10;
            const translateY = baseY + (targetY - baseY) * cardProgress;
            
            // Z-index and scale
            const baseScale = 1 - (index * 0.02);
            const targetScale = 0.95 + (index * 0.02);
            const scale = baseScale + (targetScale - baseScale) * cardProgress;
            
            // Opacity reveal
            const opacity = Math.min(1, 0.4 + cardProgress * 0.6);

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-none"
                style={{
                  transform: `
                    translateX(calc(-50% + ${translateX}px)) 
                    translateY(calc(-50% + ${translateY}px)) 
                    rotate(${rotation}deg) 
                    scale(${scale})
                  `,
                  zIndex: totalCards - index + Math.floor(cardProgress * 10),
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
    </div>
  );
};

export default CardStack;
