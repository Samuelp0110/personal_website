import type { FC } from "react";
import { BriefcaseBusiness } from "lucide-react";
import meSamsung from "./images/Me At Samsung.jpg";
import GenAI1 from "./images/1. ML & RL Final.png";
import GenAI3 from "./images/3. NLP Final.png";
import GenAI12_1 from "./images/12. Banking Final.png";
import GenAI12_2 from "./images/12. Banking Final-2.png";
import LoanOrigination from "./images/Loan Origination.png";
import { AspectRatio } from "radix-ui";

const samsungSkills = [
  { skill: "Generative AI & AI Learning Techniques" },
  { skill: "Amazon Web Services (AWS)" },
  { skill: "Data Wrangling & Quality Assurance" },
  { skill: "Behavioral Analysis & Process Mapping" },
  { skill: "Decision-Making Methodology" },
  { skill: "Content Development & Presentation Skills" },
  { skill: "People Skills & Cross-Functional Collaboration" },
  { skill: "Professional Development & Cultural Adaptability" },
];

const SamsungPosition: FC = () => {
  return (
      <li className='flex flex-col ms-6'>
        <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
          <BriefcaseBusiness />
        </span>
        <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
          IT Consultant - Internship
          <span className='bg-rprimary text-rbg text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3'>
            Latest
          </span>
        </h2>
        <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
          Samsung SDSA
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
          June 2024 - August 2024
        </time>
        <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
          Key Skills Developed & Used
        </h3>
        <div className='flex flex-wrap '>
          {samsungSkills.map(({ skill }) => (
            <div className='flex px-3 bg-rtertiary my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
              <a className='text-rbg text-sm'>{skill}</a>
            </div>
          ))}
        </div>
        <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
          Overview
        </h3>
        <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
          I experienced a lot during my time at{" "}
          <a
            href='https://www.samsungsds.com/us/index.html'
            className='font-semibold'
            target='_blank'
          >
            Samsung SDSA
          </a>
          , under my mentor{" "}
          <a
            href='https://www.linkedin.com/in/amitsaha5959/'
            className='font-semibold'
            target='_blank'
          >
            Amit Saha
          </a>
          . I took part in multiple projects, which greatly expanded my
          knowledge in Generative AI and allowed me to have a long-lasting
          impact on the organization.
        </p>

        {/* Photo Line */}
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 my-6'>
          <div className='min-w-[200px] max-w-[400px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-black my-4 transition-all duration-300 ease-out hover:scale-[1.1]'>
            <AspectRatio.Root ratio={16 / 9}>
              <img
                className='size-full object-cover '
                src={meSamsung}
              />
            </AspectRatio.Root>
          </div>
        </div>
        <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
          I was part of the Strategic Account Management team while at Samsung
          SDSA. Alongside the impressive team led by{" "}
          <a
            href='https://www.linkedin.com/in/yoonho-shin-718a83166/'
            className='font-semibold'
            target='_blank'
          >
            YounHo Shin
          </a>
          , I worked on everything from designing client Gen AI processes to
          training the team on Generative AI, from the basics to its
          applications.
        </p>
        <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
          The most influential project I took on while there was creating a 15
          session training course on Generative AI topics from scratch and then
          using it to teach the 10+ member SAM team. Not only did this help
          reinforce my own knowledge about these topics, but it let me have a
          real impact on the firm, as the presentations I made are set to be
          used for all future members of the team. Here you can see some slides
          I grabbed from the presentations.
        </p>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 my-6'>
          {[GenAI1, GenAI3, GenAI12_1, GenAI12_2].map((img, i) => (
            <div
              key={i}
              className='flex-[1_1_175px] min-w-[150px] max-w-[300px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-black my-1 transition-all duration-300 ease-out hover:scale-[1.1]'
            >
              <AspectRatio.Root ratio={16 / 9}>
                <img
                  className='size-full object-cover'
                  src={img}
                  alt=''
                />
              </AspectRatio.Root>
            </div>
          ))}
        </div>

        <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
          The next key project I worked on was the design and pitch of a Loan
          Origination Process that would utilize Generative AI to bolster the
          client's capabilities. Through this design we identified 8+ pain
          points where Generative AI Agents could be used to simplify the
          process. My part in this was building the map on Lucidchart and
          accompanying two team members to the actual client pitch.
        </p>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 my-6'>
          <div className='min-w-[200px] max-w-[400px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-black my-4 transition-all duration-300 ease-out hover:scale-[1.1]'>
            <AspectRatio.Root ratio={7 / 5}>
              <img
                className='size-full object-cover blur-xs'
                src={LoanOrigination}
              />
            </AspectRatio.Root>
            <div className='text-sm font-cormorant text-rprimary text-center'>
              Blurred For Privacy Reasons
            </div>
          </div>
        </div>
        <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
          Some other projects I worked on include an email triage system that
          would improve ServiceNow's IT support ticket system, ensuring all
          tickets are accounted for, including personal emails sent to an IT
          team member's inbox, as well as a Proof of Concept for an
          organization-wide AI powered business data serach system, made using
          Amazon Web Services technologies such as Bedrock and S3, that worked
          for both structured and unstructured data.
        </p>
        <p className='mb-10 text-base font-normal text-rfg/60 gap-1'>
          The internship culminated into a final presentation, where I shared
          with the SAM team and more all my contributions and activities while
          at Samsung SDSA. This experience has me ready for any future endeavors
          in the AI and consulting spaces.
        </p>
      </li>
  );
};

export default SamsungPosition;
