'use client';

export function BottomBar() {
  return (
    <div className="
      mt-auto
      px-4 py-3
      bg-white
      border-t border-divider
      flex items-center justify-between
    ">
      {/* Help Button */}
      <button
        className="
          flex items-center gap-2
          px-4 py-2
          rounded-lg
          text-sm font-medium text-gray-600
          hover:bg-gray-100
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
        aria-label="Get help"
      >
        <span className="
          w-6 h-6
          rounded-full
          bg-gray-200
          flex items-center justify-center
          text-xs font-bold
        ">
          ?
        </span>
        <span>Help</span>
      </button>

      {/* QR Section */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500">Scan to pay with app</span>
        <div className="
          w-10 h-10
          bg-gray-100
          rounded-lg
          border border-divider
          flex items-center justify-center
          text-xs font-bold text-gray-400
        ">
          QR
        </div>
      </div>

      {/* Language Button */}
      <button
        className="
          flex items-center gap-1
          px-4 py-2
          rounded-lg
          text-sm font-medium text-gray-600
          hover:bg-gray-100
          transition-colors
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        "
        aria-label="Change language"
      >
        <span>EN</span>
        <span className="text-xs">▼</span>
      </button>
    </div>
  );
}
