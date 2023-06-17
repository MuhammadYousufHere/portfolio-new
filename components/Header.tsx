/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Logo } from '@my/assets';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import NavbarContainer from './NavbarContainer';
import { ThemeSwitch } from './ThemeSwitch';

export const headerNavLinks = [
   { href: '/about', title: 'About' },
   { href: '/skills', title: 'Skills' },
   // { href: '/blog', title: 'Blog' },
];
type State = {
   about?: Element;
   skills?: Element;
};
export default function Header() {
   const { scroll } = useLocomotiveScroll();
   const [sections, setSections] = useState<State>({});
   useEffect(() => {
      if (!scroll) return;

      const about = document.querySelector('[data-scroll-id="about"]')!;
      const skills = document.querySelector('[data-scroll-id="skills"]')!;
      setSections({ about, skills });
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
            <NavbarContainer>
               <Link
                  href="/"
                  className="w-max flex align-middle justify-start "
                  aria-label="Home"
               >
                  <div className="w-10 h-10">
                     <Logo />
                  </div>
               </Link>
               <div className="flex items-center space-x-3 text-base leading-5 z-50">
                  <div className="hidden space-x-5 sm:flex">
                     {headerNavLinks.map(({ title }) => (
                        <button
                           type="button"
                           onClick={() => scrollTo(title.toLocaleLowerCase())}
                           key={title}
                           className="basic-text py-1 after:bg-black dark:after:bg-white underline-animation text-md font-semibold dark:text-white"
                           aria-label={title}
                        >
                           <span className="font-medium tracking-wide text-gray-00 dark:text-gray-100">
                              {title}
                           </span>
                        </button>
                     ))}
                  </div>
                  <div className="flex items-center">
                     <ThemeSwitch />
                  </div>
               </div>
            </NavbarContainer>
         </div>
      </header>
   );
}
