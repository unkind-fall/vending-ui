'use client';

import type { Category } from '@/lib/data/products';

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategorySidebar({
  categories,
  activeCategory,
  onCategoryChange,
}: CategorySidebarProps) {
  return (
    <div className="flex flex-col gap-3 w-[100px] shrink-0">
      {categories.map((cat, index) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`
              relative
              w-full
              px-2 py-4
              rounded-2xl
              text-sm font-semibold
              transition-all duration-300 ease-spring
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              overflow-hidden
              group
              animate-slide-up
              ${isActive
                ? 'bg-primary text-white shadow-active scale-[1.02] ring-1 ring-primary/20'
                : 'bg-bg-card text-text-secondary border border-border hover:border-primary/30 hover:text-primary hover:bg-bg-subtle'
              }
            `}
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-pressed={isActive}
          >
            {/* Active Glow Effect */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-30" />
            )}

            {/* Hover Glow Effect */}
            {!isActive && (
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}

            <span className="relative z-10 font-display tracking-tight block text-center">
              {cat.name}
            </span>

            {/* Active Indicator Dot */}
            {isActive && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white shadow-sm" />
            )}
          </button>
        );
      })}
    </div>
  );
}
