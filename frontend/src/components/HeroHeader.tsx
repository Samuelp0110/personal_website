import type { FC } from "react";
import HeroBackground from "../assets/fantasy_nature_background.jpg";

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  const bgImage = backgroundImage || HeroBackground;

  return (
    <section
      className='w-full h-36 bg-cover bg-center flex flex-col justify-center items-center px-6 py-12'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className='max-w-[1000px] text-center text-rsecondary text-[32px] sm:text-[48px] md:text-[76px] font-cormorant font-bold leading-tight'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-center text-rfg text-lg sm:text-xl md:text-2xl mt-4 max-w-[800px] font-cormorant'>
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default HeroHeader;
