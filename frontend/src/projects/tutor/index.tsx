import meta from "./metadata";
import PDFButton from "../../components/PDFButton";
import ProjectLayout from "../../components/projectBlocks/ProjectLayout";

const TutorPage = () => {
  return (
    <ProjectLayout showHeader metadata={meta}>
      <PDFButton slug={meta.slug}>See the Report</PDFButton>
    </ProjectLayout>
  );
};

export default TutorPage;
