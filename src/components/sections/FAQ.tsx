import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import SectionNumber from "@/components/ui/SectionNumber";

const FAQ = () => {
  const faqs = [
    {
      question: "So, what does Siddhesh actually do?",
      answer:
        "He builds data and AI systems for industries where mistakes have real consequences. The kind of work where a chatbot needs to give the right answer every time, a dashboard needs to be trusted by leadership, and an automation pipeline can't quietly break at 2am.",
    },
    {
      question: "How does he approach a new problem?",
      answer:
        "He starts by figuring out whether the problem is worth solving at all. Talks to the people who'll use the thing, understands what decision it needs to improve, then picks the simplest path that actually survives contact with production. No over-engineering, no shiny-tool syndrome.",
    },
    {
      question: "What kind of impact does his work have?",
      answer:
        "The measurable kind. Processes that used to take hours now take seconds. Teams that relied on analysts for every query can now get answers directly. Manual workflows that burned out good people are now fully automated. He optimises for outcomes, not activity.",
    },
    {
      question: "Is he just a technical person, or does he think about product too?",
      answer:
        "Both. He has a strong product sense — thinks about who uses the system, what they actually need, and whether the thing being built will matter in six months. The product thinking is what separates a system people use daily from one that collects dust after launch.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 relative">
      <SectionNumber current={5} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-3xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-primary/50 mb-4">Common Questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-headline">
              FAQ
            </h2>
            <div className="w-12 h-px bg-gold/40 mx-auto mt-5" />
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/40 bg-card/30 px-6 rounded-sm data-[state=open]:border-primary/30 data-[state=open]:bg-card/60 transition-all duration-300"
              >
                <AccordionTrigger className="font-display text-base md:text-lg text-headline hover:text-primary text-left py-5 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/80 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
