'use client';

import type { Toast as ToastType } from '@/lib/data/products';

interface ToastProps {
  toast: ToastType;
}

export function Toast({ toast }: ToastProps) {
  const typeStyles = {
    success: 'border-l-success',
    error: 'border-l-error',
    warning: 'border-l-warning',
  };

  const iconBgStyles = {
    success: 'bg-success text-white',
    error: 'bg-error text-white',
    warning: 'bg-warning text-text-primary',
  };

  return (
    <div
      className={`
        absolute top-20 left-1/2 -translate-x-1/2
        z-[1000]
        flex items-center gap-3
        px-5 py-3.5
        bg-white
        rounded-lg
        border-l-4
        text-sm font-semibold text-text-primary
        animate-slide-down
        shadow-hover
        ${typeStyles[toast.type]}
      `}
      role="alert"
      aria-live="polite"
    >
      <span
        className={`
          w-[26px] h-[26px]
          rounded-full
          flex items-center justify-center
          text-xs font-bold
          ${iconBgStyles[toast.type]}
        `}
      >
        {toast.icon}
      </span>
      <span>{toast.message}</span>
    </div>
  );
}
