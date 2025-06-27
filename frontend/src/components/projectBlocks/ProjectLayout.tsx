import React from "react";
import type { ProjectMetadata } from "../../types/projects"; // Update path if needed

interface ProjectLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  metadata?: ProjectMetadata;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  children,
  showHeader = false,
  metadata,
}) => {
  const formattedDate = metadata?.date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
      }).format(new Date(metadata.date))
    : null;

  return (
    <div className="w-full font-cormorant space-y-7 flex flex-col items-center">
      {showHeader && metadata && (
        <div className="bg-body/40 mr-4 ml-4 py-4 mt-4 mb-4 max-w-5/6 rounded-4xl shadow-md">
          <div className="flex flex-col items-center text-center">
            {metadata.title && (
              <h1 className="text-body text-3xl sm:text-4xl font-bold mb-3 px-10">
                {metadata.title}
              </h1>
            )}

            {metadata.tags?.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-2">
                {metadata.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-secondary text-background text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {formattedDate && (
              <p className="text-background text-sm">{formattedDate}</p>
            )}
          </div>
        </div>
      )}

      {/* Main content area with responsive horizontal padding */}
      <div className="flex flex-col items-center px-4 sm:px-6 lg:px-12 space-y-7 mb-4">
        {children}
      </div>
    </div>
  );
};

export default ProjectLayout;
