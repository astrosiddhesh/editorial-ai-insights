import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, FileText, Lightbulb, ExternalLink, MessageSquare } from "lucide-react";


const CurrentlyOnDesk = () => {
  const readings = [
    {
      title: "Bulls, Bears and Other Beasts",
      author: "Santosh Nair",
      link: "https://amzn.in/d/ciV4b1c",
    },
    {
      title: "India, That is Bharat: Coloniality, Civilisation, Constitution",
      author: "J. Sai Deepak",
      link: "https://amzn.in/d/8VvA0fp",
    },
  ];

  const research = [
    {
      title: "On the Biology of a Large Language Model",
      source: "Transformer Circuits Research Collective",
      description: "Understanding attribution graphs & internal structure of LLM reasoning",
      link: "https://transformer-circuits.pub/2025/attribution-graphs/biology.html",
    },
  ];

  const problemSpaces = [
    {
      title: "AI-native SEO",
      description: "Researching how organizations can be found through ChatGPT, Gemini & Perplexity as traditional search declines.",
    },
    {
      title: "Multi-Agent ETF Trading",
      description: "Building a team of AI agents that collaborate to trade ETFs—inspired by competitive LLM trading arenas like Nof1.ai's Alpha Arena.",
      link: "https://nof1.ai/",
    },
  ];

  return (
    <section id="currently-on-desk" className="py-28 px-6 relative bg-ivory/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Interests & Curiosity</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-headline">
              Currently on <span className="text-primary italic">His Desk</span>
            </h2>
            <div className="w-20 h-px bg-gold/40 mx-auto mt-6" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Reading */}
          <div className="space-y-8">
            {/* Now Reading */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-5 h-5 text-primary/70" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    Now Reading
                  </h3>
                </div>
                <div className="space-y-4">
                  {readings.map((book, index) => (
                    <div
                      key={index}
                      className="p-6 border border-border/40 bg-card/60 rounded-sm hover:border-primary/20 transition-all duration-300"
                    >
                      <h4 className="font-display text-lg font-semibold text-headline leading-tight mb-2">
                        {book.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body mb-4">
                        — {book.author}
                      </p>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary/70 hover:text-primary transition-colors"
                      >
                        Buy on Amazon
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Research & Papers */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-5 h-5 text-primary/70" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    Research & Papers
                  </h3>
                </div>
                <div className="space-y-4">
                  {research.map((paper, index) => (
                    <div
                      key={index}
                      className="p-6 border border-border/40 bg-card/60 rounded-sm hover:border-primary/20 transition-all duration-300"
                    >
                      <h4 className="font-display text-lg font-semibold text-headline leading-tight mb-2">
                        {paper.title}
                      </h4>
                      <p className="text-sm text-primary/70 font-body mb-2">
                        — {paper.source}
                      </p>
                      <p className="text-sm text-muted-foreground font-body mb-4">
                        {paper.description}
                      </p>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary/70 hover:text-primary transition-colors"
                      >
                        Read Paper
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Problem Spaces */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-5 h-5 text-primary/70" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    Problem Spaces He's Exploring
                  </h3>
                </div>
                <div className="space-y-4">
                  {problemSpaces.map((space, index) => (
                    <div
                      key={index}
                      className="p-6 border border-border/40 bg-card/60 rounded-sm hover:border-primary/20 transition-all duration-300"
                    >
                      <h4 className="font-display text-lg font-semibold text-primary mb-3">
                        {space.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                        {space.description}
                      </p>
                      {space.link && (
                        <a
                          href={space.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-primary/70 hover:text-primary transition-colors"
                        >
                          View Inspiration
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Connect CTA — replaces the fake review form */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-primary/70" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    Have a Thought?
                  </h3>
                </div>
                <div className="p-8 border border-border/40 bg-card/60 rounded-sm hover:border-primary/20 transition-all duration-300">
                  <p className="font-editorial text-lg md:text-xl text-headline italic leading-relaxed mb-2">
                    "The best collaborations start with a simple hello."
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-8">
                    If you've read something interesting, have a recommendation, or just want to connect — reach out directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:siddhesh.phapale11@gmail.com"
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary hover:text-primary/70 transition-colors border-b border-primary/30 hover:border-primary pb-1 w-fit"
                    >
                      Send an Email
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/siddhesh-phapale1106/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition-colors border-b border-border/40 hover:border-primary pb-1 w-fit"
                    >
                      Connect on LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyOnDesk;
