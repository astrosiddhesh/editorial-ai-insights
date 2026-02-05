 import { ChevronDown } from "lucide-react";
 import { motion } from "framer-motion";
import FloatingParticles from "@/components/ui/FloatingParticles";
 import AnimatedGridBackground from "@/components/ui/AnimatedGridBackground";
 import { TextReveal, LineReveal } from "@/components/ui/TextReveal";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
       {/* Animated constellation grid */}
       <AnimatedGridBackground />
 
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-amber/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Main headline */}
         <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
           <LineReveal delay={0.2}>
             <span className="text-headline hover:text-gold/80 transition-colors duration-300">
               Siddhesh
             </span>{" "}
             <span className="text-gold hover:text-amber transition-colors duration-300">
               Phapale
             </span>
           </LineReveal>
        </h1>

        {/* Role */}
         <motion.p 
           className="font-body text-lg md:text-xl text-gold mb-6"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4, duration: 0.6 }}
         >
           <TextReveal delay={0.5} staggerDelay={0.1}>
             Data | BI | ML | GenAI | Enthu
           </TextReveal>
         </motion.p>

        {/* Primary tagline */}
         <motion.p 
           className="font-editorial text-xl md:text-2xl text-foreground/90 mb-4 max-w-3xl mx-auto"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.7, duration: 0.6 }}
         >
           <TextReveal delay={0.8}>
             Building production-grade analytics and GenAI systems that turn data into automation and business impact.
           </TextReveal>
         </motion.p>

        {/* Secondary tagline */}
         <motion.p 
           className="font-editorial text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1, duration: 0.6 }}
         >
           Engineer focused on converting data, BI, and GenAI into reliable automation, insights, and scale — not vanity dashboards or AI demos, but systems that are used by real teams in production.
         </motion.p>

        {/* CTAs - Primary: Start a Conversation, Secondary: View Projects */}
         <motion.div 
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1.2, duration: 0.6 }}
         >
           <motion.a 
             href="#contact" 
             className="btn-editorial-primary"
             whileHover={{ scale: 1.02, y: -2 }}
             whileTap={{ scale: 0.98 }}
           >
            <span>Start a Conversation</span>
            <span className="ml-2">→</span>
           </motion.a>
           <motion.a 
             href="#projects" 
             className="btn-editorial"
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
           >
            <span>View Projects</span>
           </motion.a>
         </motion.div>
      </div>

      {/* Scroll indicator with bounce */}
       <motion.a 
        href="#about" 
         className="absolute bottom-6 left-1/2 -translate-x-1/2 group cursor-pointer"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-gold/60 group-hover:text-gold transition-colors">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gold/50 group-hover:text-gold animate-scroll-bounce transition-colors" />
        </div>
       </motion.a>
    </section>
  );
};

export default Hero;