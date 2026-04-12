# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Business website for **Impermeabilizaciones LM**, a waterproofing contractor in Barcelona/Tarragona. Built with Nuxt 4 + Vue 3, deployed on Netlify.

## Commands

```bash
pnpm install            # Install dependencies
pnpm netlify:dev        # Dev server with Netlify features (forms, image optimization)
pnpm dev                # Plain Nuxt dev server (no Netlify features)
pnpm build              # Production build
pnpm preview            # Production preview
pnpm generate           # Static site generation
pnpm test               # Run tests with vitest
pnpm lint               # ESLint for .js and .vue files
npx nuxi cleanup && npx nuxi dev  # Fix stale cache / type issues
```

Use `pnpm netlify:dev` as the primary dev command — it enables Netlify image provider and form handling.

## Architecture

**Nuxt 4** with file-based routing, **Nuxt Content v3** for data, **Tailwind CSS v4 + DaisyUI v5** for styling.

### Content System

All content lives in `content/` as JSON files, defined as typed collections in `content.config.ts`:

- **services** (`content/static/services/`) — Main service offerings (3 items), each with a `slug` for routing
- **more_services** (`content/static/more_services/`) — Additional services
- **eco_services** (`content/static/eco_services/`) — Eco services with dual thumbnails (`thumbnail1`, `thumbnail2`)
- **works** (`content/blog/posts/`) — Portfolio entries with date, place, service, and image metadata

Collections are queried at runtime via `queryCollection()`. Schemas are validated with Zod.

### Routing

- `/servicios/[slug]` — Dynamic service detail pages (slug comes from service JSON)
- `/impermeabilizaciones/[place]` — Portfolio filtered by geographic place
- `/trabajos/` — All portfolio works
- Standard pages: `/`, `/quienes-somos`, `/contacto`, `/gracias`

### Styling

Custom DaisyUI theme `"imper"` defined in `tailwind.config.js` with OKLCH colors. Theme is set via `data-theme="imper"` on the root element in `app.vue`. Global font styles in `app/assets/css/main.css`.

### Key Directories

- `app/config/` — Brand constants (`brand.ts`) and navigation structure (`menu.ts`)
- `app/composables/` — Shared state (`useMenu`, `useDrawer`)
- `app/core/` — Content loading utilities and slug generation
- `types/` — TypeScript interfaces for Service, EcoService, Work

## Code Style

- **No semicolons**, single quotes (Prettier config)
- 2-space indentation, LF line endings
- Pre-commit hook (husky + lint-staged) runs ESLint on `.js` and `.vue` files
- Package manager: **pnpm** (v9.9.0)
- CSS processing: **LightningCSS** for both transformation and minification (configured in `nuxt.config.ts` via Vite)

## Language

The site is in **Spanish**. All user-facing text, content, routes, and page names are in Spanish.
