const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

const gray700 = 'colors.gray.700';
const gray100 = 'colors.gray.100';
const teal500 = 'colors.teal.500';
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './common/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './assets/**/*.{js,ts,jsx,tsx,mdx}',
      './lib/**/*.{js,ts,jsx,tsx,mdx}',
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
         width: {
            scrolling: '400%',
         },
         fontFamily: {
            sans: ['Inter', 'DM Sans', ...defaultTheme.fontFamily.sans],
            mono: [...defaultTheme.fontFamily.mono],
            headings: ['Manrope', ...defaultTheme.fontFamily.sans],
            fancy: ['Sriracha'],
         },
         gridTemplateColumns: {
            2: 'repeat(2, auto)',
            3: 'repeat(3, auto)',
            4: 'repeat(4, auto)',
         },
         colors: {
            gray: colors.stone,
            orange: colors.orange,
            blueGray: colors.slate,
            coolGray: colors.gray,
            coal: '#0b0b0b',
            teal: colors.teal,
            dark: '#111827',
            darker: '#0d131f',
            midnight: '#1e293b',
            'midnight-hover': '#334155',
            light: '#878593',
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
         dasharray: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            10: '10',
            15: '15',
            20: '20',
            300: '300',
         },
         dashoffset: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            10: '10',
            15: '15',
            20: '20',
            300: '300',
         },
         animation: {
            fluid: '5s linear 0s infinite alternate fluid',
            fadeIn: '5s ease 0s infinite alternate fadeIn',
            lemniscate: 'lemniscate 2s linear infinite',
            handmove: 'handmove 1.5s ease-in-out 1s infinite',
         },
         keyframes: ({ theme }) => ({
            lemniscate: {
               '0%': { strokeDashoffset: '0' },
               '100%': { strokeDashoffset: '256' },
            },
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
            fluid: {
               '0%': {
                  transform: 'rotate(0deg) scale(1, 1)',
                  filter: 'blur(5rem) hue-rotate(0deg)',
               },
               '50%': {
                  transform: 'rotate(60deg) scale(1.5, 1.2)',
                  filter: 'blue(10rem) hue-rotate(40deg)',
               },
               '100%': {
                  transform: 'rotate(90deg) scale(1, 1.5)',
                  filter: 'blur(8rem) hue-rotate(-30deg)',
               },
            },
            handmove: {
               '0%, 100%': { transform: 'rotate(-8deg)' },
               '50%': { transform: 'rotate(8deg)' },
            },
            fadeIn: {
               '0%': {
                  opacity: 0,
               },
               '100%': {
                  opacity: 1,
               },
            },
         }),
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
               'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            'linear-grad':
               'linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C',
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
      plugin(({ matchUtilities, theme }) => {
         matchUtilities(
            {
               dasharray: (value) => ({
                  strokeDasharray: value,
               }),
            },
            { values: theme('dasharray') }
         );
      }),
      plugin(({ matchUtilities, theme }) => {
         matchUtilities(
            {
               dashoffset: (value) => ({
                  strokeDashoffset: value,
               }),
            },
            { values: theme('dashoffset') }
         );
      }),
      plugin(({ addVariant }) => {
         addVariant('inview', '&.is-inview');
      }),
   ],
};
