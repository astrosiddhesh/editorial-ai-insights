 import { useRef } from 'react';
 import { motion, useScroll, useTransform } from 'framer-motion';
 import { cn } from '@/lib/utils';
 
 interface ScrollTextProps {
   children: string;
   className?: string;
   as?: 'p' | 'h1' | 'h2' | 'h3' | 'span';
   staggerWords?: boolean;
 }
 
 // Scroll-linked text where each word reveals as you scroll
 export const ScrollText = ({ 
   children, 
   className,
   as: Component = 'p',
   staggerWords = true
 }: ScrollTextProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start 0.9", "start 0.3"],
   });
 
   const words = children.split(' ');
 
   return (
     <div ref={containerRef}>
       <Component className={cn("flex flex-wrap", className)}>
         {words.map((word, i) => (
           <Word 
             key={i} 
             word={word} 
             index={i} 
             total={words.length} 
             scrollYProgress={scrollYProgress}
           />
         ))}
       </Component>
     </div>
   );
 };
 
 interface WordProps {
   word: string;
   index: number;
   total: number;
   scrollYProgress: any;
 }
 
 const Word = ({ word, index, total, scrollYProgress }: WordProps) => {
   const start = index / total;
   const end = start + (1 / total) * 1.5;
   
   const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
   const y = useTransform(scrollYProgress, [start, end], [4, 0]);
   
   return (
     <motion.span 
       className="mr-[0.25em] inline-block"
       style={{ opacity, y }}
     >
       {word}
     </motion.span>
   );
 };
 
 // Large paragraph that reveals word by word on scroll
 interface ScrollParagraphProps {
   children: string;
   className?: string;
   number?: string;
   label?: string;
 }
 
 export const ScrollParagraph = ({ 
   children, 
   className,
   number,
   label
 }: ScrollParagraphProps) => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start 0.85", "start 0.25"],
   });
 
   const words = children.split(' ');
 
   return (
     <div ref={containerRef} className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-6">
       {/* Section number */}
       {number && (
         <motion.div 
           className="mb-8"
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
         >
           <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center">
             <span className="font-display text-lg text-gold">{number}</span>
           </div>
         </motion.div>
       )}
       
       {/* Label */}
       {label && (
         <motion.p 
           className="text-xs uppercase tracking-[0.3em] text-gold mb-6"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.5 }}
         >
           • {label} •
         </motion.p>
       )}
       
       {/* Main text */}
       <p className={cn(
         "font-editorial text-2xl md:text-4xl lg:text-5xl text-center leading-relaxed max-w-4xl",
         className
       )}>
         {words.map((word, i) => (
           <ScrollWord 
             key={i} 
             word={word} 
             index={i} 
             total={words.length} 
             scrollYProgress={scrollYProgress}
           />
         ))}
       </p>
     </div>
   );
 };
 
 const ScrollWord = ({ word, index, total, scrollYProgress }: WordProps) => {
   const start = index / total;
   const end = start + (1 / total) * 2;
   
   const opacity = useTransform(scrollYProgress, [start, end], [0.12, 1]);
   
   return (
     <motion.span 
       className="mr-[0.2em] inline-block text-headline"
       style={{ opacity }}
     >
       {word}
     </motion.span>
   );
 };
 
 export default ScrollText;