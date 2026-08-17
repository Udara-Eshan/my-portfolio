import React, { useState, useEffect } from 'react';

/**
 * TypewriterHeading component:
 * Types out the headline character by character with high performance and a blinking cursor.
 */
export default function TypewriterHeading({
  prefix = "Hi, I'm ",
  highlightName = "Udara Jayasundara",
  suffix = " — I build things for the web.",
  speed = 35,
  delay = 400
}) {
  const fullText = `${prefix}${highlightName}${suffix}`;
  const [displayedLength, setDisplayedLength] = useState(0);

  useEffect(() => {
    let timeout;
    let interval;

    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev < fullText.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [fullText, speed, delay]);

  // Split displayed text into prefix, highlightName, and suffix segments
  const currentText = fullText.slice(0, displayedLength);
  const prefixLength = prefix.length;
  const nameLength = highlightName.length;

  let renderedPrefix = '';
  let renderedName = '';
  let renderedSuffix = '';

  if (currentText.length <= prefixLength) {
    renderedPrefix = currentText;
  } else if (currentText.length <= prefixLength + nameLength) {
    renderedPrefix = prefix;
    renderedName = currentText.slice(prefixLength);
  } else {
    renderedPrefix = prefix;
    renderedName = highlightName;
    renderedSuffix = currentText.slice(prefixLength + nameLength);
  }

  return (
    <h1 className="hero-heading" aria-label={fullText}>
      <span>{renderedPrefix}</span>
      {renderedName && <span className="hero-heading-name">{renderedName}</span>}
      <span>{renderedSuffix}</span>
      <span className="typewriter-cursor">|</span>
    </h1>
  );
}
