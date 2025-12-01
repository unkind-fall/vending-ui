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
        bg-white
        rounded-xl
        shadow-hover
        border border-primary/10
        p-7
        flex flex-col items-center gap-6
      ">
        {/* Success Icon */}
        <div className="
          w-20 h-20
          rounded-full
          gradient-success
          flex items-center justify-center
          text-4xl text-white
          shadow-success
          animate-success-pop
        ">
          ✓
        </div>

        <h2 className="text-2xl font-bold text-text-primary">
          Payment Successful!
        </h2>

        {/* Slot Code */}
        <div className="w-full gradient-vend-code rounded-xl p-6 text-center border border-primary/10">
          <span className="text-sm font-semibold text-text-secondary block mb-2">
            Collect from slot
          </span>
          <span className="text-[52px] font-display font-bold text-primary">
            {slot}
          </span>
        </div>

        <p className="text-sm font-medium text-text-secondary text-center">
          Your item is being dispensed now.
        </p>

        <Button variant="primary" fullWidth onClick={onComplete}>
          Done
        </Button>
      </div>
    </div>
  );
}
