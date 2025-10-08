import type { FC } from "react";
import HeroHeader from "../components/HeroHeader";
import { BriefcaseBusiness } from "lucide-react";
import meSamsung from "../positions/samsung_sdsa_tech_consulting_internship/images/Me At Samsung.jpg";
import GenAI1 from "../positions/samsung_sdsa_tech_consulting_internship/images/1. ML & RL Final.png";
import GenAI3 from "../positions/samsung_sdsa_tech_consulting_internship/images/3. NLP Final.png";
import GenAI12_1 from "../positions/samsung_sdsa_tech_consulting_internship/images/12. Banking Final.png";
import GenAI12_2 from "../positions/samsung_sdsa_tech_consulting_internship/images/12. Banking Final-2.png";
import LoanOrigination from "../positions/samsung_sdsa_tech_consulting_internship/images/Loan Organization System.png";
import { AspectRatio } from "radix-ui";
import { motion } from "framer-motion";

const ProjectsPage: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Banner */}
      <HeroHeader title='My Portfolio' />

      {/* Internship Experience */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className='w-15/16 max-w-[1000px] bg-rneutral py-7 shadow-[0_2px_10px] shadow-rprimary/50 rounded-3xl my-20 px-10 sm:px-8 xs:px-6'
      >
        <ol className='relative border-s border-rfg/40'>
          <li className='flex flex-col ms-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 text-rfg bg-rneutral ring-8 ring-rneutral rounded-full -start-3 '>
              <BriefcaseBusiness />
            </span>
            <h2 className='flex items-center mb-1 text-lg font-semibold text-rfg'>
              IT Consultant - Internship
              <span className='bg-rprimary text-rsecondary text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3'>
                Latest
              </span>
            </h2>
            <h3 className='block mb-2 text-md font-normal leading-none text-rfg/80'>
              Samsung SDSA
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-rfg/50'>
              June 2024 - August 2024
            </time>
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
              I was part of the Strategic Account Management team while at
              Samsung SDSA. Alongside the amazing team led by{" "}
              <a
                href='https://www.linkedin.com/in/yoonho-shin-718a83166/'
                className='font-semibold'
                target='_blank'
              >
                Yoonho Shin
              </a>
              , I worked on everything from designing client Gen AI processes to
              training the team on Generative AI, from the basics to its
              applications.
            </p>
            <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
              First off is the most influential project I took on while there,
              creating an entire training course on Generative AI topics from
              scratch and then using it to teach the SAM team. Not only did this
              help reinforce my own knowledge about these topics, but it let me
              have a real impact on the firm, as the presentations I made are
              set to be used for all future members of the team. Here you can
              see some slides I grabbed from the presentations.
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
              The next key project I worked on was partaking in the design and
              pitch of a Loan Origination Process that would utilize Generative
              AI to bolster the clients capabilities. My part in this was
              building the map on Lucidchart and accompanying two team members
              to the actual client pitch.
            </p>
            <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 my-6'>
              <div className='min-w-[200px] max-w-[400px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-black my-4 transition-all duration-300 ease-out hover:scale-[1.1]'>
                <AspectRatio.Root ratio={7 / 5}>
                  <img
                    className='size-full object-cover '
                    src={LoanOrigination}
                  />
                </AspectRatio.Root>
              </div>
            </div>
            <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
              Some other projects I worked on include an email triage system
              that would improve ServiceNow's IT support ticket system, ensuring
              all tickets are accounted for, including personal emails sent to
              an IT team members inbox, as well as a Proof of Concept for an
              organization wide AI powered business data serach system, that
              worked for both structured and unstructured data.
            </p>
            <p className='mb-10 text-base font-normal text-rfg/60 gap-1'>
              The internship culminated into a final presentation, where I got
              to share with the SAM team and more all my contributions and
              activities while at Samsung SDSA. This experience has me ready for
              any future endeavors in the AI and consulting spaces
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
              I was part of the Strategic Account Management team while at
              Samsung SDSA. Alongside the amazing team led by{" "}
              <a
                href='https://www.linkedin.com/in/yoonho-shin-718a83166/'
                className='font-semibold'
                target='_blank'
              >
                Yoonho Shin
              </a>
              , I worked on everything from designing client Gen AI processes to
              training the team on Generative AI, from the basics to its
              applications.
            </p>
            <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
              First off is the most influential project I took on while there,
              creating an entire training course on Generative AI topics from
              scratch and then using it to teach the SAM team. Not only did this
              help reinforce my own knowledge about these topics, but it let me
              have a real impact on the firm, as the presentations I made are
              set to be used for all future members of the team. Here you can
              see some slides I grabbed from the presentations.
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
              The next key project I worked on was partaking in the design and
              pitch of a Loan Origination Process that would utilize Generative
              AI to bolster the clients capabilities. My part in this was
              building the map on Lucidchart and accompanying two team members
              to the actual client pitch.
            </p>
            <div className='flex flex-wrap justify-center gap-x-10 gap-y-4 my-6'>
              <div className='min-w-[200px] max-w-[400px] overflow-hidden rounded-md shadow-[0_2px_10px] shadow-black my-4 transition-all duration-300 ease-out hover:scale-[1.1]'>
                <AspectRatio.Root ratio={7 / 5}>
                  <img
                    className='size-full object-cover '
                    src={LoanOrigination}
                  />
                </AspectRatio.Root>
              </div>
            </div>
            <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
              Some other projects I worked on include an email triage system
              that would improve ServiceNow's IT support ticket system, ensuring
              all tickets are accounted for, including personal emails sent to
              an IT team members inbox, as well as a Proof of Concept for an
              organization wide AI powered business data serach system, that
              worked for both structured and unstructured data.
            </p>
            <p className='mb-1 text-base font-normal text-rfg/60 gap-1'>
              The internship culminated into a final presentation, where I got
              to share with the SAM team and more all my contributions and
              activities while at Samsung SDSA. This experience has me ready for
              any future endeavors in the AI and consulting spaces
            </p>
          </li>
        </ol>
      </motion.section>
    </main>
  );
};

export default ProjectsPage;
