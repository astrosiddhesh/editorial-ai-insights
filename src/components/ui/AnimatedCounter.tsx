import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2000,
  className 
}: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });
  const count = useCountUp({ end, duration, enabled: isVisible });

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;