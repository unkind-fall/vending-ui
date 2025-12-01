interface BadgeProps {
  text: string;
  icon?: string;
  bgColor: string;
  textColor: string;
  className?: string;
}

export function Badge({ text, icon, bgColor, textColor, className = '' }: BadgeProps) {
  return (
    <div
      className={`
        absolute top-2 left-2
        flex items-center gap-1
        px-2 py-1
        rounded-md
        text-[10px] font-bold uppercase
        z-10
        ${className}
      `}
      style={{ background: bgColor, color: textColor }}
    >
      {icon && <span className="text-xs">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}

// Hero badge variant (for featured products)
export function HeroBadge({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div
      className={`
        absolute top-2 left-2
        px-2 py-1
        bg-accent text-white
        rounded-md
        text-[8px] font-bold uppercase
        z-10
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
        px-2 py-1
        bg-error-text text-white
        rounded-md
        text-[10px] font-bold
        z-10
        ${className}
      `}
    >
      {text}
    </div>
  );
}
