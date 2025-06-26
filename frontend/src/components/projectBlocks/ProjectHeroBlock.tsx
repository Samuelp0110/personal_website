import type { FC } from "react";

interface ProjectHeroBlockProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const ProjectHeroBlock: FC<ProjectHeroBlockProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <section
      className='w-full bg-cover bg-center flex justify-center items-center px-6 py-32'
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      <div className='max-w-[1000px] text-center text-secondary'>
        <h1 className='text-[32px] md:text-[64px] font-cormorant font-bold leading-tight'>
          {title}
        </h1>
        {subtitle && (
          <p className='mt-4 text-[20px] md:text-[28px] font-cormorant font-normal'>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default ProjectHeroBlock;
