'use client';

import type { Product, GridLayoutItem } from '@/lib/data/products';
import { getInitials } from '@/lib/utils/helpers';
import { useMarqueeAnimation } from '@/hooks/useMarqueeAnimation';

interface HeroProductCardProps {
  product: Product;
  layoutItem: GridLayoutItem;
  onSelect: (product: Product) => void;
}

// Saturated pastel gradients for hero cards
const getHeroGradient = (slot: string): string => {
  const gradients: Record<string, string> = {
    'H1': 'linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 100%)', // Indigo
    'H2': 'linear-gradient(135deg, #FBCFE8 0%, #F9A8D4 100%)', // Pink
    'A1': 'linear-gradient(135deg, #A5F3FC 0%, #67E8F9 100%)', // Cyan
    'C2': 'linear-gradient(135deg, #D9F99D 0%, #BEF264 100%)', // Lime
    'E3': 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)', // Violet
    'B1': 'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)', // Orange
  };
  return gradients[slot] || 'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)';
};

// Badge styles - Bold & Saturated
const getBadgeStyle = (badge?: string, savings?: string): { gradient: string; text: string; label: string } | null => {
  if (savings) {
    return { gradient: 'linear-gradient(135deg, #EC4899 0%, #DB2777 100%)', text: '#FFFFFF', label: savings };
  }
  if (!badge) return null;

  const styles: Record<string, { gradient: string; text: string }> = {
    'NEW': { gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)', text: '#FFFFFF' },
    'Best Seller': { gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', text: '#FFFFFF' },
    'Staff Pick': { gradient: 'linear-gradient(135deg, #84CC16 0%, #65A30D 100%)', text: '#FFFFFF' },
    'Healthy': { gradient: 'linear-gradient(135deg, #84CC16 0%, #65A30D 100%)', text: '#FFFFFF' },
    'Morning': { gradient: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', text: '#FFFFFF' },
  };

  return { ...styles[badge] || { gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', text: '#FFFFFF' }, label: badge };
};

export function HeroProductCard({ product, layoutItem, onSelect }: HeroProductCardProps) {
  const setupMarquee = useMarqueeAnimation();
  const bgGradient = getHeroGradient(product.slot);
  const { col, row, colSpan, rowSpan } = layoutItem;
  const badgeInfo = getBadgeStyle(product.badge, product.savings);

  return (
    <div
      className="flex flex-col group"
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
    >
      {/* Card (image area only) */}
      <button
        className={`
          relative
          flex-1
          min-h-0
          rounded-[24px]
          overflow-hidden
          border border-white/60
          shadow-card
          transition-all duration-300 ease-spring
          hover:shadow-hover hover:-translate-y-1.5 hover:scale-[1.01] hover:border-primary/30
          active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        `}
        onClick={() => onSelect(product)}
        style={{ background: bgGradient }}
      >
        {/* Badge */}
        {badgeInfo && (
          <div
            className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[11px] font-bold z-10 shadow-badge tracking-wide uppercase"
            style={{ background: badgeInfo.gradient, color: badgeInfo.text }}
          >
            {badgeInfo.label}
          </div>
        )}

        {/* Placeholder Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center glossy-overlay">
          <span className={`font-display font-bold text-primary/20 group-hover:text-primary/30 transition-colors duration-300 ${colSpan >= 2 || rowSpan >= 2 ? 'text-7xl' : 'text-5xl'}`}>
            {getInitials(product.name)}
          </span>
          <span className="mt-2 text-xs font-bold px-2.5 py-1 rounded-full bg-white/40 backdrop-blur-sm text-text-secondary/70 border border-white/30">
            {product.slot}
          </span>
        </div>
      </button>

      {/* Product Info (outside the card) */}
      <div className="pt-3 px-1">
        <div
          ref={setupMarquee}
          className="overflow-hidden whitespace-nowrap"
        >
          <span className="text-sm font-bold text-text-primary inline-block tracking-tight group-hover:text-primary transition-colors duration-200">
            {product.name}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-lg font-bold text-primary font-display">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm font-medium text-text-muted line-through decoration-2 decoration-text-muted/50">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
