import { motion } from 'framer-motion';

const AnimatedLetters = ({
   text,
   delay = 1,
   duration = 0.05,
   ...props
}: {
   text: string;
   delay: number;
   duration: number;
}) => {
   const letters = Array.from(text);

   const container = {
      hidden: {
         opacity: 0,
      },
      visible: (i = 1) => ({
         opacity: 1,
         transition: { staggerChildren: duration, delayChildren: i * delay },
      }),
   };

   const child = {
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
         },
      },
      hidden: {
         opacity: 0,
         y: 20,
         transition: {
            type: 'spring',
            damping: 12,
            stiffness: 200,
         },
      },
   };

   return (
      <motion.h2
         style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            overflow: 'hidden',
         }}
         variants={container}
         initial="hidden"
         animate="visible"
         {...props}
      >
         {letters.map((letter) => (
            <motion.span key={letter} variants={child}>
               {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
         ))}
      </motion.h2>
   );
};

export { AnimatedLetters };
