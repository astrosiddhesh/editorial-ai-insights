import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { MagneticButton } from "@/components/ui/MagneticButton";

const Contact = () => {
  const contactLinks = [
    { label: "Email", href: "mailto:siddhesh.phapale11@gmail.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/siddhesh-phapale1106/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/rawsid11", icon: Github },
    { label: "Instagram", href: "https://www.instagram.com/the__june_boy__/", icon: Instagram },
  ];

  return (
    <section id="contact" className="py-8 px-6 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container max-w-4xl mx-auto">
        {/* Compact heading */}
        <AnimatedSection animation="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 h-px bg-gradient-to-l from-gold/40 to-transparent" />
            <h2 className="font-display text-xl font-semibold text-headline uppercase tracking-wider">
              Get in Touch
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-gold/40 to-transparent" />
          </div>
        </AnimatedSection>

        {/* Inline contact links with magnetic effect */}
        <AnimatedSection animation="reveal" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
            {contactLinks.map((link, index) => (
              <MagneticButton key={link.label} strength={0.5}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <link.icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm link-underline">
                    {link.label}
                  </span>
                </a>
              </MagneticButton>
            ))}
          </div>
        </AnimatedSection>

        {/* Simple CTA */}
        <AnimatedSection animation="blur" delay={250}>
          <p className="text-center font-editorial text-foreground/85 text-sm mb-3">
            Open to data, BI, and GenAI projects, collaborations, or speaking opportunities.
          </p>
          <div className="text-center">
            <a
              href="mailto:siddhesh.phapale11@gmail.com"
              className="btn-editorial-primary inline-flex items-center gap-2 text-sm"
            >
              <span>Start a Conversation</span>
              <span>→</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;