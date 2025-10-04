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
    <div className='w-full max-w-[400px] min-w-[350px] flex'>
      <Link to={link}>
        <div className='w-full overflow-hidden rounded-3xl font-cormorant bg-rtertiary shadow-[0_2px_10px] shadow-rtertiary'>
          <div className='w-full flex flex-col justify-center p-4'>
            <div className='w-full flex flex-col justify-end items-center rounded-xl bg-cover bg-center'>
              <div className='w-full min-w-[300] max-w-[380px] overflow-hidden rounded-2xl shadow-[0_2px_10px] shadow-blackA4'>
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
              <h2 className='text-2xl text-center font-semibold text-rbg/90'>
                {company}
              </h2>
              <p className='text-lg font-semibold text-rbg/80'>{description}</p>
              <p className='text-lg font-semibold text-rsecondary'>
                {start} - {end}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PositionCard;
