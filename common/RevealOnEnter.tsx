import { m } from 'framer-motion';
import { type PropsWithChildren } from 'react';

interface IProps {
   duration?: number;
   className?: string;
   delay?: number;
   once?: boolean;
}
export default function RevealOnEnter({
   children,
   duration,
   className,
   delay,
   once,
}: PropsWithChildren<IProps>) {
   return (
      <div className={`relative overflow-hidden ${className}`}>
         <m.div
            initial="none"
            whileInView="block"
            viewport={{ once: !once, margin: '50px' }}
            transition={{
               duration: duration || 0.5,
               ease: [0.83, 0, 0.17, 1],
               delay: delay || 0,
            }}
            className="w-full"
            variants={{
               block: { y: 0 },
               none: { y: '100%' },
            }}
         >
            {children}
         </m.div>
      </div>
   );
}
