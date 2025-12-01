'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-6 py-4 px-1">
      {/* Previous Button */}
      <button
        className={`
          w-10 h-10
          rounded-xl
          bg-bg-card
          text-text-secondary
          text-xl font-bold
          transition-all duration-200 ease-spring
          flex items-center justify-center
          border border-white/5
          ${currentPage === 1
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-primary hover:text-white hover:scale-110 hover:shadow-glow hover:border-primary'
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
      <div className="flex items-center gap-3 bg-bg-card/50 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`
              h-2 rounded-full
              transition-all duration-300 ease-spring
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              ${currentPage === i + 1
                ? 'w-8 bg-gradient-to-r from-primary to-primary-light shadow-glow'
                : 'w-2 bg-white/20 hover:bg-white/40 hover:scale-125'
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
          w-10 h-10
          rounded-xl
          bg-bg-card
          text-text-secondary
          text-xl font-bold
          transition-all duration-200 ease-spring
          flex items-center justify-center
          border border-white/5
          ${currentPage === totalPages
            ? 'opacity-30 cursor-not-allowed'
            : 'hover:bg-primary hover:text-white hover:scale-110 hover:shadow-glow hover:border-primary'
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
