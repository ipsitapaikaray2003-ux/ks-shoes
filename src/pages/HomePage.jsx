import React from 'react';
import Hero from '../components/Hero';
import ShoeCustomizerSlider from '../components/ShoeCustomizerSlider';
import WhatWeDoGrid from '../components/WhatWeDoGrid';
import BrowseCustomShoes from '../components/BrowseCustomShoes';
import AboutSection from '../components/AboutSection';
import CoreOfferings from '../components/CoreOfferings';
import FeaturedOn from '../components/FeaturedOn';
import TrustedStatsSection from '../components/TrustedStatsSection';
import WhoWeWorkWith from '../components/WhoWeWorkWith';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import PackagingShowcase from '../components/PackagingShowcase';
import BrandJourney from '../components/BrandJourney';
import ManufacturingSection from '../components/ManufacturingSection';
import RfqCalculator from '../components/RfqCalculator';
import FaqSection from '../components/FaqSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage({
  activeCategory,
  onCategoryChange,
  onOpenModal,
  onInquireProduct,
  onShowToast
}) {
  return (
    <main>
      {/* 1. Hero: Your Vision, Our Craftsmanship with Live Stats & CTAs */}
      <Hero />

      {/* 2. Interactive 3D Shoe Customizer Showcase (Exact Same-to-Same MakeMyShoe 3-Slide Slider with KS Logo) */}
      <ShoeCustomizerSlider />

      {/* 3. What We Do: 6 Pillars of Sneaker & Footwear Manufacturing */}
      <WhatWeDoGrid />

      {/* 3. Browse Custom Shoes: Men, Women, Kids, Corporate Gifting */}
      <BrowseCustomShoes />

      {/* 4. Our Advanced Infrastructure & Decades of Experience */}
      <AboutSection />

      {/* 5. Discover What KS Enterprise Offers: Custom Branding, Packaging, Delivery, Free Consultation */}
      <CoreOfferings />



      {/* 8. Featured On: Recognized by Leading Industry Platforms */}
      <FeaturedOn />

      {/* 9. India's Trusted Custom & Private Label Shoe Manufacturer (Live Stats Bar) */}
      <TrustedStatsSection />

      {/* 10. Who We Work With: Startups, D2C, Fashion Labels, Retailers */}
      <WhoWeWorkWith />

      {/* 11. Why Choose KS Enterprise: End-to-End, Low MOQ, Bulk, Quality */}
      <WhyChooseUsSection />

      {/* 12. Turnkey Private Labeling & Custom Packaging */}
      <PackagingShowcase />

      {/* 13. End-to-End Brand Journey: Design to Delivery */}
      <BrandJourney />

      {/* 14. Manufacturing Infrastructure & In-House QA Testing Lab */}
      <ManufacturingSection />

      {/* 15. Smart Interactive Production & Cost Estimator */}
      <RfqCalculator 
        selectedCategory={activeCategory !== 'all' ? activeCategory : 'sneakers'} 
        onCategoryChange={onCategoryChange}
      />

      {/* 16. Frequently Asked Questions (FAQ) */}
      <FaqSection />

      {/* 17. Partner Reviews & Trust Endorsements */}
      <TestimonialsSection />

      {/* 18. Start Building Brand: Direct Contact & Factory Tour RFQ */}
      <ContactSection 
        selectedCategory={activeCategory !== 'all' ? activeCategory : 'sneakers'}
        onShowToast={onShowToast}
      />
    </main>
  );
}
