const Experience = () => {
  const highlights = [
    { metric: "40K+", label: "Hits/Day", description: "BI systems used at scale" },
    { metric: "100s", label: "Hours Saved", description: "Monthly automation impact" },
    { metric: "60%+", label: "Cost Reduction", description: "GenAI optimization" },
  ];

  return (
    <section id="experience" className="py-12 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-ivory/50" />

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-l from-gold to-transparent" />
            <span className="text-gold text-2xl">❧</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">Career Highlights</h2>
        </div>

        {/* Metrics row */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="metric-card group"
            >
              <p className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-amber bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                {item.metric}
              </p>
              <p className="text-sm uppercase tracking-wider text-gold font-semibold mb-2">
                {item.label}
              </p>
              <p className="text-sm text-muted-foreground font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience summary block */}
        <div className="card-editorial max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold text-3xl">❧</span>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/50 to-transparent" />
          </div>

          <h3 className="font-display text-xl font-semibold text-headline mb-4">
            Professional Experience Summary
          </h3>

          <p className="font-editorial text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
            Over <span className="text-gold font-semibold">3 years of experience</span> building data and GenAI systems for BFSI and 
            enterprise teams, working on high-volume analytics, automation, and 
            AI-assisted decision systems.
          </p>

          {/* Key capabilities */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Multi-Agent GenAI Applications",
              "Enterprise BI Systems",
              "LLM Workflow Orchestration",
              "Token & Cost Optimization",
              "Production-Ready AI Pipelines",
              "Use Case Identification",
            ].map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 p-3 bg-gold/5 border border-gold/20 transition-colors hover:bg-gold/10"
              >
                <span className="text-gold text-sm">✦</span>
                <span className="font-body text-sm text-foreground/85">{capability}</span>
              </div>
            ))}
          </div>

          {/* Domain expertise */}
          <div className="highlight-box">
            <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">
              Domain Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Banking & Financial Services",
                "Enterprise Analytics",
                "Fintech",
                "Data Pipeline Architecture",
              ].map((domain) => (
                <span key={domain} className="tag-editorial">
                  {domain}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="flex-1 h-px bg-gradient-to-l from-gold/50 to-transparent" />
            <span className="text-gold text-3xl">❧</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;