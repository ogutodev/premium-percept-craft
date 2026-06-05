import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import workWatch from "@/assets/work-watch.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workVilla from "@/assets/work-villa.jpg";
import workNoir from "@/assets/work-noir.jpg";
import feedRestaurant from "@/assets/feed-restaurant.jpg";
import feedAerialCar from "@/assets/feed-aerial-car.jpg";
import feedBoutique from "@/assets/feed-boutique.jpg";
import feedEditing from "@/assets/feed-editing.jpg";
import feedCampaignNoel from "@/assets/feed-campaign-noel.jpg";
import feedPhone from "@/assets/feed-phone.jpg";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Marketing Digital, Production & Branding à Genève | TRÍADE" },
      {
        name: "description",
        content:
          "Agence créative à Genève : gestion des réseaux sociaux, production vidéo, photographie professionnelle, branding, sites internet et publicité digitale. Devis rapide via WhatsApp.",
      },
      { property: "og:title", content: "Solutions TRÍADE — Marketing Digital Genève" },
      {
        property: "og:description",
        content:
          "Des solutions premium pour donner à votre marque une image cinématographique et générer plus de clients en Suisse romande.",
      },
      { property: "og:image", content: workWatch },
      { rel: "canonical", href: "/solutions" } as never,
    ],
  }),
  component: SolutionsPage,
});

type Solution = {
  slug: string;
  title: string;
  short: string;
  inclus: string[];
  benefices: string[];
  livrables: string[];
  delai: string;
  pour: string;
  image: string;
};

type Objective = {
  id: string;
  kicker: string;
  title: string;
  pitch: string;
  solutions: Solution[];
};

const objectives: Objective[] = [
  {
    id: "visibilite",
    kicker: "Objectif 01",
    title: "Je veux plus de visibilité",
    pitch:
      "Faites parler de votre marque sur les bons canaux, avec des contenus pensés pour capter l'attention dès la première seconde.",
    solutions: [
      {
        slug: "reseaux-sociaux",
        title: "Gestion des réseaux sociaux",
        short: "Une présence éditoriale constante, premium et stratégique sur Instagram, TikTok et LinkedIn.",
        inclus: [
          "Stratégie éditoriale mensuelle",
          "Calendrier de publication",
          "Création de visuels & Reels",
          "Community management",
        ],
        benefices: [
          "Image de marque cohérente",
          "Engagement multiplié",
          "Audience qualifiée à Genève",
        ],
        livrables: ["12 à 20 publications / mois", "4 à 8 Reels", "Reporting mensuel"],
        delai: "Démarrage sous 7 jours",
        pour: "PME, restaurants, marques lifestyle et hôtels en Suisse romande.",
        image: feedRestaurant,
      },
      {
        slug: "creation-de-contenu",
        title: "Création de contenu",
        short: "Des photos, vidéos et formats sociaux taillés pour vos canaux, sans contenu générique.",
        inclus: [
          "Direction artistique",
          "Tournage photo & vidéo",
          "Montage et post-production",
          "Déclinaisons multi-formats",
        ],
        benefices: [
          "Bibliothèque de contenus exclusive",
          "Cohérence visuelle premium",
          "Gain de temps interne",
        ],
        livrables: ["Pack mensuel ou ponctuel", "Fichiers HD livrés en cloud"],
        delai: "Livraison 10 à 15 jours",
        pour: "Marques qui veulent arrêter d'improviser leur contenu.",
        image: feedEditing,
      },
      {
        slug: "production-video",
        title: "Production vidéo",
        short: "Films de marque, publicités et capsules cinématographiques pensés pour marquer les esprits.",
        inclus: [
          "Pré-production & scénario",
          "Tournage cinéma",
          "Étalonnage & sound design",
          "Versions courtes pour réseaux",
        ],
        benefices: ["Image cinéma", "Storytelling fort", "ROI publicitaire supérieur"],
        livrables: ["Film maître", "Versions 9:16 / 1:1 / 16:9"],
        delai: "3 à 5 semaines",
        pour: "Marques premium, immobilier, horlogerie, hôtellerie.",
        image: feedAerialCar,
      },
    ],
  },
  {
    id: "clients",
    kicker: "Objectif 02",
    title: "Je veux plus de clients",
    pitch:
      "Transformez vos visiteurs en clients qualifiés grâce à des campagnes pilotées et des pages qui convertissent.",
    solutions: [
      {
        slug: "google-ads",
        title: "Google Ads",
        short: "Captez les intentions d'achat sur Google avec des campagnes Search, Performance Max et YouTube.",
        inclus: [
          "Audit du marché local",
          "Création des campagnes",
          "Optimisation hebdomadaire",
          "Reporting transparent",
        ],
        benefices: ["Leads qualifiés", "ROAS mesuré", "Visibilité immédiate"],
        livrables: ["Compte Ads structuré", "Tableau de bord performance"],
        delai: "Lancement sous 10 jours",
        pour: "Services locaux, e-commerce, B2B à Genève et en Suisse.",
        image: feedPhone,
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        short: "Publicités Instagram & Facebook qui combinent créa cinéma et ciblage chirurgical.",
        inclus: [
          "Stratégie de funnel",
          "Production de créas vidéo",
          "A/B testing continu",
          "Pixel & événements de conversion",
        ],
        benefices: ["Coût par lead réduit", "Notoriété + conversion", "Scalabilité"],
        livrables: ["Campagnes structurées", "10+ créas par mois"],
        delai: "Lancement sous 10 jours",
        pour: "Marques DTC, services premium, événementiel.",
        image: feedCampaignNoel,
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        short: "Pages d'atterrissage haute conversion conçues pour transformer chaque clic en opportunité.",
        inclus: [
          "Wireframe orienté conversion",
          "Copywriting persuasif FR",
          "Design premium responsive",
          "Tracking & analytics",
        ],
        benefices: ["Taux de conversion supérieur", "Image cohérente", "Mesure précise"],
        livrables: ["1 landing page optimisée", "Intégration tracking"],
        delai: "2 à 3 semaines",
        pour: "Campagnes Ads, lancements, événements.",
        image: workNoir,
      },
    ],
  },
  {
    id: "image",
    kicker: "Objectif 03",
    title: "Je veux améliorer mon image",
    pitch:
      "Construisez une identité forte, mémorable et alignée avec votre positionnement premium.",
    solutions: [
      {
        slug: "branding",
        title: "Branding",
        short: "Identité visuelle complète : nom, logo, charte et univers de marque cohérent.",
        inclus: [
          "Plateforme de marque",
          "Logo & système visuel",
          "Charte graphique",
          "Templates print & digital",
        ],
        benefices: ["Reconnaissance immédiate", "Positionnement premium", "Cohérence durable"],
        livrables: ["Brand book PDF", "Fichiers vectoriels"],
        delai: "4 à 6 semaines",
        pour: "Nouvelles marques ou refonte d'identité.",
        image: workFashion,
      },
      {
        slug: "photographie",
        title: "Photographie professionnelle",
        short: "Reportages, portraits corporate, packshots produits et imagerie éditoriale.",
        inclus: ["Repérage", "Direction artistique", "Shooting studio ou extérieur", "Retouche pro"],
        benefices: ["Image cohérente", "Visuels exclusifs", "Crédibilité renforcée"],
        livrables: ["Galerie HD livrée en cloud"],
        delai: "1 à 2 semaines",
        pour: "Hôtels, restaurants, horlogerie, dirigeants.",
        image: workVilla,
      },
      {
        slug: "site-internet",
        title: "Création de site internet",
        short: "Sites vitrines et e-commerce sur mesure, rapides, élégants et optimisés SEO.",
        inclus: [
          "UX/UI sur mesure",
          "Développement performant",
          "SEO technique",
          "Formation à l'autonomie",
        ],
        benefices: ["Vitrine premium 24/7", "Conversion accrue", "SEO Genève"],
        livrables: ["Site responsive", "CMS & formations"],
        delai: "4 à 8 semaines",
        pour: "PME, marques premium, indépendants ambitieux.",
        image: feedBoutique,
      },
    ],
  },
  {
    id: "accompagnement",
    kicker: "Objectif 04",
    title: "Je veux un accompagnement complet",
    pitch:
      "Confiez votre marketing à un studio créatif qui pense, produit et pilote chaque mois pour vous.",
    solutions: [
      {
        slug: "gestion-marketing",
        title: "Gestion marketing complète",
        short: "Un studio externalisé : stratégie, contenu, ads et reporting sous une seule direction.",
        inclus: [
          "Stratégie 360°",
          "Production mensuelle",
          "Pilotage publicitaire",
          "Réunions stratégiques",
        ],
        benefices: ["Sérénité totale", "Direction unique", "Performance suivie"],
        livrables: ["Roadmap mensuelle", "Reporting consolidé"],
        delai: "Onboarding 14 jours",
        pour: "Dirigeants qui veulent reprendre du temps.",
        image: workWatch,
      },
      {
        slug: "production-mensuelle",
        title: "Production de contenu mensuelle",
        short: "Un shooting récurrent qui alimente vos réseaux, votre site et vos campagnes.",
        inclus: ["Journée tournage / mois", "Photo + vidéo", "Montage & livraison", "Banque d'assets"],
        benefices: ["Flux constant de contenus", "Coût optimisé", "Image cohérente"],
        livrables: ["20 à 40 assets / mois"],
        delai: "Démarrage sous 14 jours",
        pour: "Marques actives sur plusieurs canaux.",
        image: feedRestaurant,
      },
      {
        slug: "conseil-strategique",
        title: "Conseil stratégique",
        short: "Sessions de direction créative et marketing pour clarifier votre cap.",
        inclus: ["Audit complet", "Plan d'action 90 jours", "Recommandations créatives", "Suivi"],
        benefices: ["Vision claire", "Priorités définies", "Décisions accélérées"],
        livrables: ["Document stratégique"],
        delai: "2 à 3 semaines",
        pour: "Fondateurs et équipes marketing.",
        image: feedEditing,
      },
    ],
  },
];

const seoZones = [
  { tag: "Marketing Digital Genève", desc: "Stratégies digitales 360° pour les marques de Suisse romande." },
  { tag: "Gestion des Réseaux Sociaux Genève", desc: "Une présence sociale premium, pilotée chaque jour." },
  { tag: "Création de Site Internet Genève", desc: "Sites sur mesure, rapides, optimisés et élégants." },
  { tag: "Production Vidéo Genève", desc: "Films de marque cinématographiques produits localement." },
  { tag: "Photographie Professionnelle Genève", desc: "Imagerie éditoriale pour marques et dirigeants." },
  { tag: "Branding Genève", desc: "Identités visuelles construites pour durer et valoriser." },
  { tag: "Publicité Digitale Genève", desc: "Campagnes Google & Meta Ads orientées résultats." },
];

const testimonials = [
  {
    quote:
      "TRÍADE a transformé notre image. Nos réseaux ressemblent enfin à une vraie marque premium.",
    name: "Camille R.",
    role: "Fondatrice — Maison de joaillerie, Genève",
  },
  {
    quote:
      "Sérieux, créatif, efficace. Notre coût par lead a baissé de 38% en deux mois.",
    name: "Marc D.",
    role: "Directeur — Immobilier de prestige",
  },
  {
    quote:
      "Un studio qui pense business avant esthétique. C'est ce qu'il nous manquait.",
    name: "Léa S.",
    role: "CEO — Groupe restauration",
  },
];

function SolutionsPage() {
  const [activeObjective, setActiveObjective] = useState<string>(objectives[0].id);
  const current = useMemo(
    () => objectives.find((o) => o.id === activeObjective) ?? objectives[0],
    [activeObjective],
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-16 md:px-10 md:pt-44 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Solutions · TRÍADE Marketing & Publicité · Genève
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Comment pouvons-nous aider <em className="italic text-accent">votre entreprise</em> ?
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Choisissez votre objectif. Nous construisons la solution sur-mesure — visibilité, clients,
            image ou accompagnement complet.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {objectives.map((o) => (
              <button
                key={o.id}
                onClick={() => {
                  setActiveObjective(o.id);
                  document.getElementById("solutions-detail")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-500 ${
                  activeObjective === o.id
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/20 hover:border-foreground/60"
                }`}
              >
                {o.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVE NAV (sticky) */}
      <section id="solutions-detail" className="sticky top-0 z-30 border-y border-foreground/10 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 md:px-10">
          {objectives.map((o) => (
            <button
              key={o.id}
              onClick={() => setActiveObjective(o.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                activeObjective === o.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {o.kicker} — {o.title.replace("Je veux ", "")}
            </button>
          ))}
        </div>
      </section>

      {/* SOLUTIONS CONTENT */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{current.kicker}</p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {current.title}
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">{current.pitch}</p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {current.solutions.map((s) => (
              <article
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-foreground/10 bg-card transition-all duration-700 hover:-translate-y-1 hover:border-foreground/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-5 p-7">
                  <h3 className="font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.short}</p>

                  <div className="mt-2 grid gap-4 border-t border-foreground/10 pt-5 text-xs">
                    <Block label="Ce qui est inclus" items={s.inclus} />
                    <Block label="Bénéfices" items={s.benefices} />
                    <Block label="Livrables" items={s.livrables} />
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <Meta label="Délai" value={s.delai} />
                      <Meta label="Pour qui" value={s.pour} />
                    </div>
                  </div>

                  <a
                    href={`#contact?service=${encodeURIComponent(s.title)}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      const sel = document.getElementById("service-select") as HTMLSelectElement | null;
                      if (sel) sel.value = s.title;
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-3 inline-flex items-center justify-between rounded-full border border-foreground/30 px-5 py-3 text-[10px] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
                  >
                    Demander un devis
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO ZONES */}
      <section className="border-t border-foreground/10 bg-card/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Genève · Lausanne · Suisse romande
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Une agence locale, des solutions <em className="italic text-accent">premium</em>.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {seoZones.map((z) => (
              <div
                key={z.tag}
                className="rounded-2xl border border-foreground/10 bg-background/60 p-6 transition-colors hover:border-foreground/30"
              >
                <h3 className="text-sm font-medium tracking-tight">{z.tag}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Preuve sociale</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">Ils nous font confiance.</h2>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Stat n="+80" l="Marques accompagnées" />
              <Stat n="+5M" l="Vues générées" />
              <Stat n="98%" l="Clients fidèles" />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8"
              >
                <blockquote className="font-display text-xl leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-auto text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <span className="block text-foreground">{t.name}</span>
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Mini portfolio */}
          <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[workWatch, workFashion, workVilla, workNoir].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <img src={src} alt="Portfolio TRÍADE" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / LEAD FORM */}
      <ContactForm />

      <SiteFooter />
    </main>
  );
}

function Block({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-[13px] text-foreground/90">
            <span className="mt-[7px] inline-block h-1 w-1 shrink-0 rounded-full bg-accent" />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-foreground/10 p-3">
      <p className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-[12px] leading-snug text-foreground/90">{value}</p>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-display text-3xl text-foreground">{n}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em]">{l}</p>
    </div>
  );
}

const SERVICE_OPTIONS = objectives.flatMap((o) => o.solutions.map((s) => s.title));

function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    telephone: "",
    email: "",
    entreprise: "",
    service: SERVICE_OPTIONS[0],
    description: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [k]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.email) return;
    const msg = `Bonjour TRÍADE,\n\nJe souhaite obtenir un devis.\n\nNom : ${form.nom}\nTéléphone : ${form.telephone}\nEmail : ${form.email}\nEntreprise : ${form.entreprise}\nService souhaité : ${form.service}\nDescription du projet : ${form.description}\n\nMerci.`;
    const url = `https://wa.me/41768402732?text=${encodeURIComponent(msg)}`;
    setSent(true);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="border-t border-foreground/10 bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">Devis express</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Parlons de votre projet en <em className="italic">30 secondes</em>.
          </h2>
          <p className="mt-6 max-w-md text-sm text-background/70">
            Remplissez ce formulaire — vous serez automatiquement redirigé vers WhatsApp avec votre
            demande prête à envoyer. Réponse sous 24h ouvrées.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href="https://wa.me/41768402732" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> +41 76 840 27 32
            </a>
            <a href="mailto:contact@triadepublicite.ch" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> contact@triadepublicite.ch
            </a>
            <p className="flex items-center gap-3 text-background/60">
              <span className="h-px w-8 bg-background/40" /> Genève · Suisse romande
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[2rem] border border-background/15 bg-background/5 p-6 backdrop-blur-sm md:p-8"
        >
          <Field label="Nom *" value={form.nom} onChange={handleChange("nom")} required maxLength={80} />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Téléphone *" value={form.telephone} onChange={handleChange("telephone")} required maxLength={30} type="tel" />
            <Field label="Email *" value={form.email} onChange={handleChange("email")} required maxLength={120} type="email" />
          </div>
          <Field label="Entreprise" value={form.entreprise} onChange={handleChange("entreprise")} maxLength={120} />

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Service souhaité</span>
            <select
              id="service-select"
              value={form.service}
              onChange={handleChange("service")}
              className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors focus:border-background/60"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-foreground text-background">
                  {opt}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Description rapide</span>
            <textarea
              value={form.description}
              onChange={handleChange("description")}
              maxLength={600}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-background/60"
              placeholder="En quelques mots, votre objectif…"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-between rounded-full bg-background px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Envoyer via WhatsApp
            <span aria-hidden>→</span>
          </button>
          {sent && (
            <p className="text-xs text-background/70">
              Votre message s'ouvre dans WhatsApp. Si rien ne se passe, appelez le +41 76 840 27 32.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  ...rest
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">{label}</span>
      <input
        type={type}
        {...rest}
        className="mt-2 w-full rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-background/60"
      />
    </label>
  );
}
