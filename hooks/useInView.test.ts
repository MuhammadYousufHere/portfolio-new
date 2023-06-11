// import { renderHook } from '@testing-library/react';
// import { useRef } from 'react';
// import { useInView } from './useInView';

// describe('useInView', () => {
//    beforeAll(() => {
//       // Mock the properties and methods used by the hook
//       Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
//       Object.defineProperty(window, 'innerHeight', { value: 500 });
//    });

//    afterAll(() => {
//       // Restore the original properties and methods
//       delete (window as any).scrollY;
//       delete (window as any).innerHeight;
//    });

//    it('should return initial values', () => {
//       const ref = useRef<HTMLDivElement>(null);
//       const { result } = renderHook(() => useInView({ elRef: ref }));

//       expect(result.current).toEqual({
//          inView: true,
//          scrollUp: false,
//          lastYPos: 0,
//       });
//    });

//    it('should update inView state when element is in view', () => {
//       const ref = useRef<HTMLDivElement>(null);
//       const { result } = renderHook(() => useInView({ elRef: ref }));

//       expect(result.current.inView).toBe(true);

//       // Simulate scrolling
//       Object.defineProperty(window, 'scrollY', { value: 300, writable: true });
//       window.dispatchEvent(new Event('scroll'));

//       expect(result.current.inView).toBe(false);
//    });

//    it('should update scrollUp state when scrolling up', () => {
//       const ref = useRef<HTMLDivElement>(null);
//       const { result } = renderHook(() => useInView({ elRef: ref }));

//       expect(result.current.scrollUp).toBe(false);

//       // Simulate scrolling up
//       Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
//       window.dispatchEvent(new Event('scroll'));

//       expect(result.current.scrollUp).toBe(true);
//    });

//    it('should clean up event listener on unmount', () => {
//       const ref = useRef<HTMLDivElement>(null);
//       const { unmount } = renderHook(() => useInView({ elRef: ref }));

//       expect(window.removeEventListener).not.toHaveBeenCalled();

//       unmount();

//       expect(window.removeEventListener).toHaveBeenCalled();
//    });

//    it('should handle optional offset parameter', () => {
//       const ref = useRef<HTMLDivElement>(null);
//       const { result } = renderHook(() =>
//          useInView({ elRef: ref, offset: 50 })
//       );

//       expect(result.current.inView).toBe(false);
//    });
// });
