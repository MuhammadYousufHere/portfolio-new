import React from 'react';

export default function Skeleton({ length }: { length: number }) {
   return (
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full gap-2 items-center mt-4">
         {[...Array(length)].map((e) => (
            <div
               key={e}
               className="h-full bg-zinc-900/90 hover:bg-zinc-200/20 relative transition-all duration-200 flex flex-col rounded-lg py-4 px-5"
            >
               <i className="fal fa-arrow-up-right-from-square absolute top-4 right-5" />
               <div className="animate-pulse w-20 h-4 rounded-lg bg-zinc-800" />
               <div className="animate-pulse mt-4 w-60 h-4 rounded-lg bg-zinc-800" />
               <div className="animate-pulse mt-2 w-50 h-4 rounded-lg bg-zinc-800" />
               <div className="mt-3 flex justify-between">
                  <div className="text-sm flex">
                     <i className="far fa-code text-center w-4 mr-1" />
                     <div className=" ml-2 animate-pulse w-10 h-4 rounded-lg bg-zinc-800" />
                  </div>
                  <div className="text-sm flex">
                     <i className="far fa-star text-center w-4 mr-1" />
                     <div className=" ml-2 animate-pulse w-10 h-4 rounded-lg bg-zinc-800" />
                  </div>
                  <div className="text-sm flex">
                     <i className="far fa-code-branch text-center w-4 mr-1" />
                     <div className=" ml-2 animate-pulse w-12 h-4 rounded-lg bg-zinc-800" />
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
}
