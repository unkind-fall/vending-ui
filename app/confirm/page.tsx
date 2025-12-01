'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { ConfirmCard } from '@/components/payment/ConfirmCard';
import { PaymentMethods } from '@/components/payment/PaymentMethods';
import { BottomBar } from '@/components/layout/BottomBar';

export default function ConfirmPage() {
  const router = useRouter();
  const { selectedProduct, clearCart } = useCart();

  // Redirect to home if no product selected
  useEffect(() => {
    if (!selectedProduct) {
      router.replace('/');
    }
  }, [selectedProduct, router]);

  if (!selectedProduct) {
    return null;
  }

  const handleCancel = () => {
    clearCart();
    router.push('/');
  };

  const handleProceed = () => {
    router.push('/payment');
  };

  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center">
        <ConfirmCard
          product={selectedProduct}
          onCancel={handleCancel}
          onProceed={handleProceed}
        />
        <PaymentMethods />
      </div>
      <BottomBar />
    </>
  );
}
