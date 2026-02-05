 import { useRef, ReactNode } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { cn } from '@/lib/utils';
 
 interface ImmersiveSectionProps {
   children: ReactNode;
   className?: string;
   bgColor?: 'cream' | 'ink' | 'gold';
   parallaxIntensity?: number;
 }
 
 // Full-viewport section with parallax and color transitions
 export const ImmersiveSection = ({ 
   children, 
   className,
   bgColor = 'cream',
   parallaxIntensity = 0.2
 }: ImmersiveSectionProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start end", "end start"],
   });
 
   const y = useTransform(scrollYProgress, [0, 1], [0, -100 * parallaxIntensity]);
   const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
 
   const bgColors = {
     cream: 'bg-background',
     ink: 'bg-ink text-cream',
     gold: 'bg-gold text-cream',
   };
 
   return (
     <section 
       ref={containerRef}
       className={cn(
         "relative min-h-screen overflow-hidden",
         bgColors[bgColor],
         className
       )}
     >
       <motion.div
         className="relative z-10"
         style={{ y, scale, opacity }}
       >
         {children}
       </motion.div>
     </section>
   );
 };
 
 // Curved section divider like Sleep Well
 interface CurvedDividerProps {
   direction?: 'up' | 'down';
   color?: string;
 }
 
 export const CurvedDivider = ({ 
   direction = 'down',
   color = 'hsl(var(--background))'
 }: CurvedDividerProps) => {
   const path = direction === 'down'
     ? "M0,0 L0,60 Q50,100 100,60 L100,0 Z"
     : "M0,100 L0,40 Q50,0 100,40 L100,100 Z";
 
   return (
     <div className="absolute inset-x-0 h-24 pointer-events-none" style={{ 
       top: direction === 'down' ? '100%' : 'auto',
       bottom: direction === 'up' ? '100%' : 'auto',
       transform: direction === 'down' ? 'translateY(-1px)' : 'translateY(1px)'
     }}>
       <svg 
         viewBox="0 0 100 100" 
         preserveAspectRatio="none"
         className="w-full h-full"
       >
         <path d={path} fill={color} />
       </svg>
     </div>
   );
 };
 
 // Hero-style immersive intro with dramatic parallax
 interface HeroImmersiveProps {
   children: ReactNode;
   className?: string;
 }
 
 export const HeroImmersive = ({ children, className }: HeroImmersiveProps) => {
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
       className={cn("relative min-h-screen overflow-hidden", className)}
     >
       <motion.div
         className="relative z-10 h-full"
         style={{ y, opacity, scale }}
       >
         {children}
       </motion.div>
     </section>
   );
 };
 
 export default ImmersiveSection;