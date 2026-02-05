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
     }, 1000);
   };
 
   return (
     <AnimatePresence>
       {isLoading && (
         <motion.div
           initial={{ opacity: 1 }}
           animate={{ opacity: isExiting ? 0 : 1 }}
           transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
           className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
           style={{ backgroundColor: "hsl(45, 30%, 96%)" }}
           onClick={handleEnter}
         >
           <div className="text-center">
             {/* Oval border with logo icon - Sleep Well style */}
             <motion.div
               className="relative mx-auto mb-8"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
             >
               {/* Oval border */}
               <div 
                 className="w-20 h-24 rounded-[50%] border-2 flex items-center justify-center mx-auto"
                 style={{ borderColor: "hsl(28, 85%, 42%)" }}
               >
                 {/* Geometric logo inside */}
                 <motion.svg
                   className="w-10 h-10"
                   viewBox="0 0 40 40"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                   style={{ color: "hsl(28, 85%, 42%)" }}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.5, duration: 0.8 }}
                 >
                   {/* Simplified geometric shape */}
                   <path
                     d="M20 6L34 20L20 34L6 20L20 6Z"
                     fill="currentColor"
                     fillOpacity={0.15}
                     stroke="currentColor"
                     strokeWidth="1.5"
                   />
                   <path
                     d="M20 12L28 20L20 28L12 20L20 12Z"
                     fill="currentColor"
                     fillOpacity={0.4}
                     stroke="currentColor"
                     strokeWidth="1"
                   />
                 </motion.svg>
               </div>
             </motion.div>
 
             {/* Enter Site text */}
             <motion.p
               className="font-display text-lg tracking-wide cursor-pointer"
               style={{ color: "hsl(28, 85%, 42%)" }}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 0.6 }}
               whileHover={{ letterSpacing: "0.15em" }}
             >
               Enter Site
             </motion.p>
           </div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 };
 
 export default PageLoader;