import { Logo } from '@my/assets';
// import classNames from 'classnames';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export const headerNavLinks = [
   { href: '/blog', title: 'Blog' },
   { href: '/about', title: 'About' },
   { href: '/uses', title: 'Uses' },
];

export default function Header() {
   return (
      <header className="z-40 bg-transparent py-5 md:py-10">
         <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link
               href="/"
               className="flex items-center justify-between"
               aria-label="Home"
            >
               <Logo />
            </Link>
            <div className="flex items-center space-x-3 text-base leading-5">
               <div className="hidden space-x-5 sm:flex">
                  {/* {headerNavLinks.map(({ title, href }) => {
                     const active = true;
                     return (
                        <Link
                           key={title}
                           href={href}
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
                        </Link>
                     );
                  })} */}
               </div>
               <div className="flex items-center">
                  <ThemeSwitch />
               </div>
            </div>
         </div>
      </header>
   );
}
