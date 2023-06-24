import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';
import { type FC } from 'react';

interface Props extends HTMLMotionProps<'div'> {
   text: string;
   delay?: number;
   replay: boolean;
   duration?: number;
}

const WavyText: FC<Props> = ({
   text,
   delay = 0,
   duration = 0.05,
   replay,
   ...props
}: Props) => {
   const letters = Array.from(text);

   const container: Variants = {
      hidden: {
         opacity: 0,
      },
      visible: (i = 1) => ({
         opacity: 1,
         transition: { staggerChildren: duration, delayChildren: i * delay },
      }),
   };

   const child: Variants = {
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
      <motion.h1
         className="flex overflow-hidden"
         variants={container}
         initial="hidden"
         animate={replay ? 'visible' : 'hidden'}
         {...props}
      >
         {letters.map((letter, index) => (
            <motion.span key={+index} variants={child}>
               {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
         ))}
      </motion.h1>
   );
};

export default WavyText;
