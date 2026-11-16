import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DiagnosticSection } from "@/components/diagnostic-section";
import { HeadingText, MetaRow } from "@/components/brand";
import { LogosBand } from "@/components/showcase";
import { useLocale } from "@/lib/i18n";
import { SERVICES } from "@/lib/content/services";
import espressoSite from "@/assets/espresso-club-site-web.webp";
import doraSite from "@/assets/dora-distria-site-web.webp";
import vediaSite from "@/assets/peinture-vedia-site-web.webp";
import espressoBar from "@/assets/espresso-club-bar.webp";
import espressoDecor from "@/assets/espresso-club-decor.webp";
import espressoVins from "@/assets/espresso-club-vins.webp";
import usgvNuit from "@/assets/us-geneve-ville-match-nuit.webp";
import usgvMaillot from "@/assets/us-geneve-ville-maillot.webp";
import usgvCourse from "@/assets/us-geneve-ville-course.webp";

type Img = { src: string; w: number; h: number };
const IMAGES: Img[][] = [
  [{ src: espressoSite, w: 1600, h: 900 }, { src: doraSite, w: 1600, h: 768 }, { src: vediaSite, w: 1600, h: 700 }],
  [{ src: espressoBar, w: 1400, h: 933 }, { src: espressoDecor, w: 1400, h: 933 }, { src: espressoVins, w: 1400, h: 933 }],
  [{ src: usgvNuit, w: 1100, h: 1650 }, { src: usgvMaillot, w: 1100, h: 1650 }, { src: usgvCourse, w: 1100, h: 1650 }],
];

export function ServicesPage() {
  const locale = useLocale();
  const t = SERVICES[locale];
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main">
        <section className="section-y !pt-10 md:!pt-14">
          <div className="wrap">
            <MetaRow items={t.meta} />
            <h1 className="mt-10">{t.h1}</h1>
            <p className="mt-8 max-w-[680px] text-[clamp(19px,1.6vw,21px)] leading-[1.5]">{t.intro}</p>
            <nav aria-label={t.h1} className="mt-10 flex flex-wrap gap-3">
              {t.groups.map((g, i) => (
                <a key={g.id} href={`#${g.id}`} className="chip !min-h-11 !text-[14px]">0{i + 1} · {g.t}</a>
              ))}
            </nav>
          </div>
        </section>

        {t.groups.map((g, gi) => {
          const imgs = IMAGES[gi];
          const portrait = imgs[0].h > imgs[0].w;
          return (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className={`section-y ${gi % 2 === 0 ? "bg-white" : ""}`}>
              <div className="wrap">
                <MetaRow items={[`0${gi + 1}`, g.t]} />
                <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                  <div className="space-y-8">
                    <h2 id={`${g.id}-h`} data-reveal>{g.t}</h2>
                    <div>
                      <h3 className="meta !leading-normal">{t.labels.what}</h3>
                      <p className="mt-3 text-[19px]">{g.what}</p>
                    </div>
                    <div>
                      <h3 className="meta !leading-normal">{t.labels.included}</h3>
                      <ul data-rules className="mt-4 grid gap-6 sm:grid-cols-2">
                        {g.items.map((it) => (
                          <li key={it.t} className="rule-top">
                            <p className="t-cond text-[24px]">{it.t}</p>
                            <p className="mt-2">{it.d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="meta !leading-normal">{t.labels.who}</h3>
                      <p className="mt-3">{g.who}</p>
                    </div>
                    <div>
                      <h3 className="meta !leading-normal">{t.labels.deliverables}</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {g.deliverables.map((d) => <li key={d} className="chip">{d}</li>)}
                      </ul>
                    </div>
                    <a href="#diagnostic" className="btn-pill">{t.labels.cta} <span className="arr">→</span></a>
                  </div>
                  <div data-clip className={portrait ? "grid grid-cols-3 gap-3" : gi === 1 ? "grid grid-cols-[1.1fr_1fr] gap-4" : "space-y-4"}>
                    {imgs.map((im, i) => {
                      const reel = !portrait && gi === 1;
                      const shape = portrait ? "aspect-[2/3]" : reel ? (i === 0 ? "row-span-2 aspect-[9/16]" : "aspect-[4/5]") : "aspect-[16/9]";
                      return (
                        <div key={im.src} data-zoom className={`overflow-hidden border-[3px] border-azul ${shape} ${!portrait && !reel && i === 0 ? "frame" : ""} ${reel && i === 0 ? "rounded-[28px]" : ""}`}>
                          <img
                            src={im.src}
                            alt={g.alts[i]}
                            width={im.w}
                            height={im.h}
                            loading="lazy"
                            decoding="async"
                            sizes={portrait ? "(min-width:1024px) 200px, 33vw" : "(min-width:1024px) 600px, 100vw"}
                            className={`size-full object-cover ${reel ? "" : "object-top"}`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="section-y bg-azul-profundo text-superficie [&_h2]:text-superficie">
          <div className="wrap">
            <h2 data-reveal className="max-w-[18ch]"><HeadingText h={t.closing} /></h2>
          </div>
        </section>
        <LogosBand locale={locale} />
        <DiagnosticSection />
      </main>
      <SiteFooter />
    </div>
  );
}
