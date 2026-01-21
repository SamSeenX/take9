# Take 9 - Personality Assessment Protocol

**Take 9** is a minimalistic, retro-futuristic personality assessment tool. Built with a CRT-inspired aesthetic, it invites users to "Discover their digital soul" through abstract narrative scenarios.

![Version](https://img.shields.io/badge/version-1.0.0-33ff00?style=for-the-badge&labelColor=0d0d0d)
![Status](https://img.shields.io/badge/status-production--ready-33ff00?style=for-the-badge&labelColor=0d0d0d)

## 🌐 Live Application

The official deployment is at: [t9.samseen.dev](https://t9.samseen.dev/)

## ✨ Key Features

- **Retro Aesthetic**: Phosphor green CRT interface with scanlines, flickers, and glitch animations.
- **15+ Unique Themes**: From abstract "Void" archetypes to pop culture worlds like _The Fellowship_, _The Matrix_, and _The Assembly_.
- **Deep-Linking (SEO)**: Every theme has a dedicated URL for direct access and search engine indexing.
- **Identity Generator**: At the end of each assessment, users can download a custom 1:1 nostalgic ID card (PNG).
- **Viral Social Sharing**: Explicit integration for X (Twitter) and Facebook.
- **Monetization Ready**: Strategically placed ad slots and a "Buy Me a Coffee" support button.
- **Performance First**: Zero dependencies (vanilla JS), aggressive font preloading, and lazy-loaded theme data.

## 🛠 Tech Stack

- **Framework**: [Vite](https://vitejs.dev/) (for minification, hot-reload, fast development and production builds)
- **Logic**: Vanilla JavaScript (ES6+) (for maximum performance and compatibility)
- **Styling**: Vanilla CSS (CSS Variables + Keyframe Animations)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SamSeenX/take9.git
   cd take9
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the local development server with hot-reload:

```bash
npm run dev
```

### Production Build

Generate optimized static assets in the `dist` folder:

```bash
npm run build
```

## 📂 Project Structure

- `src/main.js`: Core entry point and routing logic.
- `src/engine/Game.js`: The state machine handling the 9-step assessment.
- `src/ui/ScreenManager.js`: Handles all DOM rendering and terminal effects.
- `src/data/themes/`: Modular theme data files (lazy-loaded).
- `public/`: Static assets, sitemap, and Cloudflare `_redirects`.

## ☕ Support

If you find my projects useful or want to support my work:

- ⭐ **Star** any of the repositories;
- ☕ **[Buy me a coffee](https://buymeacoffee.com/samseen)**.

---

Created with ❤️ by **[SamSeen](https://github.com/SamSeenX)**
