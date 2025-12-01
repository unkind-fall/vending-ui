'use client';

import type { Product } from '@/lib/data/products';
import { getInitials, getStatusBadge } from '@/lib/utils/helpers';
import { useMarqueeAnimation } from '@/hooks/useMarqueeAnimation';

interface ProductCardProps {
  product: Product;
  isSelected?: boolean;
  onSelect: (product: Product) => void;
  animationDelay?: number;
}

// Saturated pastel gradients for product cards
const getCardGradient = (slot: string): string => {
  const gradients = [
    'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)', // Violet
    'linear-gradient(135deg, #A5F3FC 0%, #67E8F9 100%)', // Cyan
    'linear-gradient(135deg, #FBCFE8 0%, #F9A8D4 100%)', // Pink
    'linear-gradient(135deg, #D9F99D 0%, #BEF264 100%)', // Lime
    'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)', // Orange
    'linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 100%)', // Indigo
  ];
  const index = (slot.charCodeAt(0) + slot.charCodeAt(1)) % gradients.length;
  return gradients[index];
};

// Badge styles - Bold & Saturated
const getBadgeStyle = (status: string, promo?: boolean): { gradient: string; text: string; label: string } | null => {
  if (status === 'sold_out') {
    return { gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)', text: '#FFFFFF', label: 'Out of Stock' };
  }
  if (status === 'low_stock') {
    return { gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', text: '#1E1B4B', label: 'Low Stock' };
  }
  if (status === 'age_restricted') {
    return { gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', text: '#1E1B4B', label: 'ID Required' };
  }
  if (promo) {
    return { gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', text: '#FFFFFF', label: 'Deal' };
  }
  return null;
};

export function ProductCard({ product, isSelected, onSelect, animationDelay = 0 }: ProductCardProps) {
  const setupMarquee = useMarqueeAnimation();
  const badge = getStatusBadge(product.status, product.promo);
  const badgeStyle = getBadgeStyle(product.status, product.promo);
  const isDisabled = product.status === 'sold_out';
  const bgGradient = getCardGradient(product.slot);

  return (
    <div className="flex flex-col animate-fade-in group" style={{ animationDelay: `${animationDelay}s` }}>
      {/* Card (image area only) */}
      <button
        className={`
          relative
          aspect-square
          w-full
          rounded-[20px]
          overflow-hidden
          border border-white/60
          shadow-card
          transition-all duration-300 ease-spring
          ${isDisabled
            ? 'opacity-60 cursor-not-allowed grayscale-[0.8]'
            : 'cursor-pointer hover:shadow-hover hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/30'
          }
          ${isSelected
            ? 'ring-4 ring-primary/20 shadow-active scale-[0.98]'
            : ''
          }
          active:scale-[0.96]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
        onClick={() => onSelect(product)}
        disabled={isDisabled}
        style={{ background: bgGradient }}
        aria-label={`${product.name}, $${product.price.toFixed(2)}${isDisabled ? ', out of stock' : ''}`}
      >
        {/* Status Badge */}
        {badgeStyle && (
          <div
            className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold z-10 shadow-badge tracking-wide uppercase"
            style={{ background: badgeStyle.gradient, color: badgeStyle.text }}
          >
            {badgeStyle.label}
          </div>
        )}

        {/* Placeholder Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center glossy-overlay">
          <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/30 transition-colors duration-300">
            {getInitials(product.name)}
          </span>
          <span className="mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/40 backdrop-blur-sm text-text-secondary/70 border border-white/30">
            {product.slot}
          </span>
        </div>

        {isDisabled && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
        )}
      </button>

      {/* Product Info (outside the card) */}
      <div className="pt-3 px-1">
        <div
          ref={setupMarquee}
          className="overflow-hidden whitespace-nowrap"
        >
          <span className="text-[13px] font-bold text-text-primary inline-block tracking-tight group-hover:text-primary transition-colors duration-200">
            {product.name}
          </span>
        </div>
        <p className="text-base font-bold text-primary font-display mt-0.5">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
