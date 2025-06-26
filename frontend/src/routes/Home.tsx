import type { FC } from "react";
import ProjectCard from "../components/ProjectCard";
import HeroSection from "../components/HeroSection";
import projectsMetadata from "../data/projectsMetadata";

// Show top 3
const recentProjects = projectsMetadata.slice(0, 3);

const Home: FC = () => {
  return (
    <main className='flex flex-col items-center justify-center bg-primary'>
      {/* Project Section 1 */}
      <HeroSection />
      {recentProjects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.description}
          imageSrc={project.image}
          link={`/projects/${project.slug}`} // or project.pdfUrl if preferred
          reverse={index % 2 !== 0} // alternate layout
        />
      ))}

      {/* Add more if needed */}
    </main>
  );
};

export default Home;
