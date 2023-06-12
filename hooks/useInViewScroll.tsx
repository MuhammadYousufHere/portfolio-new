import { useMotionValue, useScroll, type MotionValue } from 'framer-motion';
import { useEffect, type RefObject } from 'react';

interface IOptions {
   threshold?: number;
}

/**
 * `useInViewScroll` returns a MotionValue that updates when the target element is visible in viewport
 */
export const useInViewScroll = (
   el: RefObject<HTMLElement>,
   options: IOptions = {}
): MotionValue<number> => {
   const progress = useMotionValue(0);
   const { scrollY } = useScroll();

   useEffect(() => {
      const handleScrollProgress = () => {
         const node = el.current;
         if (!node) return;

         const threshold = options.threshold || 0;

         const elPosY = node.getBoundingClientRect().top + scrollY.get();
         const elHeight = node.scrollHeight;

         const viewIntersect = Math.max(elPosY - window.innerHeight, 0);
         const current = scrollY.get() - viewIntersect - threshold;
         const total =
            Math.min(window.innerHeight, elPosY) + elHeight - threshold;

         const quotient = current / total;

         if (quotient > 0 && quotient < 1) {
            progress.set(quotient);
         }
      };

      handleScrollProgress();
      const unsubscribeFromScroll = scrollY.onChange(handleScrollProgress);

      return () => unsubscribeFromScroll();
   }, [el, options]);

   return progress;
};
