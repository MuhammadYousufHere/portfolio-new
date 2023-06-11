import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useSkewAnimate = (skewElem: string) => {
   const proxy = { skew: 0 };
   const skewSetter = gsap.quickSetter(skewElem, 'skewY', 'deg'); // fast
   const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

   ScrollTrigger.create({
      onUpdate: (self) => {
         const skew = clamp(self.getVelocity() / -300);
         // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
         if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
               skew: 0,
               duration: 0.8,
               ease: 'power3',
               overwrite: true,
               onUpdate: () => skewSetter(proxy.skew),
            });
         }
      },
   });

   // make the right edge "stick" to the scroll bar. force3D: true improves performance
   gsap.set(skewElem, { transformOrigin: 'right center', force3D: true });
};
