const Experience = () => {
  const highlights = [
    { 
      metric: "40K+", 
      label: "hits/day", 
      title: "Enterprise BI Systems",
      description: "Designed revenue-focused BI systems used daily at scale. Enterprise-grade dashboards driving strategic decisions."
    },
    { 
      metric: "Multi-Agent", 
      label: "GenAI", 
      title: "LLM Orchestration",
      description: "Created applications using LangChain & LLM orchestration. Production-ready AI workflows with intelligent routing."
    },
    { 
      metric: "100s", 
      label: "of hours saved", 
      title: "Process Automation",
      description: "Automated processes saving manual effort monthly. End-to-end pipeline automation with monitoring."
    },
    { 
      metric: "60%+", 
      label: "cost reduction", 
      title: "GenAI Optimization",
      description: "Reduced GenAI deployment & token consumption costs. Token optimization, caching, and efficient architectures."
    },
    { 
      metric: "Use Case", 
      label: "Expert", 
      title: "Strategic Consulting",
      description: "Proven ability to identify automation scope & high-value opportunities. Strategic consulting on AI/ML implementation."
    },
  ];

  return (
    <section id="experience" className="py-10 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-l from-gold/40 to-transparent" />
          <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
            Career Highlights
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, index) => (
            <div key={index} className="p-4 border border-border/50 bg-card/50 hover:border-gold/30 transition-colors">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-2xl font-bold text-gold">{item.metric}</span>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <h3 className="font-display text-sm font-semibold text-headline mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;