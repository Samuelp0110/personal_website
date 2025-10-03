import type { PositionMetadata } from "../types/positions";

// Dynamically import all metadata files eagerly (at build time)
const metadataModules = import.meta.glob<
  true,
  string,
  { default: PositionMetadata }
>("../positions/*/metadata.tsx", { eager: true });

// Extract and collect the default exports (the metadata objects)
const allPositions: PositionMetadata[] = Object.values(metadataModules).map(
  (mod) => mod.default
);

// Sort by date (descending: most recent first)
allPositions.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default allPositions;
