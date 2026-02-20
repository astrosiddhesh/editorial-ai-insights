import { X, ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export interface CaseStudyData {
  title: string;
  tagline: string;
  link: string;
  accent: string;
  problem: {
    headline: string;
    body: string;
  };
  approach: {
    headline: string;
    steps: { label: string; detail: string }[];
  };
  outcome: {
    headline: string;
    metrics: { value: string; label: string }[];
    body: string;
  };
  technologies: { name: string; role: string }[];
}

interface Props {
  data: CaseStudyData | null;
  onClose: () => void;
}

const makeVariant = (i: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12 + 0.25, duration: 0.55, ease: "easeOut" as const },
  },
});

export const ProjectCaseStudy = ({ data, onClose }: Props) => {
  useEffect(() => {
    if (!data) return;
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  return (
    <AnimatePresence>
      {data && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[10000] bg-foreground/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Slide-in panel */}
          <motion.div
            className="fixed inset-y-0 right-0 z-[10001] w-full max-w-3xl bg-background overflow-y-auto shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
          >
            {/* Sticky top bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-background/95 backdrop-blur border-b border-border">
              <span className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50">
                Case Study
              </span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Close case study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-8 md:px-12 pb-20">
              {/* Hero */}
              <motion.div variants={makeVariant(0)} initial="hidden" animate="visible" className="pt-12 pb-10 border-b border-border">
                <p className="font-body text-xs uppercase tracking-[0.4em] text-primary/40 mb-4">{data.tagline}</p>
                <h1 className="font-display text-5xl md:text-6xl font-bold text-headline mb-6 leading-none">
                  {data.title}
                </h1>
                <a
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors font-body uppercase tracking-wider"
                >
                  <span>Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* 01 Problem */}
              <motion.div variants={makeVariant(1)} initial="hidden" animate="visible" className="py-10 border-b border-border">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/40 mb-6">01 — Problem</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-headline mb-5">
                  {data.problem.headline}
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed text-base">
                  {data.problem.body}
                </p>
              </motion.div>

              {/* 02 Approach */}
              <motion.div variants={makeVariant(2)} initial="hidden" animate="visible" className="py-10 border-b border-border">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/40 mb-6">02 — Approach</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-headline mb-8">
                  {data.approach.headline}
                </h2>
                <div className="space-y-5">
                  {data.approach.steps.map((step, i) => (
                    <div key={i} className="flex gap-5 group">
                      <div className="flex-none w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center mt-0.5">
                        <ArrowRight className="w-3 h-3 text-primary/40 group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <p className="font-body font-medium text-sm text-headline mb-1">{step.label}</p>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 03 Outcome */}
              <motion.div variants={makeVariant(3)} initial="hidden" animate="visible" className="py-10 border-b border-border">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/40 mb-6">03 — Outcome</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-headline mb-8">
                  {data.outcome.headline}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  {data.outcome.metrics.map((m, i) => (
                    <div key={i} className="bg-primary/[0.04] border border-primary/10 rounded-xl p-5">
                      <p className="font-display text-3xl font-bold text-primary mb-1">{m.value}</p>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{m.label}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-muted-foreground leading-relaxed text-base">{data.outcome.body}</p>
              </motion.div>

              {/* 04 Stack */}
              <motion.div variants={makeVariant(4)} initial="hidden" animate="visible" className="py-10">
                <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/40 mb-6">04 — Stack</p>
                <div className="flex flex-wrap gap-3">
                  {data.technologies.map((tech, i) => (
                    <div key={i} className="border border-primary/15 rounded-lg px-4 py-3 hover:border-primary/30 transition-colors">
                      <p className="font-body text-sm font-medium text-headline">{tech.name}</p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{tech.role}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectCaseStudy;
