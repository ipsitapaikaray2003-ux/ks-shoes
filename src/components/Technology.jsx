/**
 * Technology — Phase 7 overlay.
 * Technical callout labels with animated connector lines.
 */

const CALLOUTS = [
  { label: 'BREATHABLE MESH UPPER',      position: 'top-left',    x: '8%',  y: '22%' },
  { label: 'PRECISION CONSTRUCTION',     position: 'top-right',   x: '62%', y: '18%' },
  { label: 'ERGONOMIC INSOLE',           position: 'center-left', x: '6%',  y: '52%' },
  { label: 'IMPACT ABSORPTION MIDSOLE',  position: 'center-right',x: '60%', y: '56%' },
  { label: 'ENGINEERED OUTSOLE GRIP',    position: 'bottom-right', x: '58%', y: '76%' },
  { label: 'ADVANCED LACING SYSTEM',     position: 'bottom-left',  x: '8%',  y: '38%' },
];

export default function Technology({ phaseProgress, isVisible }) {
  const opacity = isVisible
    ? Math.min(1, phaseProgress * 4) * Math.max(0, 1 - (phaseProgress - 0.8) * 6)
    : 0;

  return (
    <div className="overlay-phase tech-overlay" style={{ opacity }}>
      {/* Top header */}
      <div className="tech-header">
        <div className="tech-eyebrow">ADVANCED ENGINEERING</div>
        <h2 className="tech-headline">PRECISION IN<br /><span className="headline-accent">EVERY DETAIL.</span></h2>
      </div>

      {/* Callout labels */}
      {CALLOUTS.map((c, i) => {
        const delay = i * 0.12;
        const calloutProgress = Math.max(0, phaseProgress - delay);
        const calloutOpacity = Math.min(1, calloutProgress * 5);

        return (
          <div
            key={c.label}
            className="tech-callout"
            style={{
              left: c.x,
              top: c.y,
              opacity: calloutOpacity,
              transform: `scale(${0.8 + calloutOpacity * 0.2})`,
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            <div className="callout-dot" />
            <div className="callout-line" style={{ width: `${calloutOpacity * 40}px` }} />
            <div className="callout-label">{c.label}</div>
          </div>
        );
      })}

      {/* Bottom stats */}
      <div className="tech-stats">
        {[
          { num: '200+', label: 'MIN ORDER PAIRS' },
          { num: '7 DAY', label: 'SAMPLE TURNAROUND' },
          { num: '96PT', label: 'QUALITY INSPECTION' },
        ].map((s) => (
          <div key={s.label} className="tech-stat">
            <span className="tech-stat-num">{s.num}</span>
            <span className="tech-stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
