/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Logo } from '@my/assets';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ThemeSwitch from './ThemeSwitch';

export const headerNavLinks = [
   { href: '/skills', title: 'Skills' },
   { href: '/about', title: 'About' },
];
type State = {
   about?: Element;
   skills?: Element;
};
export default function Header() {
   const { scroll } = useLocomotiveScroll();
   // const scrollToOption = useRef();
   const [sections, setSections] = useState<State>({});
   useEffect(() => {
      if (!scroll) return;

      // const intro = document.querySelector('[data-scroll-id="intro"]');
      // const projects = document.querySelector('[data-scroll-id="projects"]');
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
      <header className="z-40 bg-transparent py-5 md:py-10">
         <div className=" flex max-w-full items-center justify-between">
            <Link
               href="/"
               className="w-max flex align-middle justify-start "
               aria-label="Home"
            >
               <div className="w-14 h-14">
                  <Logo />
               </div>
            </Link>

            <div className="flex items-center space-x-3 text-base leading-5">
               <div className="hidden space-x-5 sm:flex">
                  {headerNavLinks.map(({ title }) => {
                     const active = true;
                     return (
                        <button
                           type="button"
                           onClick={() => scrollTo(title.toLowerCase())}
                           key={title}
                           // href={href}
                           className={classNames(
                              'horizontal-underline text-base',
                              {
                                 'horizontal-underline-active': active,
                              }
                           )}
                           aria-label={title}
                        >
                           <span className="font-bold tracking-wide text-gray-00 dark:text-gray-100">
                              {title}
                           </span>
                        </button>
                     );
                  })}
               </div>
               <div className="flex items-center">
                  <ThemeSwitch />
               </div>
            </div>
         </div>
      </header>
   );
}
