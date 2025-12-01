'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

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
          Something went wrong
        </h2>

        <p className="text-sm text-gray-500 text-center">
          An unexpected error occurred. Please try again.
        </p>

        <Button variant="primary" fullWidth onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
}
