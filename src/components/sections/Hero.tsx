import { ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import FloatingParticles from "@/components/ui/FloatingParticles";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-12 px-6 overflow-hidden"
    >
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-tl from-amber/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto text-center relative z-10">
        {/* Tagline with typewriter effect */}
        <p className="font-editorial text-lg md:text-xl text-gold mb-6 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.1s" }}>
          Engineer Obsessed With Converting Data & GenAI Into Automation, Revenue & Impact
        </p>

        {/* Quote with staggered reveal */}
        <div className="mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.3s" }}>
          <p className="font-editorial text-xl md:text-2xl text-foreground/80 italic">
            Some call him <span className="font-semibold text-headline not-italic inline-block hover:scale-110 transition-transform duration-300 cursor-default">unstoppable</span>.
          </p>
          <p className="font-editorial text-lg text-muted-foreground italic mt-1">
            He calls it <em className="hover:text-gold transition-colors duration-300">obsession with execution and impact</em>.
          </p>
        </div>

        {/* Main headline with letter animation feel */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.5s" }}>
          <span className="text-headline inline-block hover:tracking-wider transition-all duration-500">Siddhesh </span>
          <span className="text-gold inline-block hover:scale-105 transition-transform duration-300 origin-left">Phapale</span>
        </h1>

        {/* Role */}
        <p className="font-body text-lg text-muted-foreground mb-8 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.7s" }}>
          The Data & GenAI Engineer
        </p>

        {/* Magnetic CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in [animation-fill-mode:forwards]" style={{ animationDelay: "0.9s" }}>
          <MagneticButton strength={0.4}>
            <a href="#projects" className="btn-editorial-primary group relative overflow-hidden">
              <span className="relative z-10">View Projects</span>
              <span className="ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300 relative z-10">→</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-dark to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.4}>
            <a href="#contact" className="btn-editorial group relative overflow-hidden">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator with bounce */}
      <a 
        href="#about" 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in [animation-fill-mode:forwards] group cursor-pointer" 
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest text-gold/60 group-hover:text-gold transition-colors">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gold/50 group-hover:text-gold animate-scroll-bounce transition-colors" />
        </div>
      </a>
    </section>
  );
};

export default Hero;