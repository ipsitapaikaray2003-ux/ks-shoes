import React, { useState, useEffect } from 'react';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const msg = "Hello KS Enterprise! I would like to inquire about your footwear manufacturing, bulk catalogs, and export solutions.";
    const url = `https://wa.me/911234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-float">
      {showTooltip && (
        <div className="whatsapp-tooltip">
          Chat with our Export Specialist 👋
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <div className="wa-ring"></div>
        <button 
          className="whatsapp-btn" 
          onClick={handleClick}
          aria-label="Open WhatsApp Chat"
        >
          <svg viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.586 1.761.859 2.796.859 3.179 0 5.768-2.587 5.768-5.766.001-3.181-2.588-5.766-5.768-5.766zm9.969 5.766c0 5.505-4.475 9.97-9.97 9.97-1.745 0-3.385-.45-4.819-1.238l-4.711 1.235 1.26-4.599c-.873-1.488-1.37-3.218-1.37-5.068 0-5.505 4.475-9.97 9.97-9.97 5.505 0 9.97 4.475 9.97 9.97z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
