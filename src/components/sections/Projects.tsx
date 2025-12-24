const Projects = () => {
  const projects = [
    {
      title: "RepoIntel",
      description: "AI-powered tool that transforms codebases into beginner-friendly tutorials and migrates code between different technologies/frameworks. Features dual-LLM integration, workflow orchestration, and a React-based web interface.",
      technologies: ["Python", "FastAPI", "React", "Gemini 2.0", "OpenAI", "Docker", "Cloud Run"],
      link: "https://siddheshphapale.live/nova/p1/repointel/",
    },
    {
      title: "Welfy",
      description: "AI Financial Assistant that analyzes personal financial data from Fi Money and provides intelligent insights through a beautiful chat interface. Features secure MCP integration, real-time portfolio analysis, and personalized financial recommendations.",
      technologies: ["Google Gemini AI", "MCP", "Python", "FastAPI", "React", "TypeScript"],
      link: "https://siddheshphapale.live/nova/p2/welfy/",
    },
    {
      title: "Hustlr",
      description: "Your Strava Sidekick. An AI-powered fitness companion that connects to your Strava account to provide personalized training insights and performance analysis. Chat naturally with your data to get coaching advice, track progress, and discover patterns in your workouts.",
      technologies: ["Strava API", "Gemini 2.0", "MCP", "FastAPI", "OAuth 2.0", "Docker"],
      link: "https://siddheshphapale.live/nova/p3/hustlr/",
    },
    {
      title: "Epoquest",
      description: "An interactive web experience that lets you explore the evolution of any topic through beautifully crafted, AI-powered timelines. From ancient innovations to modern trends, it brings the story of progress to life with glass-morphism design.",
      technologies: ["FastAPI", "Gemini Flash", "Google Search", "Vanilla JS", "Docker"],
      link: "https://siddheshphapale.live/nova/p4/epoquest/",
    },
    {
      title: "AceSheet",
      description: "Transforms overwhelming information into sleek, high-density cheat sheets powered by Google Gemini 2.5 Flash. Engineered for rapid learning and sharp recall, it blends structured academic clarity with elegant Swiss-minimal design. Perfect for printing, prepping, and performing under pressure.",
      technologies: ["Gemini 2.5 Flash", "p5.js", "Cheat Sheets", "Docker"],
      link: "https://siddheshphapale.live/nova/p5/acesheet/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-background to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-gold text-2xl">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">NOVA Projects</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A collection of AI-powered applications built with passion and purpose.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group card-editorial flex flex-col h-full hover:border-gold/50 hover:-translate-y-1"
            >
              {/* Project header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-display text-xl font-semibold text-headline group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <span className="text-gold text-xl opacity-50 group-hover:opacity-100 transition-opacity">
                  ❧
                </span>
              </div>

              {/* Description */}
              <p className="body-text flex-grow mb-6 text-sm leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gold/10 text-gold border border-gold/20">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 text-muted-foreground">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial-secondary text-sm inline-flex items-center gap-2 self-start mt-auto group/link"
              >
                View Project
                <span className="text-xs group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;