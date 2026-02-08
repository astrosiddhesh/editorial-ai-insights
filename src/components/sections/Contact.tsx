import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import SectionNumber from "@/components/ui/SectionNumber";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  const contactLinks = [
    { label: "Email", href: "mailto:siddhesh.phapale11@gmail.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/siddhesh-phapale1106/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/rawsid11", icon: Github },
    { label: "Instagram", href: "https://www.instagram.com/the__june_boy__/", icon: Instagram },
  ];

  return (
    <section ref={containerRef} id="contact" className="relative min-h-screen flex items-center justify-center px-6 py-32">
      <SectionNumber current={6} total={6} />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <motion.div 
        className="max-w-4xl mx-auto text-center"
        style={{ opacity, y }}
      >
        {/* Overline */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-8 h-px bg-primary/30" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary/50">Get in Touch</p>
          <div className="w-8 h-px bg-primary/30" />
        </motion.div>

        {/* Main headline — MASSIVE */}
        <motion.h2 
          className="font-display font-bold text-headline mb-8 leading-[0.95]"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's create something{' '}
          <span className="text-primary italic">extraordinary</span>{' '}
          together.
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          className="font-editorial text-foreground/60 text-base md:text-lg mb-16 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Open to data, BI, and GenAI projects, collaborations, or speaking opportunities.
        </motion.p>

        {/* Contact links — larger */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-10 md:gap-14 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {contactLinks.map((link) => (
            <MagneticButton key={link.label} strength={0.5}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <link.icon className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all" />
                <span className="font-body text-sm tracking-wide link-underline">
                  {link.label}
                </span>
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* CTA — prominent */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="mailto:siddhesh.phapale11@gmail.com"
            className="group inline-flex items-center gap-4 font-body text-xs uppercase tracking-[0.3em] text-primary border-b border-primary/30 pb-2 hover:border-primary transition-colors"
            whileHover={{ x: 5 }}
          >
            <span>Start a Conversation</span>
            <motion.span 
              className="text-xl"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
