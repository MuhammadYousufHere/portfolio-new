'use client';

import { useEffect } from 'react';

const $ = (selector) => document.querySelector(selector);

const initLocoScroll = async () => {
   'use client';

   try {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const dataScrollContainer = document.querySelector(
         '[data-scroll-container]'
      );

      if (!dataScrollContainer) {
         throw new Error(
            'locomotive-scroll: [data-scroll-container] dataset was not found. You likely forgot to add it which will prevent Locomotive Scroll to work.'
         );
      }

      window.locomotive = new LocomotiveScroll({
         el: dataScrollContainer ?? undefined,
         smooth: true,
      });

      setTimeout(() => window.locomotive?.update(), 500);
   } catch (error) {
      throw new Error(error);
   }
};

const useLocomotiveScroll = ({ location, ignore }) => {
   useEffect(() => {
      if (ignore) {
         $('body').style.overflow = 'auto';
         $('#__next').style.overflow = 'auto';
         window.locomotive = null;
      } else {
         $('body').style.overflow = 'hidden';
         $('#__next').style.overflow = 'hidden';
         initLocoScroll();
      }

      return () => {
         window.locomotive?.destroy();
      };
   }, [location, ignore]);
};

export { useLocomotiveScroll };
