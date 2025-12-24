const Technologies = () => {
  const techCategories = [
    {
      category: "Languages & Frameworks",
      items: ["Python", "SQL", "FastAPI", "Streamlit"],
    },
    {
      category: "Cloud & Data",
      items: ["Google Cloud Platform (GCP)", "BigQuery", "PostgreSQL", "Redis"],
    },
    {
      category: "AI & Machine Learning",
      items: ["Vertex AI", "LangChain", "Vector Databases", "OpenAI API"],
    },
    {
      category: "Analytics & Visualization",
      items: ["Power BI", "Tableau", "Pandas", "NumPy"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Airflow", "CI/CD"],
    },
  ];

  // Flat list for AI indexing
  const allTechnologies = [
    "Python",
    "SQL",
    "FastAPI",
    "Streamlit",
    "Google Cloud Platform (GCP)",
    "BigQuery",
    "Vertex AI",
    "LangChain",
    "Vector Databases",
    "Power BI",
    "Tableau",
    "PostgreSQL",
    "Docker",
    "Git",
    "Pandas",
    "NumPy",
    "Redis",
    "Airflow",
  ];

  return (
    <section id="technologies" className="py-20 px-6 bg-ivory">
      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="editorial-rule-double w-32 mx-auto mb-8" />
          <h2 className="section-heading">Technologies & Tools</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            The technical foundation powering production-grade systems.
          </p>
        </div>

        {/* Categorized grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techCategories.map((category, index) => (
            <div key={index} className="card-editorial">
              <h3 className="font-display text-lg font-medium text-headline mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-body text-foreground/80"
                  >
                    <span className="ornament text-sm">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flat list for SEO/AI */}
        <div className="border-t border-border pt-8">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4 text-center font-body">
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
