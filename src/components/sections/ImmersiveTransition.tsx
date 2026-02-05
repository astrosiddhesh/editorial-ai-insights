 import { useRef, ReactNode } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { cn } from '@/lib/utils';
 
 interface ImmersiveTransitionProps {
   children: ReactNode;
   className?: string;
   variant?: 'ink' | 'gold' | 'deep';
 }
 
 // Reusable immersive dark section with curved dividers
 export const ImmersiveTransition = ({ 
   children, 
   className,
   variant = 'ink'
 }: ImmersiveTransitionProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start end", "end start"],
   });
 
   const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
   const contentY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);
 
   const bgColors = {
     ink: 'bg-ink',
     gold: 'bg-gradient-to-b from-gold-dark to-ink',
     deep: 'bg-gradient-to-b from-[hsl(220,35%,8%)] to-ink',
   };
 
   return (
     <section 
       ref={containerRef}
       className={cn(
         "relative min-h-[80vh] overflow-hidden",
         bgColors[variant],
         className
       )}
     >
       {/* Curved top divider */}
       <div className="absolute top-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
         <svg
           viewBox="0 0 1440 120"
           preserveAspectRatio="none"
           className="absolute bottom-0 w-full h-full"
         >
           <path
             d="M0,0 L0,80 Q360,120 720,80 Q1080,40 1440,80 L1440,0 Z"
             fill="hsl(45, 30%, 96%)"
           />
         </svg>
       </div>
 
       {/* Content */}
       <motion.div 
         className="relative z-20 flex flex-col items-center justify-center min-h-[80vh] px-6 py-32"
         style={{ opacity: contentOpacity, y: contentY }}
       >
         {children}
       </motion.div>
 
       {/* Curved bottom divider */}
       <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 overflow-hidden z-10">
         <svg
           viewBox="0 0 1440 120"
           preserveAspectRatio="none"
           className="absolute top-0 w-full h-full"
         >
           <path
             d="M0,120 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,120 Z"
             fill="hsl(45, 30%, 96%)"
           />
         </svg>
       </div>
 
       {/* Floating particles */}
       <ParallaxParticles scrollYProgress={scrollYProgress} />
     </section>
   );
 };
 
 // Parallax floating particles
 const ParallaxParticles = ({ scrollYProgress }: { scrollYProgress: any }) => {
   const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
   const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
   const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
   const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
   const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
 
   return (
     <div className="absolute inset-0 pointer-events-none overflow-hidden">
       {/* Large floating orb */}
       <motion.div
         className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-gold/5 blur-3xl"
         style={{ y: y1 }}
       />
       
       {/* Small accent dots */}
       <motion.div
         className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-gold/40"
         style={{ y: y2 }}
         animate={{ 
           opacity: [0.3, 0.6, 0.3],
           scale: [1, 1.2, 1]
         }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       />
       <motion.div
         className="absolute top-[40%] left-[10%] w-1.5 h-1.5 rounded-full bg-cream/30"
         style={{ y: y3 }}
         animate={{ 
           opacity: [0.2, 0.5, 0.2],
         }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       />
       <motion.div
         className="absolute bottom-[30%] right-[15%] w-1 h-1 rounded-full bg-gold/50"
         style={{ y: y1 }}
         animate={{ 
           opacity: [0.4, 0.7, 0.4],
         }}
         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
       />
       
       {/* Geometric shapes */}
       <motion.div
         className="absolute top-[30%] right-[25%] w-12 h-12 border border-gold/20 rotate-45"
         style={{ y: y2, rotate: rotate1 }}
       />
       <motion.div
         className="absolute bottom-[40%] left-[20%] w-8 h-8 border border-cream/10"
         style={{ y: y3, rotate: rotate2 }}
       />
       
       {/* Decorative lines */}
       <motion.div
         className="absolute top-[50%] left-[5%] w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent"
         style={{ y: y1 }}
       />
       <motion.div
         className="absolute top-[35%] right-[8%] w-px h-24 bg-gradient-to-b from-transparent via-cream/10 to-transparent"
         style={{ y: y2 }}
       />
     </div>
   );
 };
 
 export default ImmersiveTransition;