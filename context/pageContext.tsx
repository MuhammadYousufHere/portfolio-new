import Lenis from '@studio-freight/lenis';
import {
   createContext,
   useCallback,
   useContext,
   useEffect,
   useLayoutEffect,
   useMemo,
   useRef,
   useState,
   type PropsWithChildren,
} from 'react';

export const PageContext = createContext<{
   lenis: Lenis | null;
} | null>(null);

export const PageProvider = ({ children }: PropsWithChildren) => {
   const [lenis, setLenis] = useState<Lenis | null>(null);
   const reqIdRef = useRef<number | null>(null);
   const raf = useCallback(
      (time: number) => {
         lenis?.raf(time);
         requestAnimationFrame(raf);
      },
      [lenis]
   );
   useEffect(() => {
      const animate = (time: number) => {
         lenis?.raf(time);
         reqIdRef.current = requestAnimationFrame(animate);
      };
      reqIdRef.current = requestAnimationFrame(animate);
      return () => {
         if (reqIdRef.current) {
            cancelAnimationFrame(reqIdRef.current);
         }
      };
   }, [lenis]);

   useLayoutEffect(() => {
      const lenis = new Lenis({
         duration: 1,
         easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
         orientation: 'vertical',
         gestureOrientation: 'vertical',
         smoothWheel: true,
         smoothTouch: false,
         touchMultiplier: 2,
      });

      setLenis(lenis);

      return () => {
         lenis.destroy();
         setLenis(null);
      };
   }, []);
   const memoedValue = useMemo(
      () => ({
         lenis,
      }),
      [lenis]
   );

   return (
      <PageContext.Provider value={memoedValue}>
         {children}
      </PageContext.Provider>
   );
};
export default function usePage() {
   return useContext(PageContext);
}
