import type { ProductStatus } from '@/lib/data/products';

// Generate warm pastel colors based on slot code hash (Modern Konbini palette)
export const getDummyColor = (slot: string): string => {
  const colors = [
    '#FFF0EB', // Primary light
    '#E8FAF8', // Secondary light
    '#FFF8F0', // Cream
    '#FFE5D9', // Warm peach
    '#F0FAF9', // Cool mint
    '#FFF5F0', // Soft coral
    '#FFEEBA', // Warm yellow
    '#FFE5E5', // Soft pink
    '#E8F4F8', // Light teal
    '#F5F0FF', // Lavender
  ];
  const colorIndex = slot.charCodeAt(0) + slot.charCodeAt(1);
  return colors[colorIndex % colors.length];
};

// Get initials for placeholder display
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
};

// Badge variant types for gradient styling
export type BadgeVariant =
  | 'new'
  | 'bestseller'
  | 'sale'
  | 'staff-pick'
  | 'low-stock'
  | 'out-of-stock'
  | 'id-required'
  | 'deal';

// Get status badge configuration
export interface BadgeConfig {
  text: string;
  variant: BadgeVariant;
  icon: string;
}

export const getStatusBadge = (status: ProductStatus, promo?: boolean): BadgeConfig | null => {
  if (status === 'sold_out') {
    return { text: 'OUT OF STOCK', variant: 'out-of-stock', icon: '✕' };
  }
  if (status === 'age_restricted') {
    return { text: 'ID REQUIRED', variant: 'id-required', icon: '⚠' };
  }
  if (status === 'low_stock') {
    return { text: 'LOW STOCK', variant: 'low-stock', icon: '!' };
  }
  if (promo) {
    return { text: 'DEAL', variant: 'deal', icon: '★' };
  }
  return null;
};

// Format price to 2 decimal places
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};
