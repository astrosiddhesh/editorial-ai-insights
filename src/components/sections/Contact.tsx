import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    { label: "Email", href: "mailto:siddhesh@example.com", icon: Mail },
    { label: "LinkedIn", href: "https://linkedin.com/in/siddheshphapale", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/siddheshphapale", icon: Github },
    { label: "Resume", href: "#", icon: FileText },
  ];

  return (
    <section id="contact" className="py-8 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Compact heading */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gradient-to-l from-gold/40 to-transparent" />
          <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
            Get in Touch
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
        </div>

        {/* Inline contact links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors duration-200"
            >
              <link.icon className="w-4 h-4 text-gold" />
              <span className="font-body text-sm group-hover:underline underline-offset-2">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Simple CTA */}
        <p className="text-center font-editorial text-foreground/85 mb-4">
          Open to discussing data engineering projects, GenAI solutions, or speaking opportunities.
        </p>
        <div className="text-center">
          <a
            href="mailto:siddhesh@example.com"
            className="btn-editorial-primary inline-flex items-center gap-2 text-sm"
          >
            Start a Conversation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;