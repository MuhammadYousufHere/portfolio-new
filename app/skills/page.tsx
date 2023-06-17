'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import useMeasure from 'react-use-measure';

type Icons = {
   name: string;
   Icon: any;
};
interface ITools {
   type: string;
   icons: Icons[];
}

const tools: ITools[] = [
   {
      type: 'framework',
      icons: [
         {
            name: 'React',
            Icon: 'Reactt',
         },
         {
            name: 'Redux',
            Icon: 'Redux',
         },

         {
            name: 'MaterialUI',
            Icon: 'MaterialUI',
         },
         {
            name: 'Bootstrap',
            Icon: 'BootStrap',
         },
      ],
   },
   {
      type: 'language',
      icons: [
         {
            name: 'HTML',
            Icon: 'HTML',
         },
         {
            name: 'CSS',
            Icon: 'CSS',
         },
         {
            name: 'Javscript',
            Icon: 'JS',
         },

         {
            name: 'Python',
            Icon: 'Python',
         },
         {
            name: 'SQL',
            Icon: 'DB',
         },
      ],
   },
   {
      type: 'utility',
      icons: [
         {
            name: 'Git',
            Icon: 'Git',
         },
         {
            name: 'Gitlab',
            Icon: 'Gitlab',
         },
         {
            name: 'PostgreSQL',
            Icon: 'DB',
         },
      ],
   },
];

const SelectedTabVar = {
   animate: (isActive: boolean) =>
      isActive
         ? {
              // match pill color
              color: 'rgb(255,255,255)',
           }
         : {
              color: '#9eb7b7',
           },
};

const ParentOffscreenVar = {
   offscreen: {},
   onscreen: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const OffScreenVar = {
   offscreen: {
      opacity: 0,
      y: -20,
   },
   onscreen: {
      opacity: 1,
      y: 0,
      transition: {
         ease: 'easeInOut',
         duration: 0.4,
      },
   },
};

const SkillsVar = {
   enter: {
      opacity: 0,
      y: -10,
   },
   center: {
      x: 0,
      y: 0,
      opacity: 1,
   },
   exit: (direction: number) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0,
   }),
};
export default function Skills() {
   const [[selected, currIndex, newDirection], setSelected] = useState([
      'framework',
      0,
      0,
   ]);
   const [ref, { height }] = useMeasure();
   const [focused, setFocused] = React.useState('framework');
   const isMd = false;
   const selectedTool = tools.find(({ type }) => type === selected) as ITools;

   return (
      <section
         data-scroll-id="skills"
         className="relative grid place-items-center bg-asif"
      >
         <div className="mx-auto w-full max-w-[1200px] ">
            <motion.div
               initial="offscreen"
               whileInView="onscreen"
               variants={ParentOffscreenVar}
               viewport={{ once: true, amount: 0.9 }}
               className="flex flex-col place-items-center pt-[48px] pb-[46px]"
            >
               <motion.h2
                  variants={OffScreenVar}
                  className="font-fancy text-white tracking-wider text-[2.20em]"
               >
                  Tech I like to use
               </motion.h2>

               <motion.div
                  variants={OffScreenVar}
                  layout="size"
                  className="w-full flex flex-col items-center"
               >
                  <motion.ul
                     onMouseLeave={() => setFocused('')}
                     className="overflow-hidden rounded-full flex mt-[2.5em] mb-[3em] divide-x-[1px] divide-pill border-[1px] border-pill"
                  >
                     {tools.map(({ type }, i) => {
                        const isActive = type === selected;
                        return (
                           <motion.li
                              onClick={() => {
                                 if (type === selected) return;
                                 setSelected([type, i, currIndex > i ? -1 : 1]);
                              }}
                              onFocus={() => setFocused(type)}
                              onMouseEnter={() => setFocused(type)}
                              key={type}
                              className="relative px-7 py-3 text-center cursor-pointer"
                           >
                              <motion.span
                                 custom={isActive}
                                 variants={SelectedTabVar}
                                 initial="initial"
                                 animate="animate"
                                 transition={{
                                    duration: 0.2,
                                 }}
                                 className="relative z-50 capitalize tracking-wider text-pill"
                              >
                                 {type}
                              </motion.span>
                              {focused === type && isMd ? (
                                 <motion.div
                                    transition={{
                                       layout: {
                                          duration: 0.2,
                                          ease: 'easeOut',
                                       },
                                    }}
                                    className="absolute z-0 inset-0 bg-[rgba(158,183,183,.5)]"
                                    layoutId="hover"
                                 />
                              ) : null}
                              {isActive ? (
                                 <motion.div
                                    className="absolute z-[5] inset-0 bg-pill"
                                    layoutId={isMd ? 'pill' : ''}
                                    transition={{
                                       layout: {
                                          duration: 0.2,
                                       },
                                    }}
                                 />
                              ) : null}
                           </motion.li>
                        );
                     })}
                  </motion.ul>
                  {/* For custom variant, need to supply custom on animatePresence to get latest */}
                  <motion.div
                     className="w-full"
                     animate={{ height }}
                     transition={{
                        type: 'tween',
                        ease: 'easeInOut',
                        duration: 0.3,
                     }}
                  >
                     <AnimatePresence
                        custom={newDirection}
                        initial={false}
                        mode="wait"
                     >
                        <motion.ul
                           key={currIndex}
                           custom={newDirection}
                           variants={SkillsVar}
                           initial="enter"
                           animate="center"
                           exit="exit"
                           transition={{
                              type: 'tween',
                              ease: 'easeInOut',
                           }}
                           className="w-full min-h-[84px] grid place-items-center justify-center grid-cols-[repeat(auto-fit,minmax(118px,max-content))] gap-4"
                           ref={ref}
                        >
                           {selectedTool.icons.map(({ name }) => (
                              <li
                                 className="max-w-[118px] min-h-[84px] grid place-items-center gap-3"
                                 key={name}
                              >
                                 {/* <img
                                    className="w-11 h-11 block"
                                    src={Icon}
                                    alt="icon"
                                 /> */}
                                 <div className="font-thin text-[1.15em] lg-text-[1.3em] text-center text-white tracking-wider">
                                    {name}
                                 </div>
                              </li>
                           ))}
                        </motion.ul>
                     </AnimatePresence>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </section>
   );
}
