import type { FC } from "react";
import GlassProjectCard from "../components/GlassProjectCard";
import projectsMetadata from "../data/projectsMetadata";
import HeroBackground from "../assets/fantasy_nature_background.jpg";

const ProjectsPage: FC = () => {
  return (
    <main className='w-full min-h-screen bg-primary flex flex-col items-center'>
      {/* Hero Banner */}
      <section
        className='w-full bg-cover bg-center flex justify-center items-center px-6 py-32'
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <h1 className='max-w-[1000px] text-center text-secondary text-[32px] sm:text-[48px] md:text-[76px] font-cormorant font-bold leading-tight'>
          My Projects
        </h1>
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
