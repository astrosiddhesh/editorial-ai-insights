 import { useRef } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 
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
       className="relative min-h-[70vh] bg-ink overflow-hidden"
     >
       {/* Curved top divider */}
       <div className="absolute top-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
         <svg
           viewBox="0 0 1440 120"
           preserveAspectRatio="none"
           className="absolute bottom-0 w-full h-full"
         >
           <path
             d="M0,0 L0,60 Q720,120 1440,60 L1440,0 Z"
             fill="hsl(45, 30%, 96%)"
           />
         </svg>
       </div>
 
       {/* Parallax background elements */}
       <motion.div 
         className="absolute inset-0 pointer-events-none"
         style={{ y }}
       >
         {/* Large gradient orb */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/10 to-transparent blur-3xl" />
         
         {/* Floating stars */}
         <motion.div
           className="absolute top-[20%] left-[20%] w-1 h-1 rounded-full bg-cream/60"
           animate={{ 
             opacity: [0.3, 0.8, 0.3],
             scale: [1, 1.5, 1]
           }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
         />
         <motion.div
           className="absolute top-[30%] right-[25%] w-1.5 h-1.5 rounded-full bg-gold/50"
           animate={{ 
             opacity: [0.4, 0.9, 0.4],
             scale: [1, 1.3, 1]
           }}
           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
         />
         <motion.div
           className="absolute bottom-[35%] left-[30%] w-1 h-1 rounded-full bg-cream/40"
           animate={{ 
             opacity: [0.2, 0.6, 0.2],
           }}
           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
         />
         <motion.div
           className="absolute top-[45%] right-[15%] w-0.5 h-0.5 rounded-full bg-gold/70"
           animate={{ 
             opacity: [0.5, 1, 0.5],
           }}
           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
         />
       </motion.div>
 
       {/* Content */}
       <motion.div 
         className="relative z-20 flex flex-col items-center justify-center min-h-[70vh] px-6 py-32"
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
           <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center">
             <span className="font-display text-3xl text-gold">∞</span>
           </div>
         </motion.div>
 
         {/* Quote */}
         <motion.blockquote 
           className="text-center max-w-3xl"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
         >
           <p className="font-display text-2xl md:text-4xl lg:text-5xl text-cream leading-relaxed mb-8">
             The best systems are{' '}
             <span className="text-gold italic">invisible</span>
             {' '}— they just work.
           </p>
           <footer className="text-sm uppercase tracking-[0.3em] text-gold/60">
             — Design Philosophy
           </footer>
         </motion.blockquote>
 
         {/* Decorative line */}
         <motion.div 
           className="mt-12 w-px h-20 bg-gradient-to-b from-gold/40 to-transparent"
           initial={{ scaleY: 0 }}
           whileInView={{ scaleY: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6, duration: 0.8 }}
           style={{ transformOrigin: 'top' }}
         />
       </motion.div>
 
       {/* Curved bottom divider */}
       <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
         <svg
           viewBox="0 0 1440 120"
           preserveAspectRatio="none"
           className="absolute top-0 w-full h-full"
         >
           <path
             d="M0,120 L0,60 Q720,0 1440,60 L1440,120 Z"
             fill="hsl(45, 30%, 96%)"
           />
         </svg>
       </div>
     </section>
   );
 };
 
 export default ClosingStatement;