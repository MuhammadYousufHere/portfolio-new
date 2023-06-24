import { type PropsWithChildren } from '@my/types/common';
import { m } from 'framer-motion';

interface IProps {
   duration: number;
   className: string;
   delay: number;
   once: boolean;
}

export default function FadeOnEnter({
   children,
   duration,
   className,
   delay,
}: PropsWithChildren<IProps>) {
   return (
      <div className={`relative overflow-hidden ${className}`}>
         <m.div
            initial="none"
            whileInView="block"
            viewport={{ once: true }}
            transition={{
               duration: duration || 0.7,
               ease: [0.83, 0, 0.17, 1],
               delay: delay || 0,
            }}
            className="w-full opacity-0"
            variants={{
               block: { opacity: 1 },
               none: { opacity: 0 },
            }}
         >
            {children}
         </m.div>
      </div>
   );
}
