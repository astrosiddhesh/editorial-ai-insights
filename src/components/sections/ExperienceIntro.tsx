import { useRef, useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImmersiveTransition } from './ImmersiveTransition';
import { DarkScrollReveal } from '@/components/ui/ScrollText';
import { GlowingInsight } from '@/components/ui/DiscoverableElement';

const ScrollTransitionScene = lazy(() => import("@/components/3d/ScrollTransitionScene"));

const ExperienceIntro = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '10+', label: 'Enterprise Systems' },
    { value: '40K+', label: 'Daily Users' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [sceneProgress, setSceneProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollLinked = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  useEffect(() => {
    const unsub = scrollLinked.on('change', (v) => {
      progressRef.current = v;
    });
    const interval = setInterval(() => {
      setSceneProgress(progressRef.current);
    }, 16);
    return () => { unsub(); clearInterval(interval); };
  }, [scrollLinked]);

  return (
    <div ref={containerRef}>
    <ImmersiveTransition variant="ink">
      {/* 3D Scroll-linked transition */}
      <Suspense fallback={null}>
        <ScrollTransitionScene scrollProgress={sceneProgress} />
      </Suspense>
      {/* Interactive insights */}
      <GlowingInsight 
        text="Scale is earned, not assumed" 
        position={{ top: '22%', right: '18%' }}
      />
      <GlowingInsight 
        text="Measured in outcomes, not outputs" 
        position={{ bottom: '28%', left: '15%' }}
      />

      {/* Section indicator */}
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 rounded-full border border-cream/30 flex items-center justify-center">
          <span className="font-display text-xl text-cream">04</span>
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
        Track Record
      </motion.p>

      {/* Scroll-linked word reveal */}
      <DarkScrollReveal highlightWords={["measurable"]}>
        Delivering measurable results at enterprise scale.
      </DarkScrollReveal>

      {/* Stats row */}
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
          >
            <div className="font-display text-4xl md:text-5xl text-cream mb-2">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-cream/50">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative element */}
      <motion.div 
        className="mt-16 flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        <div className="w-12 h-px bg-cream/30" />
        <div className="w-2 h-2 rounded-full bg-cream/40" />
        <div className="w-12 h-px bg-cream/30" />
      </motion.div>
    </ImmersiveTransition>
    </div>
  );
};

export default ExperienceIntro;
