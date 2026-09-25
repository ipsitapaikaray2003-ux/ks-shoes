import React, { useState, useMemo } from 'react';

export default function RfqCalculator({ selectedCategory, onCategoryChange }) {
  const [category, setCategory] = useState(selectedCategory || 'sneakers');
  const [volume, setVolume] = useState('500-2000');
  const [customization, setCustomization] = useState('branding');

  React.useEffect(() => {
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const calculation = useMemo(() => {
    let leadTime = '22 - 28 Days';
    let sampleTime = '5 - 7 Days';
    let priceTier = 'Growing Brand Preferred Wholesale';
    let moqNote = '500 Pairs MOQ';

    if (volume === '200-500') {
      leadTime = '18 - 22 Days';
      sampleTime = '5 - 7 Days';
      priceTier = 'Startup Pilot Batch (Low MOQ Tier)';
      moqNote = '200 Pairs Startup Friendly';
    } else if (volume === '500-2000') {
      leadTime = '22 - 28 Days';
      sampleTime = '5 - 7 Days';
      priceTier = 'Growing Brand Preferred Wholesale Tier';
      moqNote = '500 - 2,000 Pairs';
    } else if (volume === '2000+') {
      leadTime = '30 - 40 Days';
      sampleTime = '7 - 10 Days';
      priceTier = 'Enterprise Retail Factory-Direct Tier';
      moqNote = 'High-Volume Production';
    }

    if (customization === 'bespoke') {
      leadTime += ' (+7 days for custom sole mold)';
      sampleTime = '10 - 12 Days';
    }

    return { leadTime, sampleTime, priceTier, moqNote };
  }, [volume, customization]);

  const handleWhatsApp = () => {
    const categoryLabels = {
      sneakers: 'Retro Court Sneakers & Streetwear',
      running: 'Performance Running Shoes',
      streetwear: 'High-Top & Skate Trainers',
      chunky: 'Chunky Platform & Athleisure Sneakers',
      training: 'Gym & Cross-Training Athletic Shoes',
      kids: "Kids' Sports & Athletic Sneakers"
    };

    const volumeLabels = {
      '200-500': '200 – 500 Pairs (Startup Pilot)',
      '500-2000': '500 – 2,000 Pairs (Growing Brand)',
      '2000+': '2,000+ Pairs (Enterprise)'
    };

    const customLabels = {
      standard: 'Standard Open-Mold Production',
      branding: 'Private Label (Insole Deboss, Custom Box, Dust Bag)',
      bespoke: 'Full Bespoke OEM (Custom Sole Mold & Last)'
    };

    const msg = `Hello KS Enterprise, I would like to get a footwear manufacturing quotation:\n• Category: ${categoryLabels[category] || category}\n• Volume: ${volumeLabels[volume] || volume}\n• Customization: ${customLabels[customization] || customization}\n• Estimated Lead Time: ${calculation.leadTime}\nPlease share your latest catalog and MOQ price matrix.`;
    const url = `https://wa.me/911234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section" id="rfq-section">
      <div className="container">
        <div className="calculator-card">
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <div className="section-label">Smart Production Estimator</div>
              <h2>Calculate Your <span className="gold-text">Footwear Run</span></h2>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', marginBottom: '28px', lineHeight: '1.8' }}>
                Select your category, scale tier, and branding specifications to receive immediate turnaround and wholesale classification.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="calcCategory">Footwear Category</label>
                  <select 
                    id="calcCategory" 
                    className="form-select"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      if (onCategoryChange) onCategoryChange(e.target.value);
                    }}
                  >
                    <option value="sneakers">Retro Court Sneakers &amp; Streetwear</option>
                    <option value="running">Performance Sports &amp; Running Shoes</option>
                    <option value="streetwear">High-Top &amp; Skate Trainers</option>
                    <option value="chunky">Chunky Platform &amp; Athleisure Sneakers</option>
                    <option value="training">Gym &amp; Cross-Training Athletic Shoes</option>
                    <option value="kids">Kids' Sports &amp; Athletic Sneakers</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calcVolume">Order Volume Tier</label>
                  <select 
                    id="calcVolume" 
                    className="form-select"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  >
                    <option value="200-500">200 – 500 Pairs (Startup Pilot Batch — Low MOQ)</option>
                    <option value="500-2000">500 – 2,000 Pairs (Growing D2C Brand Tier)</option>
                    <option value="2000+">2,000+ Pairs (Enterprise Retail Chain Tier)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="calcCustom">Branding &amp; Tooling Level</label>
                  <select 
                    id="calcCustom" 
                    className="form-select"
                    value={customization}
                    onChange={(e) => setCustomization(e.target.value)}
                  >
                    <option value="standard">Standard Catalog Specifications</option>
                    <option value="branding">Full Private Label (Embossed Insole + Custom Box + Dust Bag)</option>
                    <option value="bespoke">Bespoke OEM (Custom Outsole Mold, Last &amp; Tooling)</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="calc-result-box">
                <h4 style={{ color: '#121212', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.95rem', marginBottom: '8px' }}>
                  Live Project Specifications
                </h4>

                <div className="calc-stat-row">
                  <span className="calc-stat-label">Rapid Sample Delivery</span>
                  <span className="calc-stat-value">{calculation.sampleTime}</span>
                </div>

                <div className="calc-stat-row">
                  <span className="calc-stat-label">Mass Production Timeline</span>
                  <span className="calc-stat-value">{calculation.leadTime}</span>
                </div>

                <div className="calc-stat-row">
                  <span className="calc-stat-label">Pricing Classification</span>
                  <span className="calc-stat-value">{calculation.priceTier}</span>
                </div>

                <div className="calc-stat-row">
                  <span className="calc-stat-label">MOQ Scalability</span>
                  <span className="calc-stat-value">{calculation.moqNote}</span>
                </div>

                <div className="calc-stat-row">
                  <span className="calc-stat-label">Quality Protocol</span>
                  <span className="calc-stat-value">SATRA Testing &amp; ISO 9001</span>
                </div>

                <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{ justifyContent: 'center' }}
                    onClick={handleWhatsApp}
                  >
                    Send This Estimate via WhatsApp
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-ghost btn-sm" 
                    style={{ textAlign: 'center', justifyContent: 'center' }}
                    onClick={scrollToContact}
                  >
                    Submit Full Tech Pack or Spec Sheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
