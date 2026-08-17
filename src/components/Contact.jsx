import React, { useState } from 'react';
import { Mail, Calendar, Send, CheckCircle2, MessageSquare, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { useOnScreen } from '../hooks/useOnScreen';

const ICON_MAP = {
  Mail: Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
  Calendar: Calendar,
  Phone: Phone,
  MapPin: MapPin
};

export default function Contact({ contactData, personalInfo }) {
  const [sectionRef, isVisible] = useOnScreen({ threshold: 0.15 });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending message with friendly response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        
        <div className={`section-header animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="section-eyebrow">
            <MessageSquare size={16} />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">{contactData.heading}</h2>
          <p className="section-subtitle">
            {contactData.subheading}
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Column: Direct Links & Profiles */}
          <div className={`contact-info-col animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            
            <div className="contact-quick-links">
              {contactData.profiles.map((profile) => {
                const IconComponent = ICON_MAP[profile.icon] || Mail;

                return (
                  <a
                    key={profile.name}
                    href={profile.href}
                    target={profile.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    className="contact-pill-btn"
                  >
                    <IconComponent size={20} color="#A068FF" />
                    <div>
                      <div style={{ fontSize: '14.5px', fontWeight: 600, color: '#ffffff' }}>
                        {profile.name}
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.65)' }}>
                        {profile.label}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Quick Metadata Box */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={16} color="#A068FF" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>
                <Phone size={16} color="#A068FF" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className={`contact-form-card scale-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            
            {isSubmitted ? (
              <div style={{
                textAlign: 'center',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.2)',
                  color: '#22c55e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '22px', fontWeight: 600 }}>
                  Thank you! Message Sent.
                </h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.7)', maxWidth: '380px' }}>
                  I've received your note and will get back to you promptly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Morgan"
                    className="form-input"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. alex@company.com"
                    className="form-input"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Internship Opportunity / Project Inquiry"
                    className="form-input"
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Hello Udara, I would love to connect regarding..."
                    className="form-textarea"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                  style={{ width: '100%', marginTop: '6px' }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
