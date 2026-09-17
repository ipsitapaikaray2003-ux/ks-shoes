import React, { useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function CollectionsSection({ 
  activeCategory, 
  onCategoryChange, 
  onOpenModal, 
  onSelectProductForRfq 
}) {
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="section" id="collections" style={{ background: 'var(--black-main)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Curated Footwear Portfolio</div>
          <h2>Designed for Distinction, <span class="gold-text">Built for Life</span></h2>
          <p>Explore our cornerstone categories manufactured with premium leathers, ergonomic footbeds, and timeless design aesthetics.</p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid-auto" id="collectionsGrid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card catalog-card">
              <div className="product-card-img">
                <span className="catalog-card-badge">{product.categoryLabel}</span>
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-card-overlay">
                  <button 
                    className="btn btn-primary btn-sm"
                    onClick={() => onOpenModal(product)}
                  >
                    Quick View &amp; Specs
                  </button>
                </div>
              </div>

              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p>{product.tagline}</p>

                <div className="card-meta-list">
                  <div className="card-meta-item">
                    <span>Upper:</span>
                    <span>{product.leather.split('/')[0]}</span>
                  </div>
                  <div className="card-meta-item">
                    <span>MOQ:</span>
                    <span>{product.moq}</span>
                  </div>
                  <div className="card-meta-item">
                    <span>Lead Time:</span>
                    <span>{product.leadTime}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                  <button 
                    className="btn btn-outline btn-sm" 
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => onSelectProductForRfq(product)}
                  >
                    RFQ Quote
                  </button>
                  <button 
                    className="btn btn-ghost btn-sm"
                    onClick={() => onOpenModal(product)}
                  >
                    Specs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <button 
            className="btn btn-primary btn-lg"
            onClick={() => {
              const el = document.getElementById('rfq-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request Custom Private Label Run
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
