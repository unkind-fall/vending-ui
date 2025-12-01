'use client';

export function BottomBar() {
  return (
    <div className="
      mt-auto
      px-6 py-4
      bg-white/80
      backdrop-blur-md
      border-t border-primary/5
      flex items-center justify-between
      shadow-[0_-4px_20px_-4px_rgba(124,58,237,0.05)]
    ">
      {/* Help Button */}
      <button
        className="
          flex items-center gap-2.5
          px-3 py-2
          rounded-xl
          text-sm font-semibold text-text-primary
          hover:bg-primary-light/50
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          group
        "
        aria-label="Get help"
      >
        <span className="
          w-9 h-9
          rounded-full
          gradient-primary
          flex items-center justify-center
          text-lg font-bold text-white
          shadow-button
          group-hover:shadow-button-hover
          group-hover:scale-110
          transition-all duration-300 ease-spring
        ">
          ?
        </span>
        <span className="font-display tracking-tight">Help</span>
      </button>

      {/* QR Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-text-secondary/80">Scan to pay with app</span>
        <div className="
          w-12 h-12
          bg-white
          rounded-xl
          border-2 border-dashed border-accent-cyan/30
          flex items-center justify-center
          text-xs font-bold text-accent-cyan
          shadow-sm
        ">
          QR
        </div>
      </div>

      {/* Language Button */}
      <button
        className="
          flex items-center gap-2
          px-4 py-2.5
          rounded-xl
          text-sm font-semibold text-text-primary
          bg-white
          border border-primary/10
          shadow-soft
          hover:shadow-hover hover:border-primary/20
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
        aria-label="Change language"
      >
        <span className="font-display">EN</span>
        <span className="text-primary/60 text-[10px]">▼</span>
      </button>
    </div>
  );
}
