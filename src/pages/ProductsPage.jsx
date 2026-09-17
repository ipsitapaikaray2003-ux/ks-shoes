import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';

export default function ProductsPage({ onOpenModal, onInquireProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCategory === 'all' || p.category === activeCategory;
      const matchSearch = searchQuery === '' || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.leather.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleInquire = (product) => {
    onInquireProduct(product);
    navigate('/contact?product=' + encodeURIComponent(product.name));
  };

  return (
    <div className="products-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Footwear Portfolio</span>
          </div>
          <h1>Custom Sneaker &amp; Sports <span className="gold-text">Product Lines</span></h1>
          <p>
            Explore our premier athletic &amp; streetwear silhouettes: retro court sneakers, performance running shoes, high-top skate trainers, chunky platform sneakers, and youth sports footwear.
          </p>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="section">
        <div className="container">
          {/* Low MOQ Banner */}
          <div style={{
            background: 'var(--black-elevated)',
            border: '1px solid rgba(201, 168, 76, 0.35)',
            borderRadius: 'var(--rad-lg)',
            padding: '20px 28px',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '1.8rem' }}>🚀</span>
              <div>
                <strong style={{ color: 'var(--gold-light)', fontSize: '0.98rem', display: 'block' }}>
                  Low Minimum Order Quantities (MOQ) for Startups &amp; D2C Brands
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--grey-mid)' }}>
                  Launch pilot production runs starting from just 200–300 pairs per colorway with full private-label packaging.
                </span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Inquire Low MOQ Run
            </Link>
          </div>

          {/* Search & Category Filter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div className="filter-bar" style={{ marginBottom: 0 }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ minWidth: '260px', flex: '0 1 300px' }}>
              <input 
                type="text"
                placeholder="Search models, leathers, soles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{ padding: '10px 16px', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--grey-mid)' }}>
              <h3>No footwear models match your search criteria.</h3>
              <p style={{ marginTop: '8px' }}>Please adjust your category filter or search query.</p>
              <button 
                className="btn btn-outline btn-sm" 
                style={{ marginTop: '20px' }}
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid-auto">
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
                        <span>Upper Material:</span>
                        <span>{product.leather.split('/')[0]}</span>
                      </div>
                      <div className="card-meta-item">
                        <span>Production MOQ:</span>
                        <span>{product.moq}</span>
                      </div>
                      <div className="card-meta-item">
                        <span>Sample Lead Time:</span>
                        <span>5–7 Days</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                      <button 
                        className="btn btn-outline btn-sm" 
                        style={{ flex: 1, justifyContent: 'center' }}
                        onClick={() => handleInquire(product)}
                      >
                        Inquire RFQ
                      </button>
                      <button 
                        className="btn btn-ghost btn-sm"
                        onClick={() => onOpenModal(product)}
                      >
                        Full Specs
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
