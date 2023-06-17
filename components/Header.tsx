/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Logo } from '@my/assets';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { ThemeSwitch } from './ThemeSwitch';

export const headerNavLinks = [
   { href: '/about', title: 'About' },
   { href: '/skills', title: 'Skills' },
   { href: '/blogs', title: 'Blogs' },
];
type State = {
   about?: Element;
   skills?: Element;
   blogs?: Element;
};
export default function Header() {
   const { scroll } = useLocomotiveScroll();
   const [sections, setSections] = useState<State>({});
   useEffect(() => {
      if (!scroll) return;

      const blogs = document.querySelector('[data-scroll-id="projects"]')!;
      const about = document.querySelector('[data-scroll-id="about"]')!;
      const skills = document.querySelector('[data-scroll-id="skills"]')!;
      setSections({ about, skills, blogs });
   }, [scroll]);
   const scrollTo = (sectionName: string) => {
      if (!sectionName) return;
      scroll.scrollTo(sections[sectionName as keyof State], {
         duration: 500,
      });
   };

   return (
      <header className="z-40 bg-transparent pt-2 md:py-10 md:pb-20">
         <div className=" flex max-w-full items-center justify-between">
            <Link
               href="/"
               className="w-max flex align-middle justify-start "
               aria-label="Home"
            >
               <div className="w-12 h-12">
                  <Logo />
               </div>
            </Link>

            <div className="flex items-center space-x-3 text-base leading-5">
               <div className="hidden space-x-5 sm:flex">
                  {headerNavLinks.map(({ title }) => (
                     <button
                        type="button"
                        onClick={() => scrollTo(title.toLowerCase())}
                        key={title}
                        // href={href}
                        className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white"
                        aria-label={title}
                     >
                        <span className="font-bold tracking-wide text-gray-00 dark:text-gray-100">
                           {title}
                        </span>
                     </button>
                  ))}
               </div>
               <div className="flex items-center">
                  <ThemeSwitch />
               </div>
            </div>
         </div>
      </header>
   );
}
