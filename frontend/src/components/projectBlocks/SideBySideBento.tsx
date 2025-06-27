import React from "react";

interface SideBySideBentoProps {
  images: { src: string; alt?: string }[];
  title?: string;
  text?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

const SideBySideBento: React.FC<SideBySideBentoProps> = ({
  images,
  title,
  text,
  reverse = false,
  children,
}) => {
  const fallbackImage = "/NoImage.svg";
  const imageGrid = (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
      {images.slice(0, 4).map((img, idx) => {
        const imageToUse = img.src?.trim() || fallbackImage;
        return (
          <div
            key={idx}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src={imageToUse}
              alt={img.alt || ""}
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        );
      })}
    </div>
  );

  const textContent = (
    <div className="space-y-4 text-left max-w-prose mx-auto">
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold font-cormorant text-foreground">
          {title}
        </h2>
      )}
      {text && <p className="text-lg text-body">{text}</p>}
      {children}
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-8 w-full`}
    >
      <div className="w-full md:w-1/2">{imageGrid}</div>
      <div className="w-full md:w-1/2">{textContent}</div>
    </div>
  );
};

export default SideBySideBento;
