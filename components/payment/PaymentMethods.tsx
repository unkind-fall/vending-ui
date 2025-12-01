export function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <span className="text-sm text-gray-500 font-medium">
        Accepted payment methods
      </span>
      <div className="flex items-center gap-4">
        <div
          className="
            w-12 h-12
            rounded-xl
            bg-gray-100
            flex items-center justify-center
            text-2xl
          "
          title="Credit/Debit Card"
        >
          💳
        </div>
        <div
          className="
            w-12 h-12
            rounded-xl
            bg-gray-100
            flex items-center justify-center
            text-2xl
          "
          title="Mobile Pay"
        >
          📱
        </div>
        <div
          className="
            w-12 h-12
            rounded-xl
            bg-gray-100
            flex items-center justify-center
            text-2xl
          "
          title="Cash"
        >
          💵
        </div>
      </div>
    </div>
  );
}
