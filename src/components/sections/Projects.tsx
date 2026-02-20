import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { StackingCards, StackingCardItem } from "@/components/ui/StackingCards";
import { cn } from "@/lib/utils";
import SectionNumber from "@/components/ui/SectionNumber";
import { MagneticButton } from "@/components/ui/MagneticButton";
import ImageReveal from "@/components/ui/ImageReveal";
import { ProjectCaseStudy, CaseStudyData } from "./ProjectCaseStudy";

const projects: (CaseStudyData & { accent: string })[] = [
  {
    title: "RepoIntel",
    tagline: "AI-Powered Developer Tooling",
    link: "https://siddheshphapale.live/nova/p1/repointel/",
    accent: "from-primary/10 to-primary/[0.02]",
    problem: {
      headline: "Codebases are black boxes to newcomers.",
      body: "Developers joining new projects or switching tech stacks spend days or weeks just understanding the codebase before writing a single line of useful code. Documentation is often stale, and reading raw code without context is exhausting.",
    },
    approach: {
      headline: "Dual-LLM orchestration to explain and translate code.",
      steps: [
        { label: "Codebase Ingestion", detail: "FastAPI backend recursively parses repos, chunking files into semantically meaningful units for LLM context windows." },
        { label: "Tutorial Generation", detail: "Gemini 2.0 synthesises beginner-friendly narratives with code highlights, diagrams, and step-by-step walkthroughs." },
        { label: "Cross-Framework Migration", detail: "OpenAI handles framework-to-framework translation (e.g. React → Vue), preserving business logic while adapting idioms." },
        { label: "Containerised Deployment", detail: "Docker + Cloud Run ensure zero-cold-start latency for production usage." },
      ],
    },
    outcome: {
      headline: "Onboarding time cut by 60%.",
      metrics: [
        { value: "60%", label: "Faster Onboarding" },
        { value: "2 LLMs", label: "Orchestrated" },
        { value: "5 min", label: "Avg. Tutorial Gen" },
      ],
      body: "Teams using RepoIntel report dramatically faster onboarding cycles. The dual-LLM approach keeps generation costs low while maximising output quality for both tutorial and migration tasks.",
    },
    technologies: [
      { name: "Python", role: "Core backend logic" },
      { name: "FastAPI", role: "REST API layer" },
      { name: "React", role: "Web interface" },
      { name: "Gemini 2.0", role: "Tutorial generation" },
      { name: "OpenAI", role: "Code migration" },
      { name: "Docker", role: "Containerisation" },
      { name: "Cloud Run", role: "Serverless deployment" },
    ],
  },
  {
    title: "Welfy",
    tagline: "AI Financial Intelligence",
    link: "https://siddheshphapale.live/nova/p2/welfy/",
    accent: "from-accent/10 to-accent/[0.02]",
    problem: {
      headline: "Personal financial data sits siloed and unread.",
      body: "Most people have their financial data locked inside banking apps with no way to ask natural-language questions about their spending, portfolio health, or savings trajectory. Insights require manual spreadsheet work.",
    },
    approach: {
      headline: "MCP-secured AI layer over real financial data.",
      steps: [
        { label: "Secure MCP Integration", detail: "Model Context Protocol connects to Fi Money's data APIs with end-to-end encryption and zero data retention on our servers." },
        { label: "Real-Time Portfolio Analysis", detail: "Gemini AI processes transaction history, investments, and spending patterns in context to surface actionable trends." },
        { label: "Conversational Interface", detail: "React + TypeScript chat UI lets users ask questions in plain English — 'How much did I spend on dining last quarter?'" },
        { label: "Personalised Recommendations", detail: "LLM generates tailored advice grounded in the user's actual financial data, not generic templates." },
      ],
    },
    outcome: {
      headline: "Financial clarity in seconds, not hours.",
      metrics: [
        { value: "< 3s", label: "Insight Response" },
        { value: "0 KB", label: "Data Retained" },
        { value: "∞", label: "Questions Supported" },
      ],
      body: "Welfy makes personal finance genuinely conversational. Users can query months of financial history in seconds with MCP ensuring their data never leaves their control.",
    },
    technologies: [
      { name: "Google Gemini AI", role: "Intelligence layer" },
      { name: "MCP", role: "Secure data protocol" },
      { name: "Python", role: "Backend orchestration" },
      { name: "FastAPI", role: "API gateway" },
      { name: "React", role: "Chat interface" },
      { name: "TypeScript", role: "Type-safe frontend" },
    ],
  },
  {
    title: "Hustlr",
    tagline: "AI Fitness Intelligence",
    link: "https://siddheshphapale.live/nova/p3/hustlr/",
    accent: "from-primary/10 to-primary/[0.02]",
    problem: {
      headline: "Strava shows metrics. It doesn't tell you what to do next.",
      body: "Athletes accumulate weeks of training data in Strava with no intelligent layer to synthesise it into actionable coaching advice. Most fitness apps give generic plans disconnected from your actual performance history.",
    },
    approach: {
      headline: "AI coaching layer grounded in your real training data.",
      steps: [
        { label: "Strava OAuth Integration", detail: "Secure OAuth 2.0 flow fetches the athlete's activity history, heart rate zones, pace trends, and segment PRs." },
        { label: "MCP-Powered Context", detail: "Training history is structured via MCP and handed to Gemini 2.0 as rich, queryable context." },
        { label: "Personalised Analysis", detail: "AI identifies overtraining signals, optimal recovery windows, and breakthrough opportunities specific to the user's data." },
        { label: "Containerised API", detail: "FastAPI + Docker for a production-ready, scalable backend that handles concurrent athlete sessions." },
      ],
    },
    outcome: {
      headline: "Training advice grounded in your own data.",
      metrics: [
        { value: "100%", label: "Personal Data" },
        { value: "Real-time", label: "Insight Gen" },
        { value: "OAuth 2.0", label: "Secured" },
      ],
      body: "Hustlr closes the gap between data collection and actionable coaching. Unlike generic AI fitness tools, every insight is rooted in the athlete's own Strava history.",
    },
    technologies: [
      { name: "Strava API", role: "Activity data source" },
      { name: "Gemini 2.0", role: "AI coaching engine" },
      { name: "MCP", role: "Context protocol" },
      { name: "FastAPI", role: "Backend API" },
      { name: "OAuth 2.0", role: "Secure auth" },
      { name: "Docker", role: "Containerisation" },
    ],
  },
  {
    title: "Epoquest",
    tagline: "AI Timeline Explorer",
    link: "https://siddheshphapale.live/nova/p4/epoquest/",
    accent: "from-accent/10 to-accent/[0.02]",
    problem: {
      headline: "The evolution of ideas has no good visual format online.",
      body: "Want to understand how machine learning evolved from the 1950s to today? You'd spend hours reading scattered Wikipedia articles and blog posts. There's no single tool that builds an intelligent, visual timeline of any topic's history.",
    },
    approach: {
      headline: "Search-grounded AI generates rich interactive timelines.",
      steps: [
        { label: "Topic Decomposition", detail: "Gemini Flash decomposes the user's topic into key historical epochs and inflection points." },
        { label: "Grounded Research", detail: "Google Search API grounds each timeline event in real, up-to-date sources — preventing hallucinations." },
        { label: "Visual Narrative Assembly", detail: "Events are synthesised into an interactive, scrollable timeline with descriptions, dates, and contextual connections." },
        { label: "Lightweight Deployment", detail: "Vanilla JS frontend keeps the experience fast and accessible without heavy framework overhead." },
      ],
    },
    outcome: {
      headline: "Any topic's history in under 30 seconds.",
      metrics: [
        { value: "< 30s", label: "Timeline Generated" },
        { value: "100%", label: "Search-Grounded" },
        { value: "Any Topic", label: "Supported" },
      ],
      body: "Epoquest transforms hours of research into a 30-second interactive experience. Grounding with live search ensures accuracy while Gemini Flash handles narrative coherence.",
    },
    technologies: [
      { name: "FastAPI", role: "Backend API" },
      { name: "Gemini Flash", role: "Narrative generation" },
      { name: "Google Search", role: "Fact grounding" },
      { name: "Vanilla JS", role: "Lightweight frontend" },
      { name: "Docker", role: "Containerisation" },
    ],
  },
  {
    title: "AceSheet",
    tagline: "AI Cheat Sheet Engine",
    link: "https://siddheshphapale.live/nova/p5/acesheet/",
    accent: "from-primary/10 to-primary/[0.02]",
    problem: {
      headline: "Information overload kills recall before it starts.",
      body: "Learners are drowning in long-form content — lectures, docs, tutorials — with no efficient way to distil it into high-density, scannable reference material. Traditional note-taking is slow and inconsistent.",
    },
    approach: {
      headline: "Gemini 2.5 Flash compresses knowledge into visual density.",
      steps: [
        { label: "Content Ingestion", detail: "User pastes any text, paste a URL, or uploads content. The system strips noise and extracts core concepts." },
        { label: "Density Optimisation", detail: "Gemini 2.5 Flash applies information-theoretic compression: maximum signal, minimum words, zero filler." },
        { label: "Visual Layout Engine", detail: "p5.js renders the cheat sheet in a Swiss-minimal grid layout optimised for print and screen scanning." },
        { label: "Instant Export", detail: "One-click PDF export for physical reference cards or digital archiving." },
      ],
    },
    outcome: {
      headline: "Hours of content distilled into one page.",
      metrics: [
        { value: "1 Page", label: "Output" },
        { value: "10×", label: "Faster Review" },
        { value: "2.5 Flash", label: "Gemini Model" },
      ],
      body: "AceSheet makes learning ruthlessly efficient. Students and professionals use it to convert overwhelming information into sharp, memorable reference sheets they actually revisit.",
    },
    technologies: [
      { name: "Gemini 2.5 Flash", role: "Compression engine" },
      { name: "p5.js", role: "Visual layout rendering" },
    ],
  },
];

const Projects = () => {
  const [activeCase, setActiveCase] = useState<CaseStudyData | null>(null);

  return (
    <section id="projects" className="relative pt-8 pb-16">
      <SectionNumber current={3} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Section heading */}
      <div className="container max-w-6xl mx-auto py-16 px-6">
        <ImageReveal direction="up">
          <div className="text-center mb-4">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Selected Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-headline">
              NOVA <span className="text-primary italic">Projects</span>
            </h2>
            <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
          </div>
        </ImageReveal>
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
            <MagneticButton strength={0.15} className="w-full">
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
                  "group transition-all duration-500",
                  "hover:shadow-[0_30px_80px_-15px_rgba(0,46,119,0.25)]",
                  "hover:border-primary/30",
                  "cursor-pointer",
                )}
                onClick={() => setActiveCase(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveCase(project)}
                aria-label={`Open ${project.title} case study`}
              >
                {/* Hover gradient overlay */}
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                  project.accent
                )} />

                {/* Card number */}
                <motion.div
                  className="absolute font-display font-bold text-primary/[0.04] leading-none"
                  style={{
                    fontSize: 'clamp(5rem, 10vw, 8rem)',
                    top: index % 2 === 0 ? '0.5rem' : 'auto',
                    bottom: index % 2 === 0 ? 'auto' : '0.5rem',
                    right: index % 2 === 0 ? '1.5rem' : 'auto',
                    left: index % 2 === 0 ? 'auto' : '1.5rem',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Project header */}
                <header className="flex items-start justify-between gap-3 mb-6 mt-10 relative z-10">
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-headline group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-primary/30 text-3xl group-hover:text-primary/60 transition-colors duration-300">❧</span>
                </header>

                {/* Description */}
                <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed mb-8 max-w-prose relative z-10">
                  {project.problem.body.slice(0, 180)}…
                </p>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-2 mb-8 relative z-10" aria-label="Technologies">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <li
                      key={tech.name}
                      className="text-xs px-3 py-1.5 bg-primary/[0.06] text-primary/80 border border-primary/10 rounded-sm font-body tracking-wide group-hover:border-primary/20 transition-colors duration-300"
                    >
                      {tech.name}
                    </li>
                  ))}
                  {project.technologies.length > 5 && (
                    <li className="text-xs px-3 py-1.5 text-muted-foreground">
                      +{project.technologies.length - 5}
                    </li>
                  )}
                </ul>

                {/* CTA row */}
                <div className="flex items-center justify-between relative z-10">
                  <button
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-body uppercase tracking-wider group/cs"
                    onClick={(e) => { e.stopPropagation(); setActiveCase(project); }}
                  >
                    <span className="link-underline">Case Study</span>
                    <span className="text-primary/40 group-hover/cs:text-primary transition-colors">→</span>
                  </button>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-primary/50 hover:text-primary transition-colors font-body uppercase tracking-wider"
                    aria-label={`Visit ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            </MagneticButton>
          </StackingCardItem>
        ))}
      </StackingCards>

      {/* Case Study Modal */}
      <ProjectCaseStudy data={activeCase} onClose={() => setActiveCase(null)} />
    </section>
  );
};

export default Projects;
