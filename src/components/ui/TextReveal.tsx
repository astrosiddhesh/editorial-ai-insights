 import { useRef } from 'react';
 import { motion, useInView } from 'framer-motion';
 import { cn } from '@/lib/utils';
 
 interface TextRevealProps {
   children: string;
   className?: string;
   delay?: number;
   staggerDelay?: number;
   type?: 'words' | 'chars';
 }
 
 export const TextReveal = ({ 
   children, 
   className, 
   delay = 0,
   staggerDelay = 0.03,
   type = 'words'
 }: TextRevealProps) => {
   const ref = useRef<HTMLSpanElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-10%" });
 
   const items = type === 'words' 
     ? children.split(' ')
     : children.split('');
 
   return (
     <span ref={ref} className={cn("inline-block", className)}>
       {items.map((item, i) => (
         <span key={i} className="inline-block overflow-hidden">
           <motion.span
             className="inline-block"
             initial={{ y: "100%", opacity: 0 }}
             animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
             transition={{
               duration: 0.5,
               delay: delay + i * staggerDelay,
               ease: [0.25, 0.4, 0.25, 1],
             }}
           >
             {item}
             {type === 'words' && i < items.length - 1 ? '\u00A0' : ''}
           </motion.span>
         </span>
       ))}
     </span>
   );
 };
 
 interface LineRevealProps {
   children: React.ReactNode;
   className?: string;
   delay?: number;
 }
 
 export const LineReveal = ({ children, className, delay = 0 }: LineRevealProps) => {
   const ref = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, margin: "-10%" });
 
   return (
     <div ref={ref} className={cn("overflow-hidden", className)}>
       <motion.div
         initial={{ y: "100%" }}
         animate={isInView ? { y: 0 } : { y: "100%" }}
         transition={{
           duration: 0.8,
           delay,
           ease: [0.25, 0.4, 0.25, 1],
         }}
       >
         {children}
       </motion.div>
     </div>
   );
 };
 
 export default TextReveal;