import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'moq', label: 'MOQ & Startups' },
    { id: 'sampling', label: 'Design & Sampling' },
    { id: 'production', label: 'Manufacturing & Materials' },
    { id: 'packaging', label: 'Packaging & Private Label' },
    { id: 'shipping', label: 'Shipping & Global Export' }
  ];

  const allFaqs = [
    {
      cat: 'moq',
      q: 'What is your Minimum Order Quantity (MOQ) for new brands and startups?',
      a: 'Unlike traditional factories that require 1,000 to 5,000 pairs, our specialized startup launch tier offers low MOQs starting at 200–300 pairs per style/colorway across standard size curves. This enables emerging D2C brands to validate market demand without excessive inventory risk.'
    },
    {
      cat: 'moq',
      q: 'Can I split the MOQ across multiple sizes and colorways?',
      a: 'Yes. Our 200–300 pair minimum can be distributed across a standard adult sizing curve (e.g. UK/India 6 to 11 or EU 40 to 45). Depending on the style, you can produce 1 or 2 core colorways in your initial launch run.'
    },
    {
      cat: 'sampling',
      q: 'How long does the prototype and sample development process take?',
      a: 'Once your tech pack and leather/material selections are finalized, our dedicated sample studio hand-crafts and dispatches your physical prototype within 5 to 7 working days. You can test comfort on feet, examine material drape and finishing, and request adjustments before full production.'
    },
    {
      cat: 'sampling',
      q: 'Do I need to supply a finished technical drawing or CAD file?',
      a: 'Not necessarily! If you only have inspiration images, moodboards, or rough sketches, our in-house footwear design studio will create complete 2D orthographic sketches, 3D CAD lasts, and detailed factory tech packs for you.'
    },
    {
      cat: 'production',
      q: 'Can you manufacture custom sneaker soles and private mold tooling?',
      a: 'Yes, absolutely. We offer full CAD sole modeling and CNC mold opening for outsoles (EVA phylon, lightweight rubber, TPU inserts, and vulcanized rubber). We also offer access to our library of 100+ ready open molds to save initial tooling costs for early-stage startups.'
    },
    {
      cat: 'production',
      q: 'What upper and sole materials are available?',
      a: 'We source certified full-grain European and Indian calfskin, burnished crust leather, hydrophobic suede, breathable flyknits, recycled textiles, and premium microfibers. For outsoles, we offer TPR, rubber, EVA phylon, lightweight polyurethane (PU), and traditional leather soles with Goodyear welting.'
    },
    {
      cat: 'packaging',
      q: 'Do you provide complete turnkey private labeling and custom packaging?',
      a: 'Yes. We provide complete end-to-end branding: debossed insole logos, custom woven tongue labels, branded cotton dust bags, personalized tissue wrapping, and rigid luxury presentation boxes with gold or silver foil stamping and retail EAN/UPC barcodes.'
    },
    {
      cat: 'packaging',
      q: 'Can we customize the inside of the box with personal cards or accessories?',
      a: 'Yes. We frequently assemble corporate gifting sets and VIP boxes with custom debossed leather greeting cards, cedar shoe trees, horsehair brushes, and extra shoelaces inside branded compartments.'
    },
    {
      cat: 'shipping',
      q: 'How does shipping and doorstep delivery work within India?',
      a: 'We have corporate logistics partnerships across India (BlueDart, Delhivery, V-Trans, and Gati) providing insured door-to-door ground and express air freight to your warehouse or fulfillment center.'
    },
    {
      cat: 'shipping',
      q: 'Do you export internationally and handle customs clearance?',
      a: 'Yes. We export worldwide across North America, the UK, Europe, the Middle East, and Asia-Pacific. We provide complete FOB, CIF, or DDP shipping terms with Certificate of Origin (GSP), packing lists, commercial invoices, and export inspection certificates.'
    }
  ];

  const filteredFaqs = activeTab === 'all' ? allFaqs : allFaqs.filter(f => f.cat === activeTab);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faq-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Knowledge Base &amp; FAQ</span>
          </div>
          <h1>Frequently Asked <span className="gold-text">Questions</span></h1>
          <p>
            Detailed answers regarding MOQs, sampling timelines, custom mold development, material grades, private labeling, and worldwide export logistics.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="filter-bar" style={{ marginBottom: '36px' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="faq-list">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    className="faq-question" 
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-icon">{isOpen ? '✕' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h3 style={{ marginBottom: '12px' }}>Have a Specific Project Question?</h3>
            <p style={{ color: 'var(--grey-mid)', marginBottom: '24px' }}>
              Speak directly with our technical production team in Agra for immediate guidance.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-sm">
                Submit Project Inquiry
              </Link>
              <a 
                href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20have%20a%20question%20regarding%20footwear%20manufacturing."
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
