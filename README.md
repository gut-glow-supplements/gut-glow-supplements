# Gut Glow

Gut Glow is a Next.js 14 + TypeScript project for a digestive wellness brand. The site prioritizes educational content, evidence-based supplements, and community resources tailored to people seeking better gut health.

## Tech stack
- [Next.js 14](https://nextjs.org/) with the App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion-ready architecture for future animation work
- React Hook Form + Zod planned for validated forms

## Getting started
1. Install dependencies:
   ```bash
   npm install
   ```
   > If installation fails in restricted environments, download dependencies locally and copy the resulting `node_modules` directory or use an internal registry.

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Visit [http://localhost:3000](http://localhost:3000) to explore the Gut Glow experience.

## Project structure
- `app/` – App Router routes with a marketing group containing the homepage, quiz, resources, blog, products, and legal pages.
- `components/` – Reusable UI primitives, layout scaffolding, and homepage sections.
- `data/` – Static data powering featured products, blog posts, and testimonials.
- `lib/` – Utility helpers and constants for site-wide reuse.
- `public/` – Brand assets and favicons.

## Roadmap highlights
- Connect newsletter and quiz forms to real APIs.
- Build CMS integrations for blog posts and resource guides.
- Add e-commerce functionality (cart, checkout, subscriptions).
- Expand accessibility testing and automated quality gates.
