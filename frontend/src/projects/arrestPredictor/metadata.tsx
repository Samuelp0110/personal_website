import type { ProjectMetadata } from "../../types/projects";
import Image from "./arrestHeatMap.jpg";

const metadata: ProjectMetadata = {
  slug: "arrestPredictor",
  title: "NYPD Traffic Stop Analysis",
  description:
    "An experiment to see if you can predict an arrest during a NYC traffic stop based on circumstantial data",
  date: "2025-05-14",
  tags: ["data science", "machine learning", "analytics"],
  image: Image,
  pdfUrl: undefined,
};

export default metadata;
