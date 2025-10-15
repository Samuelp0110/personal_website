import type { FC } from "react";

import { BriefcaseBusiness, MoveRight } from "lucide-react";

const admSkills = [
  { skill: "Programming Foundations (C++)" },
  { skill: "Experimental Testing & Quality Assurance" },
  { skill: "Technical Problem-Solving" },
  { skill: "Process & Product Awareness" },
  { skill: "Career Direction & Professional Discipline" },
];

const ADMTronicsPosition: FC = () => {
  return (
    <li className='flex flex-col mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
        <BriefcaseBusiness />
      </span>
      <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
        Software Engineering - Internship
      </h2>
      <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
        ADM Tronics Unlimited inc.
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        January 2019 - June 2019
      </time>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Key Skills Developed & Used
      </h3>
      <div className='flex flex-wrap '>
        {admSkills.map(({ skill }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{skill}</a>
          </div>
        ))}
      </div>
      <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
        During my internship at{" "}
        <a
          href='https://admtronics.com/'
          className='font-semibold'
          target='_blank'
        >
          ADM Tronics
        </a>
        , all of my work fell under one of their then current projects at the
        time. This project involved developing and experimenting on a client's
        medical device used for massage therapy.
      </p>
      <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
        Key Contributions
      </h3>
      <ol>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Basic C++ development for the device's functionality, such as
            vibration frequency and human interactity
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Experimented on the device's materials to ensure its durability in
            an everyday household, such as interactions with various liquids and
            cleaning materials
          </a>
        </li>
        <li className='flex  gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Assisted in the labeling and organization of mechanical parts to
            ensure all produced devices functioned properly
          </a>
        </li>
      </ol>
      <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
        Reflection
      </h3>
      <p className=' text-base font-normal text-rfg/60 gap-1'>
        Despite this being a far simpler role compared to my later endeavors, it
        was my first introduction to how development worked in real-life product
        design. It was a great experience.
      </p>
    </li>
  );
};

export default ADMTronicsPosition;
