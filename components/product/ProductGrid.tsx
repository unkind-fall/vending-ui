'use client';

import type { Product, GridConfig } from '@/lib/data/products';
import { ProductCard } from './ProductCard';
import { HeroProductCard } from './HeroProductCard';

interface ProductGridProps {
  products: Product[];
  gridConfig: GridConfig;
  selectedProductId?: string | null;
  onProductSelect: (product: Product) => void;
  isFeatured?: boolean;
}

export function ProductGrid({
  products,
  gridConfig,
  selectedProductId,
  onProductSelect,
  isFeatured = false,
}: ProductGridProps) {
  // Featured layout with explicit grid positioning
  if (isFeatured && gridConfig.layout) {
    return (
      <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
        {gridConfig.layout.map((layoutItem) => {
          const product = products.find(p => p.id === layoutItem.id);
          if (!product) return null;

          return (
            <HeroProductCard
              key={product.id}
              product={product}
              layoutItem={layoutItem}
              onSelect={onProductSelect}
            />
          );
        })}
      </div>
    );
  }

  // Regular 3x3 grid
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.map((product, idx) => (
        <ProductCard
          key={product.id}
          product={product}
          isSelected={selectedProductId === product.id}
          onSelect={onProductSelect}
          animationDelay={idx * 0.05}
        />
      ))}
    </div>
  );
}
