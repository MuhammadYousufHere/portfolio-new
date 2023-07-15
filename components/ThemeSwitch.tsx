'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';

export function ThemeSwitch() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme, resolvedTheme } = useTheme();

   // When mounted on client, now we can show the UI
   useEffect(() => setMounted(true), []);

   return (
      <motion.button
         id="theme-btn"
         aria-label="Toggle Dark Mode"
         type="button"
         className="ml-1 h-8 w-8 rounded p-1 text-slate-900 dark:text-white"
         whileTap={{
            scale: 0.7,
            rotate: 360,
            transition: { duration: 0.2 },
         }}
         whileHover={{ scale: 1.2 }}
         onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
         {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
            <BsSunFill size={16} />
         ) : (
            <BsMoonFill size={18} />
         )}
      </motion.button>
   );
}
