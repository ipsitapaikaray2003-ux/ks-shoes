/**
 * CTA — Phase 9 final reveal overlay.
 */
export default function CTA({ phaseProgress, isVisible }) {
  const opacity = isVisible ? Math.min(1, phaseProgress * 3) : 0;
  const translateY = (1 - opacity) * 40;

  return (
    <div
      className="overlay-phase cta-overlay"
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      <div className="cta-eyebrow">KS ENTERPRISE — AGRA, INDIA</div>
      <h2 className="cta-headline">
        BUILT TO<br />
        <span className="headline-accent">MOVE FORWARD.</span>
      </h2>
      <p className="cta-tagline">
        OEM &amp; ODM Manufacturing. Low MOQ from 200 pairs.<br />
        7-day sample turnaround. Doorstep delivery.
      </p>
      <div className="cta-final-group">
        <a href="/contact" className="cta-primary cta-large">
          GET IN TOUCH
          <span className="cta-arrow">→</span>
        </a>
        <a href="/products" className="cta-outline">
          DISCOVER COLLECTION
        </a>
      </div>

      {/* Bottom stats strip */}
      <div className="cta-stats-strip">
        {[
          { value: '200+', label: 'Min Pairs MOQ' },
          { value: '7 Days', label: 'Sample Turnaround' },
          { value: '100%', label: 'Sports Sneakers' },
          { value: '96pt', label: 'Quality Check' },
        ].map((s) => (
          <div key={s.label} className="cta-stat-item">
            <span className="cta-stat-value">{s.value}</span>
            <span className="cta-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
