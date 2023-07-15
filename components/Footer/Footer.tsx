'use client';

import Link from 'next/link';
import './styles.css';

export function Footer() {
   return (
      <footer
         className="h-[full] divide-y"
         // data-scroll
         // data-scroll-direction="horizontal"
         // data-scroll-speed="4"
      >
         {/* <div className="flex flex-col w-full mb-16 overflow-hidden">
            <div
               className="flex w-full whitespace-nowrap relative row my-1"
               data-scroll
               data-scroll-direction="horizontal"
               data-scroll-speed="1"
            >
               <div className="marquee">
                  <span className="marquee-span white">
                     توهان جي وقت لاء مهرباني
                  </span>
                  <span className="marquee-span purple">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
                  <span className="marquee-span white">
                     توهان جي وقت لاء مهرباني
                  </span>
                  <span className="marquee-span purple">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
               </div>
            </div>
            <div
               className="flex w-full whitespace-nowrap relative row my-1"
               data-scroll
               data-scroll-direction="horizontal"
               data-scroll-speed="-1"
            >
               <div className="marquee">
                  <span className="marquee-span white">
                     توهان جي وقت لاء مهرباني
                  </span>
                  <span className="marquee-span purple">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
                  <span className="marquee-span white">
                     آپ کے وقت دینے کا شکریہ
                  </span>
                  <span className="marquee-span outline-fonts">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
               </div>
            </div>
            <div
               className="flex w-full whitespace-nowrap relative row my-1"
               data-scroll
               data-scroll-direction="horizontal"
               data-scroll-speed="2"
            >
               <div className="marquee">
                  <span className="marquee-span white">
                     آپ کے وقت دینے کا شکریہ{' '}
                  </span>
                  <span className="marquee-span purple">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
                  <span className="marquee-span white">
                     توهان جي وقت لاء مهرباني
                  </span>
                  <span className="marquee-span purple">
                     Thank you for visiting
                  </span>
                  <span className="marquee-span outline-fonts">
                     gracias por su visita
                  </span>
               </div>
            </div>
         </div> */}
         <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="cursor-pointer mb-4 ">
               <div
                  className="font-black text-[32px] md:text-[64px] mb-2 flex flex-row gap-2 md:gap-4"
                  data-scroll
               >
                  <div
                     data-scroll
                     data-scroll-delay="0.18"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     {' '}
                     Have{' '}
                  </div>{' '}
                  <div
                     data-scroll
                     data-scroll-delay="0.12"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     an
                  </div>{' '}
                  <div
                     data-scroll
                     data-scroll-delay="0.08"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     idea?
                  </div>
               </div>
               <div
                  className="ml-10 font-light text-[20px] md:text-[40px] -mt-10 mb-2 flex flex-row gap-2 md:gap-4"
                  data-scroll
               >
                  <div
                     data-scroll
                     data-scroll-delay="0.28"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     {' '}
                     Let&apos;s{' '}
                  </div>{' '}
                  <div
                     data-scroll
                     data-scroll-delay="0.42"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     make it
                  </div>{' '}
                  <div
                     data-scroll
                     data-scroll-delay="0.68"
                     data-scroll-speed="5"
                     data-scroll-position="bottom"
                  >
                     together
                  </div>
               </div>
            </div>
            <div>
               <div className="flex gap-3 md:gap-6 text-[16px] md:text-[20px] font-thin dark:text-[#fafafa] text-[#171717]  w-full flex-wrap">
                  <Link
                     href="/"
                     className="dark:text-[#fafafa] text-[#171717] cursor-pointer"
                     // onClick={scrollToTop}
                  >
                     Muhammad Yousuf
                  </Link>
                  <Link
                     href="/about"
                     className="dark:text-[#fafafa] text-[#171717]"
                  >
                     About{' '}
                  </Link>
                  <Link
                     href="/about"
                     className="dark:text-[#fafafa] text-[#171717]"
                  >
                     Projects
                  </Link>

                  <Link
                     href="/contact"
                     className="dark:text-[#fafafa] text-[#171717]"
                  >
                     Skills
                  </Link>
               </div>
            </div>
         </div>
         <div className="flex justify-between items-center">
            <div className="font-extralight text-[14px]  md:text-[17px] align-center my-8">
               {/* <span className="w-10 h-10">
                  <LogoFill />
               </span>{' '} */}
               Muhammad Yousuf &copy; {new Date().getUTCFullYear()}
            </div>
            <p className="font-headings">
               ALL RIGHTS RESERVED. ALL WRONGS REVERSED Made with (x² + y² – 1)³
               = x² y³ in Khi
            </p>
            <button
               type="button"
               className="flex gap-2 md:gap-6 text-[14px] md:text-[18px] underline-animation "
            >
               Back To Top
            </button>
         </div>
      </footer>
   );
}
