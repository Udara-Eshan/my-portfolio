import React from 'react';
import { User, MapPin, Mail, Clock, GraduationCap, Compass } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function About({ aboutData, personalInfo }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <User size={16} />
            <span>Profile Overview</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about architecting robust software, mastering new paradigms, and delivering impactful digital experiences.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Left Column: Background & Career Goals */}
          <div className={`about-bio-card animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="about-card-title">
              <Compass size={20} color="#A068FF" />
              <span>Background & Aspirations</span>
            </h3>
            {aboutData.bio.map((paragraph, idx) => (
              <p key={idx} className="about-bio-text">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column: Quick Info Card */}
          <div className={`about-info-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="about-card-title">
              <GraduationCap size={20} color="#A068FF" />
              <span>Quick Facts</span>
            </h3>

            <div className="about-info-list">
              <div className="about-info-item">
                <span className="info-item-label">Location</span>
                <span className="info-item-value">{personalInfo.location}</span>
              </div>

              <div className="about-info-item">
                <span className="info-item-label">Email</span>
                <span className="info-item-value">{personalInfo.email}</span>
              </div>

              <div className="about-info-item">
                <span className="info-item-label">Availability</span>
                <span className="info-item-value">{personalInfo.availability}</span>
              </div>

              {aboutData.highlights.map((item, idx) => (
                <div key={idx} className="about-info-item">
                  <span className="info-item-label">{item.title}</span>
                  <span className="info-item-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
