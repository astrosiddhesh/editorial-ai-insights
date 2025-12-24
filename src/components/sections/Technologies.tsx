const Technologies = () => {
  const techCategories = [
    {
      category: "Languages & Frameworks",
      items: ["Python", "SQL", "FastAPI", "Streamlit"],
      icon: "⟨/⟩",
    },
    {
      category: "Cloud & Data",
      items: ["Google Cloud Platform (GCP)", "BigQuery", "PostgreSQL", "Redis"],
      icon: "☁",
    },
    {
      category: "AI & Machine Learning",
      items: ["Vertex AI", "LangChain", "Vector Databases", "OpenAI API"],
      icon: "◎",
    },
    {
      category: "Analytics & Visualization",
      items: ["Power BI", "Tableau", "Pandas", "NumPy"],
      icon: "▦",
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Airflow", "CI/CD"],
      icon: "⚙",
    },
  ];

  const allTechnologies = [
    "Python", "SQL", "FastAPI", "Streamlit", "Google Cloud Platform (GCP)",
    "BigQuery", "Vertex AI", "LangChain", "Vector Databases", "Power BI",
    "Tableau", "PostgreSQL", "Docker", "Git", "Pandas", "NumPy", "Redis", "Airflow",
  ];

  return (
    <section id="technologies" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-l from-gold to-transparent" />
            <span className="text-gold text-2xl">⟨/⟩</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">Technologies & Tools</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            The technical foundation powering production-grade systems.
          </p>
        </div>

        {/* Categorized grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techCategories.map((category, index) => (
            <div key={index} className="card-editorial group hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-gold">{category.icon}</span>
                <h3 className="font-display text-lg font-semibold text-headline">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-foreground/85 text-sm"
                  >
                    <span className="text-gold text-xs">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flat list for SEO/AI */}
        <div className="border-t border-gold/20 pt-10">
          <p className="text-xs uppercase tracking-wider text-gold mb-6 text-center font-semibold">
            Complete Technology Stack
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {allTechnologies.map((tech) => (
              <span key={tech} className="tag-editorial">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;