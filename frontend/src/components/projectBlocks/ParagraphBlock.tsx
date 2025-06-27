import React from "react";

interface ParagraphBlockProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  maxWidth?: "prose" | "md" | "lg" | "xl" | "full";
}

const alignmentClassMap = {
  left: "text-left ml-0 mr-auto",
  center: "text-center mx-auto",
  right: "text-right ml-auto mr-0",
};

const widthClassMap = {
  prose: "max-w-prose",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({
  children,
  align = "left",
  maxWidth = "prose",
}) => {
  const alignmentClasses = alignmentClassMap[align];
  const widthClass = widthClassMap[maxWidth];

  return (
    <div
      className={`prose prose-lg font-cormorant w-full ${widthClass} ${alignmentClasses}`}
    >
      {children}
    </div>
  );
};

export default ParagraphBlock;
