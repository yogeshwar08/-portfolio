# Yogeshwar — The Series

A cinematic, streaming-platform-inspired personal portfolio built with **React 18 + Vite 6 + Framer Motion + Tailwind CSS v4**.

🔗 **Live:** https://portfolio-ns8u.onrender.com/

---

## ✨ Features

- **Cinematic Opening Sequence** — studio card → portrait reveal → title slam → ▶ PLAY INTRO
- **Netflix-style Profile Selector** — four audience modes (Yogeshwar / Recruiter / Engineer / Curator), each reorders the content
- **Horizontal Pinned Originals** — project cards scroll sideways on desktop like a title strip
- **Play Intro Reel** — Instagram-story-style auto-advancing highlight reel with pause / keyboard controls
- **Custom Cursor** — context-aware cursor with labels (VIEW / ▶ / ↗ / ↔ / ✕)
- **Lenis Smooth Scroll** — silky inertia scrolling, disabled on reduced-motion
- **Film Grain + Light Streaks** — subtle cinematic atmosphere overlay
- **Section Progress Bars** — "Continue Exploring" row tracks real scroll depth per section
- **Resume Modal** — inline PDF viewer on desktop, ResumeSheet on mobile + download
- **Fully Accessible** — focus rings, aria-labels, keyboard shortcuts, reduced-motion support
- **100% Responsive** — mobile-first layout, touch swipe rails, pinned scroll falls back gracefully

## 🛠 Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| Build | Vite 6 + @tailwindcss/vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 11 |
| Smooth Scroll | Lenis 1.x |
| Fonts | Bebas Neue · Instrument Serif · Inter |
| Deployment | Render Static Site |

## 🚀 Local Development

```bash
npm install
npm run dev          # → http://localhost:5173
```

## 📦 Production Build

```bash
npm run build        # tsc + vite build → ./dist
npm run preview      # preview the production bundle locally
```

## 📁 Project Structure

```
src/
├── components/      # All UI components
├── data/
│   └── portfolio.ts # Single source of truth — all resume facts live here
├── hooks/           # useSmoothScroll, useMedia, sectionProgress
├── App.tsx          # Root — stage machine (opening → profiles → home)
├── main.tsx
└── index.css        # Tailwind v4 @theme tokens + global styles
public/
└── assets/          # WebP portrait images + Resume PDF
render.yaml          # Render Static Site blueprint
```

## 🌐 Deploy to Render

1. Push this repo to GitHub
2. Go to [render.com](https://render.com) → **New → Static Site → Connect repo**
3. Render auto-detects `render.yaml` — click **Create Static Site**
4. Every push to `main` triggers a new deploy automatically

---

© 2026 Yogeshwar Arala — AI / ML Engineer
