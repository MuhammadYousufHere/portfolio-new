import { gsap } from 'gsap';
import { useLayoutEffect, type EffectCallback } from 'react';

const useGsap = (gsapCallbackAnimation: EffectCallback): void => {
   useLayoutEffect(() => {
      const gsapContext: gsap.Context = gsap.context(gsapCallbackAnimation);
      return () => gsapContext.revert();
   }, []);
};

export { useGsap };
