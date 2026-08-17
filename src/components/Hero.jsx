import React from 'react';
import { Mail, ArrowUpRight, Award, FolderGit2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import TypewriterHeading from './TypewriterHeading';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Hero({ personalInfo }) {
  const [heroRef, isHeroVisible] = useOnScreen({ threshold: 0.1 });

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Column: Content & Calls to Action */}
          <div className={`hero-left animate-on-scroll ${isHeroVisible ? 'is-visible' : ''}`}>
            
            {/* Eyebrow Pill */}
            <div className="eyebrow-pill">
              <span className="eyebrow-pulse-dot" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Typewriter Heading with Cycling Taglines */}
            <TypewriterHeading 
              prefix={personalInfo.headlinePrefix}
              highlightName={personalInfo.headlineName}
              taglines={personalInfo.rotatingTaglines}
              typeSpeed={40}
              deleteSpeed={25}
              pauseDelay={2200}
            />

            {/* Subheading */}
            <p className="hero-subheading">
              {personalInfo.roleSummary}
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              {/* Primary button with Rotating Conic-Gradient Border */}
              <div className="btn-border-wrap">
                <a 
                  href="#projects" 
                  className="btn-primary"
                  onClick={(e) => scrollToSection(e, 'projects')}
                >
                  <span>View Projects</span>
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Secondary Outline Pill */}
              <a 
                href="#contact" 
                className="btn-secondary"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="hero-socials" aria-label="Social media profiles">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn" 
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a 
                href={personalInfo.socials.email} 
                className="social-icon-btn" 
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>

          </div>

          {/* Right Column: Avatar & Floating Badges */}
          <div className="hero-right">
            <div className={`hero-image-wrapper scale-on-scroll ${isHeroVisible ? 'is-visible' : ''}`}>
              
              {/* Radial Glow Backdrop */}
              <div className="hero-glow-backdrop" />

              {/* Top-Left Floating Badge */}
              <div className="floating-badge badge-top-left">
                <div className="badge-icon-box">
                  <FolderGit2 size={18} />
                </div>
                <div>
                  <div className="badge-val">{personalInfo.stats[0]?.value || '2+'}</div>
                  <div className="badge-label">{personalInfo.stats[0]?.label || 'Projects'}</div>
                </div>
              </div>

              {/* Avatar Frame with Uploaded Photo of Udara Eshan */}
              <div className="hero-avatar-frame" style={{ borderRadius: '24px' }}>
                <img 
                  src={personalInfo.avatarUrl || "/profile.jpg"} 
                  alt={personalInfo.name}
                  className="hero-avatar-img"
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                  loading="eager"
                />
              </div>

              {/* Bottom-Right Floating Badge */}
              <div className="floating-badge badge-bottom-right">
                <div className="badge-icon-box">
                  <Award size={18} />
                </div>
                <div>
                  <div className="badge-val">{personalInfo.stats[1]?.value || '2'}</div>
                  <div className="badge-label">{personalInfo.stats[1]?.label || 'Certifications'}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
