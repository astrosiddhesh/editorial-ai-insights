import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DarkScrollReveal } from '@/components/ui/ScrollText';
import { GlowingInsight } from '@/components/ui/DiscoverableElement';
import illustrationRelease from '@/assets/illustration-release.png';

const ClosingStatement = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] overflow-hidden"
      style={{ backgroundColor: "hsl(220, 100%, 23%)" }}
    >
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,0 L0,60 Q720,120 1440,60 L1440,0 Z" fill="hsl(45, 70%, 91%)" />
        </svg>
      </div>

      {/* Interactive insights */}
      <GlowingInsight 
        text="Invisible by design" 
        position={{ top: '30%', left: '8%' }}
      />
      <GlowingInsight 
        text="The craft is in the constraint" 
        position={{ top: '25%', right: '12%' }}
      />

      {/* Scattered star dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cream/30"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-cream/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 flex flex-col items-center justify-center min-h-[90vh] px-6 py-32"
        style={{ opacity }}
      >
        {/* Infinity symbol */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 rounded-full border border-cream/30 flex items-center justify-center">
            <span className="font-display text-3xl text-cream">∞</span>
          </div>
        </motion.div>

        {/* Scroll-linked word reveal */}
        <DarkScrollReveal highlightWords={["invisible"]}>
          The best systems are invisible — they just work.
        </DarkScrollReveal>

        <motion.footer 
          className="text-sm uppercase tracking-[0.3em] text-cream/50 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          — Design Philosophy
        </motion.footer>

        {/* Editorial illustration — hands releasing */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.75, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            src={illustrationRelease}
            alt="Hands releasing glowing lanterns into the night sky"
            className="w-full max-w-lg h-auto rounded-2xl"
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div 
          className="mt-12 w-px h-20 bg-gradient-to-b from-cream/40 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute top-0 w-full h-full">
          <path d="M0,120 L0,60 Q720,0 1440,60 L1440,120 Z" fill="hsl(45, 70%, 91%)" />
        </svg>
      </div>
    </section>
  );
};

export default ClosingStatement;
