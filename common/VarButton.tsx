import React, { useRef, type ReactNode } from 'react';

interface Props extends React.ComponentPropsWithoutRef<'button'> {
   children?: ReactNode;
   className?: string;
   variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({ children, variant, ...props }: Props) {
   switch (variant) {
      case 'secondary':
         return <ButtonSecondary {...props}>{children}</ButtonSecondary>;
      case 'tertiary':
         return <ButtonSecondary {...props}>{children}</ButtonSecondary>;
      default:
         return <ButtonPrimary {...props}>{children}</ButtonPrimary>;
   }
}

function ButtonPrimary({ children, className, ...props }: Props) {
   const spanElement = useRef<HTMLSpanElement>(null);

   const mouseEnterLeaveHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (spanElement.current && spanElement.current.offsetParent) {
         const relX =
            e.pageX -
            (
               spanElement.current.offsetParent as unknown as {
                  offsetLeft: number;
               }
            ).offsetLeft;
         const relY =
            e.pageY -
            (
               spanElement.current.offsetParent as unknown as {
                  offsetTop: number;
               }
            ).offsetTop;
         spanElement.current.style.left = `${relX}px`;
         spanElement.current.style.top = `${relY}px`;
      }
   };

   return (
      <button
         type="button"
         className={`primary-button${className || ''}`}
         onMouseEnter={mouseEnterLeaveHandler}
         onMouseLeave={mouseEnterLeaveHandler}
         {...props}
      >
         {children}
         <span ref={spanElement} />
      </button>
   );
}

function ButtonSecondary({ children, className, ...props }: Props) {
   return (
      <button
         type="button"
         className={`primary-button${className || ''}`}
         {...props}
      >
         {children}
         <span />
      </button>
   );
}
