import { AspectRatio } from "radix-ui";
import type { FC } from "react";

interface PhotoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const PhotoCard: FC<PhotoCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Position Reference Image",
}) => {
  return (
    <div className='w-full max-w-[500px] min-w-[450px] p-1'>
      <div className='overflow-hidden rounded-3xl font-cormorant bg-rprimary shadow-[0_2px_10px] shadow-rtertiary'>
        <div className='flex flex-col p-4 gap-4'>
          {/* Image container */}
          <div className='w-full overflow-hidden rounded-2xl shadow-[0_2px_10px] shadow-blackA4'>
            <AspectRatio.Root ratio={4 / 3}>
              <img
                className='w-full h-full object-cover'
                src={imageSrc}
                alt={imageAlt}
              />
            </AspectRatio.Root>
          </div>

          {/* Text content */}
          <div className='text-center px-2'>
            <h2 className='text-3xl font-bold text-rbg'>{title}</h2>
            <p className='text-lg font-semibold text-rbg/80'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
