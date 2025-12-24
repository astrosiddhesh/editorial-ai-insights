const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-ivory border-t border-border">
      <div className="container max-w-4xl mx-auto">
        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-border" />
          <span className="ornament text-2xl">❧</span>
          <div className="w-16 h-px bg-border" />
        </div>

        {/* Footer content */}
        <div className="text-center space-y-4">
          <p className="font-display text-lg text-headline">
            Siddhesh Phapale
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Data Engineer & GenAI Systems Builder
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Enterprise Analytics • BFSI • Mumbai, India
          </p>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-8 mb-8">
          {["About", "Projects", "Technologies", "Experience", "FAQ", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground">
            © {currentYear} Siddhesh Phapale. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Built with intention. Designed for clarity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
