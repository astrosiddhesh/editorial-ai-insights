 import { motion, AnimatePresence } from "framer-motion";
 import { useState } from "react";
 
 interface PageLoaderProps {
   isLoading: boolean;
   onEnter?: () => void;
 }
 
 const PageLoader = ({ isLoading, onEnter }: PageLoaderProps) => {
   const [isExiting, setIsExiting] = useState(false);
 
   const handleEnter = () => {
     setIsExiting(true);
     setTimeout(() => {
       onEnter?.();
     }, 800);
   };
 
   return (
     <AnimatePresence>
       {isLoading && !isExiting && (
         <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
         >
           {/* Animated background lines */}
           <div className="absolute inset-0 overflow-hidden">
             {[...Array(20)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                 style={{
                   top: `${(i + 1) * 5}%`,
                   left: 0,
                   right: 0,
                 }}
                 initial={{ scaleX: 0, opacity: 0 }}
                 animate={{ scaleX: 1, opacity: 1 }}
                 transition={{
                   duration: 1.5,
                   delay: i * 0.05,
                   ease: [0.25, 0.4, 0.25, 1],
                 }}
               />
             ))}
           </div>
 
           <div className="text-center relative z-10">
             {/* Animated logo - larger and more dramatic */}
             <motion.div
               initial={{ scale: 0, rotate: -180 }}
               animate={{ scale: 1, rotate: 0 }}
               transition={{
                 duration: 1.2,
                 ease: [0.25, 0.4, 0.25, 1],
               }}
               className="relative mb-12"
             >
               {/* Glowing ring behind logo */}
               <motion.div
                 className="absolute inset-0 rounded-full"
                 style={{
                   background: "radial-gradient(circle, hsla(28, 85%, 42%, 0.3) 0%, transparent 70%)",
                   transform: "scale(3)",
                 }}
                 animate={{
                   opacity: [0.3, 0.6, 0.3],
                   scale: [3, 3.5, 3],
                 }}
                 transition={{
                   duration: 2,
                   repeat: Infinity,
                   ease: "easeInOut",
                 }}
               />
               
               <motion.svg
                 className="w-24 h-24 text-gold mx-auto relative z-10"
                 viewBox="0 0 40 40"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                 {/* Bottom layer */}
                 <motion.path
                   d="M6 28L20 34L34 28L20 22L6 28Z"
                   fill="currentColor"
                   fillOpacity={0.3}
                   stroke="currentColor"
                   strokeWidth="1.5"
                   strokeLinejoin="round"
                   initial={{ opacity: 0, y: 20, scale: 0.8 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 0.3, duration: 0.6 }}
                 />
                 {/* Middle layer */}
                 <motion.path
                   d="M6 20L20 26L34 20L20 14L6 20Z"
                   fill="currentColor"
                   fillOpacity={0.5}
                   stroke="currentColor"
                   strokeWidth="1.5"
                   strokeLinejoin="round"
                   initial={{ opacity: 0, y: 20, scale: 0.8 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 0.5, duration: 0.6 }}
                 />
                 {/* Top layer */}
                 <motion.path
                   d="M6 12L20 18L34 12L20 6L6 12Z"
                   fill="currentColor"
                   fillOpacity={0.9}
                   stroke="currentColor"
                   strokeWidth="1.5"
                   strokeLinejoin="round"
                   initial={{ opacity: 0, y: 20, scale: 0.8 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 0.7, duration: 0.6 }}
                 />
               </motion.svg>
             </motion.div>
 
             {/* Name reveal */}
             <div className="overflow-hidden mb-4">
               <motion.h1
                 className="font-display text-4xl md:text-5xl font-bold text-headline"
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
               >
                 Siddhesh <span className="text-gold">Phapale</span>
               </motion.h1>
             </div>
 
             {/* Tagline reveal */}
             <div className="overflow-hidden mb-12">
               <motion.p
                 className="font-body text-sm uppercase tracking-[0.3em] text-muted-foreground"
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ delay: 1, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
               >
                 Data • BI • ML • GenAI
               </motion.p>
             </div>
 
             {/* Enter Site Button */}
             <motion.button
               onClick={handleEnter}
               className="group relative px-12 py-4 font-body text-sm uppercase tracking-[0.2em] text-gold border border-gold/50 hover:border-gold transition-all duration-500 overflow-hidden"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.3, duration: 0.6 }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               {/* Hover fill effect */}
               <motion.span
                 className="absolute inset-0 bg-gold"
                 initial={{ x: "-100%" }}
                 whileHover={{ x: 0 }}
                 transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
               />
               <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                 Enter Site
               </span>
             </motion.button>
 
             {/* Scroll hint */}
             <motion.div
               className="absolute -bottom-32 left-1/2 -translate-x-1/2"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.8 }}
             >
               <motion.div
                 className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent mx-auto"
                 animate={{ scaleY: [0, 1, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               />
             </motion.div>
           </div>
         </motion.div>
       )}
 
       {/* Exit animation overlay */}
       {isExiting && (
         <motion.div
           className="fixed inset-0 z-[100] pointer-events-none"
           initial={{ opacity: 1 }}
           animate={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
         >
           {/* Curtain reveal effect */}
           <motion.div
             className="absolute inset-0 bg-background"
             initial={{ y: 0 }}
             animate={{ y: "-100%" }}
             transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
           />
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default PageLoader;