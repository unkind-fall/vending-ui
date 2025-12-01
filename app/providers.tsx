'use client';

import { ReactNode } from 'react';
import { CartProvider } from '@/contexts/CartContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { Toast } from '@/components/ui/Toast';
import { useToast } from '@/contexts/ToastContext';

function ToastDisplay() {
  const { toast } = useToast();
  return toast ? <Toast toast={toast} /> : null;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ToastProvider>
        <ToastDisplay />
        {children}
      </ToastProvider>
    </CartProvider>
  );
}
