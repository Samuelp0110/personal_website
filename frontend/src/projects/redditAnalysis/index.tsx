import meta from "./metadata";
import PDFButton from "../../components/PDFButton";
import ProjectLayout from "../../components/projectBlocks/ProjectLayout";
import CalloutBox from "../../components/projectBlocks/CalloutBox";
import ImageGalleryRow from "../../components/projectBlocks/ImageGalleryRow";
import ImageTextBlock from "../../components/projectBlocks/ImageTextBlock";
import ParagraphBlock from "../../components/projectBlocks/ParagraphBlock";
import QuoteBlock from "../../components/projectBlocks/QuoteBlock";
import SectionHeader from "../../components/projectBlocks/SectionHeader";
import BarChart from "./model_accuracy_comparison.png";
import Confusion from "./mlp_confusion_matrix.png";
import Precision from "./precision_curve_mlp.png";
import SentimentDist from "./sentiment_distribution.png";

const RedditPage = () => {
  return (
    <ProjectLayout showHeader metadata={meta}>
      <ParagraphBlock maxWidth="xl" align="center">
        This data science project applied natural language processing techniques
        to extract both sentiment and topical context from Reddit threads
        concerning the Ukraine–Russia conflict. Using TF-IDF, LDA, and several
        supervised classifiers, we analyzed over 50,000 posts to uncover both
        the subject matter and the emotional tone of Reddit discourse.
      </ParagraphBlock>

      <ImageTextBlock
        imageSrc={SentimentDist}
        imageAlt="Bar chart showing sentiment distribution: 28,526 Negative, 45,051 Neutral, and 43,525 Positive Reddit posts"
        title="What Were Reddit Users Feeling?"
        text="Sentiment was classified into Negative, Neutral, and Positive categories. Neutral posts made up the largest share, but positive and negative sentiment were both significant in volume."
      />

      <SectionHeader
        title="Model Comparison"
        subtitle="Evaluating machine learning methods for text classification"
        align="center"
        hasDivider
      />

      <ImageTextBlock
        imageSrc={BarChart}
        imageAlt="Bar chart comparing the accuracy, precision, recall, and F1 score for Logistic Regression, Naive Bayes, Linear SVM, Random Forest, and MLP"
        title="Which Model Performed Best?"
        text="The Multi-Layer Perceptron (MLP) achieved the highest F1 score at 95.78%, outperforming all other traditional classifiers. Random Forest and SVM were strong contenders, while Naive Bayes had high recall but low precision."
        reverse
      />

      <ImageGalleryRow
        images={[
          {
            src: Confusion,
            alt: "Confusion matrix for MLP showing true and predicted sentiment labels",
            caption: "MLP Confusion Matrix",
          },
          {
            src: Precision,
            alt: "Precision-recall curve for MLP classifier on sentiment task",
            caption: "MLP Precision-Recall Curve",
          },
        ]}
        columns={2}
        gap="gap-6"
      />

      <QuoteBlock
        quote="MLP models achieved an F1 score of 95.78% on sentiment classification, outperforming traditional models across the board."
        author="Project Conclusion"
        align="center"
        maxWidth="full"
      />

      <CalloutBox type="info" title="Dataset Used" text="">
        <p>
          Reddit Russia–Ukraine Conflict Dataset from{" "}
          <a
            href="https://www.kaggle.com/datasets/tariqsays/reddit-russiaukraine-conflict-dataset"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            Kaggle
          </a>{" "}
          – approx. 50,000 Reddit posts and comments.
        </p>
      </CalloutBox>

      <PDFButton slug="redditAnalysis">View Full Report</PDFButton>

      <ParagraphBlock maxWidth="xl" align="center">
        This project showcases how data science techniques can be used to
        extract structured insights from messy, real-world text data. Future
        directions include using BERT or RoBERTa for context-aware sentiment
        classification and deploying the system for real-time Reddit monitoring.
      </ParagraphBlock>
    </ProjectLayout>
  );
};

export default RedditPage;
