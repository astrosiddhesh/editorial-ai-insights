import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
    <section id="faq" className="py-8 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-3xl mx-auto">
        {/* Section heading */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              FAQ
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 bg-card/50 px-4 data-[state=open]:border-gold/40 transition-colors"
              >
                <AccordionTrigger className="font-display text-sm text-headline hover:text-gold text-left py-3 hover:no-underline [&[data-state=open]]:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-xs text-foreground/85 leading-relaxed pb-3">
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