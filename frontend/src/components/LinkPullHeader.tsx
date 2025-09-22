import React from "react";

interface LinkPillHeaderProps {
  title?: string;
  subtitle?: string;
  links: {
    label: string;
    url: string;
  }[];
}

const LinkPillHeader: React.FC<LinkPillHeaderProps> = ({
  title,
  subtitle,
  links,
}) => {
  return (
    <div className='bg-body/40 outline-2 outline-background mr-4 ml-4 mt-4 mb-4 max-w-5/6 rounded-4xl shadow-md'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-body text-3xl sm:text-4xl font-bold mb-3 px-10'>
          {title}
        </h1>
        {subtitle && <p className='text-background text-sm mb-2'>{subtitle}</p>}

        {links.length > 0 && (
          <div className='flex flex-wrap justify-center gap-2 mb-4 px-8'>
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-secondary text-background text-sm px-3 py-1 rounded-full shadow-md backdrop-blur-md hover:opacity-60 transition-opacity'
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkPillHeader;
