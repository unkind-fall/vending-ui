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
    <div className="flex flex-col gap-2 w-[90px] shrink-0">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`
            w-full
            px-3 py-4
            rounded-xl
            border-2
            text-sm font-semibold
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            ${activeCategory === cat.id
              ? 'bg-primary text-white border-primary'
              : 'bg-white text-gray-600 border-divider hover:border-primary hover:text-primary'
            }
          `}
          aria-pressed={activeCategory === cat.id}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
