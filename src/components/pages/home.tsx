import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DiagnosticSection } from "@/components/diagnostic-section";
import { HeadingText, Highlight, MetaRow } from "@/components/brand";
import { CaseLink, LogosBand, SitesGrid } from "@/components/showcase";
import { lp, useLocale } from "@/lib/i18n";
import { HOME } from "@/lib/content/home";
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

export const HERO_IMAGE = portrait;

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((c) => (
        <li key={c} className="chip">{c}</li>
      ))}
    </ul>
  );
}

export function HomePage() {
  const locale = useLocale();
  const t = HOME[locale];
  const w = t.work;
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main">
        {/* HERO */}
        <section id="top" className="section-y !pt-10 md:!pt-14">
          <div className="wrap">
            <MetaRow items={t.meta} />
            <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-16">
              <div>
                <h1>
                  {t.h1Words.map((word, i) => (
                    <span key={i}>
                      <span className="hw"><span style={{ ["--i" as string]: i }}>{word}</span></span>{" "}
                    </span>
                  ))}
                  <span className="hw !overflow-visible"><span style={{ ["--i" as string]: t.h1Words.length }}><Highlight>{t.h1Hl}</Highlight></span></span>
                </h1>
                <div className="hero-fade">
                  <p className="mt-8 max-w-[560px] text-[clamp(19px,1.6vw,21px)] leading-[1.5]">
                    {t.leadA}<strong className="text-azul">{t.leadStrong}</strong>{t.leadB}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <a href="#diagnostic" className="btn-pill">{t.ctaPrimary} <span className="arr">→</span></a>
                    <a href="#realisations" className="link-u">{t.ctaSecondary}</a>
                  </div>
                  <p className="mt-4 text-[14px] text-suave">{t.ctaNote}</p>
                  <p lang={t.altLine.lang} className="mt-5 font-serif text-[22px] italic leading-snug text-suave">{t.altLine.text}</p>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[460px] pb-8 pl-4 sm:pl-0">
                <div className="hero-frame frame aspect-[4/5] overflow-hidden">
                  <img src={portrait} alt={t.heroAlt} width={1536} height={1024} fetchPriority="high" decoding="async" sizes="(min-width: 1024px) 460px, 90vw" className="size-full object-cover object-[50%_30%]" />
                </div>
                <div className="absolute bottom-0 left-0 border-[3px] border-azul bg-white px-5 py-3 sm:-left-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[2px] text-suave">{t.founderLabel}</p>
                  <p className="t-cond text-[26px]">Augusto Sousa</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LogosBand locale={locale} />

        {/* SERVICES */}
        <section id="services" className="section-y">
          <div className="wrap">
            <MetaRow items={t.services.meta} />
            <h2 className="mt-10" data-reveal><HeadingText h={t.services.h2} /></h2>
            <p className="mt-6 max-w-[620px]" data-reveal>{t.services.intro}</p>
            <div data-reveal-stagger className="mt-14 grid gap-x-9 gap-y-10 [grid-template-columns:repeat(auto-fit,minmax(min(300px,100%),1fr))]">
              {t.services.items.map((s, i) => (
                <article key={s.t} className="card-box card-pop flex flex-col p-8">
                  <span className="text-[88px] font-black leading-none text-azul [font-stretch:62%]">0{i + 1}</span>
                  <h3 className="t-cond mt-4 text-[40px]">{s.t}</h3>
                  <p className="mt-4">{s.d}</p>
                  <ul className="mt-6 border-t border-linha pt-4">
                    {s.l.map((x) => (
                      <li key={x} className="py-1.5 font-semibold text-azul">{x}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <a href={lp(locale, "/solutions")} className="link-u mt-12">{t.services.more} <span className="arr">→</span></a>
          </div>
        </section>

        {/* RÉALISATIONS */}
        <section id="realisations" className="section-y bg-white">
          <div className="wrap">
            <MetaRow items={w.meta} />
            <h2 className="mt-10" data-reveal><HeadingText h={w.h2} /></h2>

            <article className="mt-16 grid items-start gap-12 lg:grid-cols-[1.45fr_1fr]">
              <div data-clip>
                <div className="frame">
                  <div className="flex items-center gap-3 border-b-[3px] border-azul bg-superficie px-4 py-2.5">
                    <span className="flex gap-1.5" aria-hidden>
                      <i className="size-2.5 rounded-full bg-nevoa" /><i className="size-2.5 rounded-full bg-nevoa" /><i className="size-2.5 rounded-full bg-nevoa" />
                    </span>
                    <span className="text-[12px] font-semibold uppercase tracking-[2px] text-suave">{w.espresso.browser}</span>
                  </div>
                  <img src={espressoSite} alt={w.espresso.alts[0]} width={1600} height={900} loading="lazy" decoding="async" sizes="(min-width:1024px) 720px, 100vw" className="aspect-video w-full object-cover" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[espressoBar, espressoTable, espressoVins].map((src, i) => (
                    <img key={src} src={src} alt={w.espresso.alts[i + 1]} width={1400} height={933} loading="lazy" decoding="async" sizes="(min-width:1024px) 240px, 33vw" className="aspect-[4/3] w-full border-2 border-azul object-cover" />
                  ))}
                </div>
              </div>
              <div className="space-y-6" data-reveal>
                <p className="meta">{w.espresso.meta}</p>
                <h3 className="t-cond text-[clamp(48px,5vw,72px)]">Espresso Club</h3>
                <p>{w.espresso.d}</p>
                <Chips items={w.espresso.chips} />
                <CaseLink slug="espresso-club" locale={locale} />
              </div>
            </article>

            <article className="mt-24 grid items-start gap-12 lg:grid-cols-[1fr_1.45fr]">
              <div className="order-2 space-y-6 lg:order-1" data-reveal>
                <p className="meta">{w.usgv.meta}</p>
                <h3 className="t-cond text-[clamp(48px,5vw,72px)]">US Genève-Ville</h3>
                <p>{w.usgv.d}</p>
                <Chips items={w.usgv.chips} />
                <CaseLink slug="us-geneve-ville" locale={locale} />
              </div>
              <div data-clip className="order-1 grid grid-cols-3 gap-3 lg:order-2">
                {[usgvEchauffement, usgv17, usgv11].map((src, i) => (
                  <img key={src} src={src} alt={w.usgv.alts[i]} width={1100} height={1650} loading="lazy" decoding="async" sizes="(min-width:1024px) 260px, 33vw" className="aspect-[2/3] w-full border-[3px] border-azul object-cover" />
                ))}
              </div>
            </article>

            <div className="mt-24 border-t-[3px] border-azul pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="t-cond text-[clamp(32px,3.6vw,48px)]">{w.sitesTitle}</h3>
                <p className="meta">{w.sitesMeta}</p>
              </div>
              <SitesGrid locale={locale} />
            </div>
          </div>
        </section>

        {/* REELS / INSTAGRAM */}
        <section id="instagram" className="section-y">
          <div className="wrap">
            <MetaRow items={t.reels.meta} />
            <h2 className="mt-10" data-reveal><HeadingText h={t.reels.h2} /></h2>
            <p className="mt-6 max-w-[620px]" data-reveal>{t.reels.intro}</p>
            <div data-reveal-stagger className="mt-14 grid gap-6 sm:grid-cols-3">
              {[usgv17, espressoTable, usgvEchauffement].map((src, i) => {
                const item = t.reels.items[i];
                return (
                  <a
                    key={item.title}
                    href="https://www.instagram.com/triadepublicite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-pop group block"
                    aria-label={`${item.title} — ${t.reels.ctaNote}`}
                  >
                    <div className="frame aspect-[9/16] overflow-hidden rounded-2xl" data-zoom>
                      <img src={src} alt={item.alt} width={1100} height={1650} loading="lazy" decoding="async" sizes="(min-width: 640px) 33vw, 100vw" className="size-full object-cover" />
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="meta">{item.tag}</p>
                        <h3 className="t-cond mt-1 text-[26px]">{item.title}</h3>
                      </div>
                      <span className="t-cond mt-1 shrink-0 text-[28px] text-azul transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>↗</span>
                    </div>
                  </a>
                );
              })}
            </div>
            <a href="https://www.instagram.com/triadepublicite/" target="_blank" rel="noopener noreferrer" className="btn-pill mt-12">{t.reels.cta} <span className="arr">→</span></a>
          </div>
        </section>

        {/* MÉTHODE */}
        <section id="methode" className="section-y">
          <div className="wrap">
            <MetaRow items={t.method.meta} />
            <h2 className="mt-10" data-reveal><HeadingText h={t.method.h2} /></h2>
            <ol data-rules className="mt-14 grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr))]">
              {t.method.steps.map((s, i) => (
                <li key={s.t} className="rule-top">
                  <span className="block text-[72px] font-black leading-none text-azul [font-stretch:62%]">0{i + 1}</span>
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
            <MetaRow items={t.about.meta} />
            <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-16">
              <div className="space-y-3" data-reveal>
                <img src={camera} alt={t.about.alts[0]} width={1100} height={1650} loading="lazy" decoding="async" sizes="(min-width:1024px) 520px, 100vw" className="aspect-[4/5] w-full border-[3px] border-white object-cover object-[50%_40%]" />
                <img src={bureau} alt={t.about.alts[1]} width={1536} height={1024} loading="lazy" decoding="async" sizes="(min-width:1024px) 520px, 100vw" className="aspect-video w-full border-[3px] border-white object-cover" />
              </div>
              <div className="space-y-6">
                <h2 data-reveal><HeadingText h={t.about.h2} /></h2>
                <p className="text-[19px] text-white">{t.about.pA}<strong>Augusto Sousa</strong>{t.about.pB}</p>
                <p className="text-nevoa">{t.about.p2}</p>
                <p lang={t.about.altLine.lang} className="font-serif text-[24px] italic leading-snug text-nevoa">{t.about.altLine.text}</p>
                <dl className="grid gap-6 border-t-2 border-nevoa pt-6 sm:grid-cols-3">
                  {t.about.facts.map(([dt, dd]) => (
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
            <MetaRow items={t.faq.meta} />
            <h2 className="mt-10" data-reveal><HeadingText h={t.faq.h2} /></h2>
            <div className="mt-12 max-w-4xl">
              {t.faq.items.map((f) => (
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
