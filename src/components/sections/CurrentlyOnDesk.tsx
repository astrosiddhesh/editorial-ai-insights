import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, FileText, Lightbulb, ExternalLink, MessageSquare, Send } from "lucide-react";
import SectionNumber from "@/components/ui/SectionNumber";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CurrentlyOnDesk = () => {
  const { toast } = useToast();
  const [reviewForm, setReviewForm] = useState({ name: "", review: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.review.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    toast({ title: "Review submitted!", description: "Thank you for sharing your thoughts." });
    setReviewForm({ name: "", review: "" });
    setIsSubmitting(false);
  };

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
      <SectionNumber current={5} total={6} />
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

            {/* Drop Your Review */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-primary/70" />
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-headline">
                    Drop Your Review
                  </h3>
                </div>
                <form onSubmit={handleSubmitReview} className="p-6 border border-border/40 bg-card/60 rounded-sm space-y-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Share your thoughts, feedback, or just say hello!
                  </p>
                  <Input
                    placeholder="Your name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-border/40 focus:border-primary/40"
                    maxLength={100}
                  />
                  <Textarea
                    placeholder="Write your review or message..."
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, review: e.target.value }))}
                    className="bg-background/50 border-border/40 focus:border-primary/40 min-h-[120px] resize-none"
                    maxLength={1000}
                  />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Submitting..." : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Review
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyOnDesk;
