import { SITE_URL, seoLinks, type Locale } from "@/lib/i18n";

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TRÍADE Marketing et Publicité",
  url: SITE_URL,
  image: OG_IMAGE,
  logo: OG_IMAGE,
  telephone: "+41789670537",
  email: "info@triadepublicite.ch",
  address: { "@type": "PostalAddress", addressLocality: "Genève", addressRegion: "GE", addressCountry: "CH" },
  areaServed: [{ "@type": "Place", name: "Suisse romande" }, { "@type": "City", name: "Genève" }],
  sameAs: ["https://www.instagram.com/triadepublicite/"],
  knowsLanguage: ["fr", "pt"],
  serviceType: ["Branding", "Production vidéo", "Photographie", "Gestion des réseaux sociaux", "Création de site internet", "Publicité digitale"],
};

type PageKey = "home" | "solutions" | "contenus" | "privacy" | "impressum";
const PATHS: Record<PageKey, string> = { home: "/", solutions: "/solutions", contenus: "/contenus", privacy: "/confidentialite", impressum: "/impressum" };

const TEXT: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  home: {
    fr: { title: "TRÍADE — Agence marketing & production vidéo à Genève", description: "Studio créatif à Genève : branding, production vidéo, photographie et réseaux sociaux pour marques premium. Français · Português." },
    pt: { title: "TRÍADE — Agência de marketing e produção de vídeo em Genebra", description: "Estúdio criativo em Genebra: branding, produção de vídeo, fotografia e redes sociais para marcas premium. Français · Português." },
    en: { title: "TRÍADE — Marketing & video production agency in Geneva", description: "Creative studio in Geneva: branding, video production, photography and social media for premium brands. Français · Português." },
  },
  solutions: {
    fr: { title: "Solutions — Marketing Digital, Production & Branding à Genève | TRÍADE", description: "Gestion des réseaux sociaux, production vidéo, photographie, branding, sites internet et publicité digitale à Genève." },
    pt: { title: "Soluções — Marketing digital, produção e branding em Genebra | TRÍADE", description: "Gestão de redes sociais, produção de vídeo, fotografia, branding, sites e publicidade digital em Genebra." },
    en: { title: "Solutions — Digital marketing, production & branding in Geneva | TRÍADE", description: "Social media management, video production, photography, branding, websites and digital advertising in Geneva." },
  },
  contenus: {
    fr: { title: "Contenus — TRÍADE · Studio créatif Genève", description: "Campagnes de marque, films, reels, photographie éditoriale et direction artistique pour les marques d'exception." },
    pt: { title: "Conteúdos — TRÍADE · Estúdio criativo em Genebra", description: "Campanhas de marca, filmes, reels, fotografia editorial e direção de arte para marcas excepcionais." },
    en: { title: "Content — TRÍADE · Creative studio Geneva", description: "Brand campaigns, films, reels, editorial photography and art direction for exceptional brands." },
  },
  impressum: {
    fr: { title: "Impressum — TRÍADE Marketing et Publicité, Genève", description: "Mentions légales de TRÍADE Marketing et Publicité, studio créatif à Genève." },
    pt: { title: "Impressum — TRÍADE Marketing et Publicité, Genebra", description: "Informações legais da TRÍADE Marketing et Publicité, estúdio criativo em Genebra." },
    en: { title: "Impressum — TRÍADE Marketing et Publicité, Geneva", description: "Legal notice of TRÍADE Marketing et Publicité, creative studio in Geneva." },
  },
  privacy: {
    fr: { title: "Politique de confidentialité — TRÍADE", description: "Comment TRÍADE traite les données transmises via le formulaire de contact." },
    pt: { title: "Política de privacidade — TRÍADE", description: "Como a TRÍADE trata os dados enviados pelo formulário de contato." },
    en: { title: "Privacy policy — TRÍADE", description: "How TRÍADE handles data sent through the contact form." },
  },
};

export function pageHead(page: PageKey, locale: Locale) {
  const t = TEXT[page][locale];
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: locale === "fr" ? "fr_CH" : locale === "pt" ? "pt_BR" : "en_US" },
      { property: "og:url", content: SITE_URL + (locale === "fr" ? PATHS[page] : `/${locale}${PATHS[page] === "/" ? "" : PATHS[page]}`) },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: seoLinks(locale, PATHS[page]),
    scripts: page === "home" ? [{ type: "application/ld+json", children: JSON.stringify(businessJsonLd) }] : [],
  };
}
