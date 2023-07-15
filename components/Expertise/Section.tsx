import { type FC, type ReactNode } from 'react';

interface SectionProps {
   children: ReactNode;
   isLight?: boolean;
   cls?: string;
   size?: string;
   id?: string;
}

const Section: FC<SectionProps> = ({
   children,
   isLight = false,
   cls = '',
   size = '',
   id = '',
}) => {
   const getSize = (size: string) => {
      let sizeCls;

      switch (size) {
         case 'sm':
            sizeCls = 'h-full';
            break;
         case 'md':
            sizeCls = 'h-[100vh]';
            break;
         case 'lg':
            sizeCls = 'h-[120vh]';
            break;
         case 'xl':
            sizeCls = 'h-[150vh]';
            break;

         default:
            sizeCls = 'h-auto';
            break;
      }

      return sizeCls;
   };
   return (
      <section
         data-scroll-section
         className={[
            'relative w-full min-h-full flex items-center justify-center',
            size ? getSize(size) : getSize('md'),
            cls,
            isLight ? 'section-light' : 'section-dark',
         ].join(' ')}
         id={id || ''}
      >
         {children}
      </section>
   );
};

export { Section };
