import logo from "@/assets/logo-triade-blanc.webp";
import { LOCALES, lp, stripLocale, useLocale } from "@/lib/i18n";
import { useRouterState } from "@tanstack/react-router";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-config";

export function SiteFooter() {
  const locale = useLocale();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const base = stripLocale(pathname);
  const a = (id: string) => lp(locale, `/#${id}`);
  const links: [string, string][] = [
    ["Services", a("services")],
    ["Réalisations", a("realisations")],
    ["Méthode", a("methode")],
    ["FAQ", a("faq")],
    ["Contact", a("diagnostic")],
  ];
  return (
    <footer className="on-dark bg-azul-profundo text-nevoa">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <img src={logo} alt="TRÍADE" width={58} height={44} loading="lazy" decoding="async" className="h-11 w-auto" />
          <p>Marketing &amp; publicité · Genève, Suisse</p>
        </div>
        <nav aria-label="Pied de page" className="flex flex-col">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="inline-flex min-h-11 items-center text-[14px] font-semibold uppercase tracking-[1.5px] text-white hover:underline">
              {l}
            </a>
          ))}
          <a href="https://www.instagram.com/triadepublicite/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-[14px] font-semibold uppercase tracking-[1.5px] text-white hover:underline">
            Instagram
          </a>
        </nav>
        <div className="flex flex-col">
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-11 items-center text-white hover:underline">{CONTACT_EMAIL}</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-white hover:underline">WhatsApp +41 78 967 05 37</a>
        </div>
      </div>
      <div className="border-t border-tinta">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-5 text-[14px]">
          <span>© 2026 TRÍADE Marketing &amp; Publicité</span>
          <span className="flex flex-wrap items-center gap-x-4">
            <a href={lp(locale, "/impressum")} className="inline-flex min-h-11 items-center hover:text-white">Impressum</a>
            <a href={lp(locale, "/confidentialite")} className="inline-flex min-h-11 items-center hover:text-white">Confidentialité</a>
            {LOCALES.map((l) => (
              <a key={l} href={lp(l, base)} hrefLang={l} aria-current={l === locale ? "true" : undefined} className={`inline-flex min-h-11 items-center uppercase ${l === locale ? "font-bold text-white" : "hover:text-white"}`}>
                {l}
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
