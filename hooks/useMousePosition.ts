import { useEffect, useState } from 'react';

type MousePosition = {
   x: number;
   y: number;
};

const useMousePosition = (): MousePosition => {
   const [mousePosition, setMousePosition] = useState<MousePosition>({
      x: 0,
      y: 0,
   });

   const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
   };

   useEffect(() => {
      document.addEventListener('mousemove', handleMouseMove);

      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return mousePosition;
};

export { useMousePosition };
