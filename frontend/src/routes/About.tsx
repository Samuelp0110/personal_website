import type { FC } from "react";
import AboutMeGroupPhoto from "../assets/AboutMeGroupPhoto.jpg";
import aboutSoccer from "../assets/aboutSoccer.webp";
import aboutRocco from "../assets/aboutAward.jpeg";
import aboutFleco from "../assets/aboutFleco.jpg";
import aboutCooking from "../assets/aboutCooking.jpg";
import HeroHeader from "../components/HeroHeader";
import PhotoCard from "../components/PhotoCard";
import {
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  MoveRight,
  Sparkle,
} from "lucide-react";
import ConnectModal from "../components/Navigation/ConnectModal";
import { Link } from "react-router";
import { motion } from "framer-motion";

const photos = [
  {
    title: "Master's Graduation",
    imageSrc: AboutMeGroupPhoto,
    imageAlt: "Graduation Group Photo",
    description:
      "Graduated with my Master's in Computer Science alongside my peers",
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
      "I participated in the Ansary Competition presenting the app Fleco, where I and my teammates won 2nd place",
  },
  {
    title: "Appreciation Award",
    imageSrc: aboutRocco,
    imageAlt: "Award Photo",
    description:
      "I strive to recognize those who have excelled in their area, which is why I was able to grant my friend a certificate of appreciation formally for his first year as a professor ",
  },
  {
    title: "Cooking a Lot",
    imageSrc: aboutCooking,
    imageAlt: "Shakshuka Photo",
    description:
      "I love to cook all types of food. Shown here is my attempt at making Shakshuka",
  },
];

const skills = [
  { skill: "MS Office" },
  { skill: "Lucidchart" },
  { skill: "Jira" },
  { skill: "Python" },
  { skill: "SQL" },
  { skill: "Machine Learning" },
  { skill: "Generative AI" },
  { skill: "React" },
  { skill: "Typescript" },
  { skill: "TailwindCSS" },
];

const services = [
  { service: "AI Agents" },
  { service: "Gen AI Applications" },
  { service: "Business Analytics" },
  { service: "Business Development" },
];

const callOuts = [
  { main: "4+", sub: "Years of Experience" },
  { main: "20+", sub: "Projects Completed" },
  { main: "10+", sub: "Happy Clients" },
  { main: "5+", sub: "Something Something" },
];

const tags = [
  {
    icon: <Sparkle />,
    text: "IT Consultant",
  },
  {
    icon: <GraduationCap />,
    text: "M.S. Computer Science - B.S. Business Science",
  },
  {
    icon: <MapPin />,
    text: "New York City Area",
  },
  {
    icon: <BriefcaseBusiness />,
    text: "1+ Years of Professional Experience",
  },
];

const About: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Section */}
      <HeroHeader title='Creative. Inquisitive. Analytical' />
      <section className='max-w-[1000px] flex flex-col justify-center my-4 mb-10 mx-2'>
        <div className='max-w-[1000px] flex flex-col md:flex-row justify-center gap-4'>
          <div className='min-w-sm max-w-xl w-full flex-col p-8 '>
            {/* Intro */}
            <div className='text-5xl mb-4 font-semibold'>
              Hi, I'm{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-rfg via-rtertiary to-rprimary'>
                Sam Preston
              </span>
            </div>
            {/* Tags */}
            <div className='mb-4'>
              {tags.map(({ icon, text }) => (
                <a className='flex gap-2 py-0.5'>
                  <span className='text-rprimary'>{icon}</span>
                  <span className='text-rtertiary'>{text}</span>
                </a>
              ))}
            </div>
            {/* Paragraph */}
            <div className='flex flex-col gap-2 text-rfg'>
              I have a passion for solving problems. It gives me the space I
              need to think creatively, and keep learning every day. I’m driven
              by curiosity, whether it’s exploring a new industry, uncovering
              insights through analysis, or finding smarter ways to use
              technology. What excites me most is connecting analytics with
              creative thinking to make sense of complexity and design practical
              solutions. I enjoy diving into challenges that blend strategy and
              exploration, where every answer leads to a new question. For me,
              consulting is about staying curious, adaptable, and always ready
              to learn something new.
            </div>
            {/* Connect / Projects buttons */}
            <div className='w-full flex gap-2 py-2 mt-3'>
              <div className=''>
                <ConnectModal classname='bg-rtertiary text-rbg text-xl rounded-full cursor-pointer duration-200 hover:shadow-sm shadow-rfg py-1 px-4 font-bold font-cormorant' />
              </div>
              <div className='mt-1'>
                <Link
                  to='/Portfolio'
                  className=' text-rprimary text-xl rounded-full cursor-pointer duration-200 hover:shadow-sm shadow-rprimary py-1 px-4 font-bold font-cormorant'
                >
                  See my Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className='min-w-sm max-w-xl w-full flex-col px-8 md:py-18'>
            {/* Skills */}
            <div className=''>
              <div className='text-xl font-semibold'>Key Skills</div>
              <div className='flex flex-wrap '>
                {skills.map(({ skill }) => (
                  <div className='flex px-3 bg-linear-to-br from-rsecondary to-rneutral m-1 rounded-full shadow-[0_1px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.08] cursor-default'>
                    <a className='text-rfg'>{skill}</a>
                  </div>
                ))}
              </div>
            </div>
            {/* Services */}
            <div className='my-2'>
              <div className='text-xl font-semibold mb-2'>Services</div>
              {services.map(({ service }) => (
                <div className='flex items-center gap-1 pb-1'>
                  <span className='text-rprimary'>
                    <MoveRight size={16} />
                  </span>
                  <a>{service}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between gap-4 mx-8'>
          {callOuts.map(({ main, sub }, index) => (
            <motion.div
              key={main}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.15, // Staggered delay
              }}
              className='flex-1 basis-[150px] max-w-[200px] min-w-[150px]'
            >
              <div className='flex flex-col gap-1 my-2 py-3 px-4 rounded-2xl bg-linear-to-br from-rsecondary to-rneutral shadow-[0px_4px_8px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.08] cursor-default'>
                <a className='pl-2 text-3xl text-rprimary'>{main}</a>
                <a className='text-rfg'>{sub}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bio Text Section */}
      {/* <section className='px-18 py-15 flex justify-center'>
        <div className='max-w-[1000px] flex flex-col gap-4 text-lg md:text-2xl text-center font-cormorant font-normal text-rfg'>
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
      </section> */}

      {/* Image Section */}
      <section className='w-full max-w-[1000px] px-6'>
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
