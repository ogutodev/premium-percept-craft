import { useCallback, useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { MetaRow } from "@/components/brand";
import { lp, useLocale } from "@/lib/i18n";
import { CHROME } from "@/lib/content/chrome";
import type { Photo, Project } from "@/lib/projects";

function Lightbox({ photos, index, onClose, onMove, c }: { photos: Photo[]; index: number; onClose: () => void; onMove: (d: number) => void; c: (typeof CHROME)["fr"]["cs"] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onMove(1);
      else if (e.key === "ArrowLeft") onMove(-1);
      else if (e.key === "Tab") {
        const f = Array.from(ref.current?.querySelectorAll<HTMLElement>("button") ?? []);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, onMove]);
  const p = photos[index];
  const btn = "inline-flex size-12 items-center justify-center border-2 border-white text-2xl text-white";
  return (
    <div ref={ref} role="dialog" aria-modal="true" aria-label={c.lightbox} className="on-dark fixed inset-0 z-[80] flex flex-col bg-azul-profundo p-4 md:p-8">
      <div className="flex items-center justify-between text-nevoa">
        <span className="meta text-nevoa">{index + 1} / {photos.length}</span>
        <button type="button" onClick={onClose} aria-label={c.closeGallery} className={btn}>×</button>
      </div>
      <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 py-4">
        <img src={p.src} alt={p.alt} width={p.w} height={p.h} className="max-h-full min-h-0 max-w-full object-contain" />
        <figcaption className="text-center text-[14px] text-nevoa">{p.alt}</figcaption>
      </figure>
      <div className="flex justify-center gap-4">
        <button type="button" onClick={() => onMove(-1)} aria-label={c.prev} className={btn}>←</button>
        <button type="button" onClick={() => onMove(1)} aria-label={c.next} className={btn}>→</button>
      </div>
    </div>
  );
}

export function CaseStudyPage({ project: p }: { project: Project }) {
  const locale = useLocale();
  const c = CHROME[locale].cs;
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const portrait = p.coverPhoto.h > p.coverPhoto.w;
  const close = useCallback(() => {
    setOpen((i) => {
      if (i !== null) setTimeout(() => triggers.current[i]?.focus(), 0);
      return null;
    });
  }, []);
  const move = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + p.gallery.length) % p.gallery.length)), [p.gallery.length]);

  const cover = (
    <div className={`frame overflow-hidden ${portrait ? "aspect-[2/3]" : "aspect-video"}`}>
      <img src={p.coverPhoto.src} alt={p.coverPhoto.alt} width={p.coverPhoto.w} height={p.coverPhoto.h} fetchPriority="high" decoding="async" className="size-full object-cover object-top" />
    </div>
  );

  return (
    <div className="min-h-screen bg-superficie text-tinta">
      <SiteNav />
      <main id="main">
        <section className="section-y !pt-10">
          <div className="wrap">
            <nav aria-label={c.breadcrumb} className="mb-8 text-[14px]">
              <ol className="flex flex-wrap items-center gap-2 text-suave">
                <li><a href={lp(locale, "/")} className="underline hover:text-azul">{c.home}</a></li>
                <li aria-hidden>›</li>
                <li><a href={lp(locale, "/contenus")} className="underline hover:text-azul">{c.work}</a></li>
                <li aria-hidden>›</li>
                <li aria-current="page" className="font-semibold text-azul">{p.name}</li>
              </ol>
            </nav>
            <MetaRow items={[c.eyebrow, p.service, p.location]} />
            <div className={`mt-10 grid items-start gap-12 ${portrait ? "lg:grid-cols-[1fr_minmax(0,400px)]" : ""}`}>
              <div className="space-y-8">
                <h1>{p.name}</h1>
                <div className="grid gap-10 md:grid-cols-2">
                  <div className="rule-top">
                    <h2 className="t-cond !text-[28px]">{c.challenge}</h2>
                    <p className="mt-3">{p.challenge}</p>
                  </div>
                  <div className="rule-top">
                    <h2 className="t-cond !text-[28px]">{c.approach}</h2>
                    <p className="mt-3">{p.approach}</p>
                  </div>
                </div>
                <div>
                  <h2 className="meta !text-[13px] !leading-normal">{c.deliverables}</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {p.deliverables.map((d) => <li key={d} className="chip">{d}</li>)}
                  </ul>
                </div>
                {p.results.length > 0 && (
                  <div>
                    <h2 className="meta !text-[13px] !leading-normal">{c.results}</h2>
                    <ul className="mt-3 list-disc pl-5">{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
                  </div>
                )}
              </div>
              {portrait && <div className="mx-auto w-full max-w-[400px]">{cover}</div>}
            </div>
            {!portrait && <div className="mt-14">{cover}</div>}
          </div>
        </section>

        <section className="section-y bg-white" aria-labelledby="galerie">
          <div className="wrap">
            <MetaRow items={[c.gallery, `${p.gallery.length} ${c.photos}`]} />
            <h2 id="galerie" className="sr-only">{c.gallery}</h2>
            <ul data-reveal-stagger className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {p.gallery.map((g, i) => (
                <li key={g.src} className={g.w > g.h && i === 0 ? "col-span-2" : ""}>
                  <button
                    ref={(el) => { triggers.current[i] = el; }}
                    type="button"
                    onClick={() => setOpen(i)}
                    aria-label={`${c.enlarge}${g.alt}`}
                    className="card-pop block w-full border-[3px] border-azul bg-white"
                  >
                    <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" decoding="async" sizes="(min-width:768px) 33vw, 50vw" className={`w-full object-cover ${g.h > g.w ? "aspect-[2/3]" : "aspect-[3/2]"}`} />
                  </button>
                </li>
              ))}
            </ul>
            <a href={lp(locale, "/contenus")} className="link-u mt-12">{c.all}</a>
          </div>
        </section>

        <section className="on-dark bg-azul py-16 text-white">
          <div className="wrap flex flex-wrap items-center justify-between gap-6">
            <p className="t-cond text-[clamp(36px,5vw,64px)]">{c.similar}</p>
            <a href={lp(locale, "/#diagnostic")} className="inline-flex min-h-14 items-center bg-white px-7 text-[15px] font-bold uppercase tracking-[1px] text-azul shadow-[10px_10px_0_var(--color-lima)]">
              {c.talk} <span className="arr ml-2">→</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      {open !== null && <Lightbox photos={p.gallery} index={open} onClose={close} onMove={move} c={c} />}
    </div>
  );
}
