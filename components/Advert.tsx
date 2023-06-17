'use client';

import { AnimatePresence, motion } from 'framer-motion';

const Advert = () => (
   <div id="about">
      <AnimatePresence mode="wait">
         <div className="w-full h-[49rem] relative lg:hidden flex py-10 mt-32 text-white">
            <div className="w-full h-full  ">
               <div className="w-full h-40 ">
                  <motion.h1
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.7 }}
                     className="large-texts  text-center text-2xl"
                  >
                     Bringing your <br />{' '}
                     <span className=" font-semibold  text-3xl font-hellix font-hellix">
                        imaginations to life.
                     </span>
                  </motion.h1>
                  <motion.p
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     className="text-[20px]  mt-5 text-center font-hellix"
                  >
                     I develop products that provide value
                  </motion.p>
               </div>
               <div className="w-full h-72  flex justify-center">
                  <motion.div
                     whileInView={{ height: ['0%', '100%'] }}
                     transition={{ duration: 2, ease: 'easeInOut' }}
                     className="w-[2px] bg-white"
                  />
               </div>
               <div className="w-full h-40  mt-6">
                  <motion.h1
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.7 }}
                     className="large-texts text-center  text-[24px] font-hellix"
                  >
                     I provide <br />
                  </motion.h1>
                  <motion.p
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.8 }}
                     className="text-[20px] text-center -neue mt-3 font-ivy-mode"
                  >
                     Strategic driven solutions for the best user experience and
                     luxurious quality web experiences
                  </motion.p>
               </div>
            </div>
         </div>
         <div className="w-full h-full lg:flex items-center justify-center">
            <div className="w-full h-[59rem] max-w-[40rem] relative lg:flex hidden py-10 pt-20y text-white">
               <div className="w-full h-full  ">
                  <div className="w-full h-40 ">
                     <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="large-texts  text-center text-[48px] font-hellix"
                     >
                        Bringing your <br />{' '}
                        <span className=" font-semibold  text-[60px] font-hellix">
                           imaginations to life.
                        </span>
                     </motion.h1>
                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[20px]  mt-5 text-center font-hellix"
                     >
                        I develop products that provide value
                     </motion.p>
                  </div>
                  <div className="w-full h-72  mt-32 flex justify-center">
                     <motion.div
                        whileInView={{ height: ['0%', '100%'] }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="w-[2px] bg-white"
                     />
                  </div>
                  <div className="w-full h-40  mt-6">
                     <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="large-texts text-center  text-[48px] font-hellix"
                     >
                        I provide <br />
                     </motion.h1>
                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[28px] text-center  mt-3 font-ivy-mode"
                     >
                        Strategic driven solutions for the best user and
                        luxurious quality web experiences
                     </motion.p>
                  </div>
               </div>
            </div>
         </div>
      </AnimatePresence>
   </div>
);

export default Advert;
