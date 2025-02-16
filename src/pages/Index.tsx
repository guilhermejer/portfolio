
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";


const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const calculateOpacity = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return Math.max(0, 1 - (scrollY / maxScroll) * 1.5);
  };

  return (
    <div className="w-screen min-h-screen smooth-scroll z-50">
        <section className="-z-10 w-screen min-h-screen fixed inset-0 bg-[##fff] bg-[linear-gradient(to_bottom,_#e6e6e6_1px,_transparent_1px),_linear-gradient(to_right,_#e6e6e6_1px,_transparent_1px)] [background-size:60px_60px] bg-center overflow-x-hidden animate-bgmove" 
              style={{
                opacity: calculateOpacity(),
              }}/>
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />   
    </div>
  );
};

export default Index;
