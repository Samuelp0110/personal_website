import meta from "./metadata";
import PDFButton from "../../components/PDFButton";
import ProjectLayout from "../../components/projectBlocks/ProjectLayout";
import ParagraphBlock from "../../components/projectBlocks/ParagraphBlock";
import CalloutBox from "../../components/projectBlocks/CalloutBox";
import ImageTextBlock from "../../components/projectBlocks/ImageTextBlock";
import QuoteBlock from "../../components/projectBlocks/QuoteBlock";
import SectionHeader from "../../components/projectBlocks/SectionHeader";
import UITeaser from "./ui_teaser.jpg";

const TutorPage = () => {
  return (
    <ProjectLayout showHeader metadata={meta}>
      <ParagraphBlock maxWidth="xl" align="center">
        This project rethinks how students interact with AI during homework
        help. Rather than giving direct answers, the system restructures prompts
        to promote critical thinking, explanation, and reflection. Built as a
        lightweight full-stack prototype with React, Node.js, and OpenAI’s GPT
        API, it was evaluated through a between-subjects experiment measuring
        both learning gains and perceived value.
      </ParagraphBlock>

      <ImageTextBlock
        imageSrc={UITeaser}
        imageAlt="Screenshot of the AI tutor platform interface with a chat UI and mode toggle"
        title="An AI That Prompts You to Think"
        text="The system includes a mode toggle (affirmative vs. critical), a ChatGPT-style UI, and prompt rewriting logic that encourages reasoning over retrieval. It logs all interactions, enabling quantitative and qualitative analysis of user behavior."
        reverse
      />

      <SectionHeader
        title="Experimental Results"
        subtitle="Data-backed insights from a between-subjects study"
        align="center"
        hasDivider
      />

      <QuoteBlock
        quote="It felt like working with a tutor who asks guiding questions. I actually had to think about what I knew."
        author="Participant, Experimental Group"
        align="center"
        maxWidth="lg"
      />

      <ParagraphBlock maxWidth="xl" align="center">
        Participants in the <strong>critical mode</strong> improved their
        post-test scores by <strong>1.43 points</strong> (vs. 0.67 in
        affirmative mode), and rated usefulness and confidence higher. Though
        the sample size was limited (N = 13), trends were consistent: AI
        prompting improved cognitive engagement and knowledge retention.
      </ParagraphBlock>

      <CalloutBox
        type="info"
        title="What Made This a Data Science Project?"
        text="This project combined prompt engineering, behavioral data logging, experimental design, statistical analysis (t-tests, correlations), and thematic qualitative coding to evaluate the cognitive impact of AI interaction styles."
      />

      <PDFButton slug="tutor">View Full Report</PDFButton>

      <ParagraphBlock maxWidth="xl" align="center">
        Future work will integrate adaptive prompts, expand beyond math-focused
        tasks, and explore deployment into LMS environments. This project
        demonstrates how thoughtful interaction design combined with data
        science can reframe AI from an answer machine into a learning partner.
      </ParagraphBlock>
    </ProjectLayout>
  );
};

export default TutorPage;
