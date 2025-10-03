import { useParams } from "react-router"; // Get dynamic route params (like 'slug' from /projects/:slug)
import { lazy, Suspense } from "react"; // For lazy-loading components with a loading fallback
import positionsMetadata from "../data/positionsMetadata"; // Our list of known projects and metadata
import type { PositionMetadata } from "../types/positions"; // Type definition for project metadata

// STEP 1: Use Vite’s dynamic import tool to scan project folders
// This creates a map like:
// { '../projects/fleco/index.tsx': () => import('../projects/fleco/index.tsx'), ... }
const positionModules = import.meta.glob("../positions/*/index.tsx");

const PositionPageLoader = () => {
  // STEP 2: Read the current URL slug (e.g., /projects/fleco → slug = "fleco")
  const { slug } = useParams();

  // STEP 3: Look up the matching project metadata (optional step for error checking)
  const position: PositionMetadata | undefined = positionsMetadata.find(
    (p) => p.slug === slug
  );

  // STEP 4: If there's no match, return an error message to the user
  if (!position || !slug) {
    return (
      <div className='p-8 text-red-500 font-bold text-xl text-center'>
        Page Not Found.
      </div>
    );
  }

  // STEP 5: Dynamically import the actual project component using the slug
  // React.lazy expects a Promise that resolves to { default: ReactComponent }
  const Page = lazy(async () => {
    const path = `../positions/${slug}/index.tsx`; // Construct path to the correct file
    const importer = positionModules[path]; // Get import function from Vite’s glob
    if (!importer) throw new Error("Position page not found"); // Fallback if slug is invalid

    const module = await importer(); // Dynamically import the component
    return module as { default: React.ComponentType }; // Ensure it has a default export
  });

  // STEP 6: Render the dynamically loaded project page with a loading state
  return (
    <Suspense
      fallback={<div className='p-8 text-center'>Loading Position…</div>}
    >
      <Page />
    </Suspense>
  );
};

export default PositionPageLoader;
