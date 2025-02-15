
const About = () => {
  return (
    <section id="about" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Passionate about creating impactful digital solutions
          </h2>
          <div className="glass-card p-8 rounded-lg">
            <p className="text-lg leading-relaxed mb-6">
              With a focus on user-centered design and modern web technologies, I bring ideas to life through clean code and thoughtful interactions.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in creating intuitive, accessible, and performant applications that provide real value to users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
