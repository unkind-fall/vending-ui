'use client';

import type { Product, GridLayoutItem } from '@/lib/data/products';
import { getDummyColor, getInitials } from '@/lib/utils/helpers';
import { HeroBadge, SavingsBadge } from '@/components/ui/Badge';
import { useMarqueeAnimation } from '@/hooks/useMarqueeAnimation';

interface HeroProductCardProps {
  product: Product;
  layoutItem: GridLayoutItem;
  onSelect: (product: Product) => void;
}

export function HeroProductCard({ product, layoutItem, onSelect }: HeroProductCardProps) {
  const setupMarquee = useMarqueeAnimation();
  const bgColor = getDummyColor(product.slot);
  const { col, row, colSpan, rowSpan } = layoutItem;

  return (
    <button
      className={`
        relative
        flex flex-col
        bg-card
        rounded-xl
        border-2 border-divider
        overflow-hidden
        transition-all duration-200
        hover:border-primary hover:shadow-md
        active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      `}
      onClick={() => onSelect(product)}
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
    >
      {/* Hero Image Placeholder */}
      <div
        className="relative flex-1 min-h-0 flex items-center justify-center"
        style={{ background: bgColor }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className={`font-bold text-gray-600/60 ${colSpan >= 2 || rowSpan >= 2 ? 'text-4xl' : 'text-2xl'}`}>
            {getInitials(product.name)}
          </span>
          <span className="text-sm font-medium text-gray-500/60">
            {product.slot}
          </span>
        </div>

        {/* Savings Badge */}
        {product.savings && (
          <SavingsBadge text={product.savings} />
        )}

        {/* Hero Badge */}
        {product.badge && (
          <HeroBadge text={product.badge} />
        )}
      </div>

      {/* Hero Details */}
      <div className="p-3 flex flex-col gap-1 bg-card">
        <div
          ref={setupMarquee}
          className="overflow-hidden whitespace-nowrap"
        >
          <span className="text-sm font-medium text-gray-900 inline-block">
            {product.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
