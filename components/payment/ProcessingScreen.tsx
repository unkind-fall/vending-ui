export function ProcessingScreen() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="
        bg-white
        rounded-xl
        shadow-hover
        border border-primary/10
        p-12
        flex flex-col items-center gap-6
      ">
        {/* Spinner */}
        <div className="
          w-16 h-16
          border-[5px] border-primary-light
          border-t-primary
          rounded-full
          animate-spin
        " />

        <div className="text-center">
          <h2 className="text-xl font-bold text-text-primary">
            Processing payment...
          </h2>
          <p className="text-sm font-medium text-text-secondary mt-2">
            Please wait
          </p>
        </div>
      </div>
    </div>
  );
}
