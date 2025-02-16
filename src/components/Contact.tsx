
const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Fale comigo</h2>
          <div className="glass-card p-8 rounded-lg">
            <p className="text-lg mb-8">
              Achou meu perfil interessante?<br/> Sinta-se livre para entrar em contato:
            </p>
            <a
              target="_blank" rel="noopener noreferrer"
              href="https://wa.me/5511937445007?text=Ol%C3%A1+Guilherme%21+Encontrei+o+seu+perfil+atrav%C3%A9s+do+seu+portfolio+online."
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Enviar um Zap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
