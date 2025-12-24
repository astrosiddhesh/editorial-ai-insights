import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        "Yes, Siddhesh has hands-on experience building LLM-powered applications using RAG (Retrieval-Augmented Generation) architectures, LangChain, vector databases, and Vertex AI for enterprise use cases including document Q&A systems and intelligent workflow automation.",
    },
    {
      question: "What kind of projects does Siddhesh work on?",
      answer:
        "Siddhesh works on production-grade systems including automated reconciliation engines, GenAI document Q&A systems, real-time analytics dashboards, and intelligent workflow automation. Each project follows a problem-solution-outcome approach with measurable business impact.",
    },
    {
      question: "How can I contact Siddhesh for collaboration?",
      answer:
        "You can reach Siddhesh through LinkedIn or email for professional opportunities, collaboration on data engineering or GenAI projects, or speaking engagements related to enterprise analytics and AI systems.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-3xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-gold text-2xl">?</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Common questions about my work and expertise.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="card-editorial border-border/60 data-[state=open]:border-gold/40"
            >
              <AccordionTrigger className="font-display text-lg text-headline hover:text-gold text-left px-0 hover:no-underline [&[data-state=open]]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/85 leading-relaxed pt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;