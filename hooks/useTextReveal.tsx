import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, type RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function useTextReveal({
   refs,
}: {
   refs: RefObject<HTMLDivElement>[];
}) {
   const animations = useRef<gsap.core.Tween[]>([]);

   useEffect(() => {
      const duration = 0.7;
      const animationsArr: gsap.core.Tween[] = [];
      refs.forEach((ref) => {
         const element = ref.current;
         const animation = gsap.to(element, {
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
               trigger: element,
               start: 'center 70%',
               end: 'center 30%',
               markers: false,
               onEnter: () => {
                  gsap.to(element, {
                     y: -50,
                     duration,
                     opacity: 1,
                  });
               },
               onLeave: () => {
                  gsap.to(element, {
                     y: -100,
                     duration,
                     opacity: 0,
                  });
               },
               onEnterBack: () => {
                  gsap.to(element, {
                     y: -50,
                     duration,
                     opacity: 1,
                  });
               },
               onLeaveBack: () => {
                  gsap.to(element, {
                     y: 0,
                     duration,
                     opacity: 0,
                  });
               },
            },
         });

         animationsArr.push(animation);
      });

      animations.current = animationsArr;

      return () => {
         animationsArr.forEach((animation) => {
            if (animation.scrollTrigger) {
               animation.scrollTrigger.kill();
            }
         });
      };
   }, [refs]);

   return animations.current;
}
