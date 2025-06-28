import type { ProjectMetadata } from "../../types/projects";
import Image from "./headerUkraine.jpg";

const metadata: ProjectMetadata = {
  slug: "redditAnalysis",
  title: "Reddit Sentiment & Topic Analysis During the Ukraine–Russia Conflict",
  description:
    "Analyzed over 50,000 Reddit posts using TF-IDF, LDA, and neural networks to extract sentiment and topical focus.",
  date: "2025-05-7",
  tags: ["Data Science", "NLP", "Machine Learning", "Social Media Analytics"],
  image: Image,
  pdfUrl: undefined,
};

export default metadata;
