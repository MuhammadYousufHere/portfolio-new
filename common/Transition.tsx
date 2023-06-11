'use client';

import { motion, useIsPresent } from 'framer-motion';
import { type ReactNode } from 'react';

const animationConfig = {
   initial: { transform: 'scaleX(1)' },
   animate: { transform: 'scaleX(0)' },
   exit: { transform: 'scaleX(1)' },
};

function Transition({ children }: { children: ReactNode }) {
   const isPresent = useIsPresent();

   return (
      <motion.div
         variants={animationConfig}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={{ duration: 1 }}
         className="transition"
         style={{
            originX: isPresent ? 0 : 1,
         }}
      >
         {children}
      </motion.div>
   );
}

export default Transition;
