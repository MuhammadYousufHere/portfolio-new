/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function WIP() {
   return (
      <div className="flex items-center justify-center bg-transparent mt-10">
         <div className="flex flex-col items-center justify-center max-w-2xl">
            <img
               src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
               alt="tailwindcss maintenance"
               className="rounded-xl shadow-md ring-1"
            />
            <h1 className="my-3 text-3xl font-bold text-center dark:text-yellow-300 text-gray-900">
               Under Construction
            </h1>
            <p className="text-center text-gray-700 text-md dark:text-gray-200">
               The website is currently under construction and will be live
               soon.
            </p>
         </div>
      </div>
   );
}
