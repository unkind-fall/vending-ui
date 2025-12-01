'use client';

import { Button } from '@/components/ui/Button';

interface SuccessScreenProps {
  slot: string;
  onComplete: () => void;
}

export function SuccessScreen({ slot, onComplete }: SuccessScreenProps) {
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
        {/* Success Icon */}
        <div className="
          w-20 h-20
          rounded-full
          bg-success-bg
          flex items-center justify-center
          text-3xl text-success-text
        ">
          ✓
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Payment Successful!
        </h2>

        {/* Slot Code */}
        <div className="w-full bg-gray-50 rounded-xl p-6 text-center">
          <span className="text-sm text-gray-500 block mb-2">
            Collect from slot
          </span>
          <span className="text-5xl font-extrabold text-primary">
            {slot}
          </span>
        </div>

        <p className="text-sm text-gray-500 text-center">
          Your item is being dispensed now.
        </p>

        <Button variant="primary" fullWidth onClick={onComplete}>
          Done
        </Button>
      </div>
    </div>
  );
}
