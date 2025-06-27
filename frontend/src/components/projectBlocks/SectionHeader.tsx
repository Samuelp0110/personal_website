import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align: "left" | "center" | "right";
  hasDivider: boolean;
}

const alignmentMap = {
  left: "text-left ml-0 mr-auto",
  center: "text-center mx-auto",
  right: "text-right ml-auto mr-0",
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  hasDivider,
}) => {
  const alignmentClasses = alignmentMap[align] || alignmentMap.center;

  return (
    <div className={`flex flex-col ${alignmentClasses} max-w-prose space-y-2`}>
      <h2 className="text-3xl sm:text-4xl font-bold font-cormorant text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-muted font-cormorant">{subtitle}</p>
      )}
      {hasDivider && <div className="w-full border-t border-gray-300 mt-2" />}
    </div>
  );
};

export default SectionHeader;
