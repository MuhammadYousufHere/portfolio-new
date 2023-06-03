import { type ReactNode } from 'react';
import '@my/styles/globals.css';
import ThemeProvider from '@my/components/Provider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'MY Portfolio | Home',
   description: 'My official profile',
   icons: {
      icon: '/favicon.ico',
      shortcut: { url: '/favicon.ico', type: 'image/svg' },
   },
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider>{children}</ThemeProvider>
         </body>
      </html>
   );
}
