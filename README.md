# Portfolio

## Mettre en ligne (GitHub Pages)
1. Crée un dépôt public sur github.com (par ex. `portfolio`).
2. Envoie tous ces fichiers à la racine du dépôt (bouton Add file, puis Upload files).
3. Settings, Pages, Source : Deploy from a branch, branche `main`, dossier `/ (root)`, Save.
4. Après une minute, le site est sur `https://TON-PSEUDO.github.io/portfolio/`.

## Ajouter des images à un projet existant
1. Glisse tes images dans `images/<id-du-projet>/` (par ex. `images/creche/04.jpg`).
2. Dans `projects.js`, ajoute son chemin à la liste `images` du projet.

## Ajouter un nouveau projet
1. Crée le dossier `images/mon-projet/` et mets-y `cover.jpg` et tes images.
2. Dans `projects.js`, copie un bloc de projet, change `id`, `title`, `year`, `type`, `place`, `text`, `cover` et `images`.
