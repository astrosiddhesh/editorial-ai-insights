import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionNumber from "@/components/ui/SectionNumber";

const Technologies = () => {
  const techStack = [
    { category: "Languages & Frameworks", items: "Python, SQL, FastAPI, Streamlit" },
    { category: "AI/ML & Cloud", items: "LangChain, RAG, NLP, Vector DBs, Vertex AI, GCP, Docker, BigQuery, AWS Lambda, AWS Bedrock" },
    { category: "Data & Visualization", items: "ETL/ELT Pipelines, Tableau, Power BI, MCP" },
  ];

  return (
    <section id="technologies" className="py-24 px-6 relative">
      <SectionNumber current={3} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-headline uppercase tracking-wider">
              Tech Stack
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="reveal" delay={100}>
          <div className="border border-border/60 bg-card/50 overflow-hidden">
            <div className="grid grid-cols-[160px_1fr] md:grid-cols-[220px_1fr] text-sm border-b border-border/60 bg-primary/[0.04]">
              <div className="px-6 py-4 font-display font-semibold text-primary uppercase tracking-wider text-xs">
                Category
              </div>
              <div className="px-6 py-4 font-display font-semibold text-primary uppercase tracking-wider text-xs">
                Technologies
              </div>
            </div>
            {techStack.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-[160px_1fr] md:grid-cols-[220px_1fr] text-sm group hover:bg-primary/[0.03] transition-colors ${index !== techStack.length - 1 ? 'border-b border-border/40' : ''}`}
              >
                <div className="px-6 py-4 font-body text-primary/80 border-r border-border/40 text-xs md:text-sm group-hover:text-primary transition-colors">
                  {row.category}
                </div>
                <div className="px-6 py-4 font-body text-foreground/80 text-xs md:text-sm leading-relaxed">
                  {row.items}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="blur" delay={250}>
          <p className="text-center text-sm text-muted-foreground font-editorial italic mt-10">
            Every system he builds is designed for clarity, scale, and measurable ROI — not proof-of-concept for slides.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Technologies;
