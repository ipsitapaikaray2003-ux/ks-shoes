/**
 * Products — Phase 6 overlay.
 * Shows product category pills floating as the collection comes in.
 */

const CATEGORIES = [
  { name: 'SPORTS',    desc: 'High-performance court & field' },
  { name: 'RUNNING',   desc: 'Engineered for distance' },
  { name: 'CASUAL',    desc: 'Everyday streetwear comfort' },
  { name: 'SAFETY',    desc: 'Industrial-grade protection' },
  { name: 'LIFESTYLE', desc: 'Premium everyday aesthetic' },
];

export default function Products({ phaseProgress, isVisible }) {
  const opacity = isVisible
    ? Math.min(1, phaseProgress * 4) * Math.max(0, 1 - (phaseProgress - 0.8) * 6)
    : 0;

  return (
    <div className="overlay-phase products-overlay" style={{ opacity }}>
      <div className="products-eyebrow">OUR COLLECTION</div>
      <h2 className="products-headline">
        BUILT FOR<br />
        <span className="headline-accent">EVERY STEP.</span>
      </h2>
      <div className="products-grid">
        {CATEGORIES.map((cat, i) => {
          const catProgress = Math.max(0, phaseProgress * 5 - i * 0.8);
          const catOpacity = Math.min(1, catProgress);
          const catX = i % 2 === 0 ? -30 : 30;
          return (
            <div
              key={cat.name}
              className="product-category-pill"
              style={{
                opacity: catOpacity,
                transform: `translateX(${catX * (1 - catOpacity)}px)`,
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <span className="pill-name">{cat.name}</span>
              <span className="pill-desc">{cat.desc}</span>
            </div>
          );
        })}
      </div>
      <a href="/products" className="products-cta">VIEW FULL COLLECTION →</a>
    </div>
  );
}
