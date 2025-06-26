import type { FC } from "react";
import HeroBackground from "../assets/fantasy_nature_background.jpg";

interface HeroHeaderProps {
  title: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title }) => {
  return (
    <section
      className='w-full h-70 bg-cover bg-center flex justify-center items-center px-6 py-32'
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <h1 className='max-w-[1000px] text-center text-secondary text-[32px] sm:text-[48px] md:text-[76px] font-cormorant font-bold leading-tight'>
        {title}
      </h1>
    </section>
  );
};

export default HeroHeader;
