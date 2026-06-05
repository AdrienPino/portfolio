import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Formation', href: '#education' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
  ];

  return (
    <nav className="glass-panel" style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 4rem)', maxWidth: '1200px', zIndex: 50, padding: '1rem 2rem' }}>
      <div className="flex justify-between items-center">
        <a href="#home" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Adrien Pineau</a>
        
        {/* Desktop Nav */}
        <div className="flex gap-6" style={{ display: 'none' }} id="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500 }} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ display: 'none' }} id="desktop-btn">
          <a href="#contact" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="btn" style={{ padding: '0.5rem', background: 'transparent' }} onClick={() => setIsOpen(!isOpen)} id="mobile-toggle">
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="flex flex-col gap-4 items-center" style={{ marginTop: '1rem', padding: '1rem 0' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          #desktop-nav, #desktop-btn { display: flex !important; }
          #mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--accent-secondary); }
      `}</style>
    </nav>
  );
};

export default Navbar;
