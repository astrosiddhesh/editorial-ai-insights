import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";

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
    <section id="experience" className="py-10 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gradient-to-l from-gold/40 to-transparent" />
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              Career Highlights
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </AnimatedSection>

        {/* Animated counter cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {highlights.map((item, index) => (
            <AnimatedSection key={index} animation="reveal" delay={index * 120}>
              <TiltCard className="p-4 border border-border/50 bg-card/50 hover:border-gold/30 transition-colors h-full">
                <div className="flex items-baseline gap-1 mb-2">
                  <AnimatedCounter 
                    end={item.metric} 
                    suffix={item.suffix}
                    className="font-display text-3xl font-bold text-gold"
                  />
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
                <h3 className="font-display text-sm font-semibold text-headline mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Text highlight cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {textHighlights.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={400 + index * 120}>
              <TiltCard className="p-4 border border-border/50 bg-card/50 hover:border-gold/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-lg font-bold text-gold">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;