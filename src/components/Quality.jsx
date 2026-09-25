/**
 * Quality — Phase 8 overlay.
 * Cinematic quality control scan effect.
 */
import { useEffect, useRef } from 'react';

export default function Quality({ phaseProgress, isVisible }) {
  const scanLineRef = useRef();

  const opacity = isVisible
    ? Math.min(1, phaseProgress * 5) * Math.max(0, 1 - (phaseProgress - 0.8) * 6)
    : 0;

  // Animate scan line
  const scanY = `${(phaseProgress * 120) % 100}%`;

  return (
    <div className="overlay-phase quality-overlay" style={{ opacity }}>
      {/* Corner brackets */}
      <div className="qc-bracket qc-tl" />
      <div className="qc-bracket qc-tr" />
      <div className="qc-bracket qc-bl" />
      <div className="qc-bracket qc-br" />

      {/* Scan line */}
      <div className="qc-scan-line" style={{ top: scanY }} />

      {/* Data panel — top left */}
      <div className="qc-panel qc-panel-tl">
        <div className="qc-panel-title">QUALITY SCAN</div>
        <div className="qc-data-row"><span>SOLE DENSITY</span><span className="qc-value">✓ 98.4%</span></div>
        <div className="qc-data-row"><span>STITCH INTEGRITY</span><span className="qc-value">✓ 100%</span></div>
        <div className="qc-data-row"><span>ADHESION STRENGTH</span><span className="qc-value">✓ 96.2%</span></div>
        <div className="qc-data-row"><span>FLEX RESISTANCE</span><span className="qc-value">✓ 99.1%</span></div>
      </div>

      {/* Data panel — bottom right */}
      <div className="qc-panel qc-panel-br">
        <div className="qc-data-row"><span>WEIGHT DISTRIBUTION</span><span className="qc-value">✓ OPTIMAL</span></div>
        <div className="qc-data-row"><span>BREATHABILITY INDEX</span><span className="qc-value">✓ 94.8%</span></div>
        <div className="qc-status">PASSED — 96 POINT INSPECTION</div>
      </div>

      {/* Center label */}
      <div className="qc-center-label">
        <div className="qc-eyebrow">QUALITY CONTROL</div>
        <div className="qc-headline">INSPECTED.<br /><span className="headline-accent">APPROVED.</span></div>
      </div>

      {/* Grid overlay */}
      <div className="qc-grid" />
    </div>
  );
}
