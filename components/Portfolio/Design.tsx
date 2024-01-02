import Pagination from "@/components/Pagination";
import ProjectCard from "@/components/ProjectCard";
import useProjectsByCategory from "@/hooks/useProjectsByCategory";

const Design = () => {
  const { projects, currentPage, totalPages, paginate } = useProjectsByCategory(
    {
      categoryTitle: "UI/UX",
    }
  );

  return (
    <>
      <div className="my-10 flex justify-center lg:my-10 p-5">
        {projects.length === 0 ? (
          <div className="empty-message text-gray-20 dark:text-white flex justify-center">
            <p className="text-center">
              No projects available for the specified category.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        )}
      </div>

      {projects.length > 0 && (
        <div className="flex justify-center mt-16 mb-10">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>
      )}
    </>
  );
};

export default Design;
