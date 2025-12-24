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
    <section id="about" className="py-20 px-6 bg-ivory">
      <div className="container max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="editorial-rule-double w-32 mx-auto mb-8" />
          <h2 className="section-heading">What I Do</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Building intelligent systems that bridge the gap between data and decisions.
          </p>
        </div>

        {/* Declarative statements */}
        <div className="grid gap-6">
          {statements.map((statement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-background border border-border/50 transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <span className="ornament text-lg mt-0.5">✦</span>
              <p className="font-editorial text-lg text-foreground/90 leading-relaxed">
                {statement}
              </p>
            </div>
          ))}
        </div>

        {/* Keywords for AI indexing (visible but styled subtly) */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 text-center">
            Areas of Expertise
          </p>
          <div className="flex flex-wrap justify-center gap-2">
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
