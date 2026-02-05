 import { useRef, ReactNode } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { cn } from '@/lib/utils';
 
 interface HorizontalScrollProps {
   children: ReactNode;
   className?: string;
   panels: number;
 }
 
 // Horizontal scroll section that scrolls sideways as user scrolls down
 export const HorizontalScroll = ({ 
   children, 
   className,
   panels = 3
 }: HorizontalScrollProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end end"],
   });
 
   // Move from 0 to -(panels-1) * 100vw
   const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(panels - 1) * 100}%`]);
 
   return (
     <section 
       ref={containerRef}
       className={cn("relative", className)}
       style={{ height: `${panels * 100}vh` }}
     >
       <div className="sticky top-0 h-screen overflow-hidden">
         <motion.div 
           className="flex h-full"
           style={{ x }}
         >
           {children}
         </motion.div>
       </div>
     </section>
   );
 };
 
 interface HorizontalPanelProps {
   children: ReactNode;
   className?: string;
   bgColor?: 'cream' | 'ink' | 'gold';
 }
 
 export const HorizontalPanel = ({ 
   children, 
   className,
   bgColor = 'cream'
 }: HorizontalPanelProps) => {
   const bgColors = {
     cream: 'bg-background',
     ink: 'bg-ink text-cream',
     gold: 'bg-gold/10',
   };
 
   return (
     <div className={cn(
       "w-screen h-full flex-shrink-0 flex items-center justify-center p-12",
       bgColors[bgColor],
       className
     )}>
       {children}
     </div>
   );
 };
 
 export default HorizontalScroll;