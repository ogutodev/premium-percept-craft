import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DiagnosticSection } from "@/components/diagnostic-section";
import { Highlight, MetaRow } from "@/components/brand";
import portrait from "@/assets/augusto-portrait.webp";
import camera from "@/assets/augusto-camera.webp";
import bureau from "@/assets/augusto-bureau.webp";
import espressoSite from "@/assets/espresso-club-site-web.webp";
import espressoBar from "@/assets/espresso-club-bar.webp";
import espressoTable from "@/assets/espresso-club-table.webp";
import espressoVins from "@/assets/espresso-club-vins.webp";
import usgvEchauffement from "@/assets/us-geneve-ville-echauffement.webp";
import usgv17 from "@/assets/us-geneve-ville-17.webp";
import usgv11 from "@/assets/us-geneve-ville-11.webp";
import doraSite from "@/assets/dora-distria-site-web.webp";
import vediaSite from "@/assets/peinture-vedia-site-web.webp";
import logoEspresso from "@/assets/logo-espresso-club.webp";
import logoUsgv from "@/assets/logo-us-geneve-ville.webp";
import logoMorning from "@/assets/logo-the-morning-bread.webp";
import logoThaqi from "@/assets/logo-thaqi-renovations.webp";
import logoDora from "@/assets/logo-dora-distria.webp";
import logoPizza from "@/assets/logo-pizza-vino.webp";

export const HERO_IMAGE_FR = portrait;

const NB = "\u00a0";

/** FAQ content — also meant to feed FAQPage JSON-LD. */
export { FAQ_FR } from "@/lib/faq";
import { FAQ_FR } from "@/lib/faq";

const LOGOS = [
  { src: logoEspresso, alt: "Espresso Club", w: 480, h: 227 },
  { src: logoUsgv, alt: "US Genève-Ville", w: 300, h: 381 },
  { src: logoMorning, alt: "The Morning Bread", w: 300, h: 300 },
  { src: logoThaqi, alt: "Thaqi Rénovations", w: 300, h: 302 },
  { src: logoDora, alt: "Association culturelle Dora d’Istria", w: 520, h: 149 },
  { src: logoPizza, alt: "Pizza Vino, Carouge", w: 480, h: 238 },
];

const SERVICES = [
  { n: "01", t: "Être trouvé", d: "Quand un client vous cherche sur Google, il doit vous trouver, et avoir envie de pousser la porte.", l: ["Fiche Google Business Profile", "Site web sur mesure, FR · PT · EN", "Référencement local (SEO)", "Google Ads"] },
  { n: "02", t: "Être choisi", d: "Une image cohérente et professionnelle, qui inspire confiance avant même le premier contact.", l: ["Identité visuelle et logo", "Photographie", "Vidéo et Reels", "Supports imprimés"] },
  { n: "03", t: "Être suivi", d: "Une présence régulière, qui transforme les curieux en clients et les clients en habitués.", l: ["Gestion Instagram et Facebook", "Calendrier éditorial", "Publicité Meta", "Rapport de résultats"] },
];

const STEPS = [
  { n: "01", t: "Diagnostic", d: "30 minutes pour comprendre votre entreprise, vos clients et ce qui bloque aujourd’hui. Gratuit." },
  { n: "02", t: "Plan et devis", d: "Des priorités claires et un devis détaillé. Vous savez ce que vous payez, et pourquoi." },
  { n: "03", t: "Production", d: `Shooting, design, site web, contenus${NB}: nous réalisons, vous validez chaque étape.` },
  { n: "04", t: "Suivi", d: "Un point régulier sur les résultats, et des ajustements quand quelque chose peut mieux marcher." },
];

const SITES = [
  { img: espressoSite, w: 1600, h: 900, alt: "Page d’accueil du site de l’Espresso Club", meta: "Restaurant · bar · Genève", name: "Espresso Club", d: "Site trilingue avec carte, galerie et itinéraire.", link: { kind: "case" as const, label: "Voir l’étude de cas", slug: "espresso-club" } },
  { img: doraSite, w: 1600, h: 768, alt: "Page d’accueil du site de l’association culturelle Dora d’Istria", meta: "Association culturelle · Genève", name: "Dora d’Istria", d: "Identité visuelle et site bilingue, français et albanais.", link: null },
  { img: vediaSite, w: 1600, h: 700, alt: "Page d’accueil du site de l’entreprise Peinture Vedia", meta: "Peinture · rénovation · Genève", name: "Peinture Vedia", d: "Site vitrine avec formulaire de demande de devis.", link: { kind: "ext" as const, label: "peinturevedia.ch ↗", href: "https://peinturevedia.ch/" } },
];

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((c) => (
        <li key={c} className="chip">{c}</li>
      ))}
    </ul>
  );
}

function CaseLink({ slug }: { slug: string }) {
  return (
    <Link to="/travaux/$slug" params={{ slug }} className="link-u">
      Voir l’étude de cas <span className="arr">→</span>
    </Link>
  );
}

export function HomePage() {
  const h1Words = ["Votre", "entreprise", "mérite", "d’être"];
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main">
        {/* HERO */}
        <section id="top" className="section-y !pt-10 md:!pt-14">
          <div className="wrap">
            <MetaRow items={["TRÍADE · Genève", "Marketing & publicité", "PME de Suisse romande"]} />
            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-16">
              <div>
                <h1>
                  {h1Words.map((w, i) => (
                    <span key={w}>
                      <span className="hw"><span style={{ ["--i" as string]: i }}>{w}</span></span>{" "}
                    </span>
                  ))}
                  <span className="hw !overflow-visible"><span style={{ ["--i" as string]: 4 }}><Highlight>choisie.</Highlight></span></span>
                </h1>
                <div className="hero-fade">
                  <p className="mt-8 max-w-[560px] text-[clamp(19px,1.6vw,21px)] leading-[1.5]">
                    Stratégie, image et présence digitale pour les PME de Suisse romande.{" "}
                    <strong className="text-azul">Un seul interlocuteur</strong>, du logo au site web, de Google Maps à Instagram.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <a href="#diagnostic" className="btn-pill">Réserver mon diagnostic gratuit <span className="arr">→</span></a>
                    <a href="#realisations" className="link-u">Voir nos réalisations</a>
                  </div>
                  <p className="mt-4 text-[14px] text-suave">30 minutes, sans engagement · en français ou en portugais</p>
                  <p lang="pt" className="mt-5 font-serif text-[22px] italic leading-snug text-suave">
                    Agência lusófona em Genebra: atendemos em francês e português.
                  </p>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[460px] pb-8 pl-4 sm:pl-0">
                <div className="hero-frame frame aspect-[4/5] overflow-hidden">
                  <img
                    src={portrait}
                    alt="Augusto Sousa, fondateur de TRÍADE"
                    width={1536}
                    height={1024}
                    fetchPriority="high"
                    decoding="async"
                    sizes="(min-width: 1024px) 460px, 90vw"
                    className="size-full object-cover object-[50%_30%]"
                  />
                </div>
                <div className="absolute bottom-0 left-0 border-[3px] border-azul bg-white px-5 py-3 sm:-left-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[2px] text-suave">Fondateur</p>
                  <p className="t-cond text-[26px]">Augusto Sousa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGOS */}
        <section aria-label="Clients" className="border-y border-linha bg-white py-10">
          <div className="wrap grid items-center gap-8 md:grid-cols-[200px_1fr]">
            <p className="meta">Ils nous ont fait confiance</p>
            <ul data-logos className="grid grid-cols-3 items-center justify-items-center gap-6 md:flex md:flex-wrap md:justify-between md:gap-x-10 md:gap-y-6">
              {LOGOS.map((l) => (
                <li key={l.alt} className="flex items-center">
                  <img src={l.src} alt={l.alt} width={l.w} height={l.h} loading="lazy" decoding="async" className="h-auto max-h-[52px] w-auto max-w-full md:h-[64px] md:max-h-[76px]" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section-y">
          <div className="wrap">
            <MetaRow items={["01 — Services", "Ce que nous faisons"]} />
            <h2 className="mt-10" data-reveal>Trois leviers.<br />Un seul <Highlight>interlocuteur.</Highlight></h2>
            <p className="mt-6 max-w-[620px]" data-reveal>
              Pas besoin de cinq prestataires. Nous construisons les trois choses dont une PME a besoin pour attirer de nouveaux clients, et nous les faisons travailler ensemble.
            </p>
            <div data-reveal-stagger className="mt-14 grid gap-x-9 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
              {SERVICES.map((s) => (
                <article key={s.n} className="card-box card-pop flex flex-col p-8">
                  <span className="text-[88px] font-black leading-none text-azul [font-stretch:62%]">{s.n}</span>
                  <h3 className="t-cond mt-4 text-[40px]">{s.t}</h3>
                  <p className="mt-4">{s.d}</p>
                  <ul className="mt-6 border-t border-linha pt-4">
                    {s.l.map((i) => (
                      <li key={i} className="py-1.5 font-semibold text-azul">{i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Link to="/solutions" className="link-u mt-12">Voir le détail des services <span className="arr">→</span></Link>
          </div>
        </section>

        {/* RÉALISATIONS */}
        <section id="realisations" className="section-y bg-white">
          <div className="wrap">
            <MetaRow items={["02 — Réalisations", "Projets réels · images réelles"]} />
            <h2 className="mt-10" data-reveal>Des clients d’ici.<br />Du travail <Highlight>réel.</Highlight></h2>

            {/* Case 01 */}
            <article className="mt-16 grid items-start gap-12 lg:grid-cols-[1.45fr_1fr]">
              <div data-clip>
                <div className="frame">
                  <div className="flex items-center gap-3 border-b-[3px] border-azul bg-superficie px-4 py-2.5">
                    <span className="flex gap-1.5" aria-hidden>
                      <i className="size-2.5 rounded-full bg-nevoa" /><i className="size-2.5 rounded-full bg-nevoa" /><i className="size-2.5 rounded-full bg-nevoa" />
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[2px] text-suave">Site web · Espresso Club</span>
                  </div>
                  <img src={espressoSite} alt="Page d’accueil du site de l’Espresso Club : salle éclairée par des suspensions coniques" width={1600} height={900} loading="lazy" decoding="async" sizes="(min-width:1024px) 720px, 100vw" className="aspect-video w-full object-cover" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    [espressoBar, "Comptoir en bois de l’Espresso Club sous des suspensions coniques"],
                    [espressoTable, "Verres à vin et couverts sur une serviette rouge"],
                    [espressoVins, "Bouteilles de vin rouge alignées sur le comptoir"],
                  ].map(([src, alt]) => (
                    <img key={src} src={src} alt={alt} width={1400} height={933} loading="lazy" decoding="async" sizes="(min-width:1024px) 240px, 33vw" className="aspect-[4/3] w-full border-2 border-azul object-cover" />
                  ))}
                </div>
              </div>
              <div className="space-y-6" data-reveal>
                <p className="meta">Cas 01 · Pâquis, Genève</p>
                <h3 className="t-cond text-[clamp(48px,5vw,72px)]">Espresso Club</h3>
                <p>Bar, pizzeria et cocktails aux Pâquis. Nous avons repositionné la marque, créé un site trilingue, et nous gérons ses réseaux sociaux et sa fiche Google.</p>
                <Chips items={["Branding", "Site FR · PT · EN", "Réseaux sociaux", "Google Business"]} />
                <CaseLink slug="espresso-club" />
              </div>
            </article>

            {/* Case 02 */}
            <article className="mt-24 grid items-start gap-12 lg:grid-cols-[1fr_1.45fr]">
              <div className="order-2 space-y-6 lg:order-1" data-reveal>
                <p className="meta">Cas 02 · Football, Genève</p>
                <h3 className="t-cond text-[clamp(48px,5vw,72px)]">US Genève-Ville</h3>
                <p>Un club qui vit le week-end. Nous couvrons les matchs et les entraînements en photo et produisons les visuels Match Day, résultats et classements pour Instagram et TikTok.</p>
                <Chips items={["Photo de match", "Match Day", "Instagram & TikTok"]} />
                <CaseLink slug="us-geneve-ville" />
              </div>
              <div data-clip className="order-1 grid grid-cols-3 gap-3 lg:order-2">
                {[
                  [usgvEchauffement, "Joueurs de l’US Genève-Ville à l’échauffement"],
                  [usgv17, "Joueur de l’US Genève-Ville portant le numéro 17"],
                  [usgv11, "Joueur de l’US Genève-Ville portant le numéro 11"],
                ].map(([src, alt]) => (
                  <img key={src} src={src} alt={alt} width={1100} height={1650} loading="lazy" decoding="async" sizes="(min-width:1024px) 260px, 33vw" className="aspect-[2/3] w-full border-[3px] border-azul object-cover" />
                ))}
              </div>
            </article>

            {/* Sites web */}
            <div className="mt-24 border-t-[3px] border-azul pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="t-cond text-[clamp(32px,3.6vw,48px)]">Sites web réalisés</h3>
                <p className="meta">En ligne aujourd’hui</p>
              </div>
              <div data-reveal-stagger className="mt-10 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(280px,100%),1fr))]">
                {SITES.map((s) => (
                  <article key={s.name} className="card-box card-pop flex flex-col p-5">
                    <img src={s.img} alt={s.alt} width={s.w} height={s.h} loading="lazy" decoding="async" sizes="(min-width:1024px) 380px, 100vw" className="aspect-[16/10] w-full border-[3px] border-azul object-cover object-top" />
                    <p className="meta mt-5">{s.meta}</p>
                    <h4 className="t-cond mt-2 text-[32px]">{s.name}</h4>
                    <p className="mt-2 flex-1">{s.d}</p>
                    {s.link?.kind === "case" && <div className="mt-3"><CaseLink slug={s.link.slug} /></div>}
                    {s.link?.kind === "ext" && (
                      <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="link-u mt-3">{s.link.label}</a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="methode" className="section-y">
          <div className="wrap">
            <MetaRow items={["03 — Méthode", "Comment nous travaillons"]} />
            <h2 className="mt-10" data-reveal>Simple, clair,<br /><Highlight>mesurable.</Highlight></h2>
            <ol data-rules className="mt-14 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr))]">
              {STEPS.map((s) => (
                <li key={s.n} className="rule-top">
                  <span className="block text-[72px] font-black leading-none text-azul [font-stretch:62%]">{s.n}</span>
                  <h3 className="t-cond mt-3 text-[28px]">{s.t}</h3>
                  <p className="mt-3">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* À PROPOS */}
        <section id="apropos" className="on-dark section-y bg-azul-profundo text-white">
          <div className="wrap">
            <MetaRow items={["04 — À propos", "Genève · Suisse romande"]} />
            <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
              <div className="space-y-3" data-reveal>
                <img src={camera} alt="Augusto Sousa, caméra à la main lors d’un tournage" width={1100} height={1650} loading="lazy" decoding="async" sizes="(min-width:1024px) 520px, 100vw" className="aspect-[4/5] w-full border-[3px] border-white object-cover object-[50%_40%]" />
                <img src={bureau} alt="Augusto Sousa au téléphone devant son ordinateur" width={1536} height={1024} loading="lazy" decoding="async" sizes="(min-width:1024px) 520px, 100vw" className="aspect-video w-full border-[3px] border-white object-cover" />
              </div>
              <div className="space-y-6">
                <h2 data-reveal>Un interlocuteur direct. Pas un <Highlight>standard.</Highlight></h2>
                <p className="text-[19px] text-white">
                  TRÍADE est dirigée par <strong>Augusto Sousa</strong>, à Genève. Vous parlez directement à la personne qui pense votre stratégie, tient la caméra et construit votre site.
                </p>
                <p className="text-nevoa">Une agence à taille humaine, ancrée en Suisse romande, qui travaille en français, en portugais et en anglais.</p>
                <p lang="pt" className="font-serif text-[24px] italic leading-snug text-nevoa">Uma agência lusófona dentro do mercado suíço.</p>
                <dl className="grid gap-6 border-t-2 border-nevoa pt-6 sm:grid-cols-3">
                  {[["Basé à", "Genève"], ["Langues", "FR · PT · EN"], ["Métier", "Stratégie · Image"]].map(([dt, dd]) => (
                    <div key={dt}>
                      <dt className="text-[12px] font-semibold uppercase tracking-[2px] text-azul-claro">{dt}</dt>
                      <dd className="t-cond mt-1 text-[26px]">{dd}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq section-y">
          <div className="wrap">
            <MetaRow items={["05 — Questions fréquentes", "Avant de nous écrire"]} />
            <h2 className="mt-10" data-reveal>Vos <Highlight>questions.</Highlight></h2>
            <div className="mt-12 max-w-4xl">
              {FAQ_FR.map((f) => (
                <details key={f.q} className="border-t-[3px] border-azul">
                  <summary className="flex min-h-11 items-start justify-between gap-6 py-5">
                    <span className="t-cond text-[24px]">{f.q}</span>
                    <span aria-hidden className="pm t-cond text-[32px] leading-none" />
                  </summary>
                  <p className="max-w-3xl pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <DiagnosticSection />
      </main>
      <SiteFooter />
    </div>
  );
}
