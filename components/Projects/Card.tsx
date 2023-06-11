import { motion } from 'framer-motion';
import React from 'react';

export const Card = () => (
   <section className=" w-full flex-col pt-16 px-[6%]">
      <motion.div
         initial={{ opacity: 0, y: 70 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false }}
         transition={{
            ease: 'easeInOut',
            duration: 1,
         }}
      >
         <h1 className="font-bold text-5xl">Work in progess</h1>
      </motion.div>
   </section>
);
