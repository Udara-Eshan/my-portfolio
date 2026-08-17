import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer({ personalInfo }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer-divider" />
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            
            <div className="footer-left">
              <p className="footer-copy">
                &copy; {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="footer-note">
                Designed &amp; Developed for PPD II Profile Evaluation • Built with React &amp; Vite
              </p>
            </div>

            <button 
              className="footer-back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>

          </div>
        </div>
      </footer>
    </>
  );
}
