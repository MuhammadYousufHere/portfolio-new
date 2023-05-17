const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   darkMode: 'class',
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
            sans: ['var(--font-hubot)', ...defaultTheme.fontFamily.sans],
         },
         colors: {
            gray: colors.stone,
            subHead: '#34495e',
         },
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
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
}
