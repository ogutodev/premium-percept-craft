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

import type { Locale } from "@/lib/i18n";

export type Photo = { src: string; alt: string; w: number; h: number };

export type Project = {
  slug: string;
  name: string;
  service: string;
  /** Short location label ("Pâquis, Genève"). */
  location: string;
  /** Location with its preposition, for titles ("aux Pâquis, Genève"). */
  at: string;
  cover: string;
  coverPhoto: Photo;
  challenge: string;
  approach: string;
  deliverables: string[];
  results: string[];
  gallery: Photo[];
};

type Text = Omit<Project, "slug" | "name" | "cover" | "coverPhoto" | "gallery"> & { coverAlt: string; galleryAlts: string[] };
type Src = { slug: string; name: string; cover: string; coverSize: [number, number]; gallery: { src: string; w: number; h: number }[]; t: Record<Locale, Text> };

const L = (src: string) => ({ src, w: 1400, h: 933 });
const P = (src: string) => ({ src, w: 1100, h: 1650 });

const SOURCES: Src[] = [
  {
    slug: "espresso-club",
    name: "Espresso Club",
    cover: espressoSite,
    coverSize: [1600, 900],
    gallery: [L(espressoBar), L(espressoBar2), L(espressoTable), L(espressoVins), L(espressoDecor)],
    t: {
      fr: {
        service: "Branding, site web et réseaux sociaux",
        location: "Pâquis, Genève",
        at: "aux Pâquis, Genève",
        challenge: "Donner à un bar-pizzeria des Pâquis une image à la hauteur de son ambiance, et une présence en ligne qui parle aussi bien aux habitués qu’à une clientèle internationale.",
        approach: "Repositionnement de la marque et direction visuelle chaleureuse et soignée. Site trilingue (français, portugais, anglais) avec carte, galerie et itinéraire. Gestion des réseaux sociaux et de la fiche Google Business Profile.",
        deliverables: ["Repositionnement de la marque", "Site web trilingue FR · PT · EN", "Gestion des réseaux sociaux", "Fiche Google Business Profile", "Photographie d’ambiance"],
        results: [],
        coverAlt: "Page d’accueil du site de l’Espresso Club : salle sombre éclairée par des suspensions coniques et titre « Votre spot aux Pâquis »",
        galleryAlts: [
          "Long comptoir en bois de l’Espresso Club sous une rangée de suspensions coniques beiges",
          "Comptoir courbe en bois avec suspensions blanches, bouteilles de vin et machines à espresso",
          "Deux verres à vin vides et des couverts posés sur une serviette rouge",
          "Rangée de bouteilles de vin rouge sur le comptoir, à côté d’un verre de vin blanc",
          "Mur noir décoré de photos encadrées de voitures anciennes et d’une applique",
        ],
      },
      pt: {
        service: "Branding, site e redes sociais",
        location: "Pâquis, Genebra",
        at: "em Pâquis, Genebra",
        challenge: "Dar a um bar-pizzaria do bairro de Pâquis uma imagem à altura do seu ambiente, e uma presença online que fale tanto com os clientes da casa quanto com o público internacional.",
        approach: "Reposicionamento da marca e uma direção visual calorosa e caprichada. Site em três idiomas (francês, português e inglês) com cardápio, galeria e como chegar. Gestão das redes sociais e do perfil no Google Business Profile.",
        deliverables: ["Reposicionamento da marca", "Site em três idiomas FR · PT · EN", "Gestão das redes sociais", "Perfil no Google Business Profile", "Fotografia de ambiente"],
        results: [],
        coverAlt: "Página inicial do site do Espresso Club: salão escuro iluminado por luminárias cônicas e o título « Votre spot aux Pâquis »",
        galleryAlts: [
          "Longo balcão de madeira do Espresso Club sob uma fileira de luminárias cônicas bege",
          "Balcão curvo de madeira com luminárias brancas, garrafas de vinho e máquinas de espresso",
          "Duas taças de vinho vazias e talheres sobre um guardanapo vermelho",
          "Fileira de garrafas de vinho tinto no balcão, ao lado de uma taça de vinho branco",
          "Parede preta decorada com fotos emolduradas de carros antigos e uma arandela",
        ],
      },
      en: {
        service: "Branding, website and social media",
        location: "Pâquis, Geneva",
        at: "in Pâquis, Geneva",
        challenge: "Give a bar-pizzeria in the Pâquis district an image that matches its atmosphere, and an online presence that speaks to regulars and international guests alike.",
        approach: "Brand repositioning and a warm, polished visual direction. A three-language website (French, Portuguese, English) with menu, gallery and directions. Social media and Google Business Profile management.",
        deliverables: ["Brand repositioning", "Three-language website FR · PT · EN", "Social media management", "Google Business Profile", "Ambience photography"],
        results: [],
        coverAlt: "Espresso Club website homepage: dark dining room lit by cone pendant lamps with the headline « Votre spot aux Pâquis »",
        galleryAlts: [
          "Long wooden bar at the Espresso Club under a row of beige cone pendant lamps",
          "Curved wooden bar with white pendant lamps, wine bottles and espresso machines",
          "Two empty wine glasses and cutlery on a red napkin",
          "Row of red wine bottles on the bar, next to a glass of white wine",
          "Black wall decorated with framed photos of vintage cars and a wall lamp",
        ],
      },
    },
  },
  {
    slug: "us-geneve-ville",
    name: "US Genève-Ville",
    cover: usgv17,
    coverSize: [1100, 1650],
    gallery: [P(usgvEchauffement), P(usgv11), P(usgvNuit), P(usgvJoueur), P(usgvMaillot), P(usgvCourse)],
    t: {
      fr: {
        service: "Photographie et contenus réseaux sociaux",
        location: "Genève",
        at: "à Genève",
        challenge: "Faire vivre un club amateur entre deux matchs, avec des contenus réguliers et une image cohérente sur les réseaux.",
        approach: "Couverture photo des matchs et des entraînements, visuels Match Day, résultats et classements pour Instagram et TikTok, dans l’identité rouge du club.",
        deliverables: ["Photographie de match", "Visuels Match Day", "Résultats et classements", "Contenus Instagram et TikTok"],
        results: [],
        coverAlt: "Joueur de l’US Genève-Ville portant le numéro 17 sur le terrain",
        galleryAlts: [
          "Joueurs de l’US Genève-Ville à l’échauffement avant le match",
          "Joueur portant le numéro 11 de l’US Genève-Ville en action",
          "Match de l’US Genève-Ville en nocturne sous les projecteurs",
          "Portrait d’un joueur de l’US Genève-Ville sur le terrain",
          "Détail du maillot de l’US Genève-Ville",
          "Joueur de l’US Genève-Ville en pleine course balle au pied",
        ],
      },
      pt: {
        service: "Fotografia e conteúdo para redes sociais",
        location: "Genebra",
        at: "em Genebra",
        challenge: "Manter um clube amador vivo entre um jogo e outro, com conteúdo regular e uma imagem coerente nas redes.",
        approach: "Cobertura fotográfica dos jogos e treinos, artes de Match Day, resultados e classificação para Instagram e TikTok, dentro da identidade vermelha do clube.",
        deliverables: ["Fotografia de jogo", "Artes de Match Day", "Resultados e classificação", "Conteúdo para Instagram e TikTok"],
        results: [],
        coverAlt: "Jogador do US Genève-Ville com a camisa 17 em campo",
        galleryAlts: [
          "Jogadores do US Genève-Ville no aquecimento antes do jogo",
          "Jogador camisa 11 do US Genève-Ville em ação",
          "Jogo noturno do US Genève-Ville sob os refletores",
          "Retrato de um jogador do US Genève-Ville em campo",
          "Detalhe da camisa do US Genève-Ville",
          "Jogador do US Genève-Ville correndo com a bola",
        ],
      },
      en: {
        service: "Photography and social media content",
        location: "Geneva",
        at: "in Geneva",
        challenge: "Keep an amateur club alive between matches, with regular content and a consistent image on social media.",
        approach: "Photo coverage of matches and training sessions, plus Match Day, results and standings visuals for Instagram and TikTok, in the club’s red identity.",
        deliverables: ["Match photography", "Match Day visuals", "Results and standings", "Instagram and TikTok content"],
        results: [],
        coverAlt: "US Genève-Ville player wearing number 17 on the pitch",
        galleryAlts: [
          "US Genève-Ville players warming up before the match",
          "US Genève-Ville number 11 in action",
          "US Genève-Ville night match under the floodlights",
          "Portrait of a US Genève-Ville player on the pitch",
          "Close-up of the US Genève-Ville jersey",
          "US Genève-Ville player running with the ball",
        ],
      },
    },
  },
];

function localize(s: Src, locale: Locale): Project {
  const { coverAlt, galleryAlts, ...t } = s.t[locale];
  return {
    slug: s.slug,
    name: s.name,
    cover: s.cover,
    coverPhoto: { src: s.cover, alt: coverAlt, w: s.coverSize[0], h: s.coverSize[1] },
    gallery: s.gallery.map((g, i) => ({ ...g, alt: galleryAlts[i] })),
    ...t,
  };
}

/** Projects localized in French (default). */
export const projects: Project[] = SOURCES.map((s) => localize(s, "fr"));

export function projectsFor(locale: Locale): Project[] {
  return SOURCES.map((s) => localize(s, locale));
}

export function getProject(slug: string, locale: Locale = "fr") {
  const s = SOURCES.find((p) => p.slug === slug);
  return s ? localize(s, locale) : undefined;
}
