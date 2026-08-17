import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook to detect when an element is in viewport using IntersectionObserver.
 * @param {Object} options - IntersectionObserver options
 * @param {boolean} triggerOnce - If true, stays visible once triggered
 */
export function useOnScreen(options = { threshold: 0.15 }, triggerOnce = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options, triggerOnce]);

  return [ref, isVisible];
}
