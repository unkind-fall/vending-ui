'use client';

import type { Product } from '@/lib/data/products';
import { getDummyColor, getInitials } from '@/lib/utils/helpers';
import { Button } from '@/components/ui/Button';

interface ConfirmCardProps {
  product: Product;
  onCancel: () => void;
  onProceed: () => void;
}

export function ConfirmCard({ product, onCancel, onProceed }: ConfirmCardProps) {
  const bgColor = getDummyColor(product.slot);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="
        w-full max-w-[320px]
        bg-card
        rounded-2xl
        shadow-lg
        overflow-hidden
      ">
        {/* Product Image */}
        <div
          className="
            relative
            aspect-square
            w-full
            flex items-center justify-center
          "
          style={{ background: bgColor }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-5xl font-bold text-gray-600/60">
              {getInitials(product.name)}
            </span>
          </div>
          <div className="
            absolute bottom-3 right-3
            px-3 py-1.5
            bg-white/90
            rounded-lg
            text-lg font-bold text-gray-900
            shadow-sm
          ">
            {product.slot}
          </div>
        </div>

        {/* Product Details */}
        <div className="p-6 flex flex-col items-center gap-3 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            {product.name}
          </h2>
          <p className="text-3xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-3">
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
