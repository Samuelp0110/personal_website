import type { FC } from "react";
import ProfileImage from "../assets/sam-preston.png";

const HeroSection: FC = () => {
  return (
    <section className='w-full px-6 py-24 flex flex-wrap justify-center items-center gap-10'>
      <div className='max-w-[1000px] w-full flex flex-col md:flex-row items-center gap-6'>
        {/* Profile Image */}
        <img
          src={ProfileImage}
          alt='Sam Preston'
          className='w-[200px] h-[200px] rounded-full border border-background object-cover'
        />

        {/* Text Block */}
        <div className='flex-1 flex flex-col gap-4 text-left font-cormorant text-background'>
          <h1 className='text-[36px] md:text-[44px] font-bold'>
            Hello, I’m Sam Preston
          </h1>
          <p className='text-[28px] md:text-[32px] font-semibold leading-snug'>
            With a creative personality and an inquisitive passion, I find
            myself drawn to almost anything involving a story. And everything
            has a story, from data to people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
