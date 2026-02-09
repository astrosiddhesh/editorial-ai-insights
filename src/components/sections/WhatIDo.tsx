import { ScrollParagraph } from "@/components/ui/ScrollText";
import { motion } from "framer-motion";
import SectionNumber from "@/components/ui/SectionNumber";
import { HiddenMessage } from "@/components/ui/DiscoverableElement";

const WhatIDo = () => {
  return (
    <section id="about" className="relative bg-background">
      {/* Section number */}
      <SectionNumber current={1} total={6} />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* First scroll-reveal paragraph */}
      <ScrollParagraph 
        number="01"
        label="About Him"
      >
        Siddhesh is a Data and BI Analyst and GenAI Engineer with experience building enterprise-grade analytics, automation, and AI systems in regulated, high-volume environments.
      </ScrollParagraph>
      
      {/* Hidden message Easter egg */}
      <div className="flex justify-center py-6">
        <HiddenMessage message="the best systems are invisible" />
      </div>

      {/* Decorative divider */}
      <motion.div 
        className="flex justify-center py-6"
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
      
      {/* Quote section — generous height */}
      <div className="min-h-[70vh] flex items-center justify-center px-6 py-24">
        <motion.blockquote 
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <p className="font-editorial text-2xl md:text-3xl lg:text-4xl text-headline italic leading-relaxed">
            "If it doesn't improve decisions, reduce effort, or create measurable impact — it doesn't belong in production."
          </p>
          <motion.div 
            className="mt-8 w-16 h-px bg-gold/60 mx-auto"
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
