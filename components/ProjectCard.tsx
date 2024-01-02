import { Project } from "@/app/lib/interface";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project.link} target="_blank">
      <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
        <div className="lightbox tobii-zoom transition-all duration-500  shadow-md group-hover:opacity-40 group-hover:scale-105">
          <Image
            width={350}
            height={300}
            className="w-[350px] h-[350px]"
            alt="img"
            src={urlFor(project.image).url()}
          />
        </div>
        <div className="absolute -bottom-52 left-2 right-2 rounded p-4 transition-all duration-500 group-hover:bottom-2 bg-transparent">
          <p className="hover:text-primary-600 line-clamp-1 text-gray-90 dark:text-white dark:white text-lg font-medium transition duration-500">
            {project.title}
          </p>
          <div className="badge badge-primary">
            {project.categories &&
              project.categories.map((category, index) => (
                <p key={index}>
                  {(category as unknown as { title: string }).title}
                </p>
              ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
