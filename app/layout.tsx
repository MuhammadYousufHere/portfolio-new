import { type ReactNode } from 'react';
import '@my/styles/globals.css';
import ThemeProvider from '@my/lib/ThemeProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'MY Portfolio | Home',
   description: 'My official profile',

   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
   },
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: 'white' },
      { media: '(prefers-color-scheme: dark)', color: '#131325' },
   ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider defaultTheme="system" enableSystem>
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}
