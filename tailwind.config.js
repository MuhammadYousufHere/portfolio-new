const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */

const gray700 = 'colors.gray.700';
const gray100 = 'colors.gray.100';
const teal500 = 'colors.teal.500';
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'class',
   important: true,
   theme: {
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xlg: '1220px',
         xl: '1280px',
         mxl: '1470px',
         '2xl': '1536px',
      },
      extend: {
         fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
            mono: [...defaultTheme.fontFamily.mono],
            headings: ['Manrope', ...defaultTheme.fontFamily.sans],
            fancy: ['Sriracha'],
         },
         colors: {
            gray: colors.stone,
            orange: colors.orange,
            blueGray: colors.slate,
            coolGray: colors.gray,
            teal: colors.teal,
            dark: '#111827',
            darker: '#0d131f',
            midnight: '#1e293b',
            'midnight-hover': '#334155',
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,
            amber: colors.amber,
            sky: colors.sky,
            'bg-dark': '#131325',
         },
         typography: (theme) => ({
            DEFAULT: {
               css: {
                  table: false,
                  tbody: false,
                  thead: false,
                  color: theme('colors.slate.700'),
                  a: {
                     color: theme('colors.slate.900'),
                     '&:hover': {},
                     textDecorationColor: theme(teal500),
                     textUnderlineOffset: '3px',
                     textDecorationStyle: 'decoration-solid',
                     code: { color: theme('colors.blue.400') },
                  },
                  blockquote: {
                     borderLeftColor: theme(teal500),
                     backgroundColor: theme('colors.slate.100'),
                     color: theme(gray700),
                  },
                  'h1,h2,h3,h4': {
                     color: theme('colors.gray.900'),
                  },
                  strong: { color: theme(gray700) },
                  hr: {
                     borderColor: theme(gray700),
                     color: theme('colors.gray.200'),
                     '&before': { content: '∿∿∿' },
                  },
                  code: { color: theme('colors.indigo.500') },
                  'blockquote p:first-of-type::before': false,
                  'blockquote p:last-of-type::after': false,
                  pre: {
                     backgroundColor: theme(gray100),
                  },
               },
            },
            dark: {
               css: {
                  color: theme('colors.slate.300'),
                  a: {
                     color: theme('colors.slate.50'),
                     '&:hover': {
                        color: theme(teal500),
                     },
                     textDecorationColor: theme('colors.teal.400'),
                     textUnderlineOffset: '3px',
                     textDecorationStyle: 'decoration-solid',
                     code: { color: theme('colors.blue.400') },
                  },
                  blockquote: {
                     borderLeftColor: theme(teal500),
                     backgroundColor: theme('colors.slate.800'),
                     color: theme('colors.gray.400'),
                  },
                  'h1,h2,h3,h4': {
                     color: theme('colors.white'),
                  },
                  hr: { borderColor: theme('colors.gray.600') },
                  strong: { color: theme(gray100) },
                  thead: {
                     color: theme(gray100),
                     borderBottomColor: theme('colors.gray.600'),
                  },
                  tbody: {
                     tr: {
                        borderBottomColor: theme(gray700),
                     },
                  },
                  code: { color: theme('colors.indigo.200') },
                  pre: {
                     backgroundColor: theme('colors.midnight'),
                  },
               },
            },
         }),
         keyframes: ({ theme }) => ({
            mutation: {
               '0%': {
                  background: theme('colors.rose.200 / 3%'),
               },
               '10%': {
                  background: theme('colors.rose.200 / 15%'),
                  color: theme('colors.rose.200 / 75%'),
               },
               '100%': {
                  background: theme('colors.rose.200 / 0%'),
               },
            },
            emoji: {
               '0%': {
                  opacity: '0',
                  transform: 'translateY(0) scale(0)',
               },
               '50%': {
                  opacity: '1',
                  transform: 'translateY(-40px) scale(1)',
               },
               to: {
                  opacity: '0',
                  transform: 'translateY(-60px) scale(1.4)',
               },
            },
            loading: {
               '0%': {
                  opacity: '.2',
               },
               '20%': {
                  opacity: '1',
                  transform: 'translateX(1px)',
               },
               to: {
                  opacity: '.2',
               },
            },
            shimmer: {
               '100%': {
                  transform: 'translateX(100%)',
               },
            },
         }),
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
         spacing: {
            98: '40rem',
            97: '28rem',
            4.5: '4.5rem',
            100: '46rem',
            '29%': '29%',
            '15%': '15%',
            30.5: '30.5rem',
            50: '50rem',
         },
      },
   },

   plugins: [
      require('@tailwindcss/typography'),
      require('tailwind-scrollbar')({ nocompatible: true }),
   ],
};
