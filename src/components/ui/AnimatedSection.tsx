import { ReactNode, useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur' | 'slide-up' | 'parallax' | 'reveal';
  delay?: number;
  stagger?: boolean;
  parallaxSpeed?: number;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0,
  stagger = false,
  parallaxSpeed = 0.1
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [parallaxY, setParallaxY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    if (animation !== 'parallax') return;
    
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setParallaxY(scrollProgress * 50 * parallaxSpeed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animation, parallaxSpeed]);

  const baseStyles = 'transition-all ease-out';
  
  const animationStyles = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-12',
      visible: 'opacity-100 translate-y-0',
      duration: 'duration-700'
    },
    'fade-left': {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0',
      duration: 'duration-700'
    },
    'fade-right': {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0',
      duration: 'duration-700'
    },
    'scale': {
      hidden: 'opacity-0 scale-90',
      visible: 'opacity-100 scale-100',
      duration: 'duration-500'
    },
    'blur': {
      hidden: 'opacity-0 blur-md scale-98',
      visible: 'opacity-100 blur-0 scale-100',
      duration: 'duration-800'
    },
    'slide-up': {
      hidden: 'opacity-0 translate-y-20',
      visible: 'opacity-100 translate-y-0',
      duration: 'duration-1000'
    },
    'parallax': {
      hidden: 'opacity-0',
      visible: 'opacity-100',
      duration: 'duration-700'
    },
    'reveal': {
      hidden: 'opacity-0 translate-y-8 scale-95',
      visible: 'opacity-100 translate-y-0 scale-100',
      duration: 'duration-600'
    }
  };

  const currentAnimation = animationStyles[animation];

  const combinedRef = (node: HTMLDivElement | null) => {
    (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    (elementRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
  };

  return (
    <div
      ref={combinedRef}
      className={cn(
        baseStyles,
        currentAnimation.duration,
        isVisible ? currentAnimation.visible : currentAnimation.hidden,
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...(animation === 'parallax' && isVisible ? { transform: `translateY(${parallaxY}px)` } : {})
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;