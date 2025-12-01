export type ProductStatus = 'available' | 'sold_out' | 'low_stock' | 'age_restricted';

export interface Product {
  id: string;
  name: string;
  price: number;
  slot: string;
  status: ProductStatus;
  promo?: boolean;
  originalPrice?: number;
  savings?: string;
  badge?: string;
  isHero?: boolean;
}

export interface Category {
  id: string;
  name: string;
}

export interface GridLayoutItem {
  id: string;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
}

export interface GridConfig {
  columns: number;
  rows: number;
  layout: GridLayoutItem[] | null;
}

export interface Promo {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  badge: string;
}

export type PaymentState = null | 'processing' | 'success' | 'error';

export type ToastType = 'success' | 'error' | 'warning';

export interface Toast {
  type: ToastType;
  message: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'featured', name: 'Featured' },
  { id: 'sandwiches', name: 'Sandwiches' },
  { id: 'drinks', name: 'Drinks' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'fresh', name: 'Fresh' },
  { id: 'sweets', name: 'Sweets' },
];

export const promos: Promo[] = [
  { id: 1, title: 'Combo Deal', subtitle: 'Sandwich + Drink', price: '$8.99', badge: 'SAVE $3' },
  { id: 2, title: 'Fresh Today', subtitle: 'Made this morning', price: '', badge: 'NEW' },
];

export const gridConfig: Record<string, GridConfig> = {
  featured: {
    columns: 3,
    rows: 3,
    layout: [
      { id: 'hero1', col: 1, row: 1, colSpan: 2, rowSpan: 1 },
      { id: 'hero2', col: 3, row: 1, colSpan: 1, rowSpan: 2 },
      { id: 'hero3', col: 1, row: 2, colSpan: 1, rowSpan: 1 },
      { id: 'hero4', col: 2, row: 2, colSpan: 1, rowSpan: 1 },
      { id: 'hero5', col: 1, row: 3, colSpan: 1, rowSpan: 1 },
      { id: 'hero6', col: 2, row: 3, colSpan: 2, rowSpan: 1 },
    ],
  },
  sandwiches: { columns: 3, rows: 3, layout: null },
  drinks: { columns: 3, rows: 3, layout: null },
  snacks: { columns: 3, rows: 3, layout: null },
  fresh: { columns: 3, rows: 3, layout: null },
  sweets: { columns: 3, rows: 3, layout: null },
};

export const allProducts: Record<string, Product[]> = {
  featured: [
    { id: 'hero1', name: 'Combo Deal: Sandwich + Drink + Chips Bundle', price: 8.99, slot: 'H1', status: 'available', isHero: true, originalPrice: 11.99, savings: 'Save $3' },
    { id: 'hero2', name: 'Fresh Made Today', price: 7.99, slot: 'H2', status: 'available', isHero: true, badge: 'NEW' },
    { id: 'hero3', name: 'Best Seller: Premium Turkey Club Deluxe', price: 8.50, slot: 'A1', status: 'available', isHero: true, badge: 'Best Seller' },
    { id: 'hero4', name: 'Staff Pick: Iced Coffee', price: 4.99, slot: 'C2', status: 'available', isHero: true, badge: 'Staff Pick' },
    { id: 'hero5', name: 'Healthy Choice: Caesar Salad', price: 7.99, slot: 'E3', status: 'available', isHero: true, badge: 'Healthy' },
    { id: 'hero6', name: 'Morning Special: Breakfast Wrap', price: 6.99, slot: 'B1', status: 'available', isHero: true, badge: 'Morning' },
  ],
  sandwiches: [
    { id: 's1', name: 'Turkey Club Sandwich', price: 8.50, slot: 'A1', status: 'available' },
    { id: 's2', name: 'Chicken Panini', price: 9.25, slot: 'A2', status: 'available', promo: true },
    { id: 's3', name: 'BLT Classic', price: 7.99, slot: 'A3', status: 'sold_out' },
    { id: 's4', name: 'Vegetarian Mediterranean Wrap', price: 7.50, slot: 'A4', status: 'available' },
    { id: 's5', name: 'Ham & Swiss', price: 8.25, slot: 'A5', status: 'low_stock' },
    { id: 's6', name: 'Tuna Melt', price: 8.75, slot: 'A6', status: 'available' },
    { id: 's7', name: 'Egg Salad', price: 6.99, slot: 'B1', status: 'available' },
    { id: 's8', name: 'Caprese Ciabatta', price: 8.99, slot: 'B2', status: 'available' },
    { id: 's9', name: 'Roast Beef Sub', price: 9.50, slot: 'B3', status: 'age_restricted' },
  ],
  drinks: [
    { id: 'd1', name: 'Fresh Orange Juice', price: 4.50, slot: 'C1', status: 'available' },
    { id: 'd2', name: 'Iced Coffee', price: 4.99, slot: 'C2', status: 'available', promo: true },
    { id: 'd3', name: 'Green Smoothie', price: 5.99, slot: 'C3', status: 'available' },
    { id: 'd4', name: 'Sparkling Lemonade', price: 3.50, slot: 'C4', status: 'sold_out' },
    { id: 'd5', name: 'Sparkling Water', price: 2.50, slot: 'C5', status: 'available' },
    { id: 'd6', name: 'Cola', price: 2.25, slot: 'C6', status: 'available' },
  ],
  snacks: [
    { id: 'sn1', name: 'Kettle Chips', price: 2.99, slot: 'D1', status: 'available' },
    { id: 'sn2', name: 'Mixed Nuts', price: 4.50, slot: 'D2', status: 'available' },
    { id: 'sn3', name: 'Protein Bar', price: 3.25, slot: 'D3', status: 'available' },
    { id: 'sn4', name: 'Trail Mix', price: 3.99, slot: 'D4', status: 'available' },
    { id: 'sn5', name: 'Pretzels', price: 2.50, slot: 'D5', status: 'low_stock' },
    { id: 'sn6', name: 'Popcorn', price: 2.99, slot: 'D6', status: 'available' },
  ],
  fresh: [
    { id: 'f1', name: 'Fruit Cup', price: 4.99, slot: 'E1', status: 'available' },
    { id: 'f2', name: 'Greek Yogurt', price: 3.50, slot: 'E2', status: 'available' },
    { id: 'f3', name: 'Caesar Salad', price: 7.99, slot: 'E3', status: 'available', promo: true },
    { id: 'f4', name: 'Veggie Cup', price: 3.99, slot: 'E4', status: 'available' },
    { id: 'f5', name: 'Hummus & Pita', price: 4.50, slot: 'E5', status: 'sold_out' },
    { id: 'f6', name: 'Apple Slices', price: 2.99, slot: 'E6', status: 'available' },
  ],
  sweets: [
    { id: 'sw1', name: 'Chocolate Bar', price: 2.25, slot: 'F1', status: 'available' },
    { id: 'sw2', name: 'Cookies', price: 2.99, slot: 'F2', status: 'available' },
    { id: 'sw3', name: 'Brownie', price: 3.50, slot: 'F3', status: 'available' },
    { id: 'sw4', name: 'Donut', price: 2.50, slot: 'F4', status: 'available' },
    { id: 'sw5', name: 'Muffin', price: 2.99, slot: 'F5', status: 'available' },
    { id: 'sw6', name: 'Ice Cream', price: 4.50, slot: 'F6', status: 'age_restricted' },
  ],
};
