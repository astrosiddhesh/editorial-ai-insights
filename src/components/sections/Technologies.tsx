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
    },
    { 
      category: "AI/ML & Cloud", 
      items: ["LangChain", "RAG", "NLP", "Vector DBs", "Vertex AI", "GCP", "Docker", "BigQuery", "AWS Lambda", "AWS Bedrock"],
    },
    { 
      category: "Data & Visualization", 
      items: ["ETL/ELT Pipelines", "Tableau", "Power BI", "MCP"],
    },
  ];

  return (
    <section id="technologies" className="py-32 px-6 relative overflow-hidden">
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
      <SectionNumber current={3} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">
              Tools & Technologies
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-headline">
              Tech <span className="text-primary italic">Stack</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Simple table */}
        <AnimatedSection animation="fade-up" delay={200}>
           <div className="border border-border/40 overflow-hidden">
            {/* Table header — hidden on mobile */}
            <div className="hidden md:grid grid-cols-[240px_1fr] bg-primary/[0.04]">
              <div className="px-6 py-4 border-r border-border/30">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary/60">Category</span>
              </div>
              <div className="px-6 py-4">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-primary/60">Technologies</span>
              </div>
            </div>

            {/* Table rows — stacked on mobile, side-by-side on desktop */}
            {techStack.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[240px_1fr] border-t border-border/30 hover:bg-primary/[0.02] transition-colors duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
              >
                {/* Category name */}
                <div className="px-6 py-3 md:py-5 md:border-r border-border/30 flex items-center">
                  <h3 className="font-display text-xs md:text-base font-semibold text-headline uppercase md:normal-case tracking-wider md:tracking-normal text-primary/60 md:text-headline">
                    {row.category}
                  </h3>
                </div>

                {/* Tech items */}
                <div className="px-6 pb-5 pt-0 md:py-5 flex flex-wrap gap-2 items-center">
                  {row.items.map((tech, i) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-body tracking-wide text-foreground/70 border border-border/30 rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Technologies;
