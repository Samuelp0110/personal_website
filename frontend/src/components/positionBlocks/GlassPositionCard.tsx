import type { FC } from "react";
import { Link } from "react-router";

interface GlassPositionCardProps {
  title: string;
  description: string;
  company: string;
  start: string;
  end: string;
  imageSrc: string;
  imageAlt?: string;
  date: string;
  link: string;
}

const GlassPositionCard: FC<GlassPositionCardProps> = ({
  title,
  company,
  description,
  imageSrc,
  start,
  end,
  link,
}) => {
  return (
    <div className='aspect-[3/4] w-full max-w-[400px] min-w-[300px] flex'>
      <Link to={link}>
        <div className='w-full h-full rounded-2xl bg-primary outline-2 outline-background flex flex-col justify-end'>
          <div
            className='w-full h-full flex flex-col justify-end items-center rounded-xl bg-cover bg-center p-6'
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          >
            <div className='text-center text-background bg-primary/50 backdrop-blur-lg outline-2 outline-background rounded-2xl px-4 py-2'>
              <h3 className='text-2xl font-bold font-cormorant mb-1'>
                {title}
              </h3>
              <p className='text-xl font-semibold font-cormorant'>{company}</p>
              <p className='text-lg font-cormorant'>{description}</p>
              <p className='text-md mt-2 font-cormorant'>
                {start} - {end}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GlassPositionCard;
