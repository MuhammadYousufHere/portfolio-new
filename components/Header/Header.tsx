/* eslint-disable @typescript-eslint/no-explicit-any */

import { gsap } from 'gsap/dist/gsap';
import {
   useEffect,
   useRef,
   useState,
   type FC,
   type MutableRefObject,
} from 'react';
import { navData, socialData } from './data';
import { CloseIcon, MenuIcon } from './Icon';
import NavItem from './NavItem';

const Header: FC = () => {
   const headerWrapper = useRef() as MutableRefObject<HTMLHeadingElement>;
   const menuTl = useRef() as any;
   const menuScrollTL = useRef() as any;
   const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
   const btnSelector = '#my--menu-button';
   useEffect(() => {
      const trigger = gsap.utils.selector('#my--scroll-parent')('section')[0];
      const navbar = gsap.utils.selector(headerWrapper.current)(
         'nav#my--navbar'
      );
      const menubutton = gsap.utils.selector(headerWrapper.current)(
         btnSelector
      );
      gsap.set(menubutton, {
         opacity: 0,
         pointerEvents: 'none',
         visibility: 'hidden',
      });

      menuScrollTL.current = gsap.timeline({
         scrollTrigger: {
            trigger,
            start: 'center 40%',
            toggleActions: 'play none none reverse',
         },
      });

      menuScrollTL.current
         .to(
            navbar,
            {
               opacity: 0,
               ease: 'none',
               duration: 0.1,
               pointerEvents: 'none',
               visibility: 'hidden',
            },
            0
         )
         .to(
            menubutton,
            {
               opacity: 1,
               ease: 'none',
               duration: 0.1,
               pointerEvents: 'all',
               visibility: 'visible',
            },
            0.1
         );
   }, []);

   useEffect(() => {
      const openmenubutton = gsap.utils.selector(btnSelector)('#my--menu-open');

      const closemenubutton =
         gsap.utils.selector(btnSelector)('#my--menu-close');

      const menuoverlay = gsap.utils.selector(document)('#my--overlay');
      const menuitems = gsap.utils.selector('#my--menu')('#my--menu-item');
      const menufooter =
         gsap.utils.selector('#my--overlay')('#my--menu-footer');

      gsap.set(closemenubutton, {
         opacity: 0,
      });

      menuTl.current = gsap.timeline({
         paused: true,
         defaults: { ease: 'none', duration: 0.3 },
         //  onStart: () => {},
      });

      menuTl.current
         .fromTo(
            openmenubutton,
            { yPercent: 0, opacity: 1 },
            {
               yPercent: -30,
               opacity: 0,
            },
            0
         )
         .fromTo(
            menuoverlay,
            { yPercent: 150, opacity: 1, rotate: 4, scale: 1.7 },
            {
               yPercent: 0,
               opacity: 1,
               rotate: 0,
               scale: 1,
               duration: 1.25,
               ease: 'expo.inOut',
            },
            0
         )
         .fromTo(
            menuitems,
            { yPercent: 101 },
            {
               yPercent: 0,
               duration: 1.25,
               ease: 'expo.inOut',
            },
            0.3
         )
         .fromTo(
            menufooter,
            { yPercent: 101, opacity: 0 },
            {
               yPercent: 0,
               duration: 1.25,
               opacity: 1,
               ease: 'expo.out',
            },
            0.45
         )
         .fromTo(
            closemenubutton,
            { yPercent: 30, opacity: 0 },
            {
               yPercent: 0,
               opacity: 1,
            },
            0.3
         );
      // .set(document.body, { overflow: 'hidden' }, 0.2)
   }, []);

   useEffect(() => {
      if (!isMenuOpen) {
         menuTl.current.reverse();
         gsap.set(document.body, { overflow: 'auto' });
      } else {
         menuTl.current.play();
         gsap.set(document.body, { overflow: 'hidden' });
      }
   }, [isMenuOpen]);

   const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <header
            className="fixed top-0 left-0 w-full px-16 py-6 z-[99] flex items-center justify-between mix-blend-exclusion"
            ref={headerWrapper}
         >
            <div className="relative w-auto">
               {/* <Image src='/assets/logo.png' alt='Logo' layout='fill' /> */}
            </div>
            <div className="relative flex-1 flex items-center justify-end">
               <nav id="my--navbar" className="absolute">
                  <ul className="flex">
                     {navData.map((item) => (
                        <li key={item.title}>
                           <NavItem
                              item={item}
                              isCta={item.title.toLowerCase() === 'contact us'}
                           />
                        </li>
                     ))}
                  </ul>
               </nav>
               <button
                  type="button"
                  id="my--menu-button"
                  className="absolute text-light text-sm flex items-center justify-center w-[6rem]"
                  onClick={toggleMenu}
               >
                  <div className="relative w-full p-4 flex items-center">
                     <span
                        className="absolute flex w-full items-center justify-end"
                        id="my--menu-open"
                     >
                        Menu <MenuIcon />
                     </span>
                     <span
                        className="absolute flex w-full items-center justify-end"
                        id="my--menu-close"
                     >
                        Close <CloseIcon />
                     </span>
                  </div>
               </button>
            </div>
         </header>
         <div
            className="fixed inset-0 h-full w-full z-[98] bg-black flex items-center justify-center"
            id="my--overlay"
         >
            <nav id="my--menu" className="absolute w-full">
               <ul className="flex flex-col w-full items-center justify-center">
                  {navData.map((item) => (
                     <div
                        className="relative leading-[1.1] mb-4 overflow-hidden"
                        key={item.title}
                     >
                        <span
                           className="text-light mx-2 font-title text-[5vw] menu-item"
                           id="my--menu-item"
                        >
                           {item.title}
                        </span>
                     </div>
                  ))}
               </ul>
            </nav>
            <div
               className="absolute bottom-0 left-0 py-16 w-full flex items-center justify-center"
               id="my--menu-footer"
            >
               {socialData.map((item) => (
                  <a href="/" key={item.title} className="m-2">
                     <NavItem item={item} />
                  </a>
               ))}
            </div>
         </div>
      </>
   );
};

export default Header;
