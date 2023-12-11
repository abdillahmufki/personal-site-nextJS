// Application.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pagination from "../Pagination";

import { PROJECT_DATA_DESIGN } from "@/constants";

interface Projects {
  title: string;
  description: string;
  link: string;
  src: string;
}

const Design: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const itemsPerPage: number = 6; // Number of items per page

  // Get data for the current page
  const paginatedData: Projects[] = PROJECT_DATA_DESIGN.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total pages
  const totalPages: number = Math.ceil(
    PROJECT_DATA_DESIGN.length / itemsPerPage
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
          <div key={index} className="flex items-center justify-center">
            <Link
              className="relative block w-[350px] h-[350px] bg-gray-900 group"
              href={project.link}>
              <Image
                className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-md"
                src={project.src}
                alt="image"
                width={350}
                height={350}
              />
              <div className="relative p-5">
                <div className="mt-40">
                  {/* Hidden content */}
                  <div
                    className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                    <div className="p-2">
                      <p className="text-lg text-white mb-2">{project.title}</p>
                      <button className="px-4 py-2 text-sm text-white badge badge-primary">
                        Design
                      </button>
                    </div>
                  </div>
                  {/* End of hidden content */}
                </div>
              </div>
            </Link>
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

export default Design;
