'use client';

import { motion } from 'framer-motion';

const AnimatedTextWord = ({ text }: { text: string }) => {
   const words = text.split(' ');

   const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
         opacity: 1,
         transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
      }),
   };

   const child = {
      visible: {
         opacity: 1,
         x: 0,
         transition: {
            type: 'spring',
            damping: 24,
            stiffness: 100,
         },
      },
      hidden: {
         opacity: 0,
         x: 20,
         transition: {
            type: 'spring',
            damping: 24,
            stiffness: 100,
         },
      },
   };

   return (
      <motion.div
         style={{
            overflow: 'hidden',
            display: 'flex',
            fontSize: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
         }}
         className="text-4xl tracking-wide font-medium"
         variants={container}
         initial="hidden"
         animate="visible"
      >
         {words.map((word) => (
            <motion.span
               variants={child}
               style={{ marginRight: '5px' }}
               key={word}
            >
               {word}
            </motion.span>
         ))}
      </motion.div>
   );
};

export default AnimatedTextWord;
