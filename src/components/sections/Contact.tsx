import { Mail, Linkedin, Github, FileText, ArrowUpRight } from "lucide-react";

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
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-t from-ivory to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tl from-gold/10 to-transparent rounded-full blur-3xl animate-float" />

      <div className="container max-w-4xl mx-auto relative z-10">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-gradient-to-l from-gold to-transparent" />
            <span className="text-gold text-2xl hover-scale cursor-default">✦</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
          </div>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Open to discussing data engineering projects, GenAI solutions, 
            or speaking opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-editorial group text-center hover-lift hover:border-gold/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:from-gold/30 group-hover:to-gold/10 group-hover:scale-110 transition-all duration-300">
                  <link.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-headline mb-1 group-hover:text-gold transition-colors duration-300 flex items-center justify-center gap-1">
                  {link.label}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </h3>
                <p className="text-xs text-muted-foreground font-body">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="highlight-box inline-block px-12 py-8 hover-glow transition-all duration-300">
            <p className="font-editorial text-xl text-foreground/90 mb-6">
              Ready to build something <span className="text-gold font-semibold">impactful</span> together?
            </p>
            <a
              href="mailto:siddhesh@example.com"
              className="btn-editorial-primary group"
            >
              Start a Conversation
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;