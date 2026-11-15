import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo-triade-bleu.webp";
import { LOCALES, localeFromPath, lp, stripLocale } from "@/lib/i18n";

const SECTIONS = [
  ["services", "Services"],
  ["realisations", "Réalisations"],
  ["methode", "Méthode"],
  ["apropos", "À propos"],
] as const;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeFromPath(pathname);
  const base = stripLocale(pathname);
  const isHome = base === "/";
  const href = (id: string) => (isHome ? `#${id}` : lp(locale, `/#${id}`));

  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  openRef.current = open;

  // Compact + hide on scroll down, show on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setCompact(y > 120);
      const focusInside = headerRef.current?.contains(document.activeElement);
      if (openRef.current || focusInside || y <= 120) setHidden(false);
      else if (y > last + 4) setHidden(true);
      else if (y < last - 4) setHidden(false);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section indicator.
  useEffect(() => {
    if (!isHome) return;
    const els = SECTIONS.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome, pathname]);

  // Mobile menu: scroll lock, Escape, focus trap, focus return.
  useEffect(() => {
    const root = document.documentElement;
    if (!open) {
      delete root.dataset.menu;
      return;
    }
    root.dataset.menu = "open";
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>("a[href],button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return close();
      if (e.key !== "Tab") return;
      const f = focusables();
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      delete root.dataset.menu;
    };
  }, [open]);

  function close() {
    setOpen(false);
    burgerRef.current?.focus();
  }

  const langSwitch = (dark: boolean) => (
    <div className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[1.5px]" aria-label="Langue">
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className={dark ? "text-nevoa" : "text-suave"}>·</span>}
          <a
            href={lp(l, base)}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            className={`inline-flex min-h-11 items-center ${
              l === locale ? (dark ? "font-extrabold text-white" : "font-extrabold text-azul") : dark ? "text-nevoa" : "text-suave hover:text-azul"
            }`}
          >
            {l}
          </a>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <a href="#main" className="sr-only z-[60] bg-azul px-4 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Aller au contenu
      </a>
      <header
        ref={headerRef}
        className={`site-header sticky top-0 z-40 border-b-2 border-azul bg-superficie ${hidden ? "is-hidden" : ""}`}
      >
        <div className={`wrap flex items-center justify-between gap-6 transition-[padding] duration-300 ${compact ? "py-2" : "py-4"}`}>
          <a href={lp(locale, "/")} className="flex min-h-11 items-center" aria-label="TRÍADE — accueil">
            <img src={logo} alt="TRÍADE" width={60} height={46} className={`w-auto transition-[height] duration-300 ${compact ? "h-9" : "h-[46px]"}`} />
          </a>
          <nav aria-label="Navigation principale" className="hidden items-center gap-7 min-[900px]:flex">
            {SECTIONS.map(([id, label]) => (
              <a
                key={id}
                href={href(id)}
                data-active={active === id}
                aria-current={active === id ? "true" : undefined}
                className="nav-link text-[14px] font-semibold uppercase tracking-[1.5px] text-azul"
              >
                {label}
              </a>
            ))}
            {langSwitch(false)}
            <a href={href("diagnostic")} className="btn-pill !min-h-11 !px-5 !text-[14px]">
              Diagnostic gratuit
            </a>
          </nav>
          <button
            ref={burgerRef}
            type="button"
            className="inline-flex size-11 items-center justify-center border-2 border-azul text-azul min-[900px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden fill="currentColor">
              <rect width="22" height="2.5" /><rect y="6.75" width="22" height="2.5" /><rect y="13.5" width="22" height="2.5" />
            </svg>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="on-dark fixed inset-0 z-[70] overflow-y-auto bg-azul-profundo text-white"
      >
        <div className="wrap flex min-h-full flex-col gap-10 py-5">
          <div className="flex items-center justify-between">
            <span className="meta text-nevoa">Menu</span>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer le menu"
              className="inline-flex size-11 items-center justify-center border-2 border-white text-2xl text-white"
            >
              ×
            </button>
          </div>
          <nav aria-label="Navigation mobile" className="flex flex-col gap-2">
            {SECTIONS.map(([id, label]) => (
              <a key={id} href={href(id)} onClick={() => setOpen(false)} className="t-cond py-1 text-[clamp(44px,13vw,72px)]">
                {label}
              </a>
            ))}
          </nav>
          {langSwitch(true)}
          <a
            href={href("diagnostic")}
            onClick={() => setOpen(false)}
            className="mt-auto flex min-h-14 items-center justify-center bg-white px-6 text-center text-[15px] font-bold uppercase tracking-[1px] text-azul shadow-[10px_10px_0_var(--color-lima)]"
          >
            Réserver mon diagnostic gratuit <span className="arr ml-2">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
