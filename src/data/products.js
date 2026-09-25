/**
 * KS Shoes — B2B Footwear Manufacturing Product Data
 * Tailored for global footwear brands, D2C startups, and retail buyers.
 */

export const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'sports', label: 'Sports Shoes' },
  { id: 'casual', label: 'Casual Shoes' },
  { id: 'sneakers', label: 'Sneakers' },
  { id: 'running', label: 'Running Shoes' },
  { id: 'work', label: 'Work Shoes' },
  { id: 'safety', label: 'Safety Shoes' },
  { id: 'lifestyle', label: 'Lifestyle Footwear' },
  { id: 'custom', label: 'Custom Footwear' }
];

export const PRODUCTS = [
  {
    id: 'prod-sports-1',
    category: 'sports',
    categoryLabel: 'Sports Shoes',
    name: 'Velocity Pro Aerodynamic Athletic Shoe',
    tagline: 'Dual-Density Phylon Sole & High-Tensile Jacquard Knit',
    description: 'High-performance sports shoe engineered for speed training and multi-sport court agility. Features reinforced thermo-welded TPU lateral support and high-rebound cushioning.',
    materials: 'Breathable Jacquard Weave, TPU Film, Dual-Density EVA',
    sole: 'Lightweight Phylon Midsole + Zonal Anti-Skid Rubber Pods',
    moq: '200 Pairs per colorway',
    sizes: 'UK 5–12 | EU 39–46 | US 6–13',
    leadTime: '3–4 Weeks',
    image: '/assets/images/sports_running_shoe.jpg',
    features: ['360° Mesh Ventilation', 'Dynamic Arch Torsion Plate', 'Shock-Absorbing Heel Counter', 'Custom Brand Hot-Pressing']
  },
  {
    id: 'prod-casual-1',
    category: 'casual',
    categoryLabel: 'Casual Shoes',
    name: 'Metropolitan Clean Casual Trainer',
    tagline: 'Soft Milled Nappa Leather with Ultra-Flex Strobel Construction',
    description: 'Understated elegance for contemporary direct-to-consumer lifestyle brands. Handcrafted from supple milled cowhide leather with a low-profile natural rubber cupsole.',
    materials: 'Milled Full-Grain Leather, Organic Cotton Canvas Lining',
    sole: 'Natural Gum Rubber Cupsole with 360° Sidewall Stitching',
    moq: '200 Pairs per colorway',
    sizes: 'UK 6–12 | EU 40–46 | US 7–13',
    leadTime: '3 Weeks',
    image: '/assets/images/clean_runner_unbranded.jpg',
    features: ['Strobel Flexible Lasting', 'Ortholite Memory Foam Insole', 'Debossed Heel Monogram', 'Waxed Combed Cotton Laces']
  },
  {
    id: 'prod-sneaker-1',
    category: 'sneakers',
    categoryLabel: 'Sneakers',
    name: 'AeroGlide Luxury Retro Court Sneaker',
    tagline: 'Bespoke Italian Calfskin with Reinforced Sidewall Stitching',
    description: 'The pinnacle of luxury court sneaker manufacturing. Full-grain pebbled calfskin uppers paired with rich cognac leather side panels and a 360° stitched rubber cupsole.',
    materials: 'Italian Calfskin Leather, Split Suede Accents',
    sole: 'High-Abrasion Natural Rubber Cupsole',
    moq: '200 Pairs per colorway',
    sizes: 'UK 5–12 | EU 39–46 | US 6–13',
    leadTime: '3–4 Weeks',
    image: '/assets/images/slider_court_sneaker.jpg',
    features: ['Hand-Burnished Patina Accents', 'Laser-Etched Metallic Aglets', 'Anti-Microbial Cowhide Glove Lining', 'Custom Molded Cupsole']
  },
  {
    id: 'prod-running-1',
    category: 'running',
    categoryLabel: 'Running Shoes',
    name: 'Kinetic Strike Carbon Plate Marathon Runner',
    tagline: 'Carbon Fiber Propulsion Plate & High-Rebound Nitrogen Foam',
    description: 'Engineered for competitive marathon distance runners. Ultra-lightweight seamless jacquard upper with a curved carbon propulsion plate encapsulated within nitrogen-infused kinetic foam.',
    materials: 'Ultralight Engineered Mono-Mesh, Carbon Fiber Shank',
    sole: 'Nitrogen-Infused Rebound Foam + Continental Traction Pods',
    moq: '300 Pairs per colorway',
    sizes: 'UK 6–12 | EU 40–46 | US 7–13',
    leadTime: '4 Weeks',
    image: '/assets/images/slider_running_sneaker.jpg',
    features: ['75% Energy Return Insole', 'Reflective 3M Low-Light Elements', 'Anatomical Anti-Friction Tongue', 'Seamless Welded Eyestays']
  },
  {
    id: 'prod-work-1',
    category: 'work',
    categoryLabel: 'Work Shoes',
    name: 'ErgoDuty Service & Hospital Occupational Shoe',
    tagline: 'Slip-Resistant Outsole with Orthopedic Arch Support Cushioning',
    description: 'Designed for hospital, aviation, hospitality, and service professionals who stand for 10+ hours daily. Easy-wipe hydrophobic leather uppers with certified anti-slip wet rubber tread.',
    materials: 'Hydrophobic Smooth Leather, Sanitized Anti-Bacterial Mesh',
    sole: 'Dual-Density PU/Rubber Sole with Anti-Fatigue Air Pocket',
    moq: '300 Pairs per style',
    sizes: 'UK 4–12 | EU 37–46 | US 5–13',
    leadTime: '3–4 Weeks',
    image: '/assets/images/craft_stitching.jpg',
    features: ['Certified Slip Resistance (SRC Grade)', 'Removable Orthopedic Footbed', 'Fluid-Resistant Sealed Seams', 'Non-Metallic Construction']
  },
  {
    id: 'prod-safety-1',
    category: 'safety',
    categoryLabel: 'Safety Shoes',
    name: 'TitanGuard EN ISO 20345 Industrial Safety Boot',
    tagline: '200J Composite Safety Toe & Puncture-Proof Kevlar Midplate',
    description: 'Heavy-duty industrial protective footwear compliant with EN ISO 20345 standards. Features a lightweight fiberglass composite toe cap, puncture-resistant Kevlar midsole, and oil/acid-resistant outsole.',
    materials: 'Waterproof Action Nubuck Leather, Breathable Moisture-Wick Lining',
    sole: 'Dual-Density Direct Injection PU/Rubber Outsole',
    moq: '500 Pairs per production run',
    sizes: 'UK 5–13 | EU 38–47 | US 6–14',
    leadTime: '4–5 Weeks',
    image: '/assets/images/factory.jpg',
    features: ['200 Joules Impact Protection', '1100N Anti-Penetration Midsole', '300°C Heat-Resistant Rubber Sole', 'ESD Anti-Static Certified']
  },
  {
    id: 'prod-lifestyle-1',
    category: 'lifestyle',
    categoryLabel: 'Lifestyle Footwear',
    name: 'Apex Streetwear Suede High-Top Trainer',
    tagline: 'Heavy-Duty Vulcanized Gum Sole & Padded High-Top Ankle Collar',
    description: 'Built for skater culture, high-end street fashion, and contemporary youth brands. Boasts double-needle heavy stitching, padded collar protection, and vulcanized rubber sidewalls.',
    materials: 'Matte Suede & 16oz Heavyweight Cotton Canvas',
    sole: 'Vulcanized Gum Rubber with 360° Rubber Foxing Tape',
    moq: '200 Pairs per style',
    sizes: 'UK 6–12 | EU 40–46 | US 7–13',
    leadTime: '3–4 Weeks',
    image: '/assets/images/slider_hightop_sneaker.jpg',
    features: ['High-Abrasion Ollie Protection', 'Heavy Gauge Brass Eyelets', 'Embroidered Ankle Brand Crest', 'Shock-Absorbing PU Cup Insole']
  },
  {
    id: 'prod-custom-1',
    category: 'custom',
    categoryLabel: 'Custom Footwear',
    name: 'Bespoke OEM Tooling & Mold Development',
    tagline: 'Turnkey 3D CAD Lasting, Private Sole Molds & Luxury Box Gifting',
    description: 'For brands needing complete bespoke development from scratch. We engineer proprietary outsole molds, customized anatomical lasts, custom branded insoles, and luxury rigid packaging suites.',
    materials: 'Fully Customizable To Client Tech Pack Specifications',
    sole: 'Proprietary Injected Phylon, Rubber, TPU, or Vulcanized',
    moq: 'Custom Tooling Project',
    sizes: 'Full Graded Size Runs Available',
    leadTime: '7 Days Sample / 4 Weeks Production',
    image: '/assets/images/hero_luxury_artisan.jpg',
    features: ['CAD 3D Footwear Scanning', 'Private Outsole Tooling Ownership', 'Turnkey Luxury Packaging Suites', 'Confidentiality & NDA Protected']
  }
];
