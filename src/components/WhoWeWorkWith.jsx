import React from 'react';

export default function WhoWeWorkWith() {
  const personas = [
    {
      icon: '🚀',
      title: 'Footwear Startups & Founders',
      desc: 'Launch your dream footwear brand without tying up massive capital. We offer low MOQ tiers starting at 200–300 pairs per style, guidance on market trends, and end-to-end prototyping.',
      highlight: 'Low MOQ • No Bulk Risk'
    },
    {
      icon: '⚡',
      title: 'D2C & eCommerce Brands',
      desc: 'Speed to market is everything. Scale fast with high-speed sample development in 5–7 days, reliable replenishment cycles, and turnkey retail-ready packaging with barcodes.',
      highlight: 'Fast Turnaround • Agile Restocking'
    },
    {
      icon: '✨',
      title: 'Fashion Labels & Designers',
      desc: 'Bespoke lasts, Goodyear welted outsoles, hand-burnished patinas, and exotic leathers. We transform your runway sketches into luxurious retail-grade reality.',
      highlight: 'High-Fashion Craftsmanship'
    },
    {
      icon: '🏢',
      title: 'Retail Chains & Wholesalers',
      desc: 'Our modern Agra industrial campus produces up to 15,000 pairs per day with consistent quality across multi-store distributions and international port-to-port export.',
      highlight: 'Volume Scalability • 15K Pairs/Day'
    },
    {
      icon: '🎁',
      title: 'Corporate & VIP Gifting',
      desc: 'Deliver an unforgettable corporate statement. Custom footwear suites presented in gold-foil rigid magnetic boxes with custom debossed corporate crests and cedar shoe trees.',
      highlight: 'Turnkey Luxury Gift Boxes'
    }
  ];

  return (
    <section className="section section-light-stone" id="partners">
      <div className="container">
        <div className="section-head text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>Tailored Manufacturing Partnerships</div>
          <h2>Who We <span className="gold-text">Work With</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Whether you're a startup producing your first 200 pairs or an enterprise retailer ordering 50,000 pairs, KS Enterprise adapts to your exact growth stage.
          </p>
        </div>

        {/* Row 1: Top 3 Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '24px'
        }}>
          {personas.slice(0, 3).map((item, idx) => (
            <div key={idx} className="persona-card" style={{ height: '100%' }}>
              <span className="persona-icon">{item.icon}</span>
              <span className="tag" style={{ fontSize: '0.68rem', marginBottom: '12px', display: 'inline-block' }}>
                {item.highlight}
              </span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Last Line - 2 Cards Centered Below */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          {personas.slice(3, 5).map((item, idx) => (
            <div 
              key={idx} 
              className="persona-card"
              style={{
                flex: '0 1 370px',
                width: '100%',
                maxWidth: '400px'
              }}
            >
              <span className="persona-icon">{item.icon}</span>
              <span className="tag" style={{ fontSize: '0.68rem', marginBottom: '12px', display: 'inline-block' }}>
                {item.highlight}
              </span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
