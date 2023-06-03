'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import Header from './Header';
import SectionContainer from './SectionContainer';

interface Props {
   children: ReactNode;
}

export default function MainLayout({ children }: Props) {
   const variants = {
      hidden: { opacity: 0, x: -200 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 0 },
   };

   return (
      <div className="flex h-screen flex-col justify-between dark:bg-bg-dark">
         <SectionContainer>
            <Header />
            <motion.main
               className="mb-auto bg-transparent"
               initial="hidden"
               animate="enter"
               exit="exit"
               variants={variants}
               transition={{ type: 'linear' }}
            >
               {children}
            </motion.main>
            {/* <Footer /> */}
         </SectionContainer>
      </div>
   );
}
