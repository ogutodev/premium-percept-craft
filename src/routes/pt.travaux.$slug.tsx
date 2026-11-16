import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/pages/case-study";
import { getProject } from "@/lib/projects";
import { caseHead } from "@/lib/seo";

export const Route = createFileRoute("/pt/travaux/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const project = getProject(params.slug, "pt");
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => caseHead(loaderData?.project, "pt", params.slug),
  component: Page,
});

function Page() {
  const { project } = Route.useLoaderData();
  return <CaseStudyPage project={project} />;
}
