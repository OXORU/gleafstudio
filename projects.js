/* ============================================================
   TES PROJETS — c'est le seul fichier à modifier pour ajouter
   ou retirer du contenu.

   Pour chaque projet :
   id      identifiant sans espace ni accent (sert d'adresse : #p-id)
   title   titre affiché
   year    année
   type    programme (équipement, logement, concours…)
   place   lieu
   text    court texte de présentation
   cover   image qui apparaît au survol dans la liste
   images  toutes les images de la page projet, dans l'ordre
           (la première s'affiche en pleine largeur)

   Les images vont dans le dossier images/<id>/ du dépôt.
   ============================================================ */
window.PROJECTS = [
  {
    id: "centre-aquatique",
    title: "Centre aquatique",
    year: "2026",
    type: "Équipement sportif",
    place: "Ivry, Zac Ivry-Confluence",
    text: "Deux ou trois phrases : le site, l'intention, la structure, ce qui rend le projet singulier.",
    cover: "images/centre-aquatique/cover.png",
    images: [
      "images/centre-aquatique/01.png",
      "images/centre-aquatique/02.png",
      "images/centre-aquatique/03.png",
      "images/centre-aquatique/04.png"
    ]
  },
  {
    id: "creche",
    title: "Crèche",
    year: "2025",
    type: "Équipement petite enfance",
    place: "Paris",
    text: "Présentation du projet.",
    cover: "images/creche/cover.png",
    images: ["images/creche/01.png", "images/creche/02.png", "images/creche/03.png"]
  },
  {
    id: "atelier",
    title: "Atelier",
    year: "2024",
    type: "Réhabilitation",
    place: "Paris",
    text: "Présentation du projet.",
    cover: "images/atelier/cover.png",
    images: ["images/atelier/01.png", "images/atelier/02.png"]
  },
     {
    id: "musee",
    title: "Musée Niki de Saint Phalle",
    year: "2024",
    type: "Equipement Culturel",
    place: "Paris 75006, Parc du Luxembourg",
    text: "Présentation du projet.",
    cover: "images/atelier/cover.png",
    images: ["images/atelier/01.png", "images/atelier/02.png"]
  }
];
];
