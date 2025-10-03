import type { FC } from "react";
// import ProfileImage from "../assets/SP_GradPhoto.jpg";

const HeroSection: FC = () => {
  return (
    <section className='w-full px-6 py-12 flex flex-wrap justify-center items-center gap-10'>
      <div className='max-w-[1000px] w-full flex flex-col md:flex-row items-center gap-6'>
        {/* Profile Image */}
        {/* <img
          src={ProfileImage}
          alt='Sam Preston'
          className='w-[200px] h-[200px] rounded-full border border-background object-cover'
        /> */}

        {/* Text Block */}
        <div className='flex-1 flex flex-col gap-4 text-center font-cormorant text-background'>
          <h1 className='text-4xl font-bold'>Hello, I’m Sam Preston</h1>
          <p className='text-3xl font-semibold leading-snug'>
            With an inquisitive personality and a creative spirit, I find myself
            drawn to almost anything where I have the opportunity to make a
            change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
