import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionNumber from "@/components/ui/SectionNumber";

const Experience = () => {
  const highlights = [
    { 
      metric: 90,
      suffix: "%",
      label: "cost cut", 
      title: "Conversational Data Access",
      description: "Built a system that lets non-technical leaders query complex databases in plain English. No SQL knowledge required, no analyst bottleneck. Designed the architecture to keep costs manageable at scale."
    },
    { 
      metric: 75,
      suffix: "%",
      label: "faster TAT", 
      title: "Intelligent Document Processing",
      description: "Automated the reading of messy, handwritten customer documents — extracting intent, validating data, and pushing clean updates downstream. Replaced manual data entry with something that actually scales."
    },
    { 
      metric: 99,
      suffix: "%",
      label: "efficiency gain", 
      title: "Compliance Automation",
      description: "Took a painfully manual regulatory process and compressed it from hours to seconds. Full compliance, zero human error. The kind of boring-but-critical work that compounds over time."
    },
  ];

  const textHighlights = [
    { 
      title: "Enterprise Knowledge Systems",
      label: "Search & Retrieval", 
      description: "Built internal knowledge tools that give employees instant, accurate answers from sprawling policy documents — instead of waiting days for someone to dig through a shared drive."
    },
    { 
      title: "Geospatial Intelligence",
      label: "Data-Driven Strategy", 
      description: "Turned raw address data into strategic insights — identifying underserved regions, informing resource allocation, and helping leadership see gaps they didn't know existed."
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative">
      <SectionNumber current={4} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-7xl mx-auto">
        {/* Header — offset right */}
        <AnimatedSection animation="fade-up">
          <div className="lg:ml-[15%] mb-24">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Impact & Results</p>
            <h2 className="font-display font-bold text-headline leading-[0.95]" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              Career <span className="text-primary italic">Highlights</span>
            </h2>
            <div className="w-20 h-px bg-gold/40 mt-6" />
          </div>
        </AnimatedSection>

        {/* Staggered metric blocks — each at different horizontal positions */}
        <div className="space-y-16 mb-20">
          {highlights.map((item, index) => (
            <AnimatedSection key={index} animation="reveal" delay={index * 120}>
              <div 
                className={`grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-baseline ${
                  index === 1 ? 'md:ml-[20%] md:max-w-[70%]' : index === 2 ? 'md:ml-[10%] md:max-w-[80%]' : ''
                }`}
              >
                {/* Giant number */}
                <div className="flex items-baseline gap-2" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
                  <span className="font-display font-bold text-primary leading-none text-[inherit]">
                    {item.metric}{item.suffix}
                  </span>
                  <span className="text-sm text-muted-foreground/60 font-body">{item.label}</span>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-md">{item.description}</p>
                  <div className="w-12 h-px bg-primary/15 mt-4" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Text highlights — side by side but offset */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 lg:ml-[10%] lg:mr-[5%]">
          {textHighlights.map((item, index) => (
            <AnimatedSection key={index} animation="slide-up" delay={400 + index * 120}>
              <motion.div 
                className="p-8 border border-border/40 bg-gradient-to-br from-card/80 to-background hover:border-primary/20 transition-all duration-500"
                style={{ marginTop: index === 1 ? '3rem' : '0' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary/40 mb-3 font-body">{item.label}</p>
                <h3 className="font-display text-2xl font-bold text-headline mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
