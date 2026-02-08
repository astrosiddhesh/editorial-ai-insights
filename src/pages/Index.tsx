import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import ImmersiveIntro from "@/components/sections/ImmersiveIntro";
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
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
import GrainOverlay from "@/components/ui/GrainOverlay";
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
          <WhatIDo />
          <ImmersiveIntro />
          
          {/* Horizontal scroll showcase — The Approach */}
          <HorizontalShowcase />

          {/* Full-viewport statement */}
          <StatementReveal 
            text="Data without decisions is just noise."
            subtext="Every system is designed to move the needle — not to impress."
          />

          <ProjectsIntro />
          <Projects />
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
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
