import React, { useState, useEffect } from 'react';

/**
 * TypewriterHeading component:
 * Types out the headline prefix, name, and cycles through rotating taglines seamlessly.
 */
export default function TypewriterHeading({
  prefix = "Hi, I'm ",
  highlightName = "Udara Eshan",
  taglines = [
    "Enthusiastic MIT Undergraduate",
    "Second-Year BSc (Hons) MIT Undergraduate"
  ],
  typeSpeed = 40,
  deleteSpeed = 25,
  pauseDelay = 2200
}) {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTagline = taglines[taglineIndex % taglines.length];
    let timer;

    if (!isDeleting && displayedTagline.length < currentFullTagline.length) {
      // Typing forward
      timer = setTimeout(() => {
        setDisplayedTagline(currentFullTagline.slice(0, displayedTagline.length + 1));
      }, typeSpeed);
    } else if (!isDeleting && displayedTagline.length === currentFullTagline.length) {
      // Pausing after typing complete
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDelay);
    } else if (isDeleting && displayedTagline.length > 0) {
      // Backspacing
      timer = setTimeout(() => {
        setDisplayedTagline(currentFullTagline.slice(0, displayedTagline.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayedTagline.length === 0) {
      // Swapping to next tagline
      setIsDeleting(false);
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }

    return () => clearTimeout(timer);
  }, [displayedTagline, isDeleting, taglineIndex, taglines, typeSpeed, deleteSpeed, pauseDelay]);

  return (
    <h1 className="hero-heading" aria-label={`${prefix}${highlightName} — ${taglines.join(', ')}`}>
      <span>{prefix}</span>
      <span className="hero-heading-name">{highlightName}</span>
      <br />
      <span style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '0.82em', fontWeight: 600 }}>
        {displayedTagline}
      </span>
      <span className="typewriter-cursor">|</span>
    </h1>
  );
}
