import Image from "next/image";
import Link from "next/link";
import Label from "./Label";
import { GoArrowUpRight } from "react-icons/go";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  liveLink?: string;
  repoLinks?: string[];
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  liveLink,
  repoLinks,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="w-full p-5 space-y-3 group">
      <div className="lg:px-10">
        <div className="w-full relative border-8 border-border rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          width={500}
          height={300}
          className="
    w-full h-auto rounded-lg object-cover
    transition duration-500 ease-out

    /* Desktop-only resting state */
    [@media(hover:hover)]:grayscale
    [@media(hover:hover)]:brightness-75

    /* Desktop hover reveal */
    [@media(hover:hover)]:group-hover:grayscale-0
    [@media(hover:hover)]:group-hover:brightness-100
    [@media(hover:hover)]:group-hover:scale-[1.02]
  "
        />
      </div>
      </div>
      <h2 className="text-text text-2xl font-heading">{title}</h2>
      <div className="w-full space-y-2">
        <p className="text-text-two font-body text-sm text-justify">
          {description}
        </p>
        <Link
          href={liveLink || "#"}
          target="_blank"
          className="group text-muted-text text-sm font-body font-[600] flex items-center gap-1"
        >
          View Live
          <GoArrowUpRight
            size={16}
            className="
      shrink-0 self-start mt-[2px]
      transition-transform duration-300 ease-out
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    "
          />
        </Link>
        <div className="flex items-center space-x-4">
          {repoLinks &&
            repoLinks.map((link, index) => (
              <Link
                key={index}
                href={link}
                target="_blank"
                className="group text-muted-text text-sm font-body font-[600] flex items-center"
              >
                View Repo {index > 0 ? index + 1 : ""}
                <GoArrowUpRight
                  size={16}
                  className="
      shrink-0 self-start mt-[2px]
      transition-transform duration-300 ease-out
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5
    "
                />
              </Link>
            ))}
        </div>
      </div>
      <div className="flex flex-wrap space-x-2">
        {technologies.map((tech, index) => (
          <Label key={index} text={tech} />
        ))}
      </div>
    </div>
  );
}
