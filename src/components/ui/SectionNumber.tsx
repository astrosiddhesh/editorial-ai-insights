import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionNumberProps {
  current: number;
  total?: number;
  variant?: 'light' | 'dark';
  className?: string;
}

const SectionNumber = ({ 
  current, 
  total = 6, 
  variant = 'light',
  className 
}: SectionNumberProps) => {
  const colorClasses = variant === 'light' 
    ? 'text-primary/60' 
    : 'text-cream/40';
  
  const activeColorClasses = variant === 'light'
    ? 'text-primary/90'
    : 'text-cream/70';

  return (
    <motion.div 
      className={cn(
        "absolute top-8 right-8 z-20 font-display text-sm tracking-[0.3em] select-none",
        className
      )}
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <span className={activeColorClasses}>
        {String(current).padStart(2, '0')}
      </span>
      <span className={colorClasses}>
        {' / '}
        {String(total).padStart(2, '0')}
      </span>
    </motion.div>
  );
};

export default SectionNumber;
