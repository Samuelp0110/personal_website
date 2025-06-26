import { useParams } from "react-router";
import { lazy, Suspense } from "react";
import projectsMetadata from "../data/projectsMetadata";
import type { ProjectMetadata } from "../types/projects";

// Import all possible project pages with Vite’s dynamic import
const projectModules = import.meta.glob("../projects/*/index.tsx");

const ProjectPageLoader = () => {
  const { slug } = useParams();

  // Find matching metadata entry
  const project: ProjectMetadata | undefined = projectsMetadata.find(
    (p) => p.slug === slug
  );

  if (!project || !slug) {
    return (
      <div className='p-8 text-red-500 font-bold text-xl text-center'>
        Project Not Found.
      </div>
    );
  }

  // Try to dynamically import the matching project component
  const Page = lazy(async () => {
    const path = `../projects/${slug}/index.tsx`;
    const importer = projectModules[path];
    if (!importer) throw new Error("Project page not found");

    const module = await importer();
    return module as { default: React.ComponentType };
  });

  return (
    <Suspense
      fallback={<div className='p-8 text-center'>Loading Project…</div>}
    >
      <Page />
    </Suspense>
  );
};

export default ProjectPageLoader;
