# 🌸 Pinky Lady — Luxury Organic Feminine Care

A modern, high-performance e-commerce and brand experience for **Pinky Lady**, a luxury organic feminine hygiene brand committed to pure GOTS-certified organic cotton, botanical wellness, and irritation-free period care.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and a custom **Vanilla CSS Design System**.

---

## ✨ Features

- **🎨 Custom Box Atelier (Interactive Box Customizer)**:
  - Mix and match personalized quantities of Daytime Comfort (240mm), Overnight Heavy Flow (290mm / 320mm), Panty Liners (155mm), and Botanical Intimate Wash.
  - Live real-time pricing, free shipping progress tracker, and instant add-to-cart.

- **🔬 Botanical Science & Clean Innovation**:
  - Educational highlight reel covering 100% GOTS Organic Cotton, Super Absorbent Polymer (SAP) cores, Green Tea & Lavender herbal anion chips, and biodegradable cornstarch leak barriers.
  - Zero chlorine bleaching, fragrance-free, dye-free, and hypoallergenic.

- **🧬 Interactive Pad Anatomy**:
  - Detailed cross-section and 7-layer breakdown explaining the physics of leak prevention and breathability.

- **🛍️ Seamless Cart & Notification System**:
  - Slide-out Cart Drawer with item quantity management, real-time subtotal calculation, and checkout readiness.
  - Auto-dismissing toast modal with active countdown bar upon item addition.

- **📦 Curated Wellness Bundles**:
  - Ready-to-order sets: *The Teen Starter Kit*, *Heavy Flow Care Pack*, *New Mom Postpartum Bundle*, and *Eco-Lover Travel Kit*.

- **💬 Community Stories & Testimonials**:
  - Authentic customer reviews and gynecologist endorsements.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with custom design tokens (Warm Plum, Blush Pink, Coral, and Cream palette)
- **Linting & Code Quality**: ESLint 9 with Next.js Core Web Vitals and TypeScript configs

---

## 📁 Project Structure

```text
Pinky Lady/
├── public/                 # Static assets (brand SVGs, product imagery)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global theme tokens, typography, and utility styles
│   │   ├── layout.tsx      # Root layout, Google Fonts (Geist/Playfair/Outfit), Metadata
│   │   └── page.tsx        # Landing page composition
│   ├── components/         # Modular UI components
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AtelierCustomizer.tsx
│   │   ├── PadAnatomy.tsx
│   │   ├── BotanicalScience.tsx
│   │   ├── CuratedKits.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── AddedToCartModal.tsx
│   │   ├── CommunityStories.tsx
│   │   └── Footer.tsx
│   └── context/
│       └── CartContext.tsx # Centralized shopping cart state and notification modal
├── _archive_v1/            # Legacy prototype for historical reference
├── eslint.config.mjs       # Modern flat ESLint configuration
├── next.config.ts          # Next.js compiler settings
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or Node.js 20+
- npm or yarn or pnpm

### Installation

1. Clone repository:
   ```bash
   git clone https://github.com/<your-username>/pinky-lady.git
   cd pinky-lady
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Available Scripts

| Command | Action |
| --- | --- |
| `npm run dev` | Starts local Next.js dev server with Turbopack |
| `npm run build` | Compiles production-optimized static & server bundle |
| `npm run start` | Starts production server locally |
| `npm run lint` | Runs ESLint across all TypeScript and React files |

---

## 📄 License

This project is private and proprietary to Pinky Lady / SS40 Network. All rights reserved.
