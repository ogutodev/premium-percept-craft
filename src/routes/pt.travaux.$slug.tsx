import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/pages/case-study";
import { getProject } from "@/lib/projects";
import { seoLinks } from "@/lib/i18n";
import { OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/pt/travaux/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Estudo de caso · TRÍADE Genebra` : "TRÍADE";
    const description = p ? `${p.service} — ${p.location}.` : "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OG_IMAGE },
        ...(p ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: seoLinks("pt", `/travaux/${params.slug}`),
    };
  },
  component: Page,
});

function Page() {
  const { project } = Route.useLoaderData();
  return <CaseStudyPage project={project} />;
}
