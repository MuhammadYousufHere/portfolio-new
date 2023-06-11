'use client';

import { ThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import React from 'react';

// const preferDarkSchema =
//    window.matchMedia &&
//    window.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = preferDarkSchema ? 'dark' : 'light';
export function Provider({ children, ...props }: ThemeProviderProps) {
   return (
      <ThemeProvider attribute="class" {...props}>
         {children}
      </ThemeProvider>
   );
}

export default Provider;
