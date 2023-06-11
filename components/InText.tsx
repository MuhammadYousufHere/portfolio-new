'use client';

import { slideIn, staggerContainer, textVariant } from '@my/config/animation';
import { motion } from 'framer-motion';

// import { slideIn, staggerContainer, textVariant } from '@my/config/animations'

// import { TypingText } from './CustomTexts';

const Hero = () => (
   <section className="flex gap-5 h-full">
      <motion.div
         variants={staggerContainer(0.6, 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.25 }}
         className={` w-10/12 bg-slate-400`}
      >
         {/* <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div> */}

         <div className="flex">
            <div className="w-full sm:px-0 flex flex-col justify-center">
               <div className="">
                  {/* <TypingText title="I'm Eric," textStyles="text-left" /> */}
                  <motion.h1
                     variants={textVariant(1.1)}
                     className="text-[52px] text-green"
                  >
                     Product Designer
                  </motion.h1>
                  <motion.div />
               </div>
            </div>

            <div className="w-full  sm:px-0 justify-between flex flex-col">
               <motion.div
                  variants={slideIn('top', 'tween', 0.2, 1)}
                  className="relative w-full"
               >
                  <div className="absolute w-full" />

                  {/* <Image
                     src={profilePhoto}
                     alt="Picture of the author"
                     className=" object-cover rounded-full z-10 relative"
                     width={355}
                     height={505}
                  /> */}
               </motion.div>
            </div>
         </div>
      </motion.div>

      <div className=" bg-amber-200 w-2/12 grow" />
   </section>
);

export default Hero;
