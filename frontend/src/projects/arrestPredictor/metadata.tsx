import type { ProjectMetadata } from "../../types/projects";
import Image from "./arrestHeatMap.jpg";

const metadata: ProjectMetadata = {
  slug: "arrestPredictor",
  title: "Can Circumstantial Data Predict Arrest Outcomes?",
  description:
    "Explored NYPD vehicle stop data to predict arrest outcomes using ML classifiers. Showcased both predictive limitations and ethical implications.",
  date: "2025-05-14",
  tags: [
    "Data Science",
    "Machine Learning",
    "XGBoost",
    "Law Enforcement Data",
    "Bias Analysis",
  ],
  image: Image,
  pdfUrl: undefined,
};

export default metadata;
