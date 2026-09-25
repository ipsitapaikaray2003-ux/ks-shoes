import React, { useState, useEffect } from 'react';

export default function HomeStatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    satisfaction: 0
  });

  // Placeholder stat targets - easy to replace with actual company information
  const statsData = {
    yearsTarget: 15,
    projectsTarget: 250,
    clientsTarget: 80,
    satisfactionTarget: 98
  };

  useEffect(() => {
    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        years: Math.floor(ease * statsData.yearsTarget),
        projects: Math.floor(ease * statsData.projectsTarget),
        clients: Math.floor(ease * statsData.clientsTarget),
        satisfaction: Math.floor(ease * statsData.satisfactionTarget)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="section" id="stats" style={{ background: '#FFFFFF', padding: '90px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container-lg">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
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
            Manufacturing Provenance
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.4vw, 2.8rem)',
            fontFamily: 'var(--font-accent)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#121212',
            margin: 0
          }}>
            Scale &amp; Precision in Numbers
          </h2>
        </div>

        {/* Animated CountUp Statistics Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
          padding: '45px 36px',
          background: 'var(--charcoal-card)',
          border: '1px solid var(--charcoal-border)',
          borderRadius: 'var(--rad-lg)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          {/* Stat 1 */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              color: 'var(--gold-light)',
              lineHeight: 1,
              display: 'block'
            }}>
              {counts.years}+
            </span>
            <strong style={{
              fontSize: '0.95rem',
              color: '#121212',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              display: 'block',
              marginTop: '10px'
            }}>
              Years Experience
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', marginTop: '4px', display: 'block' }}>
              In Footwear Manufacturing
            </span>
          </div>

          {/* Stat 2 */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              color: 'var(--gold-light)',
              lineHeight: 1,
              display: 'block'
            }}>
              {counts.projects}+
            </span>
            <strong style={{
              fontSize: '0.95rem',
              color: '#121212',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              display: 'block',
              marginTop: '10px'
            }}>
              Projects Completed
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', marginTop: '4px', display: 'block' }}>
              Custom Tooling &amp; Production Runs
            </span>
          </div>

          {/* Stat 3 */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              color: 'var(--gold-light)',
              lineHeight: 1,
              display: 'block'
            }}>
              {counts.clients}+
            </span>
            <strong style={{
              fontSize: '0.95rem',
              color: '#121212',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              display: 'block',
              marginTop: '10px'
            }}>
              Global Clients
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', marginTop: '4px', display: 'block' }}>
              D2C, Retail &amp; Private Labels
            </span>
          </div>

          {/* Stat 4 */}
          <div style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: 'clamp(2.6rem, 4.5vw, 3.8rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              color: 'var(--gold-light)',
              lineHeight: 1,
              display: 'block'
            }}>
              {counts.satisfaction}%
            </span>
            <strong style={{
              fontSize: '0.95rem',
              color: '#121212',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              display: 'block',
              marginTop: '10px'
            }}>
              Quality Satisfaction
            </strong>
            <span style={{ fontSize: '0.78rem', color: 'var(--grey-mid)', marginTop: '4px', display: 'block' }}>
              First-Pass QA Acceptance Rate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
