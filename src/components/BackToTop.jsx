import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const calculateScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setScrollProgress(progress);
      setVisible(scrollTop > 240);
    };

    window.addEventListener('scroll', calculateScroll, { passive: true });
    calculateScroll();

    return () => window.removeEventListener('scroll', calculateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`scroll-progress-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <svg className="progress-ring" width="50" height="50">
        <circle
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="rgba(201, 168, 76, 0.18)"
          strokeWidth="2.5"
        />
        <circle
          className="progress-circle"
          cx="25"
          cy="25"
          r={radius}
          fill="none"
          stroke="#C9A84C"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8C97A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  );
}
