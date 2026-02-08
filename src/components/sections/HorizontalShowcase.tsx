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
      detail: 'Building reconciliation engines and analytics platforms that process millions of records daily with sub-second response times.',
    },
    {
      number: '02',
      title: 'Automate',
      subtitle: 'Process Intelligence',
      detail: 'Replacing manual, error-prone workflows with deterministic automation — saving hundreds of hours monthly across enterprise teams.',
    },
    {
      number: '03',
      title: 'Augment',
      subtitle: 'GenAI & LLM Systems',
      detail: 'Designing production-grade LLM workflows that combine reasoning with reliability — not demos, but systems that run in production.',
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
        <div className="absolute bottom-8 left-8 right-8 z-20">
          <div className="h-px bg-primary/10 w-full">
            <motion.div 
              className="h-full bg-primary/60"
              style={{ width: progressWidth }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              The Approach
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
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
              <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Left — Number + Title */}
                <div>
                  <motion.span 
                    className="font-display text-[8rem] md:text-[12rem] leading-none text-primary/[0.06] block"
                    style={{ fontWeight: 700 }}
                  >
                    {panel.number}
                  </motion.span>
                  <h3 
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-headline -mt-12 md:-mt-20"
                  >
                    {panel.title}
                  </h3>
                </div>

                {/* Right — Description */}
                <div className="space-y-6">
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-primary/60">
                    {panel.subtitle}
                  </p>
                  <p className="font-editorial text-lg md:text-xl text-foreground/80 leading-relaxed">
                    {panel.detail}
                  </p>
                  <div className="w-16 h-px bg-primary/30" />
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
