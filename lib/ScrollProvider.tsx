'use client';

import React, { useEffect, useRef, type ReactNode } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { usePathname } from 'next/navigation';
import ScrollTriggerProxy from './ScrollTriggerProxy';

export default function ScrollProvider({ children }: { children: ReactNode }) {
   const containerRef = useRef(null);
   const pathname = usePathname();
   useEffect(() => {
      window.history.scrollRestoration = 'manual';
   }, []);
   return (
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
            // ..all the dependencies you want to watch to update the scroll.
            //  Basicaly, you would want to watch page/location changes
            //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)

            pathname,
         ]}
      >
         <ScrollTriggerProxy />
         <main data-scroll-container ref={containerRef}>
            {children}
         </main>
      </LocomotiveScrollProvider>
   );
}