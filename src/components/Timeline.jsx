import React, { useState } from 'react';
import { Calendar, Milestone } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Timeline({ timelineData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('all');

  const filteredItems = timelineData.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="experience" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <Milestone size={16} />
            <span>Academic &amp; Professional Pathway</span>
          </div>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle">
            University studies in Management &amp; Information Technology, banking internship, and leadership in school extracurriculars.
          </p>
        </div>

        {/* Tab Filters */}
        <div className={`timeline-tabs animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <button
            className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Milestones
          </button>
          <button
            className={`filter-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`filter-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience &amp; Leadership
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {filteredItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const animationClass = isLeft ? 'slide-left-on-scroll' : 'slide-right-on-scroll';

            return (
              <div 
                key={item.id} 
                className={`timeline-item ${isLeft ? 'left' : 'right'} ${animationClass} ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Dot Marker on Timeline Line */}
                <div className="timeline-dot" />

                {/* Timeline Card */}
                <div className="timeline-card">
                  <div className="timeline-badge">
                    {item.type}
                  </div>

                  <div className="timeline-date">
                    <Calendar size={13} style={{ display: 'inline', marginRight: '5px', verticalAlign: '-1px' }} />
                    <span>{item.period}</span>
                  </div>

                  <h3 className="timeline-item-title">{item.title}</h3>
                  <div className="timeline-institution">{item.institution}</div>
                  <p className="timeline-desc">{item.description}</p>

                  {item.skills && (
                    <div className="timeline-skills">
                      {item.skills.map((skill) => (
                        <span key={skill} className="timeline-skill-pill">
                          {skill}
                        </span>
                      ))}
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
