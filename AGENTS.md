# Prototype Instructions

## DYC user preferences

- All pages use `SiteLayout` with the official shared `Header` and `Footer`. Preserve the Home visually when extending the site. `/academie` follows the supplied 2026-09-29 academy mockup, with existing Home typography, tokens, buttons, hover effects and responsive breakpoints. The official footer invitation supplies the final creation CTA; do not duplicate it.

- “Groupes & Entreprises” is a direct navigation link, without a submenu or dropdown chevron.

- The global “Ateliers & Masterclasses” navigation item opens a three-card ivory mega-menu on desktop (Layer Cake, Cake Design, Chocolat) using the existing workshop images. On tablet/mobile, expose these as three links in the mobile navigation. Keep the rest of the shared header, footer, and Home visually unchanged.

- `/ateliers-masterclasses` follows the supplied 2026-09-29 catalogue mockup. Keep the three workshop programmes in one data source shared by the catalogue, filters, mega-menu, Home cards and detail pages. Reuse the existing global Header and Footer, including the Footer’s final reservation invitation; do not duplicate them within catalogue pages.

- `/ateliers-masterclasses/layer-cake` follows the supplied 2026-09-29 detail mockup. Its sections are data-driven so future programme details can reuse the layout. Preserve the existing short detail pages until their full content is supplied. The Layer Cake mockup explicitly includes a dark raspberry reservation band before the unchanged global Footer.

- Academy and groups photos zoom very slowly from load and on hover; preserve their frames, signatures and fixed blending gradients.

- Workshop cards lift gently with a warm shadow on hover; their photos visibly zoom 14% over 12 seconds from page load, plus a responsive 6% hover zoom. Respect reduced-motion.

- Show “Plus qu’un atelier, une expérience” as a handwritten signature in the hero’s lower-right corner, keeping it clear of the CTA and animation pause control.

- Homepage action buttons share the hero “Découvrir nos ateliers” cream pill style with expanding dark green hover, light text and animated arrow. Keep compact header sizes on mobile and preserve navigation/control roles.

- Hero photo must appear without any sweep/wipe effect at load. Keep the extremely slow continuous zoom/dezoom (120 seconds each direction), with subtle pointer motion on the right half. Keep navigation and copy steady, respect reduced-motion, and allow pausing.

- The groups/events section should have larger, well-spaced copy and a cream gradient blending the supplied group photo into its text panel; avoid a hard dividing edge.

- Keep the workshop benefits readable: larger high-contrast labels, crisp vector icons, and a balanced responsive layout rather than tiny raster icons and text.
- Whenever a benefits strip lists chefs pâtissiers expérimentés, petits groupes, and professional equipment or ingredients, include a matching “Certificats de formation” icon and label without removing the other benefits.

- Workshop card titles and descriptions must use natural text flow without forced line breaks. Keep titles on one line where space permits, with larger, readable descriptions and prices. Card copy must grow with its content rather than use a fixed height.

- Use the official logo supplied on 2026-09-29 (`public/assets/logo-dyc-officiel.jpeg`).
- Use the latest supplied hero photo with the DYC wall logo and floral cake (`public/assets/hero-atelier-dyc.png`, supplied 2026-09-29 at 22:02), preserving the existing zoom and hero layout.
- Hero CTAs should be large and readable, with a distinctive colour-reveal hover and animated icons. Respect reduced-motion preferences and retain useful touch target sizes.
- Align the header logo to the slider text's left edge using a shared horizontal gutter. Center the navigation links as a group within the available header space, with a small fixed gap; do not distribute links with space-between. Preserve larger navigation text and visible top padding (latest user correction on 2026-09-29).

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
