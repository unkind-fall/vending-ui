import { ReactNode } from 'react';

interface KioskContainerProps {
  children: ReactNode;
}

export function KioskContainer({ children }: KioskContainerProps) {
  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-start p-2.5">
      <div className="w-[540px] h-[960px] bg-background rounded-[20px] shadow-lg relative overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
}
