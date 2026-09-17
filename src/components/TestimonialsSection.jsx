import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      stars: 5,
      text: "We have collaborated with KS Enterprise for over 4 years on our private-label men's dress shoes. The leather burnishing and sole durability rival European heritage houses at competitive production costs.",
      initials: "MV",
      name: "Marco Valenti",
      role: "Senior Sourcing Director, Milan Fashion Group"
    },
    {
      stars: 5,
      text: "Their corporate gifting footwear line was an absolute triumph for our annual executive summit. From customized debossed logo insoles to custom packaging, KS delivered 1,200 sets flawlessly on schedule.",
      initials: "RS",
      name: "Rajesh Singhal",
      role: "VP Operations, Apex Conglomerate"
    },
    {
      stars: 5,
      text: "The scuff-resistant kids' uniform shoes have given our institutional school chain zero return rates over two academic seasons. Their quality assurance laboratory provides real peace of mind.",
      initials: "AL",
      name: "Alexander Larsson",
      role: "Supply Chain Lead, Nordic Retail Alliance"
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--black-main)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Partner Endorsements</div>
          <h2>Trusted by Global Retailers &amp; <span className="gold-text">Wholesalers</span></h2>
          <p>Discover why premier fashion retailers and corporate buyers across Europe, the Middle East, and Asia choose KS Enterprise.</p>
        </div>

        <div className="grid-3">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: item.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{item.initials}</div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
