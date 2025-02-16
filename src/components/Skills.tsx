
const Skills = () => {
const skills = [
    "Oracle (RAC)",
    "Vertica",
    "MSSQL",
    "SQL",
    "PL/SQL",
    "Informatica PowerCenter",
    "Azure (AZ-900)",
    "OCI",
    "GCP",
    "Agile",
    "SCRUM",
    "ITSM (Itil v4)",
    "Service Now",
    "Shell/Bash",
    "Python",
    "NodeJS",
    "Java",
    "R",
    "Linux: RHEL, Oracle Linux",
    "Windows: Windows Server",
    "Machine Learning",
    "Modelos de regressão",
    "Redes neurais artificiais",
    "Excel",
    "Power BI",
    "Microsserviços",
    "Oracle Weblogic",
    "APIs",
    "Control-M",
    "Contêiners",
    "Javascript",
    "React"
];

  return (
    <section id="skills" className="section-padding bg-accent/30">
      <div className="container mx-auto">
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-accent text-secondary-foreground mb-4">
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Tecnologias e Ferramentas</h2>
        <div className="glass-card p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-accent/40 rounded-lg text-center hover:bg-accent/60 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
