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
      question: "What does Siddhesh Phapale do?",
      answer:
        "Siddhesh Phapale designs and deploys production-grade data and GenAI systems for BFSI and enterprise teams. His work focuses on building reconciliation engines, business intelligence systems, and LLM-assisted workflows that automate complex business processes.",
    },
    {
      question: "What technologies does Siddhesh specialize in?",
      answer:
        "Siddhesh specializes in Python, SQL, FastAPI, Streamlit, Google Cloud Platform (GCP), BigQuery, Vertex AI, LangChain, Vector Databases, Power BI, and Tableau. He has deep expertise in data engineering tools and GenAI frameworks.",
    },
    {
      question: "What industries has Siddhesh worked in?",
      answer:
        "Siddhesh has extensive experience in BFSI (Banking, Financial Services, and Insurance), fintech, and enterprise analytics domains. He has built systems handling high-volume financial data and complex regulatory requirements.",
    },
    {
      question: "Is Siddhesh experienced with GenAI and LLMs?",
      answer:
        "Yes, Siddhesh has hands-on experience building LLM-powered applications using RAG (Retrieval-Augmented Generation) architectures, LangChain, vector databases, and Vertex AI for enterprise use cases.",
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