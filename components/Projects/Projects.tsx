'use client';

import { motion } from 'framer-motion';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { DATA } from './data';

gsap.registerPlugin(ScrollTrigger);
const quotes = [
   {
      text: `Der Workshop von Julia im Rahmen des Founder’s Lab der Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten Impact auf die Ausrichtung meines Unternehmens. A Think of impact early“ wurde „Think of impact only“.`,
      by: `Olivia Lancerotto, Innovation Marketing`,
   },
   {
      text: `Der Workshop von Julia im Rahmen des Founder’s Lab der Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten Impact auf die Ausrichtung meines Unternehmens. A Think of impact early“ wurde „Think of impact only“.`,
      by: `Olivia Lancerotto, Innovation Marketing`,
   },
   {
      text: `Der Workshop von Julia im Rahmen des Founder’s Lab der Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten Impact auf die Ausrichtung meines Unternehmens. A Think of impact early“ wurde „Think of impact only“.`,
      by: `Olivia Lancerotto, Innovation Marketing`,
   },
   {
      text: `Der Workshop von Julia im Rahmen des Founder’s Lab der Wirtschaftsagentur Wien hatte im wahrsten Sinne den meisten Impact auf die Ausrichtung meines Unternehmens. A Think of impact early“ wurde „Think of impact only“.`,
      by: `Olivia Lancerotto, Innovation Marketing`,
   },
];

export function ScrollSection() {
   // const { scroll } = useLocomotiveScroll();
   const ref = useRef<HTMLDivElement>(null);

   // useLayoutEffect(() => {
   //    let ctx: any;
   //    if (scroll) {
   //       // const element = scroll?.el;
   //       // scroll.on('scroll', ScrollTrigger.update);

   //       // ScrollTrigger.scrollerProxy(element, {
   //       //    scrollTop(value) {
   //       //       return arguments.length
   //       //          ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
   //       //          : scroll.scroll.instance.scroll.y;
   //       //    },
   //       //    getBoundingClientRect() {
   //       //       return {
   //       //          top: 0,
   //       //          left: 0,
   //       //          width: window.innerWidth,
   //       //          height: window.innerHeight,
   //       //       };
   //       //    },
   //       //    pinType: element.style.transform ? 'transform' : 'fixed',
   //       // });
   //       // ScrollTrigger.addEventListener('refresh', () => scroll?.update());

   //       ctx = gsap.context(() => {
   //          const sections = gsap.utils.toArray('.quotes-container');
   //          gsap.to(ref.current, {
   //             xPercent: -100 * (sections.length - 1),
   //             scrollTrigger: {
   //                trigger: ref.current,
   //                scroller: scroll?.el,
   //                start: 'top center',
   //                end: () => `+=${ref.current?.offsetWidth}`,
   //                scrub: 0.5,
   //                markers: false,
   //                pin: true,
   //                // onRefresh: (self) =>
   //                //    console.log('refresh', self.start, self.end),
   //             },
   //          });
   //          ScrollTrigger.refresh();
   //       }, ref);
   //    }
   //    return () => ctx && ctx.revert();
   // }, [scroll]);

   // useLayoutEffect(() => {
   //    const skillSet = gsap.utils.toArray('.skill-set');

   //    const to = gsap.to(skillSet, {
   //       xPercent: () => -100 * (skillSet.length - 1),
   //       ease: 'none',
   //       scrollTrigger: {
   //          trigger: scroller.current,
   //          markers: false,
   //          pin: true,
   //          pinSpacing: true,
   //          scrub: 1,
   //          invalidateOnRefresh: true,
   //          anticipatePin: 1,
   //          snap: 1 / (skillSet.length - 1),

   //          end: () => `+=${window.innerWidth}`,
   //       },
   //    });

   //    return () => {
   //       to.kill();
   //    };
   // }, []);

   return (
      <div className="quotes-wrapper " ref={ref}>
         <div className="quotes ">
            {quotes.map((item, i) => (
               <div className="quotes-container border" key={+i}>
                  <blockquote>
                     <p>{item.text}</p>
                     <cite>– {item.by}</cite>
                  </blockquote>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ScrollSection;

export const Pro = () => {
   const scroller = useRef<HTMLDivElement>(null);
   const skills = useRef<HTMLDivElement>(null);
   return (
      <section className="overflow-hidden flex" id="scroller">
         <div className="overflow-hidden ">
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
                           <motion.div
                              initial={{ opacity: 0, y: 80 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                 ease: 'easeInOut',
                                 duration: 0.5,
                              }}
                              style={{ width: '100%' }}
                           >
                              <div className="bg-amber-500 w-full lg:h-97 md:h-80 sm:h-48" />
                           </motion.div>
                        </div>
                     </div>
                     <div className="h-full col-span-6">
                        <main className="h-full w-full p-10 flex justify-center flex-col">
                           <motion.div
                              initial={{ opacity: 0, y: 80 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                 ease: 'easeInOut',
                                 duration: 1,
                              }}
                           >
                              <h2 className="font-bold text-5xl">
                                 {item.title}
                              </h2>
                           </motion.div>
                           <section className="pt-5">
                              <motion.div
                                 initial={{ opacity: 0, y: 80 }}
                                 whileInView={{ opacity: 1, y: 0 }}
                                 viewport={{ once: true }}
                                 transition={{
                                    ease: 'easeInOut',
                                    duration: 1.2,
                                 }}
                              >
                                 <p className="font-mono font-medium text-lg">
                                    {item.desc}
                                 </p>
                              </motion.div>
                           </section>
                        </main>
                     </div>
                  </section>
               ))}
            </div>
         </div>
      </section>
   );
};
export const Section = ({ desc, title }: { title: string; desc: string }) => (
   <div
      id="skills"
      className=" flex overflow-x-hidden text-white w-[400vw] m-0 bg-gray-900  relative h-screen"
   >
      <section
         className="skill-set w-full h-full grid gap-1 lg:py-0 lg:p-20"
         style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 2fr)',
         }}
      >
         <div className="flex h-full w-full col-span-6">
            <div className="h-full w-full flex justify-center lg:items-center md:items-start sm:items-start">
               <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                     ease: 'easeInOut',
                     duration: 0.5,
                  }}
                  style={{ width: '100%' }}
               >
                  <div className="bg-amber-500 w-full lg:h-97 md:h-80 sm:h-48" />
               </motion.div>
            </div>
         </div>
         <div className="h-full col-span-6">
            <main className="h-full w-full p-10 flex justify-center flex-col">
               <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                     ease: 'easeInOut',
                     duration: 1,
                  }}
               >
                  <h2 className="font-bold text-5xl">{title}</h2>
               </motion.div>
               <section className="pt-5">
                  <motion.div
                     initial={{ opacity: 0, y: 80 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{
                        ease: 'easeInOut',
                        duration: 1.2,
                     }}
                  >
                     <p className="font-mono font-medium text-lg">{desc}</p>
                  </motion.div>
               </section>
            </main>
         </div>
      </section>
   </div>
);
