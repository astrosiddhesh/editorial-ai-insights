import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TiltCard } from "@/components/ui/TiltCard";
import { BookOpen, FileText, Lightbulb, ExternalLink, MessageSquare } from "lucide-react";

const CurrentlyOnDesk = () => {
  const readings = [
    {
      title: "Bulls, Bears and Other Beasts",
      author: "Santosh Nair",
      link: "https://www.amazon.in/Bulls-Bears-Other-Beasts-Santosh/dp/9380658532",
    },
    {
      title: "India, That is Bharat: Coloniality, Civilisation, Constitution",
      author: "J. Sai Deepak",
      link: "https://www.amazon.in/India-That-Bharat-Coloniality-Civilisation/dp/9389648793",
    },
  ];

  const research = [
    {
      title: "On the Biology of a Large Language Model",
      source: "Transformer Circuits Research Collective",
      description: "Understanding attribution graphs & internal structure of LLM reasoning",
      link: "https://transformer-circuits.pub/",
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
    <section id="currently-on-desk" className="py-16 px-6 relative bg-ivory/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-display text-lg">§</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-headline mt-2 mb-2">
              Currently on My Desk
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Reading */}
          <div className="space-y-6">
            {/* Now Reading */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
                    Now Reading
                  </h3>
                </div>
                <div className="space-y-4">
                  {readings.map((book, index) => (
                    <TiltCard
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 hover:border-gold/30 transition-colors"
                    >
                      <h4 className="font-display text-lg font-semibold text-headline leading-tight mb-1">
                        {book.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body mb-3">
                        — {book.author}
                      </p>
                      <a
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-amber transition-colors"
                      >
                        Buy on Amazon
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Research & Papers */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
                    Research & Papers
                  </h3>
                </div>
                <div className="space-y-4">
                  {research.map((paper, index) => (
                    <TiltCard
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 hover:border-gold/30 transition-colors"
                    >
                      <h4 className="font-display text-lg font-semibold text-headline leading-tight mb-1">
                        {paper.title}
                      </h4>
                      <p className="text-sm text-gold font-body mb-2">
                        — {paper.source}
                      </p>
                      <p className="text-sm text-muted-foreground font-body mb-3">
                        {paper.description}
                      </p>
                      <a
                        href={paper.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-amber transition-colors"
                      >
                        Read Paper
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </TiltCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Problem Spaces */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
                    Problem Spaces He's Exploring
                  </h3>
                </div>
                <div className="space-y-4">
                  {problemSpaces.map((space, index) => (
                    <TiltCard
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 hover:border-gold/30 transition-colors"
                    >
                      <h4 className="font-display text-lg font-semibold text-gold mb-2">
                        {space.title}
                      </h4>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3">
                        {space.description}
                      </p>
                      {space.link && (
                        <a
                          href={space.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold hover:text-amber transition-colors"
                        >
                          View Inspiration
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </TiltCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Letters to the Editor */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-headline uppercase tracking-wider">
                    Reader Reviews
                  </h3>
                </div>
                <TiltCard className="p-6 border border-dashed border-gold/40 bg-transparent hover:border-gold/60 transition-colors">
                  <p className="font-display text-base italic text-muted-foreground text-center">
                    Letters to the Editor — Share your thoughts on this chronicle
                  </p>
                  <p className="text-xs text-center text-gold/60 mt-2 uppercase tracking-wider">
                    this section is coming soon
                  </p>
                </TiltCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyOnDesk;
