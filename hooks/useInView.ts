import { useEffect, useState, type RefObject } from 'react';

type UseInViewProps = {
   elRef: RefObject<HTMLElement>;
   offset?: number;
};
export const useInView = ({ elRef, offset = 0 }: UseInViewProps) => {
   const [inView, setInView] = useState(true);
   const [lastYPos, setLastYPos] = useState(0);
   const [scrollUp, setScrollUp] = useState(false);

   useEffect(() => {
      function handleScroll() {
         if (!elRef.current) return;
         const elOffsetTop = elRef.current.offsetTop;
         const el = elRef.current?.getBoundingClientRect();
         const topTo = elOffsetTop + el.height;
         const vH = window.innerHeight;

         const yPos = window.scrollY;
         const isInView = lastYPos < topTo && el.y + offset < vH;
         const isScrollingUp = yPos < lastYPos;
         setInView(isInView);
         setLastYPos(yPos);
         setScrollUp(isScrollingUp);
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [lastYPos, elRef, offset]);

   return { inView, scrollUp, lastYPos };
};
