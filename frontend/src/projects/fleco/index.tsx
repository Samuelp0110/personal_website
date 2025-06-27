import meta from "./metadata";
import PDFButton from "../../components/PDFButton";
import ProjectLayout from "../../components/projectBlocks/ProjectLayout";

const FlecoPage = () => {
  return (
    <ProjectLayout showHeader metadata={meta}>
      <PDFButton slug="fleco">See the Report</PDFButton>
    </ProjectLayout>
  );
};

export default FlecoPage;
