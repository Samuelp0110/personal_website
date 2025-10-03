import type { FC } from "react";
import AboutMeGroupPhoto from "../assets/AboutMeGroupPhoto.jpg";
import aboutSoccer from "../assets/aboutSoccer.webp";
import aboutRocco from "../assets/aboutAward.jpeg";
import aboutFleco from "../assets/aboutFleco.jpg";
import aboutCooking from "../assets/aboutCooking.jpg";
import HeroHeader from "../components/HeroHeader";
import PhotoCard from "../components/PhotoCard";

const photos = [
  {
    title: "Masters Graduation",
    imageSrc: AboutMeGroupPhoto,
    imageAlt: "Graduation Group Photo",
    description:
      "Graduated with my Masters in Computer Science alongside my peers",
  },
  {
    title: "Hive Soccer League",
    imageSrc: aboutSoccer,
    imageAlt: "Group Soccer Photo",
    description:
      "Having played soccer since I was 3, I try to stay active with local adult leagues like Hive in Hoboken, NJ",
  },
  {
    title: "Ansary Competition",
    imageSrc: aboutFleco,
    imageAlt: "Fleco Photo",
    description:
      "I participated in the Ansary Competition presenting the app Fleco, where I am my teammates won 2nd place",
  },
  {
    title: "Appreciation Award",
    imageSrc: aboutRocco,
    imageAlt: "Award Photo",
    description:
      "I strive to recognize those who have excelled in their area, which is why I was able to grant my friend a certificate of appreciation formally for his first year as a professor ",
  },
  {
    title: "Cooking Alot",
    imageSrc: aboutCooking,
    imageAlt: "Shakshuka Photo",
    description:
      "I love to cook all types of food. Shown here is my attempt at making Shakshuka",
  },
];

const About: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Section */}
      <HeroHeader title='Creative. Inquisitive. Analytical' />

      {/* Bio Text Section */}
      <section className='px-18 py-15 flex justify-center'>
        <div className='max-w-[1000px] text-justify flex flex-col gap-4 text-[20px] md:text-[24px] font-cormorant font-normal text-rfg'>
          <p>
            Hello there! I’m Sam Preston. I have a Master's of Computer Science
            in Software Development (2025) and a Bachelor's of Science in
            Business with concentrations in Computer Science and Information
            Systems (2024) from{" "}
            <a
              href='https://www.stevens.edu/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-rtertiary font-bold underline hover:text-rprimary transition-colors duration-300'
            >
              Stevens Institute of Technology
            </a>{" "}
            in Hoboken, NJ. I strive for creativity in anything I do, whether it
            be creating a story with friends, developing new and interesting
            software or learning new things.
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
              className='text-rtertiary font-bold underline hover:text-rprimary transition-colors duration-300'
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
      <section className='w-full max-w-[1200px] px-6'>
        <div className='grid lg:grid-cols-2 gap-6 justify-items-center'>
          {photos.map(({ imageSrc, imageAlt, title, description }, index) => (
            <PhotoCard
              key={index}
              title={title}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              description={description}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
