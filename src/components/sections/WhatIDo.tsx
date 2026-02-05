 import { ScrollParagraph } from "@/components/ui/ScrollText";
 import { motion } from "framer-motion";

const WhatIDo = () => {
  return (
     <section id="about" className="relative bg-background">
       {/* Decorative top border */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
       
       {/* First scroll-reveal paragraph */}
       <ScrollParagraph 
         number="01"
         label="About Him"
       >
         Siddhesh is a Data and BI Analyst and GenAI Engineer with experience building enterprise-grade analytics, automation, and AI systems in regulated, high-volume environments.
       </ScrollParagraph>
       
       {/* Decorative divider */}
       <motion.div 
         className="flex justify-center py-4"
         initial={{ opacity: 0, scale: 0 }}
         whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
       >
         <div className="w-2 h-2 rounded-full bg-gold/40" />
       </motion.div>
       
       {/* Second scroll-reveal paragraph */}
       <ScrollParagraph>
         His work sits at the intersection of business intelligence, data engineering, and GenAI — designing reconciliation engines, analytics platforms, and LLM-assisted workflows.
       </ScrollParagraph>
       
       {/* Quote section */}
       <div className="min-h-[50vh] flex items-center justify-center px-6 py-16">
         <motion.blockquote 
           className="text-center max-w-2xl"
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-20%" }}
           transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
         >
           <p className="font-editorial text-xl md:text-2xl text-headline italic leading-relaxed">
             "If it doesn't improve decisions, reduce effort, or create measurable impact — it doesn't belong in production."
           </p>
           <motion.div 
             className="mt-6 w-12 h-px bg-gold/60 mx-auto"
             initial={{ scaleX: 0 }}
             whileInView={{ scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.6 }}
           />
         </motion.blockquote>
       </div>
     </section>
  );
};

export default WhatIDo;