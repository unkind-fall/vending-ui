'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import { SuccessScreen } from '@/components/payment/SuccessScreen';
import { BottomBar } from '@/components/layout/BottomBar';

export default function SuccessPage() {
  const router = useRouter();
  const { selectedProduct, paymentState, clearCart } = useCart();
  const { showToast } = useToast();

  // Redirect to home if no product or payment not successful
  useEffect(() => {
    if (!selectedProduct || paymentState !== 'success') {
      router.replace('/');
    }
  }, [selectedProduct, paymentState, router]);

  if (!selectedProduct || paymentState !== 'success') {
    return null;
  }

  const handleComplete = () => {
    showToast('success', 'Thank you! Enjoy your item.', '✓');
    clearCart();
    router.push('/');
  };

  return (
    <>
      <SuccessScreen slot={selectedProduct.slot} onComplete={handleComplete} />
      <BottomBar />
    </>
  );
}
