'use client';

import type { Product } from '@/lib/data/products';
import { getInitials } from '@/lib/utils/helpers';
import { MarqueeText } from '@/components/ui/MarqueeText';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onSelect: (product: Product) => void;
  animationDelay?: number;
}

// Neon/Vibrant gradients for light mode (more subtle)
const getCardGradient = (slot: string): string => {
  const gradients = [
    'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%)', // Violet
    'linear-gradient(135deg, rgba(34, 211, 238, 0.08) 0%, rgba(8, 145, 178, 0.02) 100%)', // Cyan
    'linear-gradient(135deg, rgba(244, 114, 182, 0.08) 0%, rgba(219, 39, 119, 0.02) 100%)', // Pink
    'linear-gradient(135deg, rgba(163, 230, 53, 0.08) 0%, rgba(101, 163, 13, 0.02) 100%)', // Lime
    'linear-gradient(135deg, rgba(251, 146, 60, 0.08) 0%, rgba(234, 88, 12, 0.02) 100%)', // Orange
  ];
  const index = (slot.charCodeAt(0) + slot.charCodeAt(1)) % gradients.length;
  return gradients[index];
};

const getBadgeStyle = (status: string, promo?: boolean): { className: string; label: string } | null => {
  if (status === 'sold_out') {
    return { className: 'bg-red-100 text-red-700 border-red-200', label: 'Out of Stock' };
  }
  if (status === 'low_stock') {
    return { className: 'bg-amber-100 text-amber-700 border-amber-200', label: 'Low Stock' };
  }
  if (status === 'age_restricted') {
    return { className: 'bg-amber-100 text-amber-700 border-amber-200', label: '18+' };
  }
  if (promo) {
    return { className: 'bg-primary-light/20 text-primary-deep border-primary/20', label: 'Deal' };
  }
  return null;
};

export function ProductCard({ product, isSelected, onSelect, animationDelay = 0 }: ProductCardProps) {
  const badgeStyle = getBadgeStyle(product.status, product.promo);
  const isDisabled = product.status === 'sold_out';
  const bgGradient = getCardGradient(product.slot);

  return (
    <div className="flex flex-col animate-fade-in group h-full" style={{ animationDelay: `${animationDelay}s` }}>
      {/* Card Container */}
      <button
        className={`
          relative
          flex-1
          min-h-0
          w-full
          rounded-xl
          overflow-hidden
          border
          transition-all duration-300 ease-spring
          ${isDisabled
            ? 'opacity-50 cursor-not-allowed border-border grayscale bg-bg-subtle'
            : 'cursor-pointer hover:shadow-hover hover:-translate-y-0.5 hover:border-primary/30 border-border'
          }
          ${isSelected
            ? 'ring-2 ring-primary shadow-active scale-[0.98] border-primary'
            : 'bg-bg-card'
          }
        `}
        onClick={() => onSelect(product)}
        disabled={isDisabled}
        style={{ background: isDisabled ? undefined : bgGradient }}
        aria-label={`${product.name}, $${product.price.toFixed(2)}${isDisabled ? ', out of stock' : ''}`}
      >
        {/* Status Badge */}
        {badgeStyle && (
          <div
            className={`
              absolute top-2 left-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold z-10 
              border backdrop-blur-md uppercase tracking-wider
              ${badgeStyle.className}
            `}
          >
            {badgeStyle.label}
          </div>
        )}

        {/* Slot Number */}
        <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-border shadow-sm">
          <span className="text-[9px] font-mono font-bold text-text-secondary">
            {product.slot}
          </span>
        </div>

        {/* Placeholder Visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-4xl font-display font-bold transition-colors duration-300 ${isDisabled ? 'text-text-muted/20' : 'text-primary/10 group-hover:text-primary/20'
            }`}>
            {getInitials(product.name)}
          </span>
        </div>
      </button>

      {/* Product Info */}
      <div className="pt-2 px-1">
        <div className="h-5 mb-0.5">
          <MarqueeText
            text={product.name}
            className="text-xs font-medium text-text-primary group-hover:text-primary transition-colors"
          />
        </div>
        <p className="text-base font-bold text-text-primary font-display">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
