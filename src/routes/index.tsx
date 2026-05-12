import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import heroCamera from "@/assets/hero-camera.jpg";
import workWatch from "@/assets/work-watch.jpg";
import workFashion from "@/assets/work-fashion.jpg";
import workVilla from "@/assets/work-villa.jpg";
import workNoir from "@/assets/work-noir.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const services = [
  {
    n: "01",
    title: "Strategic Branding",
    body: "Visual identity systems built for longevity, premium pricing and unmistakable recognition.",
  },
  {
    n: "02",
    title: "Cinematic Production",
    body: "Commercial-grade filmmaking that tells stories worth watching — not just scrolling past.",
  },
  {
    n: "03",
    title: "Photography & Direction",
    body: "Editorial imagery that positions your brand alongside the world's most refined names.",
  },
  {
    n: "04",
    title: "Social Authority",
    body: "Content systems that dominate Reels, TikTok and feeds with calibrated, on-brand presence.",
  },
  {
    n: "05",
    title: "Digital Architecture",
    body: "Bespoke websites engineered as high-conversion digital showrooms for your brand.",
  },
  {
    n: "06",
    title: "Paid Growth",
    body: "Performance campaigns fueled by visuals so good they outperform their own bidding logic.",
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
    tag: "Creative Direction",
    span: "md:col-span-4 md:row-span-3",
    aspect: "aspect-4/5",
  },
  {
    src: workVilla,
    title: "Alpine Heights",
    tag: "Real Estate Reel",
    span: "md:col-span-5 md:row-span-2",
    aspect: "aspect-square",
  },
  {
    src: workNoir,
    title: "Velocity Noir",
    tag: "Cinematography",
    span: "md:col-span-7 md:row-span-2",
    aspect: "aspect-16/9",
  },
];

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40M+", label: "Total Reach" },
  { value: "14", label: "Luxury Partners" },
  { value: "08", label: "Awards" },
];

const process = [
  { n: "01", title: "Strategy", body: "We diagnose positioning, audience and the visual gap between you and the market leader." },
  { n: "02", title: "Production", body: "Direction, lighting, location, talent — every frame planned with intent." },
  { n: "03", title: "Editing", body: "Color, sound and rhythm assembled into a story your audience cannot ignore." },
  { n: "04", title: "Growth", body: "Distribution and paid amplification turning your assets into measurable presence." },
];

const testimonials = [
  {
    quote:
      "TRÍADE didn't just film us — they reframed how the market sees our brand. Inquiries doubled within sixty days.",
    name: "Élise Marchand",
    role: "Founder · Maison Marchand",
  },
  {
    quote:
      "The level of taste and execution feels closer to a Parisian fashion house than a marketing agency.",
    name: "Lukas Vogel",
    role: "Director · Vogel Horlogerie",
  },
  {
    quote:
      "Every asset they delivered raised the bar of what we thought our company could look like.",
    name: "Anaïs Roux",
    role: "CMO · Roux Architecture",
  },
];

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center px-6 pt-24 md:px-10">
        <div className="absolute inset-0 z-0">
          <img
            src={heroCamera}
            alt="Cinema camera lens reflecting city lights"
            width={1920}
            height={1080}
            className="size-full scale-105 object-cover opacity-50 grayscale-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px]">
          <p className="mb-6 animate-reveal-up font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            Geneva · Creative Production
          </p>
          <h1
            className="mb-10 font-display text-balance text-5xl italic leading-[0.95] sm:text-6xl md:text-7xl lg:text-[7.5rem]"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "150ms" }}
          >
            Most Brands Don't Need <span className="text-foreground/40">More Posts.</span>
            <br />
            They Need{" "}
            <span className="relative inline-block">
              Presence.
              <span className="absolute -bottom-2 left-0 h-[3px] w-full bg-accent/40" />
            </span>
          </h1>
          <div
            className="flex flex-col items-start gap-10 md:flex-row md:items-end"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "300ms" }}
          >
            <p className="max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
              TRÍADE creates strategic visual narratives that transform businesses into
              high-authority premium brands.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-xs font-medium uppercase tracking-widest text-background transition-colors hover:bg-accent"
              >
                Book a Strategy Call
                <span aria-hidden>→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-xs font-medium uppercase tracking-widest transition-colors hover:border-foreground"
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:flex">
          <span className="h-px w-12 bg-foreground/30" />
          Scroll
        </div>
      </section>

      {/* AUTHORITY METRICS */}
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
              Trusted by
            </p>
            <div className="mt-2 flex gap-6 opacity-50">
              <span className="font-display text-sm italic">Horlogerie.</span>
              <span className="font-display text-sm italic">Maison.</span>
              <span className="font-display text-sm italic">Atelier.</span>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between md:mb-20">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
                01 — Selected Work
              </span>
              <h2 className="font-display text-4xl italic md:text-6xl">Visual Authority</h2>
            </div>
            <a
              href="#contact"
              className="hidden border-b border-foreground/30 pb-1 text-xs uppercase tracking-widest transition-all hover:border-accent hover:text-accent md:inline-block"
            >
              Commission a Project
            </a>
          </div>

          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {works.map((w, i) => (
              <article
                key={w.title}
                className={`group relative col-span-12 cursor-pointer overflow-hidden bg-card ${w.span}`}
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

      {/* THE PROBLEM */}
      <section className="relative border-y border-border px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-5xl">
          <span className="mb-10 block text-center font-mono text-[10px] uppercase tracking-[0.4em] text-accent">
            02 — The Dilemma
          </span>
          <h2 className="text-balance text-center font-display text-4xl leading-[1.05] md:text-7xl">
            Good content is no longer enough.
            <br />
            <span className="italic text-foreground/50">To win today, you must</span>{" "}
            <span className="italic">command attention.</span>
          </h2>
          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-border bg-secondary/40 p-8 md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Without TRÍADE
              </p>
              <p className="text-balance italic leading-relaxed text-muted-foreground">
                "We post every day but our brand still feels small. We look like every other
                competitor — and price is the only conversation."
              </p>
            </div>
            <div className="border border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="mb-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                With TRÍADE
              </p>
              <p className="text-balance leading-relaxed">
                "Our brand feels like an institution. People stop scrolling. Price stopped
                being the conversation — perception became it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-foreground px-6 py-32 text-background md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-8 md:mb-24 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-6xl italic leading-none md:text-8xl">Our Arsenal.</h2>
            <p className="max-w-sm text-balance text-base leading-relaxed opacity-70">
              A vertically integrated studio — strategy, story, image and growth, executed under
              one roof.
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

      {/* PROCESS */}
      <section id="process" className="px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 space-y-4">
            <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">
              03 — Method
            </span>
            <h2 className="font-display text-4xl italic md:text-6xl">A Cinematic Process.</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="group bg-background p-8 transition-colors hover:bg-secondary/40 md:p-10">
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
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-secondary/30 px-6 py-32 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">
          <span className="mb-20 block font-mono text-[10px] uppercase tracking-widest text-accent">
            04 — Voices
          </span>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {testimonials.map((t) => (
              <figure key={t.name} className="space-y-8">
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-40 text-center md:px-10 md:py-56">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-accent to-transparent"
        />
        <div className="mx-auto max-w-4xl space-y-12">
          <h2 className="text-balance font-display text-5xl italic leading-[1.05] md:text-7xl lg:text-8xl">
            Your Business Already Has Potential.
            <br />
            <span className="text-accent">Now It Needs Positioning.</span>
          </h2>
          <p className="mx-auto max-w-xl text-balance text-lg text-muted-foreground">
            Let's build something people remember — and competitors quietly study.
          </p>
          <div className="pt-4">
            <a
              href="mailto:info@triadepublicite.ch"
              className="inline-flex items-center gap-4 bg-accent px-10 py-5 text-xs font-bold uppercase tracking-[0.3em] text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Start a Conversation
              <span aria-hidden>→</span>
            </a>
          </div>
          <p className="pt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            Geneva — Switzerland — Worldwide
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
