import type { FC } from "react";
import GlassProjectCard from "../components/projectBlocks/GlassProjectCard";
import projectsMetadata from "../data/projectsMetadata";
import positionsMetadata from "../data/positionsMetadata";
// import HeroHeader from "../components/HeroHeader";
import GlassWorkCard from "../components/positionBlocks/GlassPositionCard";

const ProjectsPage: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center'>
      {/* Hero Banner */}
      {/* <HeroHeader title='My Work' /> */}

      <section className='w-full max-w-[1440px] px-6 md:px-24 mt-16'>
        <h2 className='text-center text-[36px] font-cormorant font-bold text-background mb-8'>
          Professional Work
        </h2>
        <div
          className='grid justify-items-center gap-12'
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {positionsMetadata.map((position) => (
            <GlassWorkCard
              key={position.slug}
              title={position.title}
              company={position.company}
              description={position.description}
              imageSrc={position.image}
              imageAlt={position.title}
              date={position.date}
              link={`/positions/${position.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Projects Grid - dynamically rendered */}
      <section className='w-full max-w-[1440px] px-6 md:px-24 mt-16'>
        <h2 className='text-center text-[36px] font-cormorant font-bold text-background mb-8'>
          Project Gallery
        </h2>
        <div
          className='grid justify-items-center gap-12'
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {projectsMetadata.map((proj) => (
            <GlassProjectCard
              key={proj.slug}
              title={proj.title}
              description={proj.description}
              imageSrc={proj.image}
              imageAlt={proj.title}
              date={proj.date}
              link={`/projects/${proj.slug}`}
            />
          ))}
        </div>
      </section>

      {/* Back to Top */}
      <div className='py-12'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className='flex items-center gap-2 px-4 py-2 text-[24px] text-[#0C0B22] font-cormorant border-2 border-[#0C0B22] rounded-lg hover:bg-[#c2e0d2]/40 transition-all'
        >
          Back to Top
          <span className='-translate-y-[2px]'>⬆</span>
        </button>
      </div>
    </main>
  );
};

export default ProjectsPage;
