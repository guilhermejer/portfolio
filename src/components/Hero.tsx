import fotoPerfil from "../images/foto_perfil.jpg"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="glass-card p-3 md:p-12 rounded-lg animate-fade-up mx-3 md:mx-auto">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent/50 text-secondary-foreground mb-4">
            Bem vindo ao meu portfólio
          </span>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h1 className="text-4xl md:text-4xl font-bold p-8 text-center md:text-left">
              Guilherme Jeronymo
            </h1>
            <div className="flex justify-center md:block">
              <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary rounded-lg overflow-hidden md:ml-4">
                <img 
                  src={fotoPerfil}
                  alt="Guilherme Jeronymo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-2xl font-bold mb-2 italic">
            O futuro já chegou.
            <br />
            Só não está uniformemente distribuido.
          </h3>
          <p className="text-sm italic text-foreground/70 mb-6">
            -William Gibson
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-5xl">
            Analista Desenvolvedor de Sustentação, especializado na resolução de problemas em causa raiz, desenvolvimento de automações, ferramentas e WA's.
            <br />
            MBA em Data Science & Analytics.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;