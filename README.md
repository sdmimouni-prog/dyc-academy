# DYC Culinary Arts Academy

Site React 19 / Vite 6 — projet Vercel `richmediama/dyc-academy`.

## Environnements

| Environnement | Adresse | Commande |
| --- | --- | --- |
| Local | http://127.0.0.1:4330/academie | `npm run dev` |
| Build local | http://127.0.0.1:4331/academie | `npm run build` puis `npm run preview` |
| Preview Vercel | https://dyc-academy-dev.vercel.app/academie | `npm run deploy:dev` |
| Production | https://dyc-academy.vercel.app/academie | `npm run deploy:prod` |

## Installation

Utiliser Node.js **24.x**, comme sur Vercel (`.nvmrc`, `engines.node`).

```sh
nvm use
npm ci
npm run dev
```

Le serveur local écoute sur `127.0.0.1`, avec un port fixe et rechargement automatique.

## Validation et déploiement

```sh
npm run check
npm run deploy:dev
# Après validation de la Preview :
npm run deploy:prod
```

Sur une nouvelle machine, rattacher le dossier au projet existant :

```sh
npx --yes vercel@59.23.2 link --project dyc-academy --scope richmediama
```

Vercel exécute `npm ci` puis `npm run check` : compilation et tests de routage/packaging Sites, avant publication de `dist/client`. Le routage SPA préserve les accès directs aux pages.

`deploy:dev` crée une Preview distincte. L’URL stable de développement est un alias manuel : après chaque nouvelle Preview validée, l’actualiser avec l’URL retournée par la CLI :

```sh
npx --yes vercel@59.23.2 alias set <URL_PREVIEW> dyc-academy-dev.vercel.app --scope richmediama
```

La protection Vercel de la Preview est conservée : une connexion Vercel autorisée peut être nécessaire. `deploy:prod` remplace immédiatement la production. La branche de production est `main` ; une fusion peut déclencher un déploiement via l’intégration Git Vercel. Garder les changements en cours sur une branche de travail.

Le workflow `.github/workflows/ci.yml` vérifiera les pushes et pull requests après publication sur GitHub ; aucune protection de branche n’est configurée par ce fichier. Pour restaurer une version, utiliser Instant Rollback sur un précédent déploiement de production dans Vercel.

## Configuration et limites

Aucune variable applicative ni base de données requise actuellement. Voir `.env.example`. Les fichiers `.env.local` et `.vercel/` sont ignorés par Git. Les fichiers d’environnement sont exclus des uploads CLI. Les variables `VITE_*` sont publiques : aucun secret ne doit y être placé.

Coordonnées et formulaires : `src/data/siteConfig.js`. Sans `formEndpoint`, les formulaires préparent un brouillon dans la messagerie du visiteur vers `contact@dycacademy.ma`. Aucun envoi serveur, paiement ou stockage de demandes n’est configuré. Le média vidéo reste à fournir.

UI : `src/` ; médias : `public/assets`. Les fichiers de compatibilité Sites sont conservés.

## État de préparation — 4 octobre 2026

- Développement : Preview `dpl_97JZZ7nWVU6DVyHhKH8xLebEEEVH`, alias `dyc-academy-dev.vercel.app`, compilation et vérifications Vercel réussies.
- Production publiée le 2026-10-04 : `dpl_4xHFXQLMyQzLC3xtQ4itwBGLha8g`, état Ready, alias `https://dyc-academy.vercel.app`. Build Vercel et 4 tests Sites réussis ; nouveaux visuels Entreprises et adresse Contact vérifiés en ligne. Déploiement CLI depuis la copie de travail, sans fusion Git.
- Configuration de déploiement et workflow CI préparés dans le dossier local ; leur publication GitHub reste à effectuer.

## Vérification — 6 octobre 2026

Production mise à jour le 6 octobre 2026 : déploiement `dpl_C4FSbHft45FYfyQBa9YaC2grZDeG`, état READY, alias `https://dyc-academy.vercel.app`. Inclut les nouveaux visuels, le programme Cake Design, les attestations et les CTA WhatsApp. Compilation locale et 4 tests réussis avant publication. Publication CLI depuis la copie de travail.

- Environnement local démarré sur `http://127.0.0.1:4330/academie` avec Node **24.20.0** ; réponse HTTP 200.
- `npm run check` réussi avec Node 24 : build de production et **4 tests réussis**. Les fichiers de packaging Sites sont présents.
- Production existante : réponse HTTP 200 sur `/academie`.
- Développement Vercel : redirection vers la connexion SSO Vercel, conformément à la protection Preview.
- Aucun nouveau déploiement effectué pendant cette vérification. Les modifications locales existantes restent à publier dans GitHub ; l'exécution distante du workflow CI n'a pas été vérifiée.
