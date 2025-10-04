import type { FC } from "react";
import { Link } from "react-router";
import { AspectRatio } from "radix-ui";

interface PositionCardProps {
  title: string;
  description: string;
  company: string;
  imageSrc: string;
  imageAlt?: string;
  start: string;
  end: string;
  link: string;
  reverse?: boolean;
}

const PositionCard: FC<PositionCardProps> = ({
  title,
  description,
  imageSrc,
  company,
  start,
  end,
  imageAlt = "Position Reference Image",
  link,
}) => {
  return (
    <div className='w-full max-w-[400px] min-w-[350px] p-1'>
      <Link
        to={link}
        className='block overflow-hidden rounded-3xl bg-rtertiary font-cormorant shadow-[0_2px_10px] shadow-rtertiary transition-transform duration-300 hover:scale-[1.02]'
      >
        <div className='flex flex-col p-4 gap-3'>
          {/* Image */}
          <div className='overflow-hidden rounded-2xl shadow-[0_2px_10px] shadow-blackA4'>
            <AspectRatio.Root ratio={4 / 3}>
              <img
                className='w-full h-full object-cover'
                src={imageSrc}
                alt={imageAlt}
              />
            </AspectRatio.Root>
          </div>

          {/* Text Content */}
          <div className='flex flex-col items-center text-center text-rbg'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            {company && (
              <h3 className='text-2xl font-semibold text-rbg/90'>{company}</h3>
            )}
            {description && (
              <p className='text-lg font-medium text-rbg/80'>{description}</p>
            )}
            {(start || end) && (
              <p className='text-lg font-semibold text-rsecondary'>
                {start} – {end}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PositionCard;
