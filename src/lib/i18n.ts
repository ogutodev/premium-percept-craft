import { useRouterState } from "@tanstack/react-router";

export type Locale = "fr" | "pt" | "en";
export const LOCALES: Locale[] = ["fr", "pt", "en"];
export const SITE_URL = "https://premium-percept-craft.lovable.app";
const HREFLANG: Record<Locale, string> = { fr: "fr-CH", pt: "pt-BR", en: "en" };

export function localeFromPath(pathname: string): Locale {
  if (pathname === "/pt" || pathname.startsWith("/pt/")) return "pt";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return "fr";
}

/** Path without its locale prefix ("/pt/solutions" -> "/solutions"). */
export function stripLocale(pathname: string): string {
  const s = pathname.replace(/^\/(pt|en)(?=\/|$)/, "");
  return s === "" ? "/" : s;
}

/** Prefix a French (default) path with a locale. */
export function lp(locale: Locale, path: string): string {
  if (locale === "fr") return path;
  if (path === "/") return `/${locale}`;
  if (path.startsWith("/#")) return `/${locale}${path.slice(1)}`;
  return `/${locale}${path}`;
}

export function useLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPath(pathname);
}

/** hreflang alternates + canonical for a page, given its French path. */
export function seoLinks(locale: Locale, frPath: string) {
  const alt = LOCALES.map((l) => ({
    rel: "alternate",
    hrefLang: HREFLANG[l],
    href: SITE_URL + lp(l, frPath),
  }));
  return [
    { rel: "canonical", href: SITE_URL + lp(locale, frPath) },
    ...alt,
    { rel: "alternate", hrefLang: "x-default", href: SITE_URL + frPath },
  ];
}

export const ui = {
  fr: {
    nav: { solutions: "Solutions", contenus: "Contenus", travaux: "Travaux", studio: "Studio", methode: "Méthode", contact: "Contact" },
    footer: {
      blurb: "Studio créatif suisse. Nous façonnons l'image des marques d'exception à travers la narration cinématographique et la direction artistique.",
      contact: "Contact", studio: "Studio", city: "Genève", country: "Suisse", tagline: "Façonneurs d'autorité", privacy: "Confidentialité",
    },
    form: {
      eyebrow: "Contact", title: "Parlons de votre projet.",
      intro: "Quelques informations suffisent. Nous revenons vers vous sous 48 heures ouvrées.",
      name: "Nom", company: "Entreprise", email: "E-mail", phone: "Téléphone (optionnel)",
      type: "Type de projet", budget: "Budget estimé", timeline: "Délai", timelinePh: "Ex. dans 2 mois",
      message: "Message", choose: "Choisir…",
      consentA: "J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la ",
      consentLink: "politique de confidentialité", submit: "Envoyer la demande", sending: "Envoi…",
      okTitle: "Merci, votre demande est bien reçue.", okBody: "Nous revenons vers vous très rapidement.",
      error: "L'envoi a échoué. Réessayez ou écrivez-nous sur WhatsApp.", invalid: "Veuillez compléter les champs requis.",
      alt: "Ou directement :", book: "Réserver un appel",
    },
    types: ["Branding", "Film / vidéo", "Photographie", "Réseaux sociaux", "Site web", "Campagne payante"],
    case: { back: "← Tous les travaux", challenge: "Le défi", approach: "L'approche", deliverables: "Livrables", results: "Résultats", gallery: "Galerie", cta: "Un projet similaire ? Parlons-en →" },
  },
  pt: {
    nav: { solutions: "Soluções", contenus: "Conteúdos", travaux: "Trabalhos", studio: "Estúdio", methode: "Método", contact: "Contato" },
    footer: {
      blurb: "Estúdio criativo suíço. Construímos a imagem de marcas excepcionais com narrativa cinematográfica e direção de arte.",
      contact: "Contato", studio: "Estúdio", city: "Genebra", country: "Suíça", tagline: "Construtores de autoridade", privacy: "Privacidade",
    },
    form: {
      eyebrow: "Contato", title: "Vamos falar do seu projeto.",
      intro: "Poucas informações bastam. Respondemos em até 48 horas úteis.",
      name: "Nome", company: "Empresa", email: "E-mail", phone: "Telefone (opcional)",
      type: "Tipo de projeto", budget: "Orçamento estimado", timeline: "Prazo", timelinePh: "Ex.: em 2 meses",
      message: "Mensagem", choose: "Escolher…",
      consentA: "Aceito que meus dados sejam usados para responder à minha solicitação, conforme a ",
      consentLink: "política de privacidade", submit: "Enviar solicitação", sending: "Enviando…",
      okTitle: "Obrigado, recebemos sua solicitação.", okBody: "Entraremos em contato muito em breve.",
      error: "O envio falhou. Tente novamente ou fale conosco pelo WhatsApp.", invalid: "Preencha os campos obrigatórios.",
      alt: "Ou diretamente:", book: "Agendar uma chamada",
    },
    types: ["Branding", "Filme / vídeo", "Fotografia", "Redes sociais", "Site", "Campanha paga"],
    case: { back: "← Todos os trabalhos", challenge: "O desafio", approach: "A abordagem", deliverables: "Entregáveis", results: "Resultados", gallery: "Galeria", cta: "Um projeto parecido? Vamos conversar →" },
  },
  en: {
    nav: { solutions: "Solutions", contenus: "Content", travaux: "Work", studio: "Studio", methode: "Method", contact: "Contact" },
    footer: {
      blurb: "Swiss creative studio. We shape the image of exceptional brands through cinematic storytelling and art direction.",
      contact: "Contact", studio: "Studio", city: "Geneva", country: "Switzerland", tagline: "Shapers of authority", privacy: "Privacy",
    },
    form: {
      eyebrow: "Contact", title: "Let's talk about your project.",
      intro: "A few details are enough. We reply within 48 business hours.",
      name: "Name", company: "Company", email: "Email", phone: "Phone (optional)",
      type: "Project type", budget: "Estimated budget", timeline: "Timeline", timelinePh: "E.g. within 2 months",
      message: "Message", choose: "Choose…",
      consentA: "I agree that my data may be used to handle my request, in line with the ",
      consentLink: "privacy policy", submit: "Send request", sending: "Sending…",
      okTitle: "Thank you, your request has been received.", okBody: "We'll get back to you very soon.",
      error: "Sending failed. Please try again or message us on WhatsApp.", invalid: "Please complete the required fields.",
      alt: "Or directly:", book: "Book a call",
    },
    types: ["Branding", "Film / video", "Photography", "Social media", "Website", "Paid campaign"],
    case: { back: "← All work", challenge: "The challenge", approach: "The approach", deliverables: "Deliverables", results: "Results", gallery: "Gallery", cta: "A similar project? Let's talk →" },
  },
} as const;

export const BUDGETS = ["< CHF 2'000", "CHF 2'000–5'000", "CHF 5'000–15'000", "> CHF 15'000"];
