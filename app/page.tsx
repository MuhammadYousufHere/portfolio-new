'use client';

import WorkInProgress from '@my/components/WIP';
import { ThemeProvider } from 'next-themes';

// const preferDarkSchema =
//    window.matchMedia &&
//    window.matchMedia('(prefers-color-scheme: dark)').matches;
// const defaultTheme = preferDarkSchema ? 'dark' : 'light';
export default function Home() {
   return (
      <ThemeProvider attribute="class" defaultTheme="dark">
         <main className="flex min-h-screen flex-col items-center justify-between px-5 dark:bg-bg-dark">
            <WorkInProgress />
         </main>
      </ThemeProvider>
   );
}
