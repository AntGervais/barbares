# BARBARES - Punk / Brutalist / Underground Website

Site vitrine pour le restaurant et bar à vin **BARBARES**.
Design "Punk" : Brut, contrasté, bruyant et vivant.

## � Tech Stack

- **Framework** : [Astro 5](https://astro.build/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **CMS** : [Decap CMS](https://decapcms.org/) (anciennement Netlify CMS)
- **Content** : Markdown (Content Collections)

## 🚀 Lancer le serveur de développement

```bash
npm run dev
```
Le site sera accessible sur `http://localhost:4321`.

## � Guide Développeur

### Pré-requis
- **Node.js** : Version 18 ou supérieure.
- **NPM** : Inclus avec Node.js.

### Commandes Utiles

| Commande | Description |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement local avec Hot Module Replacement (HMR). |
| `npm run build` | Compile le site pour la production dans le dossier `dist/`. |
| `npm run preview` | Prévisualise la version de production locale (après un build). |
| `npm run astro ...` | Accès aux commandes CLI Astro (ex: `astro add`, `astro check`). |

### Structure du Projet

```
/
├── public/
│   ├── admin/          # Configuration Decap CMS
│   └── images/         # Assets statiques (uploads CMS)
├── src/
│   ├── content/        # Collections de contenu (Markdown)
│   │   ├── menu/       # Items du menu
│   │   └── vins/       # Carte des vins
│   ├── layouts/        # Layouts globaux (Layout.astro)
│   ├── pages/          # Pages du site (index.astro)
│   └── styles/         # CSS Global & Tailwind Config
└── astro.config.mjs    # Configuration Astro
```

### Note sur Tailwind CSS v4
Ce projet utilise **Tailwind CSS v4**.
Contrairement à la v3, la configuration se fait principalement en CSS pur dans `src/styles/global.css` via la directive `@theme`.
Il n'y a pas de fichier `tailwind.config.js` classique.

Exemple de modification de thème :
```css
/* src/styles/global.css */
@theme {
  --color-neon-red: #FF0D0A; /* Modifier ici */
  /* ... */
}
```


## 📝 Gestion du Contenu (CMS)

Le contenu est géré via des fichiers Markdown dans `src/content/`.
Vous pouvez éditer ces fichiers manuellement ou utiliser l'interface d'administration Decap CMS.

### Accès Admin
Pour accéder au CMS en local ou en production :
`http://votre-site.com/admin`

> **Note** : En local, Decap CMS peut nécessiter un proxy backend si vous n'utilisez pas Netlify Identity. Pour le développement simple, l'édition directe des fichiers `.md` est recommandée.

### Collections
- **Menu** (`src/content/menu/`) : Plats et entrées.
    - Champs : Titre, Prix, Description, Catégorie, Ordre.
- **Vins** (`src/content/vins/`) : Carte des vins.
    - Champs : Nom, Domaine, Région, Type (Rouge, Blanc, etc.), Prix (Verre/Bouteille), Nature (Oui/Non).

## 🎨 Design System & Personnalisation

Le design est contrôlé via Tailwind CSS v4 et des variables CSS globales.

### Couleurs (Définies dans `src/styles/global.css`)
- `neon-red` (#FF0D0A) : Actions, accents, énergie.
- `blood-red` (#660000) : Fonds, profondeur.
- `deep-black` (#000000) : Structure, texte principal.
- `paper` (#F5F5F0) : Contenu textuel, contraste.

### Typographie
- **Titres** : `Anton` (Uppercase, Impact).
- **Texte** : `Inter` (Lisibilité).
- **Technique** : `Courier Prime` (Détails, Prix, Vibe "Machine à écrire").

### Effets Spéciaux
- **Grain** : Overlay de bruit SVG fixe (`.grain` dans `Layout.astro`).
- **Glitch** : Animation CSS sur les boutons au survol (`.btn-punk`).
- **Target** : Élément graphique rotatif en fond (`.target-bg`).
- **Marquee** : Bandeau défilant infini.

## � Build & Déploiement

Pour générer la version de production :

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers statiques prêts à être déployés.

**Hébergement recommandé** : [Netlify](https://www.netlify.com/) (pour l'intégration native avec Decap CMS Identity).


