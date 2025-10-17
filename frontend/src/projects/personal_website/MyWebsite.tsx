import { BookOpen } from "lucide-react";
import type { FC } from "react";
import CountdownTimer from "../../components/CountdownTimer";

const websiteSkills = [
  { skill: "Full-Stack Development" },
  { skill: "UX/UI Design" },
  { skill: "Agentic AI" },
  { skill: "Version Control" },
];

const websiteTools = [
  { tool: "Vite" },
  { tool: "React" },
  { tool: "Twailwind CSS" },
  { tool: "Typescript" },
  { tool: "Node JS" },
  { tool: "Docker" },
  { tool: "Figma" },
];

const MyWebsite: FC = () => {
  return (
    <div className='flex flex-col mb-10 ms-6'>
      <div className='flex flex-row flex-wrap'>
        <span className='flex items-center justify-center w-6 h-6 pt-2 mr-2 text-rfg '>
          <BookOpen />
        </span>
        <h1 className='flex items-center mb-1 text-2xl font-semibold text-rfg'>
          My Website
        </h1>
      </div>
      <h3 className='block mb-2 text-lg font-normal leading-none text-rfg/80'>
        Personal Project
      </h3>
      <time className='block mb-2 text-md font-normal leading-none text-rfg/50'>
        April 2025 - Ongoing
      </time>
      <h3 className='block my-2 text-xl font-semibold leading-none text-rfg/80'>
        Project Overview
      </h3>
      <p className='mb-1 text-base font-normal text-rfg/80 gap-1'>
        My website is what I consider my living resume. On it you will find
        multiple things pertaining to me, from my past professional roles,
        completed projects to my hobbies and photos, it is the encyclopedia of
        me. I built it in a way that would be easy to follow while providing all
        the key information about me. The version you see now is what I consider
        to be 60% done. Something that is currently in the works is what I have
        dubbed 'The Agent of Sam'. It is an agentic AI with access to a lot of
        information about, well, me. You will be able to ask it questions about
        me, such as my interests, hobbies, past experience and more. It will
        also be able to answer any questions you have about more technical terms
        on my website, such as the terminology in the NYPD Traffic Analysis
        project. Look forward to meeting to not an AI version of me, but what
        will be more of an AI wikipedia of my life.
      </p>

      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Key Skills Developed & Used
      </h3>
      <div className='flex flex-wrap '>
        {websiteSkills.map(({ skill }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{skill}</a>
          </div>
        ))}
      </div>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Technologies in the Project
      </h3>
      <div className='flex flex-wrap '>
        {websiteTools.map(({ tool }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{tool}</a>
          </div>
        ))}
      </div>

      {/* Temporary Countdown */}
      <div className='w-full mt-20 flex flex-col gap-y-10'>
        <CountdownTimer
          targetDate={new Date("2025-10-21")}
          label='In-Depth Description In'
        />
        <CountdownTimer
          targetDate={new Date("2025-11-25")}
          label='Agent Of Sam In'
        />
      </div>
    </div>
  );
};

export default MyWebsite;
