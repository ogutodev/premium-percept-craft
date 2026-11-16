import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DiagnosticSection } from "@/components/diagnostic-section";
import { MetaRow } from "@/components/brand";
import { CaseLink, SitesGrid } from "@/components/showcase";
import { useLocale } from "@/lib/i18n";
import { projectsFor } from "@/lib/projects";
import { WORK } from "@/lib/content/work";

export function WorkPage() {
  const locale = useLocale();
  const t = WORK[locale];
  const projects = projectsFor(locale);
  const photos = projects.flatMap((p) => p.gallery);
  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main">
        <section className="section-y !pt-10 md:!pt-14">
          <div className="wrap">
            <MetaRow items={t.meta} />
            <h1 className="mt-10">{t.h1}</h1>
            <p className="mt-8 max-w-[640px] text-[clamp(19px,1.6vw,21px)] leading-[1.5]">{t.intro}</p>
          </div>
        </section>

        <section aria-labelledby="w-cases" className="section-y bg-white">
          <div className="wrap">
            <h2 id="w-cases" className="t-cond !text-[clamp(36px,4vw,56px)]">{t.casesTitle}</h2>
            <div data-reveal-stagger className="mt-10 grid gap-10 md:grid-cols-2">
              {projects.map((p) => (
                <article key={p.slug} className="card-box card-pop flex flex-col p-5">
                  <div data-zoom className="aspect-[16/10] overflow-hidden border-[3px] border-azul"><img src={p.coverPhoto.src} alt={p.coverPhoto.alt} width={p.coverPhoto.w} height={p.coverPhoto.h} loading="lazy" decoding="async" sizes="(min-width:768px) 600px, 100vw" className="size-full object-cover object-top" /></div>
                  <p className="meta mt-5">{p.location}</p>
                  <h3 className="t-cond mt-2 text-[clamp(36px,4vw,52px)]">{p.name}</h3>
                  <p className="mt-2 font-semibold text-azul">{p.service}</p>
                  <p className="mt-3 flex-1">{p.challenge}</p>
                  <div className="mt-4"><CaseLink slug={p.slug} locale={locale} /></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="w-sites" className="section-y">
          <div className="wrap">
            <h2 id="w-sites" className="t-cond !text-[clamp(36px,4vw,56px)]">{t.sitesTitle}</h2>
            <SitesGrid locale={locale} level={3} />
          </div>
        </section>

        <section aria-labelledby="w-photos" className="section-y bg-white">
          <div className="wrap">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="w-photos" className="t-cond !text-[clamp(36px,4vw,56px)]">{t.photosTitle}</h2>
              <p className="meta">{t.photosMeta}</p>
            </div>
            <ul data-reveal-stagger className="mt-10 columns-2 gap-4 md:columns-3 md:gap-6">
              {photos.map((g) => (
                <li key={g.src} className="mb-4 break-inside-avoid md:mb-6">
                  <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" sizes="(min-width:768px) 33vw, 50vw" className="h-auto w-full border-[3px] border-azul" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <DiagnosticSection />
      </main>
      <SiteFooter />
    </div>
  );
}
