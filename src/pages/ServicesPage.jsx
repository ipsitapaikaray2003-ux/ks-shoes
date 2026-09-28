import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Product Design & Development',
    subtitle: 'From Concept to 3D Reality',
    desc: 'From concept sketches to high-fidelity 3D CAD modeling, our design studio translates visionary ideas into structural reality. We focus on ergonomic fit, aesthetic appeal, and material innovation.',
    points: ['3D CAD Digital Rendering', 'Biomechanical Fit Analysis', 'Material Sourcing & Selection'],
    image: '/assets/images/services/service_design_development_1790437771545.jpg',
    num: '01'
  },
  {
    title: 'Pattern Engineering',
    subtitle: 'Micro-Level Precision',
    desc: 'Precision is engineered at the micro-level. Our technical team crafts digital blueprints and utilizes advanced laser-cutting technology to ensure perfect pattern grading across all size runs.',
    points: ['Digital Blueprinting', 'Laser Cutting Technology', 'Flawless Size Grading'],
    image: '/assets/images/services/service_pattern_engineering_1790437783660.jpg',
    num: '02'
  },
  {
    title: 'Sole & Upper Development',
    subtitle: 'The Perfect Fusion',
    desc: 'We fuse premium graded leathers, engineered meshes, and custom-tooled outsoles. Advanced thermal bonding techniques and proprietary metallic molds ensure a flawless marriage between the upper and the sole.',
    points: ['Custom Tooling & Molds', 'Advanced Thermal Bonding', 'Premium Upper Composites'],
    image: '/assets/images/services/service_sole_upper_1790437796333.jpg',
    num: '03'
  },
  {
    title: 'Bulk Production',
    subtitle: 'Uncompromised Scalability',
    desc: 'Operating a 65,000 sq. ft. campus, we scale production without compromising on detail. Synchronized conveyor assembly lines and automated hydraulic pressing output thousands of pristine pairs daily.',
    points: ['Synchronized Assembly Lines', 'Automated Hydraulic Pressing', 'High-Speed Mass Scaling'],
    image: '/assets/images/services/service_bulk_production_1790437810804.jpg',
    num: '04'
  },
  {
    title: 'Quality Inspection & Testing',
    subtitle: 'Zero-Defect Protocol',
    desc: 'Rigorous testing protocols ensure lasting durability. Every batch undergoes continuous flex endurance tests, bond peel dynamometry, and strict AQL 1.0 visual audits before it ever leaves our facility.',
    points: ['Flex Endurance Mechanical Testing', 'Bond Peel Dynamometry', 'AQL 1.0 Visual Audits'],
    image: '/assets/images/services/service_quality_testing_1790437826744.jpg',
    num: '05'
  },
  {
    title: 'Packaging & Dispatch',
    subtitle: 'The Final Luxury Touchpoint',
    desc: 'Unboxing is your customer’s first physical touchpoint. We provide custom rigid magnetic boxes, metallic foil stamping, and seamless retail barcoding before dispatching your organized master cartons globally.',
    points: ['Luxury Rigid Magnetic Boxes', 'Custom Foil & Debossing', 'Global Retail Dispatching'],
    image: '/assets/images/services/service_packaging_dispatch_1790437880095.jpg',
    num: '06'
  }
];

const ServiceBlock = ({ service, index }) => {
  const isEven = index % 2 === 0;
  const blockRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax effect on the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={blockRef} style={{ 
      display: 'flex', 
      flexDirection: isEven ? 'row' : 'row-reverse',
      alignItems: 'center',
      gap: '8%',
      minHeight: '80vh',
      padding: '100px 5%',
      overflow: 'hidden'
    }}>
      {/* Image Side */}
      <div style={{ flex: '1 1 50%', position: 'relative', overflow: 'hidden', borderRadius: '24px', height: '600px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
        <motion.div style={{ width: '100%', height: '120%', y }}>
          <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        {/* Overlay number */}
        <div style={{ 
          position: 'absolute', 
          bottom: '-30px', 
          left: isEven ? '-20px' : 'auto', 
          right: !isEven ? '-20px' : 'auto',
          fontSize: '14rem', 
          fontWeight: 900, 
          color: 'rgba(255,255,255,0.1)', 
          lineHeight: 1,
          pointerEvents: 'none'
        }}>
          {service.num}
        </div>
      </div>

      {/* Content Side */}
      <div style={{ flex: '1 1 50%', maxWidth: '550px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
             <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--gold-primary, #C9A84C)', letterSpacing: '0.1em' }}>
               {service.num}
             </span>
             <div style={{ height: '2px', width: '40px', background: 'var(--gold-primary, #C9A84C)' }}></div>
             <span style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.15em', color: '#999', fontWeight: 600 }}>
               {service.subtitle}
             </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 700, margin: '0 0 24px 0', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#fff' }}>
            {service.title}
          </h2>

          <p style={{ fontSize: '1.15rem', color: '#bbb', lineHeight: 1.7, marginBottom: '40px' }}>
            {service.desc}
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {service.points.map((pt, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.05rem', color: '#e0e0e0', fontWeight: 500 }}>
                <CheckCircle2 size={20} color="var(--gold-primary, #C9A84C)" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <div style={{ 
      background: 'linear-gradient(rgba(8,8,8,0.7), rgba(8,8,8,0.85)), url(/assets/images/premium_dark_bg.jpg) center center / cover fixed, #080808', 
      color: '#fff', 
      minHeight: '100vh' 
    }}>
      
      {/* Hero Section */}
      <section style={{ height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(201,168,76,0.15) 0%, transparent 60%)' }}></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 1, maxWidth: '800px', padding: '0 20px' }}
        >
          <span style={{ color: 'var(--gold-primary, #C9A84C)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '24px' }}>
            End-to-End Solutions
          </span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.03em', lineHeight: 1 }}>
            Our <br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--gold-primary, #C9A84C)' }}>Services</span>
          </h1>
        </motion.div>
      </section>

      {/* Services List */}
      <section style={{ paddingBottom: '100px', maxWidth: '1600px', margin: '0 auto' }}>
        {services.map((srv, idx) => (
          <ServiceBlock key={srv.num} service={srv} index={idx} />
        ))}
      </section>

      {/* Call To Action */}
      <section style={{ padding: '120px 5%', background: '#030303', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.02em' }}>Ready to Manufacture?</h2>
          <p style={{ fontSize: '1.2rem', color: '#999', marginBottom: '40px', lineHeight: 1.6 }}>
            Partner with KS Enterprises to bring your footwear brand's vision to life with uncompromising scale and quality.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem', borderRadius: '50px', background: 'var(--gold-primary, #C9A84C)', color: '#000', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            Start Your Project <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
