import React from 'react';
import { Download, Eye, FileText, Sparkles } from 'lucide-react';
import { useOnScreen } from '../hooks/useOnScreen';

export default function ResumeSection({ onOpenResumeModal, personalInfo }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.2 });

  return (
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="container">
        
        <div className={`resume-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            <FileText size={16} />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="resume-title">Want the full picture?</h2>
          <p className="resume-text">
            Download my comprehensive resume detailing academic achievements, technical projects, industrial internship contributions, and technical proficiencies.
          </p>

          <div className="resume-actions">
            {/* Download CTA with rotating border wrap */}
            <div className="btn-border-wrap">
              <button 
                className="btn-primary"
                onClick={onOpenResumeModal}
                aria-label="Download or View Resume"
              >
                <Download size={18} />
                <span>Download Resume (PDF)</span>
              </button>
            </div>

            {/* Preview Button */}
            <button 
              className="btn-secondary"
              onClick={onOpenResumeModal}
              aria-label="Preview Resume Online"
            >
              <Eye size={18} />
              <span>Preview Resume</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
