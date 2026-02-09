import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DarkScrollReveal } from '@/components/ui/ScrollText';
import { GlowingInsight } from '@/components/ui/DiscoverableElement';
import illustrationMoonwalker from '@/assets/illustration-moonwalker.png';

const ImmersiveIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const curveY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);
  const illustrationScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
  const illustrationY = useTransform(scrollYProgress, [0.2, 0.6], [40, -20]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[140vh] overflow-hidden"
      style={{ backgroundColor: "hsl(220, 100%, 23%)" }}
    >
      {/* Curved top transition */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
          style={{ y: curveY }}
        >
          <path d="M0,0 L0,60 Q720,120 1440,60 L1440,0 Z" fill="hsl(45, 70%, 91%)" />
        </motion.svg>
      </div>

      {/* Interactive glowing insights */}
      <GlowingInsight 
        text="Sleep is where ideas consolidate" 
        position={{ top: '25%', left: '12%' }}
      />
      <GlowingInsight 
        text="Deterministic meets probabilistic" 
        position={{ top: '35%', right: '10%' }}
      />
      <GlowingInsight 
        text="Accuracy over novelty" 
        position={{ bottom: '30%', left: '18%' }}
      />

      {/* Scattered star dots — like the reference */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cream/40"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 2 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Section indicator */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 rounded-full border border-cream/30 flex items-center justify-center">
            <span className="font-display text-xl text-cream">02</span>
          </div>
        </motion.div>

        {/* Label */}
        <motion.p 
          className="text-xs uppercase tracking-[0.4em] text-cream/60 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          The Philosophy
        </motion.p>

        {/* Scroll-linked word reveal */}
        <DarkScrollReveal highlightWords={["practically", "selectively"]}>
          Rather than treating GenAI as a novelty, apply it practically and selectively.
        </DarkScrollReveal>

        {/* Supporting text */}
        <motion.p 
          className="font-editorial text-lg md:text-xl text-cream/70 text-center max-w-2xl leading-relaxed mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Combining deterministic BI pipelines with LLM reasoning to maintain accuracy, explainability, and cost control.
        </motion.p>

        {/* Decorative line */}
        <motion.div 
          className="mt-16 w-px h-24 bg-gradient-to-b from-cream/40 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>

      {/* Editorial illustration — moonwalker */}
      <motion.div 
        className="relative z-10 flex justify-center px-6 pb-32 -mt-8"
        style={{ scale: illustrationScale, y: illustrationY }}
      >
        <motion.img
          src={illustrationMoonwalker}
          alt="Figure standing on crescent moon gazing at data constellations"
          className="w-72 md:w-96 h-auto rounded-full opacity-80"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>

      {/* Curved bottom transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,120 L0,60 Q720,0 1440,60 L1440,120 Z" fill="hsl(45, 70%, 91%)" />
        </svg>
      </div>
    </section>
  );
};

export default ImmersiveIntro;
