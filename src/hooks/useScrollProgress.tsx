 import { useRef } from 'react';
 import { useScroll, useTransform, MotionValue } from 'framer-motion';
 
 interface UseScrollProgressOptions {
   offset?: [string, string];
 }
 
 export const useScrollProgress = (options: UseScrollProgressOptions = {}) => {
   const { offset = ["start end", "end start"] } = options;
   const ref = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: offset as any,
   });
 
   return { ref, scrollYProgress };
 };
 
 // Hook for scroll-linked opacity per word/character
 export const useScrollText = (
   scrollYProgress: MotionValue<number>,
   index: number,
   total: number,
   startOffset: number = 0.1,
   endOffset: number = 0.9
 ) => {
   const range = endOffset - startOffset;
   const segmentSize = range / total;
   const start = startOffset + index * segmentSize;
   const end = start + segmentSize * 1.5; // Overlap for smoother transition
   
   const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
   const y = useTransform(scrollYProgress, [start, end], [8, 0]);
   
   return { opacity, y };
 };
 
 export default useScrollProgress;