import type { FC } from "react";
import Button from "./Button";
import { Link } from "react-router";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link: string;
  reverse?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt = "Project Image",
  link,
  reverse = false,
}) => {
  return (
    <section className="w-full px-6 py-14 flex justify-center">
      <div
        className={`max-w-[1000px] flex flex-col md:flex-row items-start gap-8 md:gap-[29px] ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full md:w-1/2 h-[359px] object-cover rounded-2xl outline-2 outline-background"
        />

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-4 text-left font-cormorant">
          <h2 className="text-[32px] font-semibold text-black">{title}</h2>
          <p className="text-[24px] font-normal text-black">{description}</p>
          <Link to={link}>
            <Button className="bg-secondary text-body border-body hover:bg-body hover:text-accent hover:border-accent text-[32px] font-semibold">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
