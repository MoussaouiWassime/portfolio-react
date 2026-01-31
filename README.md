# Portfolio React (React + TypeScript + Vite)

Ce dépôt contient un portfolio personnel réalisé avec React et TypeScript, construit et servi par Vite.

## Technologies utilisées

- React (TypeScript)
- Vite
- Tailwind CSS pour le style
- Framer Motion pour les animations
- EmailJS pour l'envoi de mails depuis le navigateur
- Lucide-react pour les icônes
- ESLint pour l'analyse statique

Les dépendances principales se trouvent dans `package.json`.

## Arborescence (sélection)

- `index.html` — point d'entrée HTML
- `src/main.tsx` — montage de l'application
- `src/App.tsx` — composant racine
- `src/components/` — composants React (Navbar, Hero, Skills, Projects, Contact, Footer...)
- `src/data/` — données (liste de projets, compétences, ...)
- `src/assets/` et `public/` — images et fichiers statiques (CV, captures de projets...)
- `vite.config.ts` — configuration Vite
- `tsconfig*.json` — configuration TypeScript
- `eslint.config.js` — configuration ESLint

## Prérequis

- Node.js (recommandé : 16.x ou 18.x)
- npm (ou yarn / pnpm)

Vérifier les versions (PowerShell) :

```powershell
node -v
npm -v
```

## Installation

Commencez par cloner le dépôt :

```powershell
git clone https://github.com/MoussaouiWassime/portfolio-react
cd portfolio-react
```

Depuis la racine du projet :

```powershell
npm install
```

## Scripts utiles

- `npm run dev` — démarre Vite en mode développement
- `npm run build` — construit l'application pour la production (exécute `tsc -b` puis `vite build`)
- `npm run preview` — prévisualise le build de production localement
- `npm run lint` — lance ESLint sur le projet

## Démarrer en développement

```powershell
npm run dev
```

Ouvrez l'URL indiquée par Vite (typ. `http://localhost:5173`).

## Construire et prévisualiser la production

```powershell
npm run build
npm run preview
```

Le build est généré dans le dossier `dist`.

## Déploiement

Le contenu du dossier `dist` est un site statique prêt à être déployé sur :
- Vercel
- Netlify
- GitHub Pages (après build)
- Surge, Firebase Hosting, etc.

Pour Vercel/Netlify, reliez simplement le dépôt et utilisez le script de build par défaut (`npm run build`).

Ce portfolio est déployé sur Vercel : https://moussaoui-wassime.com/

## Comment personnaliser

- Ajouter un projet : éditer `src/data/projects.ts`.
- Ajouter une compétence : éditer `src/data/skills.ts`.
- Ajouter/éditer un composant : créer/modifier un fichier dans `src/components/`.
- Les assets (images, CV) sont dans `public/` — utilisez des chemins relatifs (ex: `/CV%20Moussaoui%20Wassime.pdf`).

## Dépannage rapide

- Problème d'installation : supprimer `node_modules` et `package-lock.json` puis réinstaller :

```powershell
rm -r node_modules; rm package-lock.json; npm install
```

- Port déjà utilisé :

```powershell
npm run dev -- --port 3000
```

