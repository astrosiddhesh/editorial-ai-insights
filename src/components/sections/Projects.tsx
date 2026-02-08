import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StackingCards, StackingCardItem } from "@/components/ui/StackingCards";
import { cn } from "@/lib/utils";
import SectionNumber from "@/components/ui/SectionNumber";

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
      description: "Your Strava Sidekick. An AI-powered fitness companion that connects to your Strava account to provide personalized training insights and performance analysis.",
      technologies: ["Strava API", "Gemini 2.0", "MCP", "FastAPI", "OAuth 2.0", "Docker"],
      link: "https://siddheshphapale.live/nova/p3/hustlr/",
    },
    {
      title: "Epoquest",
      description: "An interactive web experience that lets you explore the evolution of any topic through beautifully crafted, AI-powered timelines. From ancient innovations to modern trends.",
      technologies: ["FastAPI", "Gemini Flash", "Google Search", "Vanilla JS", "Docker"],
      link: "https://siddheshphapale.live/nova/p4/epoquest/",
    },
    {
      title: "AceSheet",
      description: "AceSheet transforms overwhelming information into sleek, high-density cheat sheets powered by Google Gemini 2.5 Flash. Engineered for rapid learning and sharp recall.",
      technologies: ["Gemini 2.5 Flash", "p5.js"],
      link: "https://siddheshphapale.live/nova/p5/acesheet/",
    },
  ];

  return (
    <section id="projects" className="relative pt-8 pb-16">
      {/* Section number */}
      <SectionNumber current={3} total={6} />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Section heading */}
      <div className="container max-w-6xl mx-auto py-16 px-6">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-4">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-headline">
              NOVA <span className="text-primary italic">Projects</span>
            </h2>
            <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
          </div>
        </AnimatedSection>
      </div>

      {/* Stacking cards */}
      <StackingCards 
        totalCards={projects.length} 
        scaleMultiplier={0.04}
        className="pb-[50vh]"
      >
        {projects.map((project, index) => (
          <StackingCardItem 
            key={index} 
            index={index}
            topPosition={`calc(80px + ${index * 24}px)`}
          >
            <article
              className={cn(
                "relative",
                "w-[min(92vw,48rem)]",
                "min-h-[26rem]",
                "bg-gradient-to-br from-card via-card to-ivory",
                "border border-gold/20",
                "rounded-2xl",
                "p-8 md:p-10",
                "shadow-[0_20px_60px_-15px_rgba(0,46,119,0.15)]",
                "ring-1 ring-primary/5",
              )}
            >
              {/* Card number */}
              <div className="absolute top-6 left-8 font-display text-6xl md:text-7xl font-bold text-primary/[0.06] leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project header */}
              <header className="flex items-start justify-between gap-3 mb-6 mt-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-headline">
                  {project.title}
                </h3>
                <span className="text-primary/30 text-3xl">❧</span>
              </header>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-8 max-w-prose">
                {project.description}
              </p>

              {/* Technologies */}
              <ul className="flex flex-wrap gap-2 mb-8" aria-label="Technologies">
                {project.technologies.slice(0, 5).map((tech) => (
                  <li
                    key={tech}
                    className="text-xs px-3 py-1.5 bg-primary/[0.06] text-primary/80 border border-primary/10 rounded-sm font-body tracking-wide"
                  >
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 5 && (
                  <li className="text-xs px-3 py-1.5 text-muted-foreground">
                    +{project.technologies.length - 5}
                  </li>
                )}
              </ul>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-bright-blue transition-colors font-body uppercase tracking-wider"
              >
                View Project
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
};

export default Projects;
