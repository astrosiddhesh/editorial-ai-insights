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
        "Siddhesh builds production-grade data and GenAI systems used by real enterprise teams. His work spans reconciliation engines, business intelligence platforms, and LLM-assisted workflows that replace manual, error-prone processes with reliable automation.",
    },
    {
      question: "What tech does Siddhesh work with day-to-day?",
      answer:
        "Mostly Python and SQL at the core, layered with FastAPI, Streamlit, and cloud data platforms. On the GenAI side, he works with LLMs, RAG architectures, vector databases, and NL2SQL systems, along with Power BI and Tableau for decision-ready analytics.",
    },
    {
      question: "Which industries has Siddhesh worked in?",
      answer:
        "Primarily BFSI (Banking, Financial Services, and Insurance) — environments where data accuracy, explainability, and scale actually matter. Most systems he's built run in regulated, high-volume enterprise setups.",
    },
    {
      question: "Does Siddhesh really work with GenAI and LLMs, or just demos?",
      answer:
        "Yes — in production, not just prototypes. Siddhesh has designed LLM-powered enterprise assistants, AI-driven reconciliation workflows, and decision-support systems, combining deterministic pipelines with LLM reasoning to keep things trustworthy and auditable.",
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
