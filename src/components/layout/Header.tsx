import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "projects", "technologies", "experience", "faq", "contact"];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "technologies", label: "Tech" },
    { id: "experience", label: "Experience" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background backdrop-blur-md border-b border-gold/20 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-12 md:h-14">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 font-display text-lg md:text-xl font-bold text-headline group"
          >
            {/* Logo SVG - Stacked Data Layers */}
            <svg 
              className="w-8 h-8 text-gold group-hover:text-amber transition-colors duration-300 animate-[spin_40s_linear_infinite]" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Bottom layer */}
              <path 
                d="M6 28L20 34L34 28L20 22L6 28Z" 
                fill="currentColor" 
                fillOpacity="0.3"
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
              {/* Middle layer */}
              <path 
                d="M6 20L20 26L34 20L20 14L6 20Z" 
                fill="currentColor" 
                fillOpacity="0.5"
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
              {/* Top layer */}
              <path 
                d="M6 12L20 18L34 12L20 6L6 12Z" 
                fill="currentColor" 
                fillOpacity="0.8"
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden sm:inline">
              <span className="text-gold group-hover:text-amber transition-colors duration-300">Siddhesh</span>
              <span className="group-hover:text-gold transition-colors duration-300">P.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-sm uppercase tracking-wider transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "text-gold font-semibold"
                      : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {item.label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${
                      activeSection === item.id ? "w-full" : "w-0"
                    }`} 
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-headline hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-editorial-secondary text-xs px-5 py-2.5 hover-glow"
            >
              Get in Touch
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 bg-background ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-4 space-y-2 border-t border-gold/10 bg-background">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 font-body text-sm uppercase tracking-wider transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-gold font-semibold bg-gold/5"
                      : "text-muted-foreground hover:text-gold hover:bg-gold/5"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;