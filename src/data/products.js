/**
 * KS Enterprise — Curated Sneaker & Sports Shoes Catalog Data
 * Specifications tailored for D2C sneaker brands, athletic startups, wholesale buyers, and private-label footwear exporters.
 */

export const PRODUCTS = [
  {
    id: 'sneaker-aeroglide',
    category: 'sneakers',
    categoryLabel: 'Retro Court Sneakers',
    name: 'AeroGlide Pro Retro Court Sneaker',
    tagline: 'Custom Molded Outsoles & Premium Suede / Nappa Paneling',
    description: 'Engineered for contemporary D2C streetwear and court lifestyle brands. Features multi-layered breathable uppers, high-rebound ergonomic EVA cupsole midsoles, and custom debossed branding across the tongue and heel counter.',
    leather: 'Milled Full-Grain Leather / Hydrophobic Suede Overlays',
    sole: 'Lightweight Two-Tone Dual Density Rubber + Phylon Cupsole',
    moq: '200 Pairs per colorway (Startup Pilot Tier)',
    sizes: 'UK/India 5–12 | EU 39–46 | US 6–13',
    leadTime: '18–22 Days',
    image: '/assets/images/sneaker_court_lux.jpg',
    features: ['Custom Outsole Mold Development', 'Ortholite Memory Foam Insole', 'Embossed Leather Heel Pull', 'Custom Colorway Tech Packs']
  },
  {
    id: 'sports-velocity',
    category: 'running',
    categoryLabel: 'Performance Running',
    name: 'Velocity Pro Athletic Running Shoe',
    tagline: 'High-Rebound Dual-Density EVA Midsole & Breathable Jacquard Mesh',
    description: 'Ultra-lightweight marathon running shoe engineered with multi-zone jacquard mesh for maximum thermal ventilation, paired with a carbon-infused rebound plate and anti-abrasion rubber outsole pods.',
    leather: 'Aerodynamic Jacquard Engineered Mesh / Seamless TPU Film',
    sole: 'Dual-Density High-Rebound EVA Foam + Zonal Rubber Traction',
    moq: '250 Pairs per colorway',
    sizes: 'UK/India 6–12 | EU 40–46 | US 7–13',
    leadTime: '20–25 Days',
    image: '/assets/images/sports_running_shoe.jpg',
    features: ['Aerodynamic Mesh Ventilation', 'Dynamic Arch Propulsion System', 'Non-Slip Continental Rubber Pods', 'Reflective Night-Run Accents']
  },
  {
    id: 'streetwear-apex',
    category: 'streetwear',
    categoryLabel: 'High-Top & Skate',
    name: 'Apex High-Top Skateboard Trainer',
    tagline: 'Vulcanized Rubber Cupsole with Reinforced Suede Ankle Collar',
    description: 'Built for skate lifestyle and urban streetwear brands. Boasts reinforced double-needle stitched eyelets, shock-absorbing vulcanized cupsole, and heavy-duty ankle padding for maximum impact dispersion.',
    leather: 'High-Grade Suede & 16oz Heavyweight Canvas Paneling',
    sole: 'Vulcanized Gum Rubber Waffle Outsole with 360° Sidewall Stitching',
    moq: '200 Pairs per style',
    sizes: 'UK/India 6–12 | EU 40–46 | US 7–13',
    leadTime: '20–25 Days',
    image: '/assets/images/streetwear_hightop.jpg',
    features: ['Vulcanized Cupsole Lasting', 'Padded Ankle Support Collar', 'Abrasion-Resistant Ollie Guard', 'Custom Branded Tongue Crest']
  },
  {
    id: 'chunky-stratos',
    category: 'chunky',
    categoryLabel: 'Chunky & Platform',
    name: 'Stratos Chunky Sole Fashion Trainer',
    tagline: 'Multi-Layered Sculpted Midsole with Athleisure Paneling',
    description: 'High-fashion chunky dad sneaker featuring an exaggerated sculpted midsole, mixed-media leather and technical mesh layering, and an aggressive lugged outsole for elevated streetwear runway appeal.',
    leather: 'Multi-Textured Split Suede, Matte Leather & High-Flex Mesh',
    sole: 'Sculpted Geometric Lightweight Phylon + Thermal TPR Tread',
    moq: '250 Pairs per style',
    sizes: 'UK/India 4–11 | EU 37–45 | US 5–12',
    leadTime: '22–26 Days',
    image: '/assets/images/chunky_sneaker.jpg',
    features: ['Exaggerated 50mm Sculpted Sole', 'Breathable Sandwich Mesh Tongue', 'Speed-Lacing Webbing Loops', 'High-Density Ergonomic Footbed']
  },
  {
    id: 'gym-nitro',
    category: 'training',
    categoryLabel: 'Gym & Cross-Training',
    name: 'NitroFlex Dynamic Cross-Trainer',
    tagline: 'Multi-Directional Rubber Traction with Lateral Stability Cage',
    description: 'Engineered for gym workouts, HIIT, and functional cross-training. Featuring a low-drop stable heel cup, flexible forefoot grooves, and an integrated midfoot TPU lockdown cage.',
    leather: 'Reinforced Ripstop Textile + Welded Synthetic Armor',
    sole: 'Flat-Base Anti-Skid Rubber + High-Density Firm EVA Core',
    moq: '300 Pairs per model',
    sizes: 'UK/India 6–12 | EU 40–46 | US 7–13',
    leadTime: '20–25 Days',
    image: '/assets/images/gym_training_shoe.jpg',
    features: ['Lateral TPU Stability Cage', 'Zero-Slip Flat Heel Platform', 'Forefoot Natural Flex Grooves', 'Custom Heat-Sealed Brand Badges']
  },
  {
    id: 'kids-blaze',
    category: 'kids',
    categoryLabel: "Kids' Athletic",
    name: 'Blaze Runner Youth Athletic Sneaker',
    tagline: 'Featherlight Non-Marking EVA with Dual Velcro Quick-Strap',
    description: 'Designed for energetic youth, school sports, and everyday playtime. Built with scuff-resistant toe caps, breathable antimicrobial knit uppers, and ultra-flexible non-marking soles.',
    leather: 'Breathable Honeycomb Mesh with Reinforced Scuff Toe Guard',
    sole: 'Featherlight Non-Marking Cushion EVA + Non-Slip Rubber Inserts',
    moq: '300 Pairs per style',
    sizes: 'Kids UK 10–2 | Youth UK 3–6',
    leadTime: '18–22 Days',
    image: '/assets/images/kids_sports_sneaker.jpg',
    features: ['Velcro Quick-Release Closure', 'Orthopedic Cushion Insole', 'Reflective Safety Heel Patch', 'Custom Printed Brand Insole']
  },
  {
    id: 'court-monochrome',
    category: 'sneakers',
    categoryLabel: 'Retro Court Sneakers',
    name: 'Monochrome Heritage Cupsole Sneaker',
    tagline: 'Italian Stitch-Down Cupsole with Debossed Heel Branding',
    description: 'A timeless minimalist sneaker staple for premium D2C apparel labels. Clean lines, perforated side ventilation, reinforced heel counters, and ultra-durable stitched rubber outsoles.',
    leather: 'Premium Matte Finished Calf Leather / Nubuck Heel Accent',
    sole: '100% Natural Rubber Cupsole with Perimeter Hand-Stitching',
    moq: '200 Pairs per colorway',
    sizes: 'UK/India 5–12 | EU 39–46 | US 6–13',
    leadTime: '18–22 Days',
    image: '/assets/images/sneaker_court_white.jpg',
    features: ['Reinforced Perimeter Stitching', 'Waxed Organic Cotton Laces', 'Full Leather Glove Lining', 'Custom Gold-Foil Debossed Tongue']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Sneakers & Sports' },
  { id: 'sneakers', label: 'Retro Court Sneakers' },
  { id: 'running', label: 'Performance Running' },
  { id: 'streetwear', label: 'High-Top & Skate' },
  { id: 'chunky', label: 'Chunky & Platform' },
  { id: 'training', label: 'Gym & Cross-Training' },
  { id: 'kids', label: "Kids' Athletic" }
];
