export function PromoBanner() {
  return (
    <div className="w-full px-4 pt-4 pb-2">
      <div
        className="
          w-full
          aspect-video
          max-h-[286px]
          rounded-2xl
          border border-primary/5
          flex flex-col items-center justify-center
          gap-3
          overflow-hidden
          gradient-promo
          shadow-card
        "
      >
        <span className="text-3xl font-display font-bold text-primary/80 tracking-tight">
          16:9 Promo Image
        </span>
        <span
          className="text-sm font-display font-medium px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md text-text-secondary border border-white/50 shadow-sm"
        >
          508 × 286
        </span>
      </div>
    </div>
  );
}
