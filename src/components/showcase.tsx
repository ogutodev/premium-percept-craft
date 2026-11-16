import { Link } from "@tanstack/react-router";
import type { Locale } from "@/lib/i18n";
import { HOME } from "@/lib/content/home";
import espressoSite from "@/assets/espresso-club-site-web.webp";
import doraSite from "@/assets/dora-distria-site-web.webp";
import vediaSite from "@/assets/peinture-vedia-site-web.webp";
import logoEspresso from "@/assets/logo-espresso-club.webp";
import logoUsgv from "@/assets/logo-us-geneve-ville.webp";
import logoMorning from "@/assets/logo-the-morning-bread.webp";
import logoThaqi from "@/assets/logo-thaqi-renovations.webp";
import logoDora from "@/assets/logo-dora-distria.webp";
import logoPizza from "@/assets/logo-pizza-vino.webp";

const LOGOS = [
  { src: logoEspresso, alt: "Espresso Club", w: 480, h: 227 },
  { src: logoUsgv, alt: "US Genève-Ville", w: 300, h: 381 },
  { src: logoMorning, alt: "The Morning Bread", w: 300, h: 300 },
  { src: logoThaqi, alt: "Thaqi Rénovations", w: 300, h: 302 },
  { src: logoDora, alt: "Dora d’Istria", w: 520, h: 149 },
  { src: logoPizza, alt: "Pizza Vino, Carouge", w: 480, h: 238 },
];

const SITES = [
  { img: espressoSite, w: 1600, h: 900, name: "Espresso Club", link: { kind: "case" as const, slug: "espresso-club" } },
  { img: doraSite, w: 1600, h: 768, name: "Dora d’Istria", link: null },
  { img: vediaSite, w: 1600, h: 700, name: "Peinture Vedia", link: { kind: "ext" as const, label: "peinturevedia.ch ↗", href: "https://peinturevedia.ch/" } },
];

const CASE_TO = { fr: "/travaux/$slug", pt: "/pt/travaux/$slug", en: "/en/travaux/$slug" } as const;

export function CaseLink({ slug, locale }: { slug: string; locale: Locale }) {
  return (
    <Link to={CASE_TO[locale]} params={{ slug }} className="link-u">
      {HOME[locale].work.seeCase} <span className="arr">→</span>
    </Link>
  );
}

export function LogosBand({ locale }: { locale: Locale }) {
  const t = HOME[locale];
  return (
    <section aria-label={t.logosLabel} className="border-y border-linha bg-white py-10">
      <div className="wrap grid items-center gap-8 md:grid-cols-[200px_1fr]">
        <p className="meta">{t.logosTitle}</p>
        <ul data-logos className="grid grid-cols-3 items-center justify-items-center gap-6 md:flex md:flex-wrap md:justify-between md:gap-x-10 md:gap-y-6">
          {LOGOS.map((l) => (
            <li key={l.alt} className="flex items-center">
              <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" className="h-auto max-h-[52px] w-auto max-w-full md:h-[64px] md:max-h-[76px]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "Sites web réalisés" cards. `level` sets the card title heading level. */
export function SitesGrid({ locale, level = 4 }: { locale: Locale; level?: 3 | 4 }) {
  const t = HOME[locale].work;
  const H = level === 3 ? "h3" : "h4";
  return (
    <div data-reveal-stagger className="mt-10 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
      {SITES.map((s, i) => (
        <article key={s.name} className="card-box card-pop flex flex-col p-5">
          <img src={s.img} alt={t.sites[i].alt} width={s.w} height={s.h} loading="lazy" decoding="async" sizes="(min-width:1024px) 380px, 100vw" className="aspect-[16/10] w-full border-[3px] border-azul object-cover object-top" />
          <p className="meta mt-5">{t.sites[i].meta}</p>
          <H className="t-cond mt-2 text-[32px]">{s.name}</H>
          <p className="mt-2 flex-1">{t.sites[i].d}</p>
          {s.link?.kind === "case" && <div className="mt-3"><CaseLink slug={s.link.slug} locale={locale} /></div>}
          {s.link?.kind === "ext" && (
            <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="link-u mt-3">{s.link.label}</a>
          )}
        </article>
      ))}
    </div>
  );
}
