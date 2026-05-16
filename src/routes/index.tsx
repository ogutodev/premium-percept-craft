import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";
import founder3 from "@/assets/founder-3.png";
import workWatch from "@/assets/work-watch.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workVilla from "@/assets/work-villa.jpg";
import workNoir from "@/assets/work-noir.jpg";
import feedRestaurant from "@/assets/feed-restaurant.jpg";
import feedWatch from "@/assets/feed-watch.jpg";
import feedBoutique from "@/assets/feed-boutique.jpg";
import feedFood from "@/assets/feed-food.jpg";
import feedAerialCar from "@/assets/feed-aerial-car.jpg";
import feedBtsCamera from "@/assets/feed-bts-camera.jpg";
import feedEditing from "@/assets/feed-editing.jpg";
import feedCampaignNoel from "@/assets/feed-campaign-noel.jpg";
import feedEvent from "@/assets/feed-event.jpg";
import feedPhone from "@/assets/feed-phone.jpg";
import feedWedding from "@/assets/feed-wedding.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    n: "01",
    title: "Stratégie de marque",
    body: "Identités visuelles construites pour la longévité, la valorisation premium et une reconnaissance immédiate.",
  },
  {
    n: "02",
    title: "Production cinématographique",
    body: "Films publicitaires d'auteur — des récits que l'on regarde, pas que l'on défile.",
  },
  {
    n: "03",
    title: "Photographie & direction artistique",
    body: "Une imagerie éditoriale qui place votre marque aux côtés des plus belles signatures du marché.",
  },
  {
    n: "04",
    title: "Présence sociale",
    body: "Systèmes de contenu calibrés pour dominer Reels, TikTok et fils d'actualité avec justesse.",
  },
  {
    n: "05",
    title: "Architecture digitale",
    body: "Sites web sur mesure pensés comme de véritables vitrines numériques à haute conversion.",
  },
  {
    n: "06",
    title: "Croissance média",
    body: "Campagnes payantes nourries par des visuels si forts qu'ils dépassent leurs propres enchères.",
  },
];

const works = [
  {
    src: workWatch,
    title: "Chronos Heritage",
    tag: "Branding · Film",
    span: "md:col-span-8 md:row-span-2",
    aspect: "aspect-16/10",
  },
  {
    src: workFashion,
    title: "Studio L'Art",
    tag: "Direction créative",
    span: "md:col-span-4 md:row-span-3",
    aspect: "aspect-4/5",
  },
  {
    src: workVilla,
    title: "Alpine Heights",
    tag: "Immobilier de prestige",
    span: "md:col-span-5 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: workNoir,
    title: "Velocity Noir",
    tag: "Cinématographie",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-16/9",
  },
];

const stats = [
  { value: "120+", label: "Projets livrés" },
  { value: "40M+", label: "Portée totale" },
  { value: "14", label: "Marques de luxe" },
  { value: "08", label: "Distinctions" },
];

const process = [
  { n: "01", title: "Stratégie", body: "Diagnostic du positionnement, de l'audience et de l'écart visuel avec le leader du marché." },
  { n: "02", title: "Production", body: "Direction, lumière, lieu, casting — chaque plan pensé avec intention." },
  { n: "03", title: "Montage", body: "Couleur, son et rythme assemblés en récit que votre audience ne peut ignorer." },
  { n: "04", title: "Diffusion", body: "Distribution et amplification payante qui transforment vos contenus en présence mesurable." },
];

const testimonials = [
  {
    quote:
      "TRÍADE n'a pas seulement filmé notre marque — ils ont reconfiguré la manière dont le marché nous perçoit. Les demandes ont doublé en soixante jours.",
    name: "Élise Marchand",
    role: "Fondatrice · Maison Marchand",
  },
  {
    quote:
      "Le niveau de goût et d'exécution évoque davantage une maison de couture parisienne qu'une agence de marketing.",
    name: "Lukas Vogel",
    role: "Directeur · Vogel Horlogerie",
  },
  {
    quote:
      "Chaque livrable a élevé notre standard. Notre marque a enfin l'allure que nous lui rêvions.",
    name: "Anaïs Roux",
    role: "CMO · Roux Architecture",
  },
];

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      {/* HERO — split editorial avec portrait */}
      <section className="relative flex min-h-screen items-center px-6 pt-28 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 30%, color-mix(in oklab, var(--accent) 35%, transparent), transparent), radial-gradient(45% 40% at 10% 80%, color-mix(in oklab, var(--brand) 50%, transparent), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-6 animate-reveal-up font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
              Genève · Studio créatif
            </p>
            <h1
              className="mb-10 font-display text-balance text-5xl italic leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "150ms" }}
            >
              La plupart des marques n'ont pas besoin{" "}
              <span className="text-foreground/40">de plus de posts.</span>
              <br />
              Elles ont besoin de{" "}
              <span className="relative inline-block">
                présence.
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-accent/60" />
              </span>
            </h1>
            <div
              className="flex flex-col items-start gap-10 md:flex-row md:items-end"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "300ms" }}
            >
              <p className="max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
                TRÍADE conçoit des récits visuels stratégiques qui transforment les entreprises en
                marques premium d'autorité.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Réserver un appel
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="#travaux"
                  className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
                >
                  Voir nos travaux
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative lg:col-span-5"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "450ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-border">
              <img
                src={founder3}
                alt="Fondateur de TRÍADE en pleine direction de tournage"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Augusto Sousa · Fondateur
                </p>
                <p className="mt-2 font-display text-2xl italic">Direction & Image</p>
              </div>
            </div>
            <div className="absolute -left-6 -top-6 hidden size-32 rounded-full border border-accent/40 lg:block" />
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-card/90 px-5 py-4 backdrop-blur ring-1 ring-border lg:block">
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                Studio
              </p>
              <p className="font-display text-lg italic">Cinematic Authority</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex">
          <span className="h-px w-12 bg-foreground/30" />
          Défiler
        </div>
      </section>

      {/* MÉTRIQUES D'AUTORITÉ */}
      <section className="border-y border-border bg-secondary/40 px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="space-y-2">
                <span className="block font-mono text-3xl text-accent">{s.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <div className="hidden text-right md:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Marques de confiance
            </p>
            <div className="mt-2 flex gap-6 opacity-60">
              <span className="font-display text-sm italic">Horlogerie.</span>
              <span className="font-display text-sm italic">Maison.</span>
              <span className="font-display text-sm italic">Atelier.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="travaux" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between md:mb-20">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                01 — Sélection
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">Autorité visuelle.</h2>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full border border-foreground/30 px-5 py-2.5 text-xs uppercase tracking-widest transition-all hover:border-accent hover:text-accent md:inline-block"
            >
              Commander un projet
            </a>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {works.map((w, i) => (
              <article
                key={w.title}
                className={`group relative col-span-12 cursor-pointer overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-border ${w.span}`}
                style={i === 1 ? { marginTop: "5rem" } : i === 2 ? { marginTop: "-5rem" } : undefined}
              >
                <div className={`relative ${w.aspect} overflow-hidden`}>
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {w.tag}
                    </p>
                    <h3 className="font-display text-2xl italic md:text-3xl">{w.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO — coulisses & atmosphère */}
      <section id="studio" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 space-y-6">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                02 — Le studio
              </span>
              <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
                Une signature.
                <br />
                Une obsession du détail.
              </h2>
            </div>
            <p className="md:col-span-5 text-balance text-base leading-relaxed text-muted-foreground">
              TRÍADE est dirigé comme une maison de création — chaque image porte une intention,
              chaque plan répond à une stratégie. Nous travaillons depuis Genève pour des marques
              qui refusent l'ordinaire.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-[2rem] ring-1 ring-border">
              <img src={founder1} alt="Direction artistique en plateau" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Backstage · 02:14</p>
                <p className="mt-2 font-display text-2xl italic md:text-3xl">L'instant capté.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border">
                <img src={founder2} alt="Cadrage et composition cinématographique" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="rounded-[2rem] bg-card p-8 ring-1 ring-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Approche</p>
                <p className="mt-4 font-display text-xl italic leading-snug">
                  « Nous ne produisons pas du contenu. Nous bâtissons une perception. »
                </p>
                <p className="mt-6 text-sm text-muted-foreground">— Augusto Sousa, fondateur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONDATEUR — Augusto Sousa */}
      <section id="fondateur" className="border-t border-border px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-border shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
              <img
                src={founder2}
                alt="Augusto Sousa, fondateur et directeur créatif de TRÍADE"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Fondateur · CEO
                </p>
                <p className="mt-2 font-display text-3xl italic">Augusto Sousa</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              03 — Le regard derrière la marque
            </span>
            <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
              Une vision créative.
              <br />
              <span className="text-foreground/50">Une signature suisse.</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Augusto Sousa est le fondateur et directeur créatif de TRÍADE. Entrepreneur basé en
                Suisse, il dirige chaque projet avec une exigence d'auteur — du premier brief
                stratégique à la dernière étalonnage couleur.
              </p>
              <p>
                Sa conviction est simple : une marque ne se construit pas en publiant davantage,
                mais en imposant une perception. C'est cette obsession qui nourrit la signature
                visuelle de TRÍADE et le travail mené pour ses clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Rôle
                </p>
                <p className="mt-2 font-display text-lg italic">Directeur créatif</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Basé à
                </p>
                <p className="mt-2 font-display text-lg italic">Genève, Suisse</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Expertise
                </p>
                <p className="mt-2 font-display text-lg italic">Image & stratégie</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DILEMME */}
      <section className="relative border-y border-border px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-5xl">
          <span className="mb-10 block text-center font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            03 — Le dilemme
          </span>
          <h2 className="text-balance text-center font-display text-4xl leading-[1.05] md:text-7xl">
            Un bon contenu ne suffit plus.
            <br />
            <span className="italic text-foreground/50">Aujourd'hui, il faut</span>{" "}
            <span className="italic">imposer le regard.</span>
          </h2>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-secondary/40 p-8 md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Sans TRÍADE
              </p>
              <p className="text-balance italic leading-relaxed text-muted-foreground">
                « Nous publions chaque jour mais notre marque reste petite. Nous ressemblons à tous
                les concurrents — et le prix devient la seule conversation. »
              </p>
            </div>
            <div className="rounded-[2rem] border border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                Avec TRÍADE
              </p>
              <p className="text-balance leading-relaxed">
                « Notre marque a une stature d'institution. Les gens s'arrêtent. Le prix n'est plus
                la conversation — la perception l'est devenue. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-foreground px-6 py-32 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-6xl italic leading-none md:text-8xl">Notre arsenal.</h2>
            <p className="max-w-sm text-balance text-base leading-relaxed opacity-70">
              Un studio intégré verticalement — stratégie, récit, image et croissance, exécutés
              sous un même toit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2 md:gap-x-20">
            {services.map((s) => (
              <div key={s.n} className="group border-t border-background/10 pt-8">
                <span className="font-mono text-xs opacity-50">{s.n}</span>
                <h3 className="mt-4 font-display text-3xl transition-colors group-hover:text-accent md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed opacity-70">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÉTHODE */}
      <section id="methode" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              04 — Méthode
            </span>
            <h2 className="font-display text-4xl italic md:text-6xl">Un processus cinématographique.</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] ring-1 ring-border">
            <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
              {process.map((p) => (
                <div
                  key={p.n}
                  className="group bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="font-mono text-xs text-accent">{p.n}</span>
                    <span className="size-2 rounded-full bg-accent" />
                  </div>
                  <h3 className="mb-4 font-display text-3xl italic">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RÉSEAUX SOCIAUX — showcase */}
      <section className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                05 — Présence sociale
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">Calibrés pour le feed.</h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Des contenus pensés pour arrêter le scroll, pas pour le suivre. Chaque format est
              conçu en cohérence avec votre univers de marque.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[founder3, founder1, founder2, founder3].map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[9/16] overflow-hidden rounded-[1.5rem] ring-1 ring-border"
              >
                <img
                  src={src}
                  alt={`Format vertical TRÍADE ${i + 1}`}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest">
                  <span className="text-accent">Reel · 0{i + 1}</span>
                  <span className="text-muted-foreground">9:16</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="border-y border-border bg-secondary/30 px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <span className="mb-20 block font-mono text-[10px] uppercase tracking-widest text-accent">
            06 — Voix
          </span>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="space-y-8 rounded-[2rem] border border-border bg-card/40 p-8 md:p-10"
              >
                <span className="block font-display text-5xl italic leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="text-balance text-lg leading-relaxed text-foreground/90 md:text-xl">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-border pt-6">
                  <div className="font-display text-lg italic">{t.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden px-6 py-40 text-center md:px-10 md:py-56">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-transparent"
        />
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-balance font-display text-5xl italic leading-[1.05] md:text-7xl lg:text-8xl">
            Votre entreprise a déjà du potentiel.
            <br />
            <span className="text-accent">Il lui manque le positionnement.</span>
          </h2>
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
            Construisons ensemble quelque chose dont les gens se souviennent — et que vos
            concurrents étudient en silence.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@triadepublicite.ch"
              className="inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Démarrer une conversation
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
