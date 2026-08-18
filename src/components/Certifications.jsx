import React from 'react';
import { ShieldCheck, Trophy, ExternalLink, BookmarkCheck } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Certifications({ certificationsData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <Trophy size={16} />
            <span>Accreditations</span>
          </div>
          <h2 className="section-title">Certifications &amp; Courses</h2>
          <p className="section-subtitle">
            Formal qualifications from University of Moratuwa and Britishway English Academy validating web design and English communication proficiencies.
          </p>
        </div>

        <div className="certifications-grid" style={{ gridTemplateColumns: certificationsData.length <= 2 ? 'repeat(auto-fit, minmax(320px, 1fr))' : undefined, maxWidth: '900px', margin: '0 auto' }}>
          {certificationsData.map((cert, index) => {
            const staggerDelay = `${index * 0.1}s`;

            return (
              <div 
                key={cert.id} 
                className={`cert-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: staggerDelay }}
              >
                <div className="cert-top">
                  <div className="cert-icon-wrap">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="cert-badge-type">{cert.badgeType}</span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>

                <div className="cert-skills-wrap">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <span className="cert-link" style={{ cursor: 'default', color: 'rgba(255,255,255,0.45)' }}>
                    <BookmarkCheck size={13} />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
