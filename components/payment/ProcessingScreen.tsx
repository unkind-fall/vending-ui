export function ProcessingScreen() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="
        bg-card
        rounded-2xl
        shadow-lg
        p-12
        flex flex-col items-center gap-6
      ">
        {/* Spinner */}
        <div className="
          w-16 h-16
          border-4 border-divider
          border-t-primary
          rounded-full
          animate-spin
        " />

        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Processing payment...
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Please wait
          </p>
        </div>
      </div>
    </div>
  );
}
