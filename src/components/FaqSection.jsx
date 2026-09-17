import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is your Minimum Order Quantity (MOQ) for new startups and D2C brands?',
      a: 'We understand that emerging brands cannot afford high bulk inventory risk. Unlike traditional factories requiring 1,000+ pairs, our specialized startup launch tier offers low MOQs starting at 200–300 pairs per style/colorway across standard size runs, allowing you to validate market demand with confidence.'
    },
    {
      q: 'How long does the prototype and sample development process take?',
      a: 'Once your tech pack and materials are finalized, our dedicated sampling workshop manufactures and dispatches your physical prototype within 5 to 7 working days. You can test wear comfort, inspect the leather, and request adjustments before full production begins.'
    },
    {
      q: 'Can you manufacture custom sneaker soles and private mold tooling?',
      a: 'Yes, absolutely. We offer full CAD sole modeling and CNC mold opening for outsoles (EVA phylon, lightweight rubber, TPU inserts, and vulcanized rubber). We also offer access to our library of 100+ ready open molds to save initial tooling costs.'
    },
    {
      q: 'What upper and sole materials can we choose from?',
      a: 'We source certified full-grain European and Indian calfskin, burnished crust leather, hydrophobic suede, breathable flyknits, recycled textiles, and premium microfibers. For outsoles, we offer TPR, rubber, EVA phylon, lightweight polyurethane (PU), and traditional leather soles with Goodyear welting.'
    },
    {
      q: 'Do you provide complete turnkey private labeling and custom packaging?',
      a: 'Yes. We provide complete end-to-end branding: debossed insole logos, custom woven tongue labels, branded cotton dust bags, personalized tissue wrapping, and rigid luxury presentation boxes with gold or silver foil stamping and retail EAN/UPC barcodes.'
    },
    {
      q: 'How does shipping, doorstep delivery, and global export work?',
      a: 'We manage full pan-India doorstep freight as well as international air express and sea cargo container shipments (FOB / CIF / DDP) with complete export documentation, Certificate of Origin, and customs compliance for North America, Europe, the Middle East, and Asia.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section section-light-warm" id="faq">
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Knowledge Base &amp; FAQ</div>
          <h2>Frequently Asked <span className="gold-text">Questions</span></h2>
          <p>Everything you need to know about launching your footwear line with KS Enterprise.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => {
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

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', marginBottom: '16px' }}>
            Have a question that is not answered here? Speak directly with our master production engineers.
          </p>
          <a 
            href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20have%20a%20question%20about%20your%20footwear%20manufacturing%20services."
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm"
          >
            Ask Questions on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
