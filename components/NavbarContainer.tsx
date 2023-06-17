import { type PropsWithChildren } from 'react';

export default function NavbarContainer({ children }: PropsWithChildren) {
   return (
      <nav className="w-[70%] h-14 py-2 px-8 flex items-center justify-between absolute top-8 left-[14%] text-white  rounded-full bg-[linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.15))] dark:bg-[rgba(42,43,56,.5)]  border-[0.1em] ring-[0 8px 32px 0 rgba(255, 255, 255, 0.05)] border-[rgba(255, 255, 255, 0.2)] dark:border-[#2a2b37]">
         {children}
      </nav>
   );
}
