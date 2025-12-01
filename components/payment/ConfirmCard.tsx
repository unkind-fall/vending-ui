'use client';

import type { Product } from '@/lib/data/products';
import { getInitials } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/Button';

interface ConfirmCardProps {
  product: Product;
  onCancel: () => void;
  onProceed: () => void;
}

// Get gradient for product card
const getProductGradient = (slot: string): string => {
  const gradients = [
    'linear-gradient(135deg, #DDD6FE 0%, #C4B5FD 100%)',
    'linear-gradient(135deg, #A5F3FC 0%, #67E8F9 100%)',
    'linear-gradient(135deg, #FBCFE8 0%, #F9A8D4 100%)',
    'linear-gradient(135deg, #D9F99D 0%, #BEF264 100%)',
    'linear-gradient(135deg, #FED7AA 0%, #FDBA74 100%)',
    'linear-gradient(135deg, #C7D2FE 0%, #A5B4FC 100%)',
  ];
  const index = (slot.charCodeAt(0) + slot.charCodeAt(1)) % gradients.length;
  return gradients[index];
};

export function ConfirmCard({ product, onCancel, onProceed }: ConfirmCardProps) {
  const bgGradient = getProductGradient(product.slot);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="
        w-full max-w-[320px]
        bg-white
        rounded-xl
        shadow-hover
        border border-primary/10
        overflow-hidden
      ">
        {/* Product Image */}
        <div
          className="
            relative
            aspect-square
            w-full
            flex items-center justify-center
            glossy-overlay
          "
          style={{ background: bgGradient }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-6xl font-display font-black text-primary/40">
              {getInitials(product.name)}
            </span>
          </div>
          <div className="
            absolute bottom-3 right-3
            px-3 py-1.5
            bg-white
            rounded-full
            text-lg font-display font-bold text-text-primary
            shadow-soft
          ">
            {product.slot}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-7 flex flex-col items-center gap-2 text-center">
          <h2 className="text-[22px] font-bold text-text-primary">
            {product.name}
          </h2>
          <p className="text-4xl font-bold text-primary font-display">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Actions */}
        <div className="px-7 pb-6 flex gap-3">
          <Button variant="secondary" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={onProceed} className="flex-1">
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
}
