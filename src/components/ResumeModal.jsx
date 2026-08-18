import React, { useState } from 'react';
import { X, Download, Printer, FileText, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('document'); // 'document' or 'formatted'
  const { personal, about, skills, timeline, projects, certifications, references } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.jpg';
    link.download = `${personal.name.replace(/\s+/g, '_')}_CV.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="modal-title">Curriculum Vitae — {personal.name}</div>
            
            {/* View Switcher Tabs */}
            <div style={{ display: 'flex', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '30px', padding: '3px' }}>
              <button
                onClick={() => setActiveTab('document')}
                style={{
                  background: activeTab === 'document' ? 'var(--color-accent)' : 'transparent',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease'
                }}
              >
                <ImageIcon size={14} />
                <span>Original CV</span>
              </button>

              <button
                onClick={() => setActiveTab('formatted')}
                style={{
                  background: activeTab === 'formatted' ? 'var(--color-accent)' : 'transparent',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '5px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.2s ease'
                }}
              >
                <FileText size={14} />
                <span>Text Summary</span>
              </button>
            </div>
          </div>

          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {activeTab === 'document' ? (
            /* Original Document View */
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#070319', padding: '16px', borderRadius: '12px' }}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '750px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <img 
                  src="/cv.jpg" 
                  alt={`${personal.name} Curriculum Vitae`} 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          ) : (
            /* Formatted View */
            <div style={{
              background: '#ffffff',
              color: '#1a1a1a',
              padding: '32px',
              borderRadius: '12px',
              fontFamily: 'Inter, sans-serif'
            }}>
              
              {/* CV Header */}
              <div style={{ borderBottom: '2px solid #6C30D4', paddingBottom: '16px', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '26px', color: '#11092a', fontFamily: 'Urbanist, sans-serif', fontWeight: '700', marginBottom: '4px' }}>
                  {personal.name}
                </h1>
                <p style={{ fontSize: '13px', color: '#444', marginBottom: '8px', lineHeight: '1.4', fontWeight: 500 }}>
                  {personal.roleSummary}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '12px', color: '#444' }}>
                  <span><strong>Email:</strong> {personal.email}</span>
                  <span><strong>Phone:</strong> {personal.phone}</span>
                  <span><strong>Location:</strong> {personal.location}</span>
                  <span><strong>LinkedIn:</strong> linkedin.com/in/udara-eshan-230716355</span>
                </div>
              </div>

              {/* Profile / Objective */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                  About Me
                </h2>
                <p style={{ fontSize: '12.5px', color: '#333', lineHeight: '1.6' }}>
                  {about.bio[0]}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                  Education
                </h2>
                {timeline.filter(t => t.category === 'education').map(item => (
                  <div key={item.id} style={{ marginBottom: '10px' }}>
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

              {/* Work Experience */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                  Work Experience
                </h2>
                {timeline.filter(t => t.type.includes('Internship')).map(item => (
                  <div key={item.id} style={{ marginBottom: '10px' }}>
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

              {/* Projects */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                  Projects
                </h2>
                {projects.map(proj => (
                  <div key={proj.id} style={{ marginBottom: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: '600', color: '#222' }}>
                      <span>{proj.title}</span>
                      <span style={{ color: '#666', fontSize: '11.5px' }}>{proj.tags.join(', ')}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: '#444', marginTop: '2px', lineHeight: '1.4' }}>
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technical & Soft Skills */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                  Skills
                </h2>
                <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                  <p><strong>Technical Skills:</strong> C++, Java, HTML, CSS, JavaScript, MySQL, MS Word, Excel, PowerPoint</p>
                  <p><strong>Soft Skills:</strong> Problem Solving, Teamwork and Collaboration, Time Management, Communication Skills</p>
                  <p><strong>Languages:</strong> English (Professional Proficiency), Sinhala (Native Proficiency), Tamil (Basic Understanding)</p>
                </div>
              </div>

              {/* Extracurriculars */}
              <div style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                  Extracurricular Activities
                </h2>
                {timeline.filter(t => t.type.includes('Extracurricular')).map(item => (
                  <div key={item.id} style={{ fontSize: '12.5px', color: '#333' }}>
                    <strong>{item.title}</strong> — {item.institution}
                  </div>
                ))}
              </div>

              {/* References */}
              <div>
                <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                  References
                </h2>
                <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                  {references.map(r => (
                    <p key={r.id} style={{ marginBottom: '4px' }}>
                      <strong>{r.name}</strong> — {r.designation}, {r.institution} (Email: {r.email}{r.phone ? `, Tel: ${r.phone}` : ''})
                    </p>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '13px' }}>
            <Printer size={15} />
            <span>Print View</span>
          </button>

          <button className="btn-primary" onClick={handleDownloadCV} style={{ padding: '10px 22px', fontSize: '13px' }}>
            <Download size={15} />
            <span>Download CV File</span>
          </button>
        </div>

      </div>
    </div>
  );
}
