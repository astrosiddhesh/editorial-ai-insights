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
        "He builds data and AI systems for regulated industries. Multi-agent chatbots that let executives query databases in plain English. OCR pipelines that read handwritten customer letters and auto-generate policy updates. BI dashboards used by 5,000+ people daily. Things that run in production, not in a pitch deck.",
    },
    {
      question: "How does Siddhesh approach a new problem?",
      answer:
        "Starts with 'should we build this?' before 'how do we build this?' Talks to stakeholders, maps the decision the system needs to improve, then picks the simplest architecture that survives production. Most of the value comes from scoping correctly, not from choosing the fanciest model.",
    },
    {
      question: "What kind of results has Siddhesh delivered?",
      answer:
        "Concrete ones. 90% reduction in LLM API costs through dual-model orchestration. 85% less time spent on manual reporting. 75% faster policy servicing turnaround. 70% cut in inference costs through prompt and result caching. Two consecutive innovation awards for process automation and real-time analytics.",
    },
    {
      question: "Does Siddhesh only do technical work, or does he think about product too?",
      answer:
        "Both. He's certified in product prioritisation and roadmap development. He identifies which problems are worth solving before writing code, runs stakeholder alignment, and thinks in terms of user impact, not just technical elegance. The product thinking is what separates useful systems from impressive-but-unused ones.",
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
