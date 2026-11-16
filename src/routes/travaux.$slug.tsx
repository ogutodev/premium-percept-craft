import { createFileRoute, notFound } from "@tanstack/react-router";
import { CaseStudyPage } from "@/components/pages/case-study";
import { getProject } from "@/lib/projects";
import { caseHead } from "@/lib/seo";

export const Route = createFileRoute("/travaux/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => caseHead(loaderData?.project, "fr", params.slug),
  component: Page,
});

function Page() {
  const { project } = Route.useLoaderData();
  return <CaseStudyPage project={project} />;
}
