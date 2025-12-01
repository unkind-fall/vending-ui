'use client';

import type { Toast as ToastType } from '@/lib/data/products';

interface ToastProps {
  toast: ToastType;
}

export function Toast({ toast }: ToastProps) {
  const typeStyles = {
    success: 'bg-success-bg text-success-text',
    error: 'bg-error-bg text-error-text',
    warning: 'bg-warning-bg text-warning-text',
  };

  const iconBgStyles = {
    success: 'bg-[#16A34A]',
    error: 'bg-error-text',
    warning: 'bg-[#F59E0B]',
  };

  return (
    <div
      className={`
        absolute top-20 left-1/2 -translate-x-1/2
        z-[1000]
        flex items-center gap-2.5
        px-6 py-3.5
        rounded-xl
        text-sm font-semibold
        animate-slide-down
        shadow-lg
        ${typeStyles[toast.type]}
      `}
      role="alert"
      aria-live="polite"
    >
      <span
        className={`
          w-6 h-6
          rounded-full
          flex items-center justify-center
          text-xs text-white
          ${iconBgStyles[toast.type]}
        `}
      >
        {toast.icon}
      </span>
      <span>{toast.message}</span>
    </div>
  );
}
