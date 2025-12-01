'use client';

export function BottomBar() {
  return (
    <div className="
      mt-auto
      px-6 py-4
      bg-bg-card/80
      backdrop-blur-md
      border-t border-border
      flex items-center justify-between
      shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.05)]
    ">
      {/* Help Button */}
      <button
        className="
          flex items-center gap-2.5
          px-3 py-2
          rounded-xl
          text-sm font-semibold text-text-primary
          hover:bg-bg-subtle
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          group
        "
        aria-label="Get help"
      >
        <span className="
          w-9 h-9
          rounded-full
          bg-gradient-to-br from-primary to-primary-deep
          flex items-center justify-center
          text-lg font-bold text-white
          shadow-active
          group-hover:scale-110
          transition-all duration-300 ease-spring
        ">
          ?
        </span>
        <span className="font-display tracking-tight text-text-secondary group-hover:text-text-primary transition-colors">Help</span>
      </button>

      {/* QR Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-text-muted">Scan to pay with app</span>
        <div className="
          w-12 h-12
          bg-white
          rounded-xl
          flex items-center justify-center
          shadow-sm
          border border-border
          overflow-hidden
        ">
          {/* Mock QR Code Pattern */}
          <div className="w-full h-full bg-white p-1">
            <div className="w-full h-full border-2 border-text-primary border-dashed opacity-20" />
          </div>
        </div>
      </div>

      {/* Language Button */}
      <button
        className="
          flex items-center gap-2
          px-4 py-2.5
          rounded-xl
          text-sm font-semibold text-text-primary
          bg-bg-subtle
          border border-border
          hover:bg-white hover:shadow-sm
          transition-all duration-300 ease-spring
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
        aria-label="Change language"
      >
        <span className="font-display">EN</span>
        <span className="text-text-muted text-[10px]">▼</span>
      </button>
    </div>
  );
}
