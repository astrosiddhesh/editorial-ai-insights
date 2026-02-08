import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-primary/10 shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-12 md:h-14">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 font-display text-lg md:text-xl font-bold text-headline group"
          >
            {/* Logo SVG */}
            <svg 
              className="w-7 h-7 text-primary group-hover:text-bright-blue transition-colors duration-500 animate-[spin_40s_linear_infinite]" 
              viewBox="0 0 32 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M16 4 L28 26 L4 26 Z" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinejoin="round"
                fill="none"
              />
              <path 
                d="M16 10 L22 22 L10 22 Z" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinejoin="round"
                fill="none"
                strokeOpacity="0.5"
              />
              <circle cx="16" cy="18" r="1.2" fill="currentColor"/>
            </svg>
            <span className="hidden sm:inline">
              <span className="text-primary group-hover:text-bright-blue transition-colors duration-500">Siddhesh</span>
              <span className="text-headline/70 group-hover:text-primary transition-colors duration-500">P.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-[11px] uppercase tracking-[0.2em] transition-all duration-300 relative ${
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ${
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
            className="md:hidden p-2 text-headline hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 bg-background ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="py-6 space-y-1 border-t border-primary/10 bg-background">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 font-body text-sm uppercase tracking-wider transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
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
