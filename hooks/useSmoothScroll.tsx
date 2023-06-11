/* eslint-disable new-cap */
/* eslint-disable prefer-const */
/* eslint-disable sonarjs/cognitive-complexity */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export default function useLocoScroll() {
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const locomotiveScroll =
         typeof window !== `undefined`
            ? require('locomotive-scroll').default
            : null;
      let locoScroll: any;
      if (document === undefined) return;
      const scrollEl = document.querySelector('#main-container');

      if (!scrollEl) return;

      locoScroll = new locomotiveScroll({
         el: scrollEl,
         smooth: true,
         reloadOnContextChange: true,
         multiplier: 1,
      });

      locoScroll.on('scroll', () => {
         console.log('scroll');
         ScrollTrigger.update();
      });

      ScrollTrigger.scrollerProxy(scrollEl, {
         scrollTop(value) {
            if (locoScroll) {
               return arguments.length
                  ? locoScroll.scrollTo(value, 0, 0)
                  : locoScroll.scroll.instance.scroll.y;
            }
            return null;
         },
         scrollLeft(value) {
            if (locoScroll) {
               return arguments.length
                  ? locoScroll.scrollTo(value, 0, 0)
                  : locoScroll.scroll.instance.scroll.x;
            }
            return null;
         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
         getBoundingClientRect() {
            return {
               top: 0,
               left: 0,
               width: window.innerWidth,
               height: window.innerHeight,
            };
         },
         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
         pinType: (scrollEl as HTMLElement).style.transform
            ? 'transform'
            : 'fixed',
      });

      const lsUpdate = () => {
         console.log('Update!');
         if (locoScroll) {
            locoScroll.update();
         }
      };
      window.addEventListener('resize', lsUpdate);
      window.addEventListener('load', lsUpdate);
      ScrollTrigger.addEventListener('refresh', lsUpdate);

      ScrollTrigger.refresh();

      // return () => {
      //     if (locoScroll) {
      //         ScrollTrigger.removeEventListener('refresh', lsUpdate);
      //         locoScroll.destroy();
      //         locoScroll = null;
      //     }
      // }
   }, []);
}
