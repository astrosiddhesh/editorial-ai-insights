import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollTunnel = lazy(() => import("@/components/3d/ScrollTunnel"));

const TunnelCanvas = ({ getProgress }: { getProgress: () => number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(getProgress());
    }, 16);
    return () => clearInterval(interval);
  }, [getProgress]);

  return (
    <Suspense fallback={null}>
      <ScrollTunnel scrollProgress={progress} />
    </Suspense>
  );
};

const TunnelSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const tunnelProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 0.85], [0, 1, 1, 0]);
  const contentScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  useEffect(() => {
    const unsub = tunnelProgress.on('change', (v) => {
      progressRef.current = v;
    });
    return unsub;
  }, [tunnelProgress]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] overflow-hidden"
      style={{ backgroundColor: "hsl(220, 100%, 10%)" }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <TunnelCanvas getProgress={() => progressRef.current} />

        <motion.div
          className="relative z-10 text-center px-6 max-w-3xl mx-auto"
          style={{ opacity: contentOpacity, scale: contentScale }}
        >
          <p className="text-xs uppercase tracking-[0.5em] text-cream/40 mb-8">
            The Journey
          </p>
          <h2
            className="font-display text-cream leading-[1.05] mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)' }}
          >
            Into the System
          </h2>
          <p className="font-editorial text-cream/50 text-lg max-w-xl mx-auto leading-relaxed">
            Every pipeline, every model, every dashboard — engineered to move through complexity with clarity.
          </p>
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[hsl(220,100%,10%)] to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(220,100%,10%)] to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default TunnelSection;
