import flecoMeta from "./metadata";
import previewImage from "../../assets/no_image.jpg";
import ProjectHeroBlock from "../../components/projectBlocks/ProjectHeroBlock";
import TextImageSplit from "../../components/projectBlocks/TextImageSplit";
import Button from "../../components/Button";
import { useNavigate } from "react-router";

const FlecoPage = () => {
  const navigate = useNavigate();

  const handleViewReport = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    navigate("/pdf/fleco");
  };

  return (
    <main className='bg-primary w-full flex flex-col items-center mb-12'>
      <ProjectHeroBlock
        title={flecoMeta.title}
        subtitle={flecoMeta.description}
        image={previewImage}
      />

      <TextImageSplit
        text='Fleco was created to tackle campus waste. We designed it as a sustainable marketplace for students to resell goods rather than trash them.'
        image={previewImage}
      />

      <Button onClick={handleViewReport}>View Full Report</Button>
    </main>
  );
};

export default FlecoPage;
