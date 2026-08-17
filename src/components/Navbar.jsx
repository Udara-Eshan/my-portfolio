import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';

export default function Navbar({ activeSection, onOpenResumeModal, personalInfo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main Navigation">
        {/* Brand Wordmark */}
        <a 
          href="#home" 
          className="nav-brand" 
          onClick={(e) => handleNavClick(e, 'home')}
          aria-label="Home"
        >
          <span>{personalInfo.name.split(' ')[0]}</span>
          <span className="nav-brand-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.id} className="nav-link-item">
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA: Download CV Pill with Slide Effect */}
        <div className="nav-cta">
          <button 
            className="btn-slide"
            onClick={onOpenResumeModal}
            aria-label="Download Curriculum Vitae"
          >
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div>
          <div style={{ marginBottom: '32px' }}>
            <span className="nav-brand" style={{ fontSize: '24px' }}>
              {personalInfo.name.split(' ')[0]}
              <span className="nav-brand-dot">.</span>
            </span>
          </div>

          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            className="btn-primary"
            style={{ width: '100%' }}
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenResumeModal();
            }}
          >
            <FileText size={16} />
            <span>View & Download CV</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </header>
  );
}
