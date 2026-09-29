# DYC — contrôle visuel

Source : `qa/reference.png`, JPEG fourni de 1024 × 1536 pixels.
Implémentation : http://127.0.0.1:4330/
État : accueil FR, sans panneau ouvert.

## Preuves
- `qa/desktop-final.png` : assemblage de deux captures navigateur à largeur CSS 1024, DPR 1. Haut à scroll 0, bas à scroll 735.5 (arrondi 736 pour assemblage). Pas de redimensionnement des régions.
- `qa/comparison-final.png` : référence et implémentation côte à côte.
- `qa/focus-final.png` : détail titres, cartes, typographie, avantages.
- `qa/mobile-final.png` : contrôle mobile 390 × 844. Aucune maquette mobile fournie ; adaptation originale.
- L'API de capture fullPage produisait un assemblage incorrect ; ses captures v1/v2 ne servent pas à la validation. Les captures viewport et mesures DOM servent de preuve.

## Historique
1. Hauteur des cartes et retour à la ligne du chocolat (P2), décalant les sections de 14 px : tailles typographiques et hauteurs corrigées.
2. Fond rectangulaire de l’illustration et icônes (P2) : extraction alpha et ajustement de l’opacité.
3. Espaces manquants après retours de ligne cachés sur mobile (P2) : espaces explicites ajoutés.
4. Erreur React transitoire pendant ajout de dépendance et hot reload : rechargement complet ; aucune nouvelle occurrence dans les journaux après rechargement.

## Surfaces vérifiées
- Espacement : repères verticaux exacts à 1024 px : hero 0–401 ; ateliers 401–898 ; académie 898–1158 ; groupes 1158–1356 ; citation 1356–1494 ; fin 1536.
- Typographie : Times New Roman, Montserrat et Arial ; approches visuelles, polices sources non fournies. L'épaisseur optique et les métriques diffèrent encore de la référence.
- Couleurs : ivoire, noir chaud, beige et taupe reproduits ; fond uni moins texturé que JPEG.
- Assets : photographies des cartes, académie, groupe et citation extraites du JPEG. Hero nettoyé par génération et illustration détourée : différences visibles de détails et de cadrage. Le logo est extrait du JPEG, donc définition limitée.
- Contenu : intitulés, descriptions, durées, tarifs et citation repris.

## Vérifications fonctionnelles
Navigation par ancres, menu mobile, ouverture/fermeture des panneaux, choix d'atelier, validation navigateur des champs, parcours d'aperçu de demande et bouton événement testés dans le navigateur. Aucun débordement horizontal mesuré à 1024 et 390 px. Build de production réussi.
Les réservations ne sont pas envoyées ; la vidéo et les versions AR/EN sont signalées comme indisponibles. Aucun service réel inventé.

## Écarts restants
- [P2 pour l'exigence pixel parfait strict] Hero et illustration restaurés ne sont pas pixel-identiques au JPEG. Remplacer par les assets natifs du design pour une fidélité exacte.
- [P2 pour l'exigence pixel parfait strict] Police source exacte non identifiée ; les métriques sont proches, mais la graisse optique diffère.
- [P3] Texture de fond et petits écarts de boutons/pictogrammes raster.

Le prototype est utilisable et comparé visuellement, mais ne doit pas être présenté comme une reproduction pixel-identique achevée.

final result: blocked
