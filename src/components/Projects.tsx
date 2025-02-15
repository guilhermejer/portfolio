
const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Project Two",
      description: "Responsive e-commerce platform with seamless checkout",
      tags: ["Next.js", "Redux", "Stripe"],
    },
    {
      title: "Project Three",
      description: "Real-time dashboard with data visualization",
      tags: ["React", "D3.js", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
          Projects
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="h-48 bg-accent rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm rounded-full bg-accent/50 text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
