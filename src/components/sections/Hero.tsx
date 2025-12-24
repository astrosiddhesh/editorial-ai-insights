import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Decorative background elements - more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-amber/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-copper/5 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Editorial ornament */}
        <div className="flex items-center justify-center gap-4 mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-1">
          <span className="text-2xl text-gold hover-scale cursor-default">❧</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-body font-semibold">Portfolio</span>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <span className="text-2xl text-gold hover-scale cursor-default">❧</span>
        </div>

        {/* Main headline - H1 */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-2">
          <span className="text-headline">Siddhesh </span>
          <span className="text-gold">Phapale</span>
        </h1>

        {/* Role declaration */}
        <p className="font-editorial text-xl md:text-2xl lg:text-3xl text-subheadline mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-3">
          Data Engineer & <span className="text-gold font-semibold relative inline-block hover-scale">GenAI</span> Systems Builder
        </p>

        {/* Entity anchoring */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-muted-foreground uppercase tracking-wider mb-12 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-4">
          <span className="px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300 cursor-default">
            Enterprise Analytics
          </span>
          <span className="text-gold">•</span>
          <span className="px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300 cursor-default">
            BFSI
          </span>
          <span className="text-gold">•</span>
          <span className="font-body hover:text-gold transition-colors duration-300 cursor-default">Mumbai, India</span>
        </div>

        {/* Value statement */}
        <p className="font-editorial text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-5">
          I design and deploy <span className="text-gold font-medium">production-grade data and GenAI systems</span> that transform 
          enterprise operations through intelligent automation and analytics.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.6s" }}>
          <a 
            href="#projects" 
            className="btn-editorial-primary group hover-glow"
          >
            View Projects
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a 
            href="#contact" 
            className="btn-editorial hover-lift"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator - enhanced */}
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-fill-mode:forwards] group cursor-pointer" 
        style={{ animationDelay: "1s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gold/70 group-hover:text-gold transition-colors duration-300">Scroll</span>
          <div className="relative w-6 h-10 border-2 border-gold/40 rounded-full group-hover:border-gold/70 transition-colors duration-300">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold rounded-full animate-scroll-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-gold/50 group-hover:text-gold animate-scroll-bounce transition-colors duration-300" style={{ animationDelay: "0.2s" }} />
        </div>
      </a>
    </section>
  );
};

export default Hero;