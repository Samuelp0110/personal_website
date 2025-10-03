import type { FC } from "react";
import projectsMetadata from "../data/projectsMetadata";
import positionsMetadata from "../data/positionsMetadata";
import HeroHeader from "../components/HeroHeader";
import PositionCard from "../components/positionBlocks/PositionCard";
import ProjectCard from "../components/projectBlocks/ProjectCard";

const ProjectsPage: FC = () => {
  return (
    <main className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Banner */}
      <HeroHeader title='My Portfolio' />
      {/* Professional Work Section */}
      <section className='w-full max-w-[1000px] px-6'>
        <h2 className='text-center text-[36px] font-cormorant font-bold text-background mb-8 mt-4'>
          Professional Work
        </h2>
        <div className='grid md:grid-cols-2 justify-items-center gap-4'>
          {positionsMetadata.map((position) => (
            <PositionCard
              key={position.slug}
              title={position.title}
              company={position.company}
              start={position.start}
              end={position.end}
              description={position.description}
              imageSrc={position.image}
              link={`/positions/${position.slug}`} // or project.pdfUrl if preferred
            />
          ))}
        </div>
      </section>

      {/* Projects Grid - dynamically rendered */}
      <section className='w-full max-w-[1000px] px-6'>
        <h2 className='text-center text-[36px] font-cormorant font-bold text-background mb-8 mt-4'>
          Project Gallery
        </h2>
        <div className='grid md:grid-cols-2 justify-items-center gap-4'>
          {projectsMetadata.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              imageSrc={project.image}
              start={project.start}
              end={project.end}
              link={`/projects/${project.slug}`} // or project.pdfUrl if preferred
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
