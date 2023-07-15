import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef, type FC, type MutableRefObject } from 'react';

interface TitleProps {
   text: string;
   size?: string;
   type?: string;
   cls?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Title: FC<TitleProps> = ({
   text,
   size = 'base',
   type = 'normal',
   cls = '',
}) => {
   const titleRef = useRef() as MutableRefObject<HTMLHeadingElement>;

   useEffect(() => {
      const chars = gsap.utils.selector(titleRef.current)('span');
      gsap.from(chars, {
         y: '105%',
         duration: 1.25,
         ease: 'expo.out',
         delay: type === 'header' ? 1 : 0.2,
         stagger: { amount: 0.35, from: 'random' },
         scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
         },
      });
   }, [type]);

   const getSize = (size: string) => {
      let dynamicSize: string;
      const title = 'title';
      switch (size) {
         case 'base':
            dynamicSize = `${title}-base`;
            break;
         case 'md':
            dynamicSize = `${title}-md`;
            break;
         case 'lg':
            dynamicSize = `${title}-lg`;
            break;
         case 'xl':
            dynamicSize = `${title}-xl`;
            break;

         default:
            dynamicSize = `${title}-base`;
            break;
      }

      return dynamicSize;
   };
   const getType = (type: string) => {
      let dynamicType;

      switch (type) {
         case 'normal':
            dynamicType = 'title-normal';
            break;
         case 'italic':
            dynamicType = 'title-italic';
            break;

         default:
            dynamicType = 'title-base';
            break;
      }

      return dynamicType;
   };

   return (
      <h1
         aria-label={text.toLocaleLowerCase()}
         className={['title px-2', cls, getSize(size), getType(type)].join(' ')}
         ref={titleRef}
      >
         {text.split('').map((char, i) => (
            <span
               key={i.toString() + char}
               className="relative inline-block whitespace-pre"
            >
               {char}
            </span>
         ))}
      </h1>
   );
};

export default Title;
