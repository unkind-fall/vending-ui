'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import type { Product, PaymentState } from '@/lib/data/products';

interface CartContextType {
  selectedProduct: Product | null;
  paymentState: PaymentState;
  selectProduct: (product: Product) => void;
  clearCart: () => void;
  setPaymentState: (state: PaymentState) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [paymentState, setPaymentState] = useState<PaymentState>(null);

  const selectProduct = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const clearCart = useCallback(() => {
    setSelectedProduct(null);
    setPaymentState(null);
  }, []);

  return (
    <CartContext.Provider
      value={{
        selectedProduct,
        paymentState,
        selectProduct,
        clearCart,
        setPaymentState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
