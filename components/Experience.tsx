import ExperienceBlock from "./ExperienceBlock";
import { EXPERIENCE } from "@/lib/experience";
import { GoArrowUpRight } from "react-icons/go";

export default function Experience() {
  return (
    <div
      id="experience"
      className="snap-start scroll-mt-10 min-h-screen w-full bg-background flex items-center justify-end py-[10%]"
    >
      <div className="w-[85%] pr-[6%] md:pr-[10%] flex flex-col items-end space-y-8">
        <h2 className="text-text text-4xl font-heading text-end">Experience</h2>
        <div className="space-y-5 border-double border-r-4 border-border">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceBlock key={index} {...exp} />
          ))}
        </div>
        
        <a
  href="/Judith-Yusuf-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center space-x-1 cursor-pointer text-text-two font-[600] hover:text-text"
>

          <h2 className="font-heading">
            View my full r&eacute;sum&eacute;
          </h2>
           <GoArrowUpRight
              size={15}
              className="
                shrink-0 self-center mt-[2px]
                transition-transform duration-300 ease-out
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5
              "
            />
        </a>
      </div>
    </div>
  );
}
