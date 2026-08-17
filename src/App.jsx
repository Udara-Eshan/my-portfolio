import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  return (
    <div className="app">
      {/* Sticky Header Navigation */}
      <Navbar 
        activeSection={activeSection}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        personalInfo={portfolioData.personal}
      />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero / Home */}
        <Hero 
          personalInfo={portfolioData.personal} 
        />

        {/* Section 2: About Me */}
        <About 
          aboutData={portfolioData.about} 
          personalInfo={portfolioData.personal}
        />

        {/* Section 3: Skills (6 Categories) */}
        <Skills 
          skillsData={portfolioData.skills} 
        />

        {/* Section 4: Projects (3-Column Grid) */}
        <Projects 
          projectsData={portfolioData.projects} 
        />

        {/* Section 5: Education & Experience (Timeline) */}
        <Timeline 
          timelineData={portfolioData.timeline} 
        />

        {/* Section 6: Certifications & Achievements */}
        <Certifications 
          certificationsData={portfolioData.certifications} 
        />

        {/* Section 7: Resume / CV */}
        <ResumeSection 
          personalInfo={portfolioData.personal}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* Section 8: Contact / Get In Touch */}
        <Contact 
          contactData={portfolioData.contact} 
          personalInfo={portfolioData.personal}
        />
      </main>

      {/* Footer Bar */}
      <Footer 
        personalInfo={portfolioData.personal} 
      />

      {/* Interactive Resume View & Download Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
