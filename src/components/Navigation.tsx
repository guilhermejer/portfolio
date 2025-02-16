
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const menuItems = [
    {item: 'about', title:'Sobre'},
    {item: 'experience', title:'Experiência'},
    {item: 'projects', title:'Projetos'},
    {item: 'skills', title:'Skills'},
    {item: 'certifications', title:'Certificados'},
    {item: 'contact', title:'Contato'}
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-4 bg-card/80 backdrop-blur-sm shadow-sm" : "py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold hover:text-primary transition-colors">
          Portfolio
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.item}
              href={`#${item.item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Botão Menu Mobile */}
        <button 
          className="md:hidden p-2 hover:bg-accent/50 rounded-lg transition-colors "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-card/80 backdrop-blur-sm shadow-lg md:hidden ">
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.item}
                  href={`#${item.item.toLowerCase()}`}
                  className="block py-3 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navigation;