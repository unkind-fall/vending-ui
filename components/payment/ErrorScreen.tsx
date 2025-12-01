'use client';

import { Button } from '@/components/ui/Button';

interface ErrorScreenProps {
  onRetry: () => void;
  onCancel: () => void;
}

export function ErrorScreen({ onRetry, onCancel }: ErrorScreenProps) {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="
        w-full max-w-[320px]
        bg-card
        rounded-2xl
        shadow-lg
        p-8
        flex flex-col items-center gap-6
      ">
        {/* Error Icon */}
        <div className="
          w-20 h-20
          rounded-full
          bg-error-bg
          flex items-center justify-center
          text-3xl text-error-text
        ">
          ✕
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Payment Failed
        </h2>

        <p className="text-sm text-gray-500 text-center">
          We couldn&apos;t process your payment. Please try again or use a different payment method.
        </p>

        <div className="w-full flex gap-3">
          <Button variant="secondary" onClick={onCancel} className="flex-1">
            Cancel
          </Button>
          <Button variant="primary" onClick={onRetry} className="flex-1">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
