import { useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DarkScrollReveal } from '@/components/ui/ScrollText';
import { GlowingInsight } from '@/components/ui/DiscoverableElement';

const ShaderBlob = lazy(() => import("@/components/3d/ShaderBlob"));

const ImmersiveIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const curveY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] overflow-hidden"
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cream/40"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-cream/30"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-cream/30"
          animate={{ y: [0, -25, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* 3D Shader Blob */}
      <Suspense fallback={null}>
        <ShaderBlob />
      </Suspense>

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
