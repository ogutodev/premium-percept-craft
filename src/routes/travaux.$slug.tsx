import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/travaux/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Étude de cas · TRÍADE` : "Projet introuvable · TRÍADE";
    const description = p
      ? `${p.service} — ${p.location}. Étude de cas TRÍADE Marketing et Publicité.`
      : "Ce projet n'existe pas.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project: p } = Route.useLoaderData();
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <section className="px-6 pt-36 pb-16 md:px-10 md:pt-44">
        <div className="mx-auto max-w-7xl space-y-6">
          <Link to="/" hash="travaux" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent">
            ← Tous les travaux
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {p.service} · {p.location}
          </p>
          <h1 className="font-display">{p.name}</h1>
        </div>
      </section>
      <div className="px-6 md:px-10">
        <div className="mx-auto aspect-[16/9] max-w-7xl overflow-hidden rounded-[2rem] ring-1 ring-border">
          <img src={p.cover} alt={p.name} className="size-full object-cover" />
        </div>
      </div>
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">01 — Le défi</span>
            <p className="text-lg leading-relaxed text-muted-foreground">{p.challenge}</p>
          </div>
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">02 — L'approche</span>
            <p className="text-lg leading-relaxed text-muted-foreground">{p.approach}</p>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-border bg-card/40 p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">03 — Livrables</span>
            <ul className="space-y-2">{p.deliverables.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div className="space-y-4 rounded-[2rem] border border-border bg-card/40 p-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">04 — Résultats</span>
            <ul className="space-y-2">{p.results.map((r) => <li key={r}>{r}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-7xl space-y-8">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-accent">05 — Galerie</span>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {p.gallery.map((src, i) => (
              <div key={i} className="group aspect-[4/5] overflow-hidden rounded-[1.75rem] ring-1 ring-border">
                <img src={src} alt={`${p.name} — visuel ${i + 1}`} loading="lazy" className="img-zoom size-full object-cover" />
              </div>
            ))}
          </div>
          <div className="pt-8 text-center">
            <a href="https://wa.me/41789670537" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-xs uppercase tracking-widest text-accent-foreground">
              Un projet similaire ? Parlons-en →
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
