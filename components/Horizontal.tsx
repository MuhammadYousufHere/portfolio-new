'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { Pro } from './Projects/Projects';

gsap.registerPlugin(ScrollTrigger);
export default function Horizontal() {
   const triggerRef = useRef<HTMLDivElement>(null);
   const sectionRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const pin = gsap.fromTo(
         sectionRef.current,
         { translateX: 0 },
         {
            translateX: '-300vw',
            ease: 'none',
            duration: 1,
            scrollTrigger: {
               trigger: triggerRef.current,
               start: 'top top',
               end: '2000 top',
               scrub: 0.6,
               pin: true,
            },
         }
      );
      return () => {
         pin.kill();
      };
   }, []);
   return (
      <section className="h-screen dark:bg-white dark:text-dark">
         <main ref={triggerRef}>
            <div ref={sectionRef} className="h-screen w-[400vw] flex relative">
               {/* <div
                  data-scroll
                  className="dark:bg-white h-screen w-screen flex items-center justify-center border"
               >
                  <h1> Section 1</h1>
               </div> */}
               <Pro />
            </div>
         </main>
      </section>
   );
}
