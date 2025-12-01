export function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <span className="text-sm font-semibold text-text-secondary">
        Accepted payment methods
      </span>
      <div className="flex items-center gap-4">
        <div
          className="
            w-12 h-12
            rounded-lg
            bg-primary-light
            border border-primary/10
            flex items-center justify-center
            text-2xl
            transition-all duration-200 ease-spring
            hover:shadow-soft hover:scale-105 hover:border-primary/30
          "
          title="Credit/Debit Card"
        >
          💳
        </div>
        <div
          className="
            w-12 h-12
            rounded-lg
            bg-primary-light
            border border-primary/10
            flex items-center justify-center
            text-2xl
            transition-all duration-200 ease-spring
            hover:shadow-soft hover:scale-105 hover:border-primary/30
          "
          title="Mobile Pay"
        >
          📱
        </div>
        <div
          className="
            w-12 h-12
            rounded-lg
            bg-primary-light
            border border-primary/10
            flex items-center justify-center
            text-2xl
            transition-all duration-200 ease-spring
            hover:shadow-soft hover:scale-105 hover:border-primary/30
          "
          title="Cash"
        >
          💵
        </div>
      </div>
    </div>
  );
}
