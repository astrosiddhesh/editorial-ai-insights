import { Mail, Linkedin, Github, Instagram } from "lucide-react";
 import { useRef } from "react";
 import { motion, useScroll, useTransform } from "framer-motion";
 import { MagneticButton } from "@/components/ui/MagneticButton";

const Contact = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   
   const { scrollYProgress } = useScroll({
     target: containerRef,
     offset: ["start end", "start 0.3"],
   });
 
   const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
   const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
 
  const contactLinks = [
    { label: "Email", href: "mailto:siddhesh.phapale11@gmail.com", icon: Mail },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/siddhesh-phapale1106/", icon: Linkedin },
    { label: "GitHub", href: "https://github.com/rawsid11", icon: Github },
    { label: "Instagram", href: "https://www.instagram.com/the__june_boy__/", icon: Instagram },
  ];

  return (
     <section ref={containerRef} id="contact" className="py-16 px-6 relative min-h-[60vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

       <motion.div 
         className="container max-w-4xl mx-auto"
         style={{ opacity, y }}
       >
         {/* Section number */}
         <motion.div 
           className="flex justify-center mb-8"
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
         >
           <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center">
             <span className="font-display text-lg text-gold">∞</span>
           </div>
         </motion.div>

         {/* Heading */}
         <motion.p 
           className="text-xs uppercase tracking-[0.4em] text-gold/70 text-center mb-4"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
         >
           Get in Touch
         </motion.p>
 
         {/* Main message */}
         <motion.h2 
           className="font-display text-2xl md:text-4xl text-headline text-center mb-10 max-w-2xl mx-auto"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2, duration: 0.6 }}
         >
           Let's create something{' '}
           <span className="text-gold italic">extraordinary</span>{' '}
           together.
         </motion.h2>
 
         {/* Contact links */}
         <motion.div 
           className="flex flex-wrap items-center justify-center gap-8 mb-8"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.5 }}
         >
            {contactLinks.map((link, index) => (
              <MagneticButton key={link.label} strength={0.5}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-2 text-foreground/80 hover:text-gold transition-colors duration-200"
                >
                  <link.icon className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span className="font-body text-sm link-underline">
                    {link.label}
                  </span>
                </a>
              </MagneticButton>
            ))}
         </motion.div>

         {/* CTA */}
         <motion.div 
           className="text-center"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.5 }}
         >
           <p className="font-editorial text-foreground/70 text-sm mb-6">
             Open to data, BI, and GenAI projects, collaborations, or speaking opportunities.
           </p>
           <motion.a
             href="mailto:siddhesh.phapale11@gmail.com"
             className="group inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.25em] text-gold"
             whileHover={{ x: 5 }}
           >
             <span>Start a Conversation</span>
             <motion.span 
               className="text-lg"
               animate={{ x: [0, 4, 0] }}
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