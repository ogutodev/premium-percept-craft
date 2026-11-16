import type { Locale } from "@/lib/i18n";
import type { Heading } from "@/lib/content/chrome";

export type ServiceGroup = {
  id: string; t: string; what: string;
  items: { t: string; d: string }[];
  who: string; deliverables: string[]; alts: string[];
};
export type ServicesContent = {
  meta: string[]; h1: string; intro: string;
  labels: { what: string; included: string; who: string; deliverables: string; cta: string };
  groups: ServiceGroup[];
  closing: Heading;
};

export const SERVICES: Record<Locale, ServicesContent> = {
  fr: {
    meta: ["TRÍADE · Genève", "Services", "PME de Suisse romande"],
    h1: "Nos services",
    intro: "Trois leviers qui travaillent ensemble : être trouvé sur Google, être choisi grâce à une image professionnelle, et être suivi grâce à une présence régulière. Un seul interlocuteur à Genève pour tout coordonner.",
    labels: { what: "De quoi il s’agit", included: "Ce qui est inclus", who: "Pour qui", deliverables: "Livrables types", cta: "Réserver mon diagnostic gratuit" },
    groups: [
      {
        id: "etre-trouve", t: "Être trouvé",
        what: "Quand un client cherche votre métier à Genève, il doit tomber sur vous, comprendre ce que vous faites et savoir comment vous joindre.",
        items: [
          { t: "Fiche Google Business Profile", d: "Création ou reprise de votre fiche : catégories, horaires, photos et descriptions pour apparaître sur Google Maps." },
          { t: "Site web sur mesure, FR · PT · EN", d: "Un site rapide et clair, pensé pour le mobile, dans les langues de vos clients." },
          { t: "Référencement local (SEO)", d: "Structure, textes et balises pour ressortir sur les recherches locales de votre secteur." },
          { t: "Google Ads", d: "Des annonces ciblées sur votre zone et vos services, quand vous voulez des demandes rapidement." },
        ],
        who: "Commerces, restaurants, artisans et prestataires de services qui ont peu ou pas de présence sur Google, ou un site qui ne leur ressemble plus.",
        deliverables: ["Fiche Google optimisée", "Site web multilingue", "Structure SEO locale", "Campagne Google Ads"],
        alts: ["Page d’accueil du site de l’Espresso Club", "Page d’accueil du site de l’association Dora d’Istria", "Page d’accueil du site de Peinture Vedia"],
      },
      {
        id: "etre-choisi", t: "Être choisi",
        what: "Entre deux adresses, le client choisit celle qui inspire confiance. Une image cohérente et soignée fait cette différence avant même le premier contact.",
        items: [
          { t: "Identité visuelle et logo", d: "Un logo, des couleurs et une typographie qui disent qui vous êtes, déclinés sur tous vos supports." },
          { t: "Photographie", d: "Des photos de votre lieu, de vos produits et de votre équipe, faites sur place." },
          { t: "Vidéo et Reels", d: "Des vidéos courtes pour vos réseaux et votre site, du tournage au montage." },
          { t: "Supports imprimés", d: "Cartes de visite, menus, flyers et affiches cohérents avec votre identité." },
        ],
        who: "Entreprises qui ouvrent, se repositionnent ou dont l’image ne reflète plus la qualité de leur travail.",
        deliverables: ["Logo et charte graphique", "Série de photos", "Vidéos et Reels montés", "Fichiers prêts à imprimer"],
        alts: ["Comptoir en bois de l’Espresso Club sous des suspensions coniques", "Mur noir de l’Espresso Club décoré de photos de voitures anciennes", "Bouteilles de vin rouge alignées sur le comptoir de l’Espresso Club"],
      },
      {
        id: "etre-suivi", t: "Être suivi",
        what: "Une présence régulière sur les réseaux garde le lien avec vos clients et donne envie de revenir.",
        items: [
          { t: "Gestion Instagram et Facebook", d: "Publications, stories et réponses gérées pour vous, dans votre ton." },
          { t: "Calendrier éditorial", d: "Un plan de publications clair, validé avec vous à l’avance." },
          { t: "Publicité Meta", d: "Des campagnes Instagram et Facebook ciblées sur votre région." },
          { t: "Rapport de résultats", d: "Un point régulier sur ce qui fonctionne, et ce que l’on ajuste." },
        ],
        who: "Entreprises qui savent qu’elles devraient publier, mais n’ont ni le temps ni l’équipe pour le faire régulièrement.",
        deliverables: ["Calendrier éditorial", "Publications et stories", "Campagnes Meta", "Rapport de résultats"],
        alts: ["Match de l’US Genève-Ville en nocturne sous les projecteurs", "Détail du maillot de l’US Genève-Ville", "Joueur de l’US Genève-Ville en pleine course balle au pied"],
      },
    ],
    closing: { lines: ["Par où commencer ?", "Par un"], hl: "diagnostic." },
  },
  pt: {
    meta: ["TRÍADE · Genebra", "Serviços", "PMEs da Suíça francófona"],
    h1: "Nossos serviços",
    intro: "Três alavancas que funcionam juntas: ser encontrado no Google, ser escolhido por uma imagem profissional e ser seguido com uma presença constante. Um único interlocutor em Genebra para coordenar tudo.",
    labels: { what: "Do que se trata", included: "O que está incluído", who: "Para quem", deliverables: "Entregas típicas", cta: "Agendar meu diagnóstico grátis" },
    groups: [
      {
        id: "etre-trouve", t: "Ser encontrado",
        what: "Quando um cliente procura o seu ramo em Genebra, ele precisa achar você, entender o que você faz e saber como entrar em contato.",
        items: [
          { t: "Perfil no Google (Google Business Profile)", d: "Criação ou revisão do seu perfil: categorias, horários, fotos e descrições para aparecer no Google Maps." },
          { t: "Site sob medida, FR · PT · EN", d: "Um site rápido e claro, pensado para o celular, nos idiomas dos seus clientes." },
          { t: "SEO local", d: "Estrutura, textos e marcações para aparecer nas buscas locais do seu setor." },
          { t: "Google Ads", d: "Anúncios focados na sua região e nos seus serviços, quando você quer pedidos rápido." },
        ],
        who: "Comércios, restaurantes, artesãos e prestadores de serviço com pouca ou nenhuma presença no Google, ou com um site que já não tem a cara deles.",
        deliverables: ["Perfil no Google otimizado", "Site multilíngue", "Estrutura de SEO local", "Campanha no Google Ads"],
        alts: ["Página inicial do site do Espresso Club", "Página inicial do site da associação Dora d’Istria", "Página inicial do site da Peinture Vedia"],
      },
      {
        id: "etre-choisi", t: "Ser escolhido",
        what: "Entre dois endereços, o cliente escolhe o que passa mais confiança. Uma imagem coerente e caprichada faz essa diferença antes mesmo do primeiro contato.",
        items: [
          { t: "Identidade visual e logo", d: "Um logo, cores e tipografia que mostram quem você é, aplicados em todos os seus materiais." },
          { t: "Fotografia", d: "Fotos do seu espaço, dos seus produtos e da sua equipe, feitas no local." },
          { t: "Vídeo e Reels", d: "Vídeos curtos para as redes e o site, da gravação à edição." },
          { t: "Materiais impressos", d: "Cartões de visita, cardápios, flyers e cartazes alinhados à sua identidade." },
        ],
        who: "Empresas que estão abrindo, se reposicionando ou cuja imagem já não reflete a qualidade do trabalho.",
        deliverables: ["Logo e manual de marca", "Série de fotos", "Vídeos e Reels editados", "Arquivos prontos para impressão"],
        alts: ["Balcão de madeira do Espresso Club sob luminárias cônicas", "Parede preta do Espresso Club com fotos de carros antigos", "Garrafas de vinho tinto enfileiradas no balcão do Espresso Club"],
      },
      {
        id: "etre-suivi", t: "Ser seguido",
        what: "Uma presença constante nas redes mantém o vínculo com seus clientes e dá vontade de voltar.",
        items: [
          { t: "Gestão de Instagram e Facebook", d: "Posts, stories e respostas feitos por nós, no seu tom." },
          { t: "Calendário editorial", d: "Um plano de publicações claro, aprovado com você antes." },
          { t: "Anúncios na Meta", d: "Campanhas no Instagram e no Facebook focadas na sua região." },
          { t: "Relatório de resultados", d: "Conversas regulares sobre o que funciona e o que ajustamos." },
        ],
        who: "Empresas que sabem que deveriam postar, mas não têm tempo nem equipe para fazer isso com regularidade.",
        deliverables: ["Calendário editorial", "Posts e stories", "Campanhas na Meta", "Relatório de resultados"],
        alts: ["Jogo noturno do US Genève-Ville sob os refletores", "Detalhe da camisa do US Genève-Ville", "Jogador do US Genève-Ville correndo com a bola"],
      },
    ],
    closing: { lines: ["Por onde começar?", "Por um"], hl: "diagnóstico." },
  },
  en: {
    meta: ["TRÍADE · Geneva", "Services", "SMEs in French-speaking Switzerland"],
    h1: "Our services",
    intro: "Three levers that work together: get found on Google, get chosen thanks to a professional image, and get followed through a steady presence. One point of contact in Geneva to coordinate it all.",
    labels: { what: "What it is", included: "What’s included", who: "Who it’s for", deliverables: "Typical deliverables", cta: "Book my free diagnostic" },
    groups: [
      {
        id: "etre-trouve", t: "Get found",
        what: "When a customer searches for your trade in Geneva, they should land on you, understand what you do and know how to reach you.",
        items: [
          { t: "Google Business Profile", d: "Setting up or taking over your profile: categories, opening hours, photos and descriptions to show up on Google Maps." },
          { t: "Custom website, FR · PT · EN", d: "A fast, clear, mobile-first website in your customers’ languages." },
          { t: "Local SEO", d: "Structure, copy and markup to rank in local searches for your sector." },
          { t: "Google Ads", d: "Ads targeted at your area and services, when you want enquiries quickly." },
        ],
        who: "Shops, restaurants, craftspeople and service providers with little or no Google presence, or a website that no longer fits them.",
        deliverables: ["Optimised Google profile", "Multilingual website", "Local SEO structure", "Google Ads campaign"],
        alts: ["Espresso Club website homepage", "Dora d’Istria association website homepage", "Peinture Vedia website homepage"],
      },
      {
        id: "etre-choisi", t: "Get chosen",
        what: "Between two businesses, customers pick the one that feels trustworthy. A consistent, polished image makes that difference before the first contact.",
        items: [
          { t: "Visual identity and logo", d: "A logo, colours and typography that say who you are, applied across all your materials." },
          { t: "Photography", d: "Photos of your venue, products and team, shot on site." },
          { t: "Video and Reels", d: "Short videos for social media and your website, from shoot to edit." },
          { t: "Print materials", d: "Business cards, menus, flyers and posters in line with your identity." },
        ],
        who: "Businesses that are opening, repositioning, or whose image no longer reflects the quality of their work.",
        deliverables: ["Logo and brand guidelines", "Photo series", "Edited videos and Reels", "Print-ready files"],
        alts: ["Espresso Club wooden bar under cone pendant lamps", "Espresso Club black wall with vintage car photos", "Red wine bottles lined up on the Espresso Club bar"],
      },
      {
        id: "etre-suivi", t: "Get followed",
        what: "A steady presence on social media keeps you connected to your customers and gives them a reason to come back.",
        items: [
          { t: "Instagram and Facebook management", d: "Posts, stories and replies handled for you, in your voice." },
          { t: "Content calendar", d: "A clear publishing plan, approved with you in advance." },
          { t: "Meta ads", d: "Instagram and Facebook campaigns targeted at your region." },
          { t: "Results report", d: "Regular check-ins on what works, and what we adjust." },
        ],
        who: "Businesses that know they should post, but lack the time or team to do it consistently.",
        deliverables: ["Content calendar", "Posts and stories", "Meta campaigns", "Results report"],
        alts: ["US Genève-Ville night match under the floodlights", "Close-up of the US Genève-Ville jersey", "US Genève-Ville player running with the ball"],
      },
    ],
    closing: { lines: ["Where to start?", "With a"], hl: "diagnostic." },
  },
};
