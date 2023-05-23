import React from 'react'

export default function WIP() {
   return (
      <div className="flex items-center justify-center h-screen">
         <div className="flex flex-col items-center justify-center max-w-2xl">
            <img
               src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
               alt="tailwindcss maintenance"
               className="rounded"
            />
            <h1 className="my-3 text-3xl font-bold text-center text-purple-600">
               Under Construction
            </h1>
            <p className="text-center text-gray-600">
               The Page you are looking for is currently under construction and will be back soon.
            </p>
         </div>
      </div>
   )
}
