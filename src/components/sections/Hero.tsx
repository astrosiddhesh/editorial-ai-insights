 import { ChevronDown } from "lucide-react";
 import { useRef } from "react";
 import { motion, useScroll, useTransform } from "framer-motion";
 import FloatingParticles from "@/components/ui/FloatingParticles";
 import { LineReveal } from "@/components/ui/TextReveal";
 
 const Hero = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start start", "end start"],
   });
 
   const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
   const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.92]);
 
   return (
     <section
       ref={containerRef}
       id="hero"
       className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
     >
       {/* Subtle floating particles */}
       <FloatingParticles />
       
       {/* Minimal background elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full blur-3xl" />
       </div>
 
       <motion.div 
         className="container max-w-3xl mx-auto text-center relative z-10"
         style={{ y, opacity, scale }}
       >
         {/* Main headline - cleaner, more editorial */}
         <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
           <LineReveal delay={0.2}>
             <span className="text-headline">Siddhesh</span>{" "}
             <span className="text-gold">Phapale</span>
           </LineReveal>
         </h1>
 
         {/* Role - simpler */}
         <motion.p 
           className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-gold/80 mb-12"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.8 }}
         >
           Data  ·  BI  ·  ML  ·  GenAI
         </motion.p>
 
         {/* Primary tagline - editorial style */}
         <motion.p 
           className="font-editorial text-xl md:text-2xl lg:text-3xl text-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.7, duration: 0.8 }}
         >
           Building production-grade analytics and GenAI systems that turn data into automation and business impact.
         </motion.p>
 
         {/* Secondary tagline */}
         <motion.p 
           className="font-editorial text-sm md:text-base text-muted-foreground mb-16 max-w-xl mx-auto leading-relaxed"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.9, duration: 0.8 }}
         >
           Engineer focused on converting data, BI, and GenAI into reliable automation, insights, and scale.
         </motion.p>
 
         {/* CTAs - minimal, elegant */}
         <motion.div 
           className="flex flex-col sm:flex-row items-center justify-center gap-10"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.1, duration: 0.8 }}
         >
           <motion.a 
             href="#contact" 
             className="group inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.25em] text-gold hover:text-amber transition-colors duration-300"
             whileHover={{ x: 5 }}
           >
             <span>Start a Conversation</span>
             <motion.span 
               className="text-lg"
               animate={{ x: [0, 4, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             >
               →
             </motion.span>
           </motion.a>
           <motion.a 
             href="#projects" 
             className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-headline transition-colors duration-300"
           >
             View Projects
           </motion.a>
         </motion.div>
       </motion.div>
 
       {/* Scroll indicator - minimal */}
       <motion.a 
         href="#about" 
         className="absolute bottom-12 left-1/2 -translate-x-1/2 group cursor-pointer"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
       >
         <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 group-hover:text-gold transition-colors duration-300">
             Scroll
           </span>
           <motion.div
             animate={{ y: [0, 6, 0] }}
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           >
             <ChevronDown className="w-4 h-4 text-muted-foreground/40 group-hover:text-gold transition-colors duration-300" />
           </motion.div>
         </div>
       </motion.a>
     </section>
   );
 };
 
 export default Hero;