import { Link } from "@tanstack/react-router";
import { projects } from "@/lib/projects";

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
const aspects = ["aspect-16/10", "aspect-16/10 md:aspect-auto", "aspect-21/9"];
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection, BookCallButton } from "@/components/contact-section";
import { ShowreelMedia } from "@/components/showreel-media";
import founder1 from "@/assets/founder-1.webp";
import founder2 from "@/assets/founder-2.webp";
import founder3 from "@/assets/founder-3.webp";
import feedRestaurant from "@/assets/feed-restaurant.webp";
import feedWatch from "@/assets/feed-watch.webp";
import feedBoutique from "@/assets/feed-boutique.webp";
import feedFood from "@/assets/feed-food.webp";
import feedAerialCar from "@/assets/feed-aerial-car.webp";
import feedBtsCamera from "@/assets/feed-bts-camera.webp";
import feedEditing from "@/assets/feed-editing.webp";
import feedCampaignNoel from "@/assets/feed-campaign-noel.webp";
import feedEvent from "@/assets/feed-event.webp";
import feedPhone from "@/assets/feed-phone.webp";
import feedWedding from "@/assets/feed-wedding.webp";


const services = [
  {
    n: "01",
    title: "Brand strategy",
    body: "Visual identities built to endure, elevate your brand and be recognised at a glance.",
  },
  {
    n: "02",
    title: "Cinematic production",
    body: "Authored brand films — stories you watch, not scroll past.",
  },
  {
    n: "03",
    title: "Photography & art direction",
    body: "Editorial imagery that places your brand alongside the finest names in its field.",
  },
  {
    n: "04",
    title: "Social presence",
    body: "Content systems crafted to command Reels, TikTok and social feeds with precision.",
  },
  {
    n: "05",
    title: "Digital architecture",
    body: "Bespoke websites conceived as digital flagships, designed to convert.",
  },
  {
    n: "06",
    title: "Media growth",
    body: "Paid campaigns driven by imagery powerful enough to outshine the bid.",
  },
];

const process = [
  { n: "01", title: "Strategy", body: "An assessment of your positioning, audience and the visual gap between you and the market leader." },
  { n: "02", title: "Production", body: "Direction, light, location, casting — every frame shaped with intention." },
  { n: "03", title: "Editing", body: "Colour, sound and rhythm woven into a story your audience cannot ignore." },
  { n: "04", title: "Distribution", body: "Distribution and paid amplification that turn your content into measurable presence." },
];

export function HomePage() {
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
              Geneva · Creative studio
            </p>
            <h1
              className="mb-10 font-display text-balance text-5xl italic leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.5rem]"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "150ms" }}
            >
              Most brands don't need{" "}
              <span className="text-foreground/40">more posts.</span>
              <br />
              They need{" "}
              <span className="relative inline-block">
                presence.
                <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-accent/60" />
              </span>
            </h1>
            <div
              className="flex flex-col items-start gap-10 md:flex-row md:items-end"
              style={{ animation: "var(--animate-reveal-up)", animationDelay: "300ms" }}
            >
              <div className="max-w-md space-y-4">
              <p className="max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
                TRÍADE crafts strategic visual stories that transform businesses into
                premium brands with authority.
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                Bilingual French · Portuguese studio based in Geneva.
              </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <BookCallButton className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent hover:text-accent-foreground">
                  Book a call
                  <span aria-hidden>→</span>
                </BookCallButton>
                <a
                  href="#travaux"
                  className="inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
                >
                  View our work
                </a>
              </div>
            </div>
          </div>

          <div
            className="relative lg:col-span-5"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "450ms" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-card shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] ring-1 ring-border">
              <ShowreelMedia poster={founder3} alt="TRÍADE founder directing on set" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Augusto Sousa · Founder
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
          Scroll
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="travaux" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between md:mb-20">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                01 — Selection
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">Visual authority.</h2>
            </div>
            <a
              href="#contact"
              className="hidden rounded-full border border-foreground/30 px-5 py-2.5 text-xs uppercase tracking-widest transition-all hover:border-accent hover:text-accent md:inline-block"
            >
              Commission a project
            </a>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {projects.map((w, i) => (
              <Link
                key={w.slug}
                to="/en/travaux/$slug"
                params={{ slug: w.slug }}
                className={`group relative col-span-12 overflow-hidden rounded-[1.75rem] bg-card ring-1 ring-border ${spans[i % spans.length]}`}
              >
                <div className={`relative ${aspects[i % aspects.length]} h-full overflow-hidden`}>
                  <img
                    src={w.cover}
                    alt={w.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-accent">
                      {w.service} · {w.location}
                    </p>
                    <h3 className="font-display text-2xl italic md:text-3xl">{w.name}</h3>
                    <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                      View case study →
                    </span>
                  </div>
                </div>
              </Link>
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
                02 — The studio
              </span>
              <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
                A signature.
                <br />
                An obsession with detail.
              </h2>
            </div>
            <p className="md:col-span-5 text-balance text-base leading-relaxed text-muted-foreground">
              TRÍADE is run as a creative house — every image carries an intention,
              every frame serves a strategy. From Geneva, we work with brands
              that refuse the ordinary.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-7 relative aspect-[4/5] md:aspect-[16/11] overflow-hidden rounded-[2rem] ring-1 ring-border">
              <img loading="lazy" src={founder1} alt="Art direction on set" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Backstage · 02:14</p>
                <p className="mt-2 font-display text-2xl italic md:text-3xl">The moment, captured.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-4 md:gap-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border">
                <img loading="lazy" src={founder2} alt="Cinematic framing and composition" className="size-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="rounded-[2rem] bg-card p-8 ring-1 ring-border">
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Approach</p>
                <p className="mt-4 font-display text-xl italic leading-snug">
                  “We don't produce content. We shape perception.”
                </p>
                <p className="mt-6 text-sm text-muted-foreground">— Augusto Sousa, founder</p>
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
              <img loading="lazy"
                src={founder1}
                alt="Augusto Sousa, founder and creative director of TRÍADE"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  Founder · CEO
                </p>
                <p className="mt-2 font-display text-3xl italic">Augusto Sousa</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              03 — The eye behind the brand
            </span>
            <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
              A creative vision.
              <br />
              <span className="text-foreground/50">A Swiss signature.</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Augusto Sousa is the founder and creative director of TRÍADE. An entrepreneur based in
                Switzerland, he brings an auteur's exacting eye to every project — from the first
                strategic brief to the final colour grade.
              </p>
              <p>
                His conviction is simple: a brand is not built by posting more,
                but by shaping how it is perceived. That obsession informs TRÍADE's visual
                signature and every piece of work created for its clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Role
                </p>
                <p className="mt-2 font-display text-lg italic">Creative director</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Based in
                </p>
                <p className="mt-2 font-display text-lg italic">Geneva, Switzerland</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Expertise
                </p>
                <p className="mt-2 font-display text-lg italic">Image & strategy</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DILEMME */}
      <section className="relative border-y border-border px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-5xl">
          <span className="mb-10 block text-center font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            04 — The dilemma
          </span>
          <h2 className="text-balance text-center font-display text-4xl leading-[1.05] md:text-7xl">
            Good content is no longer enough.
            <br />
            <span className="italic text-foreground/50">Today, you need to</span>{" "}
            <span className="italic">command attention.</span>
          </h2>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-secondary/40 p-8 md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Without TRÍADE
              </p>
              <p className="text-balance italic leading-relaxed text-muted-foreground">
                “We post every day, yet our brand still feels small. We look like every
                competitor — and price becomes the only conversation.”
              </p>
            </div>
            <div className="rounded-[2rem] border border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                With TRÍADE
              </p>
              <p className="text-balance leading-relaxed">
                “Our brand has the stature of an institution. People stop and look. Price is no longer
                the conversation — perception is.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-foreground px-6 py-32 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-6xl italic leading-none md:text-8xl">Our arsenal.</h2>
            <p className="max-w-sm text-balance text-base leading-relaxed opacity-70">
              A vertically integrated studio — strategy, story, image and growth, delivered
              under one roof.
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
                <a
                  href="/en/solutions"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest opacity-70 transition-all hover:gap-3 hover:text-accent hover:opacity-100"
                >
                  Learn more <span aria-hidden>→</span>
                </a>
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
              05 — Method
            </span>
            <h2 className="font-display text-4xl italic md:text-6xl">A cinematic process.</h2>
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

      {/* RÉSEAUX SOCIAUX — showcase agence */}
      <section className="relative overflow-hidden px-6 py-32 md:px-10 md:py-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(50% 40% at 85% 20%, color-mix(in oklab, var(--accent) 25%, transparent), transparent), radial-gradient(40% 35% at 10% 85%, color-mix(in oklab, var(--brand) 40%, transparent), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                06 — Social presence
              </span>
              <h2 className="font-display text-4xl italic leading-[1.05] md:text-6xl">
                Content crafted
                <br />
                for <span className="text-foreground/50">brands.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Reels, campaigns, photography, motion — a visual ecosystem shaped around your
              clients, your products and your world.
            </p>
          </div>

          {/* Masonry éditoriale */}
          <div className="grid grid-cols-12 gap-3 md:gap-5">
            {/* Reel vertical — restaurant */}
            <article className="group relative col-span-6 md:col-span-3 row-span-2 aspect-[9/16] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedRestaurant} alt="Gastronomy reel" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-red-500" /> Reel
              </div>
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Reel · Gastronomy</p>
                <p className="font-display text-base italic leading-tight">The art of the table.</p>
              </div>
            </article>

            {/* Campagne large — horlogerie */}
            <article className="group relative col-span-6 md:col-span-5 aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedWatch} alt="Watchmaking campaign" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/10 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-background">
                Campaign
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Campaign · Watchmaking</p>
                <p className="mt-1 font-display text-xl italic md:text-2xl">Time as a signature.</p>
              </div>
            </article>

            {/* Mockup phone — Instagram UI */}
            <article className="group relative col-span-12 md:col-span-4 aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-card ring-1 ring-border">
              <img loading="lazy" src={feedPhone} alt="Instagram mockup" className="size-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-background/80" />
              {/* Faux post UI */}
              <div className="absolute left-4 top-4 right-4 flex items-center gap-2">
                <div className="size-7 rounded-full bg-accent/80 ring-2 ring-background" />
                <div className="flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest">triadepublicite</p>
                  <p className="font-mono text-[8px] text-muted-foreground">Geneva · Sponsored</p>
                </div>
                <span className="font-mono text-foreground/60">···</span>
              </div>
              <div className="absolute inset-x-4 bottom-4 space-y-2 rounded-2xl bg-background/60 p-4 backdrop-blur-md ring-1 ring-border">
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <span>♥  💬  ↗</span>
                  <span>🔖</span>
                </div>
                <p className="font-display text-sm italic leading-snug">
                  “A brand to stop for. Not scroll past.”
                </p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Sponsored post</p>
              </div>
            </article>

            {/* Boutique landscape */}
            <article className="group relative col-span-6 md:col-span-4 aspect-[5/4] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedBoutique} alt="Boutique art direction" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-4 bottom-4">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Retail · Direction</p>
                <p className="mt-1 font-display text-lg italic">The boutique world</p>
              </div>
            </article>

            {/* Reel vertical — voiture */}
            <article className="group relative col-span-6 md:col-span-3 row-span-2 aspect-[9/16] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedAerialCar} alt="Aerial automotive production" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/30" />
              <div className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-accent-foreground">
                4K · Drone
              </div>
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Reel · Automotive</p>
                <p className="font-display text-base italic leading-tight">Brand cinema.</p>
              </div>
            </article>

            {/* BTS caméra */}
            <article className="group relative col-span-12 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedBtsCamera} alt="Behind the scenes on set" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute left-3 top-3 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-foreground">
                <span className="size-1.5 animate-pulse rounded-full bg-accent" /> Filming
              </div>
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">BTS · 03</p>
                <p className="mt-1 font-display text-base italic">Backstage</p>
              </div>
            </article>

            {/* Food éditorial */}
            <article className="group relative col-span-6 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedFood} alt="Food editorial" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/75 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Photography</p>
                <p className="mt-1 font-display text-base italic">Editorial</p>
              </div>
            </article>

            {/* Editing process */}
            <article className="group relative col-span-6 md:col-span-3 aspect-square overflow-hidden rounded-[1.5rem] ring-1 ring-border bg-card">
              <img loading="lazy" src={feedEditing} alt="Editing studio" className="size-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 to-background/10" />
              <div className="absolute inset-x-3 bottom-3 space-y-1">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Post-production</p>
                <p className="font-display text-base italic">Colour · Sound · Rhythm</p>
              </div>
            </article>

            {/* Campagne Noël — large */}
            <article className="group relative col-span-12 md:col-span-6 aspect-[16/9] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedCampaignNoel} alt="Seasonal campaign" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-5 md:p-7 max-w-[60%]">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Seasonal campaign</p>
                <div>
                  <p className="font-display text-2xl italic leading-tight md:text-3xl">A brand worth waiting for.</p>
                  <p className="mt-2 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                    Reel · Holiday season
                  </p>
                </div>
              </div>
            </article>

            {/* Event */}
            <article className="group relative col-span-6 md:col-span-3 aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedEvent} alt="Brand event" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Event</p>
                <p className="mt-1 font-display text-base italic">Live coverage</p>
              </div>
            </article>

            {/* Wedding / lifestyle */}
            <article className="group relative col-span-6 md:col-span-3 aspect-[4/5] overflow-hidden rounded-[1.5rem] ring-1 ring-border">
              <img loading="lazy" src={feedWedding} alt="Lifestyle reportage" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-accent">Lifestyle</p>
                <p className="mt-1 font-display text-base italic">Brand story</p>
              </div>
            </article>
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
            Your business already has potential.
            <br />
            <span className="text-accent">What's missing is positioning.</span>
          </h2>
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
            Let's build something people remember — and your
            competitors study in silence.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@triadepublicite.ch"
              className="inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Start a conversation
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="pt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Geneva — Switzerland — International
          </p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
