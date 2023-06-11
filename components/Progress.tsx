import { motion } from 'framer-motion';
import React from 'react';

// Define a functional component called ProgessBar
const ProgessBar = () => (
   // return the following JSX elements
   <div className=" z-10">
      <figure className="stroke-white mix-blend-difference dark:stroke-white">
         {/* Define an SVG element with a width and height of 100 */}
         <svg width="100" height="100" viewBox="0 0 100 100">
            {/* Define a motion circle element */}
            <motion.circle
               initial={{ pathLength: 0 }} // Define the initial animation state
               animate={{ pathLength: 1 }} // Define the animation state to transition to
               transition={{ duration: 3 }} // Define the transition animation properties
               exit={{ opacity: 0 }} // Define the exit animation state
               cx="50" // Define the x coordinate of the center of the circle
               cy="50" // Define the y coordinate of the center of the circle
               r="20" // Define the radius of the circle
               className="fill-none stroke-[5px] " // Define the classes to apply to the circle element
               style={{
                  // Define inline styles to apply to the circle element
                  strokeDashoffset: 0,
                  rotate: '-90deg',
                  transformOrigin: 'center',
               }}
            />
            {/* Define another motion circle element */}
            <motion.circle
               initial={{ opacity: 0 }} // Define the initial animation state
               animate={{ opacity: 1 }} // Define the animation state to transition to
               exit={{ opacity: 0 }} // Define the exit animation state
               cx="50" // Define the x coordinate of the center of the circle
               cy="50" // Define the y coordinate of the center of the circle
               r="10" // Define the radius of the circle
               className="stroke-white stroke-[3px] mix-blend-difference  dark:stroke-white" // Define the classes to apply to the circle element
            />
         </svg>
      </figure>
   </div>
);
// export the ProgressBar component as the default export of the module
export default ProgessBar;
