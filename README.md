# The Royal Kitchen — Modern Classic Indian Dining

> **Tradition, Served Beautifully.**  
> A handcrafted, accessible, and responsive restaurant web showcase celebrating the slow-food culinary rituals of Awadh and Northern India.

[![Live Demo](https://img.shields.io/badge/Live_Demo-the--royal--kitchen--blond.vercel.app-231B12?style=for-the-badge&logo=vercel&logoColor=FCFAF6)](https://the-royal-kitchen-blond.vercel.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-4A5D4E?style=for-the-badge&logo=w3c&logoColor=white)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Zero Dependencies](https://img.shields.io/badge/Dependencies-0_Zero_Build-C7A77B?style=for-the-badge)](https://the-royal-kitchen-blond.vercel.app/)

---

## 🍽️ Project Overview

**The Royal Kitchen** is a high-polish, front-end web development showcase designed to demonstrate modern-classic restaurant interface architecture. Rooted in the rich culinary heritage of Swaroop Nagar, Kanpur, the application honors slow-cooking traditions—emphasizing cold-pressed oils, freshly roasted whole spices, earthenware *dum* braising, and unhurried hospitality.

Built with a **zero-dependency vanilla architecture**, the website highlights how clean semantic markup, custom CSS design systems, and modular vanilla JavaScript can deliver an experience that matches or outperforms heavy framework-driven applications in performance, accessibility, and visual elegance.

---

## 📸 Visual Previews

| Desktop Viewport (1280px) | Mobile Viewport (390px) |
| :---: | :---: |
| ![Desktop Homepage Preview](assets/screenshots/m6-desktop-homepage.png) | ![Mobile Homepage Preview](assets/screenshots/m6-mobile-homepage.png) |

| Interactive 24-Dish Menu Section | Mobile Slide-in Navigation Drawer |
| :---: | :---: |
| ![Desktop Menu Section](assets/screenshots/m6-desktop-menu-section.png) | ![Mobile Drawer Open](assets/screenshots/m6-mobile-drawer-open.png) |

---

## ✨ Key Features & Architectural Highlights

### 1. Cinematic Hero & Brand Narrative
- **Atmospheric visual hierarchy** balancing warm ivory (`#FAF7F2`), rich espresso (`#231B12`), antique gold (`#C7A77B`), and herbal cardamom (`#4A5D4E`).
- Direct action prompts including a smooth anchor jump to the menu and simulated table reservation triggers.
- Fully fluid typography scales leveraging Google Fonts (*Plus Jakarta Sans* for editorial headings, *Inter* for legible body prose).

### 2. Signature Dish Spotlight
- Dedicated editorial showcase for the house signature dish: **Kalonji & Saffron Dum Murgh**.
- Dual-column layout featuring conceptual braising times, ingredient narratives, pairing suggestions, and culinary craftsmanship details.

### 3. Culinary Heritage & Craftsmanship Pillars
- **Our Story**: Rich narrative chronicling Kanpur’s patient home-cooking rituals.
- **Three Core Pillars**:
  1. *Hand-Roasted Spices* — Whole cumin, black cardamom, and mace pounded daily in small batches.
  2. *Clay & Iron Slow Cooking* — Gentle heat distribution through cast iron and earthenware pots.
  3. *Unhurried Hospitality* — Food crafted as an act of heartfelt welcome.

### 4. Interactive 24-Dish Dual-Criteria Food Menu
- **Complete Culinary Diversity**: 24 authentic dishes (12 Pure Vegetarian, 12 Non-Vegetarian).
- **Dual-Criteria Filtering Engine**:
  - **Dietary Filter**: *All Dishes (24)* | *Pure Vegetarian (12)* | *Non-Vegetarian (12)*.
  - **Course Category Tabs**: *All Categories* | *Starters & Kebabs (6)* | *Vegetarian Mains (4)* | *Non-Vegetarian Mains (6)* | *Biryani & Rice (4)* | *Breads & Sides (2)* | *Desserts & Drinks (2)*.
  - Generates **21 unique combined filter states** with real-time DOM card updates and empty-state fallbacks.
- **Accessible Dynamic Announcements**: Includes an `aria-live="polite"` screen reader status region announcing matching item counts on every filter interaction.
- **100% Local Authentic Food Photography**: Zero external image CDN dependencies. Every dish photograph is locally hosted, optimized, and framed with custom vegetarian/non-vegetarian indicator badges.

### 5. Floating "Back to Filters" Quick-Jump Button
- Intelligent viewport scroll tracking via `requestAnimationFrame`.
- Remains strictly hidden across Hero, Signature, Story, and Philosophy sections.
- Automatically reveals itself when visitors scroll into the 24-dish menu grid past the filter controls.
- One-click smooth return to the filter bar with focus retention for keyboard users.

### 6. Responsive Header & Accessible Mobile Drawer
- Sticky navigation bar with subtle backdrop blur and border elevation.
- Animated mobile hamburger toggle with full `aria-expanded` and `aria-controls` bindings.
- Accessible drawer supporting Escape key dismissal, click-outside closing, and automatic closure upon anchor selection.

### 7. Non-Intrusive Demonstration Feedback System
- Clean, floating toast notifications triggered by reservation and dish preview demo buttons.
- Auto-dismissing timer with manual `×` close button, designed never to obstruct primary content.

### 8. Comprehensive Footer
- 4-column responsive layout incorporating demo operating hours, reservation inquiries, navigation anchors, copyright notice, and fictional demonstration disclaimers.

---

## 🛠️ Technologies & Engineering Standards

- **Core Stack**: Vanilla HTML5, Modern CSS3, ES6+ JavaScript.
- **Zero Build Tooling**: Runs natively in any browser without npm, webpack, vite, or transpilation steps.
- **Design System**: Modular CSS Custom Properties (`--color-*`, `--font-*`, `--space-*`, `--radius-*`, `--shadow-*`).
- **SEO & Social Sharing**:
  - Complete Open Graph (`og:*`) and Twitter Card (`twitter:*`) metadata.
  - Canonical link tags (`https://the-royal-kitchen-blond.vercel.app/`).
  - Mobile browser theme-color integration (`#231B12`).
  - `robots.txt` and `sitemap.xml` compliant with search engine specifications.
- **Image Optimization**:
  - Explicit `width` and `height` dimensions on all 27 images to eliminate **Cumulative Layout Shift (CLS = 0)**.
  - Priority-based loading: `loading="eager"` for the above-the-fold Hero, `loading="lazy"` and `decoding="async"` for all below-the-fold images.
  - Multi-tier favicon suite: SVG vector icon + 32x32 PNG fallback + 180x180 Apple Touch Icon.

---

## ♿ Accessibility & Performance Compliance

- **WCAG 2.1 AA Compliant**:
  - Text contrast of **13.8:1** on primary body copy (surpassing the 7.0:1 WCAG AAA requirement).
  - Accent contrast of **5.8:1** (surpassing the 4.5:1 WCAG AA requirement).
- **Sequential Heading Structure**: Strict single `<h1>`, followed by sequential `<h2>` sections and `<h3>` component cards. Zero skipped heading levels.
- **Keyboard Navigation**: Highly visible, customized `:focus-visible` focus rings across all interactive elements.
- **Screen Reader Support**: Semantic fieldsets, legends, ARIA attributes (`aria-pressed`, `aria-expanded`, `aria-live="polite"`), and non-visual screen-reader utility classes (`.sr-only`).
- **Vestibular Motion Support**: Fully respects `@media (prefers-reduced-motion: reduce)`, disabling CSS animations and transitions for sensitive users.

---

## 📂 Repository File Structure

```
the-royal-kitchen/
├── index.html                   # Master single-page application entry point
├── robots.txt                   # Search engine crawl directives
├── sitemap.xml                  # XML sitemap for production canonical domain
├── README.md                    # Project documentation & architectural tour
├── .gitignore                   # Excludes test captures and OS temporary files
├── css/
│   └── style.css                # Master stylesheet (CSS tokens, grid, components)
├── js/
│   └── main.js                  # Modular vanilla JS (nav, filters, toast, floating button)
└── assets/
    ├── images/
    │   ├── favicon.svg          # Master scalable SVG favicon
    │   ├── favicon-32x32.png    # Standard raster favicon fallback
    │   ├── apple-touch-icon.png # 180x180 iOS home screen icon
    │   ├── hero-dining.jpg      # Hero visual centerpiece
    │   ├── signature-chicken.jpg# Signature dish spotlight image
    │   ├── story-kitchen.jpg    # Kitchen craftsmanship narrative image
    │   └── menu/                # 24 local authentic dish photographs
    └── screenshots/             # Visual QA audit and regression screenshots
```

---

## 🚀 Local Development Setup

No build tools, bundlers, or package managers are required.

### Option 1: Direct File Access
Simply double-click or open `index.html` in any modern web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local HTTP Server (Recommended)
Using Python or Node's zero-install static server:
```bash
# Using Python 3
python -m http.server 3000

# Using Node npx
npx serve .
```
Navigate to `http://localhost:3000` in your browser.

---

## 🌐 Live Production Deployment

The project is deployed on **Vercel** with instant global edge caching and automatic SSL:

👉 **[https://the-royal-kitchen-blond.vercel.app/](https://the-royal-kitchen-blond.vercel.app/)**

---

## 📜 Fictional Demonstration Project Disclaimer

> **PLEASE NOTE:**  
> **The Royal Kitchen** is a **fictional restaurant demonstration project** developed strictly for web development practice, UI/UX craftsmanship, and front-end portfolio presentation.  
> 
> - All restaurant addresses (Swaroop Nagar, Kanpur), operating hours, telephone numbers, menu pricing, culinary awards, pairing suggestions, and reservation workflows are **simulated demonstration concepts**.  
> - No real commercial transactions, live bookings, or food deliveries take place through this website.  
> - In compliance with search engine guidelines, this repository intentionally omits deceptive `LocalBusiness` or `Restaurant` structured data.
