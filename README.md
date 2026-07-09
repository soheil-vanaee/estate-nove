# 🏠 Estate Nove

**A fully responsive real-estate marketplace — designed in Figma and built end-to-end with React.**

> Design & Development by **[Soheil Vanaee](https://github.com/soheil-vanaee)**

Estate Nove is a real-estate platform concept where every screen — from the landing page to property search, filtering, mortgage calculator, and auth flows — was both **designed (UI/UX in Figma)** and **developed (React front-end)** by the same person. It's not a static mockup: every nav tab, form, and footer link routes to a real, working page.

<!-- 🖼️ Add a screenshot or GIF of the homepage here -->
<!-- ![Estate Nove preview](./preview.png) -->

**🔗 Live Demo:** _add your deployed URL here_
**🎨 Figma File:** _add your Figma link here_

---

## ✨ Features

- **Home** — hero section, live search/filter widget, curated property grid, interactive "how it works" panel, investment stats
- **Buy / Rent / Sell** — dedicated listing pages with type-specific filtering; Sell includes a valuation request form
- **Home Loans** — a live mortgage calculator (price, down payment, term, and rate sliders)
- **Property Details** — full listing page with a "similar properties" section
- **Sign In / Sign Up** — client-side validated authentication forms
- **About / Contact / Privacy / Terms** — real, linked pages, including a working contact form
- Fully responsive (desktop, tablet, mobile) with a working mobile navigation menu
- Custom 404 page for unmatched routes

## 🎨 UX methods & principles applied

`Design System / Design Tokens` · `Component-Based Design` · `Information Architecture` · `Progressive Disclosure` · `Faceted Search & Filtering` · `Card-Based UI Pattern` · `Visual Hierarchy & Typography Scale` · `Inline Form Validation` · `Empty State Design` · `Micro-interactions` · `Mobile-First Responsive Design` · `Heuristic Evaluation (Nielsen)` · `Real-time Feedback` · `Accessibility Basics (focus states, semantic HTML)`

See [`docs/case-study.md`](./docs/case-study.md) for the full design & development case study, and [`docs/user-flow.svg`](./docs/user-flow.svg) for the user flow diagram.

## 🧱 Tech stack

- [React 19](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) — dev server & bundler
- [@fontsource](https://fontsource.org/) (Poppins + Inter) — self-hosted fonts
- Plain CSS with a design-token system (no framework)

## 📁 Project structure

```
estate-nove/
├── docs/
│   ├── case-study.md      # Design & development case study
│   └── user-flow.svg       # User flow diagram
├── src/
│   ├── assets/images/       # Property & hero images
│   ├── components/          # Navbar, Footer, PropertyCard, SearchFilter, StatCard
│   ├── data/properties.js    # Single source of truth for all listings
│   ├── pages/                # One file per route
│   ├── App.jsx                # Route declarations
│   └── index.css               # Design tokens + globals
├── index.html
└── package.json
```

## 🚀 Getting started

**Requirements:** Node.js 18+ and npm

```bash
git clone https://github.com/soheil-vanaee/estate-nove.git
cd estate-nove
npm install
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`).

```bash
npm run build     # Production build → /dist
npm run preview   # Preview the production build
npm run lint       # Run oxlint
```

## 📦 Deploying

`npm run build` produces a static site in `/dist`, deployable to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Since this uses client-side routing (`react-router-dom`), make sure your host redirects unknown paths back to `index.html` (SPA fallback).

## 🖼️ Replacing images

Property and hero images live in `src/assets/images/` (`heroimage.jpg`, `image1.jpg`–`image6.jpg`, `howitworks.jpg`, `authimage.jpg`). Swap the files with real photos at the same filenames — no code changes needed.

## 📄 License

This project is available for portfolio/reference purposes. Feel free to fork it for learning — please don't republish it as your own design work.

---

Made with care by **Soheil Vanaee** — design and code, start to finish.
