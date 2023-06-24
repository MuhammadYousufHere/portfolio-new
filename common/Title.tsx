import { useAnimation } from '@my/hooks';
import { titleAnimation } from '@my/lib';
import s from '@my/lib/styles.module.css';
import { type LocoScrollAttrs, type PropsWithChildren } from '@my/types/common';
import classNames from 'classnames';
import { useRef, type FC } from 'react';

interface TitleProps extends LocoScrollAttrs {
   level?: 'h1' | 'h2' | 'h3' | 'p';
   className?: string;
}

export const Title: FC<PropsWithChildren<TitleProps>> = ({
   children,
   level,
   className,
   ...locoAttrs
}) => {
   const ref = useRef<HTMLHeadingElement>(null);
   const Tag = level ?? 'h2';

   useAnimation(() => titleAnimation(ref));

   const classes = classNames(className, {
      [s.title]: level !== 'p',
   });

   return (
      <Tag ref={ref} className={classes} {...locoAttrs}>
         {children}
      </Tag>
   );
};
