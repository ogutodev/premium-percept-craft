import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import feedRestaurant from "@/assets/feed-restaurant.jpg";
import feedBts from "@/assets/feed-bts-camera.jpg";
import feedNoel from "@/assets/feed-campaign-noel.jpg";
import feedClient from "@/assets/feed-client-portrait.jpg";
import feedWatch from "@/assets/feed-watch.jpg";
import feedEditing from "@/assets/feed-editing.jpg";
import feedAerial from "@/assets/feed-aerial-car.jpg";
import feedFood from "@/assets/feed-food.jpg";
import feedPhone from "@/assets/feed-phone.jpg";
import feedWedding from "@/assets/feed-wedding.jpg";
import feedEvent from "@/assets/feed-event.jpg";
import feedBoutique from "@/assets/feed-boutique.jpg";
import workWatch from "@/assets/work-watch.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workVilla from "@/assets/work-villa.jpg";
import workNoir from "@/assets/work-noir.jpg";
import founder1 from "@/assets/founder-1.png";

export const Route = createFileRoute("/contenus")({
  component: ContenusPage,
  head: () => ({
    meta: [
      { title: "Contenus — TRÍADE · Studio créatif Genève" },
      {
        name: "description",
        content:
          "Découvrez l'univers TRÍADE : campagnes de marque, films cinématographiques, reels, photographie éditoriale et direction artistique pour les marques d'exception.",
      },
    ],
  }),
});

type Tile = {
  src: string;
  tag: string;
  title: string;
  meta: string;
  type: "image" | "reel" | "campaign" | "carousel";
  span?: string;
};

const feed: Tile[] = [
  { src: feedRestaurant, tag: "Restaurant · Lausanne", title: "Soirée signature", meta: "Carrousel · 8 visuels", type: "carousel" },
  { src: feedBts, tag: "Backstage", title: "Tournage commercial", meta: "Reel · 00:24", type: "reel" },
  { src: feedNoel, tag: "Campagne saisonnière", title: "Séance Photo de Noël", meta: "Post · Janvier", type: "campaign" },
  { src: feedClient, tag: "Personal branding", title: "Portrait fondatrice", meta: "Photographie", type: "image" },
  { src: feedWatch, tag: "Horlogerie", title: "Chronos Heritage", meta: "Film produit", type: "reel" },
  { src: feedEditing, tag: "Post-production", title: "Étalonnage cinéma", meta: "BTS · Studio", type: "image" },
  { src: feedAerial, tag: "Automobile", title: "Route alpine", meta: "Reel · 00:18", type: "reel" },
  { src: feedFood, tag: "Gastronomie", title: "Édition gourmet", meta: "Photographie", type: "image" },
  { src: feedWedding, tag: "Mariage", title: "Cérémonie de prestige", meta: "Film événement", type: "campaign" },
  { src: feedBoutique, tag: "Retail", title: "Boutique signature", meta: "Direction artistique", type: "image" },
  { src: feedEvent, tag: "Événementiel", title: "Conférence d'auteur", meta: "Reportage", type: "reel" },
  { src: workVilla, tag: "Immobilier", title: "Alpine Heights", meta: "Reel · 00:32", type: "reel" },
];

const reels = [
  { src: feedAerial, label: "Auto · 00:18", views: "412k" },
  { src: feedPhone, label: "Lifestyle · 00:22", views: "286k" },
  { src: feedRestaurant, label: "F&B · 00:14", views: "198k" },
  { src: feedClient, label: "Personal · 00:31", views: "164k" },
  { src: feedNoel, label: "Saison · 00:27", views: "352k" },
];

const services = [
  { n: "01", title: "Films de marque", body: "Spots cinématographiques pour la télévision, le web et les réseaux." },
  { n: "02", title: "Reels & TikTok", body: "Formats courts pensés pour la rétention, la portée et la conversion." },
  { n: "03", title: "Photographie éditoriale", body: "Visuels de campagne, portraits corporate et imagerie produit." },
  { n: "04", title: "Direction artistique", body: "Univers visuels cohérents : moodboards, lookbooks, chartes." },
  { n: "05", title: "Gestion sociale", body: "Stratégie éditoriale, planification et community management premium." },
  { n: "06", title: "Couverture événementielle", body: "Mariages, conférences, galas — capturés comme un long-métrage." },
];

const transformations = [
  {
    img: workFashion,
    name: "Maison L'Atelier",
    sector: "Mode · Genève",
    before: "Présence Instagram dispersée, sans direction visuelle.",
    after: "Identité éditoriale cohérente, +210% d'engagement en 90 jours.",
  },
  {
    img: workWatch,
    name: "Chronos Heritage",
    sector: "Horlogerie · Vaud",
    before: "Photos produit standards, peu de désir de marque.",
    after: "Campagne cinématographique reprise par 3 médias spécialisés.",
  },
  {
    img: workNoir,
    name: "Velocity Motors",
    sector: "Automobile · Lausanne",
    before: "Aucun contenu vidéo, présence locale uniquement.",
    after: "Reels viraux, audience nationale et premiers leads internationaux.",
  },
];

function ContenusPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      {/* HERO IMMERSIF — collage cinématographique */}
      <section className="relative flex min-h-screen items-center px-6 pt-28 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-70"
          style={{
            background:
              "radial-gradient(50% 40% at 20% 20%, color-mix(in oklab, var(--accent) 30%, transparent), transparent), radial-gradient(45% 40% at 85% 80%, color-mix(in oklab, var(--brand) 60%, transparent), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-10">
            <p className="animate-reveal-up font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
              @triadepublicite · Studio créatif
            </p>
            <h1
              className="font-display text-balance text-5xl italic leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6rem]"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "120ms" }}
            >
              Des contenus pensés pour{" "}
              <span className="relative inline-block">
                marquer les esprits.
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-accent/60" />
              </span>
            </h1>
            <p
              className="max-w-xl text-balance text-lg leading-relaxed text-muted-foreground"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "240ms" }}
            >
              Films, photographies, reels et campagnes — TRÍADE conçoit l'écosystème visuel
              complet des marques qui veulent exister fortement, en ligne comme en mémoire.
            </p>
            <div
              className="flex flex-wrap gap-3"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "360ms" }}
            >
              <a
                href="#feed"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Voir le feed
                <span aria-hidden>↓</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
              >
                Démarrer un projet
              </a>
            </div>
          </div>

          {/* Collage cinématographique */}
          <div
            className="relative lg:col-span-5 h-[520px] md:h-[640px]"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "420ms" }}
          >
            <div className="absolute left-0 top-0 w-[58%] aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img src={feedRestaurant} alt="" className="size-full object-cover" loading="eager" />
            </div>
            <div className="absolute right-0 top-12 w-[44%] aspect-[9/16] overflow-hidden rounded-[1.75rem] ring-1 ring-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <img src={feedAerial} alt="" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest">
                <span className="text-accent">Reel · 00:18</span>
                <span>▶</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-8 w-[50%] aspect-square overflow-hidden rounded-[1.75rem] ring-1 ring-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <img src={feedWatch} alt="" className="size-full object-cover" />
            </div>
            <div className="absolute -right-2 bottom-16 hidden rounded-2xl bg-card/90 px-4 py-3 backdrop-blur ring-1 ring-border md:block">
              <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                En production
              </p>
              <p className="font-display text-base italic">12 marques actives</p>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU MARQUES */}
      <section className="border-y border-border bg-secondary/30 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-accent">Univers TRÍADE</span>
          <span>Mode</span>
          <span>Horlogerie</span>
          <span>Gastronomie</span>
          <span>Immobilier</span>
          <span>Automobile</span>
          <span>Événementiel</span>
          <span>Beauté</span>
        </div>
      </section>

      {/* FEED INSTAGRAM PREMIUM */}
      <section id="feed" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                01 — Le feed
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">
                Un univers visuel cohérent.
              </h2>
            </div>
            <a
              href="https://instagram.com/triadepublicite"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-5 py-2.5 text-xs uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
            >
              @triadepublicite <span aria-hidden>→</span>
            </a>
          </div>

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5 lg:auto-rows-[220px]">
            {feed.map((t, i) => {
              const layouts = [
                "row-span-2",
                "row-span-1",
                "row-span-2",
                "row-span-1",
                "row-span-1",
                "row-span-2",
                "row-span-2",
                "row-span-1",
                "row-span-1",
                "row-span-2",
                "row-span-1",
                "row-span-1",
              ];
              return (
                <article
                  key={i}
                  className={`group relative overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-border ${layouts[i]}`}
                >
                  <img
                    src={t.src}
                    alt={t.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest backdrop-blur">
                    {t.type === "reel" && <span className="text-accent">▶ Reel</span>}
                    {t.type === "carousel" && <span className="text-accent">⌗ Carrousel</span>}
                    {t.type === "campaign" && <span className="text-accent">★ Campagne</span>}
                    {t.type === "image" && <span className="text-accent">◌ Photo</span>}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-accent">
                      {t.tag}
                    </p>
                    <h3 className="mt-1 font-display text-lg italic leading-tight md:text-xl">
                      {t.title}
                    </h3>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {t.meta}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* REELS EXPERIENCE */}
      <section className="border-y border-border bg-secondary/20 px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                02 — Reels
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">
                Pensés pour arrêter le scroll.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Chaque format vertical est calibré pour la rétention, la viralité et la conversion —
              sans jamais sacrifier la signature de votre marque.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-6">
            {reels.map((r, i) => (
              <div
                key={i}
                className="group relative aspect-[9/16] overflow-hidden rounded-[1.75rem] ring-1 ring-border"
                style={{ transform: i % 2 === 1 ? "translateY(2.5rem)" : undefined }}
              >
                <img
                  src={r.src}
                  alt={r.label}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />

                {/* UI Reels */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3 font-mono text-[9px] uppercase tracking-widest">
                  <span className="rounded-full bg-background/60 px-2 py-1 backdrop-blur">Reels</span>
                  <span className="rounded-full bg-background/60 px-2 py-1 backdrop-blur">⋯</span>
                </div>

                <div className="absolute right-3 bottom-20 flex flex-col items-center gap-3 text-[10px]">
                  <span className="grid place-items-center size-9 rounded-full bg-background/50 backdrop-blur">♡</span>
                  <span className="grid place-items-center size-9 rounded-full bg-background/50 backdrop-blur">◌</span>
                  <span className="grid place-items-center size-9 rounded-full bg-background/50 backdrop-blur">↗</span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-accent">
                    @triadepublicite
                  </p>
                  <p className="mt-1 font-display text-sm italic">{r.label}</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    {r.views} vues
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES CONTENU */}
      <section className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                03 — Formats
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">
                Tout ce dont votre marque a besoin pour exister.
              </h2>
            </div>
            <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
              Un studio intégré qui pense, tourne, monte et diffuse vos contenus — pour une
              cohérence parfaite sur l'ensemble de vos points de contact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.n}
                className="group rounded-[1.75rem] border border-border bg-card/40 p-8 transition-colors hover:border-accent/50 hover:bg-card md:p-10"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{s.n}</span>
                  <span className="size-2 rounded-full bg-accent transition-transform group-hover:scale-150" />
                </div>
                <h3 className="font-display text-2xl italic md:text-3xl">{s.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHÈRE STUDIO */}
      <section className="border-t border-border px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                04 — Atmosphère
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">
                Le studio en mouvement.
              </h2>
            </div>
            <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
              Caméras, lumières, repérages, étalonnage : un savoir-faire artisanal au service
              d'une production cinématographique exigeante.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-border">
              <img src={feedBts} alt="Tournage en plateau" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Backstage · Plateau studio
                </p>
                <p className="mt-2 font-display text-2xl italic md:text-3xl">L'image se construit ici.</p>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-border">
                <img src={feedEditing} alt="Salle d'étalonnage" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Post-production
                  </p>
                  <p className="mt-1 font-display text-xl italic">Étalonnage & son</p>
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-border">
                <img src={founder1} alt="Direction créative TRÍADE" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Direction créative
                  </p>
                  <p className="mt-1 font-display text-xl italic">Sur le terrain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS CLIENTS */}
      <section className="bg-foreground px-6 py-32 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              05 — Transformations
            </span>
            <h2 className="font-display text-4xl italic md:text-6xl">
              Avant TRÍADE. <span className="opacity-50">Après TRÍADE.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {transformations.map((t) => (
              <article
                key={t.name}
                className="overflow-hidden rounded-[2rem] border border-background/10 bg-background/5"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="size-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      {t.sector}
                    </p>
                    <h3 className="mt-1 font-display text-2xl italic">{t.name}</h3>
                  </div>
                </div>
                <div className="space-y-4 p-6 md:p-8">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest opacity-50">Avant</p>
                    <p className="mt-2 text-sm leading-relaxed opacity-70">{t.before}</p>
                  </div>
                  <div className="border-t border-background/10 pt-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Après</p>
                    <p className="mt-2 text-sm leading-relaxed">{t.after}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contact"
        className="relative overflow-hidden px-6 py-40 text-center md:px-10 md:py-56"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-transparent"
        />
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-balance font-display text-5xl italic leading-[1.05] md:text-7xl lg:text-8xl">
            Votre présence digitale mérite plus
            <br />
            <span className="text-accent">que du contenu générique.</span>
          </h2>
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
            Reels, films, photographies, campagnes — un seul studio pour bâtir une image qui
            attire, qui retient et qui convertit.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@triadepublicite.ch"
              className="inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Construisons une image qui attire
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="pt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Genève — Suisse — International
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
