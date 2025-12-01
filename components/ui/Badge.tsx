import type { BadgeVariant } from '@/lib/utils/helpers';

interface BadgeProps {
  text: string;
  icon?: string;
  variant: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  new: 'gradient-badge-new text-white',
  bestseller: 'gradient-badge-bestseller text-white',
  sale: 'gradient-badge-sale text-white',
  'staff-pick': 'gradient-badge-staff text-white',
  'low-stock': 'gradient-badge-lowstock text-text-primary',
  'out-of-stock': 'gradient-badge-outofstock text-white',
  'id-required': 'gradient-badge-lowstock text-text-primary',
  deal: 'gradient-badge-deal text-white',
};

export function Badge({ text, icon, variant, className = '' }: BadgeProps) {
  return (
    <div
      className={`
        absolute top-2 left-2
        flex items-center gap-1
        px-2.5 py-1
        rounded-full
        text-[9px] font-bold uppercase tracking-wide
        shadow-badge
        z-10
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {icon && <span className="text-[10px]">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}

// Hero badge variant (for featured products)
export function HeroBadge({ text, variant = 'new', className = '' }: { text: string; variant?: 'new' | 'bestseller' | 'staff-pick' | 'deal'; className?: string }) {
  const heroVariantStyles = {
    new: 'gradient-badge-new text-white',
    bestseller: 'gradient-badge-bestseller text-white',
    'staff-pick': 'gradient-badge-staff text-white',
    deal: 'gradient-badge-deal text-white',
  };

  return (
    <div
      className={`
        absolute top-2 left-2
        px-2.5 py-1
        rounded-full
        text-[8px] font-bold uppercase tracking-wide
        shadow-badge
        z-10
        ${heroVariantStyles[variant]}
        ${className}
      `}
    >
      {text}
    </div>
  );
}

// Savings badge (for promotional pricing)
export function SavingsBadge({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div
      className={`
        absolute top-2 right-2
        px-2.5 py-1
        gradient-badge-sale text-white
        rounded-full
        text-[9px] font-bold
        shadow-badge
        z-10
        ${className}
      `}
    >
      {text}
    </div>
  );
}
