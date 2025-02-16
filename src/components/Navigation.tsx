
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-card/80 backdrop-blur-sm shadow-sm" : "py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold hover:text-primary transition-colors">
          Portfolio
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[ 
            {item: 'about', title:'Sobre'},
            {item: 'experience', title:'Experiência'},
            {item: 'projects', title:'Projetos'},
            {item: 'skills', title:'Skills'},
            {item: 'certifications', title:'Certificados'},
            {item: 'contact', title:'Contato'}].map((item) => (
            <a
              key={item.item}
              href={`#${item.item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
