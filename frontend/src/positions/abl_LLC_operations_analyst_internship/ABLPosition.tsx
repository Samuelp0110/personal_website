import type { FC } from "react";
import { BriefcaseBusiness, MoveRight } from "lucide-react";

const ablSkills = [
  { skill: "Data Analysis & Dashboard Development" },
  { skill: "Financial Data Processing & Accuracy" },
  { skill: "Process Optimization" },
  { skill: "Cross-Functional Collaboration" },
  { skill: "Business Intelligence & Tool Proficiency" },
];

const ABLPosition: FC = () => {
  return (
    <li className='flex flex-col mb-10 ms-6'>
      <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
        <BriefcaseBusiness />
      </span>
      <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
        Operations Analyst - Internship
      </h2>
      <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
        Asset Based Lending LLC
      </h3>
      <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
        December 2021 - June 2022
      </time>
      <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
        Key Skills Developed & Used
      </h3>
      <div className='flex flex-wrap '>
        {ablSkills.map(({ skill }) => (
          <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
            <a className='text-rbg text-sm'>{skill}</a>
          </div>
        ))}
      </div>
      <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
        During my internship at{" "}
        <a
          href='https://www.ablfunding.com/'
          className='font-semibold'
          target='_blank'
        >
          Asset Based Lending LLC
        </a>{" "}
        , I worked within the operations and analytics division to help optimize
        internal financial reporting and data tracking systems. My
        responsibilities centered on improving efficiency in document processing
        and developing new ways to visualize business performance using data.
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
            Processed and analyzed over 150 financial documents weekly to
            enhance data accuracy and support internal risk assessments.
          </a>
        </li>
        <li className='flex gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Built Excel-based dashboards tracking KPIs across $20M+ in active
            real estate loans, enabling the team to better monitor high-risk
            assets.
          </a>
        </li>
        <li className='flex  gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Partnered with operations, data, and sales teams to improve CRM
            workflows and streamline how key portfolio data was surfaced to
            decision-makers.
          </a>
        </li>
        <li className='flex  gap-1 pb-1 text-rfg/60'>
          <span className='text-rprimary pt-1'>
            <MoveRight size={16} />
          </span>
          <a>
            Introduced basic Python automation to assist with repetitive
            data-cleaning tasks, improving reporting turnaround times.
          </a>
        </li>
      </ol>
      <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
        Reflection
      </h3>
      <p className='text-base font-normal text-rfg/60 gap-1'>
        While this role was less technical than my later experiences, it
        strengthened my foundation in data organization, Excel modeling, and
        dashboarding, and gave me an early understanding of how data translates
        to business insights within a financial organization.
      </p>
    </li>
  );
};

export default ABLPosition;
