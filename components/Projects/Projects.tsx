'use client';

// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { Card } from './Card';
import { DATA } from './data';

gsap.registerPlugin(ScrollTrigger);

export function ScrollSection() {
   const scroller = useRef<HTMLDivElement>(null);
   const skills = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const skillSet = gsap.utils.toArray('.skill-set');

      const to = gsap.to(skillSet, {
         xPercent: () => -100 * (skillSet.length - 1),
         ease: 'none',
         scrollTrigger: {
            trigger: scroller.current,
            markers: false,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            snap: 1 / (skillSet.length - 1),

            end: () => `+=${window.innerWidth}`,
         },
      });

      return () => {
         to.kill();
      };
   }, []);

   return (
      <section className="overflow-hidden flex">
         <div className="overflow-hidden ">
            <Card />
            <div
               id="skills"
               ref={scroller}
               className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
            >
               {DATA.map((item) => (
                  <section
                     key={item.title}
                     ref={skills}
                     className="skill-set w-full h-full grid gap-1 lg:py-0 lg:p-20"
                     style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 2fr)',
                     }}
                  >
                     <div className="flex h-full w-full col-span-6">
                        <div className="h-full w-full flex justify-center lg:items-center md:items-start sm:items-start">
                           <div
                              // initial={{ opacity: 0, y: 80 }}
                              // whileInView={{ opacity: 1, y: 0 }}
                              // viewport={{ once: true }}
                              // transition={{
                              //    ease: 'easeInOut',
                              //    duration: 0.5,
                              // }}
                              style={{ width: '100%' }}
                           >
                              <div className="bg-amber-500 w-full lg:h-97 md:h-80 sm:h-48" />
                           </div>
                        </div>
                     </div>
                     <div className="h-full col-span-6">
                        <main className="h-full w-full p-10 flex justify-center flex-col">
                           <div
                           // initial={{ opacity: 0, y: 80 }}
                           // whileInView={{ opacity: 1, y: 0 }}
                           // viewport={{ once: true }}
                           // transition={{
                           //    ease: 'easeInOut',
                           //    duration: 1,
                           // }}
                           >
                              <h2 className="font-bold text-5xl">
                                 {item.title}
                              </h2>
                           </div>
                           <section className="pt-5">
                              <div
                              // initial={{ opacity: 0, y: 80 }}
                              // whileInView={{ opacity: 1, y: 0 }}
                              // viewport={{ once: true }}
                              // transition={{
                              //    ease: 'easeInOut',
                              //    duration: 1.2,
                              // }}
                              >
                                 <p className="font-mono font-medium text-lg">
                                    {item.desc}
                                 </p>
                              </div>
                           </section>
                        </main>
                     </div>
                  </section>
               ))}
            </div>
         </div>
      </section>
   );
}

export default ScrollSection;
