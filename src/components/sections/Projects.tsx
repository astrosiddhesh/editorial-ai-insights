import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CardStack } from "@/components/ui/CardStack";

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
    <section id="projects" className="py-10 px-6 relative overflow-hidden">
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
          <p className="font-body text-sm text-muted-foreground mb-6 text-center">
            Scroll to fan through the deck — each card reveals a project.
          </p>
        </AnimatedSection>

        {/* Playing card stack */}
        <CardStack>
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-80 md:w-96 bg-card border-2 border-gold/30 rounded-xl p-6 md:p-8 shadow-2xl backdrop-blur-sm relative"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 175, 55, 0.1)',
                minHeight: '320px',
              }}
            >
              {/* Card corner decoration */}
              <div className="absolute top-3 left-3 text-gold/50 text-sm font-display font-bold">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="absolute bottom-3 right-3 text-gold/50 text-sm font-display font-bold rotate-180">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Project header */}
              <div className="flex items-start justify-between gap-3 mb-4 mt-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-headline">
                  {project.title}
                </h3>
                <span className="text-gold text-2xl">❧</span>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] md:text-xs px-2 py-1 bg-gold/10 text-gold border border-gold/20 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] md:text-xs px-2 py-1 text-muted-foreground">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold hover:underline underline-offset-2 font-medium"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Card suit decoration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-8xl text-gold">♠</span>
              </div>
            </div>
          ))}
        </CardStack>
      </div>
    </section>
  );
};

export default Projects;