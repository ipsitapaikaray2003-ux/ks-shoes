import React, { useState } from 'react';
import Hero from '../components/Hero';
import HomeAboutSection from '../components/HomeAboutSection';
import ScrollVideoAnimation from '../components/ScrollVideoAnimation';
import WhyKSSection from '../components/WhyKSSection';
import CollectionsSection from '../components/CollectionsSection';
import ProcessTimelineSection from '../components/ProcessTimelineSection';
import HomeContactSection from '../components/HomeContactSection';

export default function HomePage({ onOpenModal, onShowToast }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div style={{ background: '#F8F7F5', color: '#111', minHeight: '100vh' }}>
      <Hero />
      <HomeAboutSection />
      <ScrollVideoAnimation />
      <WhyKSSection />
      
      {/* Product Catalog Embedded in Homepage */}
      <CollectionsSection 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onOpenModal={onOpenModal}
        onSelectProductForRfq={(product) => onShowToast(`Selected ${product.name} for RFQ`)}
      />

      <ProcessTimelineSection />
      <HomeContactSection onShowToast={onShowToast} />
    </div>
  );
}
