'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const letterPos = [
   30, 67, 83, 98, 128, 154, 188, 225, 260, 275, 316, 350, 384, 419, 434, 470,
   509, 545, 570,
];

const MainHeading: React.FC = () => {
   useEffect(() => {
      const timeline = gsap.timeline({ duration: 1.2 });
      const el = document.querySelector('.main-heading .svg-bar rect');

      letterPos.forEach((x) =>
         timeline.to(el, { x, duration: 0.0425, ease: 'steps(1)' })
      );

      gsap.fromTo(
         el,
         { opacity: 0 },
         {
            duration: 0.5,
            opacity: 0.8,
            repeat: 7,
            yoyo: true,
            ease: 'power1',
         }
      );
      gsap.fromTo(
         '.main-heading .svg-first path',
         {
            opacity: 0,
         },
         {
            duration: 0.01,
            opacity: 1,
            stagger: {
               from: 'start',
               axis: 'x',
               amount: 0.75,
            },
            delay: 1.25,
         }
      );

      gsap.fromTo(
         '.main-heading .svg-second path',
         {
            strokeDashoffset: 400,
            strokeDasharray: 400,
         },
         {
            duration: 2.5,
            strokeDashoffset: 0,
            stagger: 0.1,
            delay: 2.25,
            ease: 'power1',
         }
      );
      gsap.to('.main-heading .svg-second path', {
         duration: 1,
         fill: '#f4f4f5',
         stagger: 0.1,
         delay: 2.9,
      });

      gsap.fromTo(
         '.main-heading .svg-third',
         {
            clipPath: 'inset(0 100% 0 0)',
         },
         {
            duration: 1,
            clipPath: 'inset(0 0% 0 0)',
            delay: 2,
            ease: 'power1',
         }
      );
      gsap.to('.main-heading .svg-third', {
         duration: 2,
         opacity: '0',
         delay: 4,
         ease: 'power1',
      });
      gsap.fromTo(
         '.main-heading',
         {
            y: 40,
         },
         {
            duration: 1,
            y: 0,
            opacity: 1,
            delay: 5,
         }
      );
      gsap.fromTo(
         '.main-subheading',
         {
            opacity: 0,
         },
         {
            duration: 1.8,
            opacity: 1,
            delay: 5,
            ease: 'power1',
         }
      );
   }, []);

   return (
      <div className="main-heading w-full">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 571 130"
            className="main-heading-title"
            style={{ transform: 'scale(0.99)' }}
         >
            <g className="svg-bar fill-neutral-100">
               <rect x="0.5" y="-2" width="1" height="60" />
            </g>
            <g className="svg-first fill-neutral-100 stroke-[0.5] stroke-violet-600">
               <path d="M0 43.2v-42h27.1v6.2H7.6v11.8h15.7v6.1H7.6v18H0z" />
               <path d="M44 43.9c-3.7 0-6.6-1.2-8.6-3.5s-3-5.7-3-10.2V13.4H40v16.1c0 2.6.5 4.5 1.6 5.9 1 1.4 2.7 2 4.9 2 2.1 0 3.9-.8 5.2-2.3 1.4-1.5 2.1-3.6 2.1-6.4V13.3h7.7v29.8h-6.8l-.6-5c-.9 1.8-2.2 3.2-4 4.2-1.7 1.1-3.8 1.6-6.1 1.6z" />
               <path d="M69.3 0H77v43.2h-7.7z" />
               <path d="M84.9 0h7.7v43.2h-7.7z" />
               <path d="M112.7 43.9c-2.6 0-5-.4-7-1.3s-3.6-2-4.8-3.6c-1.2-1.5-1.9-3.3-2.2-5.3h7.7c.2 1.2.9 2.2 2 3s2.4 1.2 4.1 1.2c1.7 0 2.9-.3 3.7-1s1.2-1.5 1.2-2.3c0-1.3-.6-2.1-1.7-2.6s-2.7-.9-4.7-1.4c-1.3-.3-2.6-.6-3.9-1-1.3-.4-2.5-.9-3.6-1.5s-2-1.4-2.7-2.4-1-2.2-1-3.6c0-2.6 1.1-4.9 3.1-6.7 2.1-1.8 5-2.7 8.9-2.7 3.5 0 6.3.8 8.4 2.5 2.1 1.6 3.3 3.9 3.8 6.8h-7.2c-.4-2.2-2.1-3.3-5-3.3-1.4 0-2.5.3-3.3.8-.8.6-1.2 1.3-1.2 2.1 0 .9.6 1.6 1.7 2.1 1.2.5 2.7 1 4.6 1.4 2.1.5 4 1 5.7 1.6s3.1 1.4 4.2 2.6c1 1.1 1.6 2.8 1.6 4.9 0 1.8-.4 3.5-1.4 5s-2.4 2.6-4.3 3.5c-1.9.8-4.1 1.2-6.7 1.2z" />
               <path d="M144.2 43.2c-3.1 0-5.6-.8-7.5-2.3s-2.8-4.2-2.8-8.1v-13h-5.1v-6.4h5.1l.9-8h6.8v8h8v6.4h-8v13c0 1.4.3 2.4.9 3 .6.5 1.7.8 3.2.8h3.7v6.5h-5.2v.1z" />
               <path d="M166.5 43.9c-2.6 0-4.7-.4-6.3-1.2-1.6-.8-2.9-1.9-3.7-3.3s-1.2-2.9-1.2-4.5c0-2.8 1.1-5 3.2-6.7 2.2-1.7 5.4-2.6 9.7-2.6h7.6v-.7c0-2-.6-3.5-1.7-4.5-1.2-1-2.6-1.4-4.3-1.4-1.6 0-2.9.4-4.1 1.1-1.2.7-1.9 1.8-2.2 3.3H156c.2-2.2.9-4 2.2-5.6s2.9-2.8 4.9-3.7c2-.9 4.2-1.3 6.7-1.3 4.2 0 7.6 1.1 10 3.2s3.7 5.1 3.7 9v18.3H177l-.7-4.8c-.9 1.6-2.1 2.9-3.7 4-1.6.9-3.7 1.4-6.1 1.4zm1.7-6c2.2 0 3.9-.7 5.1-2.2 1.2-1.4 2-3.2 2.3-5.3h-6.5c-2 0-3.5.4-4.4 1.1s-1.3 1.6-1.3 2.7c0 1.2.4 2.1 1.3 2.7.9.7 2.1 1 3.5 1z" />
               <path d="M205.4 43.9c-3 0-5.7-.7-8-2s-4.2-3.2-5.5-5.5c-1.3-2.4-2-5.1-2-8.1s.7-5.7 2-8.1 3.2-4.2 5.5-5.5 5-2 8-2c3.8 0 7 1 9.6 3s4.3 4.7 5 8.2h-8.1c-.4-1.4-1.2-2.6-2.4-3.4s-2.6-1.2-4.2-1.2c-2.1 0-3.9.8-5.4 2.4s-2.2 3.8-2.2 6.7c0 2.8.7 5.1 2.2 6.7s3.3 2.4 5.4 2.4c1.6 0 3-.4 4.2-1.2 1.2-.8 2-1.9 2.4-3.4h8.1c-.7 3.4-2.4 6.1-5 8.1-2.6 1.9-5.8 2.9-9.6 2.9z" />
               <path d="M226.8 43.2V0h7.7v25.5l10.6-12.1h9.1L242 27l14.2 16.2h-9.6l-12.1-14.9v14.9z" />
               <path d="M275.4 43.2v-42h14.3c4.9 0 9 .9 12.2 2.6s5.5 4.2 7.1 7.3c1.5 3.1 2.3 6.8 2.3 11.1 0 4.2-.8 7.9-2.3 11.1-1.5 3.1-3.9 5.6-7.1 7.3-3.2 1.7-7.2 2.6-12.2 2.6h-14.3zm7.6-6.6h6.3c3.5 0 6.3-.6 8.3-1.7s3.5-2.8 4.4-4.9 1.3-4.7 1.3-7.8c0-3-.4-5.6-1.3-7.7-.9-2.2-2.3-3.8-4.4-5-2-1.2-4.8-1.7-8.3-1.7H283v28.8z" />
               <path d="M332.3 43.9c-3 0-5.7-.6-8-1.9s-4.1-3.1-5.5-5.4c-1.3-2.3-2-5-2-8 0-3.1.6-5.8 2-8.2 1.3-2.4 3.1-4.3 5.4-5.6 2.3-1.3 5-2 8.1-2 2.9 0 5.5.6 7.7 1.9s4 3 5.2 5.2c1.3 2.2 1.9 4.7 1.9 7.4v1.4c0 .5-.1 1-.1 1.5h-22.6c.2 2.3 1 4.1 2.4 5.5 1.5 1.3 3.2 2 5.3 2 1.6 0 2.9-.3 3.9-1 1.1-.7 1.8-1.6 2.4-2.7h7.8c-.6 1.9-1.5 3.6-2.8 5.1s-2.9 2.8-4.8 3.6c-1.7.7-3.9 1.2-6.3 1.2zm.1-25c-1.9 0-3.5.5-5 1.6-1.4 1.1-2.4 2.7-2.8 4.8h14.8c-.1-2-.8-3.5-2.2-4.7-1.2-1.1-2.9-1.7-4.8-1.7z" />
               <path d="m360.6 43.2-10.9-29.8h8l7.6 22.5 7.6-22.5h8l-11 29.8z" />
               <path d="M398.7 43.9c-3 0-5.7-.6-8-1.9s-4.1-3.1-5.5-5.4c-1.3-2.3-2-5-2-8 0-3.1.6-5.8 1.9-8.2s3.1-4.3 5.4-5.6c2.3-1.3 5-2 8.1-2 2.9 0 5.5.6 7.7 1.9s4 3 5.2 5.2c1.3 2.2 1.9 4.7 1.9 7.4v1.4c0 .5 0 1-.1 1.5h-22.6c.2 2.3 1 4.1 2.4 5.5 1.5 1.3 3.2 2 5.3 2 1.6 0 2.9-.3 3.9-1 1.1-.7 1.8-1.6 2.4-2.7h7.8c-.6 1.9-1.5 3.6-2.8 5.1s-2.9 2.8-4.8 3.6-3.8 1.2-6.2 1.2zm.1-25c-1.9 0-3.5.5-5 1.6-1.4 1.1-2.4 2.7-2.8 4.8h14.8c-.1-2-.8-3.5-2.2-4.7-1.2-1.1-2.9-1.7-4.8-1.7z" />
               <path d="M420.1 43.2V0h7.7v43.2z" />
               <path d="M450 43.9c-2.9 0-5.5-.7-7.8-2s-4.1-3.2-5.5-5.5c-1.3-2.3-2-5-2-8.1s.7-5.8 2-8.1c1.4-2.3 3.2-4.2 5.5-5.5s4.9-2 7.8-2c2.8 0 5.4.7 7.7 2s4.1 3.1 5.5 5.5c1.3 2.3 2 5.1 2 8.1 0 3.1-.7 5.8-2 8.1s-3.2 4.2-5.5 5.5-4.9 2-7.7 2zm0-6.7c2 0 3.7-.8 5.2-2.2 1.5-1.5 2.2-3.7 2.2-6.7s-.7-5.2-2.2-6.7-3.2-2.2-5.2-2.2-3.8.8-5.2 2.2c-1.5 1.5-2.2 3.7-2.2 6.7s.7 5.2 2.2 6.7c1.4 1.5 3.2 2.2 5.2 2.2z" />
               <path d="M472 56.4v-43h6.8l.8 4.3c1-1.3 2.2-2.5 3.8-3.5 1.6-1 3.6-1.5 6.2-1.5 2.8 0 5.3.7 7.5 2 2.2 1.4 3.9 3.2 5.2 5.6s1.9 5 1.9 8-.6 5.7-1.9 8-3 4.2-5.2 5.5-4.7 2-7.5 2c-2.2 0-4.2-.4-5.9-1.3s-3-2-4.1-3.5v17.3H472v.1zm16.1-19.2c2.4 0 4.5-.8 6.1-2.5 1.6-1.6 2.4-3.8 2.4-6.4s-.8-4.7-2.4-6.4c-1.6-1.7-3.6-2.5-6.1-2.5s-4.5.8-6.1 2.5-2.4 3.8-2.4 6.4.8 4.7 2.4 6.4c1.6 1.6 3.6 2.5 6.1 2.5z" />
               <path d="M525.6 43.9c-3 0-5.7-.6-8-1.9s-4.1-3.1-5.5-5.4c-1.3-2.3-2-5-2-8 0-3.1.6-5.8 1.9-8.2s3.1-4.3 5.4-5.6c2.3-1.3 5-2 8.1-2 2.9 0 5.5.6 7.7 1.9s4 3 5.2 5.2c1.3 2.2 1.9 4.7 1.9 7.4v1.4c0 .5 0 1-.1 1.5h-22.4c.2 2.3 1 4.1 2.4 5.5 1.5 1.3 3.2 2 5.3 2 1.6 0 2.9-.3 3.9-1 1.1-.7 1.8-1.6 2.4-2.7h7.8c-.6 1.9-1.5 3.6-2.8 5.1s-2.9 2.8-4.8 3.6-4 1.2-6.4 1.2zm.1-25c-1.9 0-3.5.5-5 1.6-1.4 1.1-2.4 2.7-2.8 4.8h14.9c-.1-2-.8-3.5-2.2-4.7-1.3-1.1-3-1.7-4.9-1.7z" />
               <path d="M547 43.2V13.4h6.8l.7 5.6c1.1-1.9 2.5-3.4 4.4-4.6s4-1.7 6.6-1.7v8.1h-2.2c-1.7 0-3.2.3-4.5.8s-2.4 1.4-3.1 2.7c-.7 1.3-1.1 3.1-1.1 5.3v13.6H547z" />
            </g>
            <g className="svg-second fill-none stroke-[0.5] stroke-violet-600 dark:stroke-neutral-100">
               <path d="M41.2 115.8c-3.1 0-5.8-.5-8-1.6-2.3-1.1-4-2.5-5.3-4.5-1.3-1.9-1.9-4.2-1.9-6.7 0-2.7.8-5.2 2.3-7.4 1.5-2.2 3.8-4 6.8-5.3-1.2-1.4-2.1-2.7-2.6-4-.5-1.2-.8-2.6-.8-4 0-1.9.5-3.6 1.4-5.1s2.3-2.7 4.1-3.6c1.8-.9 3.9-1.3 6.4-1.3s4.7.5 6.4 1.4c1.8.9 3.1 2.2 4 3.7s1.3 3.3 1.2 5.2h-7.3c0-1.5-.4-2.6-1.3-3.3-.9-.7-1.9-1.1-3.1-1.1-1.4 0-2.5.4-3.3 1.1-.8.8-1.2 1.7-1.2 2.9 0 1 .3 2 1 3.1.6 1 1.6 2.2 2.8 3.6l11.8 11.6c.8-1.4 1.7-2.9 2.6-4.7l1.3-2.6h7.9l-2.1 4.1c-1.6 3.2-3.2 6-4.8 8.2l9.7 9.5H60l-4.7-4.7c-2 1.9-4.2 3.2-6.5 4.1-2.3 1-4.9 1.4-7.6 1.4zm-7.8-13.2c0 2 .7 3.6 2.2 5 1.5 1.3 3.4 2 5.8 2 3.5 0 6.5-1.2 9.1-3.7l-11.1-11c-2 .9-3.6 2-4.5 3.3-1 1.2-1.5 2.7-1.5 4.4z" />
               <path d="M88.3 115.2v-42h14.3c4.9 0 9 .9 12.1 2.6 3.2 1.7 5.5 4.2 7.1 7.3 1.5 3.1 2.3 6.8 2.3 11.1 0 4.2-.8 7.9-2.3 11.1-1.5 3.1-3.9 5.6-7.1 7.3-3.2 1.7-7.2 2.6-12.1 2.6H88.3zm7.7-6.6h6.3c3.5 0 6.3-.6 8.3-1.7s3.5-2.8 4.4-4.9 1.3-4.7 1.3-7.8c0-3-.4-5.6-1.3-7.7-.9-2.2-2.3-3.8-4.4-5-2-1.2-4.8-1.7-8.3-1.7H96v28.8z" />
               <path d="M135 80.8c-1.4 0-2.5-.4-3.5-1.3-.9-.8-1.3-1.9-1.3-3.2 0-1.3.4-2.3 1.3-3.2.9-.8 2-1.2 3.5-1.2 1.4 0 2.5.4 3.5 1.2.9.8 1.3 1.9 1.3 3.2 0 1.3-.4 2.3-1.3 3.2-1 .9-2.1 1.3-3.5 1.3z M131.1 85.4h7.7v29.8h-7.7z" />
               <path d="M159.4 106.3c-1.4 0-2.8-.2-4-.5l-2.2 2.2c.7.4 1.6.7 2.8.9 1.2.2 3 .5 5.6.7 4 .4 6.8 1.3 8.6 2.8s2.7 3.6 2.7 6.3c0 1.8-.5 3.4-1.4 5-1 1.6-2.4 2.9-4.4 3.8-2 1-4.6 1.5-7.7 1.5-4.2 0-7.7-.8-10.3-2.4s-3.9-4-3.9-7.1c0-2.7 1.3-5 3.9-7-.8-.4-1.5-.7-2.1-1.1s-1.1-.8-1.5-1.3v-1.4l5.2-5.5c-2.3-2-3.5-4.7-3.5-7.9 0-2 .5-3.8 1.5-5.5 1-1.6 2.4-2.9 4.2-3.9s4-1.4 6.5-1.4c1.7 0 3.2.2 4.7.7h11.3v4.7l-5.1.4c.8 1.5 1.2 3.2 1.2 5 0 2-.5 3.8-1.4 5.5-1 1.6-2.4 2.9-4.2 3.9-1.8 1.1-4 1.6-6.5 1.6zm-7.2 12.5c0 1.5.7 2.6 2.1 3.3 1.4.7 3.1 1.1 5.1 1.1 1.9 0 3.5-.4 4.7-1.2 1.2-.8 1.8-1.8 1.8-3.2 0-1.1-.4-2-1.2-2.7s-2.3-1.2-4.6-1.3c-1.6-.1-3.2-.3-4.6-.5-1.2.6-2 1.3-2.5 2.1s-.8 1.6-.8 2.4zm7.2-18.4c1.6 0 2.9-.4 3.9-1.3s1.5-2 1.5-3.6-.5-2.8-1.5-3.6c-1-.8-2.3-1.3-3.9-1.3s-3 .4-4 1.3c-1 .8-1.5 2-1.5 3.6s.5 2.8 1.5 3.6c1.1.9 2.4 1.3 4 1.3z" />
               <path d="M185.1 80.8c-1.4 0-2.5-.4-3.5-1.3-.9-.8-1.3-1.9-1.3-3.2 0-1.3.4-2.3 1.3-3.2.9-.8 2-1.2 3.5-1.2 1.4 0 2.5.4 3.5 1.2.9.8 1.3 1.9 1.3 3.2 0 1.3-.4 2.3-1.3 3.2-.9.9-2.1 1.3-3.5 1.3z M181.3 85.4h7.7v29.8h-7.7z" />
               <path d="M210.3 115.2c-3.1 0-5.6-.8-7.5-2.3s-2.8-4.2-2.8-8.1v-13h-5.2v-6.4h5.1l.9-8h6.8v8h8v6.4h-8v13c0 1.4.3 2.4.9 3 .6.5 1.7.8 3.2.8h3.7v6.5h-5.1v.1z" />
               <path d="M232.5 115.9c-2.6 0-4.7-.4-6.3-1.2-1.6-.8-2.9-1.9-3.7-3.3s-1.2-2.9-1.2-4.5c0-2.8 1.1-5 3.2-6.7 2.2-1.7 5.4-2.6 9.7-2.6h7.6v-.7c0-2-.6-3.5-1.7-4.5-1.2-1-2.6-1.4-4.3-1.4-1.6 0-2.9.4-4.1 1.1s-1.9 1.8-2.2 3.3H222c.2-2.2.9-4 2.2-5.6s2.9-2.8 4.9-3.7c2-.9 4.2-1.3 6.7-1.3 4.2 0 7.6 1.1 10 3.2s3.7 5.1 3.7 9v18.3H243l-.7-4.8c-.9 1.6-2.1 2.9-3.7 4-1.6.9-3.6 1.4-6.1 1.4zm1.8-6c2.2 0 3.9-.7 5.1-2.2 1.2-1.4 2-3.2 2.3-5.3h-6.5c-2 0-3.5.4-4.4 1.1s-1.3 1.6-1.3 2.7c0 1.2.4 2.1 1.3 2.7.9.7 2 1 3.5 1z M256.9 115.2V72h7.7v43.2z" />
               <path d="M286.9 115.2v-42h14.3c4.9 0 9 .9 12.2 2.6s5.5 4.2 7.1 7.3c1.5 3.1 2.3 6.8 2.3 11.1 0 4.2-.8 7.9-2.3 11.1-1.5 3.1-3.9 5.6-7.1 7.3-3.2 1.7-7.2 2.6-12.2 2.6h-14.3zm7.7-6.6h6.3c3.5 0 6.3-.6 8.3-1.7s3.5-2.8 4.4-4.9 1.3-4.7 1.3-7.8c0-3-.4-5.6-1.3-7.7-.9-2.2-2.3-3.8-4.4-5-2-1.2-4.8-1.7-8.3-1.7h-6.3v28.8z" />
               <path d="M343.8 115.9c-3 0-5.7-.6-8-1.9s-4.1-3.1-5.5-5.4c-1.3-2.3-2-5-2-8 0-3.1.6-5.8 2-8.2 1.3-2.4 3.1-4.3 5.4-5.6 2.3-1.3 5-2 8.1-2 2.9 0 5.5.6 7.7 1.9s4 3 5.2 5.2c1.3 2.2 1.9 4.7 1.9 7.4v1.4c0 .5 0 1-.1 1.5h-22.6c.2 2.3 1 4.1 2.4 5.5 1.5 1.3 3.2 2 5.3 2 1.6 0 2.9-.3 3.9-1 1.1-.7 1.8-1.6 2.4-2.7h7.8c-.6 1.9-1.5 3.6-2.8 5.1s-2.9 2.8-4.8 3.6c-1.7.7-3.9 1.2-6.3 1.2zm.1-25c-1.9 0-3.5.5-5 1.6-1.4 1.1-2.4 2.7-2.8 4.8h14.8c-.1-2-.8-3.5-2.2-4.7-1.2-1.1-2.9-1.7-4.8-1.7z" />
               <path d="M377.5 115.9c-2.6 0-5-.4-7-1.3s-3.6-2-4.8-3.6c-1.2-1.5-1.9-3.3-2.2-5.3h7.7c.2 1.2.9 2.2 2 3s2.4 1.2 4.1 1.2 2.9-.3 3.7-1c.8-.7 1.2-1.5 1.2-2.3 0-1.3-.6-2.1-1.7-2.6s-2.7-.9-4.7-1.4c-1.3-.3-2.6-.6-3.9-1s-2.5-.9-3.6-1.5-2-1.4-2.7-2.4-1-2.2-1-3.6c0-2.6 1-4.9 3.1-6.7 2.1-1.8 5-2.7 8.9-2.7 3.5 0 6.3.8 8.4 2.5 2.1 1.6 3.3 3.9 3.8 6.8h-7.3c-.4-2.2-2.1-3.3-5-3.3-1.4 0-2.5.3-3.3.8-.8.6-1.2 1.3-1.2 2.1 0 .9.6 1.6 1.7 2.1 1.2.5 2.7 1 4.6 1.4 2.1.5 4 1 5.7 1.6s3.1 1.4 4.2 2.6c1 1.1 1.6 2.8 1.6 4.9 0 1.8-.4 3.5-1.4 5s-2.4 2.6-4.3 3.5c-1.8.8-4 1.2-6.6 1.2z" />
               <path d="M400.9 80.8c-1.4 0-2.5-.4-3.5-1.3-.9-.8-1.3-1.9-1.3-3.2 0-1.3.5-2.3 1.3-3.2.9-.8 2-1.2 3.5-1.2 1.4 0 2.5.4 3.5 1.2.9.8 1.3 1.9 1.3 3.2 0 1.3-.5 2.3-1.3 3.2-1 .9-2.1 1.3-3.5 1.3z M397 85.4h7.7v29.8H397z" />
               <path d="M425.4 106.3c-1.4 0-2.8-.2-4-.5l-2.2 2.2c.7.4 1.6.7 2.8.9 1.2.2 3 .5 5.6.7 4 .4 6.8 1.3 8.6 2.8 1.8 1.5 2.7 3.6 2.7 6.3 0 1.8-.5 3.4-1.4 5-1 1.6-2.4 2.9-4.4 3.8-2 1-4.6 1.5-7.7 1.5-4.2 0-7.7-.8-10.3-2.4-2.6-1.6-3.9-4-3.9-7.1 0-2.7 1.3-5 3.9-7-.8-.4-1.5-.7-2.1-1.1s-1.1-.8-1.5-1.3v-1.4l5.2-5.5c-2.3-2-3.5-4.7-3.5-7.9 0-2 .5-3.8 1.5-5.5 1-1.6 2.4-2.9 4.2-3.9s4-1.4 6.5-1.4c1.7 0 3.2.2 4.7.7h11.3v4.7l-5.1.4c.8 1.5 1.2 3.2 1.2 5 0 2-.5 3.8-1.4 5.5-1 1.6-2.4 2.9-4.2 3.9-1.9 1.1-4.1 1.6-6.5 1.6zm-7.2 12.5c0 1.5.7 2.6 2.1 3.3 1.4.7 3.1 1.1 5.1 1.1 1.9 0 3.5-.4 4.7-1.2 1.2-.8 1.8-1.8 1.8-3.2 0-1.1-.4-2-1.2-2.7-.8-.7-2.3-1.2-4.7-1.3-1.6-.1-3.2-.3-4.6-.5-1.2.6-2 1.3-2.5 2.1s-.7 1.6-.7 2.4zm7.2-18.4c1.6 0 2.8-.4 3.9-1.3 1-.8 1.5-2 1.5-3.6s-.5-2.8-1.5-3.6c-1-.8-2.3-1.3-3.9-1.3s-3 .4-4 1.3c-1 .8-1.5 2-1.5 3.6s.5 2.8 1.5 3.6c1 .9 2.3 1.3 4 1.3z" />
               <path d="M446.9 115.2V85.4h6.8l.6 5c.9-1.8 2.2-3.2 4-4.2 1.7-1 3.8-1.6 6.2-1.6 3.7 0 6.5 1.2 8.6 3.5 2 2.3 3.1 5.7 3.1 10.2v16.8h-7.7V99c0-2.6-.5-4.5-1.6-5.9-1-1.4-2.7-2-4.9-2s-3.9.8-5.3 2.3-2.1 3.6-2.1 6.4v15.4h-7.7z" />
               <path d="M497.8 115.9c-3 0-5.7-.6-8-1.9s-4.1-3.1-5.5-5.4c-1.3-2.3-2-5-2-8 0-3.1.6-5.8 1.9-8.2s3.1-4.3 5.4-5.6c2.3-1.3 5-2 8.1-2 2.9 0 5.5.6 7.7 1.9s4 3 5.2 5.2c1.3 2.2 1.9 4.7 1.9 7.4v1.4c0 .5 0 1-.1 1.5h-22.6c.2 2.3 1 4.1 2.4 5.5 1.5 1.3 3.2 2 5.3 2 1.6 0 2.9-.3 3.9-1 1.1-.7 1.8-1.6 2.4-2.7h7.8c-.6 1.9-1.5 3.6-2.8 5.1s-2.9 2.8-4.8 3.6-3.8 1.2-6.2 1.2zm.1-25c-1.9 0-3.5.5-5 1.6-1.4 1.1-2.4 2.7-2.8 4.8h14.8c-.1-2-.8-3.5-2.2-4.7-1.2-1.1-2.8-1.7-4.8-1.7z" />
               <path d="M519.3 115.2V85.4h6.8l.7 5.6c1.1-1.9 2.5-3.4 4.4-4.6s4-1.7 6.6-1.7v8.1h-2.2c-1.7 0-3.2.3-4.5.8s-2.4 1.4-3.1 2.7c-.7 1.3-1.1 3.1-1.1 5.3v13.6h-7.6z" />
            </g>
            <g className="svg-third stroke-1 dark:stroke-neutral-300 dasharray-2 opacity-25">
               <path d="M15.7 72.25H547" />
               <path d="M15.7 85.4H547" />
               <path d="M15.7 115.4H547" />
               <path d="M15.7 129.5H547" />
            </g>
         </svg>
         <div className="main-subheading">
            <div className="mx-auto my-6 max-w-2xl text-lg dark:text-neutral-300 text-center">
               Hi, I’m Muhammad Yousuf based in Karachi, PK
               <br />
               Scroll for more
            </div>
            <div className="text-center">
               <a href="#work" data-scroll-to>
                  <svg
                     width="24"
                     height="30"
                     viewBox="0 0 24 30"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="inline"
                  >
                     <motion.path
                        className="fill-neutral-300"
                        d="M10.8 6.2C10.8 5.5 11.4 4.9 12 4.9C12.6 4.9 13.2 5.5 13.2 6.2C13.2 6.9 12.8 7.5 12 7.5C11.2 7.4 10.8 6.9 10.8 6.2ZM12 2.5C12.8 2.5 13.2 1.9 13.2 1.2C13.2 0.6 12.7 0 12 0C11.3 0 10.8 0.6 10.8 1.3C10.8 1.9 11.2 2.5 12 2.5ZM23.7 16.1C23.3 15.6 22.5 15.6 22 16.1L13.2 25.1V11.2C13.2 10.5 12.6 9.9 12 9.9C11.4 9.9 10.8 10.5 10.8 11.2V25.1L2 16.1C1.6 15.6 0.8 15.6 0.3 16.1C-0.1 16.6 -0.1 17.4 0.3 17.8L11.1 28.8C11.3 29 11.7 29.1 11.9 29.1C12.2 29.1 12.6 29 12.7 28.8L23.5 17.8C24.1 17.2 24.1 16.6 23.7 16.1Z"
                        fill="#fff"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ ease: 'easeInOut', duration: 3 }}
                     />
                  </svg>
               </a>
            </div>
         </div>
      </div>
   );
};

export default MainHeading;
