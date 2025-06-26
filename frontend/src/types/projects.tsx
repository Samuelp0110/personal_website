// Type definition for a project’s metadata
export interface ProjectMetadata {
  slug: string; // used for route like /projects/slug
  title: string; // project title
  description: string; // short summary
  date: string; // ISO format: "2024-06-01"
  tags: string[]; // for future filtering
  image: string; // path to preview image
  pdfUrl?: string; // optional link to PDF report
}
