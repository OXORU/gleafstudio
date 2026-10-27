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

## Domaine personnalisé (gleafstudio.com)
Crée un fichier `CNAME` à la racine contenant ton domaine (uniquement une fois le domaine acheté et le DNS configuré). Chez ton registrar (là où tu as acheté le domaine), crée ces enregistrements DNS :
- 4 enregistrements A, nom `@` : 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- 4 enregistrements AAAA (facultatif, IPv6), nom `@` : 2606:50c0:8000::153, 2606:50c0:8001::153, 2606:50c0:8002::153, 2606:50c0:8003::153
- 1 enregistrement CNAME, nom `www`, valeur : TON-PSEUDO.github.io (sans le nom du dépôt)
Puis dans Settings, Pages : Custom domain = gleafstudio.com, Save, et coche Enforce HTTPS quand l'option apparaît.
