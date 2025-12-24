const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container max-w-4xl mx-auto text-center">
        {/* Editorial ornament */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="ornament text-2xl">❧</span>
          <div className="w-24 h-px bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-body">Portfolio</span>
          <div className="w-24 h-px bg-border" />
          <span className="ornament text-2xl">❧</span>
        </div>

        {/* Main headline - H1 */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-headline leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Siddhesh Phapale
        </h1>

        {/* Role declaration */}
        <p className="font-editorial text-xl md:text-2xl lg:text-3xl text-subheadline mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Data Engineer & GenAI Systems Builder
        </p>

        {/* Entity anchoring */}
        <p className="font-body text-sm md:text-base text-muted-foreground uppercase tracking-wider mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Enterprise Analytics • BFSI • Mumbai, India
        </p>

        {/* Value statement */}
        <p className="font-editorial text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          I design and deploy production-grade data and GenAI systems that transform 
          enterprise operations through intelligent automation and analytics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
          <a href="#projects" className="btn-editorial-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-editorial">
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
