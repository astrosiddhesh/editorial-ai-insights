import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StackingCards, StackingCardItem } from "@/components/ui/StackingCards";
import { cn } from "@/lib/utils";


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
    <section id="projects" className="relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Section heading - outside the stacking container */}
      <div className="container max-w-6xl mx-auto py-10 px-6">
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              NOVA Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
          <p className="font-body text-sm text-muted-foreground mb-6 text-center">
            Scroll down to see the cards stack on top of each other
          </p>
        </AnimatedSection>
      </div>

      {/* Stacking cards container */}
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
                "w-[min(92vw,42rem)]",
                "min-h-[22rem]",
                "bg-gradient-to-br from-card to-background",
                "border-2 border-gold/30",
                "rounded-2xl",
                "p-6 md:p-8",
                "shadow-2xl",
                "ring-1 ring-gold/10",
                "backdrop-blur-sm"
              )}
            >
              {/* Card corner decoration */}
              <div className="absolute top-4 left-4 text-gold/50 text-sm font-display font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-4 right-4 text-gold/50 text-sm font-display font-bold rotate-180">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Project header */}
              <header className="flex items-start justify-between gap-3 mb-5 mt-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-headline">
                  {project.title}
                </h3>
                <span className="text-gold text-2xl md:text-3xl">❧</span>
              </header>

              {/* Description */}
              <p className="text-base text-muted-foreground font-body leading-relaxed mb-6 max-w-prose">
                {project.description}
              </p>

              {/* Technologies */}
              <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
                {project.technologies.slice(0, 5).map((tech) => (
                  <li
                    key={tech}
                    className="text-xs md:text-sm px-2.5 py-1 bg-gold/10 text-gold border border-gold/20 rounded"
                  >
                    {tech}
                  </li>
                ))}
                {project.technologies.length > 5 && (
                  <li className="text-xs md:text-sm px-2.5 py-1 text-muted-foreground">
                    +{project.technologies.length - 5}
                  </li>
                )}
              </ul>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base text-gold hover:underline underline-offset-4 font-medium"
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Card suit decoration */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                <span className="text-[11rem] text-gold">♠</span>
              </div>
            </article>
          </StackingCardItem>
        ))}
      </StackingCards>
    </section>
  );
};

export default Projects;
