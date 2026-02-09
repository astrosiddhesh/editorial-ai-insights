import { ChevronDown } from "lucide-react";
import { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";

const HeroTorusKnot = lazy(() => import("@/components/3d/HeroTorusKnot"));

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle floating particles */}
      <FloatingParticles />

      {/* 3D Torus Knot */}
      <Suspense fallback={null}>
        <HeroTorusKnot />
      </Suspense>
      
      {/* Radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-primary/[0.07] to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-gradient-radial from-primary/[0.04] to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div 
        className="container max-w-5xl mx-auto text-center relative z-10 px-6"
        style={{ y, opacity, scale }}
      >
        {/* Overline */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="w-12 h-px bg-primary/30" />
          <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary/70">
            Data  ·  BI  ·  ML  ·  GenAI
          </p>
          <div className="w-12 h-px bg-primary/30" />
        </motion.div>

        {/* Main headline — MASSIVE */}
        <motion.h1 
          className="font-display font-bold leading-[0.9] mb-10"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-headline block">Siddhesh</span>
          <span className="text-primary block italic" style={{ fontSize: '0.85em' }}>Phapale</span>
        </motion.h1>

        {/* Primary tagline — editorial */}
        <motion.p 
          className="font-editorial text-lg md:text-2xl lg:text-3xl text-foreground/80 mb-6 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Building production-grade analytics and GenAI systems that turn data into automation and business impact.
        </motion.p>

        {/* Secondary tagline */}
        <motion.p 
          className="font-body text-sm md:text-base text-muted-foreground mb-20 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Engineer focused on converting data, BI, and GenAI into reliable automation, insights, and scale.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a 
            href="#contact" 
            className="group inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.3em] text-primary hover:text-bright-blue transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            <span>Start a Conversation</span>
            <motion.span 
              className="text-lg"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
          <motion.a 
            href="#projects" 
            className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-headline transition-colors duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a 
        href="#about" 
        className="absolute bottom-16 left-1/2 -translate-x-1/2 group cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
            ↓
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors duration-300" />
          </motion.div>
        </div>
      </motion.a>
    </section>
  );
};

export default Hero;
