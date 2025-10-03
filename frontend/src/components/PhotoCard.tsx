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
    <div className='w-full max-w-[500px] min-w-[450px] flex'>
      <div className='w-full overflow-hidden rounded-3xl font-cormorant bg-rprimary shadow-[0_2px_10px] shadow-rtertiary'>
        <div className='w-full flex flex-col justify-center p-4'>
          <div className='w-full flex flex-col justify-end items-center rounded-xl bg-cover bg-center'>
            <div className='w-full min-w-[400] max-w-[480px] overflow-hidden rounded-2xl shadow-[0_2px_10px] shadow-blackA4'>
              <AspectRatio.Root ratio={4 / 3}>
                <img
                  className='size-full object-cover'
                  src={imageSrc}
                  alt={imageAlt}
                />
              </AspectRatio.Root>
            </div>
            <h2 className='text-3xl mt-2 text-center font-bold text-rbg'>
              {title}
            </h2>
            <p className='text-lg font-semibold text-rbg/80'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
