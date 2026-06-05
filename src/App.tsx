import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} Adrien Pineau. Tous droits réservés.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Portfolio réalisé pour mettre en valeur les compétences du BUT Sciences des Données.</p>
      </footer>
    </>
  );
}

export default App;
