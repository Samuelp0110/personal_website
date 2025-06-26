import type { FC } from "react";

interface GlassProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  date: string;
}

const GlassProjectCard: FC<GlassProjectCardProps> = ({
  title,
  description,
  imageSrc,
  date,
}) => {
  return (
    <div className='aspect-[3/4] w-full max-w-[400px] min-w-[300px] flex'>
      <div className='w-full h-full rounded-2xl bg-primary outline-2 outline-background flex flex-col justify-end p-4'>
        <div
          className='w-full h-full flex flex-col justify-end items-center rounded-xl bg-cover bg-center p-6'
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        >
          <div className='text-center text-background bg-primary/40 backdrop-blur-sm rounded-md px-4 py-2'>
            <h3 className='text-2xl font-semibold font-cormorant mb-1'>
              {title}
            </h3>
            <p className='text-lg font-cormorant'>{description}</p>
            <p className='text-md mt-2 font-cormorant'>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassProjectCard;
