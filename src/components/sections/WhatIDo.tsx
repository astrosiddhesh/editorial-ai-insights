import { AnimatedSection } from "@/components/ui/AnimatedSection";

const WhatIDo = () => {
  return (
    <section id="about" className="py-10 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              About Him
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </AnimatedSection>

        {/* Main content with staggered reveals */}
        <div className="space-y-6 font-editorial text-foreground/90 leading-relaxed">
          <AnimatedSection animation="slide-up" delay={100}>
            <p>
              <span className="font-semibold text-headline">Siddhesh</span> is a Data / BI Analyst & GenAI Engineer with experience building enterprise-grade analytics, automation, and AI systems in regulated, high-volume environments, primarily across BFSI and enterprise operations.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <p>
              His work sits at the intersection of <span className="text-gold font-medium">business intelligence, data engineering, and GenAI</span> — designing reconciliation engines, analytics platforms, and LLM-assisted workflows that replace manual reporting and decision bottlenecks with actionable, trustworthy insights.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={300}>
            <div className="text-center text-gold text-xl hover:scale-125 transition-transform duration-300 cursor-default">✦</div>
          </AnimatedSection>

          <AnimatedSection animation="reveal" delay={400}>
            <p>
              Rather than treating GenAI as a novelty, Siddhesh applies it practically and selectively, combining deterministic BI pipelines with LLM reasoning to maintain accuracy, explainability, and cost control. He focuses on performance, scalability, and measurable outcomes, ensuring AI solutions deliver value beyond proofs of concept.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="blur" delay={500}>
            <p className="text-center font-semibold text-headline text-lg border-l-2 border-gold pl-4 py-2 bg-gold/5 rounded-r">
              If it doesn't improve decisions, reduce effort, or create measurable impact — it doesn't belong in production.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;