import React from 'react';

export default function Intro() {
   return (
      <div className="overflow-hidden ">
         <section data-scroll-section className="py-32 ">
            <div className="m-auto px-2">
               <h1>
                  <span
                     className="text-9xl font-bold uppercase block"
                     data-scroll
                     data-scroll-speed="3"
                     data-scroll-direction="horizontal"
                     data-scroll-position="left"
                  >
                     Muhammad{' '}
                  </span>
                  <span
                     className="text-9xl font-bold uppercase block"
                     data-scroll
                     data-scroll-speed="-3"
                     data-scroll-direction="horizontal"
                     data-scroll-position="left"
                  >
                     Yousuf
                  </span>
               </h1>
               <h3
                  data-scroll
                  data-scroll-speed="1"
                  data-scroll-position="top"
                  className="text-3xl font-medium uppercase ml-1 mt-6"
               >
                  Front-end Developer
               </h3>
            </div>
         </section>
      </div>
   );
}
