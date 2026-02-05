 import { useRef } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { ImmersiveTransition } from './ImmersiveTransition';
 
 const ProjectsIntro = () => {
   return (
     <ImmersiveTransition variant="deep">
       {/* Section indicator */}
       <motion.div 
         className="mb-8"
         initial={{ opacity: 0, scale: 0.8 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.6 }}
       >
         <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center">
           <span className="font-display text-xl text-gold">03</span>
         </div>
       </motion.div>
 
       {/* Label */}
       <motion.p 
         className="text-xs uppercase tracking-[0.4em] text-gold/60 mb-10"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.2 }}
       >
         The Work
       </motion.p>
 
       {/* Main statement */}
       <motion.h2 
         className="font-display text-3xl md:text-5xl lg:text-6xl text-cream text-center max-w-4xl leading-tight mb-8"
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
       >
         Building{' '}
         <span className="text-gold italic">production-grade</span>{' '}
         systems that create real impact.
       </motion.h2>
 
       {/* Supporting text */}
       <motion.p 
         className="font-editorial text-base md:text-lg text-cream/60 text-center max-w-xl leading-relaxed"
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
           className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent mx-auto"
           animate={{ scaleY: [1, 0.6, 1] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
         />
       </motion.div>
     </ImmersiveTransition>
   );
 };
 
 export default ProjectsIntro;