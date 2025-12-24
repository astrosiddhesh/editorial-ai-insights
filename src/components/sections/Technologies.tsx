const Technologies = () => {
  const techStack = [
    { category: "Languages & Frameworks", items: "Python, SQL, FastAPI, Streamlit" },
    { category: "AI/ML & Cloud", items: "LangChain, RAG, NLP, Vector DBs, Vertex AI, GCP, Docker, BigQuery" },
    { category: "Data & Visualization", items: "ETL/ELT Pipelines, Tableau, Power BI, MCP" },
  ];

  return (
    <section id="technologies" className="py-8 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Compact heading */}
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
            Tech Stack
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        {/* Table-style layout */}
        <div className="border border-border/60 bg-card/50">
          <div className="grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] text-sm border-b border-border/60 bg-gold/5">
            <div className="px-4 py-2 font-display font-semibold text-gold uppercase tracking-wider text-xs">
              Category
            </div>
            <div className="px-4 py-2 font-display font-semibold text-gold uppercase tracking-wider text-xs">
              Technologies
            </div>
          </div>
          {techStack.map((row, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-[160px_1fr] md:grid-cols-[200px_1fr] text-sm ${index !== techStack.length - 1 ? 'border-b border-border/40' : ''}`}
            >
              <div className="px-4 py-2.5 font-body text-gold/90 border-r border-border/40 text-xs md:text-sm">
                {row.category}
              </div>
              <div className="px-4 py-2.5 font-body text-foreground/85 text-xs md:text-sm">
                {row.items}
              </div>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-muted-foreground font-editorial italic mt-4">
          Every system he builds is designed for clarity, scale, and measurable ROI — not proof-of-concept for slides.
        </p>
      </div>
    </section>
  );
};

export default Technologies;