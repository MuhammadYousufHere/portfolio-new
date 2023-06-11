'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
   const cursor = useRef<HTMLDivElement>(null);
   const position = useRef({
      x: 0,
      y: 0,
   });

   function handleMouseMove(event: MouseEvent) {
      position.current.x = event.clientX;
      position.current.y = event.clientY;
   }

   const handleMouseDown = () => {
      cursor.current?.classList.add('cursor-down');
   };

   function handleMouseUp() {
      cursor.current?.classList.remove('cursor-down');
   }

   function handleMouseEnter() {
      cursor.current?.classList.add('cursor-grow');
   }

   function handleMouseLeave() {
      cursor.current?.classList.remove('cursor-grow');
   }

   function handleBodyEnter() {
      cursor.current?.classList.remove('hide');
   }

   function handleBodyLeave() {
      cursor.current?.classList.add('hide');
   }

   function handleRepeat() {
      if (cursor.current) {
         gsap.set(cursor.current, {
            css: {
               left: position.current.x,
               top: position.current.y,
            },
         });
      }
   }
   useEffect(() => {
      const links = document.querySelectorAll('a');

      if (cursor.current) {
         gsap.to(cursor.current, {
            duration: 0.015,
            repeat: -1,
            ease: 'none',
            onRepeat: handleRepeat,
         });
      }

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      // Show hide cursor on mouse leaving window / body
      document.body.addEventListener('mouseenter', handleBodyEnter);
      document.body.addEventListener('mouseleave', handleBodyLeave);

      links.forEach((link) => {
         link.addEventListener('mousemove', handleMouseEnter);
         link.addEventListener('mouseleave', handleMouseLeave);
      });

      // Unattach mousemove event on destroy
      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mousedown', handleMouseDown);
         window.removeEventListener('mouseup', handleMouseUp);
         document.body.removeEventListener('mouseenter', handleBodyEnter);
         document.body.removeEventListener('mouseleave', handleBodyLeave);
         cursor.current?.removeEventListener('mousemove', handleMouseEnter);
         // eslint-disable-next-line react-hooks/exhaustive-deps
         cursor.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
   }, []);

   return <div className="cursor" ref={cursor} />;
};

export default Cursor;
