import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionNumber from '@/components/ui/SectionNumber';

interface ShowcaseItem {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
}

const HorizontalShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panels: ShowcaseItem[] = [
    {
      number: '01',
      title: 'Analyze',
      subtitle: 'Data Engineering & BI',
      detail: 'Real-time dashboards serving 5,000+ users, XIRR engines processing 40M+ transactions, and geospatial intelligence mapping millions of addresses. The kind of analytics that changes how leadership makes decisions.',
    },
    {
      number: '02',
      title: 'Automate',
      subtitle: 'Process Intelligence',
      detail: 'OCR pipelines that read handwritten letters, event-driven upsell systems that turn routine policy changes into sales opportunities, and XML processors that compress 4-hour workflows into 10 seconds.',
    },
    {
      number: '03',
      title: 'Augment',
      subtitle: 'GenAI & LLM Systems',
      detail: 'Multi-agent architectures where specialised agents handle intent, schema discovery, query generation, validation, and summarisation. Not one model doing everything. Each agent scoped tightly, with guardrails.',
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(panels.length - 1) * 100}%`]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      className="relative"
      style={{ height: `${panels.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Section number */}
        <SectionNumber current={2} total={6} />

        {/* Progress bar */}
        <div className="absolute bottom-12 left-12 right-12 z-20">
          <div className="h-px bg-primary/10 w-full">
            <motion.div 
              className="h-full bg-primary/60"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
              The Approach
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/70">
              Scroll →
            </span>
          </div>
        </div>

        {/* Horizontal panels */}
        <motion.div 
          className="flex h-full"
          style={{ x }}
        >
          {panels.map((panel, index) => (
            <div 
              key={index}
              className="w-screen h-full flex-shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24"
            >
              <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-32 items-center">
                {/* Left — Number + Title */}
                <div>
                  <motion.span 
                    className="font-display leading-none text-primary/[0.05] block"
                    style={{ fontSize: 'clamp(5rem, 18vw, 16rem)', fontWeight: 700 }}
                  >
                    {panel.number}
                  </motion.span>
                  <h3 
                    className="font-display font-bold text-headline"
                    style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', marginTop: '-0.3em' }}
                  >
                    {panel.title}
                  </h3>
                </div>

                {/* Right — Description */}
                <div className="space-y-8">
                  <p className="font-body text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary/50">
                    {panel.subtitle}
                  </p>
                  <p className="font-editorial text-lg md:text-xl lg:text-2xl text-foreground/75 leading-relaxed">
                    {panel.detail}
                  </p>
                  <div className="w-20 h-px bg-primary/20" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
