import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-amber/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Tagline */}
        <p className="font-editorial text-lg md:text-xl text-gold mb-6 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-1">
          Engineer Obsessed With Converting Data & GenAI Into Automation, Revenue & Impact
        </p>

        {/* Quote */}
        <div className="mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-2">
          <p className="font-editorial text-xl md:text-2xl text-foreground/80 italic">
            Some call him <span className="font-semibold text-headline not-italic">unstoppable</span>.
          </p>
          <p className="font-editorial text-lg text-muted-foreground italic mt-1">
            He calls it <em>obsession with execution and impact</em>.
          </p>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-3">
          <span className="text-headline">Siddhesh </span>
          <span className="text-gold">Phapale</span>
        </h1>

        {/* Role */}
        <p className="font-body text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards] stagger-4">
          The Data & GenAI Engineer
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
          <a href="#projects" className="btn-editorial-primary group">
            View Projects
            <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a href="#contact" className="btn-editorial">
            Contact
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#about" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-fill-mode:forwards] group cursor-pointer" 
        style={{ animationDelay: "0.8s" }}
      >
        <ChevronDown className="w-5 h-5 text-gold/50 group-hover:text-gold animate-scroll-bounce transition-colors" />
      </a>
    </section>
  );
};

export default Hero;