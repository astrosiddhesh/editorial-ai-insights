const Projects = () => {
  const projects = [
    {
      title: "Enterprise Reconciliation Engine",
      problem: "Manual reconciliation of financial transactions was time-consuming and error-prone, requiring significant human effort.",
      solution: "Built an automated reconciliation engine using Python and SQL that matches transactions across multiple data sources with intelligent exception handling.",
      outcome: "Reduced manual reconciliation effort by 80% and improved accuracy to 99.5%.",
      technologies: ["Python", "SQL", "FastAPI", "PostgreSQL", "Pandas"],
    },
    {
      title: "GenAI Document Q&A System",
      problem: "Enterprise teams spent hours searching through documentation to find relevant information for client queries.",
      solution: "Developed a RAG-based document Q&A system using LangChain, vector databases, and Vertex AI to provide instant, accurate answers from internal knowledge bases.",
      outcome: "Reduced query resolution time from hours to seconds, processing 500+ queries daily.",
      technologies: ["LangChain", "Vertex AI", "ChromaDB", "FastAPI", "Streamlit"],
    },
    {
      title: "Real-time Analytics Dashboard",
      problem: "Business stakeholders lacked visibility into key metrics, leading to delayed decision-making.",
      solution: "Created a real-time BI dashboard with automated data pipelines from multiple sources, featuring interactive visualizations and automated alerts.",
      outcome: "Improved reporting turnaround time by 12 hours and enabled data-driven decisions.",
      technologies: ["BigQuery", "Power BI", "Python", "Airflow", "GCP"],
    },
    {
      title: "Intelligent Workflow Automation",
      problem: "Repetitive manual processes in financial operations consumed team bandwidth and introduced errors.",
      solution: "Designed and implemented LLM-assisted workflow automation that handles document processing, data extraction, and routing decisions.",
      outcome: "Automated 70% of manual workflows, processing 10,000+ documents monthly.",
      technologies: ["Python", "OpenAI API", "FastAPI", "Redis", "Docker"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="editorial-rule-double w-32 mx-auto mb-8" />
          <h2 className="section-heading">Selected Projects</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Production-grade systems delivering measurable impact.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card-editorial group hover:border-primary/40 transition-all duration-300"
            >
              {/* Project header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <h3 className="subsection-heading mb-0 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="ornament text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                  ❧
                </span>
              </div>

              {/* Structured content */}
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">
                    Problem
                  </p>
                  <p className="body-text">{project.problem}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">
                    Solution
                  </p>
                  <p className="body-text">{project.solution}</p>
                </div>

                <div className="bg-secondary/50 p-4 border-l-2 border-primary">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1 font-body">
                    Outcome
                  </p>
                  <p className="font-editorial text-base font-medium text-foreground">
                    {project.outcome}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-body">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag-editorial">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
