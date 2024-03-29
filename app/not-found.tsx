import MainLayout from '@my/components/MainContainer';
import Link from 'next/link';

export default function FourZeroFour() {
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
                  Not all those who wander are lost
               </p>
               <p className="mb-8">Looks like you are tho...</p>
               <Link href="/">
                  <button
                     type="button"
                     className="focus:shadow-outline-blue inline rounded-lg border border-transparent  px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 focus:outline-none hover:underline decoration-slate-50"
                  >
                     Back to homepage
                  </button>
               </Link>
            </div>
         </div>
      </MainLayout>
   );
}
