# DYC — L’Académie : contrôle d’intégration

Source : `/Users/salaheddinemimouni/Downloads/ChatGPT Image Sep 29, 2026, 11_03_09 PM.png` (952 × 1653).
Copie de référence : `qa/academie/reference.png`.
Page : http://127.0.0.1:4330/academie
Date : 2026-09-29.

## Architecture et charte

`App` sélectionne le contenu de `/` ou `/academie`, toujours rendu dans `SiteLayout` → `Header` + `main` + `Footer`. Une seule instance de chaque composant global est présente sur chaque route. `Arrow`, `Benefits` et les données ateliers sont partagés. Les couleurs et familles typographiques communes sont définies dans `styles.css` et utilisées sur les deux pages. Les boutons réutilisent les règles `.home-cta`, leurs hover et leur adaptation mobile.

Le header, le logo officiel et le footer de la Home priment sur leurs variantes dans la maquette, conformément à la demande. Le CTA final « Votre prochaine création commence ici. » appartient déjà au footer officiel : il est réutilisé, sans doublon. Ces différences de header/footer dans la comparaison sont intentionnelles.

## Preuves visuelles

- `qa/academie/desktop-final.png` : assemblage sans redimensionnement de trois captures viewport à 1440 × 1000 CSS px, DPR 1. Scrolls 0, 805.5 et 1605.5, arrondis au pixel lors de l’assemblage. Métadonnées : `captures.json`.
- `qa/academie/comparison-final.png` : maquette à gauche, implémentation à droite, échelle homogène. Détails : `comparison-top-final.png` et `comparison-lower-final.png`.
- `qa/academie/tablet-top.png`, `tablet-lower.png` : 1024 × 900 ; `tablet-768.png` : 768 × 900.
- `qa/academie/mobile-top.png`, `mobile-philosophy.png`, `mobile-space.png`, `mobile-footer.png` : 390 × 844. `mobile-320-top.png` : 320 × 844.
- Les captures fullPage initiales étaient mal assemblées par l’outil. Elles sont exclues de la validation ; seules les captures viewport servent de preuve.

## Corrections issues de la comparaison

1. Sections philosophie et espace trop hautes : espacements et corps du texte ajustés. À 1440 px : hero 514.28 px ; histoire 537.78 px ; avantages 123.98 px ; philosophie 405.47 px ; espace 378.95 px. Début du footer à 1960.46 px, correspondant au début du CTA de référence après mise à l’échelle.
2. Décoration latérale trop délimitée : masque progressif, couleur existante et opacité réduite.
3. Hero mobile : hauteur intrinsèque, texte et signature en flux pour éviter les chevauchements aux petites largeurs.
4. Citation : guillemet typographique, texte sélectionnable, figcaption directement dans figure.
5. Bouton histoire : modale dédiée et lien fonctionnel vers la philosophie. Boutons valeurs, visite et réservation reliés aux panneaux existants ou à leur variante pertinente.

## Vérifications

- Aucun débordement horizontal aux largeurs 1440, 1024, 768, 390 et 320 px. Aucune image non chargée, aucun texte coupé observé sur les captures vérifiées.
- Navigation Home → Académie et Académie → ateliers Home ; état actif du menu ; menu mobile ; modales histoire, valeurs, visite et réservation footer ; fermeture Escape et lien philosophie vérifiés dans le navigateur.
- Un rechargement direct de `/academie` fonctionne. Les réservations restent des aperçus locaux, comme sur la Home ; aucun envoi réel ajouté.
- Home : mesures avant/après strictement égales sur 14 régions, à 1280 et 390 px, pour position, taille, font-size, couleur, padding et gap. Preuve : `qa/academie/home-regression.json`. Images, animations et contenus Home conservés ; liens Académie raccordés à la nouvelle route.
- `npm run build` réussi. Aucune nouvelle erreur console après le rechargement final. Une ancienne erreur HMR pendant l’édition d’App.jsx reste dans l’historique, antérieure au build et aux contrôles finaux réussis.
- Relecture indépendante des captures : aucun défaut de layout, overflow ou lisibilité P0/P1/P2 constaté.

## Limites de fidélité restantes

- [P2 pour l’identité pixel par pixel] Les photos du hero et de la tarte ont été recréées d’après la référence pour disposer de fonds sans texte. Elles ne sont pas les originaux exacts. Les fichiers natifs restent nécessaires pour une identité photographique stricte.
- [P3] Les quatre photos de l’histoire et la grande photo intérieure sont extraites de la maquette fournie ; leur définition est limitée (213–568 px de large).
- [P3] Le fond philosophie utilise la couleur commune et le décor extrait ; la texture papier n’est pas identique.

L’intégration, la structure partagée, le responsive et la préservation de la Home sont validés. La qualification « pixel perfect » au sens d’identité exacte des photographies reste bloquée par les assets natifs manquants.

final result: blocked
