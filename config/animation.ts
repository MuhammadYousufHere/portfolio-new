const DURATIONS = {
   VeryFast: 0.3,
   Fast: 0.6,
   Normal: 0.8,
   Slow: 1.2,
   VerySlow: 1.8,
};
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
   initial: {
      y: 60,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: DURATIONS.Fast,
         ease: easing,
      },
   },
};

const fadeInUpSlower = {
   initial: {
      y: 80,
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: DURATIONS.Normal,
         ease: easing,
      },
   },
};

const letterSpace = {
   initial: {
      opacity: 0,
   },
   animate: {
      letterSpacing: ['0px', '-10px', '0px'],
      opacity: 1,
      transition: {
         duration: DURATIONS.Slow,
         ease: easing,
      },
   },
};

const simpleOpacity = {
   initial: {
      opacity: 0,
   },
   animate: {
      opacity: 1,
      transition: {
         duration: DURATIONS.Fast,
         ease: easing,
      },
   },
};

const scaleUp = {
   initial: {
      scale: 0,
      opacity: 0,
   },
   animate: {
      opacity: [0, 1],
      scale: [1, 1.05, 1],
      transition: {
         duration: DURATIONS.VerySlow,
         ease: easing,
      },
   },
   lightMode: {
      opacity: [0, 1],
      scale: [0.99, 1.05, 1],
      transition: {
         duration: DURATIONS.VerySlow,
         ease: easing,
      },
   },
};

const menuAnim = {
   show: {
      y: 0,
      opacity: 1,
      transition: {
         ease: easing,
         duration: DURATIONS.VeryFast,
      },
   },
   hide: {
      opacity: 0,
      y: -100,
      transition: {
         ease: easing,
         duration: DURATIONS.VeryFast,
      },
   },
};

const avatarAnimation = {
   initial: {
      opacity: 0,
      y: 60,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: DURATIONS.Fast,
         ease: easing,
      },
   },
   exit: {
      opacity: 0,
   },
};

const stagger = {
   animate: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};
const galleryStagger = {
   animate: {
      transition: {
         staggerChildren: 0.2,
      },
   },
};
export const bodyVariants = {
   hidden: {
      opacity: 0,
      y: 80,
      transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         staggerChildren: 0.6,
         type: 'spring',
         stiffness: 80,
         delay: 0.6,
      },
   },
};
export const childVariants = {
   hidden: {
      opacity: 0,
      y: 80,
      transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         stiffness: 80,
         delay: 0.6,
      },
   },
};

export const navVariants = {
   hidden: {
      opacity: 0,
      y: 80,
      transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         stiffness: 80,
         delay: 0.6,
      },
   },
};

export const slideIn = (
   direction: string,
   type: string,
   delay: number,
   duration: number
) => ({
   hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
   },
   show: {
      x: 0,
      y: 0,
      transition: {
         type,
         delay,
         duration,
         ease: 'easeOut',
      },
   },
});

export const staggerContainer = (
   staggerChildren: number,
   delayChildren: number
) => ({
   hidden: {},
   show: {
      transition: {
         staggerChildren,
         delayChildren,
      },
   },
});

export const textVariant = (delay: number) => ({
   hidden: {
      y: 50,
      opacity: 0,
   },
   show: {
      y: 0,
      opacity: 1,
      transition: {
         type: 'spring',
         duration: 1.25,
         delay,
      },
   },
});

export const textContainer = {
   hidden: {
      opacity: 0,
      // color: 'blue',
   },
   show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
      // color: 'red'
   }),
};

export const hoverTextContainer = {
   // hidden: {
   //   opacity: 0,
   //   scale: 1,
   // },
   show: {
      scale: 1.2,
      rotate: -5,
      transition: { duration: 0.2, ease: 'easeOut' },
   },
};

export const hoverTextVariant = {
   hidden: {
      opacity: 0,
      y: 20,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'tween',
         ease: 'easeIn',
      },
   },
};
export const textVariant2 = {
   hidden: {
      opacity: 0,
      y: 20,
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'tween',
         ease: 'easeIn',
      },
   },
};

export const fadeIn = (
   direction: string,
   type: string,
   delay: number,
   duration: number
) => ({
   hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
   },
   show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
         type,
         delay,
         duration,
         ease: 'easeOut',
      },
   },
});

export const planetVariants = (direction: string) => ({
   hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
   },
   show: {
      x: 0,
      rotate: 0,
      transition: {
         type: 'spring',
         duration: 1.8,
         delay: 0.5,
      },
   },
});

export const zoomIn = (delay: number, duration: string) => ({
   hidden: {
      scale: 0,
      opacity: 0,
   },
   show: {
      scale: 1,
      opacity: 1,
      transition: {
         type: 'tween',
         delay,
         duration,
         ease: 'easeOut',
      },
   },
});

export const footerVariants = {
   hidden: {
      opacity: 0,
      y: 50,
      transition: {
         type: 'spring',
         stiffness: 300,
         damping: 140,
      },
   },
   show: {
      opacity: 1,
      y: 0,
      transition: {
         type: 'spring',
         stiffness: 80,
         delay: 0.5,
      },
   },
};

export const fade = {
   initial: { opacity: 0 },
   enter: {
      opacity: 1,
      transition: { duration: 0.65, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
   exit: {
      opacity: 0,
      transition: { duration: 0.65, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
};

export const reveal = {
   initial: { y: '110%' },
   enter: {
      y: 0,
      transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
   exit: {
      y: '110%',
      transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
};

export const revealOut = {
   initial: { y: 0 },
   enter: {
      y: '110%',
      transition: { duration: 1.2, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
   exit: {
      y: 0,
      transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
};

export const scale = {
   initial: { scale: 1.2 },
   enter: {
      scale: 1,
      transition: { duration: 1.3, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
   exit: {
      scale: 1.2,
      transition: { duration: 1, delay: 3.4, ease: [0.83, 0, 0.17, 1] },
   },
};
export {
   DURATIONS,
   easing,
   fadeInUp,
   fadeInUpSlower,
   letterSpace,
   stagger,
   galleryStagger,
   simpleOpacity,
   menuAnim,
   scaleUp,
   avatarAnimation,
};
