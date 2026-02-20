import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-gradient-to-b from-background to-ivory/50 border-t border-primary/10">
      <div className="container max-w-4xl mx-auto">
        {/* Ornamental divider */}
        <motion.div 
          className="flex items-center justify-center gap-6 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-primary/40 text-2xl">❧</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </motion.div>

        {/* Footer content */}
        <div className="text-center space-y-4">
          <p className="font-display text-2xl md:text-3xl font-bold text-headline">
            <span className="text-primary">Siddhesh</span> Phapale
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground mt-2">
            <span className="px-3 py-1 bg-primary/[0.06] border border-primary/15 text-primary/70 text-xs tracking-wider">BFSI</span>
            <span className="text-primary/30">·</span>
            <span className="font-body text-xs text-muted-foreground/80">Mumbai, India</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-8 mt-14 mb-14">
          {["About", "Projects", "Technologies", "Experience", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground/70 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Copyright */}
        <div className="text-center pt-10 border-t border-primary/10">
          <p className="font-body text-xs text-muted-foreground/60">
            © {currentYear} Siddhesh Phapale. All rights reserved.
          </p>
          <p className="font-editorial text-xs text-primary/40 mt-3 italic">
            Built with intention. Designed for clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
