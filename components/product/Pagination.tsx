'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-5 py-2.5 px-1">
      {/* Previous Button */}
      <button
        className={`
          w-[38px] h-[38px]
          rounded-lg
          bg-white
          text-text-secondary
          text-lg font-bold
          transition-all duration-200 ease-spring
          flex items-center justify-center
          shadow-soft
          border border-primary/10
          ${currentPage === 1
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-primary hover:text-white hover:scale-[1.08] hover:shadow-active hover:border-primary'
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
              h-2.5 rounded-full
              transition-all duration-200 ease-spring
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              ${currentPage === i + 1
                ? 'w-7 gradient-primary shadow-active'
                : 'w-2.5 bg-primary-light hover:bg-primary/30 hover:scale-[1.2]'
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
          w-[38px] h-[38px]
          rounded-lg
          bg-white
          text-text-secondary
          text-lg font-bold
          transition-all duration-200 ease-spring
          flex items-center justify-center
          shadow-soft
          border border-primary/10
          ${currentPage === totalPages
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-primary hover:text-white hover:scale-[1.08] hover:shadow-active hover:border-primary'
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
