import type { FC } from "react";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/projectBlocks/ProjectCard";
import projectsMetadata from "../data/projectsMetadata";
import PositionCard from "../components/positionBlocks/PositionCard";
import positionsMetadata from "../data/positionsMetadata";

// Show top 3
const recentProjects = projectsMetadata.slice(0, 1);
const latestPosition = positionsMetadata.slice(0, 1);

const Home: FC = () => {
  return (
    <main className='flex flex-col items-center justify-center font-cormorant'>
      {/* Content Section */}
      <HeroSection />
      <section className='w-full py-8 flex flex-wrap gap-12 justify-center items-start'>
        {/* Latest or Current Position */}
        <div className='flex flex-col flex-wrap justify-center gap-2 mb-2 align'>
          <div className='w-fit bg-rneutral text-rfg text-lg font-bold px-4 py-1 rounded-full shadow-md backdrop-blur-md'>
            Latest Position
          </div>
          {latestPosition.map((position) => (
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
        {/* Latest or Current Project */}
        <div className='flex flex-col flex-wrap justify-center gap-2 mb-2'>
          <div className='w-fit bg-rsecondary text-rfg text-lg font-bold px-4 py-1 rounded-full shadow-md backdrop-blur-md'>
            Recent Project
          </div>
          {recentProjects.map((project) => (
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

export default Home;
