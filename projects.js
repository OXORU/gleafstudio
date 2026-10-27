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
    place: "Paris",
    text: "Deux ou trois phrases : le site, l'intention, la structure, ce qui rend le projet singulier.",
    cover: "images/centre-aquatique/cover.jpg",
    images: [
      "images/centre-aquatique/01.jpg",
      "images/centre-aquatique/02.jpg",
      "images/centre-aquatique/03.jpg",
      "images/centre-aquatique/04.jpg"
    ]
  },
  {
    id: "creche",
    title: "Crèche",
    year: "2025",
    type: "Équipement petite enfance",
    place: "Paris",
    text: "Présentation du projet.",
    cover: "images/creche/cover.jpg",
    images: ["images/creche/01.jpg", "images/creche/02.jpg", "images/creche/03.jpg"]
  },
  {
    id: "atelier",
    title: "Atelier",
    year: "2024",
    type: "Réhabilitation",
    place: "Paris",
    text: "Présentation du projet.",
    cover: "images/atelier/cover.jpg",
    images: ["images/atelier/01.jpg", "images/atelier/02.jpg"]
  }
];
