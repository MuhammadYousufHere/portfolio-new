// import RevealOnEnter from '@my/common/RevealOnEnter';
// import { AnimatePresence, m } from 'framer-motion';
// import { useState } from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

// export default function Quotes({
//    quotes,
//    heading,
// }: {
//    quotes: string;
//    heading: string;
// }) {
//    const { scroll } = useLocomotiveScroll();
//    const [current, setCurrent] = useState(0);

//    const updateCurrent = (e) => {
//       setCurrent(e);
//       scroll.update();
//    };

//    return (
//       <div className="w-full pt-[10vw] transition-all ease-in-out duration-300">
//          <span
//             className="block mx-auto text-center md:text-lg"
//             data-scroll
//             data-scroll-speed={1.1}
//          >
//             <RevealOnEnter>({heading})</RevealOnEnter>
//          </span>

//          <div
//             className="flex items-center justify-center space-x-3 mt-4 mb-6 md:mb-12 relative z-[10]"
//             data-scroll
//             data-scroll-speed={1.1}
//          >
//             {quotes.map((e, i) => (
//                <button
//                   type="button"
//                   onClick={() => updateCurrent(i)}
//                   className={`w-4 h-4 border-2 border-yellow rounded-full transition-colors ease-in-out duration-300 ${
//                      current === i
//                         ? 'bg-yellow'
//                         : 'hover:bg-yellow hover:bg-opacity-20 focus:bg-yellow focus:bg-opacity-20'
//                   }`}
//                   key={+i}
//                />
//             ))}
//          </div>

//          <h3
//             className="text-[9.5vw] md:text-[5.9vw] font-display uppercase leading-[0.92] md:leading-[0.92] text-center relative z-10 mix-blend-lighten w-full mb-12 md:mb-12 pt-5 md:pt-0"
//             data-scroll
//             data-scroll-speed={1.1}
//          >
//             <AnimatePresence>
//                <span className="block overflow-hidden relative w-full">
//                   {quotes.map((e, i) =>
//                      i === current ? (
//                         <m.span
//                            key={+i}
//                            className="block"
//                            initial={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            animate={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            exit={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                         >
//                            {e.text}
//                         </m.span>
//                      ) : (
//                         <m.span
//                            key={i}
//                            className="absolute inset-0"
//                            initial={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            animate={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            exit={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                         >
//                            {e.text}
//                         </m.span>
//                      )
//                   )}
//                </span>
//             </AnimatePresence>
//          </h3>

//          <span
//             className="block w-8 md:w-12 xl:w-14 mx-auto text-center mb-3 md:mb-4 xl:mb-5"
//             data-scroll
//             data-scroll-speed={1.1}
//          >
//             <AnimatePresence>
//                <span className="block overflow-hidden relative w-full">
//                   {quotes.map((e, i) =>
//                      i == current ? (
//                         <m.span
//                            key={i}
//                            className="block"
//                            initial={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            animate={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            exit={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                         >
//                            <svg
//                               className="w-full"
//                               viewBox="0 0 60 83"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                            >
//                               <path
//                                  d="m59.383 53.803.013.001c.203-4.613.784-20.353-.255-29.166-.299-2.555-2.21-5.651-4.63-9.572-1.944-3.153-4.147-6.729-5.704-10.444-1.245-2.968-3.334-4.33-5.585-3.635-2.515.774-4.783 4.117-5.339 8.916-2.225-3.216-3.835-3.439-5.639-2.407-2.549 1.457-4.04 6.46-2.121 12.312.91 2.779 2.58 4.506 4.049 6.028 1.105 1.144 2.058 2.132 2.439 3.302l.358 1.168A323.8 323.8 0 0 0 33.9 28.33c-2.244-1.432-3.911-2.133-5.409-2.28-2.026-.2-3.572.62-5.527 1.66-2.455 1.302-5.814 3.085-12.34 4.2-1.94.33-3.353 1.225-4.08 2.592-.727 1.365-.728 3.076-.004 5.09l.02.053c-5.779.959-3.846 8.71-5.394 15.925-.407 1.892-.806 3.363.21 5.483C7.724 74.29 16.226 80.509 29.803 81.846c5.426.534 9.267.77 13.078-.756 4.76-1.901 14.068-12.987 16.114-22.534.362-1.679.481-3.266.387-4.753ZM42.067 5.26c1.313-3.165 3.967-2.603 4.889-.321 1.592 3.943 3.856 7.948 5.855 11.188 2.058 3.332 4.135 6.715 4.362 8.633.72 6.11.379 17.002.199 23.692-2.118-3.645-6.117-7.264-8.835-9.583-.174-2.673-.545-7.34-1.316-13.603-.511-4.19-4.875-7.03-5.608-12.88-.337-2.71-.331-5.232.454-7.126Zm-9.558 12.177c-.538-1.504-.82-7.013 1.171-8.334 1.853-1.23 3.014 1.642 4.067 3.924.245 4.033 2.164 7.789 3.554 9.96 1.083 1.692 2.018 3.15 2.19 4.754.214 1.981.46 5.221.63 7.58a112.537 112.537 0 0 0-3.204-2.336 144.998 144.998 0 0 0-2.606-8.018c-.926-2.62-4.495-3.876-5.802-7.53Zm8.823 59.44c-3.391 1.36-6.761 1.178-12.052.657C17.244 76.349 5.837 68.69 2.856 59.207c-.507-1.609.29-3.744.534-6.663.586-6.987 1.09-11.104 4.361-10.782 1.57.154 6.186 4.733 5.315 15.115l11.435 6.998c3.802-3.517 14.202-8.617 14.202-8.617-1.376-2.293-.024-8.312-.024-8.312-3.222-.775-9.859-5.013-11.832-10.22-3.29 2.544-17.907 6.446-18.26-.337-.105-2.008 1.598-2.544 2.26-2.657 6.905-1.178 10.344-2.979 12.796-4.28 1.786-.95 3.463-1.721 4.782-1.592 1.105.11 2.766.876 4.67 2.094 5.413 3.45 14.449 8.931 22.159 17.689.718.817 1.574 2.539 1.803 3.614 2.062 9.724-11.015 23.727-15.725 25.62Zm-5.34-21.767c-2.38 1.076-7.952 3.738-11.396 6.548l-8.306-7.02c.436-5.207-.293-9.076-1.613-11.662 3.883.111 8.75-.512 11.291-1.677 1.55 2.1 5.537 6.918 10.238 8.083-.305 1.495-.616 3.785-.213 5.728Z"
//                                  fill="#DEE212"
//                               />
//                            </svg>
//                         </m.span>
//                      ) : (
//                         <m.span
//                            key={i}
//                            className="absolute inset-0"
//                            initial={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            animate={{
//                               y: '100%',
//                               opacity: 0,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                            exit={{
//                               y: 0,
//                               opacity: 1,
//                               transition: {
//                                  duration: 0.9,
//                                  ease: [0.76, 0, 0.24, 1],
//                               },
//                            }}
//                         >
//                            <svg
//                               className="w-full"
//                               viewBox="0 0 60 83"
//                               fill="none"
//                               xmlns="http://www.w3.org/2000/svg"
//                            >
//                               <path
//                                  d="m59.383 53.803.013.001c.203-4.613.784-20.353-.255-29.166-.299-2.555-2.21-5.651-4.63-9.572-1.944-3.153-4.147-6.729-5.704-10.444-1.245-2.968-3.334-4.33-5.585-3.635-2.515.774-4.783 4.117-5.339 8.916-2.225-3.216-3.835-3.439-5.639-2.407-2.549 1.457-4.04 6.46-2.121 12.312.91 2.779 2.58 4.506 4.049 6.028 1.105 1.144 2.058 2.132 2.439 3.302l.358 1.168A323.8 323.8 0 0 0 33.9 28.33c-2.244-1.432-3.911-2.133-5.409-2.28-2.026-.2-3.572.62-5.527 1.66-2.455 1.302-5.814 3.085-12.34 4.2-1.94.33-3.353 1.225-4.08 2.592-.727 1.365-.728 3.076-.004 5.09l.02.053c-5.779.959-3.846 8.71-5.394 15.925-.407 1.892-.806 3.363.21 5.483C7.724 74.29 16.226 80.509 29.803 81.846c5.426.534 9.267.77 13.078-.756 4.76-1.901 14.068-12.987 16.114-22.534.362-1.679.481-3.266.387-4.753ZM42.067 5.26c1.313-3.165 3.967-2.603 4.889-.321 1.592 3.943 3.856 7.948 5.855 11.188 2.058 3.332 4.135 6.715 4.362 8.633.72 6.11.379 17.002.199 23.692-2.118-3.645-6.117-7.264-8.835-9.583-.174-2.673-.545-7.34-1.316-13.603-.511-4.19-4.875-7.03-5.608-12.88-.337-2.71-.331-5.232.454-7.126Zm-9.558 12.177c-.538-1.504-.82-7.013 1.171-8.334 1.853-1.23 3.014 1.642 4.067 3.924.245 4.033 2.164 7.789 3.554 9.96 1.083 1.692 2.018 3.15 2.19 4.754.214 1.981.46 5.221.63 7.58a112.537 112.537 0 0 0-3.204-2.336 144.998 144.998 0 0 0-2.606-8.018c-.926-2.62-4.495-3.876-5.802-7.53Zm8.823 59.44c-3.391 1.36-6.761 1.178-12.052.657C17.244 76.349 5.837 68.69 2.856 59.207c-.507-1.609.29-3.744.534-6.663.586-6.987 1.09-11.104 4.361-10.782 1.57.154 6.186 4.733 5.315 15.115l11.435 6.998c3.802-3.517 14.202-8.617 14.202-8.617-1.376-2.293-.024-8.312-.024-8.312-3.222-.775-9.859-5.013-11.832-10.22-3.29 2.544-17.907 6.446-18.26-.337-.105-2.008 1.598-2.544 2.26-2.657 6.905-1.178 10.344-2.979 12.796-4.28 1.786-.95 3.463-1.721 4.782-1.592 1.105.11 2.766.876 4.67 2.094 5.413 3.45 14.449 8.931 22.159 17.689.718.817 1.574 2.539 1.803 3.614 2.062 9.724-11.015 23.727-15.725 25.62Zm-5.34-21.767c-2.38 1.076-7.952 3.738-11.396 6.548l-8.306-7.02c.436-5.207-.293-9.076-1.613-11.662 3.883.111 8.75-.512 11.291-1.677 1.55 2.1 5.537 6.918 10.238 8.083-.305 1.495-.616 3.785-.213 5.728Z"
//                                  fill="#DEE212"
//                               />
//                            </svg>
//                         </m.span>
//                      )
//                   )}
//                </span>
//             </AnimatePresence>
//          </span>
//          <span
//             className="block mx-auto text-center uppercase text-xs leading-tight md:text-xl md:leading-tight"
//             data-scroll
//             data-scroll-speed={1.1}
//          >
//             <RevealOnEnter>
//                <AnimatePresence>
//                   <span className="block overflow-hidden relative w-full">
//                      {quotes.map((e, i) =>
//                         i == current ? (
//                            <m.span
//                               key={i}
//                               className="block"
//                               initial={{
//                                  y: '100%',
//                                  opacity: 0,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                               animate={{
//                                  y: 0,
//                                  opacity: 1,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                               exit={{
//                                  y: '100%',
//                                  opacity: 0,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                            >
//                               {e.author}
//                            </m.span>
//                         ) : (
//                            <m.span
//                               key={i}
//                               className="absolute inset-0"
//                               initial={{
//                                  y: 0,
//                                  opacity: 1,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                               animate={{
//                                  y: '100%',
//                                  opacity: 0,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                               exit={{
//                                  y: 0,
//                                  opacity: 1,
//                                  transition: {
//                                     duration: 0.9,
//                                     ease: [0.76, 0, 0.24, 1],
//                                  },
//                               }}
//                            >
//                               {e.author}
//                            </m.span>
//                         )
//                      )}
//                   </span>
//                </AnimatePresence>
//             </RevealOnEnter>
//             <span className="block">
//                <RevealOnEnter>
//                   <AnimatePresence>
//                      <span className="block overflow-hidden relative w-full">
//                         {quotes.map((e, i) =>
//                            i === current ? (
//                               <m.span
//                                  key={+i}
//                                  className="block"
//                                  initial={{
//                                     y: '100%',
//                                     opacity: 0,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                                  animate={{
//                                     y: 0,
//                                     opacity: 1,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                                  exit={{
//                                     y: '100%',
//                                     opacity: 0,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                               >
//                                  {e.role}
//                               </m.span>
//                            ) : (
//                               <m.span
//                                  key={i}
//                                  className="absolute inset-0"
//                                  initial={{
//                                     y: 0,
//                                     opacity: 1,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                                  animate={{
//                                     y: '100%',
//                                     opacity: 0,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                                  exit={{
//                                     y: 0,
//                                     opacity: 1,
//                                     transition: {
//                                        duration: 0.9,
//                                        ease: [0.76, 0, 0.24, 1],
//                                     },
//                                  }}
//                               >
//                                  {e.role}
//                               </m.span>
//                            )
//                         )}
//                      </span>
//                   </AnimatePresence>
//                </RevealOnEnter>
//             </span>
//          </span>
//       </div>
//    );
// }
