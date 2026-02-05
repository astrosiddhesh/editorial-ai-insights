 import { motion, AnimatePresence } from "framer-motion";
 import { useState } from "react";
 
 interface PageLoaderProps {
   isLoading: boolean;
   onEnter?: () => void;
 }
 
 const PageLoader = ({ isLoading, onEnter }: PageLoaderProps) => {
   const [isExiting, setIsExiting] = useState(false);
   const [isHovered, setIsHovered] = useState(false);
 
   const handleEnter = () => {
     setIsExiting(true);
     setTimeout(() => {
       onEnter?.();
     }, 1000);
   };
 
   return (
     <AnimatePresence>
       {isLoading && (
         <motion.div
           initial={{ opacity: 1 }}
           animate={{ 
             opacity: isExiting ? 0 : 1,
             scale: isExiting ? 1.1 : 1
           }}
           transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
           className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
           style={{ backgroundColor: "hsl(45, 30%, 96%)" }}
           onClick={handleEnter}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
         >
           {/* Subtle noise texture */}
           <div 
             className="absolute inset-0 opacity-[0.02]"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
             }}
           />
           
           <div className="text-center">
             {/* Oval border with logo icon */}
             <motion.div
               className="relative mx-auto mb-8"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
             >
               {/* Oval border */}
               <motion.div 
                 className="w-24 h-28 rounded-[50%] border flex items-center justify-center mx-auto"
                 style={{ borderColor: "hsl(28, 85%, 42%)" }}
                 animate={{ 
                   scale: isHovered ? 1.05 : 1,
                   borderWidth: isHovered ? 2 : 1
                 }}
                 transition={{ duration: 0.3 }}
               >
                 {/* Moon icon */}
                 <motion.svg
                   className="w-12 h-12"
                   viewBox="0 0 40 40"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   style={{ color: "hsl(28, 85%, 42%)" }}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5, duration: 0.8 }}
                 >
                   {/* Crescent moon shape */}
                   <path
                     d="M28 20c0 5.5-4.5 10-10 10-1.5 0-2.9-.3-4.2-.9C17.4 27.5 20 23.9 20 20s-2.6-7.5-6.2-9.1c1.3-.6 2.7-.9 4.2-.9 5.5 0 10 4.5 10 10z"
                     fill="currentColor"
                     fillOpacity={0.6}
                     stroke="currentColor"
                     strokeWidth="1.5"
                   />
                 </motion.svg>
               </motion.div>
             </motion.div>
 
             {/* Enter Site text */}
             <motion.p
               className="font-display text-base tracking-[0.15em] cursor-pointer"
               style={{ color: "hsl(28, 85%, 42%)" }}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               whileHover={{ letterSpacing: "0.25em" }}
             >
               Enter Site
             </motion.p>
             
             {/* Subtle hint */}
             <motion.p
               className="font-body text-[10px] tracking-[0.2em] uppercase mt-4"
               style={{ color: "hsl(28, 85%, 42%, 0.5)" }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1.2, duration: 0.6 }}
             >
               Click anywhere
             </motion.p>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default PageLoader;