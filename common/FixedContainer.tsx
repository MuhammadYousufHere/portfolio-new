import classNames from 'classnames';
import type React from 'react';
import { createElement } from 'react';

interface ContainerProps extends React.HTMLProps<HTMLElement> {
   as?: string;
}

const FixedContainer: React.FC<ContainerProps> = ({
   as = 'div',
   children,
   className,
   ...props
}) =>
   createElement(
      as,
      {
         ...props,
         className: classNames({
            'w-full': true,
            [className as string]: !!className,
         }),
      },
      children
   );

export default FixedContainer;
