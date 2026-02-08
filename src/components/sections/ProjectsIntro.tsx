import { motion } from 'framer-motion';
import { ImmersiveTransition } from './ImmersiveTransition';
import { DarkScrollReveal } from '@/components/ui/ScrollText';
import { GlowingInsight } from '@/components/ui/DiscoverableElement';

const ProjectsIntro = () => {
  return (
    <ImmersiveTransition variant="deep">
      {/* Interactive insights */}
      <GlowingInsight 
        text="Code that teaches itself" 
        position={{ top: '20%', left: '15%' }}
      />
      <GlowingInsight 
        text="From prototype to production" 
        position={{ bottom: '25%', right: '12%' }}
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
          <span className="font-display text-xl text-cream">03</span>
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
        The Work
      </motion.p>

      {/* Scroll-linked word reveal */}
      <DarkScrollReveal highlightWords={["production-grade"]}>
        Building production-grade systems that create real impact.
      </DarkScrollReveal>

      {/* Supporting text */}
      <motion.p 
        className="font-editorial text-base md:text-lg text-cream/60 text-center max-w-xl leading-relaxed mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        From AI-powered code tutorials to financial assistants — each project solves real problems.
      </motion.p>

      {/* Scroll hint */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="w-px h-16 bg-gradient-to-b from-cream/40 to-transparent mx-auto"
          animate={{ scaleY: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </ImmersiveTransition>
  );
};

export default ProjectsIntro;
