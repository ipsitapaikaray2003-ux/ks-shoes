# CLAUDE.md — KS Enterprise Footwear Manufacturing

This repository contains the official website and digital platform for **KS Enterprise**, India's premier private label sports shoes and sneaker manufacturing company based in Agra, Uttar Pradesh.

---

## 🎯 Business Identity & Scope

- **Company Name**: KS Enterprise
- **Factory Campus**: Foundry Nagar, Agra, Uttar Pradesh, India
- **Core Specialization**: **100% Sports Shoes and Sneakers ONLY** (Court Sneakers, Performance Athletic Runners, Streetwear High-Tops, Gym Trainers).
  - ⚠️ **Strict Constraint**: Do NOT add formal shoes, oxfords, brogues, or dress shoes. The factory manufactures exclusively sneakers and athletic footwear.
- **Business Model**: OEM & ODM Turnkey Private Label Manufacturing for D2C brands, footwear startups, corporate clients, and retail chains.
- **Key Proposition**:
  - Low MOQ: Starts from **200 pairs**
  - Rapid Prototyping: 7-day sample turnaround
  - Advanced Technology: Robotic conveyor assembly, Strobel lasting, dual-density EVA sole moulding, breathable jacquard mesh.
  - Full Turnkey: Brand concept, CAD design, sampling, custom packaging, doorstep delivery.
- **Reference Benchmark**: [makemyshoe.co.in](https://makemyshoe.co.in)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework**: React 18 (`react`, `react-dom`)
- **Routing**: `react-router-dom` (Single Page Application with client-side routing)
- **Bundler & Dev Server**: Vite (`vite v6+`)
- **Styling**: **Vanilla CSS ONLY** (`css/style.css`).
  - ⚠️ **Rule**: Do NOT install or use Tailwind CSS. Maintain all design tokens in `css/style.css`.
- **Design System Tokens**:
  - Primary Gold: `#C9A84C` (`var(--gold-primary)`)
  - Light Gold: `#E8C97A` (`var(--gold-light)`)
  - Deep Obsidian Canvas: `#07090D` to `#0D1017` (`var(--black-deep)`)
  - Elevated Cards: `#11151F` to `#161B26` (`var(--black-card)`)
  - Typography: Playfair Display / Cinzel (luxury titles), Inter / Montserrat (body)

---

## ⚡ Development Workflow & Commands

```bash
# Start local development server (Vite with hot reload)
npm run dev

# Build production bundle (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
ks-shoes/
├── css/
│   └── style.css            # Global luxury design system, keyframes & responsive utilities
├── public/
│   └── assets/images/       # High-res sneaker renders, factory photos, logos, badges
├── src/
│   ├── components/          # Reusable UI sections & interactive components
│   │   ├── Navbar.jsx       # Frosted glass header with mega-dropdowns
│   │   ├── Hero.jsx         # 3D Interactive Sneaker Customizer Hero (No photo background!)
│   │   ├── WhatWeDoGrid.jsx # 6 Pillars of footwear manufacturing
│   │   ├── BrowseCustomShoes.jsx # Men, Women, Kids & Corporate Gifting
│   │   ├── PackagingShowcase.jsx # 3D Box finish & hot-foil stamping selector
│   │   ├── BrandJourney.jsx # Animated 6-stage development timeline
│   │   ├── BackToTop.jsx    # Circular SVG scroll progress ring
│   │   ├── RfqCalculator.jsx # Dynamic MOQ & volume pricing calculator
│   │   └── Footer.jsx       # Luxury footer with quick links and certifications
│   ├── pages/               # Page views
│   │   ├── HomePage.jsx     # Master landing page
│   │   ├── AboutPage.jsx    # Virtual factory tour, master artisans & certifications
│   │   ├── ServicesPage.jsx # 8-step roadmap & construction visualizer (Strobel/EVA)
│   │   ├── ProductsPage.jsx # Filterable sneaker catalog & bespoke mold development
│   │   ├── CorporateGiftingPage.jsx # Volume tiers & custom branding incentives
│   │   ├── CaseStudiesPage.jsx      # Commercial ROI metrics & D2C success stories
│   │   ├── FaqPage.jsx      # Live searchable FAQ accordion
│   │   └── ContactPage.jsx  # 2-step guided RFQ wizard & factory details
│   ├── App.jsx              # Router configuration, global layout & toast provider
│   └── main.jsx             # React entry point
├── package.json
└── CLAUDE.md                # Claude Code guide & rules (this file)
```

---

## 🎨 Design & Code Standards

1. **Zero Hero Photo Backgrounds**: The hero area must remain clean obsidian studio with subtle radial gold lighting, with the 3D sneaker customizer as the direct focal point.
2. **Interactive Micro-Animations**:
   - Use `.card-interactive-luxury` for 3D tilt and sheen hover effects.
   - Use `@keyframes goldGlowPulse` for active pins and primary CTAs.
   - Use `@keyframes shimmerGleam` for metallic text highlights.
3. **Responsive Quality**:
   - Always ensure mobile responsiveness (`@media (max-width: 1024px)` and `@media (max-width: 768px)`).
   - Hotspot cards must reflow gracefully on smaller screens.
4. **Clean Builds**:
   - Always run `npm run build` after making modifications to confirm 0 compilation errors.
