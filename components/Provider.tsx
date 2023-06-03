'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

// const preferDarkSchema =
//    window.matchMedia &&
//    window.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = preferDarkSchema ? 'dark' : 'light';
export function Provider({ children }: { children: React.ReactNode }) {
   return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default Provider;
