import { useEffect, useState } from "react";
import { client } from "../app/lib/sanity";
import { Project } from "../app/lib/interface";

interface UseProjectsByCategoryProps {
  categoryTitle: string;
}

interface UseProjectsByCategoryResult {
  projects: Project[];
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const useProjectsByCategory = ({
  categoryTitle,
}: UseProjectsByCategoryProps): UseProjectsByCategoryResult => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == "project" && references(*[title == "${categoryTitle}"]._id)]{
        title,
        link,
        image,
        categories[]-> {
          title
        }
      }`;

      const data = await client.fetch(query);
      setProjects(data);
    }

    fetchData();
  }, [categoryTitle]);

  const indexOfLastProject = currentPage * postsPerPage;
  const indexOfFirstProject = indexOfLastProject - postsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / postsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    projects: currentProjects,
    currentPage,
    totalPages,
    paginate,
  };
};

export default useProjectsByCategory;
