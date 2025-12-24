import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      label: "Email",
      href: "mailto:siddhesh@example.com",
      icon: Mail,
      description: "Direct communication",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/siddheshphapale",
      icon: Linkedin,
      description: "Professional network",
    },
    {
      label: "GitHub",
      href: "https://github.com/siddheshphapale",
      icon: Github,
      description: "Code & projects",
    },
    {
      label: "Resume",
      href: "#",
      icon: FileText,
      description: "Download CV",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="editorial-rule-double w-32 mx-auto mb-8" />
          <h2 className="section-heading">Get in Touch</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Open to discussing data engineering projects, GenAI solutions, 
            or speaking opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-editorial group text-center hover:border-primary/40 transition-all duration-300"
            >
              <link.icon className="w-8 h-8 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <h3 className="font-display text-lg font-medium text-headline mb-1 group-hover:text-primary transition-colors">
                {link.label}
              </h3>
              <p className="text-xs text-muted-foreground font-body">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-editorial text-xl text-foreground/80 mb-6">
            Ready to build something impactful together?
          </p>
          <a
            href="mailto:siddhesh@example.com"
            className="btn-editorial-primary"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
