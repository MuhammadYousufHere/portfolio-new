// import { cubicEaseIn } from '@my/utils';
// import { useEffect, useRef, useState } from 'react';
// import { useLocomotiveScroll } from 'react-locomotive-scroll';

// export interface IAnimatedCounterProps {
//    from: number;
//    to: number;
//    /**
//     * Unit: seconds
//     *
//     * @default 5
//     */
//    duration?: number;
// }

// export default function AnimatedCounter({
//    from,
//    to,
//    duration = 5,
//    ...delegated
// }: IAnimatedCounterProps) {
//    const { scroll } = useLocomotiveScroll();
//    const contentRef = useRef<HTMLDivElement>(null);
//    const [value, setValue] = useState(from);

//    useEffect(() => {
//       function scrollListener({
//          currentElements,
//       }: {
//          currentElements: Element;
//       }) {
//          const target = currentElements[delegated['data-scroll-id']];

//          if (typeof target === 'object') {
//             const progress = target.progress;
//             const maxProgressBoundary = 0.4;
//             let nextValue: number;

//             if (progress > maxProgressBoundary) {
//                nextValue = to;
//             } else {
//                nextValue =
//                   cubicEaseIn(progress / maxProgressBoundary) * (to - from) +
//                   from;
//             }

//             setValue(nextValue);
//          }
//       }

//       scroll?.on('scroll', scrollListener);
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//    }, [scroll, to]);

//    return (
//       <div
//          className="text-8xl text-center font-semibold tracking[32px] text-gray-400"
//          ref={contentRef}
//          {...delegated}
//       >
//          {value.toFixed(0)}
//       </div>
//    );
// }
