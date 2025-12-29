import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <WhatIDo />
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
