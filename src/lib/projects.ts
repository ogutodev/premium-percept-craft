import workWatch from "@/assets/work-watch.webp";
import workFashion from "@/assets/work-fashion.webp";
import workVilla from "@/assets/work-villa.webp";
import workNoir from "@/assets/work-noir.webp";
import feedRestaurant from "@/assets/feed-restaurant.webp";
import feedFood from "@/assets/feed-food.webp";
import feedBoutique from "@/assets/feed-boutique.webp";
import feedEditing from "@/assets/feed-editing.webp";

// Études de cas — remplacez les textes entre [crochets] par le contenu réel.
export type Project = {
  slug: string;
  name: string;
  service: string;
  location: string;
  cover: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: string[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "espresso-club",
    name: "Espresso Club",
    service: "Rebranding & gestion des réseaux sociaux",
    location: "Genève",
    cover: feedRestaurant,
    challenge: "[Décrivez le défi du client : situation de départ, image de marque, objectifs.]",
    approach: "[Décrivez l'approche de TRÍADE : stratégie, direction artistique, production.]",
    deliverables: ["[Livrable 1]", "[Livrable 2]", "[Livrable 3]"],
    results: ["[Résultat 1]", "[Résultat 2]", "[Résultat 3]"],
    gallery: [feedFood, feedEditing, feedBoutique],
  },
  {
    slug: "projet-2",
    name: "[Nom du projet 2]",
    service: "[Service]",
    location: "[Ville]",
    cover: workFashion,
    challenge: "[Décrivez le défi du client.]",
    approach: "[Décrivez l'approche de TRÍADE.]",
    deliverables: ["[Livrable 1]", "[Livrable 2]"],
    results: ["[Résultat 1]", "[Résultat 2]"],
    gallery: [workWatch, workNoir],
  },
  {
    slug: "projet-3",
    name: "[Nom du projet 3]",
    service: "[Service]",
    location: "[Ville]",
    cover: workVilla,
    challenge: "[Décrivez le défi du client.]",
    approach: "[Décrivez l'approche de TRÍADE.]",
    deliverables: ["[Livrable 1]", "[Livrable 2]"],
    results: ["[Résultat 1]", "[Résultat 2]"],
    gallery: [workNoir, workWatch],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
