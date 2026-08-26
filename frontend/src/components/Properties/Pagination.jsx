import { useState } from "react";

function Pagination({
  totalProperties,
  propertiesPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalProperties / propertiesPerPage);

  return (
    <div className="flex items-center gap-2">
      {}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-lg bg-[#1a1a1a] text-white disabled:opacity-40"
      >
        &lt;
      </button>

      {}
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(
          (page) =>
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1,
        )
        .map((page, idx, arr) => (
          <>
            {}
            {idx > 0 && arr[idx - 1] !== page - 1 && (
              <span className="text-gray-400">...</span>
            )}
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-medium transition-all ${
                currentPage === page
                  ? "bg-[#f59e0b] text-black"
                  : "bg-[#1a1a1a] text-white hover:bg-[#f59e0b]/20"
              }`}
            >
              {page}
            </button>
          </>
        ))}

      {}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded-lg bg-[#1a1a1a] text-white disabled:opacity-40"
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;
