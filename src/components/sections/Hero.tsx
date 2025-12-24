const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-gold/5 to-transparent rounded-full" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Editorial ornament */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.1s" }}>
          <span className="text-2xl text-gold">❧</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-semibold">Portfolio</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <span className="text-2xl text-gold">❧</span>
        </div>

        {/* Main headline - H1 */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.2s" }}>
          <span className="bg-gradient-to-r from-headline via-headline to-gold bg-clip-text text-transparent">
            Siddhesh Phapale
          </span>
        </h1>

        {/* Role declaration */}
        <p className="font-editorial text-xl md:text-2xl lg:text-3xl text-subheadline mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
          Data Engineer & <span className="text-gold font-semibold">GenAI</span> Systems Builder
        </p>

        {/* Entity anchoring */}
        <div className="flex items-center justify-center gap-3 text-sm md:text-base text-muted-foreground uppercase tracking-wider mb-12 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.4s" }}>
          <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold">Enterprise Analytics</span>
          <span className="text-gold">•</span>
          <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold">BFSI</span>
          <span className="text-gold">•</span>
          <span className="font-body">Mumbai, India</span>
        </div>

        {/* Value statement */}
        <p className="font-editorial text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
          I design and deploy <span className="text-gold font-medium">production-grade data and GenAI systems</span> that transform 
          enterprise operations through intelligent automation and analytics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
          <a href="#projects" className="btn-editorial-primary group">
            View Projects
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#contact" className="btn-editorial">
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.8s" }}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold/70">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;