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
    kicker: "Objective 01",
    title: "I want more visibility",
    pitch:
      "Get your brand noticed on the right channels, with content crafted to capture attention from the very first second.",
    solutions: [
      {
        slug: "reseaux-sociaux",
        title: "Social media management",
        short: "A consistent, premium and strategic editorial presence on Instagram, TikTok and LinkedIn.",
        inclus: [
          "Monthly editorial strategy",
          "Publishing calendar",
          "Visual content & Reels creation",
          "Community management",
        ],
        benefices: [
          "Consistent brand identity",
          "Greater engagement",
          "A qualified audience in Geneva",
        ],
        livrables: ["12 to 20 posts / month", "4 to 8 Reels", "Monthly reporting"],
        delai: "Getting started within 7 days",
        pour: "SMEs, restaurants, lifestyle brands and hotels in French-speaking Switzerland.",
        image: feedRestaurant,
      },
      {
        slug: "creation-de-contenu",
        title: "Content creation",
        short: "Photography, video and social formats tailored to your channels. Never generic.",
        inclus: [
          "Art direction",
          "Photography & video shoots",
          "Editing and post-production",
          "Multi-format adaptations",
        ],
        benefices: [
          "An exclusive content library",
          "Premium visual consistency",
          "Time saved for your team",
        ],
        livrables: ["Monthly or one-off package", "HD files delivered via the cloud"],
        delai: "Delivery in 10 to 15 days",
        pour: "Brands ready to move beyond improvised content.",
        image: feedEditing,
      },
      {
        slug: "production-video",
        title: "Video production",
        short: "Brand films, advertising and cinematic shorts designed to leave a lasting impression.",
        inclus: [
          "Pre-production & scripting",
          "Cinematic filming",
          "Colour grading & sound design",
          "Short edits for social media",
        ],
        benefices: ["Cinematic visuals", "Compelling storytelling", "Higher advertising ROI"],
        livrables: ["Master film", "9:16 / 1:1 / 16:9 versions"],
        delai: "3 to 5 weeks",
        pour: "Premium brands, real estate, watchmaking and hospitality.",
        image: feedAerialCar,
      },
    ],
  },
  {
    id: "clients",
    kicker: "Objective 02",
    title: "I want more clients",
    pitch:
      "Turn visitors into qualified clients with expertly managed campaigns and pages that convert.",
    solutions: [
      {
        slug: "google-ads",
        title: "Google Ads",
        short: "Capture purchase intent on Google with Search, Performance Max and YouTube campaigns.",
        inclus: [
          "Local market audit",
          "Campaign creation",
          "Weekly optimisation",
          "Transparent reporting",
        ],
        benefices: ["Qualified leads", "Measured ROAS", "Immediate visibility"],
        livrables: ["Structured Ads account", "Performance dashboard"],
        delai: "Launch within 10 days",
        pour: "Local services, e-commerce and B2B in Geneva and Switzerland.",
        image: feedPhone,
      },
      {
        slug: "meta-ads",
        title: "Meta Ads",
        short: "Instagram & Facebook ads that pair cinematic creative with precision targeting.",
        inclus: [
          "Funnel strategy",
          "Video ad creative production",
          "Ongoing A/B testing",
          "Pixel & conversion events",
        ],
        benefices: ["Lower cost per lead", "Awareness + conversion", "Scalability"],
        livrables: ["Structured campaigns", "10+ ad creatives per month"],
        delai: "Launch within 10 days",
        pour: "DTC brands, premium services and events.",
        image: feedCampaignNoel,
      },
      {
        slug: "landing-pages",
        title: "Landing Pages",
        short: "High-converting landing pages designed to turn every click into an opportunity.",
        inclus: [
          "Conversion-focused wireframe",
          "Persuasive French copywriting",
          "Premium responsive design",
          "Tracking & analytics",
        ],
        benefices: ["Higher conversion rates", "Consistent brand image", "Precise measurement"],
        livrables: ["1 optimised landing page", "Tracking integration"],
        delai: "2 to 3 weeks",
        pour: "Ad campaigns, launches and events.",
        image: workNoir,
      },
    ],
  },
  {
    id: "image",
    kicker: "Objective 03",
    title: "I want to elevate my image",
    pitch:
      "Build a distinctive, memorable identity aligned with your premium positioning.",
    solutions: [
      {
        slug: "branding",
        title: "Branding",
        short: "A complete visual identity: name, logo, guidelines and a cohesive brand universe.",
        inclus: [
          "Brand platform",
          "Logo & visual system",
          "Brand guidelines",
          "Print & digital templates",
        ],
        benefices: ["Instant recognition", "Premium positioning", "Lasting consistency"],
        livrables: ["PDF brand book", "Vector files"],
        delai: "4 to 6 weeks",
        pour: "New brands or identity refreshes.",
        image: workFashion,
      },
      {
        slug: "photographie",
        title: "Professional photography",
        short: "Reportage, corporate portraits, product photography and editorial imagery.",
        inclus: ["Location scouting", "Art direction", "Studio or on-location shoot", "Professional retouching"],
        benefices: ["Consistent brand image", "Exclusive visuals", "Enhanced credibility"],
        livrables: ["HD gallery delivered via the cloud"],
        delai: "1 to 2 weeks",
        pour: "Hotels, restaurants, watchmaking and executives.",
        image: workVilla,
      },
      {
        slug: "site-internet",
        title: "Website creation",
        short: "Bespoke brand websites and e-commerce experiences: fast, elegant and SEO-optimised.",
        inclus: [
          "Bespoke UX/UI",
          "High-performance development",
          "Technical SEO",
          "Training for independent management",
        ],
        benefices: ["A premium showcase 24/7", "Increased conversions", "Geneva SEO"],
        livrables: ["Responsive website", "CMS & training"],
        delai: "4 to 8 weeks",
        pour: "SMEs, premium brands and ambitious independent professionals.",
        image: feedBoutique,
      },
    ],
  },
  {
    id: "accompagnement",
    kicker: "Objective 04",
    title: "I want comprehensive support",
    pitch:
      "Entrust your marketing to a creative studio that plans, produces and manages everything for you, month after month.",
    solutions: [
      {
        slug: "gestion-marketing",
        title: "Complete marketing management",
        short: "Your external studio: strategy, content, advertising and reporting under one creative direction.",
        inclus: [
          "360° strategy",
          "Monthly production",
          "Advertising management",
          "Strategic meetings",
        ],
        benefices: ["Complete peace of mind", "One clear direction", "Performance tracking"],
        livrables: ["Monthly roadmap", "Consolidated reporting"],
        delai: "14-day onboarding",
        pour: "Business leaders ready to reclaim their time.",
        image: workWatch,
      },
      {
        slug: "production-mensuelle",
        title: "Monthly content production",
        short: "A recurring shoot to keep your social channels, website and campaigns supplied with fresh content.",
        inclus: ["Shoot day / month", "Photo + video", "Editing & delivery", "Asset library"],
        benefices: ["A steady flow of content", "Optimised costs", "Consistent brand image"],
        livrables: ["20 to 40 assets / month"],
        delai: "Getting started within 14 days",
        pour: "Brands active across multiple channels.",
        image: feedRestaurant,
      },
      {
        slug: "conseil-strategique",
        title: "Strategic consulting",
        short: "Creative direction and marketing sessions to bring clarity to your next move.",
        inclus: ["Comprehensive audit", "90-day action plan", "Creative recommendations", "Follow-up"],
        benefices: ["A clear vision", "Defined priorities", "Faster decisions"],
        livrables: ["Strategy document"],
        delai: "2 to 3 weeks",
        pour: "Founders and marketing teams.",
        image: feedEditing,
      },
    ],
  },
];

const seoZones = [
  { tag: "Digital Marketing Geneva", desc: "360° digital strategies for brands in French-speaking Switzerland." },
  { tag: "Social Media Management Geneva", desc: "A premium social presence, managed every day." },
  { tag: "Website Creation Geneva", desc: "Bespoke websites: fast, optimised and elegant." },
  { tag: "Video Production Geneva", desc: "Cinematic brand films, produced locally." },
  { tag: "Professional Photography Geneva", desc: "Editorial imagery for brands and business leaders." },
  { tag: "Branding Geneva", desc: "Visual identities built to endure and elevate your brand." },
  { tag: "Digital Advertising Geneva", desc: "Results-driven Google & Meta Ads campaigns." },
];

const testimonials = [
  {
    quote:
      "TRÍADE transformed our image. Our social channels finally look like a true premium brand.",
    name: "Camille R.",
    role: "Founder — Jewellery house, Geneva",
  },
  {
    quote:
      "Professional, creative, effective. Our cost per lead dropped by 38% in two months.",
    name: "Marc D.",
    role: "Director — Luxury real estate",
  },
  {
    quote:
      "A studio that puts business before aesthetics. Exactly what we were missing.",
    name: "Léa S.",
    role: "CEO — Restaurant group",
  },
];

export function SolutionsPage() {
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
            Solutions · TRÍADE Marketing & Advertising · Geneva
          </p>
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]">
            How can we help <em className="italic text-accent">your business</em>?
          </h1>
          <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
            Choose your goal. We craft a bespoke solution — visibility, clients,
            image or comprehensive support.
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
              {o.kicker} — {o.title.replace("I want ", "")}
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
                    <Block label="What’s included" items={s.inclus} />
                    <Block label="Benefits" items={s.benefices} />
                    <Block label="Deliverables" items={s.livrables} />
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <Meta label="Timeline" value={s.delai} />
                      <Meta label="Who it’s for" value={s.pour} />
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
                    Request a quote
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
            Geneva · Lausanne · French-speaking Switzerland
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            A local agency. Solutions that feel <em className="italic text-accent">premium</em>.
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
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">Trusted partnerships</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">They trust us.</h2>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Stat n="+80" l="Brands supported" />
              <Stat n="+5M" l="Views generated" />
              <Stat n="98%" l="Loyal clients" />
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
                <img src={src} alt="TRÍADE portfolio" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
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
    const msg = `Hello TRÍADE,\n\nI would like a quote.\n\nName : ${form.nom}\nPhone : ${form.telephone}\nEmail : ${form.email}\nCompany : ${form.entreprise}\nService of interest : ${form.service}\nProject description : ${form.description}\n\nThank you.`;
    const url = `https://wa.me/41789670537?text=${encodeURIComponent(msg)}`;
    setSent(true);
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="border-t border-foreground/10 bg-foreground px-6 py-24 text-background md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-background/60">Express quote</p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            Let’s talk about your project in <em className="italic">30 seconds</em>.
          </h2>
          <p className="mt-6 max-w-md text-sm text-background/70">
            Complete this form — you’ll be taken straight to WhatsApp with your
            request ready to send. We reply within 24 business hours.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <a href="https://wa.me/41789670537" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> WhatsApp · +41 78 967 05 37
            </a>
            <a href="mailto:info@triadepublicite.ch" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> info@triadepublicite.ch
            </a>
            <a href="https://instagram.com/triadepublicite" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-background/80 hover:text-background">
              <span className="h-px w-8 bg-background/40" /> Instagram · @triadepublicite
            </a>
            <p className="flex items-center gap-3 text-background/60">
              <span className="h-px w-8 bg-background/40" /> Geneva · French-speaking Switzerland
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-[2rem] border border-background/15 bg-background/5 p-6 backdrop-blur-sm md:p-8"
        >
          <Field label="Name *" value={form.nom} onChange={handleChange("nom")} required maxLength={80} />
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Phone *" value={form.telephone} onChange={handleChange("telephone")} required maxLength={30} type="tel" />
            <Field label="Email *" value={form.email} onChange={handleChange("email")} required maxLength={120} type="email" />
          </div>
          <Field label="Company" value={form.entreprise} onChange={handleChange("entreprise")} maxLength={120} />

          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Service of interest</span>
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
            <span className="text-[10px] uppercase tracking-[0.22em] text-background/60">Brief description</span>
            <textarea
              value={form.description}
              onChange={handleChange("description")}
              maxLength={600}
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background outline-none transition-colors placeholder:text-background/40 focus:border-background/60"
              placeholder="Your goal, in a few words…"
            />
          </label>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-between rounded-full bg-background px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
          >
            Send via WhatsApp
            <span aria-hidden>→</span>
          </button>
          {sent && (
            <p className="text-xs text-background/70">
              Your message is opening in WhatsApp. If nothing happens, contact +41 78 967 05 37.
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
