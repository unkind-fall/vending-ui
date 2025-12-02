'use client';

export function BottomBar() {
  return (
    <div className="
      mt-auto
      px-5 py-3
      bg-bg-card/80
      backdrop-blur-md
      border-t border-border
      flex items-center justify-between
      shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)]
    ">
      {/* Help Button */}
      <button
        className="
          flex items-center gap-2
          px-2.5 py-1.5
          rounded-lg
          text-xs font-semibold text-text-primary
          hover:bg-bg-subtle
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          group
        "
        aria-label="Get help"
      >
        <span className="
          w-7 h-7
          rounded-full
          bg-gradient-to-br from-primary to-primary-deep
          flex items-center justify-center
          text-sm font-bold text-white
          shadow-active
          group-hover:scale-110
          transition-all duration-300 ease-spring
        ">
          ?
        </span>
        <span className="font-display tracking-tight text-text-secondary group-hover:text-text-primary transition-colors">Help</span>
      </button>

      {/* QR Section */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-text-muted">Scan to pay with app</span>
        <div className="
          w-10 h-10
          bg-white
          rounded-lg
          flex items-center justify-center
          shadow-sm
          border border-border
          overflow-hidden
        ">
          {/* Mock QR Code Pattern */}
          <div className="w-full h-full bg-white p-0.5">
            <div className="w-full h-full border border-text-primary border-dashed opacity-20" />
          </div>
        </div>
      </div>

      {/* Language Button */}
      <button
        className="
          flex items-center gap-1.5
          px-3 py-2
          rounded-lg
          text-xs font-semibold text-text-primary
          bg-bg-subtle
          border border-border
          hover:bg-white hover:shadow-sm
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
        aria-label="Change language"
      >
        <span className="font-display">EN</span>
        <span className="text-text-muted text-[9px]">▼</span>
      </button>
    </div>
  );
}
