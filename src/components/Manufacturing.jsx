/**
 * Manufacturing — Phase 4 overlay.
 * Shows the manufacturing story cascade: Material → Engineering → Assembly → Quality Control.
 */

const STEPS = [
  { label: 'MATERIAL', detail: 'Breathable mesh, premium EVA compounds' },
  { label: 'ENGINEERING', detail: 'CAD precision, robotic conveyor assembly' },
  { label: 'ASSEMBLY', detail: 'Strobel lasting, dual-density midsole bonding' },
  { label: 'QUALITY CONTROL', detail: '96-point inspection & load testing' },
];

export default function Manufacturing({ phaseProgress, isVisible }) {
  const opacity = isVisible
    ? Math.min(1, phaseProgress * 3) * Math.max(0, 1 - (phaseProgress - 0.75) * 5)
    : 0;

  return (
    <div className="overlay-phase mfg-overlay" style={{ opacity }}>
      <div className="mfg-eyebrow">THE PROCESS</div>
      <div className="mfg-steps">
        {STEPS.map((step, i) => {
          const stepVisible = phaseProgress > i * 0.2;
          const stepOpacity = stepVisible ? Math.min(1, (phaseProgress - i * 0.2) * 8) : 0;
          const stepY = stepVisible ? 0 : 30;
          return (
            <div
              key={step.label}
              className="mfg-step"
              style={{
                opacity: stepOpacity,
                transform: `translateY(${stepY}px)`,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
              }}
            >
              <div className="mfg-step-num">0{i + 1}</div>
              <div className="mfg-step-content">
                <div className="mfg-step-label">{step.label}</div>
                <div className="mfg-step-detail">{step.detail}</div>
              </div>
              {i < STEPS.length - 1 && (
                <div className="mfg-step-arrow">↓</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
