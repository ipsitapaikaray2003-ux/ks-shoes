import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Award, CheckCircle2, Activity } from 'lucide-react';

export default function HomeQualityPreview() {
  return (
    <section className="section" id="quality-preview" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container-lg">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          
          {/* Left Narrative */}
          <div>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}>
              Certified Quality Assurance
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              lineHeight: 1.15,
              marginBottom: '20px'
            }}>
              Engineered Rigor. <br />
              <span style={{ color: 'var(--gold-light)' }}>Zero-Defect Standard.</span>
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--grey-mid)', lineHeight: 1.75, marginBottom: '28px' }}>
              We operate an in-house mechanical testing laboratory compliant with SATRA standards. Every batch undergoes 100,000 continuous sole flex tests, Martindale upper abrasion testing, and automated optical seam auditing.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ padding: '14px', background: 'var(--charcoal-card)', border: '1px solid var(--charcoal-border)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block' }}>100k</span>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>Sole Flex Cycles</span>
              </div>
              <div style={{ padding: '14px', background: 'var(--charcoal-card)', border: '1px solid var(--charcoal-border)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block' }}>AQL 1.0</span>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>Acceptance Standard</span>
              </div>
            </div>

            <Link to="/quality" className="btn btn-outline" style={{ padding: '10px 24px', fontSize: '0.78rem' }}>
              <span>Explore Lab &amp; Testing Machinery</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right Visual Card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 'var(--rad-lg)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
              border: '1px solid rgba(0, 0, 0, 0.05)'
            }}>
              <img 
                src="/assets/images/hightech_factory_bright.jpg" 
                alt="KS Shoes Quality Assurance Lab Testing"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              padding: '10px 18px',
              background: 'rgba(7, 9, 13, 0.88)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: 'var(--rad-pill)',
              fontSize: '0.76rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 700,
              color: 'var(--gold-light)'
            }}>
              SATRA Member Testing Lab
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
