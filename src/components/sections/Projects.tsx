import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";

const Projects = () => {
  const projects = [
    {
      title: "RepoIntel",
      description: "AI-powered tool that transforms codebases into beginner-friendly tutorials and migrates code between different technologies/frameworks.",
      technologies: ["Python", "FastAPI", "React", "Gemini 2.0", "OpenAI", "Docker"],
      link: "https://siddheshphapale.live/nova/p1/repointel/",
    },
    {
      title: "Welfy",
      description: "AI Financial Assistant that analyzes personal financial data from Fi Money and provides intelligent insights through a beautiful chat interface.",
      technologies: ["Google Gemini AI", "MCP", "Python", "FastAPI", "React"],
      link: "https://siddheshphapale.live/nova/p2/welfy/",
    },
    {
      title: "Hustlr",
      description: "Your Strava Sidekick. An AI-powered fitness companion that connects to your Strava account to provide personalized training insights.",
      technologies: ["Strava API", "Gemini 2.0", "MCP", "FastAPI", "OAuth 2.0"],
      link: "https://siddheshphapale.live/nova/p3/hustlr/",
    },
    {
      title: "Epoquest",
      description: "An interactive web experience that lets you explore the evolution of any topic through beautifully crafted, AI-powered timelines.",
      technologies: ["FastAPI", "Gemini Flash", "Google Search", "Vanilla JS"],
      link: "https://siddheshphapale.live/nova/p4/epoquest/",
    },
    {
      title: "AceSheet",
      description: "Transforms overwhelming information into sleek, high-density cheat sheets powered by Google Gemini 2.5 Flash.",
      technologies: ["Gemini 2.5 Flash", "p5.js", "Cheat Sheets", "Docker"],
      link: "https://siddheshphapale.live/nova/p5/acesheet/",
    },
  ];

  return (
    <section id="projects" className="py-10 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-6xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              NOVA Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6">
            A collection of AI-powered applications built with passion and purpose.
          </p>
        </AnimatedSection>

        {/* Projects grid with 3D tilt */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
              <TiltCard 
                className="group border border-border/50 bg-card/50 p-4 h-full flex flex-col hover:border-gold/40 transition-colors"
                tiltAmount={8}
              >
                {/* Project header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-semibold text-headline group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-gold text-lg opacity-30 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300">
                    ❧
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground font-body leading-relaxed flex-grow mb-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] px-2 py-0.5 bg-gold/10 text-gold border border-gold/20 hover:bg-gold/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gold hover:underline underline-offset-2 group/link"
                >
                  View Project
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;