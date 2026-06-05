import { Database, PieChart, LineChart, Code } from 'lucide-react';

const Education = () => {
  const butCompetencies = [
    { icon: <Database size={32} color="var(--accent-primary)" />, title: "Traiter",    desc: "Traitement de données à des fins décisionnelles. Maîtrise des SGBD relationnels et NoSQL, ETL, et intégration en Data Warehouse." },
    { icon: <PieChart size={32} color="var(--accent-primary)" />, title: "Analyser",   desc: "Analyse statistique des données. Statistique descriptive, probabilités, méthodes factorielles (ACP) et apprentissage statistique (Machine Learning)." },
    { icon: <LineChart size={32} color="var(--accent-primary)" />, title: "Valoriser", desc: "Datavisualisation et reporting. Création de tableaux de bord interactifs pour synthétiser l'information et aider à la décision." },
    { icon: <Code size={32} color="var(--accent-primary)" />, title: "Développer",    desc: "Développement d'outils décisionnels. Programmation (Python, R, VBA), automatisation et création de solutions adaptées aux besoins métiers." }
  ];

  return (
    <section id="education" className="section-padding container">
      <div className="flex flex-col items-center">
        <span className="section-subtitle">Mon Parcours</span>
        <h2 className="section-title">Formation & <span className="text-gradient">Expertise</span></h2>
      </div>

      <div className="grid grid-cols-2 gap-12 items-center" style={{ marginBottom: '4rem' }}>
        <div className="flex flex-col gap-6">
          <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>BUT Sciences des Données</h3>
            <p style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1rem' }}>2023 - 2026 • IUT de Vannes</p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Spécialisation en <strong>Visualisation et conception d'outils décisionnels</strong>. 
              Formation axée sur l'intelligence artificielle, les systèmes d'informations géographiques et la BI.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderLeft: '4px solid var(--text-secondary)', opacity: 0.8 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Licence Mathématiques Informatique</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>2021 - 2023 • Université d'Angers</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Acquisition de bases solides en logique mathématique et algorithmique.</p>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Compétences Cœurs du BUT SD</h3>
          <div className="grid grid-cols-2 gap-4">
            {butCompetencies.map((comp, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '1.5rem', transition: 'transform 0.3s' }} 
                   onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                   onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '1rem' }}>{comp.icon}</div>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{comp.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
