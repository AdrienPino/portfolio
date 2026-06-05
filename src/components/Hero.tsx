import { ChevronRight, Download, BarChart2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="container flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '6rem' }}>
      <div className="grid grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="badge" style={{ alignSelf: 'flex-start' }}>
            <BarChart2 size={16} style={{ marginRight: '0.5rem' }} />
            Data Scientist & Analyst
          </div>
          
          <h1 style={{ fontSize: '4rem' }}>
            Bonjour, je suis <br/>
            <span className="text-gradient">Adrien Pineau</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Spécialiste en statistiques et en informatique décisionnelle. 
            Actuellement en fin de BUT Sciences des Données, je suis à la recherche d'une <strong>alternance pour mon Master (2026-2028)</strong> pour transformer vos données en décisions stratégiques.
          </p>
          
          <div className="flex gap-4" style={{ marginTop: '1rem' }}>
            <a href="#projects" className="btn btn-primary">
              Voir mes projets <ChevronRight size={18} />
            </a>
            <a href="/CV_Adrien_Pineau.pdf" download className="btn btn-outline">
              Télécharger CV <Download size={18} />
            </a>
          </div>
        </div>
        
        <div className="flex justify-center animate-fade-in delay-200">
          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '50%', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            {/* Using a placeholder for his image if we don't have it, but the PDF had a photo. We can just use an abstract data illustration or an avatar placeholder */}
            <div style={{ position: 'absolute', inset: 10, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(124, 143, 166, 0.12), rgba(100, 116, 139, 0.08))', border: '1px solid var(--glass-border)' }}></div>
            <BarChart2 size={120} color="var(--accent-primary)" style={{ opacity: 0.8 }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
