import gsap from 'gsap';
import React, { FC } from 'react';

interface RevealAnimationProps {
   target: string;
   delay: number;
   duration?: number;
   yPercent?: number;
}

export const RevealAnimation = (
   target: string,
   delay: number,
   duration = 1.5,
   yPercent = 100
) => {
   gsap.from(target, {
      delay,
      duration,
      yPercent,
      ease: 'power4',
      stagger: 0.2,
   });
};
