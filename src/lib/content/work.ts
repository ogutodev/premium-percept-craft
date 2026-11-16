import type { Locale } from "@/lib/i18n";

export const WORK: Record<Locale, { meta: string[]; h1: string; intro: string; casesTitle: string; sitesTitle: string; photosTitle: string; photosMeta: string; cta: string }> = {
  fr: { meta: ["TRÍADE · Genève", "Réalisations", "Projets réels · images réelles"], h1: "Réalisations", intro: "Des projets menés pour des entreprises et des clubs de Genève : études de cas, sites web en ligne et photos réalisées sur place.", casesTitle: "Études de cas", sitesTitle: "Sites web réalisés", photosTitle: "Photos", photosMeta: "Prises par TRÍADE", cta: "Réserver mon diagnostic gratuit" },
  pt: { meta: ["TRÍADE · Genebra", "Trabalhos", "Projetos reais · imagens reais"], h1: "Trabalhos", intro: "Projetos feitos para empresas e clubes de Genebra: estudos de caso, sites no ar e fotos feitas no local.", casesTitle: "Estudos de caso", sitesTitle: "Sites que criamos", photosTitle: "Fotos", photosMeta: "Feitas pela TRÍADE", cta: "Agendar meu diagnóstico grátis" },
  en: { meta: ["TRÍADE · Geneva", "Work", "Real projects · real images"], h1: "Work", intro: "Projects for Geneva businesses and clubs: case studies, live websites and photos shot on site.", casesTitle: "Case studies", sitesTitle: "Websites we built", photosTitle: "Photos", photosMeta: "Shot by TRÍADE", cta: "Book my free diagnostic" },
};
