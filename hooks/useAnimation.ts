import { useAppContext } from '@my/context/AppContext';
import { useEffect } from 'react';

export const useAnimation = (animation: () => void) => {
   const { locoScroll } = useAppContext();

   useEffect(() => {
      if (locoScroll) {
         animation();
      }
   }, [locoScroll, animation]);
};
