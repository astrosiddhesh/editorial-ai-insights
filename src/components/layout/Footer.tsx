const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-ivory to-background border-t border-gold/20">
      <div className="container max-w-4xl mx-auto">
        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold text-3xl">❧</span>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Footer content */}
        <div className="text-center space-y-3">
          <p className="font-display text-xl font-bold text-headline">
            <span className="text-gold">Siddhesh</span> Phapale
          </p>
          <p className="font-editorial text-base text-foreground/80">
            Data | BI | ML | GenAI | Enthu
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <span className="px-2 py-0.5 bg-gold/10 border border-gold/20 text-gold text-xs">BFSI</span>
            <span className="text-gold">•</span>
            <span className="font-body text-xs">Mumbai, India</span>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-10 mb-10">
          {["About", "Projects", "Technologies", "Experience", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-gold transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gold/10">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} Siddhesh Phapale. All rights reserved.
          </p>
          <p className="font-editorial text-xs text-gold/70 mt-2 italic">
            Built with intention. Designed for clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;