// import AnimatedBorders from '@my/common/AnimatedBorders';
// import AnimatedTextWord from '@my/common/AnimatedDesc';
// import { AnimatedLetters } from '@my/common/AnimatedWords';
// import { HoverText } from '@my/common/HoverText';
// import Loader from '@my/common/Loader';
// import MainHeading from '@my/common/MainHeading';
// import { SlideUpTransition } from '@my/common/SlideUp';
// import Transition from '@my/common/Transition';
// import Button from '@my/common/VarButton';
import Advert from '@my/components/Advert';
import { MyDetails } from '@my/components/Detail';
// import { Footer } from '@my/components/Footer';
// import Horizontal from '@my/components/Horizontal';
// import { Experties, Section } from '@my/components/Expertise';
// import ExternalLink from '@my/components/ExternalLinks';
// import { Footer } from '@my/components/Footer';
// import Header from '@my/components/Header/Header';
// import HeroText from '@my/components/HeroText';
import MainLayout from '@my/components/MainContainer';
import Over from '@my/components/Over';
// import { Projects } from '@my/components/Projects';
// import TestGSAP from '@my/components/Projects/Test';
import SectionContainer from '@my/components/SectionContainer';
// import useTextReveal from '@my/hooks/useTextReveal';
import ScrollProvider from '@my/lib/ScrollProvider';
import About from './about/page';

// import Skills from './skills/page';

// import { AnimatePresence } from 'framer-motion';
// import Link from 'next/link';
// import { useRef } from 'react';
// import About from './about/page';
// import Skills from './skills/page';

// const links = [
//    { id: 1, title: 'About', to: '/about', num: '/01' },
//    { id: 2, title: 'Projects ', to: '/projects', num: '/02' },
//    { id: 3, title: 'Privacy Policy', to: '/privacy', num: '/03' },
//    { id: 4, title: 'Contacts ', to: '/contacts', num: '/04' },
// ];

export default function Home() {
   // const divRefs = [useRef<HTMLDivElement>(null)];
   // const animations = useTextReveal({ refs: divRefs });
   // animations.forEach((animation) => {
   //    animation.repeat();
   // });
   //   useEffect(() => {
   //      // loader handler
   //      const loader = document.querySelector('.loader');

   //      loader.addEventListener('animationend', () => {
   //         setLoader(false);
   //      });
   //   }, []);
   return (
      <ScrollProvider>
         <MainLayout>
            {/* <div>
               {divRefs.map((ref, index) => (
                  <div ref={ref} key={+index}>
                     Helllo FOlks
                  </div>
               ))}
            </div> */}

            {/* <HeroText />
            <AnimatedLetters text="Hello, Folks" delay={0.05} duration={0.2} />
            <AnimatedTextWord text="Hello, Folks!" /> */}
            {/* <MainHeading /> */}
            {/* <HeroText /> */}
            {/* <SlideUpTransition order={2}>Hello, Folks!</SlideUpTransition> */}
            {/* <Loader>Loading...</Loader> */}
            {/* <Transition>Hello Folks!</Transition> */}
            {/* <ExternalLink arrow href="www.google.com" underline>
               Hello Folks
            </ExternalLink> */}
         </MainLayout>

         <SectionContainer>
            <Advert />
         </SectionContainer>
         <MyDetails />
         {/* <Experties /> */}
         {/* <Section>
            <Experties />
         </Section> */}
         {/* <SectionContainer isScrollSection>
            <AnimatedBorders />
         </SectionContainer> */}
         <SectionContainer>
            <About />
         </SectionContainer>

         {/* <SectionContainer isScrollSection>
            <div className="border border-gray my-2 mb-5">
               <nav>
                  {links.map((item) => (
                     <Link
                        className="flex items-end justify-between pl-[120px] pb-[40px] pt-[80px] pr-[41px] border-b border-gray relative group dark:text-white"
                        href={item.to}
                        key={+item.id}
                     >
                        <div className="absolute top-0 left-0 w-full h-0 bg-dark dark:bg-white group-hover:h-full transition-s duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]" />
                        <p className="group-hover:text-white dark:group-hover:text-dark relative z-[2] font-ivy-mode font-normal">
                           {item.title}
                        </p>
                        <span className="font-title group-hover:text-white dark:group-hover:text-white relative z-[2]">
                           {item.num}
                        </span>
                     </Link>
                  ))}
               </nav>
            </div>
         </SectionContainer> */}
         {/* <Projects /> */}
         {/* <SectionContainer isScrollSection>
            <Section />
         </SectionContainer> */}
         {/* <SectionContainer isScrollSection>
            <Footer />
         </SectionContainer> */}
         {/* <footer
            data-scroll-section
            className="py-12 px-4 bg-black dark:text-white font-fancy h-screen overflow-hidden"
         >
            <div data-scroll data-scroll-speed={-3}>
               <h2 className="font-syne font-semibold text-7xl ">
                  Muhammad Yousuf
               </h2>
               <h3>
                  “To climb is human; <br /> to summit- divine.”
               </h3>
            </div>
         </footer> */}
         {/* <ScrollSection /> */}
         {/* <SectionContainer>
            <Skills />
         </SectionContainer> */}
         {/* <Horizontal /> */}
         <main className="h-screen dark:bg-midnight sticky top-0" />
         <Over />
         {/* <Footer /> */}
      </ScrollProvider>
   );
}

/* <div className="-translate-y-2/4 absolute w-full h-fit z-[9991] left-0 top-2/4 font-syne ">
               <div className="flex justify-center relative">
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{
                        opacity: 1,
                        transform: 'translate(0px, -50px)',
                     }}
                  >
                     <div
                        className="text-[10vw] text-[#DAD9D5] font-black overflow-hidden h"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        H
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{
                        opacity: 1,
                        transform: 'translate(0px, -50px)',
                     }}
                  >
                     <div
                        className="text-[10vw] text-[#DAD9D5] font-black overflow-hidden e"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        E
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{
                        opacity: 1,
                        transform: 'translate(0px, -50px)',
                     }}
                  >
                     <div
                        className="text-[10vw] text-[#DAD9D5] font-black overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        L
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{
                        opacity: 1,
                        transform: 'translate(0px, -50px)',
                     }}
                  >
                     <div
                        className="text-[10vw] text-[#DAD9D5] font-black overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        L
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{
                        opacity: 1,
                        transform: 'translate(0px, -50px)',
                     }}
                  >
                     <div
                        className="text-[10vw] text-[#DAD9D5] font-black overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        O
                     </div>
                  </div>
               </div>
               <div className="flex justify-center relative  mt-[-6%]">
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5]  overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        H
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5]  overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        O
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5]  overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        W
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5]  overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                        style={{ opacity: 0 }}
                     >
                        -
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        A
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        R
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        E
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                        style={{ opacity: 0 }}
                     >
                        -
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        Y
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        O
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        U
                     </div>
                  </div>
               </div>
               <div className="flex justify-center relative mt-[-3%]">
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        F
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        E
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        E
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        L
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        I
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        N
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        G
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                        style={{ opacity: 0 }}
                     >
                        -
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        T
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        O
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        D
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        A
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        Y
                     </div>
                  </div>
                  <div
                     className="block text-start relative overflow-hidden"
                     style={{ opacity: 1, transform: 'translate(0px, 0px)' }}
                  >
                     <div
                        className="text-[5vw] text-[#DAD9D5] font-syne font-medium overflow-hidden"
                        data-scroll=""
                        data-scroll-offset="1%"
                     >
                        ?
                     </div>
                  </div>
               </div>
            </div> */
