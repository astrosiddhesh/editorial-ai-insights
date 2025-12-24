const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="editorial-rule-double w-32 mx-auto mb-8" />
          <h2 className="section-heading">Professional Experience Summary</h2>
        </div>

        {/* Experience summary block */}
        <div className="card-editorial max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="ornament text-3xl">❧</span>
            <div className="editorial-rule flex-1" />
          </div>

          <p className="font-editorial text-xl md:text-2xl text-headline leading-relaxed mb-8">
            Over 3 years of experience building data and GenAI systems for BFSI and 
            enterprise teams, working on high-volume analytics, automation, and 
            AI-assisted decision systems.
          </p>

          {/* Key metrics */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 bg-secondary/50">
              <p className="font-display text-3xl font-bold text-primary mb-1">3+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Years Experience
              </p>
            </div>
            <div className="text-center p-4 bg-secondary/50">
              <p className="font-display text-3xl font-bold text-primary mb-1">10+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Production Systems
              </p>
            </div>
            <div className="text-center p-4 bg-secondary/50">
              <p className="font-display text-3xl font-bold text-primary mb-1">BFSI</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-body">
                Primary Domain
              </p>
            </div>
          </div>

          {/* Domain expertise */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-medium text-headline">
              Domain Expertise
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Banking & Financial Services (BFSI)",
                "Enterprise Analytics & Reporting",
                "Fintech & Payment Systems",
                "Data Pipeline Architecture",
                "GenAI & LLM Applications",
                "Business Intelligence Systems",
              ].map((domain) => (
                <li
                  key={domain}
                  className="flex items-center gap-3 font-body text-foreground/80"
                >
                  <span className="ornament text-sm">✦</span>
                  {domain}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <div className="editorial-rule flex-1" />
            <span className="ornament text-3xl">❧</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
