import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, about, skills, timeline, projects, certifications, references } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([
      `==================================================
${personal.name.toUpperCase()} - CURRICULUM VITAE
${personal.roleSummary}
==================================================
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
LinkedIn: ${personal.socials.linkedin}
GitHub: ${personal.socials.github}

--------------------------------------------------
ABOUT & CAREER OBJECTIVE
--------------------------------------------------
${about.bio.join('\n\n')}

--------------------------------------------------
EDUCATION
--------------------------------------------------
${timeline.filter(t => t.category === 'education').map(e => `* ${e.title} | ${e.institution} (${e.period})\n  ${e.description}`).join('\n\n')}

--------------------------------------------------
WORK EXPERIENCE & EXTRACURRICULAR
--------------------------------------------------
${timeline.filter(t => t.category === 'experience').map(exp => `* ${exp.title} | ${exp.institution} (${exp.period})\n  ${exp.description}`).join('\n\n')}

--------------------------------------------------
KEY PROJECTS
--------------------------------------------------
${projects.map(p => `* ${p.title} (${p.type})\n  Description: ${p.description}\n  Tech Stack: ${p.tags.join(', ')}\n  Key Contribution: ${p.contribution}`).join('\n\n')}

--------------------------------------------------
SKILLS & COMPETENCIES
--------------------------------------------------
${skills.map(s => `* ${s.category}: ${s.items.join(', ')}`).join('\n')}

--------------------------------------------------
CERTIFICATIONS & COURSES
--------------------------------------------------
${certifications.map(c => `* ${c.title} - ${c.issuer} (${c.date})`).join('\n')}

--------------------------------------------------
NON-RELATED REFERENCES
--------------------------------------------------
${references.map(r => `* ${r.name} - ${r.designation}, ${r.institution} (Email: ${r.email}${r.phone ? `, Phone: ${r.phone}` : ''})`).join('\n')}
`
    ], { type: 'text/plain;charset=utf-8' });
    
    element.href = URL.createObjectURL(file);
    element.download = `${personal.name.replace(/\s+/g, '_')}_CV.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title">Curriculum Vitae Preview</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body: Clean Document Layout */}
        <div className="modal-body">
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
                Profile Summary
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

            {/* Experience & Extracurriculars */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Experience &amp; Extracurricular Activities
              </h2>
              {timeline.filter(t => t.category === 'experience').map(item => (
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

            {/* Key Technical Projects */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '10px' }}>
                Key Projects
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

            {/* Skills & Certifications */}
            <div style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                Skills &amp; Certifications
              </h2>
              <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                <p><strong>Programming &amp; Web:</strong> C++, Java, HTML, CSS, JavaScript, MySQL</p>
                <p><strong>Productivity Tools:</strong> MS Word, MS Excel, MS PowerPoint, Git, VS Code</p>
                <p><strong>Certifications:</strong> Web Design for Beginners (Univ. of Moratuwa), Certificated English Course (Britishway Academy)</p>
                <p><strong>Languages:</strong> English (Professional), Sinhala (Native), Tamil (Basic)</p>
              </div>
            </div>

            {/* References */}
            <div>
              <h2 style={{ fontSize: '14px', color: '#6C30D4', textTransform: 'uppercase', letterSpacing: '0.5px', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px', marginBottom: '8px' }}>
                Non-Related References
              </h2>
              <div style={{ fontSize: '12px', color: '#333', lineHeight: '1.6' }}>
                {references.map(r => (
                  <p key={r.id} style={{ marginBottom: '4px' }}>
                    <strong>{r.name}</strong> — {r.designation}, {r.institution} (Email: {r.email}{r.phone ? `, Phone: ${r.phone}` : ''})
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button className="btn-secondary" onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '13px' }}>
            <Printer size={15} />
            <span>Print CV</span>
          </button>

          <button className="btn-primary" onClick={handleDownload} style={{ padding: '10px 22px', fontSize: '13px' }}>
            <Download size={15} />
            <span>Download CV Data</span>
          </button>
        </div>

      </div>
    </div>
  );
}
