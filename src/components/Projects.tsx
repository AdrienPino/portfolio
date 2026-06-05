import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cartographie des accueils de loisirs",
      date: "2025",
      entity: "Ville de Nantes (Stage 2 mois)",
      description: "Création d'une cartographie interactive des accueils de loisirs de Nantes. Conception du fichier contenant toutes les données et automatisation de sa création via des macros VBA.",
      tags: ["VBA", "Data Processing", "Cartographie"],
      color: "var(--accent-primary)"
    },
    {
      title: "Analyse des données de FC24",
      date: "2024-2025",
      entity: "Projet Académique (IUT Vannes)",
      description: "Réalisation d'une application R-Shiny. Automatisation d'ACP (Analyse en Composantes Principales) et de clustering pour créer des groupes de joueurs aux profils similaires.",
      tags: ["R-Shiny", "Clustering", "ACP", "Automatisation"],
      color: "var(--accent-secondary)"
    },
    {
      title: "Etude sur les promotions",
      date: "2024-2025",
      entity: "Sodebo (Projet Académique)",
      description: "Analyse des promotions appliquées aux pizzas Sodebo. Création d'un tableau de bord décisionnel interactif sur Power BI avec manipulations complexes en langage DAX.",
      tags: ["Power BI", "DAX", "DataViz"],
      color: "var(--accent-tertiary)"
    },
    {
      title: "Optimisation d'entrepôt",
      date: "2023-2024",
      entity: "NewCold (Projet Académique)",
      description: "Optimisation de la zone de préparation des commandes. Création d'un outil Power BI, de macros VBA, et réalisation de cartes 2D (entrepôt et saturation des zones).",
      tags: ["Power BI", "VBA", "Spatial Analysis"],
      color: "var(--accent-primary)"
    }
  ];

  return (
    <section id="projects" className="section-padding container">
      <div className="flex flex-col items-center">
        <span className="section-subtitle">Mes réalisations</span>
        <h2 className="section-title">Projets <span className="text-gradient">Phare</span></h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass-panel flex flex-col" style={{ padding: '2rem', borderTop: `4px solid ${project.color}`, transition: 'all 0.3s ease', cursor: 'pointer' }}
               onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${project.color}33`; }}
               onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--glass-shadow)'; }}>
            
            <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
              <span style={{ color: project.color, fontWeight: 600, fontSize: '0.9rem' }}>{project.date} • {project.entity}</span>
              <div className="flex gap-2">
                <Code2 size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
                <ExternalLink size={20} color="var(--text-secondary)" style={{ cursor: 'pointer' }} />
              </div>
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
            
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

