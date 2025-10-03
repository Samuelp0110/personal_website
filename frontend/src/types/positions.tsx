// Type definition for a Work Experiences metadata

export interface PositionMetadata {
  slug: string; // used for route like /projects/slug
  title: string; // Position Title
  roleType: string;
  company: string; // Company Worked For
  description: string; // short summary
  date: string; // ISO format: "2024-06-01" for sorting
  start: string; // start month/year "June 2024"
  end: string; // end month/yuear "August 2024"
  tags: string[]; // for future filtering
  image: string; // path to preview image
  pdfUrl?: string; // optional link to PDF report
}
