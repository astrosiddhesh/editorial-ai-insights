 import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
 import ImmersiveIntro from "@/components/sections/ImmersiveIntro";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";
import Experience from "@/components/sections/Experience";
import CurrentlyOnDesk from "@/components/sections/CurrentlyOnDesk";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import PageLoader from "@/components/ui/PageLoader";
 import GrainOverlay from "@/components/ui/GrainOverlay";
 import useLenis from "@/hooks/useLenis";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

   // Initialize smooth scroll
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
          <Projects />
          <Technologies />
          <Experience />
          <CurrentlyOnDesk />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
