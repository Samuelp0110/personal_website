import React from "react";

interface TextOverImageProps {
  imageSrc?: string;
  title?: string;
  description?: string;
  darkenBackground?: boolean;
  textPosition?: "left" | "center" | "right";
}

const textPositionMap = {
  left: "justify-start text-left",
  center: "justify-center text-center",
  right: "justify-end text-right",
};

const TextOverImage: React.FC<TextOverImageProps> = ({
  imageSrc,
  title,
  description,
  darkenBackground = false,
  textPosition = "center",
}) => {
  const backgroundImage = imageSrc?.trim() || "/NoImage.svg";
  const alignmentClasses =
    textPositionMap[textPosition] || textPositionMap.center;

  return (
    <div
      className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Optional Overlay */}
      {darkenBackground && <div className="absolute inset-0 bg-black/50" />}

      {/* Text Content */}
      <div
        className={`absolute inset-0 flex items-center ${alignmentClasses} px-6`}
      >
        <div className="text-body drop-shadow space-y-2">
          {title && <h2 className="text-3xl font-bold">{title}</h2>}
          {description && <p className="text-lg">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default TextOverImage;
