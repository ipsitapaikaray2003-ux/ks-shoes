import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Factory, Award } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Veloce Athletic Footwear — D2C Scale',
      category: 'running',
      categoryName: 'Performance Running Shoe',
      client: 'Veloce Footwear (London, UK)',
      image: '/assets/images/slider_running_sneaker.jpg',
      requirement: 'A high-rebound athletic running shoe with breathable jacquard knit and dual-density EVA sole, requiring a rapid prototype to launch within 60 days at a low initial MOQ of 300 pairs.',
      solution: 'Engineered custom seamless knit uppers with reinforced TPU lace cages and utilized our pre-tooled high-rebound EVA sole molds to slash tooling costs and turnaround time.',
      result: 'Initial 300-pair pilot batch delivered in 4 weeks with a 0% return rate. Veloce scaled to 18,000 pairs over the subsequent 12 months with continuous delivery schedules.',
      stats: [
        { label: 'Pilot Turnaround', val: '4 Weeks' },
        { label: 'Scaling Volume', val: '18,000 Pairs' },
        { label: 'Defect Rate', val: '0.12%' }
      ]
    },
    {
      id: 2,
      title: 'Aurelius European Court Sneaker Collection',
      category: 'sneakers',
      categoryName: 'Luxury Court Sneaker',
      client: 'Aurelius Atelier (Milan, Italy)',
      image: '/assets/images/slider_court_sneaker.jpg',
      requirement: 'A bespoke luxury court sneaker crafted from full-grain Italian calfskin with 360° sidewall stitched rubber soles, embossed brand monogram, and custom rigid box presentation.',
      solution: 'Sourced LWG Gold calfskin from certified tanneries, precision CNC clicking for flawless edge contours, and implemented our proprietary hand-burnishing process for rich patina depth.',
      result: 'Consistently delivers 2,500 pairs per quarterly release across 14 high-end European retail stockists, meeting European REACH chemical standards.',
      stats: [
        { label: 'Material Grade', val: 'LWG Gold' },
        { label: 'Retail Stockists', val: '14 Stores' },
        { label: 'Quarterly Run', val: '2,500 Pairs' }
      ]
    },
    {
      id: 3,
      title: 'TitanGuard Industrial Safety & Work Boot',
      category: 'safety',
      categoryName: 'Work & Safety Footwear',
      client: 'Titan Industrial Supplies (Munich, Germany)',
      image: '/assets/images/factory.jpg',
      requirement: 'Heavy-duty industrial safety shoe with EN ISO 20345 compliance, lightweight composite toe protection, oil/slip-resistant outsole, and electric shock resistance for airport ground crews.',
      solution: 'Integrated 200J fiberglass composite safety caps, Kevlar puncture-resistant midplates, and dual-density oil-resistant PU/rubber injection soles.',
      result: 'Certified in German laboratories on the first submission. Successfully fulfilled recurring bulk orders of 15,000 pairs annually across European logistics hubs.',
      stats: [
        { label: 'Safety Rating', val: 'EN ISO 20345' },
        { label: 'Annual Volume', val: '15,000 Pairs' },
        { label: 'First-Pass Pass', val: '100%' }
      ]
    },
    {
      id: 4,
      title: 'District Skate — Streetwear High-Top Series',
      category: 'streetwear',
      categoryName: 'Streetwear High-Top',
      client: 'District Collective (Tokyo & Melbourne)',
      image: '/assets/images/slider_hightop_sneaker.jpg',
      requirement: 'Streetwear skater sneaker demanding heavy-duty abrasion resistance, high-top padded ankle support, and customized colorways with vulcanized gum rubber sole durability.',
      solution: 'Developed double-stitched velvet matte suede with high-abrasion canvas panels and 360° sidewall vulcanized rubber foxing tape tested to withstand skate grip friction.',
      result: 'Sold out 3,000 pairs within 48 hours of drop. Currently in 4th production run with expanded colorways and private label custom packaging.',
      stats: [
        { label: 'Drop Sell-Out', val: '48 Hours' },
        { label: 'Repeat Cycles', val: '4th Run' },
        { label: 'Batch Size', val: '3,000 Pairs' }
      ]
    }
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ background: '#FFFFFF', color: '#121212', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* HEADER */}
      <section style={{ padding: '60px 0 40px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container-lg">
          <div style={{ maxWidth: '850px' }}>
            <span style={{
              fontSize: '0.76rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              Commercial Case Studies &amp; Client Deployments
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.12,
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              Proven Manufacturing <br />
              <span style={{ color: 'var(--gold-light)' }}>Track Record</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--grey-mid)', lineHeight: 1.7 }}>
              From initial prototype engineering for D2C disruptors to nationwide contract manufacturing for institutional retail brands. Explore how KS Shoes delivers precision, consistency, and scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '36px' }}>
            {['all', 'running', 'sneakers', 'safety', 'streetwear'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '7px 18px',
                  borderRadius: 'var(--rad-pill)',
                  border: filter === cat ? '1px solid var(--gold-primary)' : '1px solid rgba(245, 243, 239, 0.1)',
                  background: filter === cat ? 'rgba(197, 160, 89, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                  color: filter === cat ? 'var(--gold-light)' : '#121212',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {cat === 'all' ? 'All Case Studies' : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL CASE STUDIES LIST */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {filtered.map((proj, idx) => (
              <div 
                key={proj.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  padding: '45px 36px',
                  background: 'var(--charcoal-card)',
                  border: '1px solid var(--charcoal-border)',
                  borderRadius: 'var(--rad-lg)',
                  alignItems: 'center'
                }}
              >
                {/* Left Visual */}
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '360px' }}>
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 14px',
                    borderRadius: 'var(--rad-pill)',
                    background: 'rgba(7, 9, 13, 0.88)',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    color: 'var(--gold-light)'
                  }}>
                    {proj.categoryName}
                  </div>
                </div>

                {/* Right Editorial Info */}
                <div>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-accent)', color: 'var(--grey-mid)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                    Client: {proj.client}
                  </span>
                  <h3 style={{
                    fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    color: '#121212',
                    marginBottom: '20px',
                    textTransform: 'uppercase'
                  }}>
                    {proj.title}
                  </h3>

                  {/* Requirement -> Solution -> Result */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <div>
                      <strong style={{ color: 'var(--accent-bronze)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                        Manufacturing Requirement:
                      </strong>
                      <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', lineHeight: 1.6, margin: 0 }}>
                        {proj.requirement}
                      </p>
                    </div>

                    <div>
                      <strong style={{ color: 'var(--gold-light)', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                        Engineered Solution:
                      </strong>
                      <p style={{ fontSize: '0.88rem', color: '#121212', lineHeight: 1.6, margin: 0 }}>
                        {proj.solution}
                      </p>
                    </div>

                    <div>
                      <strong style={{ color: '#22c55e', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px' }}>
                        Commercial Result:
                      </strong>
                      <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', lineHeight: 1.6, margin: 0 }}>
                        {proj.result}
                      </p>
                    </div>
                  </div>

                  {/* Key Metrics Chips */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '12px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)'
                  }}>
                    {proj.stats.map((s, i) => (
                      <div key={i}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block' }}>
                          {s.val}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--grey-mid)', marginTop: '2px', display: 'block' }}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div style={{
            marginTop: '80px',
            textAlign: 'center',
            padding: '50px 30px',
            background: 'var(--charcoal-card)',
            border: '1px solid var(--charcoal-border)',
            borderRadius: 'var(--rad-lg)'
          }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', marginBottom: '14px' }}>
              Have a Footwear Manufacturing Project?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--grey-mid)', maxWidth: '600px', margin: '0 auto 28px' }}>
              We collaborate with forward-thinking footwear brands to engineer durable, market-ready silhouettes. Send us your CAD or design concept.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Case Study
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
