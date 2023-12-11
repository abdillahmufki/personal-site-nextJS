// Application.tsx
import React, { useState } from "react";
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
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const itemsPerPage: number = 6; // Number of items per page

  // Get data for the current page
  const paginatedData: Projects[] = PROJECT_DATA_WEBSITE.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages
  const totalPages: number = Math.ceil(
    PROJECT_DATA_WEBSITE.length / itemsPerPage
  );

  const handlePageChange = (page: number): void => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="my-10 flex justify-center flex-col lg:my-10 p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {paginatedData.map((project: Projects, index: number) => (
          <div key={index}>
            <div className="p-1">
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <Link
                  target="_blank"
                  href={project.link}
                  className="lightbox tobii-zoom transition-all duration-500  shadow-md group-hover:brightness-50 group-hover:scale-105">
                  <Image
                    width={350}
                    height={350}
                    className="w-[300px] h-[300px]"
                    alt="img"
                    src={project.src}
                  />
                </Link>
                <div className="absolute -bottom-52 left-2 right-2 rounded p-4 transition-all duration-500 group-hover:bottom-2 bg-transparent">
                  <Link
                    href={project.link}
                    className="hover:text-primary-600 text-white dark:white text-lg font-medium transition duration-500">
                    {project.title}
                  </Link>
                  <p className="text-sm text-white line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
