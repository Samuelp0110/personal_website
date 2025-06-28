import meta from "./metadata";
import PDFButton from "../../components/PDFButton";
import ProjectLayout from "../../components/projectBlocks/ProjectLayout";
import CalloutBox from "../../components/projectBlocks/CalloutBox";
import ImageTextBlock from "../../components/projectBlocks/ImageTextBlock";
import ParagraphBlock from "../../components/projectBlocks/ParagraphBlock";
import QuoteBlock from "../../components/projectBlocks/QuoteBlock";
import SectionHeader from "../../components/projectBlocks/SectionHeader";
import FinalResults from "./final_results.png";

const ArrestPage = () => {
  return (
    <ProjectLayout showHeader metadata={meta}>
      <ParagraphBlock maxWidth="xl" align="center">
        This project analyzed New York City vehicle stop data to explore whether
        arrests during traffic stops can be predicted using only circumstantial
        data such as driver demographics, time of stop, location, and vehicle
        type. Using a wide suite of classifiers including XGBoost, Random
        Forest, and Logistic Regression, we explored both predictive performance
        and the ethical challenges of such modeling.
      </ParagraphBlock>

      <ImageTextBlock
        imageSrc={FinalResults}
        imageAlt="Bar chart comparing accuracy scores of all models: XGBoost, RF, GBoost, DTree, etc."
        title="How Accurate Were the Models?"
        text="XGBoost outperformed all other classifiers with 81.67% accuracy, followed by Random Forest at 81.26%. Simpler models like Logistic Regression and SVM performed poorly, highlighting the complexity of the underlying feature interactions."
      />

      <SectionHeader
        title="A Word of Caution"
        subtitle="When prediction alone isn’t enough"
        align="center"
        hasDivider
      />

      <QuoteBlock
        quote="It's near impossible to predict whether an arrest was made based on circumstantial information alone."
        author="Project Report"
        align="center"
        maxWidth="lg"
      />

      <ParagraphBlock maxWidth="xl" align="center">
        While the predictive results were statistically interesting, the project
        surfaced a deeper insight: **without knowing the reason for the stop,
        predictions may reflect systemic patterns rather than individual
        outcomes.** This raises questions about bias, fairness, and responsible
        deployment of predictive analytics in policing.
      </ParagraphBlock>

      <CalloutBox
        type="warning"
        title="Why It Matters"
        text="Building arrest predictors without context can reinforce historical bias. This project helps illustrate how data science can be used both for insights — and for critical reflection."
      />

      <PDFButton slug="arrestPredictor">View Full Report</PDFButton>

      <ParagraphBlock maxWidth="xl" align="center">
        Future improvements could integrate command-level reasons for stops,
        compare predictive bias across demographics, or build separate pipelines
        for different jurisdictions. This project offers a grounded, realistic
        look at the limits and power of circumstantial modeling in criminal
        justice data science.
      </ParagraphBlock>
    </ProjectLayout>
  );
};

export default ArrestPage;
