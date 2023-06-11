/* eslint-disable security/detect-object-injection */

'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface IAnimatedImageSwapProps {
   imgSources: string[];

   swapDelay?: number;
}

export default function AnimatedImageSwap({
   imgSources,
   swapDelay = 5000,
}: IAnimatedImageSwapProps) {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentImageIndex((state) =>
            state >= imgSources.length - 1 ? 0 : state + 1
         );
      }, swapDelay);

      return () => {
         clearInterval(intervalId);
      };
   }, [imgSources, swapDelay]);

   return (
      <AnimatePresence>
         {imgSources[currentImageIndex] ? (
            <motion.div
               key={imgSources[currentImageIndex]}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.5 }}
            >
               <Image src={imgSources[currentImageIndex]} alt="image" />
            </motion.div>
         ) : null}
      </AnimatePresence>
   );
}
