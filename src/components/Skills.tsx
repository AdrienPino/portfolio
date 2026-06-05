import { Code2, Database, LayoutDashboard, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { title: "Analyse Statistique",     icon: <BrainCircuit color="var(--accent-primary)" size={24} />, skills: ["ACP", "ACF", "Clustering", "Modèle linéaire (régression)", "Séries temporelles", "Tests d'hypothèses", "Intervalles de confiance"] },
    { title: "Programmation & Outils",   icon: <Code2 color="var(--accent-primary)" size={24} />,       skills: ["Python (Spyder, Jupyter)", "R", "SAS", "VBA", "Javascript", "HTML/CSS"] },
    { title: "Bases de données",         icon: <Database color="var(--accent-primary)" size={24} />,    skills: ["SQL", "Oracle", "Access"] },
    { title: "Visualisation & BI",       icon: <LayoutDashboard color="var(--accent-primary)" size={24} />, skills: ["Power BI (DAX)", "R-Shiny", "Excel"] }
  ];

  return (
    <section id="skills" className="section-padding container">
      <div className="flex flex-col items-center">
        <span className="section-subtitle">Ce que je maîtrise</span>
        <h2 className="section-title">Mes <span className="text-gradient">Compétences</span></h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '2rem' }}>
            <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '0.5rem' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>{category.title}</h3>
            </div>
            
            <div className="flex" style={{ flexWrap: 'wrap', gap: '0.75rem' }}>
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel mt-12" style={{ padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Qualités & Savoir-être</h3>
        <div className="flex justify-center" style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
          {["Autonomie", "Curiosité", "Gestion des priorités", "Polyvalence", "Anglais (Professionnel)"].map((q, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-secondary)' }}></div>
              <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{q}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
