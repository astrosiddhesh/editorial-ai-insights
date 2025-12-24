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
          <AnimatedSection animation="fade-up" delay={100}>
            <p>
              Whispers are circulating about an uncommon engineer — <span className="font-semibold text-headline hover:text-gold transition-colors duration-300 cursor-default">Siddhesh Phapale</span> — known across tech circles for transforming data and GenAI into systems that deliver real business impact, not just demos. Always curious, always building — long before GenAI became mainstream, he lives where data intelligence, automation, and generative AI intersect with strategic decision-making and revenue growth.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={200}>
            <div className="text-center text-gold text-xl hover:scale-125 transition-transform duration-300 cursor-default">❧</div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <p>
              Siddhesh doesn't create ordinary dashboards or BI reports — he builds <span className="text-gold font-medium">strategic intelligence platforms</span> that drive sales performance, accelerate decision-making, and enable customer acquisition. With a sharp eye for identifying use cases and automation opportunities, he turns raw data into systems that scale, save time, and generate measurable ROI.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <p>
              He's known for architecting <span className="text-gold font-medium">multi-agent GenAI workflows</span> and deploying production-ready automation systems, balancing innovation with business responsibility. He thinks beyond model outputs — focusing on token optimization, cost control, intelligent caching, and maximizing performance per rupee, ensuring organizations adopt GenAI without overspending.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={500}>
            <div className="text-center text-gold text-xl hover:rotate-180 transition-transform duration-500 cursor-default">✦</div>
          </AnimatedSection>

          <AnimatedSection animation="blur" delay={600}>
            <p className="text-center font-semibold text-headline text-lg">
              Every project he touches is engineered to automate, simplify, and multiply business value.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;