import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "projects", "technologies", "experience", "faq", "contact"];
      for (const section of sections.reverse()) {
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
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-b border-gold/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display text-lg md:text-xl font-bold text-headline hover:text-gold transition-colors"
          >
            <span className="text-gold">S.</span> Phapale
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-body text-sm uppercase tracking-wider transition-all ${
                    activeSection === item.id
                      ? "text-gold font-semibold"
                      : "text-muted-foreground hover:text-gold"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="btn-editorial-secondary text-xs px-5 py-2.5"
          >
            Get in Touch
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;