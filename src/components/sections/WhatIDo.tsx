const WhatIDo = () => {
  const statements = [
    "I design and deploy production-grade data and GenAI systems.",
    "My work focuses on BFSI, enterprise analytics, and automation.",
    "I build reconciliation engines, BI systems, and LLM-assisted workflows.",
    "I work primarily with Python, SQL, FastAPI, GenAI, and cloud platforms.",
    "I specialize in Retrieval-Augmented Generation (RAG) architectures.",
    "I create intelligent automation solutions that scale with business needs.",
  ];

  return (
    <section id="about" className="py-12 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-gold text-2xl">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">What I Do</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Building intelligent systems that bridge the gap between data and decisions.
          </p>
        </div>

        {/* Declarative statements */}
        <div className="grid gap-4">
          {statements.map((statement, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-5 bg-card border border-border/50 transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gold text-lg mt-0.5 group-hover:scale-110 transition-transform">✦</span>
              <p className="font-editorial text-lg text-foreground/90 leading-relaxed">
                {statement}
              </p>
            </div>
          ))}
        </div>

        {/* Keywords for AI indexing */}
        <div className="mt-10 pt-6 border-t border-border/50">
          <p className="text-xs uppercase tracking-wider text-gold mb-6 text-center font-semibold">
            Areas of Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Engineer",
              "GenAI Engineer",
              "AI Engineer",
              "Enterprise Analytics",
              "Business Intelligence",
              "Large Language Models",
              "RAG",
              "Data Automation",
              "BFSI",
            ].map((keyword) => (
              <span key={keyword} className="tag-editorial">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;