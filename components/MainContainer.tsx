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
      <div
         className="h-screen dark:bg-bg-dark "
         style={{
            backgroundImage:
               'linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)',
         }}
      >
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
