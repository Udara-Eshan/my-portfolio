import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, about, skills, timeline, projects, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates/downloads the resume format or triggers direct PDF download
    const element = document.createElement("a");
    const file = new Blob([
      `==================================================
${personal.name.toUpperCase()} - RESUME
${personal.roleSummary}
==================================================
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
GitHub: ${personal.socials.github}
LinkedIn: ${personal.socials.linkedin}

--------------------------------------------------
EDUCATION
--------------------------------------------------
${timeline.filter(t => t.category === 'education').map(e => `* ${e.title} | ${e.institution} (${e.period})\n  ${e.description}`).join('\n\n')}

--------------------------------------------------
EXPERIENCE & LEADERSHIP
--------------------------------------------------
${timeline.filter(t => t.category === 'experience').map(exp => `* ${exp.title} | ${exp.institution} (${exp.period})\n  ${exp.description}`).join('\n\n')}

--------------------------------------------------
KEY PROJECTS
--------------------------------------------------
${projects.map(p => `* ${p.title} (${p.type})\n  Tags: ${p.tags.join(', ')}\n  Contribution: ${p.contribution}\n  GitHub: ${p.github}`).join('\n\n')}

--------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------
${skills.map(s => `* ${s.category}: ${s.items.join(', ')}`).join('\n')}

--------------------------------------------------
CERTIFICATIONS & HONORS
--------------------------------------------------
${certifications.map(c => `* ${c.title} - ${c.issuer} (${c.date})`).join('\n')}
`
    ], { type: 'text/plain;charset=utf-8' });
    
    element.href = URL.createObjectURL(file);
    element.download = `${personal.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">Resume Preview &amp; Verification</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: Formatted Document */}
        <div className="modal-body">
          <div style={{
            background: '#ffffff',
            color: '#1a1a1a',
            padding: '32px',
            borderRadius: '12px',
            fontFamily: 'Inter, sans-serif'
          }}>
            
            {/* Resume Header */}
            <div style={{ borderBottom: '2px solid #6C30D4', paddingBottom: '16px', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '26px', color: '#11092a', fontFamily: 'Urbanist, sans-serif', fontWeight: '700', marginBottom: '4px' }}>
                {personal.name}
              </h1>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '8px', lineHeight: '1.4' }}>
                {personal.roleSummary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#444' }}>
                <span><strong>Email:</strong> {personal.email}</span>
                <span><strong>Phone:</strong> {personal.phone}</span>
                <span><strong>Location:</strong> {personal.location}</span>
                <span><strong>GitHub:</strong> github.com/udarajayasundara</span>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '15px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Education
              </h2>
              {timeline.filter(t => t.category === 'education').map(item => (
                <div key={item.id} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '600', color: '#222' }}>
                    <span>{item.title} — {item.institution}</span>
                    <span style={{ color: '#666', fontWeight: '500' }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '15px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Experience &amp; Leadership
              </h2>
              {timeline.filter(t => t.category === 'experience').map(item => (
                <div key={item.id} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '600', color: '#222' }}>
                    <span>{item.title} — {item.institution}</span>
                    <span style={{ color: '#666', fontWeight: '500' }}>{item.period}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.5' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Technical Projects */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '15px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Key Technical Projects
              </h2>
              {projects.slice(0, 3).map(proj => (
                <div key={proj.id} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '600', color: '#222' }}>
                    <span>{proj.title}</span>
                    <span style={{ color: '#666', fontSize: '11px' }}>{proj.type}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.4' }}>
                    {proj.description}
                  </p>
                  <p style={{ fontSize: '11.5px', color: '#6C30D4', marginTop: '2px' }}>
                    <strong>Contribution:</strong> {proj.contribution}
                  </p>
                </div>
              ))}
            </div>

            {/* Skills & Certifications */}
            <div>
              <h2 style={{ fontSize: '15px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Skills &amp; Certifications
              </h2>
              <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                <p><strong>Programming &amp; Frameworks:</strong> Java, Python, C++, TypeScript, JavaScript, React, Next.js, Node.js, Spring Boot</p>
                <p><strong>Databases &amp; Cloud:</strong> PostgreSQL, MongoDB, Redis, Docker, Kubernetes, AWS (Solutions Architect Associate), GCP</p>
                <p><strong>Certifications:</strong> AWS Certified Solutions Architect, Meta Front-End Dev, Google Cloud Associate, National Hackathon 1st Place</p>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '13px' }}>
            <Printer size={15} />
            <span>Print Resume</span>
          </button>

          <button className="btn-primary" onClick={handleDownload} style={{ padding: '10px 22px', fontSize: '13px' }}>
            <Download size={15} />
            <span>Download Resume Data</span>
          </button>
        </div>

      </div>
    </div>
  );
}
