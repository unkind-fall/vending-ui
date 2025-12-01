'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', fullWidth = false, className = '', children, ...props }, ref) => {
    const baseStyles = `
      inline-flex items-center justify-center
      px-6 py-[18px] rounded-md
      text-base font-bold
      transition-all duration-200 ease-spring
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.97]
    `;

    const variantStyles = {
      primary: `
        gradient-primary text-white
        shadow-button
        hover:shadow-button-hover hover:-translate-y-0.5
        active:translate-y-0
      `,
      secondary: `
        bg-primary-light text-primary-deep font-semibold
        border border-primary/20
        hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5
        active:bg-primary/15
      `,
    };

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
