import type { FC } from "react";
import HeroHeader from "../components/HeroHeader";
import { BriefcaseBusiness, MoveRight } from "lucide-react";
import meSamsung from "../positions/samsung_sdsa_tech_consulting_internship/images/Me At Samsung.jpg";
import GenAI1 from "../positions/samsung_sdsa_tech_consulting_internship/images/1. ML & RL Final.png";
import GenAI3 from "../positions/samsung_sdsa_tech_consulting_internship/images/3. NLP Final.png";
import GenAI12_1 from "../positions/samsung_sdsa_tech_consulting_internship/images/12. Banking Final.png";
import GenAI12_2 from "../positions/samsung_sdsa_tech_consulting_internship/images/12. Banking Final-2.png";
import LoanOrigination from "../positions/samsung_sdsa_tech_consulting_internship/images/Loan Origination.png";
import { AspectRatio, Tabs } from "radix-ui";
import { motion } from "framer-motion";
import CountdownTimer from "../components/CountdownTimer";

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

const ablSkills = [
  { skill: "Data Analysis & Dashboard Development" },
  { skill: "Financial Data Processing & Accuracy" },
  { skill: "Process Optimization" },
  { skill: "Cross-Functional Collaboration" },
  { skill: "Business Intelligence & Tool Proficiency" },
];

const admSkills = [
  { skill: "Programming Foundations (C++)" },
  { skill: "Experimental Testing & Quality Assurance" },
  { skill: "Technical Problem-Solving" },
  { skill: "Process & Product Awareness" },
  { skill: "Career Direction & Professional Discipline" },
];

const ProjectsPage: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Banner */}
      <HeroHeader title='My Portfolio' />
      <Tabs.Root
        className='w-full min-h-screen flex flex-col items-center px-4'
        defaultValue='past_roles'
      >
        <Tabs.List
          className='flex flex-row flex-wrap justify-center 
             gap-8 sm:gap-12 md:gap-16 
             my-8 sm:my-12 md:my-16 
             bg-rtertiary/20 p-2 sm:p-3 md:p-4 
             rounded-2xl transition-all duration-300'
        >
          <Tabs.Trigger
            value='past_roles'
            className='min-w-[140px] sm:min-w-[180px] md:min-w-[220px] 
               text-center text-lg sm:text-xl md:text-2xl 
               font-semibold text-rprimary 
               px-2 sm:px-3 md:px-4 py-1 sm:py-2 
               rounded-md transition-all duration-200 
               data-[state=active]:bg-rprimary data-[state=active]:text-rbg 
               hover:bg-rprimary/10'
          >
            Past Roles
          </Tabs.Trigger>

          <Tabs.Trigger
            value='notable_projects'
            className='min-w-[140px] sm:min-w-[180px] md:min-w-[220px] 
               text-center text-lg sm:text-xl md:text-2xl 
               font-semibold text-rprimary 
               px-2 sm:px-3 md:px-4 py-1 sm:py-2 
               rounded-md transition-all duration-200 
               data-[state=active]:bg-rprimary data-[state=active]:text-rbg 
               hover:bg-rprimary/10'
          >
            Notable Projects
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value='past_roles'>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className='w-full max-w-[1000px] mx-auto bg-rneutral py-7 shadow-[0_2px_10px] shadow-rprimary/50 rounded-3xl mb-20 px-10 sm:px-8 xs:px-6'
          >
            <ol className='relative border-s border-rfg/40'>
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
                  . I partook in multiple projects, which greatly expanded my
                  knowledge in Generative AI and allowed me to have a
                  long-lasting impact on the organization.
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
                  I was part of the Strategic Account Management team while at
                  Samsung SDSA. Alongside the amazing team led by{" "}
                  <a
                    href='https://www.linkedin.com/in/yoonho-shin-718a83166/'
                    className='font-semibold'
                    target='_blank'
                  >
                    YounHo Shin
                  </a>
                  , I worked on everything from designing client Gen AI
                  processes to training the team on Generative AI, from the
                  basics to its applications.
                </p>
                <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
                  The most influential project I took on while there was
                  creating a 15 session training course on Generative AI topics
                  from scratch and then using it to teach the 10+ member SAM
                  team. Not only did this help reinforce my own knowledge about
                  these topics, but it let me have a real impact on the firm, as
                  the presentations I made are set to be used for all future
                  members of the team. Here you can see some slides I grabbed
                  from the presentations.
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
                  The next key project I worked on was partaking in the design
                  and pitch of a Loan Origination Process that would utilize
                  Generative AI to bolster the clients capabilities.Through this
                  design we identified 8+ pain points where Generative AI Agents
                  could be used to simplify the process. My part in this was
                  building the map on Lucidchart and accompanying two team
                  members to the actual client pitch.
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
                  Some other projects I worked on include an email triage system
                  that would improve ServiceNow's IT support ticket system,
                  ensuring all tickets are accounted for, including personal
                  emails sent to an IT team members inbox, as well as a Proof of
                  Concept for an organization wide AI powered business data
                  serach system, made using Amazon Web Services technologies
                  such as Bedrock and S3, that worked for both structured and
                  unstructured data.
                </p>
                <p className='mb-10 text-base font-normal text-rfg/60 gap-1'>
                  The internship culminated into a final presentation, where I
                  got to share with the SAM team and more all my contributions
                  and activities while at Samsung SDSA. This experience has me
                  ready for any future endeavors in the AI and consulting
                  spaces.
                </p>
              </li>
            </ol>
            <ol className='relative border-s border-rfg/40'>
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
                  , I worked within the operations and analytics division to
                  help optimize internal financial reporting and data tracking
                  systems. My responsibilities centered on improving efficiency
                  in document processing and developing new ways to visualize
                  business performance using data.
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
                      Processed and analyzed over 150 financial documents weekly
                      to enhance data accuracy and support internal risk
                      assessments.
                    </a>
                  </li>
                  <li className='flex gap-1 pb-1 text-rfg/60'>
                    <span className='text-rprimary pt-1'>
                      <MoveRight size={16} />
                    </span>
                    <a>
                      Built Excel-based dashboards tracking KPIs across $20M+ in
                      active real estate loans, enabling the team to better
                      monitor high-risk assets.
                    </a>
                  </li>
                  <li className='flex  gap-1 pb-1 text-rfg/60'>
                    <span className='text-rprimary pt-1'>
                      <MoveRight size={16} />
                    </span>
                    <a>
                      Partnered with operations, data, and sales teams to
                      improve CRM workflows and streamline how key portfolio
                      data was surfaced to decision-makers.
                    </a>
                  </li>
                  <li className='flex  gap-1 pb-1 text-rfg/60'>
                    <span className='text-rprimary pt-1'>
                      <MoveRight size={16} />
                    </span>
                    <a>
                      Introduced basic Python automation to assist with
                      repetitive data-cleaning tasks, improving reporting
                      turnaround times.
                    </a>
                  </li>
                </ol>
                <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
                  Reflection
                </h3>
                <p className='text-base font-normal text-rfg/60 gap-1'>
                  While this role was less technical than my later experiences,
                  it strengthened my foundation in data organization, Excel
                  modeling, and dashboarding, and gave me an early understanding
                  of how data translates to business insights within a financial
                  organization.
                </p>
              </li>
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
                  </a>{" "}
                  , all of my work fell under one of their ongoing projects at
                  the time. This project involved devleping and experimenting on
                  a clients medical device used for massage therapy.
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
                      Basic C++ development for the devices functionality, such
                      as vibration frequency and human interactity
                    </a>
                  </li>
                  <li className='flex gap-1 pb-1 text-rfg/60'>
                    <span className='text-rprimary pt-1'>
                      <MoveRight size={16} />
                    </span>
                    <a>
                      Experimented on the devices materials to ensure its
                      durability in an everyday household, such as interactions
                      with various liquids and cleaning materials
                    </a>
                  </li>
                  <li className='flex  gap-1 pb-1 text-rfg/60'>
                    <span className='text-rprimary pt-1'>
                      <MoveRight size={16} />
                    </span>
                    <a>
                      Assisted in the labeling and organization of mechanical
                      parts to ensure all produced devices functioned properly
                    </a>
                  </li>
                </ol>
                <h3 className='block my-2 text-lg font-semibold leading-none text-rfg/80'>
                  Reflection
                </h3>
                <p className=' text-base font-normal text-rfg/60 gap-1'>
                  Despite this being a far simpler role compared to my later
                  endeavors, it was my first introduction to how development
                  worked in real-life product design. It was a great experience.
                </p>
              </li>
            </ol>
          </motion.section>
        </Tabs.Content>
        <Tabs.Content value='notable_projects'>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='w-full max-w-[1000px] mx-auto bg-rneutral py-10 shadow-[0_2px_10px] shadow-rprimary/50 rounded-3xl mb-20 px-10 text-center'
          >
            <CountdownTimer targetDate={new Date("2025-10-15T00:00:00")} />

            <p className='mt-6 text-base text-rfg/70'>
              My notable projects will be revealed soon! Stay tuned to see what
              I’ve been building lately.
            </p>
          </motion.section>
        </Tabs.Content>
      </Tabs.Root>

      {/* Internship Experience */}
    </main>
  );
};

export default ProjectsPage;
