'use client';

import { Cursor } from '@my/components/Cursor';
import AppProvider from '@my/context/AppContext';
import CustomCursorProvider from '@my/context/CursorContext';
import { PageProvider } from '@my/context/pageContext';
import { useRef, type ReactNode } from 'react';

export default function ScrollProvider({ children }: { children: ReactNode }) {
   const cursorRef = useRef<HTMLDivElement>(null);

   return (
      <AppProvider>
         <PageProvider>
            <CustomCursorProvider>
               <Cursor
                  cursorType="normal"
                  isCursorDisabled={false}
                  cursorRef={cursorRef}
               />
               {children}
            </CustomCursorProvider>
         </PageProvider>
      </AppProvider>
   );
}
