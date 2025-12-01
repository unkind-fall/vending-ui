export function PromoBanner() {
  return (
    <div className="w-full px-4 pt-4 pb-2 animate-fade-in">
      <div
        className="
          relative
          w-full
          aspect-video
          max-h-[286px]
          rounded-3xl
          border border-border
          flex flex-col items-center justify-center
          gap-3
          overflow-hidden
          bg-bg-card
          shadow-card
          group
        "
      >
        {/* Background Gradient/Mesh (Light Mode) */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-bg-card to-accent-cyan/5 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

        {/* Animated Glow */}
        <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 animate-shimmer" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan tracking-tight drop-shadow-sm">
            16:9 Promo Image
          </span>
          <span
            className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-text-muted border border-border shadow-sm"
          >
            508 × 286
          </span>
        </div>

        {/* Glossy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
