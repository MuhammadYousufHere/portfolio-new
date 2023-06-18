'use client';

import { motion } from 'framer-motion';

export default function CircleArrow() {
   return (
      <svg
         width="64"
         height="64"
         viewBox="0 0 84 84"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <motion.circle
            cx="42"
            cy="42"
            r="41"
            transform="matrix(0.70711,0.70711,-0.70711,0.70711,42,-17.39724)"
            stroke="white"
            strokeWidth="2"
            data-svg-origin="42 42"
            style={{
               transformOrigin: '0px 0px',
               strokeDashoffset: 0,
               strokeDasharray: 'none',
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: 'easeInOut', duration: 3 }}
         />
         <motion.path
            d="M42.9456 52.9577L44.9879 55L58.0272 41.9607L45.0665 29L43.0242 31.0423L52.6073 40.6254H27V43.4532H52.4502L42.9456 52.9577Z"
            fill="transparent"
            strokeWidth={2}
            stroke="white"
            data-svg-origin="27 29"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ ease: 'easeInOut', duration: 3 }}
            style={{ transformOrigin: '0px 0px', opacity: 1 }}
            transform="matrix(1,0,0,1,0,0)"
         />
      </svg>
   );
}
