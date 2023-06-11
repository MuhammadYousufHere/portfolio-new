import { useEffect } from 'react';

export interface IUseVisibilityListener {
   onVisible?: () => void;
   onHidden?: () => void;
}

export function useVisibilityListener({
   onVisible,
   onHidden,
}: IUseVisibilityListener) {
   useEffect(() => {
      function visibilityListener() {
         if (document.visibilityState === 'visible') {
            onVisible?.();
         } else {
            onHidden?.();
         }
      }

      document.addEventListener('visibilitychange', visibilityListener);

      return () => {
         document.removeEventListener('visibilitychange', visibilityListener);
      };
   }, [onVisible, onHidden]);
}
