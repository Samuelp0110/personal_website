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
import { Popover } from "radix-ui";

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
      "I am always keen to recognize those who have excelled in their area, which is why I was able to grant my friend a certificate of appreciation formally for his first year as a professor ",
  },
  {
    title: "Cooking a Lot",
    imageSrc: aboutCooking,
    imageAlt: "Shakshuka Photo",
    description:
      "I love to cook all types of food. Shown here is my attempt at Shakshuka",
  },
];

const skills = [
  {
    skill: "Data Analytics",
    tools: ["Python", "Pandas", "Numpy", "Power BI", "SQL", "Excel"],
  },
  {
    skill: "System Design",
    tools: ["Lucidchart", "UML", "ER Diagrams", "AWS Architecture"],
  },
  {
    skill: "Cloud Infrastructure",
    tools: ["AWS", "Docker"],
  },
  {
    skill: "Process Automation",
    tools: ["n8n", "REST APIs"],
  },
  {
    skill: "Web Development",
    tools: ["React", "TypeScript", "TailwindCSS", "Express", "PostgreSQL"],
  },
  {
    skill: "Technical & Business Communication",
    tools: ["MS Office Suite"],
  },
];

const services = [
  { service: "Custom AI Agent Development" },
  { service: "Generative AI Solutions & Prototyping" },
  { service: "Data-Driven Business Analytics" },
  { service: "Strategic Growth & Technology Advisory" },
];

const callOuts = [
  { main: "4+", sub: "Years of Experience" },
  { main: "15+", sub: "Projects Completed" },
  { main: "3", sub: "Internships" },
  { main: "2", sub: "Degrees Earned" },
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
    <div className='w-full min-h-screen flex flex-col items-center mb-12'>
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
              I'm passionate about solving problems. It gives me the space to
              think creatively and keep learning every day. My curiosity drives
              me to explore new industries, uncover insights through analysis,
              and find smarter ways to use technology. What excites me most is
              connecting analytics with creative thinking to make sense of
              complexity and design practical, actionable solutions. I thrive in
              challenges that blend strategy and exploration, where every answer
              leads to a new question. For me, consulting is about staying
              curious, adaptable, and always ready to learn something new.
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
                {skills.map(({ skill, tools }) => (
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className='flex px-3 py-0.5 bg-linear-to-br text-rfg from-rsecondary to-rneutral my-1 mx-2 rounded-full shadow-[0_1px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.08] cursor-pointer'>
                        {skill}
                      </button>
                    </Popover.Trigger>
                    <Popover.Portal>
                      <Popover.Content className='text-rfg bg-rbg/40 backdrop-blur-xl p-3 rounded-md text-sm  shadow-[0_1px_10px] shadow-rtertiary'>
                        <p className='font-semibold text-center mb-2'>
                          Technical Tools
                        </p>
                        <div className='max-w-[150px] flex flex-wrap justify-center gap-y-1 text-center'>
                          {tools.map((tool, index) => (
                            <span
                              key={tool}
                              className='flex items-center text-rfg/80'
                            >
                              {tool}
                              {index < tools.length - 1 && (
                                <span className='mx-1 text-rfg/50'>|</span>
                              )}
                            </span>
                          ))}
                        </div>
                        <Popover.Arrow className=' fill-rbg/40' />
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
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
    </div>
  );
};

export default About;
