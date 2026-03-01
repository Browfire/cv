# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev       # Start dev server at localhost:4321 (hot-reload)
npm run build     # Build production site to ./dist/
npm run preview   # Preview production build locally
npm run astro ... # Run Astro CLI commands (e.g., astro check, astro add)
```

There is no test or lint script configured.

## Architecture

Personal CV/portfolio site built with **Astro 5** (SSG) and **Tailwind CSS 4**. Target: 100/100 Lighthouse.

**Tailwind integration:** Uses the Vite plugin (`@tailwindcss/vite`) — not legacy PostCSS. Imported via `@import "tailwindcss"` in `src/styles/global.css`. Use utility classes; avoid raw CSS unless it must go in `global.css`.

**TypeScript:** Strict mode (`astro/tsconfigs/strict`). Never use `any`.

**Content structure:**

- `src/content/` — Astro Content Collections for work experience, projects, and education. Schemas defined in `src/content/config.ts` with Zod.
- `src/components/` — Reusable `.astro` components (Buttons, Card, Navbar)
- `src/layouts/` — Base page templates
- `src/pages/` — File-based routes (`index.astro`, `404.astro`)
- `public/` — Static assets (CV PDF, profile images)

## Rules

**Components:** Follow the Astro Islands pattern. If a component needs no client-side JS, it must be a pure `.astro` component. Only use React/Vue when interactivity strictly requires it.

**Icons:** Use Iconify or Lucide. No heavy UI libraries (Material UI, Bootstrap) or jQuery.

**Dark mode:** Toggle via `.dark` class on the `<html>` element (not CSS `prefers-color-scheme` alone).

**Accessibility:** Include correct ARIA labels and ensure adequate color contrast.

**Design aesthetic:** Minimalist, clear typography, generous whitespace.
