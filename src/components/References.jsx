import React from 'react';
import { Users, Mail, Phone, Building2, UserCheck } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function References({ referencesData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  if (!referencesData || referencesData.length === 0) return null;

  return (
    <section id="references" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <UserCheck size={16} />
            <span>Academic &amp; Professional Endorsement</span>
          </div>
          <h2 className="section-title">Non-Related References</h2>
          <p className="section-subtitle">
            Distinguished academic and industry professionals available for verification and recommendations.
          </p>
        </div>

        <div className="skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', maxWidth: '960px', margin: '0 auto', gap: '32px' }}>
          {referencesData.map((refItem, index) => {
            const staggerDelay = `${index * 0.15}s`;

            return (
              <div 
                key={refItem.id} 
                className={`about-info-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: staggerDelay }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
                  <div className="skill-icon-wrap" style={{ width: '44px', height: '44px', borderRadius: '12px' }}>
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
                      {refItem.name}
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--color-accent-light)', fontWeight: 500 }}>
                      {refItem.designation}
                    </span>
                  </div>
                </div>

                <div className="about-info-list" style={{ gap: '14px' }}>
                  <div className="about-info-item" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
                    <span className="info-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Building2 size={13} />
                      <span>Institution</span>
                    </span>
                    <span className="info-item-value" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.85)' }}>
                      {refItem.institution}
                    </span>
                  </div>

                  <div className="about-info-item" style={{ borderBottom: refItem.phone ? '1px solid rgba(255, 255, 255, 0.05)' : 'none', paddingBottom: '10px' }}>
                    <span className="info-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={13} />
                      <span>Email</span>
                    </span>
                    <a 
                      href={`mailto:${refItem.email}`} 
                      className="info-item-value" 
                      style={{ fontSize: '14px', color: 'var(--color-accent-light)', textDecoration: 'none' }}
                    >
                      {refItem.email}
                    </a>
                  </div>

                  {refItem.phone && (
                    <div className="about-info-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                      <span className="info-item-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Phone size={13} />
                        <span>Phone</span>
                      </span>
                      <a 
                        href={`tel:${refItem.phone.replace(/\s+/g, '')}`} 
                        className="info-item-value" 
                        style={{ fontSize: '14px', color: '#ffffff', textDecoration: 'none' }}
                      >
                        {refItem.phone}
                      </a>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
