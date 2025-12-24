import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur';
  delay?: number;
  stagger?: boolean;
}

export const AnimatedSection = ({ 
  children, 
  className, 
  animation = 'fade-up',
  delay = 0,
  stagger = false
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const baseStyles = 'transition-all duration-700 ease-out';
  
  const animationStyles = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    'fade-left': {
      hidden: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    'fade-right': {
      hidden: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    'scale': {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    'blur': {
      hidden: 'opacity-0 blur-sm',
      visible: 'opacity-100 blur-0'
    }
  };

  const currentAnimation = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        baseStyles,
        isVisible ? currentAnimation.visible : currentAnimation.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;