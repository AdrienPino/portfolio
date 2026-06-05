import { Mail, Phone, MapPin, Globe, Code2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding container">
      <div className="flex flex-col items-center">
        <span className="section-subtitle">Me contacter</span>
        <h2 className="section-title">Prêt à <span className="text-gradient">Collaborer ?</span></h2>
      </div>

      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Je suis activement à la recherche d'une alternance pour l'année <strong>2025-2026</strong>. 
          N'hésitez pas à me contacter pour discuter de vos besoins en données.
        </p>

        <div className="flex justify-center" style={{ flexWrap: 'wrap', gap: '2rem', marginBottom: '3rem' }}>
          <div className="flex items-center gap-2">
            <Mail color="var(--accent-primary)" />
            <a href="mailto:adrienpineau.pro@gmail.com">adrienpineau.pro@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone color="var(--accent-secondary)" />
            <a href="tel:0767579827">07 67 57 98 27</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin color="var(--accent-tertiary)" />
            <span>49110, Mauges-sur-Loires</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', display: 'inline-flex' }} title="LinkedIn">
            <Globe size={24} color="var(--text-primary)" />
          </a>
          <a href="#" className="glass-panel" style={{ padding: '1rem', borderRadius: '50%', display: 'inline-flex' }} title="GitHub">
            <Code2 size={24} color="var(--text-primary)" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
