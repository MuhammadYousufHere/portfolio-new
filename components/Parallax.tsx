import {
   motion,
   useReducedMotion,
   useSpring,
   useTransform,
   useViewportScroll,
} from 'framer-motion';
import { useLayoutEffect, useRef, useState, type ReactNode } from 'react';

type ParallaxProps = {
   children: ReactNode;
   offset: number;
   clampInitial: boolean;
   clampFinal: boolean;
};

export function Parallax({
   children,
   offset = 50,
   clampInitial,
   clampFinal,
}: ParallaxProps) {
   const prefersReducedMotion = useReducedMotion();
   const [elementTop, setElementTop] = useState(0);
   const [clientHeight, setClientHeight] = useState(0);
   const ref = useRef<HTMLDivElement>(null);

   const { scrollY } = useViewportScroll();

   const initial = elementTop - clientHeight;
   const final = elementTop + offset;

   const yRange = useTransform(
      scrollY,
      [initial, final],
      [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
   );
   const y = useSpring(yRange, { stiffness: 400, damping: 90 });

   useLayoutEffect(() => {
      const onResize = () => {
         if (ref.current) {
            setElementTop(
               ref.current.getBoundingClientRect().top + window.scrollY ||
                  window.pageYOffset
            );
         }
         setClientHeight(window.innerHeight);
      };
      onResize();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
   }, [ref]);

   // Don't parallax if the user has "reduced motion" enabled
   if (prefersReducedMotion) {
      return { children };
   }

   return (
      <motion.div ref={ref} style={{ y }}>
         {children}
      </motion.div>
   );
}
