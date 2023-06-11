import { useEffect, type ReactNode } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const PageWrapper = ({ children }: { children: ReactNode }) => {
   const { scroll } = useLocomotiveScroll();
   useEffect(() => {
      if (scroll) {
         scroll.setScroll(0, 0);
         scroll.update();
      }
   }, [scroll]);

   return children;
};

export default PageWrapper;
