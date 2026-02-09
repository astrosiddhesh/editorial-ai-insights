import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionNumber from "@/components/ui/SectionNumber";

const ParticleField = lazy(() => import("@/components/3d/ParticleField"));

const Technologies = () => {
  const techStack = [
    { 
      category: "Languages & Frameworks", 
      items: ["Python", "SQL", "FastAPI", "Streamlit"],
      description: "Core tools for building robust backend systems and data pipelines"
    },
    { 
      category: "AI/ML & Cloud", 
      items: ["LangChain", "RAG", "NLP", "Vector DBs", "Vertex AI", "GCP", "Docker", "BigQuery", "AWS Lambda", "AWS Bedrock"],
      description: "Production-grade AI infrastructure and cloud orchestration"
    },
    { 
      category: "Data & Visualization", 
      items: ["ETL/ELT Pipelines", "Tableau", "Power BI", "MCP"],
      description: "Transforming raw data into decision-ready insights"
    },
  ];

  return (
    <section id="technologies" className="py-32 px-6 relative overflow-hidden">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <SectionNumber current={3} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-7xl mx-auto">
        {/* Header — left-aligned with large number */}
        <AnimatedSection animation="fade-up">
          <div className="mb-20">
            <span className="font-display text-primary/[0.05] leading-none block" style={{ fontSize: 'clamp(6rem, 14vw, 12rem)', fontWeight: 700 }}>
              03
            </span>
            <div className="flex items-end gap-8 -mt-6">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-headline">
                Tech <span className="text-primary italic">Stack</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent mb-3" />
            </div>
          </div>
        </AnimatedSection>

        {/* Staggered category blocks — each with unique offset */}
        <div className="space-y-20">
          {techStack.map((row, index) => (
            <AnimatedSection key={index} animation="reveal" delay={index * 150}>
              <div 
                className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-16"
                style={{ marginLeft: index % 2 !== 0 ? '8%' : '0' }}
              >
                {/* Category label */}
                <div className="space-y-3">
                  <p className="font-body text-[10px] uppercase tracking-[0.4em] text-primary/50">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    {row.category}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">
                    {row.description}
                  </p>
                  <div className="w-12 h-px bg-primary/20 mt-4" />
                </div>

                {/* Tech tags — large, spaced out */}
                <div className="flex flex-wrap gap-3 items-start">
                  {row.items.map((tech, i) => (
                    <motion.span
                      key={tech}
                      className="px-5 py-2.5 text-sm font-body tracking-wide border border-primary/10 bg-primary/[0.03] text-primary/80 rounded-sm hover:border-primary/30 hover:bg-primary/[0.06] transition-all duration-300"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Closing editorial line — right aligned */}
        <AnimatedSection animation="blur" delay={500}>
          <div className="mt-24 lg:ml-[40%]">
            <div className="w-12 h-px bg-gold/40 mb-6" />
            <p className="font-editorial text-lg md:text-xl text-foreground/60 italic leading-relaxed max-w-lg">
              Every system he builds is designed for clarity, scale, and measurable ROI — not proof-of-concept for slides.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Technologies;
