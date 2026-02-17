import Link from "next/link";
import Label from "./Label";
import { GoArrowUpRight } from "react-icons/go";

type ExperienceBlockProps = {
  company: string;
  role: string;
  backlink?: string;
  duration: string;
  description: string;
  technologies: string[];
};

export default function ExperienceBlock({
  company,
  role,
  backlink,
  duration,
  description,
  technologies,
}: ExperienceBlockProps) {
  return (
    <Link href={backlink || "#"} target="_blank" className="block">
      <div className="group flex flex-col items-end space-y-2 cursor-pointer p-3 pr-7 md:pr-5 hover:bg-card">
        <div className="flex w-full items-start gap-1 text-text font-heading md:text-xl">
          <h2 className="flex-1 min-w-0 text-right break-words">
            {company} <span className="opacity-60">·</span> {role}
          </h2>

          <GoArrowUpRight
            size={18}
            className="
      shrink-0 self-start mt-[2px]
      transition-transform duration-300 ease-out
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    "
          />
        </div>

        <div className="flex flex-col items-end md:flex-row md:space-x-2 font-body text-muted-text">
          <h2>{duration}</h2>
        </div>

        <p className="text-sm text-justify font-body text-text-two break-all">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veniam nulla mollitia nostrum in porro nisi. Amet unde nihil, sequi at
          esse dolorum vero vel illum facere, sapiente suscipit quod
          consequatur.
        </p>
        <div className="flex flex-wrap space-x-2">
          {technologies.map((tech, index) => (
            <Label key={index} text={tech} />
          ))}
        </div>
      </div>
    </Link>
  );
}
