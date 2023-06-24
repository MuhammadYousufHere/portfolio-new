import { gsap } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { type RefObject } from 'react';
import s from './styles.module.css';

export const titleAnimation = (ref: RefObject<HTMLHeadingElement>) => {
   if (!ref.current) return;

   const lines = ref.current.querySelectorAll('.line');
   if (!lines?.length) return;

   gsap.to(lines, {
      scrollTrigger: {
         trigger: ref.current,
         start: 'top 60%',
      },
      duration: 0.5,
      rotateX: 0,
      y: 0,
      z: 0,
      opacity: 1,
      stagger: 0.08,
      ease: CustomEase.create(
         'custom',
         'M0,0 C0,0 0.025,0.603 0.45,0.84 0.694,0.976 1,1 1,1'
      ),
      onComplete: () => ref.current?.classList.add(s.detect),
   });
};
