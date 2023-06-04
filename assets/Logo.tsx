import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LogoDark } from './Logo.dark';
import { LogoLight } from './Logo.light';

export function Logo() {
   const isDark = useTheme().resolvedTheme === 'dark';
   const [isMounted, setIsMounted] = useState<boolean>(false);
   useEffect(() => {
      setIsMounted(true);
   }, []);
   if (!isMounted) {
      return null;
   }
   return isDark ? <LogoDark /> : <LogoLight />;
}
