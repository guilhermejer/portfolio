import az900Badge from '../images/az900badge.svg';
import ociBadge from '../images/OCIbadge.png'

const Certifications = () => {
  const certifications = [
    {
      title: "AZ 900",
      link:"https://learn.microsoft.com/pt-br/users/guilhermejeronymo-6324/credentials/511087a61308ce63",
      description: "Microsoft Certified: Conceitos básicos do Azure",
      imgsrc: az900Badge,
      tags: ["Azure", "Cloud", "Network"],
    },
    {
      title: "OCI Foundations",
      link:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=BAEEA48A3C25B730A2AF7BC9A7066D627071C1FDECAA08702B38F8ABB34D25C9",
      description: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
      imgsrc: ociBadge,
      tags: ["OCI", "Cloud", "Network"],
    },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
          Certificados
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Certificados e Credenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center">
          {certifications.map((certifications, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-lg hover:translate-y-[-4px] transition-transform duration-300"
            >
              <a
                target="_blank" rel="noopener noreferrer"
                href={certifications.link}
              >
              <div className="h-48 bg-accent rounded-md mb-4"> <img className="w-full h-full bg-accent/20" src={certifications.imgsrc} alt={certifications.title} /></div>
              </a>
              <h3 className="text-xl font-semibold mb-2 text-center">{certifications.title}</h3>
              <p className="text-foreground/80 mb-4">{certifications.description}</p>
              <div className="flex flex-wrap gap-2">
                {certifications.tags.map((tag, tagIndex) => (
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

export default Certifications;
