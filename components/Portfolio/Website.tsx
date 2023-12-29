import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../Pagination";
import { PROJECT_DATA_WEBSITE } from "@/constants";

interface Projects {
  title: string;
  description: string;
  link: string;
  src: string;
}

const Website: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;
  const [paginatedData, setPaginatedData] = useState<Projects[]>([]);
  const totalPages: number = Math.ceil(
    PROJECT_DATA_WEBSITE.length / itemsPerPage
  );

  useEffect(() => {
    // Create a new web worker
    const worker = new Worker(new URL("../worker.ts", import.meta.url), {
      type: "module",
    });

    // Listen to messages from the web worker
    worker.addEventListener("message", (e) => {
      setPaginatedData(e.data);
    });

    // Send initial data to the web worker
    worker.postMessage({
      currentPage,
      itemsPerPage,
      projectData: PROJECT_DATA_WEBSITE,
    });

    // Clean up the worker when the component is unmounted
    return () => {
      worker.terminate();
    };
  }, [currentPage]);

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="my-10 flex justify-center flex-col lg:my-10 p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {paginatedData.map((project: Projects, index: number) => (
          <Link href={project.link} target="_blank" key={index}>
            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
              <div className="lightbox tobii-zoom transition-all duration-500  shadow-md group-hover:opacity-40 group-hover:scale-105">
                <Image
                  width={350}
                  height={300}
                  className="w-[350px] h-[350px]"
                  alt="img"
                  src={project.src}
                />
              </div>
              <div className="absolute -bottom-52 left-2 right-2 flex gap-2 flex-col rounded p-4 transition-all duration-500 group-hover:bottom-2 bg-transparent">
                <p className="hover:text-primary-600 text-gray-90 dark:text-white dark:white text-lg font-medium transition duration-500">
                  {project.title}
                </p>
                <div className="badge badge-primary">
                  <p>Website</p>
                </div>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center my-10">
        {/* Use the Pagination component */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Website;
