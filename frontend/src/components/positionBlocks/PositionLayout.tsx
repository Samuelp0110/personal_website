import React from "react";
import type { PositionMetadata } from "../../types/positions"; // Update path if needed

interface PositionLayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  metadata?: PositionMetadata;
}

const PositionLayout: React.FC<PositionLayoutProps> = ({
  children,
  showHeader = false,
  metadata,
}) => {
  return (
    <div className='w-full font-cormorant flex flex-col items-center justify-between space-y-4 md:space-y-0'>
      {showHeader && metadata && (
        <div className='w-full bg-body/10 font-roboto p-4 md:mb-auto rounded-md shadow-md'>
          <div className='flex flex-col items-center text-center'>
            {metadata.title && (
              <h1 className='text-body text-3xl sm:text-2xl font-medium'>
                {metadata.title}
              </h1>
            )}
            {metadata.company && (
              <h1 className='text-body/85 text-2xl sm:text-xl font-medium'>
                {metadata.company}
              </h1>
            )}
            {metadata.roleType && (
              <h1 className='text-body/70 text-xl sm:text-lg font-medium'>
                {metadata.roleType}
              </h1>
            )}

            {metadata.tags?.length > 0 && (
              <div className='flex flex-col justify-center mb-2'>
                <div className='p-2 pb-0 text-lg text-background/80'>
                  Top Skills Used
                </div>
                <div className='bg-background/20 p-3 rounded-full flex flex-wrap gap-2'>
                  {metadata.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className='bg-secondary text-background text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-md'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main content area with responsive horizontal padding */}
      <div className='w-full flex flex-col items-center m-2 px-16 md:px-12 sm:px-8 space-y-7 mb-4'>
        {children}
      </div>
    </div>
  );
};

export default PositionLayout;
