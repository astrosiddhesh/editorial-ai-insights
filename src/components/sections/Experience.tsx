import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";
import SectionNumber from "@/components/ui/SectionNumber";

const Experience = () => {
  const highlights = [
    { 
      metric: 40,
      suffix: "K+",
      label: "hits/day", 
      title: "Enterprise BI Systems",
      description: "Designed revenue-focused BI systems used daily at scale."
    },
    { 
      metric: 100,
      suffix: "s",
      label: "of hours saved", 
      title: "Process Automation",
      description: "Automated processes saving manual effort monthly."
    },
    { 
      metric: 60,
      suffix: "%+",
      label: "cost reduction", 
      title: "GenAI Optimization",
      description: "Reduced GenAI deployment & token consumption costs."
    },
  ];

  const textHighlights = [
    { 
      title: "Multi-Agent GenAI",
      label: "LLM Orchestration", 
      description: "Created applications using LangChain & LLM orchestration."
    },
    { 
      title: "Use Case Expert",
      label: "Strategic Consulting", 
      description: "Proven ability to identify automation scope & high-value opportunities."
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <SectionNumber current={4} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Impact & Results</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-headline">
              Career <span className="text-primary italic">Highlights</span>
            </h2>
            <div className="w-16 h-px bg-gold/40 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {highlights.map((item, index) => (
            <AnimatedSection key={index} animation="reveal" delay={index * 120}>
              <TiltCard className="p-6 md:p-8 border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/20 transition-all duration-500 h-full shadow-sm hover:shadow-lg">
                <div className="flex items-baseline gap-1.5 mb-4">
                  <AnimatedCounter 
                    end={item.metric} 
                    suffix={item.suffix}
                    className="font-display text-4xl md:text-5xl font-bold text-primary"
                  />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-headline mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {textHighlights.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={400 + index * 120}>
              <TiltCard className="p-6 md:p-8 border border-border/50 bg-gradient-to-b from-card to-background hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-lg">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-display text-xl md:text-2xl font-bold text-primary">{item.title}</span>
                  <span className="text-xs text-muted-foreground tracking-wide">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
