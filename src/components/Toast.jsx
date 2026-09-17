import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '32px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      background: '#111111',
      border: '1px solid #C9A84C',
      color: '#FFFFFF',
      padding: '16px 28px',
      borderRadius: '999px',
      boxShadow: '0 12px 36px rgba(0,0,0,0.85), 0 0 20px rgba(201,168,76,0.3)',
      fontFamily: "'Inter', sans-serif",
      fontSize: '0.9rem',
      animation: 'fadeInUp 0.35s ease forwards'
    }}>
      <span style={{ color: '#C9A84C', fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span>
      <span>{message}</span>
      <button 
        onClick={onClose}
        style={{
          marginLeft: '10px',
          background: 'none',
          border: 'none',
          color: '#888',
          cursor: 'pointer',
          fontSize: '1.1rem'
        }}
        aria-label="Dismiss toast"
      >
        &times;
      </button>
    </div>
  );
}
