'use client';

import LoaderProvider, {
   AppContext,
   type TAppContext,
} from '@my/context/AppContext';
import { motion } from 'framer-motion';
import { useContext, type ReactNode } from 'react';

export default function Loader({ children }: { children: ReactNode }) {
   const { setIsLoading }: TAppContext = useContext(AppContext);
   return (
      <LoaderProvider>
         <motion.div
            initial={{
               y: 0,
            }}
            animate={{
               y: '-100vh',
            }}
            transition={{
               delay: 1.2,
               duration: 0.3,
            }}
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-bg-dark z-50"
            onAnimationComplete={() => {
               setIsLoading(false);
            }}
         >
            <div className="my-0 mx-auto">{children}</div>
         </motion.div>
      </LoaderProvider>
   );
}
