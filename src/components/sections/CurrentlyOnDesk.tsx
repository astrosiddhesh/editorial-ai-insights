import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { BookOpen, FileText, Lightbulb, ExternalLink, MessageSquare, Send } from "lucide-react";
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
    <section id="currently-on-desk" className="py-16 px-6 relative bg-ivory/50">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-5xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <span className="text-gold font-display text-lg">§</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-headline mt-2 mb-2">
              Currently on <span className="text-gold">His Desk</span>
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
                    <div
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 rounded-lg"
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
                    </div>
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
                    <div
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 rounded-lg"
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
                    </div>
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
                    <div
                      key={index}
                      className="p-5 border border-border/50 bg-card/80 rounded-lg"
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
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Drop Your Review */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-headline uppercase tracking-wider">
                    Drop Your Review
                  </h3>
                </div>
                <form onSubmit={handleSubmitReview} className="p-5 border border-border/50 bg-card/80 rounded-lg space-y-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Share your thoughts, feedback, or just say hello!
                  </p>
                  <Input
                    placeholder="Your name"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-border/50 focus:border-gold/50"
                    maxLength={100}
                  />
                  <Textarea
                    placeholder="Write your review or message..."
                    value={reviewForm.review}
                    onChange={(e) => setReviewForm(prev => ({ ...prev, review: e.target.value }))}
                    className="bg-background/50 border-border/50 focus:border-gold/50 min-h-[100px] resize-none"
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
