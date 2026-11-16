import { SITE_URL, seoLinks, lp, LOCALES, type Locale } from "@/lib/i18n";
import { FAQ_FR } from "@/components/pages/home-fr";
import type { Project } from "@/lib/projects";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const LOGO_URL = `${SITE_URL}/logo-triade-bleu.webp`;
const ORG_ID = `${SITE_URL}/#org`;
const OG_LOCALE: Record<Locale, string> = { fr: "fr_CH", pt: "pt_BR", en: "en_US" };
const OG_ALT: Record<Locale, string> = {
  fr: "TRÍADE, agence marketing à Genève — Augusto Sousa, fondateur",
  pt: "TRÍADE, agência de marketing em Genebra — Augusto Sousa, fundador",
  en: "TRÍADE, marketing agency in Geneva — Augusto Sousa, founder",
};

const abs = (path: string) => (path.startsWith("http") ? path : SITE_URL + path);

const OFFERS = [
  { name: "Être trouvé", items: ["Fiche Google Business Profile", "Site web sur mesure, FR · PT · EN", "Référencement local (SEO)", "Google Ads"] },
  { name: "Être choisi", items: ["Identité visuelle et logo", "Photographie", "Vidéo et Reels", "Supports imprimés"] },
  { name: "Être suivi", items: ["Gestion Instagram et Facebook", "Calendrier éditorial", "Publicité Meta", "Rapport de résultats"] },
];

export const organizationJsonLd = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "TRÍADE Marketing & Publicité",
  url: SITE_URL,
  logo: LOGO_URL,
  image: OG_IMAGE,
  email: "info@triadepublicite.ch",
  telephone: "+41789670537",
  address: { "@type": "PostalAddress", addressLocality: "Genève", addressRegion: "GE", addressCountry: "CH" },
  areaServed: [
    { "@type": "City", name: "Genève" },
    { "@type": "AdministrativeArea", name: "Suisse romande" },
  ],
  knowsLanguage: ["fr", "pt", "en"],
  founder: { "@type": "Person", name: "Augusto Sousa" },
  sameAs: ["https://www.instagram.com/triadepublicite/"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services marketing",
    itemListElement: OFFERS.map((g) => ({
      "@type": "OfferCatalog",
      name: g.name,
      itemListElement: g.items.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i } })),
    })),
  },
};

function homeGraph(locale: Locale) {
  const graph: object[] = [
    organizationJsonLd,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL + lp(locale, "/"),
      name: "TRÍADE",
      inLanguage: locale === "fr" ? "fr-CH" : locale === "pt" ? "pt-BR" : "en",
      publisher: { "@id": ORG_ID },
    },
  ];
  if (locale === "fr") {
    graph.push({
      "@type": "FAQPage",
      mainEntity: FAQ_FR.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

type PageKey = "home" | "solutions" | "contenus" | "privacy" | "impressum";
const PATHS: Record<PageKey, string> = { home: "/", solutions: "/solutions", contenus: "/contenus", privacy: "/confidentialite", impressum: "/impressum" };

type T = { title: string; description: string };
const TEXT: Record<PageKey, Record<Locale, T>> = {
  home: {
    fr: { title: "Agence marketing à Genève pour PME | TRÍADE", description: "Site web, fiche Google, réseaux sociaux, photo et vidéo pour les PME de Suisse romande. Un seul interlocuteur à Genève. Diagnostic gratuit de 30 min." },
    pt: { title: "Agência de marketing em Genebra para PMEs | TRÍADE", description: "Site, Google, redes sociais, foto e vídeo para pequenas empresas na Suíça francófona. Atendimento em português em Genebra. Diagnóstico gratuito de 30 min." },
    en: { title: "Marketing agency in Geneva for small businesses | TRÍADE", description: "Websites, Google Business Profile, social media, photo and video for SMEs in French-speaking Switzerland. One point of contact in Geneva. Free 30-min diagnostic." },
  },
  solutions: {
    fr: { title: "Services marketing à Genève : site web, Google, réseaux sociaux | TRÍADE", description: "Création de site web, fiche Google, réseaux sociaux, publicité, photo et vidéo pour PME à Genève. Ce qui est inclus, délais et livrables." },
    pt: { title: "Serviços de marketing em Genebra: site, Google, redes sociais | TRÍADE", description: "Criação de sites, perfil no Google, redes sociais, anúncios, foto e vídeo para PMEs em Genebra. O que está incluído, prazos e entregas." },
    en: { title: "Marketing services in Geneva: websites, Google, social media | TRÍADE", description: "Websites, Google Business Profile, social media, ads, photo and video for SMEs in Geneva. What's included, timelines and deliverables." },
  },
  contenus: {
    fr: { title: "Contenus photo, vidéo et réseaux sociaux à Genève | TRÍADE", description: "Photos, vidéos, Reels et contenus pour réseaux sociaux réalisés par TRÍADE pour des entreprises de Genève." },
    pt: { title: "Conteúdo de foto, vídeo e redes sociais em Genebra | TRÍADE", description: "Fotos, vídeos, Reels e conteúdo para redes sociais criados pela TRÍADE para empresas de Genebra." },
    en: { title: "Photo, video and social media content in Geneva | TRÍADE", description: "Photos, videos, Reels and social media content made by TRÍADE for Geneva businesses." },
  },
  impressum: {
    fr: { title: "Impressum — TRÍADE Marketing & Publicité, Genève", description: "Mentions légales de TRÍADE Marketing & Publicité, agence marketing à Genève." },
    pt: { title: "Impressum — TRÍADE Marketing & Publicité, Genebra", description: "Informações legais da TRÍADE Marketing & Publicité, agência de marketing em Genebra." },
    en: { title: "Impressum — TRÍADE Marketing & Publicité, Geneva", description: "Legal notice of TRÍADE Marketing & Publicité, marketing agency in Geneva." },
  },
  privacy: {
    fr: { title: "Politique de confidentialité — TRÍADE", description: "Comment TRÍADE traite les données transmises via le formulaire de contact, conformément à la nLPD suisse." },
    pt: { title: "Política de privacidade — TRÍADE", description: "Como a TRÍADE trata os dados enviados pelo formulário de contato, conforme a nLPD suíça." },
    en: { title: "Privacy policy — TRÍADE", description: "How TRÍADE handles data sent through the contact form, in line with the Swiss nFADP." },
  },
};

export const DEFAULT_TITLE = TEXT.home.fr.title;
export const DEFAULT_DESCRIPTION = TEXT.home.fr.description;

function baseMeta(locale: Locale, t: T, url: string, type: string) {
  return [
    { title: t.title },
    { name: "description", content: t.description },
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.description },
    { property: "og:type", content: type },
    { property: "og:locale", content: OG_LOCALE[locale] },
    ...LOCALES.filter((l) => l !== locale).map((l) => ({ property: "og:locale:alternate", content: OG_LOCALE[l] })),
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: OG_ALT[locale] },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: t.title },
    { name: "twitter:description", content: t.description },
    { name: "twitter:image", content: OG_IMAGE },
    { name: "twitter:image:alt", content: OG_ALT[locale] },
  ];
}

export function pageHead(page: PageKey, locale: Locale) {
  const t = TEXT[page][locale];
  return {
    meta: baseMeta(locale, t, SITE_URL + lp(locale, PATHS[page]), "website"),
    links: seoLinks(locale, PATHS[page]),
    scripts: page === "home" ? [{ type: "application/ld+json", children: JSON.stringify(homeGraph(locale)) }] : [],
  };
}

const CASE_WORDS: Record<Locale, { at: string; home: string; work: string }> = {
  fr: { at: "à", home: "Accueil", work: "Réalisations" },
  pt: { at: "em", home: "Início", work: "Trabalhos" },
  en: { at: "in", home: "Home", work: "Work" },
};

export function caseHead(p: Project | undefined, locale: Locale, slug: string) {
  const path = `/travaux/${slug}`;
  if (!p) return { meta: [{ title: "TRÍADE" }, { name: "robots", content: "noindex" }], links: [], scripts: [] };
  const w = CASE_WORDS[locale];
  const challenge = p.challenge.length > 155 ? p.challenge.slice(0, 152).replace(/\s+\S*$/, "") + "…" : p.challenge;
  const t = { title: `${p.name} — ${p.service} ${w.at} ${p.location} | TRÍADE`, description: challenge };
  const url = SITE_URL + lp(locale, path);
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: w.home, item: SITE_URL + lp(locale, "/") },
          { "@type": "ListItem", position: 2, name: w.work, item: SITE_URL + lp(locale, "/") + (locale === "fr" ? "#travaux" : "#travaux") },
          { "@type": "ListItem", position: 3, name: p.name, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        name: `${p.name} — ${p.service}`,
        about: p.challenge,
        url,
        image: abs(p.coverPhoto.src),
        creator: { "@id": ORG_ID },
        locationCreated: { "@type": "Place", name: p.location },
      },
    ],
  };
  return {
    meta: baseMeta(locale, t, url, "article"),
    links: seoLinks(locale, path),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(ld) }],
  };
}
