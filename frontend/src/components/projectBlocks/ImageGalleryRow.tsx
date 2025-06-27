import React from "react";

interface ImageGalleryRowProps {
  images: {
    src: string;
    alt?: string;
    caption?: string;
  }[];
  columns?: number;
  gap?: string;
  rounded?: boolean;
}

const ImageGalleryRow: React.FC<ImageGalleryRowProps> = ({
  images,
  columns,
  gap = "gap-6",
  rounded = true,
}) => {
  const displayedImages = columns ? images.slice(0, columns) : images;

  return (
    <div
      className={`flex flex-wrap md:flex-row flex-col items-center justify-center ${gap}`}
    >
      {displayedImages.map((img, idx) => {
        const imageToUse = img.src?.trim() || "/NoImage.svg";

        return (
          <div
            key={idx}
            className={`relative group w-full md:w-auto max-w-xs md:max-w-sm ${
              idx % 2 === 0 ? "mr-auto md:mr-0" : "ml-auto md:ml-0"
            }`}
          >
            <img
              src={imageToUse}
              alt={img.alt || ""}
              className={`w-full max-w-[250px] h-auto object-contain ${
                rounded ? "rounded-xl" : ""
              } shadow-md`}
            />

            {img.caption && (
              <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl">
                {img.caption}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageGalleryRow;
