// Pagination.tsx
import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => (
  <div className="join text-white bg-blue-50">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      className="join-item btn"
      disabled={currentPage === 1}>
      «
    </button>
    {[...Array(totalPages)].map((_, page: number) => (
      <button
        key={page + 1}
        onClick={() => onPageChange(page + 1)}
        className={`join-item btn ${currentPage === page + 1 ? "active" : ""}`}>
        Page {page + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      className="join-item btn"
      disabled={currentPage === totalPages}>
      »
    </button>
  </div>
);

export default Pagination;
