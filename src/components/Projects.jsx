import React, { useState } from 'react';
import { ExternalLink, FolderCode } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Projects({ projectsData }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Systems', 'Game Dev'];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Systems') return project.tags.includes('Java') || project.tags.includes('MySQL');
    if (filter === 'Game Dev') return project.tags.includes('C++') || project.title.toLowerCase().includes('game');
    return true;
  });

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <FolderCode size={16} />
            <span>Practical Work</span>
          </div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Academic software engineering and collaborative development projects demonstrating systems design and programming capabilities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={`projects-filter-bar animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ gridTemplateColumns: filteredProjects.length <= 2 ? 'repeat(auto-fit, minmax(320px, 1fr))' : undefined, maxWidth: '1000px', margin: '0 auto' }}>
          {filteredProjects.map((project, index) => {
            const delay = `${(index % 3) * 0.15}s`;

            return (
              <div 
                key={project.id} 
                className={`project-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: delay }}
              >
                {/* 16:9 Thumbnail Image */}
                <div className="project-thumb-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-thumb-img"
                    loading="lazy"
                  />
                  <div className="project-type-badge">
                    {project.type}
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Individual Contribution Highlight */}
                  {project.contribution && (
                    <div className="project-contribution">
                      <span className="contribution-label">Key Contribution:</span>
                      <span className="contribution-text">{project.contribution}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links: GitHub & Details */}
                  <div className="project-footer-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Source Code`}
                    >
                      <GithubIcon size={16} />
                      <span>Repository</span>
                    </a>

                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`${project.title} Project Details`}
                    >
                      <span>View Code</span>
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
