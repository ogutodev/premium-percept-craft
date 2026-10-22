import { seoLinks, type Locale } from "@/lib/i18n";

type PageKey = "home" | "solutions" | "contenus" | "privacy";
const PATHS: Record<PageKey, string> = { home: "/", solutions: "/solutions", contenus: "/contenus", privacy: "/confidentialite" };

const TEXT: Record<PageKey, Record<Locale, { title: string; description: string }>> = {
  home: {
    fr: { title: "TRÍADE — Studio créatif cinématographique · Genève", description: "Film, photographie, branding et réseaux sociaux à Genève. TRÍADE transforme les entreprises en marques premium." },
    pt: { title: "TRÍADE — Estúdio criativo cinematográfico · Genebra", description: "Filme, fotografia, branding e redes sociais em Genebra. A TRÍADE transforma empresas em marcas premium." },
    en: { title: "TRÍADE — Cinematic creative studio · Geneva", description: "Film, photography, branding and social media in Geneva. TRÍADE turns businesses into premium brands." },
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: seoLinks(locale, PATHS[page]),
  };
}
