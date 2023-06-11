'use client';

import { useGsap } from '@my/hooks';
import { gsap } from 'gsap';
import React, { useRef, type MouseEvent } from 'react';

type Props = {
   link: string;
   download?: boolean;
   children: React.ReactNode;
};

export function AnimatedLink({ link, download = false, children }: Props) {
   const linkRef = useRef<HTMLAnchorElement>(null);
   const circleRef = useRef<HTMLDivElement>(null);
   const gsapTimeline = useRef<gsap.core.Timeline | null>(null);

   useGsap(() => {
      gsapTimeline.current = gsap.timeline({ paused: true });
      gsapTimeline.current.fromTo(
         circleRef.current,
         { scale: 0 },
         { scale: 1, duration: 0.7 }
      );
   });

   const handleMouseEnter = (event: MouseEvent) => {
      if (circleRef.current && linkRef.current && gsapTimeline.current) {
         const linkBounding = linkRef.current.getBoundingClientRect();
         circleRef.current.style.left = `calc(${
            event.clientX - linkBounding.x
         }px - (25rem))`;
         circleRef.current.style.top = `calc(${
            event.clientY - linkBounding.y
         }px - (25rem))`;
         gsapTimeline.current.play();
      }
   };

   const handleMouseLeave = () => {
      if (gsapTimeline.current) {
         gsapTimeline.current.reverse();
      }
   };

   return (
      <a
         href={link}
         download={download}
         ref={linkRef}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         className="relative py-2 px-2 overflow-hidden rounded-[20rem] border-2 border-slate-900  text-center min-w-fit my-auto"
      >
         <div
            className="absolute h-40 w-40 rounded-[20rem] dark:bg-black"
            ref={circleRef}
         />
         <span className="text-white mix-blend-difference text-xl h-5">
            {children}
         </span>
      </a>
   );
}
