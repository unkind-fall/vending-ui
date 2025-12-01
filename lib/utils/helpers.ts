import type { ProductStatus } from '@/lib/data/products';

// Generate pastel colors based on slot code hash
export const getDummyColor = (slot: string): string => {
  const colors = [
    '#E0F2FE', '#DBEAFE', '#E0E7FF', '#EDE9FE', '#FCE7F3',
    '#FFE4E6', '#FEF3C7', '#ECFCCB', '#D1FAE5', '#CCFBF1'
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

// Get status badge configuration
export interface BadgeConfig {
  text: string;
  bg: string;
  color: string;
  icon: string;
}

export const getStatusBadge = (status: ProductStatus, promo?: boolean): BadgeConfig | null => {
  if (status === 'sold_out') {
    return { text: 'OUT OF STOCK', bg: '#FEE2E2', color: '#DC2626', icon: '✕' };
  }
  if (status === 'age_restricted') {
    return { text: 'ID REQUIRED', bg: '#FEF3C7', color: '#92400E', icon: '⚠' };
  }
  if (status === 'low_stock') {
    return { text: 'LOW STOCK', bg: '#FEF3C7', color: '#92400E', icon: '!' };
  }
  if (promo) {
    return { text: 'DEAL', bg: '#CCFBF1', color: '#0D9488', icon: '★' };
  }
  return null;
};

// Format price to 2 decimal places
export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};
