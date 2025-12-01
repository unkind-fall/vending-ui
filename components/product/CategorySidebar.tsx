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
    <div className="flex flex-col gap-2.5 w-[100px] shrink-0">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`
              relative
              w-full
              px-3 py-4
              rounded-2xl
              text-sm font-semibold
              transition-all duration-300 ease-spring
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              overflow-hidden
              group
              ${isActive
                ? 'bg-gradient-to-br from-primary to-primary-deep text-white shadow-button scale-[1.02]'
                : 'bg-white text-text-secondary border border-transparent hover:border-primary/20 hover:text-primary hover:bg-primary-light/30 hover:shadow-soft'
              }
            `}
            aria-pressed={isActive}
          >
            {isActive && (
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            )}
            <span className="relative z-10 font-display tracking-tight">{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
