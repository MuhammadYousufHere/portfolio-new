'use client';

import { useInView } from '@my/hooks';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, type PropsWithChildren } from 'react';

const dynamicOrderVariants = {
   visible: (custom = 0) => ({
      opacity: 1,
      transition: { delay: custom * 0.2 },
      translateY: 0,
   }),
   hidden: { opacity: 0, translateY: 50 },
};
type Props = {
   order: number;
};
export const SlideUpTransition = ({
   children,
   order = 0,
}: PropsWithChildren<Props>) => {
   const ref = useRef<HTMLDivElement>(null);
   const { inView } = useInView({ elRef: ref, offset: 50 });
   const controls = useAnimation();

   useEffect(() => {
      if (inView) {
         controls.start('visible');
      }
   }, [controls, inView]);

   return (
      <motion.div
         ref={ref}
         custom={order}
         variants={dynamicOrderVariants}
         initial="hidden"
         animate={controls}
      >
         {children}
      </motion.div>
   );
};
