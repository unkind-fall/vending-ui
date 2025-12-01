import { ReactNode } from 'react';

interface KioskContainerProps {
  children: ReactNode;
}

export function KioskContainer({ children }: KioskContainerProps) {
  return (
    <div className="w-full min-h-screen bg-bg-lavender flex justify-center items-start p-4">
      <div
        className="w-[540px] h-[960px] rounded-[32px] shadow-container relative overflow-hidden flex flex-col gradient-container border border-white/50"
      >
        {children}
      </div>
    </div>
  );
}
