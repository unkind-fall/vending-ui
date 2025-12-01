'use client';

import type { Product } from '@/lib/data/products';
import { getDummyColor, getInitials, getStatusBadge } from '@/lib/utils/helpers';
import { Badge } from '@/components/ui/Badge';
import { useMarqueeAnimation } from '@/hooks/useMarqueeAnimation';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onSelect: (product: Product) => void;
  animationDelay?: number;
}

export function ProductCard({ product, isSelected, onSelect, animationDelay = 0 }: ProductCardProps) {
  const setupMarquee = useMarqueeAnimation();
  const badge = getStatusBadge(product.status, product.promo);
  const isDisabled = product.status === 'sold_out';
  const bgColor = getDummyColor(product.slot);

  return (
    <button
      className={`
        relative
        flex flex-col
        bg-card
        rounded-xl
        border-2
        overflow-hidden
        transition-all duration-200
        animate-fade-in
        ${isDisabled ? 'opacity-60 cursor-not-allowed border-divider' : 'border-divider hover:border-primary hover:shadow-md cursor-pointer'}
        ${isSelected ? 'border-primary bg-selection' : ''}
        active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      `}
      onClick={() => onSelect(product)}
      disabled={isDisabled}
      style={{ animationDelay: `${animationDelay}s` }}
      aria-label={`${product.name}, $${product.price.toFixed(2)}${isDisabled ? ', out of stock' : ''}`}
    >
      {/* Status Badge */}
      {badge && (
        <Badge
          text={badge.text}
          icon={badge.icon}
          bgColor={badge.bg}
          textColor={badge.color}
        />
      )}

      {/* Product Image Placeholder */}
      <div
        className="relative aspect-square w-full flex items-center justify-center"
        style={{ background: bgColor }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-2xl font-bold text-gray-600/60">
            {getInitials(product.name)}
          </span>
          <span className="text-xs font-medium text-gray-500/60">
            {product.slot}
          </span>
        </div>
        {isDisabled && (
          <div className="absolute inset-0 bg-white/50" />
        )}
      </div>

      {/* Product Details */}
      <div className="p-3 flex flex-col gap-1">
        <div
          ref={setupMarquee}
          className="overflow-hidden whitespace-nowrap"
        >
          <span className="text-sm font-medium text-gray-900 inline-block">
            {product.name}
          </span>
        </div>
        <p className="text-base font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </button>
  );
}
