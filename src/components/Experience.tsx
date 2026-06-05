import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Saisonnier Agricole (Céréales)",
      company: "Pelé Agri conseil",
      location: "Saint-Pierre-Montlimart (49)",
      date: "Juillet 2022 - 2024",
      tasks: [
        "Réception de remorques de céréales (Blé, orge, colza, triticale)",
        "Prise et analyse des échantillons, puis collecte de résultats",
        "Réalisation de bons de livraisons",
        "Chargement de semi-remorques de céréales à l’aide d’un chariot télescopique"
      ]
    },
    {
      title: "Intérimaire Agent Logistique",
      company: "Gémo",
      location: "Saint-Pierre-Montlimart (49)",
      date: "Avril-Juin 2022 - 2023",
      tasks: [
        "Préparation de commandes",
        "Gestion des stocks et logistique"
      ]
    },
    {
      title: "Saisonnier (Pommes)",
      company: "Vergers de Sours EARL",
      location: "Mauges-sur-Loires (49)",
      date: "Aout 2020 - 2021",
      tasks: [
        "Éclaircissage et cueillette des pommes",
        "Travail en équipe en milieu agricole"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding container">
      <div className="flex flex-col items-center">
        <span className="section-subtitle">Mon parcours pro</span>
        <h2 className="section-title">Expériences <span className="text-gradient">Professionnelles</span></h2>
      </div>

      <div className="flex flex-col gap-8 relative" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '2rem', width: '2px', background: 'var(--glass-border)', zIndex: -1 }}></div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem', position: 'relative', marginLeft: '4rem' }}>
            {/* Timeline dot */}
            <div style={{ position: 'absolute', top: '2.5rem', left: '-2.4rem', width: '1rem', height: '1rem', borderRadius: '50%', background: 'var(--accent-primary)', border: '2px solid var(--bg-color)' }}></div>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{exp.title}</h3>
            
            <div className="flex gap-4" style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
              <div className="flex items-center gap-1"><Briefcase size={16} /> {exp.company}</div>
              <div className="flex items-center gap-1"><MapPin size={16} /> {exp.location}</div>
              <div className="flex items-center gap-1"><Calendar size={16} /> {exp.date}</div>
            </div>

            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-primary)' }}>
              {exp.tasks.map((task, tIdx) => (
                <li key={tIdx} style={{ marginBottom: '0.5rem' }}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
