'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 py-2">
      {/* Previous Button */}
      <button
        className={`
          w-8 h-8
          rounded-full
          border-2 border-divider
          bg-white
          text-gray-600
          text-lg font-medium
          transition-all duration-200
          flex items-center justify-center
          ${currentPage === 1
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:border-primary hover:text-primary'
          }
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Page Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`
              h-2 rounded-full
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              ${currentPage === i + 1
                ? 'w-6 bg-primary'
                : 'w-2 bg-divider hover:bg-gray-400'
              }
            `}
            aria-label={`Page ${i + 1}`}
            aria-current={currentPage === i + 1 ? 'page' : undefined}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        className={`
          w-8 h-8
          rounded-full
          border-2 border-divider
          bg-white
          text-gray-600
          text-lg font-medium
          transition-all duration-200
          flex items-center justify-center
          ${currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:border-primary hover:text-primary'
          }
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}
