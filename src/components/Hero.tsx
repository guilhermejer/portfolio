
const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-lg animate-fade-up">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent/50 text-secondary-foreground mb-4">
            Welcome to my portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Creating Digital
            <br />
            Experiences
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
            Frontend developer specializing in building beautiful, functional, and user-centered digital experiences.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
