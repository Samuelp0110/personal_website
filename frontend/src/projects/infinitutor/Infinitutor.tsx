import { Sparkle } from "lucide-react";
import type { FC } from "react";
import CountdownTimer from "../../components/CountdownTimer";

// const infinitutorSkills = [
//   { skill: "" },
// ];

// const infinitutorTools = [
//   { tool: "" },
// ];

const InfiniTutorProject: FC = () => {
  return (
    <div className='flex flex-col mb-10'>
      <div className='flex flex-row flex-wrap'>
        <span className='flex items-center justify-center w-6 h-6 pt-2 mr-2 text-rfg '>
          <Sparkle />
        </span>
        <h1 className='flex items-center mb-1 text-2xl font-semibold text-rfg'>
          Infini-Tutor
        </h1>
      </div>
      <h3 className='block mb-2 text-lg font-normal leading-none text-rfg/80'>
        Personal Project
      </h3>
      <time className='block mb-2 text-md font-normal leading-none text-rfg/50'>
        September 2025 - Ongoing
      </time>
      <h3 className='block my-2 text-xl font-semibold leading-none text-rfg/80'>
        Project Overview
      </h3>
      <p className='mb-1 text-base font-normal text-rfg/80 gap-1'>
        This project involves building an Agentic AI based tutor platform for
        high-school aged students. This platform is centered around a
        'classroom'. In one part of the classroom, a teacher will interact with
        it to construct assignments, homeworks, plan out lessons and more for a
        class. As they do this, the 'classroom' will learn, enabling it to
        provice the students in the classroom with better tutoring, as it will
        have learned more about what concepts to focus on from its interactions
        with the teacher. On the other side, as the students use the 'classroom'
        to study and learn more, the classroom will pick up on what areas of the
        current concepts and topics the students struggle with, and send that
        information to the teacher to tell them what areas their students are
        most struggling in.
      </p>
      {/* Temporary Countdown */}
      <div className='w-full mt-20'>
        <CountdownTimer
          targetDate={new Date("2025-11-18")}
          label='Launching In'
        />
      </div>

      {/* <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
          Key Skills Developed & Used
        </h3>
        <div className='flex flex-wrap '>
          {infinitutorSkills.map(({ skill }) => (
            <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
              <a className='text-rbg text-sm'>{skill}</a>
            </div>
          ))}
        </div>
        <h3 className='block my-2 text-md font-semibold leading-none text-rfg/80'>
          Technologies in the Project
        </h3>
        <div className='flex flex-wrap '>
          {infinitutorTools.map(({ tool }) => (
            <div className='flex px-3 bg-rtertiary  my-1 mr-2 rounded-full shadow-[0_0px_2px] shadow-rtertiary transition-transform duration-150 hover:scale-[1.05] cursor-default'>
              <a className='text-rbg text-sm'>{tool}</a>
            </div>
          ))}
        </div> */}
    </div>
  );
};

export default InfiniTutorProject;
