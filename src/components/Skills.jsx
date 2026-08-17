import React from 'react';
import { Code, Layers, Database, Wrench, Sparkles, Globe, Cpu } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

const ICON_MAP = {
  Code: Code,
  Layers: Layers,
  Database: Database,
  Wrench: Wrench,
  Sparkles: Sparkles,
  Globe: Globe
};

export default function Skills({ skillsData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <Cpu size={16} />
            <span>Core Competencies</span>
          </div>
          <h2 className="section-title">Skills &amp; Capabilities</h2>
          <p className="section-subtitle">
            Programming languages, web technologies, database management, productivity tools, soft skills, and language proficiencies.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((category, index) => {
            const IconComponent = ICON_MAP[category.icon] || Code;
            const staggerDelay = `${index * 0.1}s`;

            return (
              <div 
                key={category.category} 
                className={`skill-category-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: staggerDelay }}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="skill-cat-title">{category.category}</h3>
                </div>

                <div className="skill-pill-wrap">
                  {category.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
