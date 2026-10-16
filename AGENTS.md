# Prototype Instructions

## DYC user preferences

- Recovered 2026-10-16 from the latest colleague Vercel deployment `dpl_83PbUDtpdY6M31xKdtbjBKuZtghM`. This deployment is the new local base. The user approved copying this recovered version into GitHub `main` and pushing it to trigger Vercel deployment on 2026-10-16. Preserve the colleague’s WhatsApp flow, content, photos and animations.
- Confirmed address: “Les Orangeries Offices, 451 Bd Laymoun, Immeuble A N°142, Casablanca 20230”. Use `src/data/siteConfig.js` for contact details, map URLs, visible footer address and structured metadata.
- Favicon uses the compact circular DYC mark from `public/assets/logo.png`, matching the supplied header screenshot. Keep the shared header logo unchanged.
- The group workshop scene uses `public/assets/team-atelier-dyc-distinct.png`, the approved image with distinct faces; retain frames, gradients and animation.

- Academy “Un espace pensé pour la créativité” uses the unmodified 2026-10-06 21:43:03 room photo (`public/assets/academie/espace-academie-ilot.jpg`). Preserve existing frame dimensions and responsive crop, superseding the prior photo for this block only (2026-10-06).

- Reservation, event, company quote and enquiry CTAs open WhatsApp chat at +212668814932, with contextual prefilled text. No reservation modal or Entreprises lead form; only Contact keeps its form. Informational navigation and video controls retain their purpose (2026-10-06).

- Layer Cake “Nous nous occupons de tout” uses `public/assets/layer-cake-ingredients-premium.png`, an AI-restored flour/eggs/whisk still-life based on the user’s 2026-10-06 21:39:53 reference. Keep the existing HTML signature “Des ingrédients d’exception”; no lettering embedded in the image. Change only this included block (2026-10-06).

- Layer Cake “Une expérience gourmande et créative” uses `public/assets/layer-cake-chef-lissage.png`, AI-restored from the supplied 2026-10-06 21:38:50 screenshot of a chef frosting a cake. Replace only this introduction image, preserve section layout and other photo assignments (2026-10-06).

- Cake Design programme third column now contains both supplied room photographs stacked vertically, beside Jour 1 and Jour 2. This supersedes the single-photo preference (2026-10-06).

- Cake Design programme uses three columns on desktop: Jour 1, Jour 2, and a single frontal academy room photo (`salle-programme-vue-frontale.jpg`). This replaces the two-photo gallery. Tablet uses two day columns with photo below; mobile stacks all three (2026-10-06).

- Cake Design programme section includes the two unmodified academy room photos supplied 2026-10-06 at 21:30:46 and 21:31:07 in a staggered two-photo gallery below the text-only day cards. Keep wall logos visible and stack photos on mobile (2026-10-06).

- Cake Design programme cards reveal once with staggered fade/lift when the section enters view. Mouse hover lifts the card with a bronze shadow and subtly animates its day number. Respect reduced motion and keep cards non-interactive (2026-10-06).

- Cake Design “Bien plus qu’un gâteau” uses `public/assets/cake-design/noel-cadeaux.jpg` (Christmas cake with gifts and tree), replacing the blue draped cake only in this takeaways block. Preserve the photo frame and all other image assignments (2026-10-06).

- Cake Design programme Jour 1 and Jour 2 cards have no photographs. Use spacious cream/bronze editorial cards, day labels, large decorative day numbers, headings and separated checklist lessons. This supersedes prior day-photo preferences (2026-10-06).

- Cake Design Jour 1 uses `public/assets/cake-design/anniversaire-dentiste-angle-jour1.png`, an AI-generated elevated three-quarter view of the same dental birthday cake shown in Jour 2. It replaces the Christmas cake for Jour 1; preserve its existing frame and Jour 2 image (2026-10-06).

- Layer Cake detail hero uses the generated continuous landscape photograph `public/assets/layer-cake-hero-panorama.png`, inspired by the user’s ivory cake. Fill the entire hero with cover, no split solid panel, preserve readable gradient and sharp cake details. Other cards also use this dark photograph with a 65% horizontal focal position (2026-10-06).

- Across the entire site, use “Attestation de formation” for the training document. Do not use certificate wording in visible copy; retain existing icons (2026-10-06).

- Layer Cake hero text must start below the shared header logo with a clear gap on desktop and tablet. Keep the mobile content flow and reserve enough hero height for the facts (2026-10-06).

- The Entreprises large “Un lieu d’exception pour vos équipes” photo also uses `public/assets/academie/histoire-salle-dyc.jpg` (user’s `20261002_135040.jpg`). Preserve the landscape frame and overlaid signature, with the DYC wall sign visible (`center 20%` focal position) (2026-10-04).

- The Entreprises “Privatisation” occasion card uses the user’s real room photo `20261002_135040.jpg`, already saved as `public/assets/academie/histoire-salle-dyc.jpg`, keeping its frame and the DYC wall sign visible with a `center 35%` focal position (2026-10-04).

- The Entreprises “Séminaires” occasion card uses the user’s real room photo `20261002_135226.jpg`, copied unchanged to `public/assets/entreprises/seminaires-salle-dyc.jpg`, with the existing card frame and a `center 60%` focal position (2026-10-04).

- Entreprises timeline photos: “Accueil” now shows a practical chocolate workshop (pralines/mendiants) in the same DYC academy setting (`public/assets/entreprises/atelier-chocolat-accueil-dyc.jpg`), replacing the previous coffee reception. “Photo & souvenirs” keeps the generated group portrait (`photo-souvenirs-dyc.jpg`); both images are based on the user's real academy room photo `20261002_135243.jpg`. “Dégustation” uses their unmodified WhatsApp photo of faceted pralines (`degustation-pralines-dyc.jpg`). Prompts/provenance are in `docs/entreprises-visuels.json` (2026-10-04).

- Entreprises’ enquiry form is limited to five visible fields: Nom, Prénom, Email, Téléphone, Société. Present them in a compact warm card (two columns on desktop, one on mobile), with company full-width and “Être recontacté” CTA. Preserve the experience selected by preceding CTAs in the submission context and combine first/last names for the existing delivery flow (2026-10-04).

- Entreprises’ six timeline stages appear in a short staggered fade/lift the first time the section enters view. Hover gently zooms each photo inside its fixed frame and lifts its numbered badge with a bronze highlight. Keep the timeline connectors fixed and respect reduced-motion settings (2026-10-04).

- Entreprises benefits “Créer”, “Collaborer”, “Partager”, and “Repartir avec” animate on hover: the circular icon lifts and enlarges slightly, changes to bronze with a light icon and soft shadow, and the icon tilts gently. Keep dividers fixed and respect reduced motion (2026-10-04).

- On `/entreprises`, keep “Créez ensemble. Soudez vos équipes autrement.” smaller: desktop heading scale `clamp(36px, 3.3vw, 54px)`, 38px on tablet and `clamp(32px, 8.5vw, 40px)` on mobile (2026-10-04).

- Chocolat’s four “Des souvenirs gourmands” items animate individually on hover: slight lift, cream highlight and soft shadow on the circular icon, gentle icon tilt/zoom, and chocolate-coloured quantity. Preserve dimensions, static semantics, touch behaviour and reduced-motion support (2026-10-04).

- Chocolat’s five programme steps animate individually on mouse hover: numbered badges gently rise and enlarge with a chocolate fill, while headings lift slightly and turn chocolate. Keep the connecting timeline fixed, preserve static list semantics, and respect reduced motion (2026-10-04).

- On the Chocolat — Pralines & Mendiants detail page, keep the hero eyebrow and title below the shared header logo with a clear gap. Use a bounded desktop/tablet top offset and preserve the mobile content flow (2026-10-04).

- Cake Design’s “Bien plus qu’un gâteau” section stays compact: narrower left photo column (30% on desktop), portrait image capped at 360px wide (280px on mobile), with its complete natural aspect ratio and no fixed section height. Give the checklist the recovered width and preserve its hover effects (2026-10-04).

- The homepage benefits strip uses “Attestation de formation” instead of “Attestation de formation”, keeping the certificate icon (2026-10-04).

- Cake Design’s “Tout est inclus” benefits show “Attestation de formation” with the certificate icon in place of “Tablier pendant la formation”; preserve the existing hover animation (2026-10-04).

- The Cake Design “Jour 1 — Les bases du Cake Design” card uses `public/assets/cake-design/noel-cadeaux.jpg`, the AI-retouched logo-free version of the user’s `WhatsApp Image 2026-10-04 at 12.36.37 (1).jpeg` (identical to the previously supplied original). Preserve the card’s photo frame dimensions and keep the cake visible (2026-10-04).

- Cake Design’s introduction uses 65% width for text and 35% for the portrait photo on desktop. Keep the complete cake visible at its natural aspect ratio, at this smaller scale. Retain the stacked mobile layout (2026-10-04).

- Cake Design hero facts (duration, level, capacity, minimum age) animate individually on mouse hover with a gentle lift, small icon tilt/zoom and subtle warm highlight. Preserve layout and reduced-motion support (2026-10-04).

- Do not display breadcrumbs on any site page, including workshop detail hero sections (2026-10-04).

- Cake Design’s audience cards (“Débutants”, “Passionnés”, “Cake designers”, “Futurs entrepreneurs”) lift gently on hover, with a warm shadow, subtle background tint and small icon tilt/zoom. Keep their layout and non-interactive semantics; respect reduced motion (2026-10-04).

- Cake Design’s “Vous repartez avec” checklist has individual hover animation: the label shifts slightly right and the round check badge enlarges gently with a bronze fill and light check. Keep the list non-interactive and respect reduced motion (2026-10-04).

- Cake Design’s “Tout est inclus” benefits animate individually on mouse hover: a gentle lift, a small icon tilt/zoom and a subtle cream highlight. Preserve the layout, keep the items non-interactive, and respect reduced-motion preferences (2026-10-04).

- The blue draped cake in Cake Design’s introduction must show its top and base completely. Match that photo frame to its portrait aspect ratio on desktop and mobile instead of cropping it into a landscape box; keep the image filling the frame (2026-10-04).

- Cake Design’s hero photo must blend progressively into the dark text panel with a soft horizontal gradient, never a hard vertical seam. Keep this blend fixed and preserve photo framing; mobile uses the full-width photo with its readability overlay (2026-10-04).

- Cake Design’s “Tout pour créer sans limites” image uses `public/assets/cake-design/creation-oiseaux-fleurs.jpg` (user’s WhatsApp photo supplied 2026-10-04 at 12:47:50). Fill the frame and center the flowers and birds; allow enough frame height to keep the decorative subject visible.

- Cake Design photos must fill their existing frames edge to edge on desktop and mobile, using `object-fit: cover` and individual focal positions. Do not use `contain` or introduce empty bands around these photos (2026-10-04).

- Cake Design hero booking controls must be compact with a transparent background so the cake photo remains visible. Keep the price and reservation CTA; show duration, capacity, level and minimum age in the existing hero facts only, not repeated inside the booking box (2026-10-04).

- On the Cake Design detail page, replace the former repeated ivory cake photo with the five user-supplied WhatsApp photos from 2026-10-04, enhanced using AI and with overlaid DYC logos removed. Final website assets are in `public/assets/cake-design/`; retain edible decorations (including the blue bird). Show the whole cakes where possible. This supersedes the older ivory-cake-only preference for this detail page, not the catalogue or global navigation.

- On `/academie`, the “Un espace pensé pour la créativité” section directly follows the philosophy block without a top gap. Place its photo on the left and copy on the right on desktop; stack photo then copy on mobile (2026-10-04).

- The `/academie` “Un espace pensé pour la créativité” photo uses the user-supplied `20261002_135243.jpg` (2026-10-04), saved as `public/assets/academie/espace-academie-dyc.jpg`. Preserve the section layout and frame, with the wall sign visible.

- On `/academie`, the room photo in the “Notre histoire” gallery uses the user-supplied 2026-10-04 photograph (`public/assets/academie/histoire-salle-dyc.jpg`, original `20261002_135040.jpg`). Preserve the existing frame and keep the DYC wall sign visible in the crop.

- All pages use `SiteLayout` with the official shared `Header` and `Footer`. Preserve the Home visually when extending the site. `/academie` follows the supplied 2026-09-29 academy mockup, with existing Home typography, tokens, buttons, hover effects and responsive breakpoints. The official footer invitation supplies the final creation CTA; do not duplicate it.

- “Groupes & Entreprises” is a direct navigation link, without a submenu or dropdown chevron.
- On the Entreprises page, use “Teambuilding sur mesure” for the selectable occasion and form option; the related CTAs must preselect that same option.

- The global “Ateliers & Masterclasses” navigation item opens a three-card ivory mega-menu on desktop (Layer Cake, Cake Design, Chocolat) using the existing workshop images. On tablet/mobile, expose these as three links in the mobile navigation. Keep the rest of the shared header, footer, and Home visually unchanged.

- `/ateliers-masterclasses` follows the supplied 2026-09-29 catalogue mockup. Keep the three workshop programmes in one data source shared by the catalogue, filters, mega-menu, Home cards and detail pages. Reuse the existing global Header and Footer, including the Footer’s final reservation invitation; do not duplicate them within catalogue pages.

- `/ateliers-masterclasses/layer-cake` follows the supplied 2026-09-29 detail mockup. Its sections are data-driven so future programme details can reuse the layout. Preserve the existing short detail pages until their full content is supplied. The Layer Cake mockup explicitly includes a dark raspberry reservation band before the unchanged global Footer.
- Whenever Layer Cake is illustrated as a finished cake, use the user-supplied ivory cake with blue decorations (`public/assets/layer-cake-hero-panorama.png`, generated from the WhatsApp photo supplied 2026-10-06 at 21:16:06) across Home, catalogue, mega-menu, Entreprises and detail page. This replaces the previous raspberry cake preference. Preserve existing frames and use the generated dark studio background with responsive cover fitting; never substitute mockup crops.
- Whenever Cake Design is illustrated with a cake, use the supplied white cake with matching ivory flowers (`public/assets/cake-design-fleurs.png`) across its cards, menu, and detail page.

- Academy and groups photos zoom very slowly from load and on hover; preserve their frames, signatures and fixed blending gradients.

- Workshop cards lift gently with a warm shadow on hover; their photos visibly zoom 14% over 12 seconds from page load, plus a responsive 6% hover zoom. Respect reduced-motion.

- Show “Plus qu’un atelier, une expérience” as a handwritten signature in the hero’s lower-right corner, keeping it clear of the CTA and animation pause control.

- Homepage action buttons share the hero “Découvrir nos ateliers” cream pill style with expanding dark green hover, light text and animated arrow. Keep compact header sizes on mobile and preserve navigation/control roles.

- Hero photo must appear without any sweep/wipe effect at load. Keep the extremely slow continuous zoom/dezoom (120 seconds each direction), with subtle pointer motion on the right half. Keep navigation and copy steady, respect reduced-motion, and allow pausing.

- The groups/events section should have larger, well-spaced copy and a cream gradient blending the supplied group photo into its text panel; avoid a hard dividing edge.

- Keep the workshop benefits readable: larger high-contrast labels, crisp vector icons, and a balanced responsive layout rather than tiny raster icons and text.
- Whenever a benefits strip lists chefs pâtissiers expérimentés, petits groupes, and professional equipment or ingredients, include a matching “Attestation de formation” icon and label without removing the other benefits.

- Workshop card titles and descriptions must use natural text flow without forced line breaks. Keep titles on one line where space permits, with larger, readable descriptions and prices. Card copy must grow with its content rather than use a fixed height.

- Use the official logo supplied on 2026-09-29 (`public/assets/logo-dyc-officiel.jpeg`).
- Use the latest supplied hero photo with the DYC wall logo and floral cake (`public/assets/hero-atelier-dyc.png`, supplied 2026-09-29 at 22:02), preserving the existing zoom and hero layout.
- Hero CTAs should be large and readable, with a distinctive colour-reveal hover and animated icons. Respect reduced-motion preferences and retain useful touch target sizes.
- Align the header logo to the slider text's left edge using a shared horizontal gutter. Center the navigation links as a group within the available header space, with a small fixed gap; do not distribute links with space-between. Preserve larger navigation text and visible top padding (latest user correction on 2026-09-29).

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
