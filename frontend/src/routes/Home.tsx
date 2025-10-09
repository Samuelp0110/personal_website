import { type FC } from "react";
// import HeroSection from "../components/HeroSection";
import { Link } from "react-router";
// import TripleRay from "../components/three/TripleRay";
// import ProjectCard from "../components/projectBlocks/ProjectCard";
// import projectsMetadata from "../data/projectsMetadata";
// import PositionCard from "../components/positionBlocks/PositionCard";
// import positionsMetadata from "../data/positionsMetadata";

// Show top 3
// const recentProjects = projectsMetadata.slice(0, 1);
// const latestPosition = positionsMetadata.slice(0, 1);

const Home: FC = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center font-roboto my-20'>
      {/* <Suspense fallback={null}>
        <TripleRay />
      </Suspense> */}
      {/* Content Section */}
      {/* <HeroSection /> */}

      <section className=''>
        <h1 className='font-cormorant font-bold text-4xl text-rprimary text-center md:text-6xl'>
          Analytical Thinker <br /> Software Developer <br /> Community Leader
        </h1>
        <h2 className='my-8 text-center mx-4 font-semibold text-rprimary font-cormorant text-lg md:text-2xl'>
          Actively Seeking Employment Opportunities
        </h2>
        <div className='mx-auto px-4 mt-16 grid grid-cols-1 font-cormorant md:grid-cols-2 gap-4 md:gap-8 max-w-5xl'>
          <Link to='/about'>
            <div className='p-4 h-full w-auto rounded-3xl bg-rsecondary/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
              <div className='font-bold text-xs py-1 px-3 w-fit rounded-full bg-rneutral text-rfg md:text-sm'>
                About Me
              </div>
              <h2 className='mt-3 font-serif text-rfg text-xl md:text-2xl'>
                Who I Am and What My Goals Are
              </h2>
              <p className='font-medium text-rfg/70 text-sm md:text-lg'>
                I'm a creative thinker who loves to solve problems. I enjoy
                seeing things from new perspectives and working to turn what I
                see and learn into a usuable insight.
              </p>
            </div>
          </Link>
          <Link to='/portfolio'>
            <div className='p-4 h-full w-auto rounded-3xl bg-rsecondary/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg'>
              <div className='font-bold text-xs py-1 px-3 w-fit rounded-full bg-rneutral text-rfg md:text-sm'>
                My Portfolio
              </div>
              <h2 className='mt-3 font-serif text-rfg text-xl md:text-2xl'>
                What I Have Done
              </h2>
              <p className='font-medium text-rfg/70 text-sm md:text-lg'>
                A compilation of my past experiences and notable projects: from
                being an IT Consultant at Samsung SDSA to building AI Agents for
                clients, my aim is to bring together a mix of modern technology
                and business advancements.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* <section className='w-full py-8 flex flex-wrap gap-12 justify-center items-start'>
        <div className='flex flex-col flex-wrap justify-center gap-2 mb-2 p-1'>
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
        <div className='flex flex-col flex-wrap justify-center gap-2 mb-2 p-1'>
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
      </section> */}
    </main>
  );
};

export default Home;
