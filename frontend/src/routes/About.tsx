import type { FC } from "react";
import AboutMeGroupPhoto from "../assets/AboutMeGroupPhoto.jpg";
import HeroBackground from "../assets/fantasy_nature_background.jpg";

const About: FC = () => {
  return (
    <main className='bg-primary w-full overflow-hidden flex flex-col items-center'>
      {/* Hero Section */}
      <section
        className='w-full bg-cover bg-center flex justify-center items-center px-6 py-32'
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <h1 className='max-w-[1000px] text-center text-secondary text-[32px] sm:text-[48px] md:text-[76px] font-cormorant font-bold leading-tight'>
          Creative. Inquisitive. Analytical.
        </h1>
      </section>

      {/* Bio Text Section */}
      <section className='px-18 py-24 flex justify-center'>
        <div className='max-w-[1000px] text-justify flex flex-col gap-4 text-[20px] md:text-[24px] font-cormorant font-normal text-background'>
          <p>
            Hello There! I’m Sam Preston. I have a Masters of Computer Science
            in Software Development (2025) and a Bachelors of Science in
            Business with concentrations in Computer Science and Information
            Systems (2024) from Stevens Institute of Technology in Hoboken, NJ!
            I strive for creativity in anything I do, whether it be creating a
            story with friends, developing new and interesting software or
            learning new things.
          </p>
          <p>
            While in college, I was a member of the Sigma Phi Epsilon
            fraternity, holding multiple roles including being a challenge level
            coordinator and a D&D DM. Thanks to my time as a business
            undergraduate, I got to dip my toes into the world of
            entrepreneurship as I worked on a startup idea called Fleco, a
            nature-centric college marketplace designed to help keep old
            furniture and items off the streets. We were happy to{" "}
            <a
              href='https://www.stevens.edu/news/ssb-students-showcase-expertise-at-innovation-expo-2024'
              target='_blank'
              rel='noopener noreferrer'
              className='text-accent font-bold underline hover:text-body transition-colors duration-300'
            >
              place second
            </a>{" "}
            in the SSB Students Showcase at the 2024 Innovation Expo.
          </p>
          <p>
            Outside of my responsibilities and work, you will most likely find
            me playing a game with friends, writing a book or cooking a good
            meal. Recently, I’ve started to find myself more involved in the
            world of 3D design, whether it be for printing or digital use.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className='w-full px-6 py-14 flex justify-center'>
        <div className='w-full max-w-[1000px]'>
          <img
            src={AboutMeGroupPhoto}
            alt='Sam Preston with friends at graduation'
            className='w-full rounded-2xl max-h-[600px] object-cover'
          />
        </div>
      </section>
    </main>
  );
};

export default About;
