'use client';

import MainLayout from '@my/components/MainContainer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function FourZeroFour() {
   notFound();
   return (
      <MainLayout>
         <div className="flex flex-col items-center justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
            <div className="space-x-2 pt-6 pb-8 md:space-y-5">
               <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-200 dark:text-sky-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                  404
               </h1>
            </div>
            <div className="max-w-md">
               <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                  Sorry we couldn&apos;t find this page.
               </p>
               <p className="mb-8">
                  But dont worry, you can find plenty of other things on our
                  homepage.
               </p>
               <Link href="/">
                  <button
                     type="button"
                     className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 focus:outline-none hover:bg-blue-700 dark:hover:bg-blue-500"
                  >
                     Back to homepage
                  </button>
               </Link>
            </div>
         </div>
      </MainLayout>
   );
}
