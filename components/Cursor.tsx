/* eslint-disable no-param-reassign */

'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, type RefObject } from 'react';

export type CursorTypes = 'normal' | 'left' | 'right' | 'hover';

interface CursorProps {
   isCursorDisabled?: boolean;
   cursorType: CursorTypes;
   cursorRef: RefObject<HTMLDivElement>;
}

export function Cursor({
   isCursorDisabled,
   cursorType,
   cursorRef,
}: CursorProps) {
   const x = useRef<number>(-100);
   const y = useRef<number>(-100);

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const mouseMoveEvent = (e: any) => {
      x.current = e.clientX;
      y.current = e.clientY;
      if (cursorRef.current) {
         cursorRef.current.style.top = `${y.current}px`;
         cursorRef.current.style.left = `${x.current}px`;
      }
   };

   useEffect(() => {
      if (cursorRef.current) {
         cursorRef.current.style.top = `${y.current}px`;
         cursorRef.current.style.left = `${x.current}px`;
      }
      document.addEventListener('mousemove', mouseMoveEvent);
      return () => {
         document.removeEventListener('mousemove', mouseMoveEvent);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div
         ref={cursorRef}
         className="fixed mix-blend-difference pointer-events-none z-[999999]"
      >
         <motion.div
            animate={{
               rotate:
                  cursorType === 'hover'
                     ? 45
                     : cursorType === 'left'
                     ? 180 + 45
                     : cursorType === 'right'
                     ? 45
                     : 0,
               scale:
                  cursorType === 'hover'
                     ? 1.5
                     : cursorType === 'left' || cursorType === 'right'
                     ? 7
                     : 1,
               opacity: isCursorDisabled ? 0 : 1,
            }}
            className="h-4 w-4 rounded-full bg-white flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
         >
            <motion.svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20"
               vectorEffect="non-scaling-stroke"
               style={{ transform: 'rotate(-45deg)' }}
               className="origin-center"
               animate={{
                  opacity:
                     cursorType === 'left' || cursorType === 'right' ? 1 : 0,
               }}
            >
               <line
                  y1="10"
                  x2="20"
                  y2="10"
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
               />
               <polyline
                  points="10 20 20 10 10 0"
                  fill="none"
                  stroke="#000"
                  strokeMiterlimit="10"
                  strokeWidth="0.5"
               />
            </motion.svg>
         </motion.div>
      </div>
   );
}
