import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import ImmersiveIntro from "@/components/sections/ImmersiveIntro";
import TunnelSection from "@/components/sections/TunnelSection";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import ProjectsIntro from "@/components/sections/ProjectsIntro";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import ExperienceIntro from "@/components/sections/ExperienceIntro";
import Experience from "@/components/sections/Experience";
import StatementReveal from "@/components/sections/StatementReveal";
import CurrentlyOnDesk from "@/components/sections/CurrentlyOnDesk";
import FAQ from "@/components/sections/FAQ";
import ClosingStatement from "@/components/sections/ClosingStatement";
import Contact from "@/components/sections/Contact";
import StatsCounter from "@/components/sections/StatsCounter";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
import GrainOverlay from "@/components/ui/GrainOverlay";
import MarqueeBand from "@/components/ui/MarqueeBand";
import useLenis from "@/hooks/useLenis";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLenis();

  const handleEnterSite = () => {
    setIsLoading(false);
  };

  return (
    <>
      <PageLoader isLoading={isLoading} onEnter={handleEnterSite} />
      <GrainOverlay />
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          
          {/* Marquee band — visual rhythm after hero */}
          <MarqueeBand 
            words={["DATA", "BI", "ML", "GENAI", "AUTOMATION", "ANALYTICS", "ENGINEERING"]}
            variant="light"
            speed={35}
          />

          <WhatIDo />
          <ImmersiveIntro />
          
          {/* 3D Tunnel fly-through */}
          <TunnelSection />
          
          {/* Horizontal scroll showcase — The Approach */}
          <HorizontalShowcase />

          {/* Full-viewport statement */}
          <StatementReveal 
            text="Data without decisions is just noise."
            subtext="Every system is designed to move the needle — not to impress."
          />

          {/* Marquee band — dark variant before projects */}
          <MarqueeBand
            words={["REPOINTEL", "WELFY", "HUSTLR", "EPOQUEST", "ACESHEET"]}
            separator="✦"
            variant="dark"
            direction="right"
            speed={25}
          />

          <ProjectsIntro />
          <Projects />
          
          {/* Stats counter section */}
          <StatsCounter />

          <Technologies />
          <ExperienceIntro />
          <Experience />

          {/* Dark statement section */}
          <StatementReveal 
            text="Better systems start with better questions."
            variant="dark"
            subtext="The constraint shapes the craft."
          />

          <CurrentlyOnDesk />
          <FAQ />
          <ClosingStatement />
          <Contact />

          {/* Final marquee */}
          <MarqueeBand
            words={["LET'S COLLABORATE", "START A CONVERSATION", "BUILD SOMETHING GREAT"]}
            separator="→"
            variant="accent"
            speed={40}
          />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
