import { ScrollParagraph } from "@/components/ui/ScrollText";
import { motion } from "framer-motion";
import SectionNumber from "@/components/ui/SectionNumber";
import { HiddenMessage } from "@/components/ui/DiscoverableElement";

const WhatIDo = () => {
  return (
    <section id="about" className="relative bg-background">
      <SectionNumber current={1} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      {/* Asymmetric two-column intro */}
      <div className="container max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* Left — sticky label + number */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-primary/[0.06] leading-none block" style={{ fontSize: 'clamp(6rem, 14vw, 12rem)', fontWeight: 700 }}>
              01
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-headline -mt-6 mb-4">
              About <span className="text-primary italic">Him</span>
            </h2>
            <div className="w-16 h-px bg-primary/30 mb-6" />
            <p className="font-body text-xs uppercase tracking-[0.4em] text-muted-foreground/60">
              Data · BI · ML · GenAI
            </p>
          </motion.div>

          {/* Right — scroll-reveal content */}
          <div className="space-y-0">
            <ScrollParagraph>
              Siddhesh is a Data and BI Analyst and GenAI Engineer with experience building enterprise-grade analytics, automation, and AI systems in regulated, high-volume environments.
            </ScrollParagraph>
            
            <div className="flex justify-start py-6 pl-6">
              <HiddenMessage message="the best systems are invisible" />
            </div>

            <ScrollParagraph>
              His work sits at the intersection of business intelligence, data engineering, and GenAI — designing reconciliation engines, analytics platforms, and LLM-assisted workflows.
            </ScrollParagraph>
          </div>
        </div>
      </div>
      
      {/* Full-width editorial quote — offset to the right */}
      <div className="min-h-[60vh] flex items-center px-6 py-24">
        <div className="container max-w-7xl mx-auto">
          <div className="lg:ml-[30%]">
            <motion.blockquote 
              className="max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="w-12 h-px bg-gold/50 mb-8" />
              <p className="font-editorial text-2xl md:text-3xl lg:text-4xl text-headline italic leading-relaxed">
                "If it doesn't improve decisions, reduce effort, or create measurable impact — it doesn't belong in production."
              </p>
              <motion.div 
                className="mt-8 flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary/40" />
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/50 font-body">Philosophy</span>
              </motion.div>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
