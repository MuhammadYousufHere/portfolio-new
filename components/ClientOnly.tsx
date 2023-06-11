'use client';

import {
   useEffect,
   useState,
   type PropsWithChildren,
   type ReactNode,
} from 'react';

type ClientOnlyProps = {
   /**
    * Use this to server render a skeleton or loading state
    */
   ssr: ReactNode;
   fadeInDuration?: number;
};

export function ClientOnly(props: PropsWithChildren<ClientOnlyProps>) {
   const { children, fadeInDuration, ssr } = props;
   const [hasMounted, setHasMounted] = useState(false);

   useEffect(() => {
      setHasMounted(true);
   }, []);

   if (!hasMounted) {
      return <> {ssr} </>;
   }

   return (
      <div
         className="animate-fadeIn"
         style={{
            animationDuration: `${fadeInDuration}ms`,
            opacity: fadeInDuration ? 0 : 1,
         }}
      >
         {children}
      </div>
   );
}
