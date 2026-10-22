import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/triade-logo.png";
import { LOCALES, localeFromPath, lp, stripLocale, ui } from "@/lib/i18n";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const t = ui[locale].nav;
  const base = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = "text-[10px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-accent";

  return (
    <nav
      className={`nav-shell fixed top-0 z-40 flex w-full items-center justify-between px-6 py-4 md:px-10 ${
        scrolled ? "is-scrolled py-3 md:py-3" : "mix-blend-difference md:py-5"
      }`}
    >
      <a href={lp(locale, "/")} className="flex items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:scale-[1.03]">
        <img src={logo} alt="TRÍADE" className="h-10 w-auto md:h-12" />
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        <a href={lp(locale, "/solutions")} className={`hidden sm:inline ${link}`}>{t.solutions}</a>
        <a href={lp(locale, "/contenus")} className={`hidden sm:inline ${link}`}>{t.contenus}</a>
        <a href={lp(locale, "/#travaux")} className={`hidden lg:inline ${link}`}>{t.travaux}</a>
        <a href={lp(locale, "/#studio")} className={`hidden lg:inline ${link}`}>{t.studio}</a>
        <a href={lp(locale, "/#methode")} className={`hidden lg:inline ${link}`}>{t.methode}</a>
        <div className="flex items-center gap-1 font-mono text-[10px] uppercase" aria-label="Langue">
          {LOCALES.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-foreground/30">/</span>}
              <a
                href={lp(l, base)}
                hrefLang={l}
                aria-current={l === locale ? "true" : undefined}
                className={l === locale ? "text-foreground" : "text-foreground/45 transition-colors hover:text-accent"}
              >
                {l}
              </a>
            </span>
          ))}
        </div>
        <a
          href={lp(locale, "/#contact")}
          className="rounded-full border border-foreground/30 px-5 py-2.5 text-[10px] uppercase tracking-widest transition-all duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-accent hover:bg-foreground hover:text-background"
        >
          {t.contact}
        </a>
      </div>
    </nav>
  );
}
