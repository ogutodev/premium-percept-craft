import espressoSite from "@/assets/espresso-club-site-web.webp";
import espressoBar from "@/assets/espresso-club-bar.webp";
import espressoBar2 from "@/assets/espresso-club-bar-2.webp";
import espressoTable from "@/assets/espresso-club-table.webp";
import espressoVins from "@/assets/espresso-club-vins.webp";
import espressoDecor from "@/assets/espresso-club-decor.webp";
import usgvEchauffement from "@/assets/us-geneve-ville-echauffement.webp";
import usgv17 from "@/assets/us-geneve-ville-17.webp";
import usgv11 from "@/assets/us-geneve-ville-11.webp";
import usgvNuit from "@/assets/us-geneve-ville-match-nuit.webp";
import usgvJoueur from "@/assets/us-geneve-ville-joueur.webp";
import usgvMaillot from "@/assets/us-geneve-ville-maillot.webp";
import usgvCourse from "@/assets/us-geneve-ville-course.webp";

export type Photo = { src: string; alt: string; w: number; h: number };

export type Project = {
  slug: string;
  name: string;
  service: string;
  location: string;
  /** Cover image URL (kept as a string for older pages). */
  cover: string;
  coverPhoto: Photo;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: string[];
  gallery: Photo[];
};

const L = (src: string, alt: string): Photo => ({ src, alt, w: 1400, h: 933 });
const P = (src: string, alt: string): Photo => ({ src, alt, w: 1100, h: 1650 });

export const projects: Project[] = [
  {
    slug: "espresso-club",
    name: "Espresso Club",
    service: "Branding, site web et réseaux sociaux",
    location: "Pâquis, Genève",
    cover: espressoSite,
    coverPhoto: { src: espressoSite, alt: "Page d’accueil du site de l’Espresso Club : salle sombre éclairée par des suspensions coniques et titre « Votre spot aux Pâquis »", w: 1600, h: 900 },
    challenge:
      "Donner à un bar-pizzeria des Pâquis une image à la hauteur de son ambiance, et une présence en ligne qui parle aussi bien aux habitués qu’à une clientèle internationale.",
    approach:
      "Repositionnement de la marque et direction visuelle chaleureuse et soignée. Site trilingue (français, portugais, anglais) avec carte, galerie et itinéraire. Gestion des réseaux sociaux et de la fiche Google Business Profile.",
    deliverables: [
      "Repositionnement de la marque",
      "Site web trilingue FR · PT · EN",
      "Gestion des réseaux sociaux",
      "Fiche Google Business Profile",
      "Photographie d’ambiance",
    ],
    results: [],
    gallery: [
      L(espressoBar, "Long comptoir en bois de l’Espresso Club sous une rangée de suspensions coniques beiges"),
      L(espressoBar2, "Comptoir courbe en bois avec suspensions blanches, bouteilles de vin et machines à espresso"),
      L(espressoTable, "Deux verres à vin vides et des couverts posés sur une serviette rouge"),
      L(espressoVins, "Rangée de bouteilles de vin rouge sur le comptoir, à côté d’un verre de vin blanc"),
      L(espressoDecor, "Mur noir décoré de photos encadrées de voitures anciennes et d’une applique"),
    ],
  },
  {
    slug: "us-geneve-ville",
    name: "US Genève-Ville",
    service: "Photographie et contenus réseaux sociaux",
    location: "Genève",
    cover: usgv17,
    coverPhoto: P(usgv17, "Joueur de l’US Genève-Ville portant le numéro 17 sur le terrain"),
    challenge:
      "Faire vivre un club amateur entre deux matchs, avec des contenus réguliers et une image cohérente sur les réseaux.",
    approach:
      "Couverture photo des matchs et des entraînements, visuels Match Day, résultats et classements pour Instagram et TikTok, dans l’identité rouge du club.",
    deliverables: ["Photographie de match", "Visuels Match Day", "Résultats et classements", "Contenus Instagram et TikTok"],
    results: [],
    gallery: [
      P(usgvEchauffement, "Joueurs de l’US Genève-Ville à l’échauffement avant le match"),
      P(usgv11, "Joueur portant le numéro 11 de l’US Genève-Ville en action"),
      P(usgvNuit, "Match de l’US Genève-Ville en nocturne sous les projecteurs"),
      P(usgvJoueur, "Portrait d’un joueur de l’US Genève-Ville sur le terrain"),
      P(usgvMaillot, "Détail du maillot de l’US Genève-Ville"),
      P(usgvCourse, "Joueur de l’US Genève-Ville en pleine course balle au pied"),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
