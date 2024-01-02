import { client } from "../app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { Project } from "../app/lib/interface";
import { useEffect, useState } from "react";
import Image from "next/image";

async function fetchProjects() {
  const query = `*[_type == 'project' && references(categories[].title in ['Website'])] {
  title,
  image,
  categories[]-> {
    title
  }
}
`;
  const data = await client.fetch(query);
  return data;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="project-card">
      <h5>{project.title}</h5>
      <Image
        src={urlFor(project.image).url()}
        alt="Image"
        width={600}
        height={300}
        className="rounded-lg w-full h-[200px]"
      />
    </div>
  );
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      const projectData = await fetchProjects();
      setProjects(projectData);
    }
    fetchData();
  }, []);
  return (
    <div className="projects-container">
      {projects.length === 0 ? (
        <div className="empty-message">No projects available.</div>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
