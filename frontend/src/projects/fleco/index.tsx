import flecoMeta from "./metadata";
import previewImage from "../../assets/no_image.jpg";
import ProjectHeroBlock from "../../components/projectBlocks/ProjectHeroBlock";
import TextImageSplit from "../../components/projectBlocks/TextImageSplit";
import PDFButton from "../../components/PDFButton";

const FlecoPage = () => {
  return (
    <main className="bg-primary w-full flex flex-col items-center mb-12">
      <ProjectHeroBlock
        title={flecoMeta.title}
        subtitle={flecoMeta.description}
        image={previewImage}
      />

      <TextImageSplit
        text="Fleco was created to tackle campus waste. We designed it as a sustainable marketplace for students to resell goods rather than trash them."
        image={previewImage}
      />

      <PDFButton slug="fleco">See the Report</PDFButton>
    </main>
  );
};

export default FlecoPage;
