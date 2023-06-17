import cn from 'classnames';
import { type HTMLProps } from 'react';

interface IProps {
   isScrollSection: boolean;
}
type MyComponentProps = IProps & HTMLProps<HTMLDivElement>;

export default function SectionContainer({
   isScrollSection,
   children,
   className,
   ...rest
}: MyComponentProps) {
   return (
      <section
         className={cn(
            'mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-screen-2xl xl:px-24',
            className
         )}
         {...(isScrollSection && { 'data-scroll-section': true })}
         {...rest}
      >
         {children}
      </section>
   );
}
