import React from 'react';
import { Award, ShieldCheck, Trophy, ExternalLink, BookmarkCheck } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Certifications({ certificationsData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <Trophy size={16} />
            <span>Honors & Accreditations</span>
          </div>
          <h2 className="section-title">Certifications & Achievements</h2>
          <p className="section-subtitle">
            Industry credentials from AWS, Google Cloud, Meta, and university awards validating professional skills and domain expertise.
          </p>
        </div>

        <div className="certifications-grid">
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
                    {cert.badgeType.includes('Award') || cert.badgeType.includes('Honour') ? (
                      <Trophy size={22} />
                    ) : (
                      <ShieldCheck size={22} />
                    )}
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
                  {cert.credentialUrl && cert.credentialUrl !== '#' ? (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="cert-link"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="cert-link" style={{ cursor: 'default', color: 'rgba(255,255,255,0.4)' }}>
                      <BookmarkCheck size={13} />
                      <span>Verified</span>
                    </span>
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
