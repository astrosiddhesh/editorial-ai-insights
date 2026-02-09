import { useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const WireframeIcosahedron = lazy(() => import("@/components/3d/WireframeIcosahedron"));

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
        "relative min-h-screen flex flex-col items-center justify-center px-8 md:px-16 py-32 overflow-hidden",
        variant === 'light' ? 'bg-background' : '',
        className
      )}
      style={bgStyles}
    >
      {/* Decorative elements */}
      {variant === 'dark' && (
        <>
          <div className="absolute top-0 left-0 w-full h-28 md:h-40 overflow-hidden z-10">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
              <path d="M0,0 L0,80 Q720,120 1440,80 L1440,0 Z" fill="hsl(45, 70%, 91%)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-28 md:h-40 overflow-hidden z-10">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
              <path d="M0,120 L0,40 Q720,0 1440,40 L1440,120 Z" fill="hsl(45, 70%, 91%)" />
            </svg>
          </div>
        </>
      )}

      {/* Main massive text */}
      <div className="relative z-20 max-w-6xl mx-auto text-center">
        <p className="font-display leading-[1.05] flex flex-wrap justify-center gap-x-[0.35em]"
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
              "font-editorial text-sm md:text-lg mt-14 tracking-wide max-w-lg mx-auto leading-relaxed",
              variant === 'dark' ? 'text-cream/40' : 'text-muted-foreground/70'
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
        <>
          <Suspense fallback={null}>
            <WireframeIcosahedron />
          </Suspense>
          {/* Scattered star dots like Sleep Well reference */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-cream/30"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.1, 0.6, 0.1] }}
                transition={{
                  duration: 2 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            ))}
            <motion.div
              className="absolute top-1/3 left-[10%] w-64 h-64 rounded-full bg-cream/[0.04] blur-3xl"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full bg-cream/[0.03] blur-2xl"
              animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </>
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
  
  const opacity = useTransform(scrollYProgress, [start, end], [0.06, 1]);
  const y = useTransform(scrollYProgress, [start, end], [12, 0]);
  
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
