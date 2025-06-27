import React from "react";

interface ImageTextBlockProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  reverse?: boolean;
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imageSrc,
  imageAlt = "",
  title,
  text,
  reverse = false,
}) => {
  // ✅ Use fallback image if none provided
  const imageToUse = imageSrc?.trim() || "/NoImage.svg";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 w-full`}
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={imageToUse}
          alt={imageAlt}
          className="w-full h-auto rounded-xl shadow-lg object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4 max-w-prose">
        {title && (
          <h2 className="text-2xl sm:text-3xl font-bold text-background text-foreground">
            {title}
          </h2>
        )}
        {text && <p className="text-lg text-background">{text}</p>}
      </div>
    </div>
  );
};

export default ImageTextBlock;
