import React, { useEffect } from 'react';

export default function ProductModal({ product, onClose, onInquire }) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleWhatsApp = () => {
    const msg = `Hello KS Enterprise! I am inquiring regarding the "${product.name}" (${product.categoryLabel}):\n• Upper: ${product.leather}\n• MOQ: ${product.moq}\nPlease share sample availability and export wholesale price matrix.`;
    const url = `https://wa.me/911234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      className="modal-wrapper active" 
      onClick={onClose}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="modalTitle"
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-body">
          <div className="modal-image-wrap">
            <img id="modalImg" src={product.image} alt={product.name} />
          </div>

          <div className="modal-info-wrap">
            <span className="tag" style={{ alignSelf: 'flex-start', marginBottom: '10px' }}>
              {product.categoryLabel}
            </span>
            <h3 id="modalTitle" style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--gold-light)' }}>
              {product.name}
            </h3>
            <p style={{ color: 'var(--white-70)', fontSize: '0.92rem', marginBottom: '14px', fontStyle: 'italic' }}>
              {product.tagline}
            </p>
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '16px' }}>
              {product.description}
            </p>

            {product.features && (
              <div style={{ marginBottom: '18px' }}>
                <strong style={{ fontSize: '0.78rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-accent)', display: 'block', marginBottom: '8px' }}>
                  Key Highlights &amp; Craftsmanship:
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {product.features.map((feat, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.78rem',
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.2)',
                      padding: '4px 10px',
                      borderRadius: 'var(--rad-pill)',
                      color: '#555555'
                    }}>
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="modal-specs-grid">
              <div className="modal-spec-item">
                <span className="modal-spec-title">Leather / Upper</span>
                <span className="modal-spec-val">{product.leather}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-title">Outsole Material</span>
                <span className="modal-spec-val">{product.sole}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-title">Production MOQ</span>
                <span className="modal-spec-val">{product.moq}</span>
              </div>
              <div className="modal-spec-item">
                <span className="modal-spec-title">Size Scales</span>
                <span className="modal-spec-val">{product.sizes}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '10px' }}>
              <button 
                className="btn btn-primary" 
                style={{ flex: 1, justifyContent: 'center' }}
                onClick={() => {
                  onClose();
                  onInquire(product);
                }}
              >
                Inquire for this Model
              </button>
              <button 
                className="btn btn-outline" 
                onClick={handleWhatsApp}
              >
                WhatsApp Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
