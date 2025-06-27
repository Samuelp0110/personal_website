import React from "react";

interface QuoteBlockProps {
  quote: string;
  author?: string;
  role?: string;
  align?: "left" | "center" | "right";
  maxWidth?: "prose" | "md" | "lg" | "xl" | "full";
}

const alignmentMap = {
  left: "text-left ml-0 mr-auto",
  center: "text-center mx-auto",
  right: "text-right ml-auto mr-0",
};

const widthMap = {
  prose: "max-w-prose",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  author,
  role,
  align = "center",
  maxWidth = "prose",
}) => {
  const alignmentClasses = alignmentMap[align];
  const widthClass = widthMap[maxWidth];

  return (
    <div
      className={`w-full ${widthClass} ${alignmentClasses} px-6 py-6 rounded-xl shadow-md bg-secondary/50 backdrop-blur-sm flex flex-col space-y-4 font-cormorant`}
    >
      <p className="text-xl italic relative text-foreground">
        <span className="text-3xl font-serif text-background mr-1 leading-none">
          “
        </span>
        {quote}
        <span className="text-3xl font-serif text-background ml-1 leading-none">
          ”
        </span>
      </p>

      {author && (
        <div className="text-sm text-gray-700">
          <p className="font-semibold">{author}</p>
          {role && <p className="text-xs italic">{role}</p>}
        </div>
      )}
    </div>
  );
};

export default QuoteBlock;
