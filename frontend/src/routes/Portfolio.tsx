import { type FC, useEffect } from "react";
import HeroHeader from "../components/HeroHeader";
import { BookOpen, Database } from "lucide-react";
import { Tabs } from "radix-ui";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router";
import NYPDProject from "../projects/nypd_traffic_stops/NYPDProject";
import MyWebsite from "../projects/personal_website/MyWebsite";
import SamsungPosition from "../positions/samsung_sdsa_tech_consulting_internship/SamsungPosition";
import ADMTronicsPosition from "../positions/adm_tronics_software_engineering/ADMTronicsPosition";
import ABLPosition from "../positions/abl_LLC_operations_analyst_internship/ABLPosition";
import InfiniTutorProject from "../projects/infinitutor/Infinitutor";

const ProjectsPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const rawSection = searchParams.get("section");
  const section =
    rawSection === "past_roles" || rawSection === "notable_projects"
      ? rawSection
      : "past_roles";

  const rawProject = searchParams.get("project");
  const project =
    rawProject === "nypd" ||
    rawProject === "my_website" ||
    rawProject === "infinitutor"
      ? rawProject
      : "nypd";

  useEffect(() => {
    // Ensure URL stays consistent with visible state
    if (section === "notable_projects" && !searchParams.get("project")) {
      const next = new URLSearchParams(searchParams);
      next.set("project", project);
      setSearchParams(next, { replace: true });
    }
    if (section !== "notable_projects" && searchParams.get("project")) {
      const next = new URLSearchParams(searchParams);
      next.delete("project");
      setSearchParams(next, { replace: true });
    }
  }, [project, searchParams, section, setSearchParams]);

  return (
    <section className='w-full min-h-screen flex flex-col items-center mb-12'>
      {/* Hero Banner */}
      <HeroHeader title='My Portfolio' />
      <Tabs.Root
        className='w-full min-h-screen flex flex-col items-center px-4'
        value={section}
        onValueChange={(v) => {
          const next = new URLSearchParams(searchParams);
          next.set("section", v);
          if (v !== "notable_projects") {
            next.delete("project");
          } else if (!next.get("project")) {
            next.set("project", "nypd");
          }
          setSearchParams(next);
        }}
      >
        <Tabs.List
          className='flex flex-row flex-wrap justify-center 
             gap-8 sm:gap-12 md:gap-16 
             my-8 sm:my-12 md:my-16 
             bg-rtertiary/20 p-2 sm:p-3 md:p-4 
             rounded-2xl transition-all duration-300
             shadow-[0_2px_10px] shadow-rprimary/50'
        >
          <Tabs.Trigger
            value='past_roles'
            className='portfolio-main-tabs'
          >
            Past Roles
          </Tabs.Trigger>

          <Tabs.Trigger
            value='notable_projects'
            className='portfolio-main-tabs'
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
            className='w-full max-w-[1000px] mx-auto bg-rneutral py-7 shadow-[0_2px_10px] shadow-rprimary/50 rounded-3xl mb-20 px-10'
          >
            {/* All Positional Information */}
            <ol className='relative border-s border-rfg/40'>
              {/* Samsung Position Information */}
              <SamsungPosition />
              {/* Asset Based Lending LLC Position Information */}
              <ABLPosition />
              {/* ADMTronics Unlimited Inc. Position Information */}
              <ADMTronicsPosition />
            </ol>
          </motion.section>
        </Tabs.Content>
        <Tabs.Content value='notable_projects'>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='w-full max-w-[1000px] mx-auto bg-rneutral py-7 shadow-[0_2px_10px] shadow-rprimary/50 rounded-3xl mb-20 px-4 sm:px-6 md:px-10'
          >
            <Tabs.Root
              value={project}
              onValueChange={(v) => {
                const next = new URLSearchParams(searchParams);
                next.set("section", "notable_projects");
                next.set("project", v);
                setSearchParams(next);
              }}
              className='w-full'
            >
              <Tabs.List className='flex flex-wrap justify-center py-4 rounded-2xl items-stretch gap-4 sm:gap-6 md:gap-8 mb-10'>
                <Tabs.Trigger
                  value='nypd'
                  className='portfolio-project-tabs'
                >
                  <Database />
                  <h3 className='portfolio-project-tabs-header'>
                    NYPD Traffic Analysis
                  </h3>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value='my_website'
                  className='portfolio-project-tabs'
                >
                  <BookOpen />
                  <h3 className='portfolio-project-tabs-header'>My Website</h3>
                </Tabs.Trigger>
                {/* <Tabs.Trigger
                  value='infinitutor'
                  className='portfolio-project-tabs'
                >
                  <Sparkle />
                  <h3 className='portfolio-project-tabs-header'>
                    Infini-Tutor
                  </h3>
                </Tabs.Trigger> */}
              </Tabs.List>
              {/* NYPD Project Content */}
              <Tabs.Content value='nypd'>
                <NYPDProject />
              </Tabs.Content>
              {/* My Website Project Content */}
              <Tabs.Content value='my_website'>
                <MyWebsite />
              </Tabs.Content>
              {/* Prism Project Content */}
              <Tabs.Content value='infinitutor'>
                <InfiniTutorProject />
              </Tabs.Content>
            </Tabs.Root>
          </motion.section>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};

export default ProjectsPage;
