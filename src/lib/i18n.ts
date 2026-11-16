import { useRouterState } from "@tanstack/react-router";

export type Locale = "fr" | "pt" | "en";
export const LOCALES: Locale[] = ["fr", "pt", "en"];
export const SITE_URL = "https://triadepublicite.ch";
export const HREFLANG_CODES = { fr: "fr-CH", pt: "pt-BR", en: "en" } as const;
const HREFLANG: Record<Locale, string> = HREFLANG_CODES;

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
