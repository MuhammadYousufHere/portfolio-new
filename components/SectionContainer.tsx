import { type ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
   return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-screen-2xl xl:px-24">
         {children}
      </div>
   );
}
