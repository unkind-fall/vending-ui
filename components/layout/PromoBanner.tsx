export function PromoBanner() {
  return (
    <div className="w-full px-4 pt-4">
      <div
        className="
          w-full
          aspect-video
          max-h-[286px]
          bg-gradient-to-br from-primary/10 to-accent/10
          rounded-xl
          border-2 border-dashed border-divider
          flex flex-col items-center justify-center
          gap-2
        "
      >
        <span className="text-lg font-semibold text-gray-500">
          16:9 Promo Image
        </span>
        <span className="text-sm text-gray-400">
          508 × 286
        </span>
      </div>
    </div>
  );
}
