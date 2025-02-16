import portfolioImg from '@/images/portfolio.png';
import homelabImg from '@/images/homelab.jpg';
import clouHostImg from '@/images/cloud_host.png';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "Uma aplicação WEB moderna utilizando react, vite e tailwind",
      imgsrc:portfolioImg,
      lnk: "https://github.com/guilhermejer/portfolio",
      tags: ["React", "Vite", "TypeScript", "Tailwind", "Self-Hosting"],
    },
    {
      title: "Home lab",
      description: "Em progresso...",
      imgsrc:homelabImg,
      lnk: "",
      tags: ["Linux", "Shell", "Networking", "Virtualization"],
    },
    {
      title: "Cloud Host",
      description: "Criação de máquinas virtuais na cloud para hostear jogos online",
      imgsrc:clouHostImg,
      lnk: "",
      tags: ["Google Cloud", "OCI", "Linux", "Docker"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
          Projetos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projetos pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300">
              {project.lnk ? (
                <a href={project.lnk} target="_blank" rel="noopener noreferrer">
                  <div className="aspect-video w-full rounded-md mb-4 overflow-hidden">
                    <img 
                      src={project.imgsrc} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </a>
              ) : (
                <>
                  <div className="aspect-video w-full rounded-md mb-4 overflow-hidden">
                    <img 
                      src={project.imgsrc} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                </>
              )}
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
