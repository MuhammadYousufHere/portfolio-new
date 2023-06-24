import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, useState, type RefObject } from 'react';

export const useFadeIn = <El extends Element = HTMLDivElement>(
   onComplete?: () => void,
   delay?: number
): [RefObject<El>, gsap.plugins.ScrollTriggerInstance | undefined] => {
   const targetRef = useRef<El>(null);
   const [scrollTriggerInstance, setScrollTriggerInstance] =
      useState<gsap.plugins.ScrollTriggerInstance>();

   useEffect(() => {
      let ctx: ScrollTrigger;
      if (targetRef.current) {
         const tl = gsap.timeline({
            delay: delay ?? 0,
            onComplete,
         });

         tl.fadeIn(targetRef.current.children, {
            stagger: 0.15,
            y: 30,
         });

         ctx = ScrollTrigger.create({
            trigger: targetRef.current,
            once: true,
            animation: tl,
         });
         setScrollTriggerInstance(ctx);
      }
      return () => ctx.kill();
   }, [onComplete, delay]);

   return [targetRef, scrollTriggerInstance];
};
