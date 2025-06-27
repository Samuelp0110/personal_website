import type { ProjectMetadata } from "../types/projects";

// Dynamically import all metadata files eagerly (at build time)
const metadataModules = import.meta.glob<
  true,
  string,
  { default: ProjectMetadata }
>("../projects/*/metadata.tsx", { eager: true });

// Extract and collect the default exports (the metadata objects)
const allProjects: ProjectMetadata[] = Object.values(metadataModules).map(
  (mod) => mod.default
);

// Sort by date (descending: most recent first)
allProjects.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default allProjects;
