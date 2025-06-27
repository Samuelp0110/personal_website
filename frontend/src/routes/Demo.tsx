import type { FC } from "react";
import CalloutBox from "../components/projectBlocks/CalloutBox";
import ImageGalleryRow from "../components/projectBlocks/ImageGalleryRow";
import ImageTextBlock from "../components/projectBlocks/ImageTextBlock";
import ParagraphBlock from "../components/projectBlocks/ParagraphBlock";
import ProjectLayout from "../components/projectBlocks/ProjectLayout";
import QuoteBlock from "../components/projectBlocks/QuoteBlock";
import SectionHeader from "../components/projectBlocks/SectionHeader";
import SideBySideBento from "../components/projectBlocks/SideBySideBento";
import TextOverImage from "../components/projectBlocks/TextOverImage";
import VideoEmbed from "../components/projectBlocks/VideoEmbed";

const Demo: FC = () => {
  return (
    <ProjectLayout>
      <SectionHeader
        title="Component System Demo"
        subtitle="Showcase of reusable blocks"
        align="center"
        hasDivider={true}
      />

      <TextOverImage
        imageSrc="/NoImage.svg"
        title="Text Over Image"
        description="Demonstrating banner-style layout"
        textPosition="center"
        darkenBackground
      />

      <ImageTextBlock
        imageSrc="/NoImage.svg"
        title="Side-by-Side"
        text="This layout is great for visual storytelling next to narrative."
      />

      <ImageGalleryRow
        images={[
          { src: "", caption: "One" },
          { src: "", caption: "Two" },
          { src: "", caption: "Three" },
          { src: "", caption: "Four" },
        ]}
        columns={4}
      />

      <QuoteBlock
        quote="Design is not just what it looks like and feels like. Design is how it works."
        author="Steve Jobs"
        role="Apple Co-founder"
        align="center"
        maxWidth="lg"
      />

      <ParagraphBlock align="left" maxWidth="lg">
        <p>
          This component lets you include rich text content with adjustable
          alignment and width. Great for storytelling or technical explanations.
        </p>
      </ParagraphBlock>

      <SideBySideBento
        images={[{ src: "" }, { src: "" }, { src: "" }, { src: "" }]}
        title="Bento Grid Paired With Text"
        text="Two-column layout that combines images and written explanation."
      />

      <VideoEmbed
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="Embedded Video"
        aspectRatio="4/3"
        autoplay
        muted
      />

      <CalloutBox
        type="info"
        title="Usage Tip"
        text="These components are built to be used inside any project page."
      />
    </ProjectLayout>
  );
};

export default Demo;
