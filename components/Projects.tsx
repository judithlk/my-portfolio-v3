import ProjectCard from "./ProjectCard";
import { TOPPROJECTS } from "../lib/projects";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Projects() {
  return (
    <div
      id="projects"
      className="snap-start min-h-screen w-full bg-background flex items-center justify-center border-y border-border py-[10%]"
    >
      <div className="w-[80%] space-y-8">
        <h2 className="text-text text-4xl font-heading text-start pl-5">
          Projects
        </h2>
        <div className="w-full columns-1 lg:columns-2 lg:gap-20 space-y-5 lg:space-y-10">
          {TOPPROJECTS.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}
        </div>
        <Link
          href="https://github.com/judithlk?tab=repositories"
          className="group flex items-center justify-end space-x-1 cursor-pointer text-text-two font-[600] hover:text-text"
        >
          <h2 className="font-heading">See my other projects on Github</h2>
          <GoArrowUpRight
            size={15}
            className="
                        shrink-0 self-center mt-[2px]
                        transition-transform duration-300 ease-out
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                      "
          />
        </Link>
      </div>
    </div>
  );
}
