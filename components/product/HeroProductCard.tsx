'use client';

import type { Product, GridLayoutItem } from '@/lib/data/products';
import { getInitials } from '@/lib/utils/helpers';
import { MarqueeText } from '@/components/ui/MarqueeText';

interface HeroProductCardProps {
  product: Product;
  layoutItem: GridLayoutItem;
  onSelect: (product: Product) => void;
}

// Neon/Vibrant gradients for hero cards (Light Mode)
const getHeroGradient = (slot: string): string => {
  const gradients: Record<string, string> = {
    'H1': 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(124, 58, 237, 0.02) 100%)', // Indigo
    'H2': 'linear-gradient(135deg, rgba(244, 114, 182, 0.1) 0%, rgba(219, 39, 119, 0.02) 100%)', // Pink
    'A1': 'linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(8, 145, 178, 0.02) 100%)', // Cyan
    'C2': 'linear-gradient(135deg, rgba(163, 230, 53, 0.1) 0%, rgba(101, 163, 13, 0.02) 100%)', // Lime
    'E3': 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.02) 100%)', // Violet
    'B1': 'linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(234, 88, 12, 0.02) 100%)', // Orange
  };
  return gradients[slot] || 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(124, 58, 237, 0.02) 100%)';
};

// Badge styles - Bold & Saturated (Light Mode)
const getBadgeStyle = (badge?: string, savings?: string): { className: string; label: string } | null => {
  if (savings) {
    return { className: 'bg-pink-100 text-pink-700 border-pink-200', label: savings };
  }
  if (!badge) return null;

  const styles: Record<string, string> = {
    'NEW': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    'Best Seller': 'bg-orange-100 text-orange-700 border-orange-200',
    'Staff Pick': 'bg-lime-100 text-lime-700 border-lime-200',
    'Healthy': 'bg-green-100 text-green-700 border-green-200',
    'Morning': 'bg-amber-100 text-amber-700 border-amber-200',
  };

  return { className: styles[badge] || 'bg-primary-light/20 text-primary-deep border-primary/20', label: badge };
};

export function HeroProductCard({ product, layoutItem, onSelect }: HeroProductCardProps) {
  const bgGradient = getHeroGradient(product.slot);
  const { col, row, colSpan, rowSpan } = layoutItem;
  const badgeInfo = getBadgeStyle(product.badge, product.savings);

  return (
    <div
      className="flex flex-col group animate-fade-in h-full"
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
    >
      {/* Card Container */}
      <button
        className={`
          relative
          flex-1
          min-h-0
          rounded-2xl
          overflow-hidden
          border
          transition-all duration-300 ease-spring
          hover:shadow-hover hover:-translate-y-0.5 hover:border-primary/30 border-border
          active:scale-[0.98]
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          bg-bg-card
        `}
        onClick={() => onSelect(product)}
        style={{ background: bgGradient }}
      >
        {/* Badge */}
        {badgeInfo && (
          <div
            className={`
              absolute top-3 left-3 px-2 py-1 rounded-full text-[10px] font-bold z-10 
              border backdrop-blur-md uppercase tracking-wider shadow-sm
              ${badgeInfo.className}
            `}
          >
            {badgeInfo.label}
          </div>
        )}

        {/* Slot Number */}
        <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/80 backdrop-blur-md border border-border shadow-sm">
          <span className="text-[10px] font-mono font-bold text-text-secondary">
            {product.slot}
          </span>
        </div>

        {/* Placeholder Visual */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300 ${colSpan >= 2 || rowSpan >= 2 ? 'text-7xl' : 'text-5xl'}`}>
            {getInitials(product.name)}
          </span>
        </div>
      </button>

      {/* Product Info */}
      <div className="pt-2 px-2">
        <div className="h-5 mb-0.5">
          <MarqueeText
            text={product.name}
            className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-text-primary font-display">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-xs font-medium text-text-muted line-through decoration-2 decoration-text-muted/50">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
