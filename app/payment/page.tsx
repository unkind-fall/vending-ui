'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/contexts/ToastContext';
import { ProcessingScreen } from '@/components/payment/ProcessingScreen';
import { ErrorScreen } from '@/components/payment/ErrorScreen';
import { BottomBar } from '@/components/layout/BottomBar';

export default function PaymentPage() {
  const router = useRouter();
  const { selectedProduct, setPaymentState, paymentState, clearCart } = useCart();
  const { showToast } = useToast();
  const [isProcessing, setIsProcessing] = useState(true);

  // Redirect to home if no product selected
  useEffect(() => {
    if (!selectedProduct) {
      router.replace('/');
      return;
    }

    // Simulate payment processing
    const processPayment = async () => {
      setIsProcessing(true);
      setPaymentState('processing');

      // Wait 2.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // 80% success rate
      const success = Math.random() > 0.2;

      if (success) {
        setPaymentState('success');
        router.push('/success');
      } else {
        setPaymentState('error');
        setIsProcessing(false);
        showToast('error', 'Payment failed. Please try again.', '✕');
      }
    };

    processPayment();
  }, [selectedProduct, router, setPaymentState, showToast]);

  const handleRetry = () => {
    router.push('/confirm');
  };

  const handleCancel = () => {
    clearCart();
    router.push('/');
  };

  // Show error screen if payment failed
  if (paymentState === 'error' && !isProcessing) {
    return (
      <>
        <ErrorScreen onRetry={handleRetry} onCancel={handleCancel} />
        <BottomBar />
      </>
    );
  }

  // Show processing screen
  return (
    <>
      <ProcessingScreen />
      <BottomBar />
    </>
  );
}
