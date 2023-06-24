'use client';

import { Cursor } from '@my/components/Cursor';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import AppProvider from '@my/context/AppContext';
import CustomCursorProvider from '@my/context/CursorContext';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ScrollTriggerProxy from './ScrollTriggerProxy';

export default function ScrollProvider({ children }: { children: ReactNode }) {
   const containerRef = useRef(null);
   const cursorRef = useRef<HTMLDivElement>(null);

   const pathname = usePathname();
   useEffect(() => {
      window.history.scrollRestoration = 'manual';
   }, []);
   return (
      <AppProvider>
         <CustomCursorProvider>
            <LocomotiveScrollProvider
               options={{
                  smooth: true,
                  // ... all available Locomotive Scroll instance options
                  getDirection: true,
                  smartphone: {
                     smooth: true,
                  },
                  tablet: {
                     smooth: true,
                  },
               }}
               watch={[
                  // ..all the dependencies to watch to update the scroll.
                  //  Basicaly, to watch page/location changes
                  pathname,
               ]}
            >
               <ScrollTriggerProxy />
               <main data-scroll-container ref={containerRef}>
                  <Cursor
                     cursorType="hover"
                     isCursorDisabled={false}
                     cursorRef={cursorRef}
                  />
                  {children}
               </main>
            </LocomotiveScrollProvider>
         </CustomCursorProvider>
      </AppProvider>
   );
}
