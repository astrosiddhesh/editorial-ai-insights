import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatementRevealProps {
  text: string;
  className?: string;
  variant?: 'light' | 'dark';
  subtext?: string;
}

// Full-viewport massive text that reveals word by word on scroll
const StatementReveal = ({ 
  text, 
  className,
  variant = 'light',
  subtext
}: StatementRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.15"],
  });

  const words = text.split(' ');

  const bgStyles = variant === 'dark' 
    ? { backgroundColor: "hsl(220, 100%, 23%)" }
    : {};

  return (
    <section 
      ref={containerRef}
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden",
        variant === 'light' ? 'bg-background' : '',
        className
      )}
      style={bgStyles}
    >
      {/* Decorative elements */}
      {variant === 'dark' && (
        <>
          <div className="absolute top-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path d="M0,0 L0,80 Q720,120 1440,80 L1440,0 Z" fill="hsl(45, 70%, 91%)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
              <path d="M0,120 L0,40 Q720,0 1440,40 L1440,120 Z" fill="hsl(45, 70%, 91%)" />
            </svg>
          </div>
        </>
      )}

      {/* Main massive text */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <p className="font-display leading-[1.1] flex flex-wrap justify-center gap-x-[0.3em]"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}
        >
          {words.map((word, i) => (
            <MassiveWord 
              key={i} 
              word={word} 
              index={i} 
              total={words.length} 
              scrollYProgress={scrollYProgress}
              variant={variant}
            />
          ))}
        </p>

        {/* Subtext */}
        {subtext && (
          <motion.p 
            className={cn(
              "font-editorial text-sm md:text-base mt-12 tracking-wide max-w-lg mx-auto",
              variant === 'dark' ? 'text-cream/50' : 'text-muted-foreground'
            )}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {subtext}
          </motion.p>
        )}
      </div>

      {/* Floating accent for dark variant */}
      {variant === 'dark' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-1/3 left-[10%] w-48 h-48 rounded-full bg-cream/5 blur-3xl"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-[15%] w-32 h-32 rounded-full bg-cream/3 blur-2xl"
            animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      )}
    </section>
  );
};

interface MassiveWordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: any;
  variant: 'light' | 'dark';
}

const MassiveWord = ({ word, index, total, scrollYProgress, variant }: MassiveWordProps) => {
  const start = index / total;
  const end = start + (1 / total) * 2;
  
  const opacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);
  const y = useTransform(scrollYProgress, [start, end], [10, 0]);
  
  const colorClass = variant === 'dark' ? 'text-cream' : 'text-headline';
  
  return (
    <motion.span 
      className={cn("inline-block font-bold", colorClass)}
      style={{ opacity, y }}
    >
      {word}
    </motion.span>
  );
};

export default StatementReveal;
